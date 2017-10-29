# Using with gl-matrix

# API comparison

The math.gl API is intentionally designed to remain intuitively similar to the wrapped `gl-matrix` procedures, usually just removing the first one or two parameters from each function (the out argument and the first input arguments, both are implictly set to `this`), and exposes the remaining arguments in the same order as the gl-matrix api.

Only in a few cases where `gl-matrix` methods take a long list arguments (e.g. `Matrix4.perspective`, `Matrix4.ortho` etc) or return multiple values (e.g. `quat.getAxisRotation`) do methods provide a modified API that is more natural for modern ES6 applications to use, e.g. using named parameters, or collecting all results in one returned object.

Also, for transforming vectors with matrices, the `transformVector*` methods are offered in the matrix classes, instead of on the vector classes. They also (optionally) auto allocate the result vectors.

In code that is very frequently executed, working with directly with gl-matrix can sometimes provide better performance math.gl.


## References

* Top learn more about gl-matrix. The [gl-matrix docs](http://glmatrix.net/docs/) are a good start. Additionally, the gl-matrix source code is partially updated with JSDoc.
