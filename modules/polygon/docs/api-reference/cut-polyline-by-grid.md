# cutPolylineByGrid

Subdivides a polyline by intersecting with a uniform grid.

```js
import {cutPolylineByGrid} from '@math.gl/polygon';

cutPolylineByGrid([-10, -10, 10, 10, 30, -10], {size: 2, gridResolution: 10});
// returns [-10, -10, 0, 0, 10, 10, 20, 0, 30, -10]
```

## Usage

```js
cutPolylineByGrid(positions, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polyline.
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `startIndex` (Number, optional) - the index in `positions` to start reading vertices. Default `0`.
  + `endIndex` (Number, optional) - the index in `positions` to stop reading vertices. Default `positions.length`.
  + `gridResolution` (Number, optional) - the grid size. Default `10`.
  + `gridOffset` (Array, optional) - the grid offset in `[x, y]`. Default `[0, 0]` i.e. the grid starts from the coordinate origin.
  + `broken` (Boolean, optional) - if `true`, the polyline is broken into multiple polylines at the subdivision points. If `false`, subdivision points are inserted into the original polyline. Default `false`.

Returns:

A polyline or an array of polylines, depending on the `broken` option. Each polyline is represented by a positions array that uses the same vertex size as the input.
