# Vector2

`class Vector2 extends MathArray`

###  Members

get ELEMENTS() { return 2; }
get x()      { return this[0]; }
set x(value) { return this[0] = checkNumber(value); }
get y()      { return this[1]; }
set y(value) { return this[1] = checkNumber(value); }
/* eslint-disable no-multi-spaces, brace-style, no-return-assign */


## Methods

### constructor

Creates a new, empty vec2, or copies an existing vec2

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


### operation

`operation(operation, ...args)`
