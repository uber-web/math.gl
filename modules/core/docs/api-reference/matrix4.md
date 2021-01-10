# Matrix4

A 4x4 matrix. Any arguments to `Matrix4` methods can be plain JavaScript arrays or other `math.gl` objects.

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
const projectionMatrix = new Matrix4().perspective({fov, aspect, near, far});
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

`class Matrix4 extends` [`Matrix`](/modules/core/docs/api-reference/matrix) `extends` [`MathArray`](modules/core/docs/api-reference/math-array) `extends` [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)`

Many basic methods are inherited:

- `matrix4.clone()`
- `matrix4.copy(array)`
- `matrix4.set(...args)`
- `matrix4.fromArray(array, offset = 0)`
- `matrix4.toString()`
- `matrix4.toArray(array = [], offset = 0)`
- `matrix4.equals(array)`
- `matrix4.exactEquals(array)`
- `matrix4.validate(array = this)`
- `matrix4.check(array = this)`
- `matrix4.normalize()`

Since `Matrix4` is a subclass of the built in JavaScript `Array` it can be used directly as a parameter to any function expecting an `Array`.

## Methods

##### constructor()

Creates an empty `Matrix4`

`new Matrix4()`

##### identity(): this

Sets the matrix to the multiplicative identity matrix.

`matrix4.identity()`

##### set(...number): this

Sets the elements of the matrix.

`matrix4.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)`

##### fromQuaternion(quaternion: Quaternion): this

Sets the matrix to a transformation corresponding to the rotations represented by the given quaternion.

`matrix4.fromQuaternion(quaternion)`

- `quaternion` (`Quaternion`) - the quaternion to create matrix from

##### frustum(options: {left: number, right: number, bottom: number, top: number, near: number, far: number}): this

Generates a frustum matrix with the given bounds. The frustum far plane can be infinite.

`matrix4.frustum({left, right, bottom, top, near, far})`

- `left` (`number`) - Left bound of the frustum
- `right` (`number`) - Right bound of the frustum
- `bottom` (`number`) - Bottom bound of the frustum
- `top` (`number`) - Top bound of the frustum
- `near` (`number`) - Near bound of the frustum
- `far` (`number`|`Infinity`) - Far bound of the frustum

##### lookAt(options?: {eye: number, center: number, up: number}): this

Generates a look-at matrix with the given eye position, focal point, and up axis

`matrix4.lookAt({eye, center, up})`

- `eye` (`Vector3`|`number[3]`) - Position of the viewer
- `center` (`=`) - 0, 0, 0] vec3 Point the viewer is looking at
- `up` (`=`) - 0, 1, 0] vec3 vec3 pointing up

##### ortho(options: {left: number, right: number, bottom: number, top: number, near?: number, far: number}): this

Generates a orthogonal projection matrix with the given bounds

`matrix4.ortho({left, right, bottom, top, near = 0.1, far = 500})`

- `left` (`number`) - Left bound of the frustum
- `right` (`number`) - Right bound of the frustum
- `bottom` (`number`) - Bottom bound of the frustum
- `top` (`number`) - Top bound of the frustum
- `near` (`number`) - Near bound of the frustum
- `far` (`number`) - Far bound of the frustum

##### orthographic

Generates an orthogonal projection matrix with the same parameters
as a perspective matrix (plus `focalDistance`).

- Matrix4.orthographic({fovy, aspect, focalDistance, near, far})

- `fovy` (`number`) - Vertical field of view in radians
- `aspect` (`number`) - Aspect ratio. typically viewport width/height
- `focalDistance` (`number`) - selects which plane in the perspective view frustum should be used to calculate the size of the orthographic view box.
- `near`=`0.1` (`number`) - Near bound of the frustum
- `far`=`500` (`Nmber`) - Far bound of the frustum

> In applications it is not unusual to want to offer both perspective and orthographic views and this method is supplied to make this as simple as possible.

##### perspective

Generates a perspective projection matrix with the given bounds. The frustum far plane can be infinite.

`matrix4.perspective({ fovy = 45 * Math.PI - / 180, aspect = 1, near = 0.1, far = 500 })`

- `fovy`=`45` (`number`) - Vertical field of view in radians (default is 45 degrees specified in radians)
- `aspect`=`1` (`number`) - Aspect ratio. typically viewport width/height
- `near`=`0.1` (`number`) - Near bound of the frustum
- `far`=`500` (`number`|`Infinity`) - Far bound of the frustum

##### determinant(): number

Returns the determinant of the matrix (does not modify the matrix).

`const determinant = matrix4.determinant()`

Returns (`number`) - the determinant

- If the determinant is zero, the matrix is not invertible.
- Determinant calculation is somewhat expensive.

##### transpose(): this

Sets this matrix to its transpose matrix.

`matrix4.transpose()`

- The transpose matrix mirrors the original matrix elements in the diagonal.

##### invert(): this

Sets this matrix to its inverse matrix.

`matrix4.invert()`

- The inverse matrix mirrors the original matrix elements in the diagonal.

##### multiplyLeft(matrix: number[16]): this

Multiplies in another matrix from the left

`matrix4.multiplyLeft(matrix4)`

- When using `Matrix4` to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course).

##### multiplyRight(matrix: number[16]): this

`matrix4.multiplyRight(matrix4)`

- When using `Matrix4` to transform vectors, the vectors are multiplied in from the right. This means that the multiplying in a matrix from the left will cause it to be applied last during transformation (unless additional matrices are multiplied in from the left of course).

##### rotateX(radians: number): this

Adds a rotation by the given angle around the X axis. Equivalent to right multiplying the new transform into the matrix but more performant.

`matrix4.rotateX(radians)`

##### rotateY(radians: number): this

Adds a rotation by the given angle around the Y axis.

`rotateY(radians)`

- Equivalent to right multiplying the new transform into the matrix but more performant.

##### rotateZ(radians: number): this

Adds a rotation by the given angle around the Z axis.

`matrix4.rotateZ(radians)`

- Equivalent to right multiplying the new transform into the matrix but more performant.

##### rotateXYZ(angles: [rx: number, ry: number, rz: number]): this

Adds successive rotations by the given angles around the X, Y and Z axis.

`rotateXYZ([rx, ry, rz])`

- Equivalent to right multiplying the new transform into the matrix but more performant.

##### rotateAxis(radians: number, axis: number[3]): this

Adds successive rotations by the given angles around the X, Y and Z axis.

`rotateAxis(radians, axis)`

Equivalent to right multiplying the new transform into the matrix but more performant.

##### scale(factor: number | number[3]): this

Adds a scaling transform, each axis can be scaled independently.

`matrix4.scale(factor)`

- `factor` (number) - scale factor to be applied to each axis.

`matrix4.scale([x, y, z])`

- `x` (number) - scale factor to be multiplied into x component
- `y` (number) - scale factor to be multiplied into y component
- `z` (number) - scale factor to be multiplied into z component

Equivalent to right multiplying the new transform into the matrix but more performant.

- During vector transformation all coordinates will be multiplied with the given factors.
- Scale with `-1` will flip the coordinate system in that axis.
- Scale with `0` will drop that component.

##### translate(scale: number[3]): this

Adds a translation to the matrix.

`matrix4.translate([x, y, z])`

- `x` (number) - translation to be added to the x component
- `y` (number) - translation to be added to the y component
- `z` (number) - translation to be added to the z component

Equivalent to right multiplying the new transform into the matrix but more performant.

During vector transformation the given translation values are added to each component of the vector being transformed.

#### Decomposition

##### getRotation(result?: number[16]) : number[16]

Returns a 4x4 rotation matrix.

##### getRotationMatrix3(result?: number[9]) : number[9]

Returns a 3x3 rotation matrix.

##### getTranslation(result?: number[3]) : number[3]

Returns the 3-element translation vector component of the affine transform described by the matrix.

For performance, an existing vector can be provided, if not a new vector will be returned.

##### getScale(result?: number[3]) : number[3]

Returns the 3-element scale vector component of the affine transform described by the matrix.

For performance, an existing vector can be provided, if not a new vector will be returned.

#### Point Transformations

##### transformAsPoint(vector : number[4]) : number[4]

Transforms any 2, 3 or 4 element vector as a "point" by multiplying it (from the right) with this matrix. `Point` here means that the returned vector will include any translations in this matrix.

`const vector = matrix4.transformPoint(vector, out=)`

- `vector` (`Array`|`Vector2`|`Vector3`|`Vector4`)
- `out` - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.
  Returns `out`, or a newly minted `Vector2`, `Vector3` or `Vector4`

- If `vector` is specified in homogeneous coordinates, `w` coordinate must NOT be `0`.
- If `vector` is specified in homogeneous coordinates the returned vector will be `w` adjusted, (i.e. `w` coordinate will be `1`, even if the supplied vector was not normalized).

##### transformAsVector(vector : number[4]) : number[4]

Transforms any 2, 3 or 4 element vector interpreted as a direction (i.e. all vectors are based in the origin so the transformation not pick up any translations from the matrix).

`const vector = matrix4.transformDirection(vector, out)`

- If `vector` is specified in homogeneous coordinates, `w` coordinate must be `0`.

## Remarks

- All transforms are effectively "right multiplied" onto the matrix (meaning that during transform they will be applied in opposite order).
- `Matrix4` is stored internally in column major format (per WebGL conventions). This only matters when you read out the matrix to use it with other software.
