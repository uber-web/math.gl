/* eslint-disable */
import {Vector3, Matrix4, toRadians, toDegrees, assert, _MathUtils} from 'math.gl';
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

let wgs84;

// A quadratic surface defined in Cartesian coordinates by the equation
// <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
// to represent the shape of planetary bodies.
export default class Ellipsoid {
  // An Ellipsoid instance initialized to the WGS84 standard.
  static get WGS84() {
    wgs84 = wgs84 || new Ellipsoid(WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z);
    return wgs84;
  }

  // Computes an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
  static fromVector3([x, y, z]) {
    return new Ellipsoid(x, y, z);
  }

  constructor(x = 0.0, y = 0.0, z = 0.0) {
    assert(x >= 0.0);
    assert(y >= 0.0);
    assert(z >= 0.0);

    this._radii = new Vector3(x, y, z);

    this._radiiSquared = new Vector3(x * x, y * y, z * z);

    this._radiiToTheFourth = new Vector3(x * x * x * x, y * y * y * y, z * z * z * z);

    this._oneOverRadii = new Vector3(
      x === 0.0 ? 0.0 : 1.0 / x,
      y === 0.0 ? 0.0 : 1.0 / y,
      z === 0.0 ? 0.0 : 1.0 / z
    );

    this._oneOverRadiiSquared = new Vector3(
      x === 0.0 ? 0.0 : 1.0 / (x * x),
      y === 0.0 ? 0.0 : 1.0 / (y * y),
      z === 0.0 ? 0.0 : 1.0 / (z * z)
    );

    this._minimumRadius = Math.min(x, y, z);

    this._maximumRadius = Math.max(x, y, z);

    this._centerToleranceSquared = _MathUtils.EPSILON1;

    if (this._radiiSquared.z !== 0) {
      this._squaredXOverSquaredZ = this._radiiSquared.x / this._radiiSquared.z;
    }

    Object.freeze(this);
  }

  // Gets the radii of the ellipsoid.
  get radii() {
    return this._radii;
  }

  // Gets the squared radii of the ellipsoid.
  get radiiSquared() {
    return this._radiiSquared;
  }

  // Gets the radii of the ellipsoid raise to the fourth power.
  get radiiToTheFourth() {
    return this._radiiToTheFourth;
  }

  // Gets one over the radii of the ellipsoid.
  get oneOverRadii() {
    return this._oneOverRadii;
  }

  // Gets one over the squared radii of the ellipsoid.
  get oneOverRadiiSquared() {
    return this._oneOverRadiiSquared;
  }

  get centerToleranceSquared() {
    return this._centerToleranceSquared;
  }

  // Gets the minimum radius of the ellipsoid.
  get minimumRadius() {
    return this._minimumRadius;
  }

  // Gets the maximum radius of the ellipsoid.
  get maximumRadius() {
    return this._maximumRadius;
  }

  // Duplicates an Ellipsoid instance.
  clone(ellipsoid) {
    const radii = ellipsoid._radii;
    return new Ellipsoid(radii.x, radii.y, radii.z);
  }

  // Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
  equals(right) {
    return this === right || Boolean(right && this._radii.equals(right._radii));
  }

  // Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
  toString() {
    return this._radii.toString();
  }

  // Converts the provided cartographic to Cartesian representation.
  cartographicToCartesian(cartographic, result = new Vector3()) {
    const normal = scratchNormal;
    const k = scratchK;

    const [, , height] = cartographic;
    this.geodeticSurfaceNormalCartographic(cartographic, normal);
    k.copy(this._radiiSquared).scale(normal);

    const gamma = Math.sqrt(normal.dot(k));
    k.scale(1 / gamma);

    normal.scale(height);

    k.add(normal);

    return k.to(result);
  }

