# Using Transformations

> Note: This article is a work in progress and may contain incorrect information.


In math.gl transformations are usually managed by creating instances of `Matrix4` class, and this article is intended to be an overview of how that works in an application.

There are additional articles [](./'homogenous-coordinates.md') that provides more background about the additional transformations enabled when using 4x4 matrices, those transformations work in the same way from an API perspective as the ones described here.


# Types of Transformations

The basic transformations are rotations, scalings, and translations.


## Composing Transformations

One of the most powerful aspects of using matrices to manage transformations is that matrices can be multiplied together using linear algebra.

This allows us to build up a complex transformation by multiplying together component parts.

`Matrix4` provides a number of transformation methods ('scale', 'rotate', 'translate', ...) that allow us to build transformation matrices. These can be applied to an identity matrix (e.g. a newly created `Matrix4`) or to a matrix that already contains other transformations.


## Order Matters

When composing (i.e. multiplying) matrices it is critical to consider the order in which they are being applied, as changing the order of component will in most cases change the resulting composite transformation. It is not hard to verify that this is consistent with geometric intuition by composing a few operations on paper.

Because of this the `Matrix4` class provides two matrix multiplication methods: `multiplyLeft` and `multiplyRight` that force you to make explicit what you intend when multiplying two matrices.

All `Matrix4` transformation methods ('scale', 'rotate', 'translate', ...) conceptually correspond to multiplying in a new transformation matrix from the right (although these methods internally are more efficient in that they don't create any temporary objects and they only do the minimal amount of changes to the matrix required for that specific transformation).

In the end, the point or vector to be transformed will be multiplied in from the right, which means that a typical composed transformation needs to be read in reverse order. I.e. in the example below, the vector will first be rotated, then transformed by the `partialTransform`, then scaled.

```js
// Illustrates that transformations are applied in reverse order
const partialTransform = new Matrix4(...);
const fullTransform = new Matrix4()
  .scale([1, -1, 1])
  .multiplyRight(partialTransform)
  .rotateX({radians: Math.PI});
const v = fullTransform.transformVector(new Vector4(...));
```


## About Rotations

For more in-depth background about rotations, see the separate article on [rotations](./rotations.md).

If you have a vector with 3 elements you can rotate it around an axis and a point like so:
```js
const v = new Vector3([1, 2, 3]).rotateZ({radians: ..., origin: [1, 1, 0]});
```


## Remarks

* Decomposition - The ability to compose transformations raises the question whether it is possible to decompose a composite transformations into constituent parts. This is possible under certain circumstances, TBA.

