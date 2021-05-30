/**
 * Computes a triangulation of a polygon
 * @param positions a flat array of the vertex positions that define the polygon.
 * @param holeIndices an array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11).
 * @param size the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
 * @param areas areas of outer polygon and holes as computed by `getPolygonSignedArea()`. Can be optionally supplied to speed up triangulation
 * @returns array of indices into the `positions` array that describes the triangulation of the polygon
 */
export function earcut(positions: number[], holeIndices?: number[], size?: number, areas?: number[]): number[];
