# Vector4

```js
class Vector4 extends MathArray extends Array
```

`Vector4`s, while general, are provided to hold "homogenous" coordinates. It is not necessary to understand projective geometry to use then, but see the remarks for some background.

`Vector4`s are intended to be transformed with `Matrix4`s.

The fourth component (`w`) is usually set to either
- `0` to represent a vector
- `1` to represent a point
Setting `w` to 0 prevents translation when multiplied with a 4x4 matrix.

## Usage

```js
import {Vector4} from 'math.gl';
const vector = new Vector4(1, 1, 1, 0);
```

## Inheritance

`class Vector4 extends [Vector](./docs/api-reference/vector) extends [MathArray](./docs/api-reference/math-array) extends [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)`

## Members

### x, y, z, w

Gets or sets element 0, 1, 2 or 3 respectively


## Methods

Many of the most commonly used `Vector2` methods are inherited from [`MathArray`](./docs/api-reference/math-array.md):

* `Vector4.clone()`
* `Vector4.copy(array)`
* `Vector4.set(...args)`
* `Vector4.fromArray(array, offset = 0)`
* `Vector4.toString()`
* `Vector4.toArray(array = [], offset = 0)`
* `Vector4.equals(array)`
* `Vector4.exactEquals(array)`
* `Vector4.validate(array = this)`
* `Vector4.check(array = this)`
* `Vector4.normalize()`

Note that `Vector2` is a subclass of the built in JavaScript `Array` and can thus e.g. be supplied as a parameter to any function expecting an `Array`.


### constructor(x? : Number, y? : Number, z? : Number, w? : Number)

`new Vector4(x = 0, y = 0, z = 0, w = 0)`

Creates a new, empty `Vector4`

### set(x? : Number, y? : Number, z? : Number, w? : Number) : Vector4

Updates a `Vector4`

### distance(vector : Number[4]) : Vector4

Returns the distance to the specifed Vector.

### distanceSquared(vector : Number[4]) : Vector4

Returns the squared distance to the specifed Vector. Fast to calculate than distance and often sufficient for e.g. sorting etc.

### dot(vector : Number[4]) : Number

Calculates the dot product with the supplied `vector`.

### add(vector : Number[4]) : Vector4

`add(...vectors)`

### subtract(vector : Number[4]) : Vector4

`subtract(...vectors)`

### multiply(vector : Number[4]) : Vector4

`multiply(...vectors)`

### divide(vector : Number[4]) : Vector4

`divide(...vectors)`

### scale(vector : Number[4]) : Vector4

`scale(scale)`

### negate() : Vector4

Negates each element in the vector.

### inverse() : Vector4

Inverses (`x = 1/x`) each element in the vector.

### normalize() : Vector4

Normalizes the vector. Same direction but `len()` will now return `1`.

### lerp(vector : Number[4], coefficient : Number) : Vector4

Linearly interpolates between the vectors current value and the supplied `vector`.

### transform(matrix4 : Number[16]) : Vector4

Transforms the vector by the provided 4x4 matrix.

Note: Scales the resulting vector to ensure that `w`, if non-zero, is set to `1`.

### transformByMatrix3(matrix3 : Number[9]) : Vector4

Transforms the vector's `x`, `y` and `z` values by the provided 3x3 matrix.

### transformByMatrix2(matrix2 : Number[4]) : Vector4

Transform the vector's `x` and `y` values by the provided 2x2 matrix.

### transformByQuaternion(quaternion : Number[4]) : Vector4

Transform the vector by the provided `quaternion`.
