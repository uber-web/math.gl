# Ellipsoid

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.0-blue.svg?style=flat-square" alt="From-v3.0" />
</p>

A quadratic surface defined in Cartesian coordinates by the equation `(x / a)^2 + (y / b)^2 + (z / c)^2 = 1`. Primarily used to represent the shape of planetary bodies.

The main use of this class is to convert between the "cartesian" and "cartographic" coordinate systems.

Rather than constructing this object directly, one of the provided constants is used.

## Usage

Determine the Cartesian representation of a Cartographic position on a WGS84 ellipsoid.

```js
import {toRadians} from '@math.gl/core';
import {Ellipsoid} from '@math.gl/geospatial';
const cartographicPosition = [toRadians(21), toRadians(78), 5000];
const cartesianPosition = Ellipsoid.WGS84.cartographicToCartesian(cartographicPosition);
```

Determine the Cartographic representation of a Cartesian position on a WGS84 ellipsoid.

```js
import {Ellipsoid} from '@math.gl/geospatial';
const cartesianPosition = [17832.12, 83234.52, 952313.73];
const cartographicPosition = Ellipsoid.WGS84.cartesianToCartographic(cartesianPosition);
```

Get the transform from local east-north-up at cartographic (0.0, 0.0) to Earth's fixed frame.

```js
import {Ellipsoid} from '@math.gl/geospatial';
const transformMatrix = Ellipsoid.WGS84.eastNorthUpToFixedFrame([0, 0, 0]);
```

## Static Fields

### Ellipsoid.WGS84 : Ellipsoid (readonly)

An Ellipsoid instance initialized to the WGS84 standard.

## Members

### radii : Vector3 (readonly)

Gets the radii of the ellipsoid.

### radiiSquared : Vector3 (readonly)

Gets the squared radii of the ellipsoid.

### radiiToTheFourth : Vector3 (readonly)

Gets the radii of the ellipsoid raise to the fourth power.

### oneOverRadii : Vector3 (readonly)

Gets one over the radii of the ellipsoid.

### oneOverRadiiSquared : Vector3 (readonly)

Gets one over the squared radii of the ellipsoid.

### minimumRadius : Number (readonly)

Gets the minimum radius of the ellipsoid.

### maximumRadius : Number

Gets the maximum radius of the ellipsoid.

## Methods

### constructor(x : Number, y : Number, z : Number)

- `x`=`0` The radius in the x direction.
- `y`=`0` The radius in the y direction.
- `z`=`0` The radius in the z direction.

Throws

- All radii components must be greater than or equal to zero.

### clone() : Ellipsoid

Duplicates an Ellipsoid instance.

- {Ellipsoid} [result] Optional object onto which to store the result, or undefined if a new
  instance should be created.

Returns

- The cloned `Ellipsoid`.

### equals(right : Ellipsoid) : Boolean

Compares this Ellipsoid against the provided Ellipsoid componentwise.

- `right` The other Ellipsoid. used.

Returns

- `true` if they are equal, `false` otherwise.

### toString() : String

Creates a string representing this Ellipsoid in the format used `'[radii.x, radii.y, radii.z]`.

Returns

- A string representing this ellipsoid in the format '(radii.x, radii.y, radii.z)'.

### cartographicToCartesian(cartographic : Number[3], result : Number[3]]) : Vector3 | Number[3]

Converts the provided cartographic to Cartesian representation.

- `cartographic` The cartographic position.
- `result` Optional object onto which to store the result.

Returns

- The modified `result` parameter or a new `Vector3` instance if none was provided.

### cartesianToCartographic(cartesian : Number[3], result : Number[3]]) : Vector3 | Number[3] | `undefined`

Converts the provided cartesian to cartographic representation. The cartesian is `undefined` at the center of the ellipsoid.

- `cartesian` The Cartesian position to convert to cartographic representation.
- `result` Optional object onto which to store the result.

Returns

- The modified result parameter, new `Vector3` instance if none was provided, or undefined if the cartesian is at the center of the ellipsoid.

### eastNorthUpToFixedFrame(origin : Number[3], ellpsoid : Ellipsoid, result : Number[16]) : Matrix4 | Number[16]

Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes centered at the provided origin to the provided ellipsoid's fixed reference frame.

The local axes are defined as:

- The `x` axis points in the local east direction.
- The `y` axis points in the local north direction.
- The `z` axis points in the direction of the ellipsoid surface normal which passes through the position.

- `origin` The center point of the local reference frame.
- `ellipsoid`=`Ellipsoid.WGS84` The ellipsoid whose fixed frame is used in the transformation.
- `result` Optional object onto which to store the result.

Returns

- The modified `result` parameter or a new `Matrix4` instance if none was provided.

