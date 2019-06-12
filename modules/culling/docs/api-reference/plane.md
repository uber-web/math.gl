# Plane

A plane in Hessian Normal Form defined by `ax + by + cz + d = 0` where `[a, b, c]` is the plane's `normal`, `d` is the signed distance to the plane (from the origin along the normal), and `[x, y, z]` is any point on the plane.

## Usage


Create the plane `x=0`
```js
import {Plane} from '@math.gl/culling';
const plane = new Plane([1, 0, 0], 0.0);
```

Create a tangent plane for a cartographic coordinate
```js
import {Plane} from '@math.gl/culling';
import {Ellipsoid} from '@math.gl/geospatial';
const point = [-72.0, 40.0, 0];
const normal = Ellipsoid.WGS84.geodeticSurfaceNormal([-72.0, 40.0]);
const tangentPlane = new Plane().fromPointNormal(point, normal);
```

## Fields

#### normal : Vector3

The plane's normal.

#### distance : Number

The shortest distance from the origin to the plane. The sign of `distance` determines which side of the plane the origin is on. If `distance` is positive, the origin is in the half-space in the direction of the normal; if negative, the origin is in the half-space opposite to the normal; if zero, the plane passes through the origin.

## Methods

#### constructor(normal : Number[3], distance : Number)

- `Vector3` normal The plane's normal (normalized).
- Number distance The shortest distance from the origin to the plane. The sign of `distance` determines which side of the plane the origin is on. If `distance` is positive, the origin is in the half-space in the direction of the normal; if negative, the origin is in the half-space opposite to the normal; if zero, the plane passes through the origin.

Throws
- Normal must be normalized


#### fromPointNormal(point : Number[3], normal : Number[3]) : Plane

Creates a plane from a normal and a point on the plane.

- `Vector3` point The point on the plane.
- `Vector3` normal The plane's normal (normalized).
- Plane [result] The object onto which to store the result.

Throws
- Normal must be normalized

#### Plane.fromCoefficients(coefficients : Number[4]) : Plane

Creates a plane from the general equation

- `coefficients` The plane coefficients (normalized).

Throws
- Normal must be normalized

#### clone() : Plane

Duplicates a Plane instance.

Returns
- A new Plane instance with the same values

#### equals(right : Plane) : Boolean

Compares the provided Planes by normal and distance and returns `true` if they are equal, `false` otherwise.

- `right` The second plane.

Returns
- `true` if left and right are equal, `false` otherwise.

#### getPointDistance(point : Number[3]) : Number

Computes the signed shortest distance of a point to a plane. The sign of the distance determines which side of the plane the point is on. If the distance is positive, the point is in the half-space in the direction of the normal; if negative, the point is in the half-space opposite to the normal; if zero, the plane passes through the point.

- `point` The point.

Returns
- Number The signed shortest distance of the point to the plane.

#### projectPointOntoPlane(point : Number[3] [, result : Number[3]]) : Number[3]

Projects a point onto the plane.
- `point` The point to project onto the plane
- `result` The result point. If undefined, a new `Array` will be created.

Returns
- The modified result parameter or a new `Vector3` instance if one was not provided.

#### transform(transform : Number[16]) : Plane

Transforms the plane by the given transformation matrix.

- Matrix4 transform The transformation matrix.
- Plane [result] The object into which to store the result.

Returns
- Plane The plane transformed by the given transformation matrix.

## Attribution

This class was ported from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
