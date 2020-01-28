# Pose (Experimental)

> Note this class is experimental and may change or be removed in minor math.gl versions.

A 6-degree-freedom pose (3D position and 3D rotation).
See [Tait–Bryan angles](https://en.wikipedia.org/wiki/Euler_angles): z-y'-x"

```js
class Pose
```

## Usage

```js
import {_Pose as Pose} from '@math.gl/core';
```

##  Members

### x, y z

Gets or sets position components respectively

### roll, pitch, yaw

Gets or sets rotation components respectively


## Methods

### constructor

```
new Pose({x, y, z, roll, pitch, yaw});
new Pose({position, orientation});
```

 * `x`, `y`, `z` - position
 * `roll`, `pitch`, `yaw` - rotation in radians
 * `position` - `Vector3` or array of 3 that represents the position
 * `orientation` - `Euler` or array of 4 that represents the rotation

### getPosition

`pose.getPosition()`

Returns `Vector3`.

### getOrientation

`pose.getOrientation()`

Returns `Euler`.

### equals

`pose.equals(otherPose)`

### exactEquals

`pose.exactEquals(otherPose)`

### getTransformationMatrix

`pose.getTransformationMatrix()`

Returns a 4x4 matrix that transforms a coordinates (in the same
coordinate system as this pose) into the "pose-relative" coordinate
system defined by this pose.

The pose relative coordinates with have origin in the position of this
pose, and axis will be aligned with the rotation of this pose.

Returns `Matrix4`.

### getTransformationMatrixFromPose

`pose.getTransformationMatrixFromPose(otherPose)`

Given a second pose that represent the same object in a second coordinate
system, this method returns a 4x4 matrix that transforms coordinates in the
second coordinate system into the coordinate system of this pose.

Returns `Matrix4`.

### getTransformationMatrixToPose

`pose.getTransformationMatrixToPose(otherPose)`

Given a second pose that represent the same object in a second coordinate
system, this method returns a 4x4 matrix that transforms coordinates in the
coordinate system of this pose into the coordinate system of the second pose.

Returns `Matrix4`.