Notes

- Calls `localFrameToFixedFrame` with `east`, `north`, `up` axis.

### localFrameToFixedFrame(String firstAxis, secondAxis : String, thirdAxis : String | null, origin : Number[3] \[, result : Number[16]]) : Matrix4 | Number[16]

Computes a 4x4 transformation matrix from a reference frame centered at the provided origin to the ellipsoid's fixed reference frame.

- `firstAxis` name of the first axis of the local reference frame. Must be 'east', 'north', 'up', 'west', 'south' or 'down'.
- `secondAxis` name of the second axis of the local reference frame.
- `thirdAxis` name of the third axis of the local reference frame. Can be omitted as it is implied by the cross product of the first two axis.
- `origin` The center point of the local reference frame.
- `result` Optional object onto which to store the result.

Returns

- A 4x4 transformation matrix from a reference frame, with first axis and second axis compliant with the parameters, in the modified `result` parameter or a new `Matrix4` instance if none was provided.

### geocentricSurfaceNormal(cartesian : Number[3], result : Number[3]]) : Vector3 | Number[3]

Computes the unit vector directed from the center of this ellipsoid toward the provided Cartesian position.

- `cartesian` - The WSG84 cartesian coordinate for which to to determine the geocentric normal.
- `result` - Optional object onto which to store the result.

Returns

- The modified result parameter or a new `Vector3` instance if none was provided.

### geodeticSurfaceNormalCartographic(cartographic : Number[3], result : Number[3]]) : Vector3 | Number[3]

Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.

- `cartographic` The cartographic position for which to to determine the geodetic normal.
- `result` Optional object onto which to store the result.

Returns

The modified result parameter or a new `Vector3` instance if none was provided.

### geodeticSurfaceNormal(cartesian : Number[3], result : Number[3]]) : Vector3 | Number[3]

Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.

- `cartesian` The Cartesian position for which to to determine the surface normal.
- `result` Optional object onto which to store the result.

Returns

- The modified `result` parameter or a new `Vector3` instance if none was provided.

### scaleToGeodeticSurface(cartesian : Number[3], result : Number[3]]) : Vector3 | Number[3] | `undefined`

Scales the provided Cartesian position along the geodetic surface normal so that it is on the surface of this ellipsoid. If the position is at the center of the ellipsoid, this function returns `undefined`.

- `cartesian` The Cartesian position to scale.
- `result` Optional object onto which to store the result.

Returns

- The modified result parameter, a new `Vector3` instance if none was provided, or undefined if the position is at the center.

### scaleToGeocentricSurface(cartesian : Number[3], result : Number[3]]) : Vector3 | Number[3]

Scales the provided Cartesian position along the geocentric surface normal so that it is on the surface of this ellipsoid.

- `cartesian` The Cartesian position to scale.
- `result` Optional object onto which to store the result.

Returns

- The modified `result` parameter or a new `Vector3` instance if none was provided.

### transformPositionToScaledSpace(position : Number[3], result : Number[3]]) : Vector3 | Number[3]

Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying its components by the result of `Ellipsoid.oneOverRadii`.

- `position` The position to transform.
- `result` Optional array into which to copy the result.

Returns

- The position expressed in the scaled space. The returned instance is the one passed as the `result` parameter if it is not undefined, or a new instance of it is.

### transformPositionFromScaledSpace(position : Number[3], result : Number[3]]) : Vector3 | Number[3]

Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying its components by the result of `Ellipsoid.radii`.

- `position` The position to transform.
- `result` Optional array to which to copy the result.

Returns

- The position expressed in the unscaled space. The returned array is the one passed as the `result` parameter, or a new `Vector3` instance.

### getSurfaceNormalIntersectionWithZAxis(position, buffer, result) : | undefined

Computes a point which is the intersection of the surface normal with the z-axis.

- `position` the position. must be on the surface of the ellipsoid.
- `buffer`=`0.0` A buffer to subtract from the ellipsoid size when checking if the point is inside the ellipsoid.
- `result` Optional array into which to copy the result.

Returns

- The intersection point if it's inside the ellipsoid, `undefined` otherwise.

Throws

- `position` is required.
- `Ellipsoid` must be an ellipsoid of revolution (`radii.x == radii.y`).
- Ellipsoid.radii.z must be greater than 0.

Notes:

- In earth case, with common earth datums, there is no need for this buffer since the intersection point is always (relatively) very close to the center.
- In WGS84 datum, intersection point is at max z = +-42841.31151331382 (0.673% of z-axis).
- Intersection point could be outside the ellipsoid if the ratio of MajorAxis / AxisOfRotation is bigger than the square root of 2

## Attribution

This class was ported from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
