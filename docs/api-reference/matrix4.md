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

Transform a vector
```
const transform = new Matrix4()...;
const vector2 = transform.transformVector([0, 0]);
const vector3 = transform.transformVector([0, 1, 2]);
const vector4 = transform.transformVector([0, 1, 2, 1]);
```


## Methods

### constructor(...args)

### identity()

### fromQuaternion

`fromQuaternion(quaternion)`

Calculates a 4x4 matrix from the given quaternion
* `quaternion` Quaternion to create matrix from

### set

`set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33)`

### frustum

Generates a frustum matrix with the given bounds
`frustum({left, right, bottom, top, near, far})`
* left  Number  Left bound of the frustum
* right Number  Right bound of the frustum
* bottom  Number  Bottom bound of the frustum
* top Number  Top bound of the frustum
* near  Number  Near bound of the frustum
* far Number  Far bound of the frustum

### lookAt
Generates a look-at matrix with the given eye position, focal point, and up axis
`lookAt({eye, center, up})`
* eye vec3  Position of the viewer
* center = [0, 0, 0]  vec3  Point the viewer is looking at
* up = [0, 1, 0]  vec3  vec3 pointing up

### ortho
Generates a orthogonal projection matrix with the given bounds
`ortho({left, right, bottom, top, near = 0.1, far = 500})`
* left  number  Left bound of the frustum
* right number  Right bound of the frustum
* bottom  number  Bottom bound of the frustum
* top number  Top bound of the frustum
* near  number  Near bound of the frustum
* far number  Far bound of the frustum

### perspective
Generates a perspective projection matrix with the given bounds

`perspective({
  fov = 45 * Math.PI / 180,
  aspect = 1,
  near = 0.1,
  far = 500
})`
* fovy  number  Vertical field of view in radians
* aspect  number  Aspect ratio. typically viewport width/height
* near  number  Near bound of the frustum
* far number  Far bound of the frustum

## Inherited from MathArray

### clone()
### copy(array)
### set(...args)
### fromArray(array, offset = 0)
### toString()
### toArray(array = [], offset = 0)
### equals(array)
### exactEquals(array)
### validate(array = this)
### check(array = this)
### normalize()

## Accessors

### determinant()

## Modifiers

### transpose()

### invert()

### multiplyLeft(a)

### multiplyRight(a)

### rotateX(radians)

Rotates a matrix by the given angle around the X axis

### rotateY(radians)

Rotates a matrix by the given angle around the Y axis.

### rotateZ(radians)

Rotates a matrix by the given angle around the Z axis.

### rotateXYZ([rx, ry, rz])

### rotateAxis(radians, axis)

### scale(vec)

### translate(vec)

### transformVector(vector, out)

Transforms any 2, 3 or 4 element vector

`transformVector(vector, out)`

* `vector` (`Array`|`Vector2`|`Vector3`|`Vector4`)
* `out` - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.
Returns `out`, or a newly minted `Vector2`, `Vector3` or `Vector4`


### transformPoint

Transforms a point by multiplying it with this matrix. `Point` here means that the returned vector will i.e. includes translations, if any, in this matrix.

`transformPoint(vector, out)`
* `vector` (`Array`|`Vector2`|`Vector3`|`Vector4`)
* `out` - unless supplied, will be a Vector2, Vector3 or Vector4, matching the length of input vector.
Returns `out`, or a newly minted `Vector2`, `Vector3` or `Vector4`


* If `vector` is specified in homogenous coordinates, `w` coordinate must not be `0`.
* If `vector` is specified in homogenous coordinates the returned vector will be `w` adjusted, (i.e. `w` coordinate will be `1`, even if the supplied vector was not normalized).


### transformDirection

Transforms a vector (i.e. does not includes any translations)

`transformDirection(vector, out)`



## Remarks

* All transforms are effectively "right multiplied" onto the matrix (meaning that during transform they will be applied in opposite order).
* `Matrix4` is stored internally in column major format (per WebGL conventions). This only matters when you read out the matrix to use it with other software.
