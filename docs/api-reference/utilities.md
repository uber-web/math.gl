# Math Utility Functions

GLSL math function equivalents. Work on both single values and vectors.


## Usage

```js
import {config, equals} from 'math.gl';
```

Setting configuration
```js
import {config} from 'math.gl';
config.EPSILON = 1e-12;
config.debug = true;
config.printRowMajor = true;
config.precision = 4;
```

## Functions

### configure

`configure(options)`


### checkNumber

`checkNumber(value)`


### formatValue

`formatValue(value, precision = config.precision || 4)`


### isArray

Returns true if value is either an array or a typed array

`isArray(value)`

Note: does not return true for ArrayBuffers and DataViews


### clone

`clone(array)If the array has a clone function, calls it, otherwise returns a copy`


### radians

`radians(degrees)`

GLSL equivalent: Works on single values and vectors


### degrees

`degrees(radians)`

GLSL equivalent: Works on single values and vectors


### sin

`sin(radians)`

GLSL equivalent: Works on single values and vectors


### cos

`cos(radians)`

GLSL equivalent: Works on single values and vectors


### tan

`tan(radians)`

GLSL equivalent: Works on single values and vectors


### asin

`asin(radians)`

GLSL equivalent: Works on single values and vectors


### acos

`acos(radians)`

GLSL equivalent: Works on single values and vectors


### atan

`atan(radians)`


### clamp

`clamp(value, min, max)`


### equals

`equals(a, b)`


## Remarks

* When setting global configs, you may need to consider the order of code loadint when using `imports` and `requires`
