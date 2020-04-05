# cutPolygonByGrid

Subdivides a polygon by intersecting with a uniform grid.

```js
import {cutPolygonByGrid} from '@math.gl/polygon';

cutPolygonByGrid([0, 15, 15, 0, 0, -15, 0, 15], {size: 2, gridResolution: 20});
// returns [
//   [15, 0, 0, -15, 0, 0, 15, 0],
//   [15, 0, 0, 0, 0, 15, 15, 0]
// ] 
]
```

## Usage

```js
cutPolygonByGrid(positions, holeIndices, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polygon's rings.
- `holeIndices` (Array) - the indices in `positions` where each hole starts. If `null`, the polygon has no holes.
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `gridResolution` (Number, optional) - the grid size. Default `10`.
  + `gridOffset` (Array, optional) - the grid offset in `[x, y]`. Default `[0, 0]` i.e. the grid starts from the coordinate origin.

Returns:

An array of polygons. Each polygons is represented by either:
- a positions array that uses the same vertex size as the input
- an object in the shape of `{positions, holeIndices}`
