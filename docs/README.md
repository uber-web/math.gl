# Introduction

math.gl is a JavaScript class library for 3D math. It provides the traditional 3D classes (vectors, matrices etc).

In spite of the name, math.gl has no hard WebGL dependencies and is usable in any JavaScript applications. That said, math.gl is designed to be optimized for WebGL/3D applications.


## Features

This is a short list of feature high-lights to show what math.gl is about:

- **Classes for gl-matrix** - `gl-matrix` has a reptutation for being one of the highest performance and most battle-tested JavaScript math libraries. However, the `gl-matrix` interface is procedural, and depending on one's tastes, application code that uses it may not be as readable as it a class based API would be. math.gl provides classes for most gl-matrix objects.

- **Array-based Classes** - All math.gl classes (like `Vector3`, `Matrix4`) are subclasses of the built-in JavaScript `Array` class. This means that they can be used directly with any Javascript function that e.g. expects plain JavaScript `Array` arguments for Vectors.

- **Debug Friendly** - JavaScript math can be frustrating to code and debug. math.gl offers **optional** error checking after every math operation which makes quick work of locating coding errors and bad data. Also, "printing support" (`toString`) simplifies debugging.

- **WebGL Support** - Matrices are stored internally in the format required by WebGL (array of contiguous values in column-major order), while exposing the more "natural" row-major API to the JavaScript programmer (e.g. through accessors, printing using `toString()` etc).

- **Documentation** - Some JavaScript 3D math libraries come with reference documentation only. If you are new to 3D programming it can be hard to know where to start. math.gl comes with articles that try to show you the big picture and get you quickly up-to-speed on the mathematical concepts and the math.gl classes that support them.

- **Size Conscious** - A math library can quickly get big as a various classed and functions keep getting added. But for many 3D applications, only a few basic operations are necessary. math.gl has made a choice to restrict itself to a set of classes and functions that are likely to be most important in WebGL applications, and optimizes dependencies for tree-shaking to make sure you only pay for (bundle) what you use. The intention is for math.gl to be a "mid-size" 3D math library: reasonably full featured, but small enough that unless you are targeting a very small final bundle for your application, its size should not be a concern.


## Supported Browsers and Node Versions

math.gl is only supported on "evergreen" browsers, such as Chrome, Safari, Firefox, Edge etc. While not evergreen, IE11 should support the math.gl distribution's transpiled code, but Internet Explorer < 10 will not work. math.gl also works on recent versions of Node.js (tested on v6+).

> Disclaimer: These restrictions are both due to real technical limitations with math.gl's `Array`subclassing approach, as well as a conscious decision by the maintainers to limit the support matrix for the library. So, if your application needs to support non-evergreen browsers, math.gl is unlikely to be the right choice for you. A good alternative option could be to use e.g. `gl-matrix` directly.


## History

math.gl was developed as a companion 3D math library for the luma.gl and deck.gl WebGL frameworks, and the precursors of the math.gl classes were in fact part of luma.gl v4.0, but have now been broken out into this separate library.

In spite of its roots, the intention is that math.gl should be able to serve a general purpose 3D math library, and can be used either directly or as a "starting point" by other projects with similar needs.


## Attribution

math.gl was inspired by, and includes code, documentation and ideas from some of the most proven open source JavaScript math libraries, the awesome [`gl-matrix`](http://glmatrix.net/) and the THREE.js math library. Those libraries encouraged reuse which enabled math.gl to be built, and naturally math.gl does the same!


## License

MIT license. The libraries that math.gl are built on (e.g. gl-matrix) are also all open source and MIT licensed.
