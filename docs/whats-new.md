# What's New

Always check the [Upgrade Guide](docs/upgrade-guide) when considering a new math.gl release.


## v1.1

Date: TBD

### Matrix4 Improvements

**`Matrix4.orthographic()`** - To simplify switching between perspective and orthographic views, math.gl now offers an additional method for creating orthographic projection matrix, that takes the same parameters as `Matrix4.perspective()`, with the addition of one additional parameter, `focalDistance`. See [`Matrix4.orthographic`](docs/api-reference/matrix4)`({fovy, aspect, focalDistance, near, far})`


### Bundle Size Reduction

math.gl has been tuned to have ~20% smaller footprint when bundled in applications.


### THREE.js Compatibility

math.gl classes now pass large parts of the THREE.js test suite, which should make it easier to reuse code written for the THREE.js math library.


## v1.0

Date: Jan 9, 2018

Initial release.
