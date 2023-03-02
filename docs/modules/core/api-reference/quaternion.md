# Quaternion

```js
class Quaternion extends MathArray extends Array
```

A class to handle Quaternions. More information on quternions can be found [here](http://en.wikipedia.org/wiki/Quaternion). The quaternion will be represented by an instance with `x`, `y`, `z`, `w` components that make a quaternion like: `xi + yj + zk + w`.

## Usage

```js
import {Quaternion} from '@math.gl/core';
```

## Members

### x, y, z, w

Gets or sets element 0, 1, 2 or 3 respectively

## Methods

Many of the most commonly used methods are inherited from [`MathArray`](./math-array.md):

- `quaternion.clone()`
- `quaternion.copy(array)`
- `quaternion.set(...args)`
- `quaternion.fromArray(array, offset = 0)`
- `quaternion.toString()`
- `quaternion.toArray(array = [], offset = 0)`
- `quaternion.equals(array)`
- `quaternion.exactEquals(array)`
- `quaternion.validate(array = this)`
- `quaternion.check(array = this)`
- `quaternion.normalize()`

Note that `Quaternion` is a subclass of the built in JavaScript `Array` and can thus technically be supplied as a parameter to any function expecting an `Array`.

### constructor

`constructor(x = 0, y = 0, z = 0, w = 1)`

### fromMatrix3(m: number[9]): this

Creates a quaternion from the given 3x3 rotation matrix. NOTE: The resultant quaternion is not normalized, so you should be sure to renormalize the quaternion yourself where necessary.

`fromMatrix3(m)`

### fromValues(x: number, y: number, z: number, w): number: this

Creates a new quat initialized with the given values

`fromValues(x, y, z, w)`

### identity(): this

Set a quat to the identity quaternion

`identity()`

### length(): number

Calculates the length of a quaternion

`length()`

### squaredLength(): number

Calculates the squared length of a quaternion

`squaredLength(a)`

@returnNumber}

### dot(): number

Calculates the dot product of two quat's

`quaternion.dot(a, b)`

### getAxisAngle

Gets the rotation axis and angle for a given quaternion.

`quaternion.getAxisAngle()`

If a quaternion is created with setAxisAngle, this method will return the same values as providied in the original parameter list OR functionally equivalent values.

Example: The quaternion formed by axis [0, 0, 1] and angle -90 is the same as the quaternion formed by [0, 0, 1] and 270. This method favors the latter.

### rotationTo

Sets a quaternion to represent the shortest rotation from one vector to another. Both vectors are assumed to be unit length.

`quaternion.rotationTo(vectorA, vectorB)`

### add

Adds two quaternions

`quaternion.add(a, b)`

### calculateW

Calculates the W component of a quat from the X, Y, and Z components. Any existing W component will be ignored.

`quaternion.calculateW()`

### conjugate

Calculates the conjugate of a quat If the quaternion is normalized, this function is faster than quat_inverse and produces the same result.

`quaternion.conjugate()`

### invert(): this

Calculates the inverse of a quat

`quaternion.invert()`

### lerp

Performs a linear interpolation between two quat's

`quaternion.lerp(a, b, t)`

### multiply

Multiplies two quat's

`multiply(a, b)`

### normalize

Normalize a quat

### rotateX

Rotates a quaternion by the given angle about the X axis

`rotateX(rad)`

### rotateY

Rotates a quaternion by the given angle about the Y axis

`rotateY(rad)`

### rotateZ

Rotates a quaternion by the given angle about the Z axis

`rotateZ(rad)`

### scale

Scales a quat by a scalar number

`scale(b)`

### set

Set the components of a quat to the given values

`set(i, j, k, l)`

### setAxisAngle

Sets a quat from the given angle and rotation axis, then returns it.

`setAxisAngle(axis, rad)`

### slerp

Performs a spherical linear interpolation between two quaternions

`slerp({start = [0, 0, 0, 1], target, ratio})`

s
