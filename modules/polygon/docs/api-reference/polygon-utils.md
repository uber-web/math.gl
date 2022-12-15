# polygon-utils

A set of polygon-related utility functions. Utility functions are available for flat arrays and for arrays of points. Note: the \*Points set of functions is used for arrays of points, and is separated for performance and backwards compatibility reasons.

## Usage

```js
import {getPolygonWindingDirection} from '@math.gl/polygon';
```

## Types

### PolygonParams

`PolygonParams`

Fields:

- `start` (number) - Start index of the polygon in the array of positions. Defaults to 0.
- `end` (number) - End index of the polygon in the array of positions. Defaults to number of positions.
- `size` (Number) - Size of a point, 2 (XZ) or 3 (XYZ). Defaults to 2. Affects only polygons stored in flat arrays.
- `isClosed` (Boolean) - Indicates that the first point of the polygon is equal to the last point, and additional checks should be ommited.

## Functions

### modifyPolygonWindingDirection

Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction. Note: points are modified in-place.

`modifyPolygonWindingDirection(points, direction, params)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `direction` (Number) - Requested winding direction. A positive 1 for clockwise, -1 for counter clockwise.
- `options` (PolygonParams) - Polygon parameters.

Returns:

Returns true if the winding direction was changed.

### getPolygonSignedArea

Returns signed area of the polygon.

`getPolygonSignedArea(points, options, plane)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `options` (PolygonParams, optional) - Polygon parameters.
- `plane` (String, optional) - the 2D projection plane on which to calculate the area of a 3D polygon. One of `xy`, `yz`, `xz`. Default to `xy`

Returns:

Signed area of the polygon.

### getPolygonWindingDirection

Returns winding direction of the polygon.

`getPolygonWindingDirection(points, options)`

Arguments:

- `points` (Array|TypedArray) - a flat array of the points that define the polygon.
- `options` (PolygonParams) - Polygon parameters.

Returns:

- A positive number is clockwise.
- A negative number is counter clockwise.

### forEachSegmentInPolygon

Calls visitor callback for each segment in the polygon.

`forEachSegmentInPolygon(points, (p1x, p1y, p2x, p2y, ind1, ind2) => ...), options`

Arguments:

- `points` (Array[]|TypedArray[]) - a flat array of the points that define the polygon.
- `visitor` (SegmentVisitorFlat) - a callback to call for each segment of the polygon.
- `options` (PolygonParams) - Polygon parameters.

### modifyPolygonWindingDirectionPoints

Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction. Note: points are modified in-place.

`modifyPolygonWindingDirectionPoints(points, direction, options)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `direction` (Number) - Requested winding direction. A positive 1 for clockwise, -1 for counter clockwise.
- `options` (PolygonParams) - Polygon parameters.

Returns:

Returns true if the winding direction was changed.

### getPolygonSignedAreaPoints

Returns signed area of the polygon.

`getPolygonSignedAreaPoints(points, options)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `options` (PolygonParams) - Polygon parameters.

Returns:

Signed area of the polygon.

### getPolygonWindingDirectionPoints

Returns winding direction of the polygon.

`getPolygonWindingDirectionPoints(points, options)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `options` (PolygonParams) - Polygon parameters.

Returns:

- A positive number is clockwise.
- A negative number is counter clockwise.

### forEachSegmentInPolygonPoints

Calls visitor callback for each segment in the polygon.

`forEachSegmentInPolygonPoints(points, (p1, p2, ind1, ind2) => ..., options)`

Arguments:

- `points` (Array[]|TypedArray[]) - an array of the points that define the polygon.
- `visitor` (SegmentVisitor) - a callback to call for each segment of the polygon.
- `options` (PolygonParams) - Polygon parameters.
