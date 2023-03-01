# Overview

Basic 3D math classes (vectors, matrices, quaternions etc) for JavaScript.

## Installation

```bash
npm install @math.gl/core
```

## Classes

| Class                  | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `Vector2`              | Two element vector, inherits from `Array`             |
| `Vector3`              | Three element vector, inherits from `Array`           |
| `Vector4`              | Four element vector, inherits from `Array`            |
| `Matrix3`              | 3x3 matrix, inherits from `Array`                     |
| `Matrix4`              | 4x4 matrix, inherits from `Array`                     |
| `Quaternion`           | Quaternion in `[x,y,z,w]` form, inherits from `Array` |
| `Euler`                | 3 Euler angles and rotation order                     |
| `SphericalCoordinates` | 2 rotations and a radius                              |

## Usage

```js
import {Vector2} from '@math.gl/core';
const vector = new Vector2(1, 2);
const x = vector[0];
const y = vector[1];
```

## Design Goals

Some of the design goals for the math.gl core library

- **Performance** - The core math.gl classes are built on top of `gl-matrix`. `gl-matrix` has a reputation for being the most performant and battle-tested JavaScript math library around.

- **Array-Based** - math.gl classes (like `Vector3`, `Matrix4`) are subclasses of the built-in JavaScript `Array` which enables applications to use them interchangeably with plain (or typed) arrays.

- **Debug Friendly** - math.gl offers **optional** error checking after every math operation which makes quick work of locating coding errors and bad input data. Printing support for objects (`toString`) also simplifies debugging.

- **Size Conscious** - math.gl is published as multiple modules to let applications cherry-pick required functionality, and is optimizes dependencies for tree-shaking to make sure you only pay for (bundle) what you use.
