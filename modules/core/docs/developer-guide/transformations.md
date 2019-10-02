# Transformations

math.gl allows you to create mathematical objects and then apply transformations on those objects. Objects are typically vectors but can also be more complex object such as spheres, planes, boxes etc, and transformations are typically represented by matrices and quaternions.

## Representing Transformations

Transformations can be represented in many different notations but for computational purposes it is efficient to express them as matrices, or in some cases as quaternions.

The most general transform is a 4x4 matrix. See [docs/developer-guide/concepts](./'homogeneous-coordinates.md') regarding some advantages with using 4x4 matrices to represent transformations.

## Applying transformations

Most math.gl classes offer a `transform` method that accepts matrices and quaternions.

```js
const transformedVector1 = new Vector4(1, 0, 0, 1).transform([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
// or
const transformedVector2 = new Vector4(1, 0, 0, 1).transform(new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]))
```

The various vector classes also offer methods to transform with smaller matrices
```js
const transformedVector1 = new Vector4(1, 0, 0, 1).transformByMatrix3([1, 0, 0, 0, 1, 0, 0, 0, 1])
// or
const transformedVector2 = new Vector3(1, 0, 0).transformByMatrix2(new Matrix2([1, 0, 0, 1]))
```

Quaternion transformations are also supported on some objects
```js
const transformedVector1 = new Vector4(1, 0, 0).transformByQuaternion([0, 0, 0, 1])
// or
const transformedVector2 = new Vector3(1, 0, 0).transformByQuaternion(new Quaternion([1, 0, 0, 1]))
```

Note that `<object>.transform()` operations modify the object being transformed (and also return the modified object to enable "chaining" of calls).

Alternatively, transformations can also be performed via the matrix and quaternion classes. In this case, the transformation is stored in the result parameters (a new array is allocated if it `result` is not supplied.)

```js
const transformedVector1 = new Vector4(1, 0, 0).transformByQuaternion([0, 0, 0, 1])
// or
const result = new Vector3();
const transformedVector2 = new Quaternion([1, 0, 0, 1]).transformByQuaternion([1, 0, 0], result);
```

## Types of Transformations

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

## Decomposing Transformations

The ability to compose transformations naturally leads to the possibility of _decomposing_ a composite transformations into constituent parts. This is possible with certain caveats.

TBA..



