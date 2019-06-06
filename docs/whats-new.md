# What's New

## v2.4 (In Development)

Date: TBD, target end of June 2019

### Performance

A benchmarking example has been added that makes it easy to assess the performance. The performance of the library has been significantly improved tuned based on these benchmarks.

### `@math.gl/geospatial`

A new module (developed in collaboration with the Cesium team) providing framework-independent geospatial math classes and algorithms:

- New class `Ellipsoid` and constant `Ellipsoid.WGS84` for working with WSG84 coordinates

### `math.gl` - Core module additions

#### Transform API Improvements

The API for transformations (i.e. multiplying vectors with matrices or quaternions) has been extended and made more orthogonal:

- The `transform*` methods are now available on all `Vector` classes, in addition to on the `Matrix` classes. Among other things, this enables transformations without using `Matrix` classes.
- Naming consistency of transform methods across classes (`transform`, `transformAsPoint`, `transformAsVector`).
- Alternative transform methods added to the `Vector` classes (`transformByMatrix3`, `transformByMatrix2`, `transformByMatrix2x3` and `transformByQuaternion`). Simplifies using the most efficient transformation for the job.

#### Matrix classes

- New methods `Matrix*.setColumn()` and `Matrix*.getColumn()`
- New method `Matrix*.toString()`

#### Utility Functions

- New: global functions `toRadians` and `toDegrees`
- New: global function `exactEqual`

## v2.3

Date: Jan 29, 2019

- New class: `Matrix3`
- New: Add `scale` factor support to `Matrix3` and `Matrix4`
- Support quaternion to euler conversion
- Now uses the official `gl-matrix@3.0.0` package as dependency instead of forked gl-matrix packages.

## v2.2

Date: Sep 20, 2018

- Use `@babel/runtime` to reduce bundle size
- `equals` function fix on arrays

## v2.0

Date: June 25, 2018

### New Naming Convention for Experimental Exports

Experimental exports are now exported with a leading underscore (\_), instead of as members of the `experimental` namespace.

The change was made to make it possible for tree-shaking bundlers to remove unused experimental exports from applications.


## v1.2

Date: May 4, 2018
- New `lerp` utility
- Experimental `Pose` class


## v1.1

Date: April 16, 2018

### Matrix4 Improvements

**`Matrix4.orthographic()`** - To simplify switching between perspective and orthographic views, math.gl now offers an additional method for creating orthographic projection matrix, that takes the same parameters as `Matrix4.perspective()`, with the addition of one additional parameter, `focalDistance`. See [`Matrix4.orthographic`](docs/api-reference/matrix4)`({fovy, aspect, focalDistance, near, far})`


### Bundle Size Reduction

math.gl has been tuned to have approximately 20% smaller footprint when bundled in applications.


### THREE.js Compatibility

math.gl classes now pass large parts of the THREE.js test suite, which should make it easier to reuse code written for the THREE.js math library.


## v1.0

Date: Jan 9, 2018

Initial release.
