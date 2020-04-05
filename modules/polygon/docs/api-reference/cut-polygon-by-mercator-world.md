# cutPolygonByMercatorWorld

Splits a geospatial polygon at the [180th meridian](https://en.wikipedia.org/wiki/180th_meridian) and the top (`latitude=85.051129`) and bottom (`latitude=-85.051129`) edges of the Web Mercator map.

```js
import {cutPolygonByMercatorWorld} from '@math.gl/polygon';

cutPolygonByMercatorWorld([-170, 0, 170, 0, 170, 20, -170, 20], {size: 2});
// returns [
//   [170, 20, 180, 20, 180, 0, 170, 0],
//   [-180, 20, -170, 20, -170, 0, -180, 0]
// ] 
]
```

## Usage

```js
cutPolygonByMercatorWorld(positions, holeIndices, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polygon's rings. `x` is longitude in degrees, and `y` is latitude in degrees.
- `holeIndices` (Array) - the indices in `positions` where each hole starts. If `null`, the polygon has no holes.
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `normalize` (Boolean) - make sure the output longitudes are within `[-180, 180]`. Default `true`.

Returns:

An array of polygons. Each polygons is represented by either:
- a positions array that uses the same vertex size as the input
- an object in the shape of `{positions, holeIndices}`
