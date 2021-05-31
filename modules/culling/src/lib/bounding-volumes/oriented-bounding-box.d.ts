// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {BoundingVolume} from './bounding-volume';
import {Vector3, Matrix3, Quaternion} from '@math.gl/core';
import BoundingSphere from './bounding-sphere';
import Plane from '../plane';
import {INTERSECTION_ENUM} from '../../constants';

/**
 * An OrientedBoundingBox of some object is a closed and convex cuboid.
 * It can provide a tighter bounding volume than `BoundingSphere` or
 * `AxisAlignedBoundingBox` in many cases.
 */
export default class OrientedBoundingBox implements BoundingVolume {
  center: Vector3;
  halfAxes: Matrix3;

  /**
   * An OrientedBoundingBox of some object is a closed and convex cuboid.
   * It can provide a tighter bounding volume than
   * `BoundingSphere` or `AxisAlignedBoundingBox` in many cases.
   */
  constructor(center?: readonly number[], halfAxes?: readonly number[]);

  /** Returns an array with three halfSizes for the bounding box */
  get halfSize(): number[];

  /** Returns a quaternion describing the orientation of the bounding box */
  get quaternion(): Quaternion;

  /**
   * Create OrientedBoundingBox from quaternion based OBB,
   */
  fromCenterHalfSizeQuaternion(center: number[], halfSize: number[], quaternion: number[]): OrientedBoundingBox;

  /** Duplicates a OrientedBoundingBox instance. */
  clone(): OrientedBoundingBox;

  /** Compares the provided OrientedBoundingBox component wise and returns */
  equals(right: OrientedBoundingBox): boolean;

  /** Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box. */
  getBoundingSphere(result?: BoundingSphere): BoundingSphere;

  /**
   * The distances calculated by the vector from the center of the bounding box
   * to position projected onto direction.
   *
   * - If you imagine the infinite number of planes with normal direction,
   *   this computes the smallest distance to the closest and farthest planes
   *   from `position` that intersect the bounding box.
   *
   * @param position The position to calculate the distance from.
   * @param direction The direction from position.
   * @param result An Interval (array of length 2) to store the nearest and farthest distances.
   * @returns Interval (array of length 2) with nearest and farthest distances
   *   on the bounding box from position in direction.
   */
  computePlaneDistances(position: readonly number[], direction: readonly number[], result?: number[]): number[];

  // BoundingVolume interface

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns itself, i.e. the modified BoundingVolume.
   */
  transform(transform: readonly number[]): this;

   /** Computes the estimated distance from the closest point on a bounding box to a point. */
  distanceTo(point: readonly number[]): number;

  /**
   * Computes the estimated distance squared from the closest point
   * on a bounding box to a point.
   * See Geometric Tools for Computer Graphics 10.4.2
   */
  distanceSquaredTo(point: readonly number[]): number;

  /** Determines which side of a plane the oriented bounding box is located. */
  intersectPlane(plane: Plane): INTERSECTION_ENUM;
}