  // Converts the provided cartesian to cartographic (lng/lat/z) representation.
  // The cartesian is undefined at the center of the ellipsoid.
  cartesianToCartographic(cartesian, result = new Vector3()) {
    const point = this.scaleToGeodeticSurface(cartesian, scratchPosition);

    if (!point) {
      return undefined;
    }

    const normal = this.geodeticSurfaceNormal(point, scratchNormal);

    const h = scratchHeight;
    h.copy(cartesian).subtract(point);

    const longitude = Math.atan2(normal.y, normal.x);
    const latitude = Math.asin(normal.z);
    const height = Math.sign(vec3.dot(h, cartesian)) * vec3.length(h);

    return toCartographicFromRadians([longitude, latitude, height], result);
  }

  // Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
  // centered at the provided origin to the provided ellipsoid's fixed reference frame.
  eastNorthUpToFixedFrame(origin, result = new Matrix4()) {
    return localFrameToFixedFrame(this, 'east', 'north', 'up', origin, result);
  }

  // Computes a 4x4 transformation matrix from a reference frame centered at
  // the provided origin to the ellipsoid's fixed reference frame.
  localFrameToFixedFrame(firstAxis, secondAxis, thirdAxis, origin, result = new Matrix4()) {
    return localFrameToFixedFrame(this, firstAxis, secondAxis, thirdAxis, origin, result);
  }

  // Computes the unit vector directed from the center of this ellipsoid toward
  // the provided Cartesian position.
  geocentricSurfaceNormal(cartesian) {
    return scratchVector.from(cartesian).normalize();
  }

  // Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
  geodeticSurfaceNormalCartographic(cartographic, result = new Vector3()) {
    const cartographicVectorRadians = fromCartographicToRadians(cartographic);

    const longitude = cartographicVectorRadians[0];
    const latitude = cartographicVectorRadians[1];

    const cosLatitude = Math.cos(latitude);

    scratchVector
      .set(cosLatitude * Math.cos(longitude), cosLatitude * Math.sin(longitude), Math.sin(latitude))
      .normalize();

    return scratchVector.to(result);
  }

  // Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
  geodeticSurfaceNormal(cartesian, result = new Vector3()) {
    return scratchVector
      .from(cartesian)
      .scale(this._oneOverRadiiSquared)
      .normalize()
      .to(result);
  }

  // Scales the provided Cartesian position along the geodetic surface normal
  // so that it is on the surface of this ellipsoid.  If the position is
  // at the center of the ellipsoid, this function returns undefined.
  scaleToGeodeticSurface(cartesian, result) {
    return scaleToGeodeticSurface(cartesian, this, result);
  }

  // Scales the provided Cartesian position along the geocentric surface normal
  // so that it is on the surface of this ellipsoid.
  scaleToGeocentricSurface(cartesian, result = new Vector3()) {
    scratchPosition.from(cartesian);

    const positionX = scratchPosition.x;
    const positionY = scratchPosition.y;
    const positionZ = scratchPosition.z;
    const oneOverRadiiSquared = this._oneOverRadiiSquared;

    const beta =
      1.0 /
      Math.sqrt(
        positionX * positionX * oneOverRadiiSquared.x +
          positionY * positionY * oneOverRadiiSquared.y +
          positionZ * positionZ * oneOverRadiiSquared.z
      );

    return scratchPosition.multiplyScalar(beta).to(result);
  }

  // Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
  // its components by the result of `Ellipsoid#oneOverRadii`
  transformPositionToScaledSpace(position, result = new Vector3()) {
    return scratchPosition
      .from(position)
      .scale(this._oneOverRadii)
      .to(result);
  }

  // Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
  // its components by the result of `Ellipsoid#radii`.
  transformPositionFromScaledSpace(position, result = new Vector3()) {
    return scratchPosition
      .from(position)
      .scale(this._radii)
      .to(result);
  }

  // Computes a point which is the intersection of the surface normal with the z-axis.
  getSurfaceNormalIntersectionWithZAxis(position, buffer = 0.0, result = new Vector3()) {
    // Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)
    assert(equalsEpsilon(this._radii.x, this._radii.y, _MathUtils.EPSILON15));
    assert(this._radii.z > 0);

    scratchPosition.from(position);
    const z = scratchPosition.z * (1 - this._squaredXOverSquaredZ);

    if (Math.abs(z) >= this._radii.z - buffer) {
      return undefined;
    }

    scratchPosition.set(0.0, 0.0, z).to(result);
  }
}
