# Polygon

Allows an array of points (whether closed or non-closed) to be treated as a Polygon.

Implements the [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula) for determining the area and winding direction of an arbitrary polygon.

## Usage

```js
import {Polygon} from '@math.gl/polygon';
```

## Methods

### constructor

Creates a new Polygon object.

> The polygon object will reference the provided points, assuming them to not be modified for the lifetime of the Polygon object.

### getSignedArea

Returns the area with a sign indicating the winding direction.

`polygon.getSignedArea()`

### getArea

`polygon.getArea()`

Note:

- A convenience method that returns `Math.abs(polygon.getSignedArea())`.

### getWindingDirection

Returns the direction of the polygon path.

`polygon.getWindingDirection()`

- A positive number is clockwise.
- A negative number is counter clockwise.

Note:

- A convenience method that returns `Math.sign(polygon.getSignedArea())`

### forEachSegment

Lets the application iterate over each segment.

`polygon.forEachSegment((p1, p2) => ...);`

### modifyWindingDirection

Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction. Note: points of the polygon are modified in-place.

- A positive number is clockwise.
- A negative number is counter clockwise.

`polygon.modifyWindingDirection(direction);`

Returns:

Returns true if the winding direction was changed.

## Remarks

- To avoid having to copy a non-closed path to be able to treat it as a polygon (by adding a copy of the first vertex to then end of the path),
  instead we define a `forEachSegment` iteration method that makes sure the last segment is iterated over.
