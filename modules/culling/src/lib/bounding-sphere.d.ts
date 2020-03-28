import {Vector3} from '@math.gl/core';
import {INTERSECTION_ENUM} from '../constants';
import Plane from './plane';

/** A BoundingSphere */
export default class BoundingSphere {
  center: Vector3;
  radius: number;

  /** Creates a bounding sphere */
  constructor(center?: readonly number[], radius?: number);

  /** Sets the bounding sphere from `center` and `radius`. */
  fromCenterRadius(center: readonly number[], radius: number): BoundingSphere;

  /**
   * Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
   * tighly and fully encompases the box.
   */
  fromCornerPoints(corner: readonly number[], oppositeCorner: readonly number[]): BoundingSphere;

  /** Compares the provided BoundingSphere componentwise */
  equals(right: BoundingSphere): boolean;

  /** Duplicates a BoundingSphere instance. */
  clone(): BoundingSphere;

  /** Computes a bounding sphere that contains both the left and right bounding spheres. */
  union(boundingSphere: BoundingSphere): BoundingSphere;

  /** Computes a bounding sphere by enlarging the provided sphere to contain the provided point. */
  expand(point: readonly number[]): BoundingSphere;

  /** Determines which side of a plane a sphere is located. */
  intersectPlane(plane: Plane): INTERSECTION_ENUM;

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   *
   * @param sphere The bounding sphere to apply the transformation to.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns itself, i.e. the modified BoundingSphere.
   */
  transform(transform: readonly number[]): BoundingSphere;

  /** Computes the estimated distance squared from the closest point on a bounding sphere to a point. */
  distanceSquaredTo(point: readonly number[]): number;
  /** Computes the estimated distance from the closest point on a bounding sphere to a point. */
  distanceTo(point: readonly number[]): number;
}
