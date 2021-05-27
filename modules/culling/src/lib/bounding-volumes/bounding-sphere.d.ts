import {BoundingVolume} from './bounding-volume';
import {Vector3} from '@math.gl/core';
import {INTERSECTION_ENUM} from '../../constants';
import Plane from '../plane';

/** A BoundingSphere */
export default class BoundingSphere implements BoundingVolume {
  center: Vector3;
  radius: number;

  /** Creates a bounding sphere */
  constructor(center?: readonly number[], radius?: number);

  /** Sets the bounding sphere from `center` and `radius`. */
  fromCenterRadius(center: readonly number[], radius: number): this;

  /**
   * Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
   * tightly and fully encompasses the box.
   */
  fromCornerPoints(corner: readonly number[], oppositeCorner: readonly number[]): this;

  /** Compares the provided BoundingSphere component wise */
  equals(right: BoundingSphere): boolean;

  /** Duplicates a BoundingSphere instance. */
  clone(): this;

  /** Computes a bounding sphere that contains both the left and right bounding spheres. */
  union(boundingSphere: BoundingSphere): this;

  /** Computes a bounding sphere by enlarging the provided sphere to contain the provided point. */
  expand(point: readonly number[]): this;

  // BoundingVolume interface

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param sphere The bounding sphere to apply the transformation to.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns self.
   */
  transform(transform: readonly number[]): this;

  /** Computes the estimated distance squared from the closest point on a bounding sphere to a point. */
  distanceSquaredTo(point: readonly number[]): number;
  /** Computes the estimated distance from the closest point on a bounding sphere to a point. */
  distanceTo(point: readonly number[]): number;

  /** Determines which side of a plane a sphere is located. */
  intersectPlane(plane: Plane): INTERSECTION_ENUM;
}
