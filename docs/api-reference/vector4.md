# Vector4

`class Vector4 extends MathArray`

`Vector4`s, while general, are provided to hold "homogenous" coordinates. It is not necessary to understand projective geometry to use then, but see the remarks for some background.

`Vector4`s are intended to be transformed with `Matrix4`s.

The fourth component (`w`) is usually set to either
- 0 to represent a vector
- 1 to represent a point
Setting `w` to 0 prevents translation when multiplied with a 4x4 matrix.


## Members

### ELEMENTS
### x
### y
### z
### w


## Methods

`Vector4` inherits methods from `MathArray`

### constructor

`new Vector4(x = 0, y = 0, z = 0, w = 0)`

Creates a new, empty `Vector4`

### set(x, y, z, w)

Updates a `Vector4`

### distance(vector)

### add(...vectors)

### subtract(...vectors)

### multiply(...vectors)

### divide(...vectors)

### scale(scale)

### scaleAndAdd(vector, scale)

### negate()

### inverse()

### normalize()

### dot(vector)

### lerp(vector, coeff)


## Remarks

