# Introduction

Welcome to math.gl! math.gl is JavaScript math library focused on **geospatial** and **3D** use cases, designed as a composable, **modular toolbox**. math.gl provides a core module with classic vector and matrix classes, and a suite of optional modules implementing various aspects of geospatial and 3D math.

While the math.gl is highly **optimized for use with the WebGL and WebGPU APIs**, math.gl itself has no WebGL dependencies.

## Modules

math.gl is a toolbox that offers a suite of composable modules.

| Image                                               | Module                  | Description                                        |
| --------------------------------------------------- | ----------------------- | -------------------------------------------------- |
| ![core](./images/core.png 'core')                   | `@math.gl/core`         | Basic 3D math classes (vectors, matrices, etc)     |
| ![culling](./images/culling.png 'culling')          | `@math.gl/culling`      | Bounding volumes and intersection testing.         |
| ![geospatial](./images/geospatial.svg 'geospatial') | `@math.gl/geospatial`   | Ellipsoidal math for WGS84 coordinates.            |
| ![geoid](./images/geoid.png 'geoid')                | `@math.gl/geoid`        | Earth Gravity Model support .                      |
|                                                     | `@math.gl/polygon`      | Polygon math, including geospatial cutting etc.    |
|                                                     | `@math.gl/proj4`        | Conversion between coordinate reference systems.   |
|                                                     | `@math.gl/sun`          | Solar position / direction from position and time. |
|                                                     | `@math.gl/web-mercator` | Supports 3D Web Mercator (spherical) projections.  |

<br/>
In addition, math.gl provides a few deprecated legacy modules, to avoid breaking older applications.
<br/>
<br/>

| Legacy Module               | Description                                                                                                                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `math.gl`                   | Re-exports the API from `@math.gl/core`. An "alias" for `@math.gl/core` to avoid breaking old applications.                                                                                                         |
| `viewport-mercator-project` | Re-exports the Web Mercator projection utilities in `@math.gl/web-mercator`. The [viewport-mercator-project](https://github.com/uber-common/viewport-mercator-project) repository was moved to math.gl in Oct 2019. |

## Supported Browsers and Node Versions

math.gl is fully supported on:

- Evergreen browsers: Recent versions of Chrome, Safari, Firefox, Edge etc.
- Node.js: Active and Maintenance [LTS releases](https://nodejs.org/en/about/releases/)
- IE11: Supported (with certain performance caveats) using math.gl's fully transpiled `es5` distribution and `@babel/polyfills`.

Note that Internet Explorer < 10 will not work. If your application needs to support older browsers, an option could be to use [`gl-matrix`](http://glmatrix.net/) directly.

## History

- The core classes were originally developed as part of luma.gl v4 to provide a basic 3D math library for the luma.gl and deck.gl frameworks.
- math.gl was then broken out into its own module to allow it to mature in terms of functionality and stability and make it a proper home for additional 3D and Geospatial modules.
- parts of the Cesium math library were ported and published as independently usable math.gl modules (the geospatial and culling modules). This was a collaboration with the Cesium team around 3D Tiles support in loaders.gl,
- Additional geospatial modules have gradually been added to support more advanced use cases for deck.gl.

## Attributions

math.gl was inspired by and built upon some of the most proven open source JavaScript math libraries:

- [`gl-matrix`](http://glmatrix.net/) - math.gl classes use gl-matrix under the hood
- THREE.js math library - math.gl classes are API-compatible with a subset of the THREE.js classes and pass THREE.js test suites.
- The CesiumJS math library (Apache2) - The geospatial and culling modules were ported from Cesium code base.

## License

MIT license. The libraries that the core `math.gl` module are built on (e.g. gl-matrix) are also all open source and MIT licensed.

The `@math.gl/geospatial` and `@math.gl/culling` modules include Cesium-derived code which is Apache2 licensed.

math.gl will never include any code that is not under permissive license.
