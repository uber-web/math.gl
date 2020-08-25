# What's New

## v3.3 (In Development)

Release Date: TBD. v3.3 is still in development. Alpha releases are available.

**`@math.gl/proj4`**

A new module supporting conversion between a wide range of geospatial coordinate systems.

## v3.2

Release Date: July 18, 2020

**Typescript**

Typescript type definitions (`.d.ts` files) are now exported for all math.gl modules.

**`@math.gl/polygon`**

A new module offering geospatial polygon clipping functions.

## v3.1

Release date: Dec 16, 2019

### `@math.gl/web-mercator`

- WebMercator projection support is now available through the new `@math.gl/web-mercator` npm sub-module.
- The `@math.gl/web-mercator` module is an evolution of the now archived [`viewport-mercator-project`](https://github.com/uber-archive/viewport-mercator-project) repository.

## v3.0

Release date: Aug 8, 2019

The 3.0 release brings support for geospatial math, culling, performance improvements, and some API consolidation.

### `@math.gl/geospatial`

A new module (developed in collaboration with the Cesium engineering team) providing WebGL-framework-independent geospatial math classes and algorithms:

- New class `Ellipsoid` and constant `Ellipsoid.WGS84` for working with WSG84 coordinates

### `@math.gl/culling`

A new module (developed in collaboration with the Cesium engineering team) providing WebGL-framework-independent classesthat support geometric intersection calculations (primarily intended to support frustum culling operations):

- New class `AxisAlignedBoundingBox`
- New class `OrientedBoundingBox`
- New class `BoundingSphere`
- New class `CullingVolume`

### `@math.gl/core`

**Transform API Consolidation**

The API for transformations (i.e. multiplying vectors with matrices or quaternions) has been extended and made more orthogonal:

- The `transform*` methods are now available on all `Vector` classes, in addition to on the `Matrix` classes. Among other things, this enables transformations without using `Matrix` classes.
- Naming consistency of transform methods across classes (`transform`, `transformAsPoint`, `transformAsVector`).
- Alternative transform methods added to the `Vector` classes (`transformByMatrix3`, `transformByMatrix2`, `transformByMatrix2x3` and `transformByQuaternion`). Simplifies using the most efficient transformation for the job.

**Matrix classes**

- New methods `Matrix*.setColumn()` and `Matrix*.getColumn()`
- New method `Matrix*.toString()`
- Improved method: `Matrix4.frustum()` now supports infinite `far` plane (parity with `Matrix4.perspective`, which already supported this).

**Utility Functions**

- New: global functions `toRadians` and `toDegrees`
- New: global function `exactEqual`

**Performance Improvements** (and Website Benchmarks)

A [benchmarking example](https://math.gl/examples/benchmarks) has been added to the website that makes it easy to assess the performance of the math.gl library on your own browser. The math.gl library has been carefully tuned based on these benchmarks and performance of the library has been significantly improved over version 2.x.

## v2.3

Release date: Jan 29, 2019

- New class: `Matrix3`
- New: Add `scale` factor support to `Matrix3` and `Matrix4`
- Support quaternion to euler conversion
- Now uses the official `gl-matrix@3.0.0` package as dependency instead of forked gl-matrix packages.

## v2.2

Release date: Sep 20, 2018

- Use `@babel/runtime` to reduce bundle size
- `equals` function fix on arrays

## v2.0

Release date: June 25, 2018

### New Naming Convention for Experimental Exports

Experimental exports are now exported with a leading underscore (\_), instead of as members of the `experimental` namespace.

The change was made to make it possible for tree-shaking bundlers to remove unused experimental exports from applications.

## v1.2

Release date: May 4, 2018

- New `lerp` utility
- Experimental `Pose` class

## v1.1

Release date: April 16, 2018

### Matrix4 Improvements

**`Matrix4.orthographic()`** - To simplify switching between perspective and orthographic views, math.gl now offers an additional method for creating orthographic projection matrix, that takes the same parameters as `Matrix4.perspective()`, with the addition of one additional parameter, `focalDistance`. See [`Matrix4.orthographic`](docs/api-reference/matrix4)`({fovy, aspect, focalDistance, near, far})`

### Bundle Size Reduction

math.gl has been tuned to have approximately 20% smaller footprint when bundled in applications.

### THREE.js Compatibility

math.gl classes now pass large parts of the THREE.js test suite, which should make it easier to reuse code written for the THREE.js math library.

## v1.0

Release date: Jan 9, 2018

Initial release.
