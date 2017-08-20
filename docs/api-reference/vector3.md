# Vector3

## Usage

Accessors
```js
v.x = 2;
assert(v[0] === v.x);
```

Simple rotations
```js
const v = new Vector3([1, 0, 0]);
v.rotateX({radians: Math.PI / 4}); // Rotate around the origin
v.rotateX({radians: Math.PI / 4, origin: [1, 1, 0]}); // Rotate around the specified point
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

## Members

### ELEMENTS

Constant, always returns 3

### x

Gets or sets element 0

### y

Gets or sets element 1

### z

Gets or sets element 2


## Methods

### constructor(x = 0, y = 0, z = 0)

### set(x, y, z)

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

`rotateX({radians, origin})`

* `radians` (Number) - angle to rotate.
* `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)


### rotateY

Rotate a 3D vector around the y-axis

`rotateY({radians, origin})`

* `radians` (Number) - angle to rotate.
* `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)


### rotateZ(radians)

Rotate a 3D vector around the z-axis

`rotateZ({radians, origin})`

* `radians` (Number) - angle to rotate.
* `origin`=`[0, 0, 0]` (Vector3) - the origin of the rotation (optional)


### operation(operation, ...args)
