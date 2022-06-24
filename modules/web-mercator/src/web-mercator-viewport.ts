// View and Projection Matrix calculations for mapbox-js style map view properties
import {createMat4} from './math-utils';

import {
  zoomToScale,
  pixelsToWorld,
  lngLatToWorld,
  worldToLngLat,
  worldToPixels,
  altitudeToFovy,
  fovyToAltitude,
  DEFAULT_ALTITUDE,
  getProjectionMatrix,
  getDistanceScales,
  getViewMatrix,
  DistanceScales
} from './web-mercator-utils';
import fitBounds from './fit-bounds';
import getBounds from './get-bounds';
import type {FitBoundsOptions} from './fit-bounds';

import * as mat4 from 'gl-matrix/mat4';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';

/**
   * @param width=1 - Width of "viewport" or window
   * @param height=1 - Height of "viewport" or window
   * @param scale=1 - Either use scale or zoom
   * @param pitch=0 - Camera angle in degrees (0 is straight down)
   * @param bearing=0 - Map rotation in degrees (0 means north is up)
   * @param fovy= - Field of view of camera in degrees
   * @param altitude= - Altitude of camera in screen units                                                               
   *
   * Web mercator projection short-hand parameters
   * @param latitude - Center of viewport on map
   * @param longitude - Center of viewport on map
   * @param zoom - Scale = Math.pow(2,zoom) on map

   * Notes:
   *  - Only one of center or [latitude, longitude] can be specified
   *  - [latitude, longitude] can only be specified when "mercator" is true
   *  - Altitude has a default value that matches assumptions in mapbox-gl
   *  - Field of view is independent from altitude, provide `altitudeToFovy(1.5)` (default value) to match assumptions in mapbox-gl
   *  - width and height are forced to 1 if supplied as 0, to avoid
   *    division by zero. This is intended to reduce the burden of apps to
   *    to check values before instantiating a Viewport.
 */
export type WebMercatorViewportProps = {
  // Map state
  width: number;
  height: number;
  latitude?: number;
  longitude?: number;
  position?: number[];
  zoom?: number;
  pitch?: number;
  bearing?: number;
  altitude?: number;
  fovy?: number;
  nearZMultiplier?: number;
  farZMultiplier?: number;
};

/**
 * The WebMercatorViewport class creates
 * - view/projection matrices
 * - "uniform values" (for shaders) from mercator params
 *
 * Note: Instances are immutable in the sense that they only have accessors.
 * A new viewport instance should be created if any parameters have changed.
 */
export default class WebMercatorViewport {
  readonly latitude: number;
  readonly longitude: number;
  readonly zoom: number;
  readonly pitch: number;
  readonly bearing: number;
  readonly altitude: number;
  readonly fovy: number;

  readonly meterOffset: number[];
  readonly center: number[];

  readonly width: number;
  readonly height: number;
  readonly scale: number;
  readonly distanceScales: DistanceScales;

  readonly viewMatrix: number[];
  readonly projectionMatrix: number[];

  viewProjectionMatrix: number[];
  pixelProjectionMatrix: number[];
  pixelUnprojectionMatrix: number[];

  /**
   * @classdesc
   * Creates view/projection matrices from mercator params
   * Note: The Viewport is immutable in the sense that it only has accessors.
   * A new viewport instance should be created if any parameters have changed.
   */
  // eslint-disable-next-line max-statements
  constructor(props: WebMercatorViewportProps = {width: 1, height: 1}) {
    let {
      // Map state
      width,
      height,
      altitude = null,
      fovy = null
    } = props;
    const {
      latitude = 0,
      longitude = 0,
      zoom = 0,
      pitch = 0,
      bearing = 0,
      position = null,
      nearZMultiplier = 0.02,
      farZMultiplier = 1.01
    } = props;

    // Silently allow apps to send in 0,0 to facilitate isomorphic render etc
    width = width || 1;
    height = height || 1;

    // `fovy` & `altitude` are independent parameters, one for the
    // projection and the latter for the view matrix. In the past,
    // the `fovy` was always derived from the `altitude`
    if (fovy === null && altitude === null) {
      altitude = DEFAULT_ALTITUDE;
      fovy = altitudeToFovy(altitude);
    } else if (fovy === null) {
      fovy = altitudeToFovy(altitude);
    } else if (altitude === null) {
      altitude = fovyToAltitude(fovy);
    }

    const scale = zoomToScale(zoom);
    // Altitude - prevent division by 0
    // TODO - just throw an Error instead?
    altitude = Math.max(0.75, altitude);

    const distanceScales = getDistanceScales({longitude, latitude});

    const center: number[] = lngLatToWorld([longitude, latitude]);
    center.push(0);

    if (position) {
      vec3.add(center, center, vec3.mul([], position, distanceScales.unitsPerMeter));
    }

    this.projectionMatrix = getProjectionMatrix({
      width,
      height,
      scale,
      center,
      pitch,
      fovy,
      nearZMultiplier,
      farZMultiplier
    });

    this.viewMatrix = getViewMatrix({
      height,
      scale,
      center,
      pitch,
      bearing,
      altitude
    });

    // Save parameters
    this.width = width;
    this.height = height;
    this.scale = scale;

    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.pitch = pitch;
    this.bearing = bearing;
    this.altitude = altitude;
    this.fovy = fovy;
    this.center = center;
    this.meterOffset = position || [0, 0, 0];

    this.distanceScales = distanceScales;

    this._initMatrices();

    Object.freeze(this);
  }

