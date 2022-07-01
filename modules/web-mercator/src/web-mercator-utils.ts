// TODO - THE UTILITIES IN THIS FILE SHOULD BE IMPORTED FROM WEB-MERCATOR-VIEWPORT MODULE

import {createMat4, transformVector, clamp, log2} from './math-utils';

import * as mat4 from 'gl-matrix/mat4';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';
import assert from './assert';

// CONSTANTS
const PI = Math.PI;
const PI_4 = PI / 4;
const DEGREES_TO_RADIANS = PI / 180;
const RADIANS_TO_DEGREES = 180 / PI;
const TILE_SIZE = 512;
// Average circumference (40075 km equatorial, 40007 km meridional)
const EARTH_CIRCUMFERENCE = 40.03e6;
// Latitude that makes a square world, 2 * atan(E ** PI) - PI / 2
export const MAX_LATITUDE = 85.051129;

// Mapbox default altitude
export const DEFAULT_ALTITUDE = 1.5;

export type DistanceScales = {
  unitsPerMeter: number[];
  metersPerUnit: number[];
  unitsPerMeter2?: number[];
  unitsPerDegree: number[];
  degreesPerUnit: number[];
  unitsPerDegree2?: number[];
};

/**
 * PROJECTION MATRIX PARAMETERS
 *
 * TODO how to document mebers
 * @param fov in radians. fov is variable, depends on pitch and altitude
 * @param aspect width/height
 * @param focalDistance distance at which visual scale factor is 1
 * @param near near clipping plane
 * @param far far clipping plane
 */
type ProjectionParameters = {
  fov: number;
  aspect: number;
  focalDistance: number;
  near: number;
  far: number;
};

/** Logarithimic zoom to linear scale **/
export function zoomToScale(zoom: number): number {
  return Math.pow(2, zoom);
}

/** Linear scale to logarithimic zoom **/
export function scaleToZoom(scale: number): number {
  return log2(scale);
}

/**
 * Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
 * Performs the nonlinear part of the web mercator projection.
 * Remaining projection is done with 4x4 matrices which also handles
 * perspective.
 *
 * @param lngLat - [lng, lat] coordinates
 *   Specifies a point on the sphere to project onto the map.
 * @return [x,y] coordinates.
 */
export function lngLatToWorld(lngLat: number[]): [number, number] {
  const [lng, lat] = lngLat;
  assert(Number.isFinite(lng));
  assert(Number.isFinite(lat) && lat >= -90 && lat <= 90, 'invalid latitude');

  const lambda2 = lng * DEGREES_TO_RADIANS;
  const phi2 = lat * DEGREES_TO_RADIANS;
  const x = (TILE_SIZE * (lambda2 + PI)) / (2 * PI);
  const y = (TILE_SIZE * (PI + Math.log(Math.tan(PI_4 + phi2 * 0.5)))) / (2 * PI);
  return [x, y];
}

/**
 * Unproject world point [x,y] on map onto {lat, lon} on sphere
 *
 * @param xy - array with [x,y] members
 *  representing point on projected map plane
 * @return - array with [x,y] of point on sphere.
 *   Has toArray method if you need a GeoJSON Array.
 *   Per cartographic tradition, lat and lon are specified as degrees.
 */
export function worldToLngLat(xy: number[]): [number, number] {
  const [x, y] = xy;
  const lambda2 = (x / TILE_SIZE) * (2 * PI) - PI;
  const phi2 = 2 * (Math.atan(Math.exp((y / TILE_SIZE) * (2 * PI) - PI)) - PI_4);
  return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
}

/**
 * Returns the zoom level that gives a 1 meter pixel at a certain latitude
 * 1 = C*cos(y)/2^z/TILE_SIZE = C*cos(y)/2^(z+9)
 */
export function getMeterZoom(options: {latitude: number}): number {
  const {latitude} = options;
  assert(Number.isFinite(latitude));
  const latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  return scaleToZoom(EARTH_CIRCUMFERENCE * latCosine) - 9;
}

/**
 * Calculate the conversion from meter to common units at a given latitude
 * This is a cheaper version of `getDistanceScales`
 * @param latitude center latitude in degrees
 * @returns common units per meter
 */
export function unitsPerMeter(latitude: number): number {
  const latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  return TILE_SIZE / EARTH_CIRCUMFERENCE / latCosine;
}

