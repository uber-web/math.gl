import {BoundingVolume} from './bounding-volume';
import {Vector3} from '@math.gl/core';
import Plane from '../plane';
import {INTERSECTION_ENUM} from '../../constants';

/**
* An axis aligned bounding box - aligned with coordinate axes
* @see BoundingVolume
* @see BoundingRectangle
* @see OrientedBoundingBox
*/
export default class AxisAlignedBoundingBox implements BoundingVolume {
  /** The center point of the bounding box. */
  readonly center: Vector3;
  /** The positive half diagonal of the bounding box. */
  readonly halfDiagonal: Vector3;
  /** The minimum point defining the bounding box. [0, 0, 0] for empty box */
  readonly minimum: Vector3;
  /** The maximum point defining the bounding box. [0, 0, 0] for empty box */
  readonly maximum: Vector3;

  /**
   * Creates an instance of an AxisAlignedBoundingBox from the minimum and maximum points along the x, y, and z axes.
   * @param minimum=[0, 0, 0] The minimum point along the x, y, and z axes.
   * @param maximum=[0, 0, 0] The maximum point along the x, y, and z axes.
   * @param center The center of the box; automatically computed if not supplied.
   */
  constructor(minimum?: readonly number[], maximum?: readonly number[], center?: readonly number[]);

  /** Duplicates a AxisAlignedBoundingBox instance. */
  clone(): AxisAlignedBoundingBox;
  /** Compares the provided AxisAlignedBoundingBox component wise */
  equals(right: AxisAlignedBoundingBox): boolean;

  // BoundingVolume interface

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns itself, i.e. the modified BoundingVolume.
   */
  transform(transform: readonly number[]): this;

  /** Computes the estimated distance from the closest point on a bounding box to a point. */
  distanceTo(point: readonly number[]): number;
  /** Computes the estimated distance squared from the closest point on a bounding box to a point. */
  distanceSquaredTo(point: readonly number[]): number;

  /** Determines which side of a plane a box is located. */
  intersectPlane(plane: Plane): INTERSECTION_ENUM;
}
