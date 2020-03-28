import OrientedBoundingBox from '../lib/oriented-bounding-box';

/**
 * Computes an instance of an OrientedBoundingBox of the given positions.
 *
 * This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
 * Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
 */
export default function makeOrientedBoundingBoxfromPoints(
  positions: number[][],
  result
): OrientedBoundingBox;
