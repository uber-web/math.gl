// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import Matrix4 from './matrix4';
import Vector3 from './vector3';
import Euler from './euler';
import {NumericArray} from '@math.gl/types';

type PoseOptions = {
  position?: Readonly<NumericArray>;
  orientation?: Readonly<NumericArray>;
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
    position,
    orientation
  }: PoseOptions = {}) {
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

  get x(): number {
    return this.position.x;
  }

  set x(value: number) {
    this.position.x = value;
  }

  get y(): number {
    return this.position.y;
  }

  set y(value: number) {
    this.position.y = value;
  }

  get z(): number {
    return this.position.z;
  }

  set z(value: number) {
    this.position.z = value;
  }

  get roll(): number {
    return this.orientation.roll;
  }

  set roll(value: number) {
    this.orientation.roll = value;
  }

  get pitch(): number {
    return this.orientation.pitch;
  }
  set pitch(value: number) {
    this.orientation.pitch = value;
  }

  get yaw(): number {
    return this.orientation.yaw;
  }

  set yaw(value: number) {
    this.orientation.yaw = value;
  }

  getPosition(): Vector3 {
    return this.position;
  }

  getOrientation(): Euler {
    return this.orientation;
  }

  equals(pose: Pose): boolean {
    if (!pose) {
      return false;
    }
    return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
  }

  exactEquals(pose: Pose): boolean {
    if (!pose) {
      return false;
    }
    return (
      this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation)
    );
  }

  getTransformationMatrix(): Matrix4 {
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

  getTransformationMatrixFromPose(pose: Pose): Matrix4 {
    return new Matrix4()
      .multiplyRight(this.getTransformationMatrix())
      .multiplyRight(pose.getTransformationMatrix().invert());
  }

  getTransformationMatrixToPose(pose: Pose): Matrix4 {
    return new Matrix4()
      .multiplyRight(pose.getTransformationMatrix())
      .multiplyRight(this.getTransformationMatrix().invert());
  }
}
