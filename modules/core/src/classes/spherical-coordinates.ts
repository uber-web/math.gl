// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
// Adaptation of THREE.js Spherical class, under MIT license
import Vector3 from './vector3';
import {formatValue, equals, config} from '../lib/common';
import {degrees, radians, clamp} from '../lib/common';
import * as vec3 from 'gl-matrix/vec3';
import {NumericArray} from '@math.gl/types';

type SphericalCoordinatesOptions = {
  phi?: number;
  theta?: number;
  radius?: number;
  bearing?: number;
  pitch?: number;
  altitude?: number;
  radiusScale?: number;
};

type FormatOptions = {
  printTypes?: boolean;
};

// TODO - import epsilon
const EPSILON = 0.000001;
const EARTH_RADIUS_METERS = 6371000;

/**
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.
 * @link https://en.wikipedia.org/wiki/Spherical_coordinate_system
 */
export default class SphericalCoordinates {
  phi: number;
  theta: number;
  radius: number;
  radiusScale: number;
  // bearing: number;
  // pitch: number;
  // altitude: number;

  // lnglatZ coordinates
  // longitude: number;
  // latitude: number;
  // lng: number;
  // lat: number;
  // z: number;

  /**
   * Creates a new SphericalCoordinates object
   * @param options
   * @param [options.phi] =0 - rotation around X (latitude)
   * @param [options.theta] =0 - rotation around Y (longitude)
   * @param [options.radius] =1 - Distance from center
   * @param [options.bearing]
   * @param [options.pitch]
   * @param [options.altitude]
   * @param [options.radiusScale] =1
   */
  // eslint-disable-next-line complexity
  constructor({
    phi = 0,
    theta = 0,
    radius = 1,
    bearing,
    pitch,
    altitude,
    radiusScale = EARTH_RADIUS_METERS
  }: SphericalCoordinatesOptions = {}) {
    this.phi = phi;
    this.theta = theta;
    // TODO - silently accepts illegal 0
    this.radius = radius || altitude || 1; // radial distance from center
    this.radiusScale = radiusScale || 1; // Used by lngLatZ
    if (bearing !== undefined) {
      this.bearing = bearing; // up / down towards top and bottom pole
    }
    if (pitch !== undefined) {
      this.pitch = pitch; // around the equator of the sphere
    }
    this.check();
  }

  toString(): string {
    return this.formatString(config);
  }

  formatString({printTypes = false}: FormatOptions): string {
    const f = formatValue;
    return `${printTypes ? 'Spherical' : ''}\
[rho:${f(this.radius)},theta:${f(this.theta)},phi:${f(this.phi)}]`;
  }

  equals(other: SphericalCoordinates): boolean {
    return (
      equals(this.radius, other.radius) &&
      equals(this.theta, other.theta) &&
      equals(this.phi, other.phi)
    );
  }

  exactEquals(other: SphericalCoordinates): boolean {
    return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
  }

  /* eslint-disable brace-style */
  // Cartographic (bearing 0 north, pitch 0 look from above)
  get bearing(): number {
    return 180 - degrees(this.phi);
  }

  set bearing(v: number) {
    this.phi = Math.PI - radians(v);
  }

  get pitch(): number {
    return degrees(this.theta);
  }

  set pitch(v: number) {
    this.theta = radians(v);
  }

  // get pitch() { return 90 - degrees(this.phi); }
  // set pitch(v) { this.phi = radians(v) + Math.PI / 2; }
  // get altitude() { return this.radius - 1; } // relative altitude
  // lnglatZ coordinates
  get longitude(): number {
    return degrees(this.phi);
  }

  get latitude(): number {
    return degrees(this.theta);
  }

  get lng(): number {
    return degrees(this.phi);
  }

  get lat(): number {
    return degrees(this.theta);
  }

  get z(): number {
    return (this.radius - 1) * this.radiusScale;
  }

  /* eslint-enable brace-style */
  set(radius: number, phi: number, theta: number): this {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this.check();
  }

  clone(): SphericalCoordinates {
    return new SphericalCoordinates().copy(this);
  }

  copy(other: SphericalCoordinates): this {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;
    return this.check();
  }

  fromLngLatZ([lng, lat, z]: [number, number, number]): this {
    this.radius = 1 + z / this.radiusScale;
    this.phi = radians(lat);
    this.theta = radians(lng);
    return this.check();
  }

  fromVector3(v: Readonly<NumericArray>): this {
    this.radius = vec3.length(v);
    if (this.radius > 0) {
      this.theta = Math.atan2(v[0], v[1]); // equator angle around y-up axis
      this.phi = Math.acos(clamp(v[2] / this.radius, -1, 1)); // polar angle
    }
    return this.check();
  }

  toVector3(): Vector3 {
    return new Vector3(0, 0, this.radius)
      .rotateX({radians: this.theta})
      .rotateZ({radians: this.phi});
  }

  // restrict phi to be betwee EPS and PI-EPS
  makeSafe(): this {
    this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    return this;
  }

  check(): this {
    // this.makeSafe();
    if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
      throw new Error('SphericalCoordinates: some fields set to invalid numbers');
    }
    return this;
  }
}
