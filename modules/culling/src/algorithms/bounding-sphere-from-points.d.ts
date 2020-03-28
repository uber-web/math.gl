import BoundingSphere from '../lib/bounding-sphere';

/**
 * Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points.
 *
 * The bounding sphere is computed by running two algorithms, a naive algorithm and
 * Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.
 * Bounding sphere computation article http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding
 *
 * @param positions An array of points that the bounding sphere will enclose.
 * @param result Optional object onto which to store the result.
 * @returns The modified result parameter or a new `BoundingSphere` instance if not provided.
 */
export default function makeBoundingSphereFromPoints(
  positions: number[][],
  result?: BoundingSphere
): BoundingSphere;
