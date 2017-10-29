# MathArray

```js
class MathArray extends Array
```

## Usage

`MathArray` is a base class, and should not be instantiated directly.

Cloning an object
```js
const clone = vector.clone();
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



## Methods

### clone

`array.clone()`


### copy

`array.copy(array)`


### set

`array.set(...args)`


### fromArray

`array.fromArray(array, offset = 0)`


### toString

Calls `formatString` with the global math.gl config.

`array.toString()`

### formatString

`array.formatString(config)`


### toArray

`array.toArray(array = [], offset = 0)`


### toFloat32Array

`array.toFloat32Array()`


### equals

`array.equals(array)`


### exactEquals

`array.exactEquals(array)`


### length

`array.length()`


### lengthSquared

`array.lengthSquared()`


### distance

`array.distance(mathArray)`


### distanceSquared

`array.distanceSquared(mathArray)`


### normalize

`array.normalize()`


### validate

Checks if a `MathArray` contains valid values.

`array.validate(array = this)`

Returns `false` if any value fails `Number.isFinite` test.


### check

If `config.debug` is true, validates the `MathArray` and throws an error if it does not contains valid values.

`array.check(array = this)`

Mote: This method is called by all mutating methods.