/**
 * Calculate distance scales in meters around current lat/lon, both for
 * degrees and pixels.
 * In mercator projection mode, the distance scales vary significantly
 * with latitude.
 */
export function getDistanceScales(options: {
  latitude: number;
  longitude: number;
  highPrecision?: boolean;
}): DistanceScales {
  const {latitude, longitude, highPrecision = false} = options;
  assert(Number.isFinite(latitude) && Number.isFinite(longitude));

  const worldSize = TILE_SIZE;
  const latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);

  /**
   * Number of pixels occupied by one degree longitude around current lat/lon:
     unitsPerDegreeX = d(lngLatToWorld([lng, lat])[0])/d(lng)
       = scale * TILE_SIZE * DEGREES_TO_RADIANS / (2 * PI)
     unitsPerDegreeY = d(lngLatToWorld([lng, lat])[1])/d(lat)
       = -scale * TILE_SIZE * DEGREES_TO_RADIANS / cos(lat * DEGREES_TO_RADIANS)  / (2 * PI)
   */
  const unitsPerDegreeX = worldSize / 360;
  const unitsPerDegreeY = unitsPerDegreeX / latCosine;

  /**
   * Number of pixels occupied by one meter around current lat/lon:
   */
  const altUnitsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;

  /**
   * LngLat: longitude -> east and latitude -> north (bottom left)
   * UTM meter offset: x -> east and y -> north (bottom left)
   * World space: x -> east and y -> south (top left)
   *
   * Y needs to be flipped when converting delta degree/meter to delta pixels
   */
  const result: DistanceScales = {
    unitsPerMeter: [altUnitsPerMeter, altUnitsPerMeter, altUnitsPerMeter],
    metersPerUnit: [1 / altUnitsPerMeter, 1 / altUnitsPerMeter, 1 / altUnitsPerMeter],

    unitsPerDegree: [unitsPerDegreeX, unitsPerDegreeY, altUnitsPerMeter],
    degreesPerUnit: [1 / unitsPerDegreeX, 1 / unitsPerDegreeY, 1 / altUnitsPerMeter]
  };

  /**
   * Taylor series 2nd order for 1/latCosine
     f'(a) * (x - a)
       = d(1/cos(lat * DEGREES_TO_RADIANS))/d(lat) * dLat
       = DEGREES_TO_RADIANS * tan(lat * DEGREES_TO_RADIANS) / cos(lat * DEGREES_TO_RADIANS) * dLat
   */
  if (highPrecision) {
    const latCosine2 = (DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS)) / latCosine;
    const unitsPerDegreeY2 = (unitsPerDegreeX * latCosine2) / 2;
    const altUnitsPerDegree2 = (worldSize / EARTH_CIRCUMFERENCE) * latCosine2;
    const altUnitsPerMeter2 = (altUnitsPerDegree2 / unitsPerDegreeY) * altUnitsPerMeter;

    result.unitsPerDegree2 = [0, unitsPerDegreeY2, altUnitsPerDegree2];
    result.unitsPerMeter2 = [altUnitsPerMeter2, 0, altUnitsPerMeter2];
  }

  // Main results, used for converting meters to latlng deltas and scaling offsets
  return result;
}

/**
 * Offset a lng/lat position by meterOffset (northing, easting)
 */
export function addMetersToLngLat(lngLatZ: number[], xyz: number[]): number[] {
  const [longitude, latitude, z0] = lngLatZ;
  const [x, y, z] = xyz;

  const {unitsPerMeter, unitsPerMeter2} = getDistanceScales({
    longitude,
    latitude,
    highPrecision: true
  });

  const worldspace = lngLatToWorld(lngLatZ);
  worldspace[0] += x * (unitsPerMeter[0] + unitsPerMeter2[0] * y);
  worldspace[1] += y * (unitsPerMeter[1] + unitsPerMeter2[1] * y);

  const newLngLat = worldToLngLat(worldspace);
  const newZ = (z0 || 0) + (z || 0);

  return Number.isFinite(z0) || Number.isFinite(z) ? [newLngLat[0], newLngLat[1], newZ] : newLngLat;
}

