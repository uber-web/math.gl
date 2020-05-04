import OrientedBoundingBox from '../lib/oriented-bounding-box';
import AxisAlignedBoundingBox from '../lib/axis-aligned-bounding-box';

/**
 * Computes an instance of an OrientedBoundingBox of the given positions.
 *
 * This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
 * Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
 */
export function makeOrientedBoundingBoxFromPoints(
  positions: number[][],
  result?: OrientedBoundingBox
): OrientedBoundingBox;

/**
 * Computes an instance of an AxisAlignedBoundingBox. The box is determined by
 * finding the points spaced the farthest apart on the x, y, and z axes.
 */
export function makeAxisAlignedBoundingBoxFromPoints(
  positions: readonly number[][],
  result?: AxisAlignedBoundingBox
): AxisAlignedBoundingBox;
