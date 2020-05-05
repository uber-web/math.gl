// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, Matrix3} from '@math.gl/core';
import BoundingSphere from './bounding-sphere';
import Plane from './plane';
import {INTERSECTION_ENUM} from '../constants';

/** An OrientedBoundingBox of some object is a closed and convex cuboid.
 * It can provide a tighter bounding volume than `BoundingSphere` or
 * `AxisAlignedBoundingBox` in many cases.
 */
export default class OrientedBoundingBox {
  center: Vector3;
  halfAxes: Matrix3;

  // An OrientedBoundingBox of some object is a closed and convex cuboid. It can provide a tighter bounding volume than {@link BoundingSphere} or {@link AxisAlignedBoundingBox} in many cases.
  constructor(center?: readonly number[], halfAxes?: readonly number[]);

  // Duplicates a OrientedBoundingBox instance.
  clone(): OrientedBoundingBox;

  // Compares the provided OrientedBoundingBox componentwise and returns
  equals(right: OrientedBoundingBox): boolean;

  // Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.
  getBoundingSphere(result?: BoundingSphere): BoundingSphere;

  // Determines which side of a plane the oriented bounding box is located.
  intersectPlane(plane: Plane): INTERSECTION_ENUM;

  // Computes the estimated distance from the closest point on a bounding box to a point.
  distanceTo(point: readonly number[]): number;

  // Computes the estimated distance squared from the closest point on a bounding box to a point.
  // See Geometric Tools for Computer Graphics 10.4.2

  // eslint-disable-next-line max-statements
  distanceSquaredTo(point: readonly number[]): number;

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
}
