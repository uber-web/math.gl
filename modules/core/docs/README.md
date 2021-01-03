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
