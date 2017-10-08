# Vector2

A two dimensional vector

```js
class Vector2 extends MathArray extends Array
```

## Usage

```js
import {Vector2} from 'math.gl';
```

##  Members

### x, y

Gets or sets element 0 or 1 respectively


## Methods

Many of the most commonly used `Vector2` methods are inherited from [`MathArray`](./docs/api-reference/math-array.md):

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

Note that `Vector2` is a subclass of the built in JavaScript `Array` and can thus e.g. be supplied as a parameter to any function expecting an `Array`.


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
