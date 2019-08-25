# Matrix4

A 4x4 matrix. Any arguments can be plain JavaScript arrays or other `math.gl` objects.

## Usage

```js
import {Matrix4} from `math.gl`;
```

Copy a matrix to a `Matrix4` so that it can be manipulated (and mutated) with `Matrix4` methods:
```js
const IDENTITY = [1, 0, ..., 1];
const m = new Matrix4(IDENTITY).translate([1, 0, 0]);
```

Create a perspective projection matrix
```js
const projectionMatrix = new Matrix4().perspective({fov, aspect, near, far})
```

Create an orthograhic projection matrix
```js
```

Invert a matrix
```js
const inverse = matrix.invert();
```

Transform a vector as a point (including translations)
```js
const transform = new Matrix4();
const vector2 = transform.transformPoint([0, 0]);
const vector3 = transform.transformPoint([0, 1, 2]);
const vector4 = transform.transformPoint([0, 1, 2, 1]);
```

Transform a vector as a direction (NOT including translations)
```js
const transform = new Matrix4();
const vector2 = transform.transformDirection([0, 0]);
const vector3 = transform.transformDirection([0, 1, 2]);
const vector4 = transform.transformDirection([0, 1, 2, 1]);
```

## Inheritance

`class Matrix4 extends [Matrix](./docs/api-reference/matrix) extends [MathArray](./docs/api-reference/math-array) extends [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)`

## Methods

Many of the most commonly used methods are inherited from [`MathArray`](./docs/api-reference/math-array.md):

* `matrix4.clone()`
* `matrix4.copy(array)`
* `matrix4.set(...args)`
* `matrix4.fromArray(array, offset = 0)`
* `matrix4.toString()`
* `matrix4.toArray(array = [], offset = 0)`
* `matrix4.equals(array)`
* `matrix4.exactEquals(array)`
* `matrix4.validate(array = this)`
* `matrix4.check(array = this)`
* `matrix4.normalize()`

Note that `Matrix4` is a subclass of the built in JavaScript `Array` and can thus e.g. be supplied as a parameter to any function expecting an `Array`.


### constructor

Creates an empty `Matrix4`

`new Matrix4()`


### identity

Sets the matrix to the multiplicative identity matrix.

`matrix4.identity()`


### set

Sets the elements of the matrix.

`matrix4.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)`


### fromQuaternion

Sets the matrix to a transformation corresponding to the rotations represented by the given quaternion.

`matrix4.fromQuaternion(quaternion)`

* `quaternion` (`Quaternion`) - the quaternion  to create matrix from


### frustum

Generates a frustum matrix with the given bounds. The frustum far plane can be infinite.

`matrix4.frustum({left, right, bottom, top, near, far})`
* `left` (`Number`) - Left bound of the frustum
* `right` (`Number`) - Right bound of the frustum
* `bottom` (`Number`) - Bottom bound of the frustum
* `top` (`Number`) - Top bound of the frustum
* `near` (`Number`) - Near bound of the frustum
* `far` (`Number`|`Infinity`) - Far bound of the frustum


### lookAt

Generates a look-at matrix with the given eye position, focal point, and up axis

`matrix4.lookAt({eye, center, up})`
* `eye` (`Vector3`|`Number[3]`) - Position of the viewer
* `center` (`=`) - 0, 0, 0]  vec3  Point the viewer is looking at
* `up` (`=`) - 0, 1, 0]  vec3  vec3 pointing up


### ortho

Generates a orthogonal projection matrix with the given bounds

`matrix4.ortho({left, right, bottom, top, near = 0.1, far = 500})`
* `left` (`Number`) - Left bound of the frustum
* `right` (`Number`) - Right bound of the frustum
* `bottom` (`Number`) - Bottom bound of the frustum
* `top` (`Number`) - Top bound of the frustum
* `near` (`Number`) - Near bound of the frustum
* `far` (`Number`) - Far bound of the frustum


### orthographic

Generates an orthogonal projection matrix with the same parameters
as a perspective matrix (plus `focalDistance`).

* Matrix4.orthographic({fovy, aspect, focalDistance, near, far})

* `fovy` (`Number`) - Vertical field of view in radians
* `aspect` (`Number`) - Aspect ratio. typically viewport width/height
* `focalDistance` (`Number`) - selects which plane in the perspective view frustum should be used to calculate the size of the orthographic view box.
* `near`=`0.1` (`Number`) - Near bound of the frustum
* `far`=`500` (`Nmber`) - Far bound of the frustum

> In applications it is not unusual to want to offer both perspective and orthographic views and this method is supplied to make this as simple as possible.


### perspective

Generates a perspective projection matrix with the given bounds. The frustum far plane can be infinite.

