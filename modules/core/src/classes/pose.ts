// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import Matrix4 from './matrix4';
import Vector3 from './vector3';
import Euler from './euler';

type PoseOptions = {
  position?: number[];
  orientation?: number[];
  x?: number;
  y?: number;
  z?: number;
  roll?: number;
  pitch?: number;
  yaw?: number;
};

export default class Pose {
  readonly position: Vector3;
  readonly orientation: Euler;

  constructor({
    x = 0,
    y = 0,
    z = 0,
    roll = 0,
    pitch = 0,
    yaw = 0,
    position = undefined,
    orientation = undefined
  } = {}) {
    if (Array.isArray(position) && position.length === 3) {
      this.position = new Vector3(position);
    } else {
      this.position = new Vector3(x, y, z);
    }
    if (Array.isArray(orientation) && orientation.length === 4) {
      // @ts-expect-error
      this.orientation = new Euler(orientation, orientation[3]);
    } else {
      this.orientation = new Euler(roll, pitch, yaw, Euler.RollPitchYaw);
    }
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
  }

  get z() {
    return this.position.z;
  }

  set z(value) {
    this.position.z = value;
  }

  get roll() {
    return this.orientation.roll;
  }

  set roll(value) {
    this.orientation.roll = value;
  }

  get pitch() {
    return this.orientation.pitch;
  }
  set pitch(value) {
    this.orientation.pitch = value;
  }

  get yaw() {
    return this.orientation.yaw;
  }

  set yaw(value) {
    this.orientation.yaw = value;
  }

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
    return (
      this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation)
    );
  }

  getTransformationMatrix() {
    // setup pre computations for the sin/cos of the angles
    const sr = Math.sin(this.roll);
    const sp = Math.sin(this.pitch);
    const sw = Math.sin(this.yaw);
    const cr = Math.cos(this.roll);
    const cp = Math.cos(this.pitch);
    const cw = Math.cos(this.yaw);

    // Create matrix
    return new Matrix4().setRowMajor(
      cw * cp, // 0,0
      -sw * cr + cw * sp * sr, // 0,1
      sw * sr + cw * sp * cr, // 0,2
      this.x, // 0,3
      sw * cp, // 1,0
      cw * cr + sw * sp * sr, // 1,1
      -cw * sr + sw * sp * cr, // 1,2
      this.y, // 1,3
      -sp, // 2,0
      cp * sr, // 2,1
      cp * cr, // 2,2
      this.z, // 2,3
      0,
      0,
      0,
      1
    );
  }

  getTransformationMatrixFromPose(pose) {
    return new Matrix4()
      .multiplyRight(this.getTransformationMatrix())
      .multiplyRight(pose.getTransformationMatrix().invert());
  }

  getTransformationMatrixToPose(pose) {
    return new Matrix4()
      .multiplyRight(pose.getTransformationMatrix())
      .multiplyRight(this.getTransformationMatrix().invert());
  }
}
