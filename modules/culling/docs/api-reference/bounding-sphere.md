# BoundingSphere

A [bounding sphere](https://en.wikipedia.org/wiki/Bounding_sphere) with a center and a radius.

## Usage

Create a bounding sphere around the unit cube
```js
import {BoundingSphere} from '@math.gl/culling';
cont sphere = new BoundingSphere().fromCornerPoints(
  [-0.5, -0.5, -0.5],
  [0.5, 0.5, 0.5]
);
```

Sort bounding spheres from back to front
```js
import {BoundingSphere} from '@math.gl/culling';
const spheres = [new BoundingSphere(...), new BoundingSphere(...), ...];
const cameraPosWC = ...;
spheres.sort(
  (a, b) => b.distanceSquaredTo(b, cameraPosWC) - a.distanceSquaredTo(a.cameraPosWC)
);
```

## Global Functions

### makeBoundingSphereFromPoints(positions : iterator, result? : BoundingSphere) : BoundingSphere

Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points. The bounding sphere is computed by running two algorithms, a naive algorithm and Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.

- `positions` An iterable (e.g. array) of points that the bounding sphere will enclose. Each point must have `x`, `y`, and `z` properties.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if one was not provided.

See [Bounding Sphere computation article](http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/)


## Fields

### center : Vector3

The center point of the sphere.

### radius : Number

The radius of the sphere.



## Members

### constructor(center : Number[3], radius : Number)

Creates a new `BoundingSphere`

- `center`=`[0, 0, 0]` The center of the bounding sphere.
- `radius`=`0.0` The radius of the bounding sphere.

### fromCenterRadius(center : Number[3], radius : Number) : BoundingSphere

Sets the `BoundingSphere` from center and radius

- `center`=`[0, 0, 0]` The center of the bounding sphere.
- `radius`=`0.0` The radius of the bounding sphere.

### fromCornerPoints(corner : Number[3], oppositeCorner : Number[3], result? : BoundingSphere) : BoundingSphere

Computes a bounding sphere from the two corner points of an axis-aligned bounding box.  The sphere tighly and fully encompases the box.

- `corner` The minimum height over the rectangle.
- `oppositeCorner` The maximum height over the rectangle.

### fromBoundingSpheres(boundingSpheres : BoundingSphere[]) : BoundingSphere

Computes a tight-fitting bounding sphere enclosing the provided array of bounding spheres.

- `boundingSpheres` The array of bounding spheres.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

### clone()

Duplicates a `BoundingSphere` instance.

Returns
- A new `BoundingSphere` instance

### equals(right : BoundingSphere) Boolean

Compares the provided `BoundingSphere` componentwise and returns `true` if they are equal, `false` otherwise.

- `right` The second `BoundingSphere`.

Returns
- `true` if left and right are equal, `false` otherwise.

### union(right : BoundingSphere) : BoundingSphere

Computes a bounding sphere that contains both the this and the `right` bounding spheres.

- `right` The second `BoundingSphere`.

### expand(point : Number[3]) : BoundingSphere

Computes a bounding sphere by enlarging the provided sphere to contain the provided point.

- `point` A point to enclose in a bounding sphere.

### intersectPlane(plane : Plane) : INTERSECTION

Determines which side of a plane a sphere is located.

- `plane` The plane to test against.
Returns
- `INTERSECTION.INSIDE` if the entire sphere is on the side of the plane the normal is pointing
- `INTERSECTION.OUTSIDE` if the entire sphere is on the opposite side
- `INTERSECTION.INTERSECTING` if the sphere intersects the plane.

### transform(transform : Number[16]) : BoundingSphere

Applies a 4x4 affine transformation matrix to a bounding sphere.

- `transform` The transformation matrix to apply to the bounding sphere.

### distanceSquaredTo(point) : Number

Computes the estimated distance squared from the closest point on a bounding sphere to a point.

- `point` The point

Returns
- The estimated distance squared from the bounding sphere to the point.


### transformWithoutScale(sphere, transform, result)

Applies a 4x4 affine transformation matrix to a bounding sphere where there is no scale
The transformation matrix is not verified to have a uniform scale of 1.
This method is faster than computing the general bounding sphere transform using {@link BoundingSphere.transform}.

@param {BoundingSphere} sphere The bounding sphere to apply the transformation to.
@param {Matrix4} transform The transformation matrix to apply to the bounding sphere.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

@example
var modelMatrix = Transforms.eastNorthUpToFixedFrame(positionOnEllipsoid);
var boundingSphere = new BoundingSphere();
var newBoundingSphere = BoundingSphere.transformWithoutScale(boundingSphere, modelMatrix);


### computePlaneDistances (sphere, position, direction, result)

The distances calculated by the vector from the center of the bounding sphere to position projected onto direction plus/minus the radius of the bounding sphere.

If you imagine the infinite number of planes with normal direction, this computes the smallest distance to the closest and farthest planes from position that intersect the bounding sphere.

@param {BoundingSphere} sphere The bounding sphere to calculate the distance to.
@param {Cartesian3} position The position to calculate the distance from.
@param {Cartesian3} direction The direction from position.
@param {Interval} [result] A Interval to store the nearest and farthest distances.
@returns {Interval} The nearest and farthest distances on the bounding sphere from position in direction.


### projectTo2D(sphere, projection, result)

Creates a bounding sphere in 2D from a bounding sphere in 3D world coordinates.

@param {BoundingSphere} sphere The bounding sphere to transform to 2D.
@param {Object} [projection=GeographicProjection] The projection to 2D.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

## Attribution

This class was ported from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
