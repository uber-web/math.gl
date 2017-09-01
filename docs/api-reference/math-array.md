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


### validate

`array.validate(array = this)`


### check

`array.check(array = this)`


### normalize

`array.normalize()`


