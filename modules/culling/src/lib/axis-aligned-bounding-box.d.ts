import {Vector3} from '@math.gl/core';
import Plane from './plane';
import {INTERSECTION_ENUM} from '../constants';

/**
* @see BoundingSphere
* @see BoundingRectangle
*/
export default class AxisAlignedBoundingBox {
  readonly minimum: Vector3;
  readonly maximum: Vector3;
  readonly center: Vector3;
  readonly halfDiagonal: Vector3;

  /**
   * Creates an instance of an AxisAlignedBoundingBox from the minimum and maximum points along the x, y, and z axes.
   * @param minimum=[0, 0, 0] The minimum point along the x, y, and z axes.
   * @param maximum=[0, 0, 0] The maximum point along the x, y, and z axes.
   * @param center The center of the box; automatically computed if not supplied.
   */
  constructor(minimum?: readonly number[], maximum?: readonly number[], center?: readonly number[]);

  /** Duplicates a AxisAlignedBoundingBox instance. */
  clone(): AxisAlignedBoundingBox;
  /** Compares the provided AxisAlignedBoundingBox componentwise */
  equals(right: AxisAlignedBoundingBox): boolean;
  /** Determines which side of a plane a box is located. */
  intersectPlane(plane: Plane): INTERSECTION_ENUM;

  // Computes the estimated distance from the closest point on a bounding box to a point.
  distanceTo(point: readonly number[]): number;
  // Computes the estimated distance squared from the closest point on a bounding box to a point.
  distanceSquaredTo(point: readonly number[]): number;
}
