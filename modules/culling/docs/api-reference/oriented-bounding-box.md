# OrientedBoundingBox

An `OrientedBoundingBox` is a closed and convex cuboid. It can provide a tighter bounding volume than a bounding sphere or an axis aligned bounding box in many cases.

# Usage

Create an `OrientedBoundingBox` using a transformation matrix, a position where the box will be translated, and a scale.

```js
import {Vector3} from '@math.gl/core';
import {OrientedBoundingBox} from '@math.gl/culling';

const center = new Vector3(1.0, 0.0, 0.0);
const halfAxes = new Matrix3().fromScale([1.0, 3.0, 2.0]);
const box = new OrientedBoundingBox(center, halfAxes);
```

Sort bounding boxes from back to front

```js
boxes.sort(
  (boxA, boxB) =>
    boxB.distanceSquaredTo(camera.positionWC) - boxA.distanceSquaredTo(camera.positionWC)
);
```

Compute an oriented bounding box enclosing two points.

```js
import {makeOrientedBoundingBoxFromPoints} from '@math.gl/culling';

const box = makeOrientedBoundingBoxFromPoints([[2, 0, 0], [-2, 0, 0]]);
```

## Global Functions

### makeOrientedBoundingBoxFromPoints(positions : Array[3][], result? : OrientedBoundingBox) : OrientedBoundingBox

Computes an instance of an `OrientedBoundingBox` of the given positions.
This is an implementation of Stefan Gottschalk's [Collision Queries using Oriented Bounding Boxes](http://gamma.cs.unc.edu/users/gottschalk/main.pdf) (PHD thesis).

- `positions` List of `Vector3` points that the bounding box will enclose.
- `result` Optional object onto which to store the result.

## Fields

### center: Vector3

The center position of the box.

### halfAxes: Matrix3

The transformation matrix, to rotate the box to the right position.

## Methods

### constructor(center = [0, 0, 0], halfAxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {

### constructor

- `center`=`Vector3.ZERO` The center of the box.
- `halfAxes`=`Matrix3.ZERO` The three orthogonal half-axes of the bounding box. Equivalently, the transformation matrix, to rotate and scale a cube centered at the origin.

### clone() : OrientedBoundingBox

Duplicates a OrientedBoundingBox instance.

Returns
- A new `OrientedBoundingBox` instance.

### equals(right: OrientedBoundingBox) : Boolean

Compares the provided OrientedBoundingBox componentwise and returns `true` if they are equal, `false` otherwise.

- `right` The second `OrientedBoundingBox`

Returns
- `true` if left and right are equal, `false` otherwise.

### intersectPlane(plane : Plane) : INTERSECTION

Determines which side of a plane the oriented bounding box is located.

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

### computePlaneDistances(position : Number[3], direction : Number[3] [, result : Number[2]]) : Number[2]

The distances calculated by the vector from the center of the bounding box to position projected onto direction.

If you imagine the infinite number of planes with normal direction, this computes the smallest distance to the closest and farthest planes from position that intersect the bounding box.

- `position` The position to calculate the distance from.
- `direction` The direction from position.
- `result` An optional Interval to store the nearest and farthest distances.

Returns

- The nearest and farthest distances on the bounding box from position in direction.


## Attribution

This class was ported from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
