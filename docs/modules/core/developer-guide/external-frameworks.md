# Using with Other Frameworks

> This article is a work in progress.

math.gl is designed to be (reasonably) interoperable with other major math frameworks.

## Using with gl-matrix

### API comparison

The math.gl API is intentionally designed to remain intuitively similar to the wrapped `gl-matrix` procedures, usually just removing the first one or two parameters from each function (the out argument and the first input arguments, both are implictly set to `this`), and exposes the remaining arguments in the same order as the gl-matrix api.

Only in a few cases where `gl-matrix` methods take a long list arguments (e.g. `Matrix4.perspective`, `Matrix4.ortho` etc) or return multiple values (e.g. `quat.getAxisRotation`) do methods provide a modified API that is more natural for modern ES6 applications to use, e.g. using named parameters, or collecting all results in one returned object.

Also, for transforming vectors with matrices, the `transform*` methods are offered in the matrix classes, instead of on the vector classes. They also (optionally) auto allocate the result vectors.

In code that is very frequently executed, working with directly with gl-matrix can sometimes provide better performance math.gl.

## References

- Top learn more about gl-matrix. The [gl-matrix docs](http://glmatrix.net/docs/) are a good start. Additionally, the gl-matrix source code is partially updated with JSDoc.

## Using with THREE.js

math.gl makes efforts to be compatible with the THREE.js math API.

### Method Interoperability

In particular, the basic math.gl math classes have implementations of most of the methods that THREE.js defines.

| math.gl   | THREE.js        | Notable differences                             |
| --------- | --------------- | ----------------------------------------------- |
| `Vector2` | `THREE.Vector2` | `length()` => `len()`                           |
| `Vector3` | `THREE.Vector3` | ditto                                           |
| `Vector4` | `THREE.Vector4` | ditto                                           |
| `Matrix3` | `THREE.Matrix3` | Math.gl stores in column-major order by default |
| `Matrix4` | `THREE.Matrix4` | ditto                                           |

- Can a THREE.Math class be created/initialized from a math.gl class? Probably yes, as we expose x, y, z accessors
- Can a math.gl class be created/initialized from a THREE.Math class? Probably not yet, as we don't look for x, y, z.

### Notable Incompatibilities

### Colum-Major vs. Row-Major Matrices

By default, math.gl stores matrices in column-major order internally (while exposing a row-major friendly interface), whereas THREE.js stores matrices in row-major order.

### Array.length()

Since math.gl's classes are subclasses of JavaScripts built-in `Array` class, the `length` property has the special meaning defined by `Array`, so it is not possible to implement the `Vector.length()` method defined by THREE.js. Instead a `Vector.len()` method is offered on math.gl `Vector` classes.

### Cross-Library Convenience Methods

A complication with THREE.js is that the framework is not strict about separating the library into independent layers. Thus the THREE math classes have convenience methods that accept other THREE.js objects such `Geometries` and `BufferAttributes`. These methods are not implemented in math.gl.

### Remarks

- An indicator of the level of THREE.js compatibility is the fact that math.gl includes a copy of the math test suites from THREE.js, parts of which pass cleanly when run the math.gl classes listed above (admittedly with a few disabled cases).
- While it would of course be nice to be able to state "100% compatiblity" with the THREE.js math API, there are hard technical constraints. For instance, since math.gl's classes are subclasses of JavaScripts built-in `Array` class, the `length` property has the special meaning defined by `Array`, so it is not possible to implement the `Vector.length()` method defined by THREE.js.
- Note that THREE.js compatibility methods will not always be implemented in the most performant way. Every compatibility methods adds size to the library and if they can be implemented in a compact way by calling existing methods that is often preferred over raw speed.
