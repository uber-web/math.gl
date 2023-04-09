# Features (WIP)

> This document is Work-In-Progress.

See [features](./doc/get-started/features.md) for more details.

## Array-based

    - All math objects can be used directly with any Javascript
      function that expects array arguments. No need to call `toArray`
      or similar.
    - Math objects are `Arrays` - All math objects are subclasses of the built-in
      JavaScript `Array` class, which means that class instances can be used
      wherever an array is expected. I.e. these classes are not wrappers of
      `Array`s, they **are** `Array`s, just with additional methods.

This allows you to keep your API functions general (the accept general arrays and so are not tied to a specific math library).

- **Debugging**

  - Optional error checking after every math operation makes quick work of locating coding errors and bad data.
  - Printing support simplifies debugging
  - Only minor performance impact, and can be disabled when performance is critical.

- **WebGL-friendly**

  - Column Major atrices: while all accessors, `toString()` etc are row-major.
    matrices are organized internally in the layout expected
    by WebGL (an array of contiguous floats in column-major order),
  - `toArray` and `fromArray` functions take optional offsets allowing
    copying directly to and from vertex attribute array.
  - GLSL math functions (radians, sin etc) made available in JavaScript
    and work both on scalars and vectors / math objects.

- **Documentation**

  - Most JavaScript 3D math libraries come with a reference documentation only. It can be a

- **Size Conscious**
  - A math library can quickly get big as a various , gl-matrix is a good example, there are a number of modules on npm that contain subsets of gl-matrix to work around its size.
  - Focus on functions that are likely to be most important in WebGL applications.

## Supported Browsers

Some background:

- math.gl classes are subclasses of the built-in JavaScript `Array`. `Array` subclassing is an ES6/JS2015 feature. This feature (even after being transpiled to ES5) does not work with older browsers.
- For details of the technical complication, see ([babel-plugin-transform-builtin-extend](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend)).

## Overview

math.gl is a JavaScript math library primarily intended to support WebGL applications. It is a generic library but was developed as a companion for [luma.gl](http://uber.github.io/luma.gl/) and [deck.gl](http://uber.github.io/deck.gl/).

math.gl contains a set of classes (Matrix4 etc) to complement the procedural interface of gl-matrix. It also imports a limited subset of the standard `gl-matrix` functions (to keep bundle size down), these can be used in parallel with the classes.

## Who is this for?

JavaScript WebGL programmers who:

- Need a great JavaScript math library for basic computional geometry purposes.
- like the functionality offered by the gl-matrix library
- need tree-shaking support
- want to use object orientated math programming style (ability to chain operations).
- want optional extra error checking
- do not need to support old (pre-IE10) browsers.

## Features

- **Array-based**

  - All math objects can be used directly with any Javascript function that expects array arguments. No need to call `toArray` or similar.

- **Error checking** to assist in debugging.

  - Can be disabled when performance is critical.

- **WebGL-friendly**
  - Matrices: while all accessors, `toString()` etc are row-major. Matrices are organized internally in the layout expected by WebGL (an array of contiguous floats in column-major order),
  - `toArray` and `fromArray` functions take optional offsets allowing copying directly to and from vertex attribute arrays.
  - GLSL math functions (radians, sin etc) made available in JavaScript and work both on scalars and vectors / math objects.

# Design Notes

- Math objects are `Arrays` - All math objects are subclasses of the built-in JavaScript `Array` class, which means that class instances can be used wherever an array is expected. I.e. these classes are not wrappers of `Array`s, they **are** `Array`s, just with additional methods.

- Focuses on needs of WebGL based applications and basic computational geometry, which includes 4x4 matrices, 2, 3 and 4 dimensional vectors and quaternions. May grow to include other classes, but is not intended to become a general math library.

# History

- Started out as a set of object oriented wrappers for the procedural [gl-matrix](http://glmatrix.net/) library.

# Roadmap

- Additional classes and functions. This library might grow beyond just providing `gl-matrix` wrappers if additional classes are deemed valuable for the target user group.

## API differences with gl-matrix

The class API is intentionally designed to remain intuitively similar to the wrapped `gl-matrix` procedures, usually just removing the first one or two parameters from each function (the out argument and the first input arguments, both are implictly set to this), and exposes the remaining arguments in the same order as the gl-matrix api.

Only in a few cases where `gl-matrix` methods take a long list arguments (e.g. `mat4.perspective`, `mat4.ortho` etc) or return multiple values (e.g. `quat.getAxisRotation`) do methods provide a modified API that is more natural for modern ES6 applications to use, e.g. using named parameters, or collecting all results in one returned object.

Also, for transforming vectors with matrices, the `transform*` methods are offered in the matrix classes, instead of on the vector classes. They also (optionally) auto allocate the result vectors.

## Caveats

A technical caveat is that JavaScript `Array` subclassing, which is fundamental to the design of this library, is only supported on "evergreen" browsers, such as Chrome, Safari, Firefox, Edge etc, i.e. no Internet Explorer < 10 ([details](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend)).

If this is not acceptable, math.gl is not the right choice for you. As a fallback, you can always use `gl-matrix` directly.