/**
 *
 * view and projection matrix creation is intentionally kept compatible with
 * mapbox-gl's implementation to ensure that seamless interoperation
 * with mapbox and react-map-gl. See: https://github.com/mapbox/mapbox-gl-js
 */
export function getViewMatrix(options: {
  // Viewport props
  height: number;
  pitch: number;
  bearing: number;
  altitude: number;
  // Pre-calculated parameters
  scale: number;
  center?: number[];
}): number[] {
  const {
    // Viewport props
    height,
    pitch,
    bearing,
    altitude,
    // Pre-calculated parameters
    scale,
    center
  } = options;
  // VIEW MATRIX: PROJECTS MERCATOR WORLD COORDINATES
  // Note that mercator world coordinates typically need to be flipped
  //
  // Note: As usual, matrix operation orders should be read in reverse
  // since vectors will be multiplied from the right during transformation
  const vm = createMat4();

  // Move camera to altitude (along the pitch & bearing direction)
  mat4.translate(vm, vm, [0, 0, -altitude]);

  // Rotate by bearing, and then by pitch (which tilts the view)
  mat4.rotateX(vm, vm, -pitch * DEGREES_TO_RADIANS);
  mat4.rotateZ(vm, vm, bearing * DEGREES_TO_RADIANS);

  const relativeScale = scale / height;
  mat4.scale(vm, vm, [relativeScale, relativeScale, relativeScale]);

  if (center) {
    mat4.translate(vm, vm, vec3.negate([], center));
  }

  return vm;
}

/**
 * Calculates mapbox compatible projection matrix from parameters
 *
 * @param options.width Width of "viewport" or window
 * @param options.height Height of "viewport" or window
 * @param options.scale Scale at the current zoom
 * @param options.center Offset of the target, vec3 in world space
 * @param options.offset Offset of the focal point, vec2 in screen space
 * @param options.pitch Camera angle in degrees (0 is straight down)
 * @param options.fovy field of view in degrees
 * @param options.altitude if provided, field of view is calculated using `altitudeToFovy()`
 * @param options.nearZMultiplier control z buffer
 * @param options.farZMultiplier control z buffer
 * @returns project parameters object
 */
export function getProjectionParameters(options: {
  width: number;
  height: number;
  scale?: number;
  center?: number[];
  offset?: [number, number];
  fovy?: number;
  altitude?: number;
  pitch?: number;
  nearZMultiplier?: number;
  farZMultiplier?: number;
}): ProjectionParameters {
  const {
    width,
    height,
    altitude,
    pitch = 0,
    offset,
    center,
    scale,
    nearZMultiplier = 1,
    farZMultiplier = 1
  } = options;
  let {fovy = altitudeToFovy(DEFAULT_ALTITUDE)} = options;

  // For back-compatibility allow field of view to be
  // derived from altitude
  if (altitude !== undefined) {
    fovy = altitudeToFovy(altitude);
  }

  const fovRadians = fovy * DEGREES_TO_RADIANS;
  const pitchRadians = pitch * DEGREES_TO_RADIANS;

  // Distance from camera to the target
  const focalDistance = fovyToAltitude(fovy);

  let cameraToSeaLevelDistance = focalDistance;

  if (center) {
    cameraToSeaLevelDistance += (center[2] * scale) / Math.cos(pitchRadians) / height;
  }

  const fovAboveCenter = fovRadians * (0.5 + (offset ? offset[1] : 0) / height);

  // Find the distance from the center point to the center top
  // in focal distance units using law of sines.
  const topHalfSurfaceDistance =
    (Math.sin(fovAboveCenter) * cameraToSeaLevelDistance) /
    Math.sin(clamp(Math.PI / 2 - pitchRadians - fovAboveCenter, 0.01, Math.PI - 0.01));

  // Calculate z distance of the farthest fragment that should be rendered.
  const furthestDistance =
    Math.sin(pitchRadians) * topHalfSurfaceDistance + cameraToSeaLevelDistance;
  // Matches mapbox limit
  const horizonDistance = cameraToSeaLevelDistance * 10;

  // Calculate z value of the farthest fragment that should be rendered.
  const farZ = Math.min(furthestDistance * farZMultiplier, horizonDistance);

  return {
    fov: fovRadians,
    aspect: width / height,
    focalDistance,
    near: nearZMultiplier,
    far: farZ
  };
}

