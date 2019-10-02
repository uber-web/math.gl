# Overview

The `@math.gl/culling` module provides primitives for implementing frustum culling:

- Bounding boxes and intersection logic
- Fully "transformable" primitives (i.e. oriented bounding boxes as opposed to just axis-aligned bounding boxes).

The culling module does not attempt to be a general "physics-based" collision detection library (e.g. it does not handle time-interpolated intersections like a physics library would).

## Classes

| Class                 | Description |
| ---                   | --- |
| `CullingVolume`       | |
| `BoundingSphere`      | |
| `OrientedBoundingBox` | |
| `Plane`               | |

## Example Usage

- Create bounding volumes for your objects/geometries, and create `BoundingSphere` or `OrientedBoundingBox` instances.
- Extract your camera view frustum parameters and create a `PerspectiveFrustum` instance.
- You can now test your bounding volumes to see if the intersect the view frustum.


## Framework Independence

Like all non-core math.gl modules, this library can be used without the math.gl core classes.

- Any input vectors can be supplied as length 3 JavaScript `Array` instances.
- Any result vectors can be treated as length 3 JavaScript `Array` instances (they may be math.gl `Vector3`).
- The core math.gl classes inherit from JavaScript `Array` and can be used directly as input.

## History

This library was initially developed as a fork of the Cesium math library as part of a collaboration between Cesium and Uber to provide framework-independent, portable support for the 3D tiles specification.

## Attribution

This code in was initially forked from [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) under the Apache 2 License.
