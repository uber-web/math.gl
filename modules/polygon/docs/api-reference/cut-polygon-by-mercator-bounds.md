# cutPolygonByMercatorBounds

Splits a geospatial polygon at the [180th meridian](https://en.wikipedia.org/wiki/180th_meridian) and the top (`latitude=90`) and bottom (`latitude=-90`) edges of the Web Mercator map.

```js
import {cutPolygonByMercatorBounds} from '@math.gl/polygon';

cutPolygonByMercatorBounds([-170, 0, 170, 0, 170, 20, -170, 20], {size: 2});
// returns [
//   [170, 20, 180, 20, 180, 0, 170, 0],
//   [-180, 20, -170, 20, -170, 0, -180, 0]
// ] 
]
```

## Usage

```js
cutPolygonByMercatorBounds(positions, holeIndices, [options])
```

Arguments:

- `positions` (Array|TypedArray) - a flat array of the vertex positions that define the polygon's rings. `x` is longitude in degrees, and `y` is latitude in degrees.
- `holeIndices` (Array) - the indices in `positions` where each hole starts. If `null`, the polygon has no holes.
- `options` (Object, optional)
  + `size` (Number) - the number of elements in each vertex. Size `2` will interpret `positions` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `positions` as `[x0, y0, z0, x1, y1, z1, ...]`. Default `2`.
  + `normalize` (Boolean) - make sure the output longitudes are within `[-180, 180]`. Default `true`.
  + `maxLatitude` (Number) - since latitude=90 projects to infinity in Web Mercator projection, `maxLatitude` will be used to represent the pole. Default `85.051129` which makes the map square.
  + `edgeTypes` (Boolean) - if `true`, returns an additional array for each polygon that describes the nature of each vertex. See "returns" below.

Returns:

An array of polygons. Each polygons is represented by an object with the following fields:
- `positions` (Array) - a flat array of the vertex positions that define the polygon's rings.
- `holeIndices` (Array) - the indices in `positions` where each hole starts. Not present if the polygon has no holes.
- `edgeTypes` (Array) - describes the nature of each vertex in `positions`:
  + `0` - the segment connecting this vertex to the next is inside the original polygon
  + `1` - the segment connecting this vertex to the next is on the border of the original polygon
