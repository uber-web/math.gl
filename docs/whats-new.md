# What's New

## v2.4 (In Development)

Date: TBD, target June 2019

- New: `Matrix` base class for `Matrix3` and `Matrix4` with common methods to minimize bundle size.
- New: `Matrix.setColumn()` and `Matrix.getColumn()` methods
- New: `Matrix.toString()` method
- New: `toRadians` and `toDegrees` functions
- New: `exactEqual` function

## v2.3

Date: Jan 29, 2019

- New: `Matrix3` class
- New: Add `scale` factor support to `Matrix3` and `Matrix4`
- Support quaternion to euler conversion
- Uses the official `gl-matrix@3.0.0` package as dependency instead of forked packages.

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
