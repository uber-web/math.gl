# Math Utility Functions

GLSL math function equivalents. Work on both single values and vectors.

## Usage


## Functions

const config = {};
config.EPSILON = 1e-12;
config.debug = true;
config.printRowMajor = true;
config.precision = 4;
export {config};

### configure(options)

### checkNumber(value)

### formatValue(value, precision = config.precision || 4)

### isArray(value)
Returns true if value is either an array or a typed array
Note: does not return true for ArrayBuffers and DataViews

### clone(array)
If the array has a clone function, calls it, otherwise returns a copy



### radians(degrees)

GLSL equivalent: Works on single values and vectors

### degrees(radians)

GLSL equivalent: Works on single values and vectors

### sin(radians)

GLSL equivalent: Works on single values and vectors

### cos(radians)

GLSL equivalent: Works on single values and vectors

### tan(radians)

GLSL equivalent: Works on single values and vectors

### asin(radians)

GLSL equivalent: Works on single values and vectors

### acos(radians)

GLSL equivalent: Works on single values and vectors

### atan(radians)

### clamp(value, min, max)

### equals(a, b)
