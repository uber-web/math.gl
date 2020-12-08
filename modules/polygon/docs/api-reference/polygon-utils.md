# polygon-utils

A set of polygon-related utility functions.

## Usage

```js
import {getPolygonWindingDirection} from '@math.gl/polygon';
```

## Functions

### modifyPolygonWindingDirectionFlat

Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction. Note: points are modified in-place.

`modifyPolygonWindingDirectionFlat(points, start, end, size, direction)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `start` (Number) - the index in `points` to start reading vertices.
- `end` (Number) - the index in `points` to stop reading vertices.
- `size` (Number) - the number of elements in each vertex. Size `2` will interpret `points` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `points` as `[x0, y0, z0, x1, y1, z1, ...]`.
- `direction` (Number) - Requested winding direction. A positive 1 for clockwise, -1 for counter clockwise.

### getPolygonSignedAreaFlat

Returns signed area of the polygon.

`getPolygonSignedAreaFlat(points, start, end, size)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `start` (Number) - the index in `points` to start reading vertices.
- `end` (Number) - the index in `points` to stop reading vertices.
- `size` (Number) - the number of elements in each vertex. Size `2` will interpret `points` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `points` as `[x0, y0, z0, x1, y1, z1, ...]`.

Returns:

Signed area of the polygon.

### getPolygonWindingDirectionFlat

Returns winding direction of the polygon.

`getPolygonWindingDirectionFlat(points, start, end, size)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `start` (Number) - the index in `points` to start reading vertices.
- `end` (Number) - the index in `points` to stop reading vertices.
- `size` (Number) - the number of elements in each vertex. Size `2` will interpret `points` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `points` as `[x0, y0, z0, x1, y1, z1, ...]`.

Returns:

- A positive number is clockwise.
- A negative number is counter clockwise.

### forEachSegmentInPolygonFlat

Calls visitor callback for each segment in the polygon.

`forEachSegmentInPolygonFlat(points, start, end, size, (p1x, p1y, p2x, p2y, ind1, ind2) => ...)`

Arguments:

- `points` (Array[]|TypedArray[]) - a flat array of the points that define the polygon.
- `start` (Number) - the index in `points` to start reading vertices.
- `end` (Number) - the index in `points` to stop reading vertices.
- `size` (Number) - the number of elements in each vertex. Size `2` will interpret `points` as `[x0, y0, x1, y1, ...]` and size `3` will interpret `points` as `[x0, y0, z0, x1, y1, z1, ...]`.
- `visitor` (SegmentVisitorFlat) - a callback to call for each segment of the polygon.

### modifyPolygonWindingDirection

Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction. Note: points are modified in-place.

`modifyPolygonWindingDirection(points, direction)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `direction` (Number) - Requested winding direction. A positive 1 for clockwise, -1 for counter clockwise.

### getPolygonSignedArea

Returns signed area of the polygon.

`getPolygonSignedArea(points)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.

Returns:

Signed area of the polygon.

### getPolygonWindingDirection

Returns winding direction of the polygon.

`getPolygonWindingDirection(points)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.

Returns:

- A positive number is clockwise.
- A negative number is counter clockwise.

### forEachSegmentInPolygon

Calls visitor callback for each segment in the polygon.

`forEachSegmentInPolygon(points, (p1, p2, ind1, ind2) => ...)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `visitor` (SegmentVisitor) - a callback to call for each segment of the polygon.
