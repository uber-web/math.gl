# clipPolyline

Clips a polyline with a bounding box.

```js
import {clipPolyline} from '@math.gl/polygon';

clipPolyline([-10, -10, 10, 10, 30, -10], [0, 0, 20, 20], {size: 2});
// returns [[0, 0, 10, 10, 20, 0]]
```

The clipping bounds are defined as an orthoganal rectangle on the XY plane. If a 3D polyline is supplied, it is clipped by the extuded volume from the bounding box.

## Usage

```js
clipPolyline(positions, bbox, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polyline.
- `bbox` (Array) - the bounding box, in `[minX, minY, maxX, maxY]`
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `startIndex` (Number) - the index in `positions` to start reading vertices. Default `0`.
  + `endIndex` (Number) - the index in `positions` to stop reading vertices. Default `positions.length`.

Returns:

An array of polylines that are parts of the original polyline and contained by the given bounding box. Each polyline is represented by a positions array that uses the same vertex size as the input.

If the input polyline is entirely outside of the bounding box, an empty array will be returned.
