// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import Matrix4 from './matrix4';
import Vector3 from './vector3';
import Euler from './euler';

export default class Pose {

  /**
   * A pose contains both rotation and rotations.
   * Note that every single pose defines its own coordinate system
   * (with the position of the pose in the origin, and zero rotations).
   * These "pose relative" coordinate will be centered on the defining
   * pose's position and with with the defining pose's orientation
   * aligned with axis.
   */
  constructor({x = 0, y = 0, z = 0, roll = 0, pitch = 0, yaw = 0, position, orientation}) {
    if (Array.isArray(position) && position.length === 3) {
      this.position = new Vector3(position);
    } else {
      this.position = new Vector3(x, y, z);
    }
    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new Euler(orientation, orientation[3]);
    } else {
      this.orientation = new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }

  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get x()      { return this.position.x; }
  set x(value) { return this.position.x = value; }
  get y()      { return this.position.y; }
  set y(value) { return this.position.y = value; }
  get z()      { return this.position.z; }
  set z(value) { return this.position.z = value; }
  get roll()       { return this.orientation.roll; }
  set roll(value)  { return this.orientation.roll = value; }
  get pitch()      { return this.orientation.pitch; }
  set pitch(value) { return this.orientation.pitch = value; }
  get yaw()        { return this.orientation.yaw; }
  set yaw(value)   { return this.orientation.yaw = value; }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  getPosition() {
    return this.position;
  }

  getOrientation() {
    return this.orientation;
  }

  equals(pose) {
    if (!pose) {
      return false;
    }
    return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
  }

  exactEquals(pose) {
    if (!pose) {
      return false;
    }
    return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
  }

  /*
   * Returns a 4x4 matrix that transforms a coordinates (in the same
   * coordinate system as this pose) into the "pose-relative" coordinate
   * system defined by this pose.
   * The pose relative coordinates with have origin in the position of this
   * pose, and axis will be aligned with the rotation of this pose.
   */
  getTransformationMatrix() {
    // setup precomputations for the sin/cos of the angles
    const sr = Math.sin(this.roll);
    const sp = Math.sin(this.pitch);
    const sw = Math.sin(this.yaw);

    const cr = Math.cos(this.roll);
    const cp = Math.cos(this.pitch);
    const cw = Math.cos(this.yaw);

    const matrix = new Matrix4().setRowMajor(
      cw * cp,                  // 0,0
      -sw * cr + cw * sp * sr,  // 0,1
      sw * sr + cw * sp * cr,   // 0,2
      this.x,                   // 0,3

      sw * cp,                  // 1,0
      cw * cr + sw * sp * sr,   // 1,1
      -cw * sr + sw * sp * cr,  // 1,2
      this.y,                   // 1,3

      -sp,                      // 2,0
      cp * sr,                  // 2,1
      cp * cr,                  // 2,2
      this.z,                   // 2,3

      0,
      0,
      0,
      1
    );

    return matrix;
  }

  /*
   * Given a second pose that represent the same object in a second coordinate
   * system, this method returns a 4x4 matrix that transforms coordinates in the
   * second coordinate system into the coordinate system of this pose.
   */
  getTransformationMatrixFromPose(pose) {
    return new Matrix4()
      .multiplyRight(this.getTransformationMatrix())
      .multiplyRight(pose.getTransformationMatrix().invert());
  }

  /*
   * Given a second pose that represent the same object in a second coordinate
   * system, this method returns a 4x4 matrix that transforms coordinates in the
   * coordinate system of this pose into the coordinate system of the second pose.
   *
   * Note: This method returns the inverse of that returned by
   * this.getTransformationMatrixFromPose(pose)
   */
  getTransformationMatrixToPose(pose) {
    return new Matrix4()
      .multiplyRight(pose.getTransformationMatrix())
      .multiplyRight(this.getTransformationMatrix().invert());
  }

}