/**
 * CALCULATE PROJECTION MATRIX: PROJECTS FROM CAMERA (VIEW) SPACE TO CLIPSPACE
 *
 * To match mapbox's z buffer:
 *  - \<= 0.28: nearZMultiplier: 0.1, farZmultiplier: 1
 *  - \>= 0.29: nearZMultiplier: 1 / height, farZMultiplier: 1.01
 *
 * @param options Viewport options
 * @param options.width Width of "viewport" or window
 * @param options.height Height of "viewport" or window
 * @param options.scale Scale at the current zoom
 * @param options.center Offset of the target, vec3 in world space
 * @param options.offset Offset of the focal point, vec2 in screen space
 * @param options.pitch Camera angle in degrees (0 is straight down)
 * @param options.fovy field of view in degrees
 * @param options.altitude if provided, field of view is calculated using `altitudeToFovy()`
 * @param options.nearZMultiplier control z buffer
 * @param options.farZMultiplier control z buffer
 * @returns 4x4 projection matrix
 */
export function getProjectionMatrix(options: {
  width: number;
  height: number;
  pitch: number;
  scale?: number;
  center?: number[];
  offset?: [number, number];
  fovy?: number;
  altitude?: number;
  nearZMultiplier: number;
  farZMultiplier: number;
}): number[] {
  const {fov, aspect, near, far} = getProjectionParameters(options);

  const projectionMatrix = mat4.perspective(
    [] as number[],
    fov, // fov in radians
    aspect, // aspect ratio
    near, // near plane
    far // far plane
  );

  return projectionMatrix;
}

/**
 *
 * Convert an altitude to field of view such that the
 * focal distance is equal to the altitude
 *
 * @param altitude - altitude of camera in screen units
 * @return fovy field of view in degrees
 */
export function altitudeToFovy(altitude: number): number {
  return 2 * Math.atan(0.5 / altitude) * RADIANS_TO_DEGREES;
}

/**
 *
 * Convert an field of view such that the
 * focal distance is equal to the altitude
 *
 * @param fovy - field of view in degrees
 * @return altitude altitude of camera in screen units
 */
export function fovyToAltitude(fovy: number): number {
  return 0.5 / Math.tan(0.5 * fovy * DEGREES_TO_RADIANS);
}

/**
 * Project flat coordinates to pixels on screen.
 *
 * @param xyz - flat coordinate on 512*512 Mercator Zoom 0 tile
 * @param pixelProjectionMatrix - projection matrix 4x4
 * @return [x, y, depth] pixel coordinate on screen.
 */
export function worldToPixels(xyz: number[], pixelProjectionMatrix: number[]): number[];

// Project flat coordinates to pixels on screen.
export function worldToPixels(xyz: number[], pixelProjectionMatrix: number[]): number[] {
  const [x, y, z = 0] = xyz;
  assert(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));

  return transformVector(pixelProjectionMatrix, [x, y, z, 1]);
}

/**
 * Unproject pixels on screen to flat coordinates.
 *
 * @param xyz - pixel coordinate on screen.
 * @param pixelUnprojectionMatrix - unprojection matrix 4x4
 * @param targetZ - if pixel coordinate does not have a 3rd component (depth),
 *    targetZ is used as the elevation plane to unproject onto
 * @return [x, y, Z] flat coordinates on 512*512 Mercator Zoom 0 tile.
 */
export function pixelsToWorld(
  xyz: number[],
  pixelUnprojectionMatrix: number[],
  targetZ: number = 0
): number[] {
  const [x, y, z] = xyz;
  assert(Number.isFinite(x) && Number.isFinite(y), 'invalid pixel coordinate');

  if (Number.isFinite(z)) {
    // Has depth component
    const coord = transformVector(pixelUnprojectionMatrix, [x, y, z, 1]);
    return coord;
  }

  // since we don't know the correct projected z value for the point,
  // unproject two points to get a line and then find the point on that line with z=0
  const coord0 = transformVector(pixelUnprojectionMatrix, [x, y, 0, 1]);
  const coord1 = transformVector(pixelUnprojectionMatrix, [x, y, 1, 1]);

  const z0 = coord0[2];
  const z1 = coord1[2];

  const t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
  return vec2.lerp([] as number[], coord0, coord1, t);
}
