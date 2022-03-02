// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import {
  Vector3,
  Matrix4,
  toRadians,
  toDegrees,
  assert,
  equals,
  _MathUtils,
  NumericArray
} from '@math.gl/core';
import * as vec3 from 'gl-matrix/vec3';

import {WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z} from '../constants';
import {fromCartographicToRadians, toCartographicFromRadians} from '../type-utils';

import scaleToGeodeticSurface from './helpers/scale-to-geodetic-surface';
import localFrameToFixedFrame from './helpers/ellipsoid-transform';

const scratchVector = new Vector3();
const scratchNormal = new Vector3();
const scratchK = new Vector3();
const scratchPosition = new Vector3();
const scratchHeight = new Vector3();
const scratchCartesian = new Vector3();

let wgs84;

/**
 * A quadratic surface defined in Cartesian coordinates by the equation
 * `(x / a)^2 + (y / b)^2 + (z / c)^2 = 1`.  Primarily used
 * to represent the shape of planetary bodies.
 */
export default class Ellipsoid {
  /** An Ellipsoid instance initialized to the WGS84 standard. */
  static readonly WGS84: Ellipsoid = new Ellipsoid(WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z);

  readonly radii: Vector3;
  readonly radiiSquared: Vector3;
  readonly radiiToTheFourth: Vector3;
  readonly oneOverRadii: Vector3;
  readonly oneOverRadiiSquared: Vector3;
  readonly minimumRadius: number;
  readonly maximumRadius: number;
  readonly centerToleranceSquared: number = _MathUtils.EPSILON1;
  readonly squaredXOverSquaredZ: number;

  /** Creates an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions. */
  constructor(x: number, y: number, z: number);
  constructor();

  constructor(x = 0.0, y = 0.0, z = 0.0) {
    assert(x >= 0.0);
    assert(y >= 0.0);
    assert(z >= 0.0);

    this.radii = new Vector3(x, y, z);

    this.radiiSquared = new Vector3(x * x, y * y, z * z);

    this.radiiToTheFourth = new Vector3(x * x * x * x, y * y * y * y, z * z * z * z);

    this.oneOverRadii = new Vector3(
      x === 0.0 ? 0.0 : 1.0 / x,
      y === 0.0 ? 0.0 : 1.0 / y,
      z === 0.0 ? 0.0 : 1.0 / z
    );

    this.oneOverRadiiSquared = new Vector3(
      x === 0.0 ? 0.0 : 1.0 / (x * x),
      y === 0.0 ? 0.0 : 1.0 / (y * y),
      z === 0.0 ? 0.0 : 1.0 / (z * z)
    );

    this.minimumRadius = Math.min(x, y, z);

    this.maximumRadius = Math.max(x, y, z);

    if (this.radiiSquared.z !== 0) {
      this.squaredXOverSquaredZ = this.radiiSquared.x / this.radiiSquared.z;
    }

    Object.freeze(this);
  }

  /** Compares this Ellipsoid against the provided Ellipsoid componentwise */
  equals(right: Ellipsoid): boolean {
    return this === right || Boolean(right && this.radii.equals(right.radii));
  }

  /** Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'. */
  toString(): string {
    return this.radii.toString();
  }

  /** Converts the provided cartographic to Cartesian representation. */
  cartographicToCartesian(cartographic: number[], result: Vector3): Vector3;
  cartographicToCartesian(cartographic: number[], result?: number[]): number[];

  cartographicToCartesian(cartographic, result = [0, 0, 0]) {
    const normal = scratchNormal;
    const k = scratchK;

    const [, , height] = cartographic;
    this.geodeticSurfaceNormalCartographic(cartographic, normal);
    k.copy(this.radiiSquared).scale(normal);

    const gamma = Math.sqrt(normal.dot(k));
    k.scale(1 / gamma);

    normal.scale(height);

    k.add(normal);

    return k.to(result);
  }

  /** Converts the provided cartesian to cartographic (lng/lat/z) representation.
   * The cartesian is undefined at the center of the ellipsoid. */
  cartesianToCartographic(cartesian: number[], result: Vector3): Vector3;
  cartesianToCartographic(cartesian: number[], result?: number[]): number[];

  cartesianToCartographic(cartesian, result = [0, 0, 0]) {
    scratchCartesian.from(cartesian);
    const point = this.scaleToGeodeticSurface(scratchCartesian, scratchPosition);

    if (!point) {
      return undefined;
    }

    const normal = this.geodeticSurfaceNormal(point, scratchNormal);

    const h = scratchHeight;
    h.copy(scratchCartesian).subtract(point);

    const longitude = Math.atan2(normal.y, normal.x);
    const latitude = Math.asin(normal.z);
    const height = Math.sign(vec3.dot(h, scratchCartesian)) * vec3.length(h);

    return toCartographicFromRadians([longitude, latitude, height], result);
  }

  /** Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
   * centered at the provided origin to the provided ellipsoid's fixed reference frame. */
  eastNorthUpToFixedFrame(origin: number[], result?: Matrix4): Matrix4;
  eastNorthUpToFixedFrame(origin: number[], result: number[]): number[];

