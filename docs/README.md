# Introduction

math.gl is a JavaScript class library focused on 3D and geospatial math. It provides a core module with traditional 3D library classes for vectors, matrices etc, and additional, optional modules providing geospatial math and .

## Modules

math.gl is a toolbox that offers a range of modules for

| Module                  | Description                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| `@math.gl/core`         | Basic 3D math classes (vectors, matrices etc) and utilities (`equals`, `toRadians` etc)     |
| `@math.gl/culling`      | Bounding volumes and intersection testing.                                                  |
| `@math.gl/geospatial`   | Ellipsoidal geospatial math, primarily for WGS84 cartesian to cartographic transformations. |
| `@math.gl/polygon`      | Polygon math.                                                                               |
| `@math.gl/proj4`        | Conversion between geospatial coordinate systems.                                           |
| `@math.gl/sun`          | Calculate solar position and direction.                                                     |
| `@math.gl/web-mercator` | Support for 3D / perspective Web Mercator projections.                                      |

There are also some legacy modules that are not recommended for new code, but are provided to avoid breaking older applications:

| Legacy Module               | Description                                                                                                                                                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `math.gl`                   | Re-exports the API from `@math.gl/core`. The `math.gl` module is now considered deprecated. It is still available as an "alias" for `@math.gl/core` but should not be used in new applications.                                                                        |
| `viewport-mercator-project` | Re-exports the Web Mercator projection utilities in `@math.gl/web-mercator`. This code was orignally developed indendently in the [https://github.com/uber-common/viewport-mercator-project] repository, however the module was consolidated with math.gl in Oct 2019. |

## Core Library Features

- **Classes for gl-matrix** - math.gl classes are built on top of `gl-matrix`. `gl-matrix` has a reputation for being the most performant and battle-tested JavaScript math library around.

- **Array-Based** - math.gl classes (like `Vector3`, `Matrix4`) are subclasses of the built-in JavaScript `Array` which enables applications to use them interchangeably with plain (or typed) arrays.

- **Debug Friendly** - math.gl offers **optional** error checking after every math operation which makes quick work of locating coding errors and bad input data. Printing support for objects (`toString`) also simplifies debugging.

- **Documentation** - If you are new to 3D programming it can be hard to know where to start. math.gl comes with articles to show you the big picture and get you up-to-speed on the mathematical concepts and the corresponding classes.

- **Size Conscious** - math.gl is published as multiple modules to let applications cherry-pick required functionality, and is optimizes dependencies for tree-shaking to make sure you only pay for (bundle) what you use.

## Supported Browsers and Node Versions

math.gl is fully supported on:

- Evergreen browsers: Recent versions of Chrome, Safari, Firefox, Edge etc.
- Node.js: Active and Maintenance [LTS releases](https://nodejs.org/en/about/releases/)
- IE11: Supported (with certain performance caveats) using math.gl's fully transpiled `es5` distribution and `@babel/polyfills`.

Note that Internet Explorer < 10 will not work. If your application needs to support older browsers, an option could be to use [`gl-matrix`](http://glmatrix.net/) directly.

## Key Design Ideas

- ES6 allows JavaScript classes to be derived from the built-in arrays
- gl-matrix provides high-performance math that works directly on arrays.
- Geospatial frameworks like deck.gl and mapbox-gl expect vectors to be supplied in the form of JavaScript arrays.

## History

- The core classes were originally developed as part of luma.gl v4 to provide a basic 3D math library for the luma.gl and deck.gl frameworks.
- math.gl was then broken out into its own module to allow it to mature in terms of functionality and stability.
- Through a collaboration with the Cesium team, parts of the Cesium math library are ported and published as independently usable math.gl modules (geospatial and culling).

## Attributions

math.gl was inspired by and built upon some of the most proven open source JavaScript math libraries:

- [`gl-matrix`](http://glmatrix.net/) - math.gl classes use gl-matrix under the hood
- THREE.js math library - math.gl classes are API-compatible with a subset of the THREE.js classes and pass THREE.js test suites.
- Cesium math library (Apache2) - The geospatial and culling modules were ported from Cesium code base.

## License

MIT license. The libraries that the core `math.gl` module are built on (e.g. gl-matrix) are also all open source and MIT licensed.

The `@math.gl/geospatial` and `@math.gl/culling` models include Cesium-derived code which is Apache2 licensed.
