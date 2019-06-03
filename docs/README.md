# Introduction

math.gl is a JavaScript class library for 3D and geospatial math. It provides traditional 3D library classes for vectors, matrices etc, as well as additional, optional modules that address different domains.

## Available Modules

- `math.gl`: Basic 3D math classes (vectors, matrices etc) and utilities (`equals`, `toRadians` etc).
- `@math.gl/geospatial` - support for geospatial math, primarily WGS84 and Web Mercator.

## Class Library Features

- **Classes for gl-matrix** - math.gl classes are built on top of `gl-matrix`. `gl-matrix` has a reputation for being the most performant and battle-tested JavaScript math library around.

- **Array-Based** - math.gl classes (like `Vector3`, `Matrix4`) are subclasses of the built-in JavaScript `Array` which enables applications to use them interchangeably with plain (or typed) arrays.

- **Debug Friendly** - math.gl offers **optional** error checking after every math operation which makes quick work of locating coding errors and bad input data. Printing support for objects (`toString`) also simplifies debugging.

- **Documentation** - If you are new to 3D programming it can be hard to know where to start. math.gl comes with articles to show you the big picture and get you up-to-speed on the mathematical concepts and the corresponding classes.

- **Size Conscious** - math.gl is published as multiple modules to let applications cherry-pick required functionality, and is optimizes dependencies for tree-shaking to make sure you only pay for (bundle) what you use.

## Supported Browsers and Node Versions

math.gl is fully supported on:
- "evergreen" browsers: i.e recent versions of Chrome, Safari, Firefox, Edge etc.
- Node.js
- IE11: math.gl's fully transpiled `es5` distribution shuold work (with performance caveats).

However, Internet Explorer < 10 will not work. If your application needs to support non-evergreen browsers, an option could be to use e.g. `gl-matrix` directly.

## Key Design Ideas

- ES6 allows JavaScript classes to be derived from the built-in arrays
- gl-matrix provides high-performance math that works directly on arrays.
- Geospatial frameworks like deck.gl and mapbox-gl expect vectors to be supplied in the form of JavaScript arrays.

## History

- The core classes were originally developed as part of luma.gl v4 to provide a basic 3D math library for the luma.gl and deck.gl frameworks.
- math.gl was then broken out into its own module to allow it to mature in terms of functionality and stability.
- Through a collaboration with the Cesium team, parts of the Cesium math library are ported and published as independently usable math.gl modules (geospatial and culling).

## Roadmap

- The intention is that math.gl should be able to serve a general purpose 3D math library.
- math.gl modules (such as geospatial math) should be usable by applications using other frameworks, without having to use the core math.gl classes.

## Attributions

math.gl was inspired by and built upon some of the most proven open source JavaScript math libraries:

- [`gl-matrix`](http://glmatrix.net/) - math.gl classes use gl-matrix under the hood
- THREE.js math library - math.gl classes are API-compatible with a subset of the THREE.js classes and pass THREE.js test suites.
- Cesium math library (Apache2) - The geospatial and culling modules were ported from Cesium code base.

## License

MIT license. The libraries that the core `math.gl` module are built on (e.g. gl-matrix) are also all open source and MIT licensed.

The `@math.gl/geospatial` and `@math.gl/culling` include Cesium-derived code which is Apache2 licensed.