  eastNorthUpToFixedFrame(origin, result = new Matrix4()) {
    return localFrameToFixedFrame(this, 'east', 'north', 'up', origin, result);
  }

  /** Computes a 4x4 transformation matrix from a reference frame centered at
   * the provided origin to the ellipsoid's fixed reference frame.
   */
  localFrameToFixedFrame(
    firstAxis: string,
    secondAxis: string,
    thirdAxis: string,
    origin: Readonly<NumericArray>,
    result?: Matrix4
  ): Matrix4;
  localFrameToFixedFrame<Matrix4T>(
    firstAxis: string,
    secondAxis: string,
    thirdAxis: string,
    origin: Readonly<NumericArray>,
    result: number[]
  ): number[];

  // Computes a 4x4 transformation matrix from a reference frame centered at
  // the provided origin to the ellipsoid's fixed reference frame.
  localFrameToFixedFrame(firstAxis, secondAxis, thirdAxis, origin, result = new Matrix4()) {
    return localFrameToFixedFrame(this, firstAxis, secondAxis, thirdAxis, origin, result);
  }

  /** Computes the unit vector directed from the center of this ellipsoid toward
   * the provided Cartesian position. */
  geocentricSurfaceNormal(cartesian: number[], result?: number[]): number[];
  geocentricSurfaceNormal<NumArray>(cartesian: number[], result: NumArray): NumArray;
  geocentricSurfaceNormal(cartesian, result = [0, 0, 0]) {
    return scratchVector.from(cartesian).normalize().to(result);
  }

  /** Computes the normal of the plane tangent to the surface of the ellipsoid at provided position. */
  geodeticSurfaceNormalCartographic<NumArray>(cartographic: number[], result: NumArray): NumArray;
  geodeticSurfaceNormalCartographic(cartographic: number[]): number[];
  geodeticSurfaceNormalCartographic(cartographic, result = [0, 0, 0]) {
    const cartographicVectorRadians = fromCartographicToRadians(cartographic);

    const longitude = cartographicVectorRadians[0];
    const latitude = cartographicVectorRadians[1];

    const cosLatitude = Math.cos(latitude);

    scratchVector
      .set(cosLatitude * Math.cos(longitude), cosLatitude * Math.sin(longitude), Math.sin(latitude))
      .normalize();

    return scratchVector.to(result);
  }

  /** Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position. */
  geodeticSurfaceNormal<NumArrayT>(cartesian: number[], result: NumArrayT): NumArrayT;
  geodeticSurfaceNormal(cartesian: number[]): number[];
  geodeticSurfaceNormal(cartesian, result = [0, 0, 0]) {
    return scratchVector.from(cartesian).scale(this.oneOverRadiiSquared).normalize().to(result);
  }

  /** Scales the provided Cartesian position along the geodetic surface normal
   * so that it is on the surface of this ellipsoid.  If the position is
   * at the center of the ellipsoid, this function returns undefined. */
  scaleToGeodeticSurface(cartesian: number[], result?: number[]): number[] {
    return scaleToGeodeticSurface(cartesian, this, result);
  }

  /** Scales the provided Cartesian position along the geocentric surface normal
   * so that it is on the surface of this ellipsoid. */
  scaleToGeocentricSurface(cartesian: number[], result: number[] = [0, 0, 0]): number[] {
    scratchPosition.from(cartesian);

    const positionX = scratchPosition.x;
    const positionY = scratchPosition.y;
    const positionZ = scratchPosition.z;
    const oneOverRadiiSquared = this.oneOverRadiiSquared;

    const beta =
      1.0 /
      Math.sqrt(
        positionX * positionX * oneOverRadiiSquared.x +
          positionY * positionY * oneOverRadiiSquared.y +
          positionZ * positionZ * oneOverRadiiSquared.z
      );

    return scratchPosition.multiplyScalar(beta).to(result);
  }

  /** Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
   * its components by the result of `Ellipsoid#oneOverRadii` */
  transformPositionToScaledSpace(position: number[], result: number[] = [0, 0, 0]): number[] {
    return scratchPosition.from(position).scale(this.oneOverRadii).to(result);
  }

  /** Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
   * its components by the result of `Ellipsoid#radii`. */
  transformPositionFromScaledSpace(position: number[], result: number[] = [0, 0, 0]): number[] {
    return scratchPosition.from(position).scale(this.radii).to(result);
  }

  /** Computes a point which is the intersection of the surface normal with the z-axis. */
  getSurfaceNormalIntersectionWithZAxis(
    position: number[],
    buffer: number = 0,
    result: number[] = [0, 0, 0]
  ): number[] {
    // Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)
    assert(equals(this.radii.x, this.radii.y, _MathUtils.EPSILON15));
    assert(this.radii.z > 0);

    scratchPosition.from(position);
    const z = scratchPosition.z * (1 - this.squaredXOverSquaredZ);

    if (Math.abs(z) >= this.radii.z - buffer) {
      return undefined;
    }

    return scratchPosition.set(0.0, 0.0, z).to(result);
  }
}
