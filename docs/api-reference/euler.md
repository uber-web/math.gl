# Euler

A class to handle Euler rotation. More information on rotation using a Euler vector can be found [here](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). Generally speaking the three components of the Euler object represents the roll, pitch and yaw angles and the rotation is applied according to a specific rotation order.

## Usage

```js
import {Euler} from 'math.gl';
```


## Constants

* Euler.ZYX
* Euler.YXZ
* Euler.XZY
* Euler.ZXY
* Euler.YZX
* Euler.XYZ
* Euler.RollPitchYaw

* Euler.DefaultOrder // Euler.ZYX;

### Euler.RotationOrders
['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
  static rotationOrder(order) return Euler.RotationOrders[order]; }


## Members

### ELEMENTS

Constant always returns 4

### x, y z

x, y, z angle notation (note: only corresponds to axis in XYZ orientation)

### alpha, beta, gamma

alpha, beta, gamma angle notation

### phi, theta, psi

phi, theta, psi angle notation

### order

rotation order in all notations


## Methods


export default class Euler extends MathArray {

### constructor

(x = 0, y = 0, z = 0, order = Euler.DefaultOrder)
 * Number|Number[], Number, Number, Number


### copy(array)

// If copied array does contain fourth element, preserves currently set order


### set(x = 0, y = 0, z = 0, order)

// Sets the three angles, and optionally sets the rotation order
// If order is not specified, preserves currently set order


### toArray(array = [], offset = 0)

// Does not copy the orientation element


### toArray4(array = [], offset = 0)

// Copies the orientation element


### toVector3(optionalResult)


### fromVector3(v, order)

// Constructors

### fromArray(array, offset = 0)

// TODO - with and without 4th element


### fromRollPitchYaw(roll, pitch, yaw)

// Common ZYX rotation order


### fromQuaternion(q, order)


### fromRotationMatrix(m, order = Euler.DefaultOrder)


### getRotationMatrix(m = new Matrix4())

// @return {Matrix4} a rotation matrix corresponding to rotations
//   per the specified euler angles

### getQuaternion()
