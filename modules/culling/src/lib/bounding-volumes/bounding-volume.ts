import {INTERSECTION} from '../../constants';
import Plane from '../plane';

/**
 * Common interface for BoundingVolumes
 * including BoundingSphere, AxisAlignedBoundingBox and OrientedBoundingBox
 */
export interface BoundingVolume {
  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param sphere The bounding sphere to apply the transformation to.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns itself, i.e. the modified BoundingVolume.
   */
  transform(transform: readonly number[]): this;

  /** Computes the estimated distance squared from the closest point on a bounding sphere to a point. */
  distanceSquaredTo(point: readonly number[]): number;
  /** Computes the estimated distance from the closest point on a bounding sphere to a point. */
  distanceTo(point: readonly number[]): number;

  /**
   * Determines which side of a plane the oriented bounding box is located.
   *
   * @param plane The plane to test against.
   * @returns
   *  - `INTERSECTION.INSIDE` if the entire box is on the side of the plane the normal is pointing.
   *  - `INTERSECTION.OUTSIDE` if the entire box is on the opposite side.
   *  - `INTERSECTION.INTERSECTING` if the box intersects the plane.
   */
  intersectPlane(plane: Plane): number;
}
