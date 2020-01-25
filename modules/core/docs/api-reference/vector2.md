# Vector2

A two dimensional vector


## Usage

```js
import {Vector2} from '@math.gl/core';
const vector = new Vector2(1, 1);
```

## Inheritance

`Vector2` extends [`Vector`](./docs/api-reference/vector) extends [`MathArray`](./docs/api-reference/math-array) extends [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Many commonly used `Vector2` methods are inherited from `Vector` and `MathArray`:

* `Vector2.clone()`
* `Vector2.copy(array)`
* `Vector2.set(...args)`
* `Vector2.fromArray(array, offset = 0)`
* `Vector2.toString()`
* `Vector2.toArray(array = [], offset = 0)`
* `Vector2.equals(array)`
* `Vector2.exactEquals(array)`
* `Vector2.validate(array = this)`
* `Vector2.check(array = this)`
* `Vector2.normalize()`

Also note that `Vector2` is a subclass of the built in JavaScript `Array` and can thus be used wherever an Array is expected. It can e.g. supplied as a parameter to any function expecting an `Array`.


##  Members

### x, y

Gets or sets element 0 or 1 respectively

### constructor

Creates a new, empty `Vector2`, or copies an existing `Vector2`

```js
constructor(x = 0, y = 0)
constructor([x, y])
```


### set

`set(x, y)`


### add

Add zero or more vectors to current vector.

`add(...vectors)`


### subtract

Subtract zero or more vectors from current vector

`subtract(...vectors)`


### multiply

Multiply zero or more vectors with current vector

`multiply(...vectors)`


### divide

Divide zero or more vectors with current vector

`divide(...vectors)`


### scale

`scale(scale)`


### scaleAndAdd

`scaleAndAdd(vector, scale)`


### negate

`negate()`


### normalize

`normalize()`


### dot

`dot(vector)`


### lerp

`lerp(vector, coeff)`


### horizontalAngle

Calculates counterclockwise angle in radians starting from positive x axis

`horizontalAngle()`

Note: returns `Math.atan2(this.y, this.x)`


### verticalAngle

Calculates clockwise angle in radians starting from positive y axis

`verticalAngle()`

Note: returns `Math.atan2(this.x, this.y)`

### transform(matrix4 : Number[16]) : Vector4

Equivalent to `transformAsPoint`.

### transformAsPoint(matrix4 : Number[16]) : Vector4

Transforms this vector by the provided 4x4 matrix as a point (i.e includes translations).

Note: Implicitly extends the vector to `[x, y, 0, 1]` before applying the 4x4 transformation.

### transformAsVector(matrix4 : Number[16]) : Vector4

Transforms this vector by the provided 4x4 matrix as a vector (i.e does not include translations).

Note: Implicitly extends the vector to `[x, y, 0, 0]` before applying the 4x4 transformation.

### transformByMatrix3(matrix3 : Number[9]) : Vector4

Transforms this vector by the provided 3x3 matrix.

### transformByMatrix2x3(matrix2 : Number[6]) : Vector4

Transforms this vector  by the provided 2x3 matrix (A pure 2D transform that can incorporate translations).

### transformByMatrix2(matrix2 : Number[4]) : Vector4

Transforms this vector by the provided 2x2 matrix.
