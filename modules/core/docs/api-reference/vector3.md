# Vector3

```js
class Vector3 extends MathArray extends Array
```

## Usage

```js
import {Vector3} from '@math.gl/core';
const vector = new Vector3(1, 1, 1);
```

Accessors

```js
v.x = 2;
assert(v[0] === v.x);
```

Simple rotations

```js
const v = new Vector3([1, 0, 0]);
v.rotateX({radians: Math.PI / 4}); // Rotate around the origin
v.rotateX({radians: Math.PI / 4, origin: [1, 1, 0]}); // Rotate around the specified point
```

Scaling with constants

```js
const u = v.scale(-1); // Reverse direction vector
```

Scaling with vectors is very flexible, you can e.g. set a component to zero, or flip a component's sign.

```js
const u = v.scale([1, 1, 0]); // Set z component to zero
const w = v.scale([1, -1, 1]); // Flip y component
```

## Inheritance

`Vector3` extends [`Vector`](./docs/api-reference/vector) extends [`MathArray`](./docs/api-reference/math-array) extends [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Members

### x, y, z

Gets or sets element 0, 1 or 2 respectively

## Methods

Many of the most commonly used `Vector3` methods are inherited from [`MathArray`](./docs/api-reference/math-array.md):

- `Vector3.clone()`
- `Vector3.copy(array)`
- `Vector3.set(...args)`
- `Vector3.fromArray(array, offset = 0)`
- `Vector3.toString()`
- `Vector3.toArray(array = [], offset = 0)`
- `Vector3.equals(array)`
- `Vector3.exactEquals(array)`
- `Vector3.validate(array = this)`
- `Vector3.check(array = this)`
- `Vector3.normalize()`

Note that `Vector3` is a subclass of the built in JavaScript `Array` and can thus e.g. be supplied as a parameter to any function expecting an `Array`.

### constructor(x = 0, y = 0, z = 0)

### set(x, y, z)

### length()

### distance(vector)

### angle(vector)

### dot(vector)

// MODIFIERS

### add(...vectors)

### subtract(...vectors)

### multiply(...vectors)

### divide(...vectors)

### scale(scale)

Scale component wise with a scalar or another `Vector3`.

- `scale` (Number|Vector3) - scale component wise with a scalar or another `Vector3`.

### negate

`negate()`

### inverse

`inverse()`

### normalize

`normalize()`

### cross

`cross(vector)`

### lerp

`lerp(vector, coeff)`

### rotateX

Rotate a 3D vector around the x-axis

`rotateX({radians, origin})`

- `radians` (Number) - angle to rotate.
- `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)

### rotateY

Rotate a 3D vector around the y-axis

`rotateY({radians, origin})`

- `radians` (Number) - angle to rotate.
- `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)

### rotateZ(radians)

Rotate a 3D vector around the z-axis

`rotateZ({radians, origin})`

- `radians` (Number) - angle to rotate.
- `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)

### transform(matrix4 : Number[16]) : Vector4

Transforms the vector by the provided 4x4 matrix.

Note: Scales the resulting vector to ensure that `w`, if non-zero, is set to `1`.

### transformByMatrix3(matrix3 : Number[9]) : Vector4

Transforms the vector by the provided 3x3 matrix.

### transformByMatrix2(matrix2 : Number[4]) : Vector4

Transform the vector's `x` and `y` values by the provided 2x2 matrix.

### transformByQuaternion(quaternion : Number[4]) : Vector4

Transform the vector by the provided `quaternion`.
