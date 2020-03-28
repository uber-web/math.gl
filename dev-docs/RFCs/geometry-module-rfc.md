# Geometry Module RFC

* **Authors**: Ib Green
* **Date**: Apr 2019
* **Status**: Draft


## Summary

This RFC proposes increasing the scope of to math.gl, adding support for
* Typed Array geometry (like luma.gl `Geometry` class, ...)

## Overview

The vis.gl stack has traditionally relied on GPU processing of geometries but will increasingly require more traditional 3D geometry processing.

This includes:
* Geometry iteration (indices/modes)
* Normal calculation
* Indexed geometry expansion

## Proposals: Geometry Classes and Utilities

* Typed Array geometry (like luma.gl `Geometry` class, ...)
* Typed Array geometry processing (rimitive Iteration, Normal Calculation, Index Expansion, ...)
* Typed Array geometries (Cubes, Spheres, ...)
* CPU side mathematical helper classes (BoundingBoxes etc)
* CPU side geometry calculations (Ray Casting, Frustum intersection, ...)

### Monorepo setup

As additional functionality areas are added to math.gl, it is important that we keep the core library small and focused. The simplest mechanism to do this

| Directory           | NPM Module            | Scope   |
| ---                 | ---                   | ---     |
| `modules/core`      | `math.gl`             | "Classes for gl-matrix". Compact and powerful |
| `modules/geometry`  | `@math.gl/geometry`   | Support for WebGL typed array geometries |
| `modules/geometries`| `@math.gl/geometries` | Library of geometric primitives compatible with . Seeded by luma.gl geometric primitives |


### Impact luma.gl

By taking over `Geometry` class and subclasses from `@luma.gl/core` we keep that library focused.

For the initial versions luma.gl will import `@math.gl/geometry` and reexport the `Geometry` classes so that the user does not need to change any code.
