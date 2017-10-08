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
```

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


### constructor

`new Vector4(x = 0, y = 0, z = 0, w = 0)`

Creates a new, empty `Vector4`

### set(x, y, z, w)

Updates a `Vector4`


### distance

`distance(vector)`


### add

`add(...vectors)`


### subtract

`subtract(...vectors)`


### multiply

`multiply(...vectors)`


### divide

`divide(...vectors)`


### scale

`scale(scale)`


### negate
`negate()`


### inverse
`inverse()`


### normalize
`normalize()`


### dot

`dot(vector)`


### lerp

`lerp(vector, coeff)`

