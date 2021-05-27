# earcut

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.5-blue.svg?style=flat-square" alt="From-v3.5" />
</p>

Computes a triangulation of a polygon using the [earcut library](https://github.com/mapbox/earcut).

```js
import {earcut} from '@math.gl/polygon';

earcut([10, 0, 0, 50, 60, 60, 70, 10]);
// returns [1, 0, 3, 3, 2, 1]

// Polygon with a hole starting at vertex 4
earcut([0, 0, 100, 0, 100, 100, 0, 100, 20, 20, 80, 20, 80, 80, 20, 80], [4]);
// returns [3, 0, 4, 5, 4, 0, 3, 4, 7, 5, 0, 1, 2, 3, 7, 6, 5, 1, 2, 7, 6, 6, 1, 2]

```

## Usage

```js
earcut(positions[, holeIndices, size = 2, areas]);
```
Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polygon.
- `holeIndices` (Array, optional) - is an array of hole indices if any (e.g. [5, 8] for a 12-vertex input would mean one hole with vertices 5–7 and another with 8–11).
- `size` (Number, optional) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
- `areas` (Array, optional) - areas of outer polygon and holes as computed by `getPolygonSignedArea()`. Can be optionally supplied to speed up triangulation

Returns:

A array of indices into the `positions` array that describes the triangulation of the polygon
