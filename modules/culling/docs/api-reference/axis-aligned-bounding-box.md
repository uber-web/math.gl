# AxisAlignedBoundingBox

An `AxisAlignedBoundingBox` is a closed and convex cuboid that is aligned with the orthogonal axes.

# Usage

`AxisAlignedBoundingBox` can be created using two corners of the box:

```js
import {AxisAlignedBoundingBox} from '@math.gl/culling';

const box = new AxisAlignedBoundingBox([-1, -1, -1], [1, 1, 1]);
```

Or from a collection of points:

```js
import {makeAxisAlignedBoundingBoxFromPoints} from '@math.gl/culling';

const box = makeAxisAlignedBoundingBoxFromPoints([
  [2, 0, 0],
  [-2, 0, 0]
]);
```

## Inheritance

`class AxisAlignedBoundingBox implements` [`BoundingVolume`](/modules/culling/docs/api-reference/bounding-volume).

## Global Functions

### makeAxisAlignedBoundingBoxFromPoints(positions : Array[3][], result? : AxisAlignedBoundingBox) : AxisAlignedBoundingBox

Computes an instance of an `AxisAlignedBoundingBox` of the given positions.

- `positions` List of `Vector3` points that the bounding box will enclose.
- `result` Optional object onto which to store the result.

## Fields

### center: Vector3 = [0, 0, 0]

The center position of the box.

### halfDiagonal: Vector3

The positive diagonal vector.

### minimum: Vector3

The minimum corner of the bounding box.

### maximum: Vector3

The maximum corner of the bounding box.

## Methods

### constructor(minimum = [0, 0, 0], maximum = [0, 0, 0]) {

### constructor

- {Vector3} [minimum=Vector3.ZERO] The minimum corner of the box, i.e. `[xMin, yMin, zMin]`.
- {Vector3} [maximum=Vector3.ZERO] The maximum corner of the box, i.e. `[xMax, yMax, zMax]`.

### clone() : AxisAlignedBoundingBox

Duplicates a `AxisAlignedBoundingBox` instance.

Returns

- A new `AxisAlignedBoundingBox` instance.

### equals(right : AxisAlignedBoundingBox) : Boolean

Compares the provided `AxisAlignedBoundingBox` componentwise and returns `true` if they are equal, `false` otherwise.

- `right` The second `AxisAlignedBoundingBox`

Returns

- `true` if left and right are equal, `false` otherwise.

### intersectPlane(plane : Plane) : INTERSECTION

Determines which side of a plane the axis-aligned bounding box is located.

- `plane` The plane to test against.

Returns

- `INTERSECTION.INSIDE` if the entire box is on the side of the plane the normal is pointing
- `INTERSECTION.OUTSIDE` if the entire box is on the opposite side, and
- `INTERSECTION.INTERSECTING` if the box intersects the plane.

### distanceTo(point : Number[3]) : Number

Computes the estimated distance from the closest point on a bounding box to a point.

- `point` The point

Returns

- The estimated distance from the bounding sphere to the point.

### distanceSquaredTo(point : Number[3]) : Number

Computes the estimated distance squared from the closest point on a bounding box to a point.

- `point` The point

Returns

- The estimated distance squared from the bounding sphere to the point.
