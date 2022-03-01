# RFCL math.gl Monorepo

- **Authors**: Ib Green
- **Date**: May 2019
- **Status**: Draft

## Summary

This RFC proposes splitting math.gl into a monorepo with multiple submodules.

## Background

With efforts like [3D Tiles](https://github.com/uber-web/loaders.gl/issues/164) we are starting to need a more extensive math library for classical 3D and geospatial math.

As additional functionality areas are added to math.gl, it is important that we keep the core library small and focused.

This RFC proposes increasing the scope of math.gl to include a suite of complementary modules.

## Design Philosophy

### Framework Independence

- Ideally the APIs of the various submodules would not depend on the `math.gl` core library.
- I.e. apps could use pure JavaScript vectors for arrays and matrices.
- Note: the submodules can still depend on math.gl core for help with implementation.

Example:

Using with pure javascript `Array`

```js
import {Ellipsoid} from '@math.gl/geospatial';
const cartesian = Ellipsoid.WSG84.cartographicToCartesian([lng, lat, z]);
```

Using with math.gl `Vector3`:

```js
import {Ellipsoid} from '@math.gl/geospatial';
import {Vector3} from '@math.gl/core';
const cartesian = Ellipsoid.WSG84.cartographicToCartesian(new Vector3(lng, lat, z));
```

### Dependencies and Bundle Size

Concerns:

- **math.gl bundle size** - As additional functional areas are added to math.gl, it is important that we keep the core library small. The simplest mechanism to do this is to move to a monorepo setup, see detailed proposal below.
- **math.gl scope** - The library has always claimed a focus on math that supports WebGL applications, adding additional modules is not a sudden change in scope. Also THREE.js math library.

Ideally:

- the various math.gl libraries do not depend on each other (i.e. they can be cherry-picked by the user to manage dependencies and bundle size).
- If they depend on each other they do so in a clearly described, layered fashion (no circular dependencies or surprises).
- The classes inside each library are designed to support three-shaking so that only the classes actually imported and used will be bundled. (i.e. importing one class does not include others just to provide a convenience `toOtherClass()` conversion function).

## Proposal: Monorepo setup

| Directory            | NPM Module            | RFC                                                                                                         | Scope |
| -------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------- | ----- |
| `modules/core`       | `math.gl`             | "Classes for gl-matrix". Compact and powerful                                                               |
| `modules/geospatial` | `@math.gl/geospatial` | "Advanced" geospatial math.                                                                                 |
| `modules/culling`    | `@math.gl/culling`    | Frustum "Culling" and bounding boxes.                                                                       |
| `modules/geometry`   | `@math.gl/geometry`   | Support for WebGL typed array geometries                                                                    |
| `modules/geometries` | `@math.gl/geometries` | Library of geometric primitives compatible with the geometry system. Seeded by luma.gl geometric primitives |
