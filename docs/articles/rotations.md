# 3D Rotations

> Note: This article is a work in progress. It has been included in the documentation in spite of not being completed, since it does provide some additional context for math.gl users.

math.gl provides a "standard 3D library complement" of mathematical classes for handling rotations in 2D and 3D, such as classes for manipulating `Euler` angles and `Quaternion`s. As in any 3D math library, the key goals are enabling applications to easily and intuitively specify (parametrize) rotations, combine them with other rotations and other transformations, and ultimately transform points with the rotations or resulting transformations.

While math.gl is intended to help programmers' implement the typical 3D application's rotation functionality with a minimum amount of knowledge, and does not even attempt to support rotations in more than 3 dimensions, it should be pointed out that the mathematical treatment of rotations can be very complicated. For some context on this see the background section at the end of this article.


### Properties of 3D Rotations

* In contrast to 2D rotations, 3D rotations are not order-independent, meaning that applying the same two rotations in different order will often yield different results.
* However, by [Euler's Rotation Theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem), two 3D rotations around the origin can always be expressed as (combined into) another single 3D rotation around the origin.
* A 3D rotation requires a minimum of three values to be fully specified (and even then can require careful definitions of which conventions are used).

Also, a simple observation: Rotations around arbitrary points can be treated as rotations around the origin simply by applying a translation before the rotation, and the inverse translation after the rotation. Therefore, for simplicity, this discussion focuses solely on rotations around the origin.


## Parametrizing 3D Rotations

A minimum of three values are required to fully specify a 3D rotation (another result of Euler's), e.g, Euler angles or unit quaternions.

However in many cases the best way to specify a rotation is to use four parameters: an axis and an angle.


| Representation | Interpolation | Addition  | Transforming points |
| ---            | ---           | ---       | ---       |
| Vector/Angle   | -             | -         | Good      |
| Quaternion     | Excellent     | Excellent | Good      |
| 4x4 Matrix     | -             | Excellent | Excellent |
| Euler angle    | -             | -         | -         |


### Rotation Axis and Angle

Per the Euler Rotation Theorem, any two 3D rotations can be combined into a single 3D rotation. A single 3D rotation happens around an axis, and the rotation is a certain angle. This means that it is possible to specify a rotation using four very understanable values: an axis and an angle.

### Euler Angles

One of the more "human readable" representation of a 3D rotation is the "Euler angle", simplistically, an "Euler angle" completely specifies a rotation using only 3 values, which are all "human readable" angles around the three coordinate axes, which is very appealing.

However, the conventions for [Euler angle values](https://en.wikipedia.org/wiki/Euler_angles) can vary in a number of ways. Following three.js, the math.gl `Euler` class uses intrinsic Tait-Bryan angles.

Note that the large number of representations means that Euler angles exchanged between e.g. different software systems may not be directly compatible (and in addition, converting between the various representations is not exactly easy), so unless care is taken this can cause "mind-numbing" confusion.

Because of the variability, a good approach is often to be extremely careful when importing and exporting Euler angles from your code, and convert angle Euler angles to Matrix or Quaternion representations (which are much less ambiguous) for further manipulation.


### Unit Quaternions

"Unit quaternions" are normally the best representation for "manipulation" of 3D rotations. Manpulation here mainly refers to the "composition" or "addition" and interpolation of rotations.

Note that unit quaternions are simply quaternions of norm (or length) equal to `1`, and while a general quaternion (as the name suggests) contains four components, a unit quaternion needs only three values to be fully specified.

Unit quaternions can be used to model 3 dimensional rotations.

qr*v*qr-1

Interpolation of quaternions is done using Spherical Linear intERPolation (aka SLERP).


## Rotation Matrices

When combining rotations with other transformations (translations, scalings, projections etc), 4x4 matrices are the representation of choice.

## Properties of Rotation Matrices

A rotation matrix

  T
RR  = I

Note that a matrix R satisfying this can also include an inversion (improper rotation matrix)


## Converting between Rotation Representations

```js
new Euler();
new Euler();
```

## Executing Rotation Transformations

While Euler angles are often a good way to specify 3D rotations, they can not directly be used to transfor points or vectors. To do that, they have to be converted to . 


## Rotations using Rotation Matrices

A rotation matrix

  T
RR  = I



## Combining Rotations

The fact that rotations. They can either be combined as w

Math with Euler Angles

Math with Quaternions


## Interpolating Rotations

To avoid issues with gimbal locks and flips, it is recommended to use quaternions when interpolating rotations.

Calculate the quaternion that represents the rotation you want to apply (e.g. moves the start rotation to the target rotation), and then just interpolate q with the identity quaternion using `slerp()`. The resulting quaternion can then be used directly to transform `Vector`s or it can be transformed into a `Matrix4` transformation matrix.

```js
  const qUnit = new Quaternion();
  const qTarget = new Quaternion(...);

  for (let ratio = 0; ratio < 1.0; ratio += 0.1) {
  	const qInterpolated = new Quaternion().slerp(qUnit, qTarget, ratio);
  }
```

## Background: Rotations are Complicated

If you are new to working with rotations and the amount of complications outlined in this article seem overwhelming, take some comfort in the fact that rotations in three and higher dimensional spaces are indeed quite complicated to treat mathematically.

As an example, several fundamental properties of rotations are highly dependent on the number of dimensions involved. To help the reader who has not worked extensively with rotations build some "intuition" for the fact that 3D rotations are non-trivial, the following summary shows how the nice, structured properties of 2D rotations gradually disappear as the number of dimensions increase:

* In two dimensions, rotations are highly structured and intuitive:
    * A series of 2D rotations can be applied in any order (they commute).
    * Any 2D rotation can be fully parametrized by a single value (the "angle").
    The combination of two 2D rotations can always be expressed as another single rotation (simply by taking the sum of the angles of the two rotations).
* In three dimensions rotation start to loose some structure:
	* In 3D, rotations are no longer order-independent (they are not commutative), meaning that applying the same two rotations in different order will often yield different results.
	* However, by [Euler's Rotation Theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem), two 3D rotations around the origin can still always be expressed as (combined into) another single 3D rotation around the origin.
	* Also, a 3D rotation requires not two, but a minimum of three values to be fully specified.
* To give some contrast, in four and higher dimensions:
    * Naturally, rotations still no longer commutative.
    * And worse: Euler's Rotation Theorem no longer holds. There are now two different types of basic rotations, and the combination of two rotations will in general not result in another "rotation", but another, more complex transformation.
    * In addition, the number of parameters (degrees of freedom) required to fully specify a rotation grows with mind-boggling rapidity, as 2^(n-1) - 1, meaning that e.g. a "21 dimensional rotation" would require over one million values to be fully specified!


## Background: More on Euler Angles

[Euler angle values](https://en.wikipedia.org/wiki/Euler_angles)

* **Axis Order** - the order of rotations needs to be defined. There are 6 ways to order rotations around the three axis.
* **Choice of Axes** - "Classic Euler" angles follow a Z-Y-Z, convention, rotating around the same angle first and last. However, in modern applications (e.g. Aerospace and Nautical), the "Tait-Brya"
* **Intrinsic or Extrinsic** - One one also needs to define whether the angles are intrinsic or extrinsic.
As a comparison:
* three.js `Euler` class uses intrinsic Tait-Bryan angles. "Intrinsic" means that rotations are performed with respect to the local coordinate system. That is, for order 'XYZ', the rotation is first around the local-X axis (which is the same as the world-X axis), then around local-Y (which may now be different from the world Y-axis), then local-Z (which may be different from the world Z-axis).


## Remarks

* In this article, the word "axes" represents the plural of a (coordinate) "axis" (normally, the word "axes" refers to the X, Y and Z coordinate axes).
* **Note** that one of the most efficient way to specify rotations is to use the Euler-Rodrigues parameters, which has some of the quaternion representation without requiring the introduction of quaternion algebra. math.gl does not directly support this representation though although the vector/angle can easily be converted.

