# Installation


## About Comparisons

Due to small rounding errors, exact equality is often not a reliable way to compare floating point numbers. Therefore the default `equals` operation checks that two numbers are within a small delta.

There is also an `exactEquals` method that compares the floating point values directly.

TBA:
* Floating point comparison implementation in gl-matrix and alternatives (links)


## About "Printing"

TBA:
* The built in toString methods print with controllable precision
* It is possible


## About Validation and Debug Support

TBA:
* Turning on an off
* performance implications


## Basic Operations

Translating, Scaling, ...

## About Rotations

If you have a vector with 3 elements you can rotate it around an axis and a point like so:
```js
const v = new Vector3([1, 2, 3]).rotateZ({radians: ..., origin: [1, 1, 0]});

TBA:
* Show same operations with `Euler`, `Quaternion`, `Matrix4` methods.
* Show how to convert between them.
* Should be separate article or even blog post...


## View and Projection Matrices

To set up a 4x4 view projection matrix you need a view matrix (specifying the position, direction and orientation of the camera) and a projection matrix (specifying the characteristics of the camera such as its field of view etc).

To create a projection matrix use:
* `Matrix4.perspective({fov, aspect, near, far})
* `Matrix4.ortho({})

To create a view matrix
* `Matrix4.lookAt({})`


## About Performance

TBA:
* Quantify
* Add bench target?


## About Library Size



# About the Vector Classes

Two, three and four dimensional vector classes

## Vector2, Vector3, Vector4 Methods

| **Method** | **Description** |
| --- | --- |
| `constructor` | Creates a Vector |
| `ELEMENTS` | Get the dimensionality of the vector |
| `x` | Set/get x component |
| `y` | Set/get y component |
| `z` | Set/get z component (`Vector3` and `Vector4` only) |
| `w` | Set/get w component (`Vector4` only) |
| `set` | Set values |
| `add` | Vectors addition |
| `subtract` | Vectors subtraction |
| `multiply` | Vectors multiplication |
| `divide` | Vectors division |
| `scale` | Scales a Vector by a scalar number |
| `scaleAndAdd` | Adds two vectors after scaling the second operand by a scalar value |
| `negate` | Negate a vector |
| `inverse` | Inverse a vector (`Vector3` and `Vector4` only |
| `normalize` | Normalize a vector |
| `dot` | Dot product of two vectors |
| `cross` | Cross product of two vectors (`Vector3` only) |
| `lerp` | Linear interpolation between two Vector |
| `operation` | Apply general operations on all vectors |