`matrix4.perspective({
  fovy = 45 * Math.PI - / 180,
  aspect = 1,
  near = 0.1,
  far = 500
})`
* `fovy`=`45` (`Number`) - Vertical field of view in radians (default is 45 degrees specified in radians)
* `aspect`=`1` (`Number`) - Aspect ratio. typically viewport width/height
* `near`=`0.1` (`Number`) - Near bound of the frustum
* `far`=`500` (`Number`|`Infinity`) - Far bound of the frustum


### determinant()

Returns the determinant of the matrix (does not modify the matrix).

`const determinant = matrix4.determinant()`

Returns (`Number`) - the determinant

* If the determinant is zero, the matrix is not invertible.
* Determinant calculation is somewhat expensive.


### transpose

Sets this matrix to its transpose matrix.

`matrix4.transpose()`

* The transpose matrix mirrors the original matrix elements in the diagonal.


### invert

Sets this matrix to its inverse matrix.

`matrix4.invert()`

* The inverse matrix mirrors the original matrix elements in the diagonal.


### multiplyLeft

Multiplies in another matrix from the left

`matrix4.multiplyLeft(matrix4)`

* When using `Matrix4` to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course).


### multiplyRight

`matrix4.multiplyRight(matrix4)`

* When using `Matrix4` to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course).

### rotateX

Adds a rotation by the given angle around the X axis. Equivalent to right multiplying the new transform into the matrix but more performant.

`matrix4.rotateX(radians)`


### rotateY

Adds a rotation by the given angle around the Y axis.

`rotateY(radians)`

* Equivalent to right multiplying the new transform into the matrix but more performant.


### rotateZ

Adds a rotation by the given angle around the Z axis.

`matrix4.rotateZ(radians)`

* Equivalent to right multiplying the new transform into the matrix but more performant.


### rotateXYZ([rx, ry, rz])

Adds successive rotations by the given angles around the X, Y and Z axis.

`rotateXYZ([rx, ry, rz])`

* Equivalent to right multiplying the new transform into the matrix but more performant.


### rotateAxis(radians, axis)

Adds successive rotations by the given angles around the X, Y and Z axis.

`rotateAxis(radians, axis)`

Equivalent to right multiplying the new transform into the matrix but more performant.


### scale

Adds a scaling transform, each axis can be scaled independently.

`matrix4.scale(factor)`
* `factor` (Number) - scale factor to be applied to each axis.

`matrix4.scale([x, y, z])`
* `x` (Number) - scale factor to be multiplied into x component
* `y` (Number) - scale factor to be multiplied into y component
* `z` (Number) - scale factor to be multiplied into z component

Equivalent to right multiplying the new transform into the matrix but more performant.

* During vector transformation all coordinates will be multiplied with the given factors.
* Scale with `-1` will flip the coordinate system in that axis.
* Scale with `0` will drop that component.


### translate

Adds a translation to the matrix.

`matrix4.translate([x, y, z])`
* `x` (Number) - translation to be added to the x component
* `y` (Number) - translation to be added to the y component
* `z` (Number) - translation to be added to the z component

Equivalent to right multiplying the new transform into the matrix but more performant.

During vector transformation the given translation values are added to each component of the vector being transformed.


### transformPoint(vector : Number[4]) : Number[4]

Transforms any 2, 3 or 4 element vector as a "point" by multiplying it (from the right) with this matrix. `Point` here means that the returned vector will include any translations in this matrix.

`const vector = matrix4.transformPoint(vector, out=)`

* `vector` (`Array`|`Vector2`|`Vector3`|`Vector4`)
* `out` - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.
Returns `out`, or a newly minted `Vector2`, `Vector3` or `Vector4`

* If `vector` is specified in homogeneous coordinates, `w` coordinate must NOT be `0`.
* If `vector` is specified in homogeneous coordinates the returned vector will be `w` adjusted, (i.e. `w` coordinate will be `1`, even if the supplied vector was not normalized).


### transformDirection(vector : Number[4]) : Number[4]

Transforms any 2, 3 or 4 element vector interpreted as a direction (i.e. all vectors are based in the origin so the transformation not pick up any translations from the matrix).

`const vector = matrix4.transformDirection(vector, out)`

* If `vector` is specified in homogeneous coordinates, `w` coordinate must be `0`.


### transformVector(vector : Number[4]) : Number[4] \(DEPRECATED)

Confusingly corresponds to `transformPoint`.

`transformVector(vector, out)`

* `vector` (`Array`|`Vector2`|`Vector3`|`Vector4`)
* `out` - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.
Returns `out`, or a newly minted `Vector2`, `Vector3` or `Vector4`


### transformByMatrix3(vector : Number[4]) : Number[4]

Transforms

### transformByMatrix2(vector : Number[4]) : Number[4]

### getRotation() : Matrix4

Returns rotation matrix (4 * 4).

### getRotationMatrix3() : Matrix3 

Returns rotation matrix (3 * 3).

## Remarks

* All transforms are effectively "right multiplied" onto the matrix (meaning that during transform they will be applied in opposite order).
* `Matrix4` is stored internally in column major format (per WebGL conventions). This only matters when you read out the matrix to use it with other software.