  _initMatrices(): void {
    const {width, height, projectionMatrix, viewMatrix} = this;

    // Note: As usual, matrix operations should be applied in "reverse" order
    // since vectors will be multiplied in from the right during transformation
    const vpm = createMat4();
    mat4.multiply(vpm, vpm, projectionMatrix);
    mat4.multiply(vpm, vpm, viewMatrix);
    this.viewProjectionMatrix = vpm;

    // Calculate matrices and scales needed for projection
    /**
     * Builds matrices that converts preprojected lngLats to screen pixels
     * and vice versa.
     * Note: Currently returns bottom-left coordinates!
     * Note: Starts with the GL projection matrix and adds steps to the
     *       scale and translate that matrix onto the window.
     * Note: WebGL controls clip space to screen projection with gl.viewport
     *       and does not need this step.
     */
    const m = createMat4();

    // matrix for conversion from location to screen coordinates
    mat4.scale(m, m, [width / 2, -height / 2, 1]);
    mat4.translate(m, m, [1, -1, 0]);
    mat4.multiply(m, m, vpm);

    const mInverse = mat4.invert(createMat4(), m);
    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;
  }

  /** Two viewports are equal if width and height are identical, and if
   * their view and projection matrices are (approximately) equal.
   */
  equals = (viewport: WebMercatorViewport | null): boolean => {
    if (!(viewport instanceof WebMercatorViewport)) {
      return false;
    }

    return (
      viewport.width === this.width &&
      viewport.height === this.height &&
      mat4.equals(viewport.projectionMatrix, this.projectionMatrix) &&
      mat4.equals(viewport.viewMatrix, this.viewMatrix)
    );
  };

  /**
   * Projects xyz (possibly latitude and longitude) to pixel coordinates in window
   * using viewport projection parameters
   * - [longitude, latitude] to [x, y]
   * - [longitude, latitude, Z] => [x, y, z]
   * Note: By default, returns top-left coordinates for canvas/SVG type render
   *
   * @param lngLatZ - [lng, lat] or [lng, lat, Z]
   * @param options - options
   * @param options.topLeft=true - Whether projected coords are top left
   * @return - screen coordinates [x, y] or [x, y, z], z as pixel depth
   */
  project = (lngLatZ: number[], options: {topLeft?: boolean} = {}): number[] => {
    const {topLeft = true} = options;
    const worldPosition = this.projectPosition(lngLatZ);
    const coord = worldToPixels(worldPosition, this.pixelProjectionMatrix);

    const [x, y] = coord;
    const y2 = topLeft ? y : this.height - y;
    return lngLatZ.length === 2 ? [x, y2] : [x, y2, coord[2]];
  };

