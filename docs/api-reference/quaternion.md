# Quaternion

A class to handle Quaternions. More information on quternions can be
found [here](http://en.wikipedia.org/wiki/Quaternion). The quaternion
will be represented by an instance with `x`, `y`, `z`, `w` components
that make a quaternion like: `xi + yj + zk + w`.

## Usage


## Methods

### constructor(x = 0, y = 0, z = 0, w = 1) {

### fromMatrix3(m)
// Creates a quaternion from the given 3x3 rotation matrix.
// NOTE: The resultant quaternion is not normalized, so you should
// be sure to renormalize the quaternion yourself where necessary.

### fromValues(x, y, z, w)
// Creates a new quat initialized with the given values

### identity()
// Set a quat to the identity quaternion

### length()
// Calculates the length of a quat

### squaredLength(a)
// Calculates the squared length of a quat

### // @returnNumber}
// Calculates the dot product of two quat's

### dot(a, b)

### // getAxisAngle()
  // Gets the rotation axis and angle for a given quaternion.
  // If a quaternion is created with setAxisAngle, this method will
  // return the same values as providied in the original parameter
  // list OR functionally equivalent values.
  // Example: The quaternion formed by axis [0, 0, 1] and angle -90
  // is the same as the quaternion formed by [0, 0, 1] and 270.
  // This method favors the latter.

### rotationTo(vectorA, vectorB)
// Sets a quaternion to represent the shortest rotation from one vector
// to another. Both vectors are assumed to be unit length.

### add(a, b)
// Adds two quat's

### calculateW()
// Calculates the W component of a quat from the X, Y, and Z components.
// Any existing W component will be ignored.

### conjugate()
// Calculates the conjugate of a quat If the quaternion is normalized,
// this function is faster than quat_inverse and produces the same result.

### invert()
// Calculates the inverse of a quat

### lerp(a, b, t)
// Performs a linear interpolation between two quat's

### multiply(a, b)
// Multiplies two quat's

### normalize()
// Normalize a quat

### rotateX(rad)
// Rotates a quaternion by the given angle about the X axis

### rotateY(rad)
// Rotates a quaternion by the given angle about the Y axis

### rotateZ(rad)
// Rotates a quaternion by the given angle about the Z axis

### scale(b)
// Scales a quat by a scalar number

### set(i, j, k, l)
// Set the components of a quat to the given values

### setAxisAngle(axis, rad)
// Sets a quat from the given angle and rotation axis, then returns it.

### slerp(a, b, t)
// Performs a spherical linear interpolation between two quat
