# BoundingVolume (Interface)

An interface defining common operations for bounding volumes (i.e. `BoundingSphere`, `AxisAlignedBoundingBox`, `OrientedBoundingBox`).

## Global Functions

## Members

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

<!--
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

-->

## Attribution

This class was ported from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
