# cutPolylineByMercatorWorld

Splits a geospatial polyline at the [180th meridian](https://en.wikipedia.org/wiki/180th_meridian).

```js
import {cutPolylineByMercatorWorld} from '@math.gl/polygon';

cutPolylineByMercatorWorld([-10, -10, 10, 10, 30, -10], {size: 2, gridResolution: 10});
// returns [-10, -10, 0, 0, 10, 10, 20, 0, 30, -10]
```

## Usage

```js
cutPolylineByMercatorWorld(positions, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polyline. `x` is longitude in degrees, and `y` is latitude in degrees.
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `startIndex` (Number, optional) - the index in `positions` to start reading vertices. Default `0`.
  + `endIndex` (Number, optional) - the index in `positions` to stop reading vertices. Default `positions.length`.

Returns:

An array of polylines. Each polyline is represented by a positions array that uses the same vertex size as the input.