  /**
   * Unproject pixel coordinates on screen onto world coordinates, possibly `[lon, lat]` on map.
   *
   * - [x, y] => [lng, lat]
   * - [x, y, z] => [lng, lat, Z]
   *
   * @param xyz - screen coordinates, z as pixel depth
   * @param options - options
   * @param options.topLeft=true - Whether projected coords are top left
   * @param options.targetZ=0 - If pixel depth is unknown, targetZ is used as
   *   the elevation plane to unproject onto
   * @return - [lng, lat, Z] or [X, Y, Z]
   */
  unproject = (xyz: number[], options: {topLeft?: boolean; targetZ?: number} = {}): number[] => {
    const {topLeft = true, targetZ = undefined} = options;
    const [x, y, z] = xyz;

    const y2 = topLeft ? y : this.height - y;
    const targetZWorld = targetZ && targetZ * this.distanceScales.unitsPerMeter[2];
    const coord = pixelsToWorld([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);
    const [X, Y, Z] = this.unprojectPosition(coord);

    if (Number.isFinite(z)) {
      return [X, Y, Z];
    }
    return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
  };

  // NON_LINEAR PROJECTION HOOKS
  // Used for web meractor projection

  projectPosition = (xyz: number[]): [number, number, number] => {
    const [X, Y] = lngLatToWorld(xyz);
    const Z = (xyz[2] || 0) * this.distanceScales.unitsPerMeter[2];
    return [X, Y, Z];
  };

  unprojectPosition = (xyz: number[]): [number, number, number] => {
    const [X, Y] = worldToLngLat(xyz);
    const Z = (xyz[2] || 0) * this.distanceScales.metersPerUnit[2];
    return [X, Y, Z];
  };

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
  projectFlat(lngLat: number[]): number[] {
    return lngLatToWorld(lngLat);
  }

  /**
   * Unproject world point [x,y] on map onto {lat, lon} on sphere
   *
   * @param xy - array with [x,y] members
   *  representing point on projected map plane
   * @return - array with [lat,lon] of point on sphere.
   *   Has toArray method if you need a GeoJSON Array.
   *   Per cartographic tradition, lat and lon are specified as degrees.
   */
  unprojectFlat(xy: number[]): number[] {
    return worldToLngLat(xy);
  }

  /**
   * Get the map center that place a given [lng, lat] coordinate at screen point [x, y]
   * @param opt
   * @param opt.lngLat - [lng,lat] coordinates
   *   Specifies a point on the sphere.
   * @param opt.pos - [x,y] coordinates
   *   Specifies a point on the screen.
   * @return [lng,lat] new map center.
   */
  getMapCenterByLngLatPosition({lngLat, pos}: {lngLat: number[]; pos: number[]}): number[] {
    const fromLocation = pixelsToWorld(pos, this.pixelUnprojectionMatrix);
    const toLocation = lngLatToWorld(lngLat);
    const translate = vec2.add([], toLocation, vec2.negate([], fromLocation));
    const newCenter = vec2.add([], this.center, translate);
    return worldToLngLat(newCenter);
  }

  /**
   * Returns a new viewport that fit around the given rectangle.
   * Only supports non-perspective mode.
   * @param bounds - [[lon, lat], [lon, lat]]
   * @param [options]
   * @param [options.padding] - The amount of padding in pixels to add to the given bounds.
   * @param [options.offset] - The center of the given bounds relative to the map's center,
   *    [x, y] measured in pixels.
   * @returns {WebMercatorViewport}
   */
  fitBounds(
    bounds: [[number, number], [number, number]],
    options: Omit<FitBoundsOptions, 'width' | 'height' | 'bounds'> = {}
  ): WebMercatorViewport {
    const {width, height} = this;
    const {longitude, latitude, zoom} = fitBounds(Object.assign({width, height, bounds}, options));
    return new WebMercatorViewport({width, height, longitude, latitude, zoom});
  }

  /**
   * Returns the bounding box of the viewport.
   * @param [options]
   * @param [options.z] - The altitude at which the bounds should be calculated.
   * @returns {Array} bounds - [[lon, lat], [lon, lat]]
   */
  getBounds(options?: {z?: number}): number[][] {
    const corners = this.getBoundingRegion(options);

    const west = Math.min(...corners.map((p) => p[0]));
    const east = Math.max(...corners.map((p) => p[0]));
    const south = Math.min(...corners.map((p) => p[1]));
    const north = Math.max(...corners.map((p) => p[1]));
    return [
      [west, south],
      [east, north]
    ];
  }

  /**
   * Returns the bounding box of the viewport.
   * @param [options]
   * @param [options.z] - The altitude at which the bounds should be calculated.
   * @returns {Array} an array of 4 points that define the visible region
   */
  getBoundingRegion(options: {z?: number} = {}): number[][] {
    return getBounds(this, options.z || 0);
  }

  // DEPRECATED

  /** @deprecated Legacy method name */
  getLocationAtPoint({lngLat, pos}: {lngLat: number[]; pos: number[]}): number[] {
    return this.getMapCenterByLngLatPosition({lngLat, pos});
  }
}
