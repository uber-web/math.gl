import {Vector3, Matrix4} from '@math.gl/core';

/** A quadratic surface defined in Cartesian coordinates by the equation
 * `(x / a)^2 + (y / b)^2 + (z / c)^2 = 1`.  Primarily used
 * to represent the shape of planetary bodies.
 */
export default class Ellipsoid {
  /** An Ellipsoid instance initialized to the WGS84 standard. */
  static readonly WGS84: Ellipsoid;

  readonly radii: Vector3;
  readonly radiiSquared: Vector3;
  readonly radiiToTheFourth: Vector3;
  readonly oneOverRadii: Vector3;
  readonly oneOverRadiiSquared: Vector3;
  readonly minimumRadius: number;
  readonly maximumRadius: number;
  readonly centerToleranceSquared: number;
  readonly squaredXOverSquaredZ: number;

  /** Creates an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions. */
  constructor(x: number, y: number, z: number);
  constructor();

  /** Compares this Ellipsoid against the provided Ellipsoid componentwise */
  equals(right: Ellipsoid): boolean;
  /** Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'. */
  toString(): string;

  /** Converts the provided cartographic to Cartesian representation. */
  cartographicToCartesian(cartographic: number[], result?: Vector3): Vector3;
  cartographicToCartesian(cartographic: number[], result?: number[]): number[];

  /** Converts the provided cartesian to cartographic (lng/lat/z) representation.
   * The cartesian is undefined at the center of the ellipsoid. */
  cartesianToCartographic(cartesian: number[], result: Vector3): Vector3;
  cartesianToCartographic(cartesian: number[], result?: number[]): number[];

  /** Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
   * centered at the provided origin to the provided ellipsoid's fixed reference frame. */
  eastNorthUpToFixedFrame(origin: number[], result?: Matrix4): Matrix4;
  eastNorthUpToFixedFrame(origin: number[], result: number[]): number[];

  /** Computes a 4x4 transformation matrix from a reference frame centered at
   * the provided origin to the ellipsoid's fixed reference frame.
   */
  localFrameToFixedFrame(
    firstAxis: string,
    secondAxis: string,
    thirdAxis: string,
    origin: number[],
    result?: Matrix4
  ): Matrix4;
  localFrameToFixedFrame(
    firstAxis: string,
    secondAxis: string,
    thirdAxis: string,
    origin: number[],
    result?: number[]
  ): number[];

  /** Computes the unit vector directed from the center of this ellipsoid toward
   * the provided Cartesian position. */
  geocentricSurfaceNormal(cartesian: number[], result?: number[]): number[];

  /** Computes the normal of the plane tangent to the surface of the ellipsoid at provided position. */
  geodeticSurfaceNormalCartographic(cartographic: number[], result?: number[]): number[];

  /** Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position. */
  geodeticSurfaceNormal(cartesian: number[], result?: number[]): number[];

  /** Scales the provided Cartesian position along the geodetic surface normal
   * so that it is on the surface of this ellipsoid.  If the position is
   * at the center of the ellipsoid, this function returns undefined. */
  scaleToGeodeticSurface(cartesian: number[], result?: number[]): number[];

  /** Scales the provided Cartesian position along the geocentric surface normal
   * so that it is on the surface of this ellipsoid. */
  scaleToGeocentricSurface(cartesian: number[], result?: number[]): number[];

  /** Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
   * its components by the result of `Ellipsoid#oneOverRadii` */
  transformPositionToScaledSpace(position: number[], result?: number[]): number[];

  /** Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
   * its components by the result of `Ellipsoid#radii`. */
  transformPositionFromScaledSpace(position: number[], result?: number[]): number[];

  /** Computes a point which is the intersection of the surface normal with the z-axis. */
  getSurfaceNormalIntersectionWithZAxis(
    position: number[],
    buffer?: number,
    result?: number[]
  ): number[];
}
