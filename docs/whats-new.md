# What's New

<table style="border: 0;" align="center">
  <tbody>
    <tr>
      <td>
        <center>
          <img style="height:200px" src="https://raw.github.com/uber-web/math.gl/master/modules/geoid/docs/images/Earth_Gravitational_Model_1996.png" />
          <p><b>v3.4</b> <i><a target="_blank" href="https://math.gl/modules/geoid/docs">Geoid (Earth Gravity Model)</a></i></p>
        </center>
      </td>
      <td>
        <center>
          <img style="height:200px" src="https://raw.github.com/uber-web/math.gl/master/docs/images/ts-logo-256.png" />
          <p><b>v3.2</b> <i>TypeScript</i></p>
        </center>
      </td>
      <td>
        <center>
          <img style="height:200px; max-width:200px;" src="https://raw.github.com/uber-web/math.gl/master/modules/geospatial/docs/images/WGS84_mean_Earth_radius.svg" />
          <p><b>v3.0</b> <i><a target="_blank" href="https://math.gl/modules/geospatial/docs">WGS84 & Ellipsoid</a></i></p>
        </center>
      </td>
    </tr>
  </tbody>
</table>

## v3.6 (In Development)

Target Release Date: Q4, 2021

Codebase has been fully converted to typescript. In general this means that users can expect
the types exported from math.gl to be considerably improved, however in some function signatures
are no longer supported. For details, consult the [upgrade guide](./upgrade-guide).

**`@math.gl/types` (NEW)

- New module that exports a few typescript types that e.g. generalize handling of numeric arrays.

## v3.5

Release Date: July 14, 2021

**`@math.gl/web-mercator`**

- `getBounds()` now supports an optional `fovy` parameter on the `WebMercatorViewport` object
- `getProjectionMatrix()` and `getProjectionParameters()` now accept a `fovy` parameter

**`@math.gl/polygon`**

- Improve performance of `getPolygonSignedArea()` by 3x
- Addition of `earcut()` method for triangulating polygons

**`math.gl/culling`**

- New TypeScript interface `BoundingVolume` with common operations for bounding volumes (`BoundingSphere`, `AxisAlignedBoundingBox`, `OrientedBoundingBox`).
- `BoundingVolume.transform()` supported on all bounding volumes.

## v3.4

Release Date: Jan 7, 2021

**`@math.gl/geoid`** - New module

- Support for [geoid](https://en.wikipedia.org/wiki/Geoid)-based [earth gravity models](https://en.wikipedia.org/wiki/Earth_Gravitational_Model).
- New `Geoid` class calculates the height offset (aka "undulation") from the pure ellipsoid for a given lng/lat (using spherical harmonics).
- `Geoid` instances can be initialized with PGM-encoded earth gravity model coefficient files from standard sources.

**`@math.gl/polygon`**

- Support for flat arrays (e.g. polygons stored in typed arrays)
- Support for calling polygon utilities directly on arrays, without a `Polygon` instance.
- New function `modifyPolygonWindingDirection()` to modify polygon array winding direction in-place.

## v3.3

Release Date: Oct 9, 2020

**`@math.gl/proj4`** - New module

- A new module supporting conversion between a wide range of geospatial coordinate reference systems specified e.g. using the OGC WKT-CRS specification.

## v3.2

Release Date: July 18, 2020

**Typescript**

- Typescript type definitions (`.d.ts` files) are now exported for all math.gl modules.

**`@math.gl/polygon`** - New module

- A new module offering geospatial polygon clipping functions.

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
