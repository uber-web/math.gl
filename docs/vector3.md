# Vector3

## Usage

## Methods

### constructor(x = 0, y = 0, z = 0)

### set(x, y, z)

// Getters/setters

### get ELEMENTS()

### get x()

### set x(value)

### get y()

### set y(value)

### get z()

### set z(value)

### length()

### distance(vector)

### angle(vector)

### dot(vector)

// MODIFIERS

### add(...vectors)

### subtract(...vectors)

### multiply(...vectors)

### divide(...vectors)

### scale(scale)

Scale component wise with a scalar or another `Vector3`.

* `scale` (Number|Vector3) - scale component wise with a scalar or another `Vector3`.

### scaleAndAdd(vector, scale)

### negate()

### inverse()

### normalize()

### cross(vector)

### lerp(vector, coeff)

### rotateX(radians)

Rotate a 3D vector around the x-axis

* `radians` (Number) - angle to rotate.


### rotateY(radians)

Rotate a 3D vector around the y-axis

* `radians` (Number) - angle to rotate.


### rotateZ(radians)

Rotate a 3D vector around the z-axis

* `radians` (Number) - angle to rotate.


### operation(operation, ...args)
