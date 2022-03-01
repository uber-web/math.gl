// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import MathArray from './base/math-array';
import Quaternion from './quaternion';
import {NumericArray} from '@math.gl/types';

import {clamp} from '../lib/common';
import {checkNumber} from '../lib/validators';

// Internal constants
const ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
const ALMOST_ONE = 0.99999;

enum RotationOrder {
  ZYX = 0,
  YXZ = 1,
  XZY = 2,
  ZXY = 3,
  YZX = 4,
  XYZ = 5
}

export default class Euler extends MathArray {
  // Constants
  static get ZYX(): RotationOrder {
    return RotationOrder.ZYX;
  }
  static get YXZ(): RotationOrder {
    return RotationOrder.YXZ;
  }
  static get XZY(): RotationOrder {
    return RotationOrder.XZY;
  }
  static get ZXY(): RotationOrder {
    return RotationOrder.ZXY;
  }
  static get YZX(): RotationOrder {
    return RotationOrder.YZX;
  }
  static get XYZ(): RotationOrder {
    return RotationOrder.XYZ;
  }
  static get RollPitchYaw(): RotationOrder {
    return RotationOrder.ZYX;
  }
  static get DefaultOrder(): RotationOrder {
    return RotationOrder.ZYX;
  }
  static get RotationOrders(): typeof RotationOrder {
    return RotationOrder;
  }
  static rotationOrder(order: RotationOrder): string {
    return RotationOrder[order];
  }
  get ELEMENTS(): number {
    return 4;
  }

  /**
   * @class
   * @param {Number | Number[]} x
   * @param {Number=} [y]
   * @param {Number=} [z]
   * @param {Number=} [order]
   */
  constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0);
    // eslint-disable-next-line prefer-rest-params
    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      // eslint-disable-next-line prefer-rest-params
      // @ts-expect-error
      this.fromVector3(...arguments);
    } else {
      this.set(x, y, z, order);
    }
  }

  fromQuaternion(quaternion: Readonly<NumericArray>): this {
    const [x, y, z, w] = quaternion;
    const ysqr = y * y;
    const t0 = -2 * (ysqr + z * z) + 1;
    const t1 = +2 * (x * y + w * z);
    let t2 = -2 * (x * z - w * y);
    const t3 = +2 * (y * z + w * x);
    const t4 = -2 * (x * x + ysqr) + 1;
    t2 = t2 > 1 ? 1 : t2;
    t2 = t2 < -1 ? -1 : t2;
    const roll = Math.atan2(t3, t4);
    const pitch = Math.asin(t2);
    const yaw = Math.atan2(t1, t0);
    return this.set(roll, pitch, yaw, Euler.RollPitchYaw);
  }

  fromObject(object: object): this {
    throw new Error('not implemented');
    //  return this.set(object.x, object.y, object.z, object.order);
  }

  // fromQuaternion(q, order) {
  //   this._fromRotationMat[-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
  //   return this.check();
  // }
  // If copied array does contain fourth element, preserves currently set order
  copy(array: Readonly<NumericArray>): this {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    // @ts-expect-error
    this[3] = Number.isFinite(array[3]) || this.order;
    return this.check();
  }

  // Sets the three angles, and optionally sets the rotation order
  // If order is not specified, preserves currently set order
  set(x = 0, y = 0, z = 0, order: RotationOrder): this {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = Number.isFinite(order) ? order : this[3];
    return this.check();
  }

  validate(): boolean {
    return (
      validateOrder(this[3]) &&
      Number.isFinite(this[0]) &&
      Number.isFinite(this[1]) &&
      Number.isFinite(this[2])
    );
  }

  // Does not copy the orientation element
  toArray(array: NumericArray = [], offset: number = 0): NumericArray {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    return array;
  }

  // Copies the orientation element
  toArray4(array: NumericArray = [], offset: number = 0): NumericArray {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    array[offset + 3] = this[3];
    return array;
  }

  toVector3(result: NumericArray = [-0, -0, -0]): NumericArray {
    result[0] = this[0];
    result[1] = this[1];
    result[2] = this[2];
    return result;
  }
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  // x, y, z angle notation (note: only corresponds to axis in XYZ orientation)

  get x(): number {
    return this[0];
  }
  set x(value: number) {
    this[0] = checkNumber(value);
  }

  get y(): number {
    return this[1];
  }
  set y(value: number) {
    this[1] = checkNumber(value);
  }

  get z(): number {
    return this[2];
  }
  set z(value: number) {
    this[2] = checkNumber(value);
  }
  // alpha, beta, gamma angle notation
  get alpha(): number {
    return this[0];
  }
  set alpha(value: number) {
    this[0] = checkNumber(value);
  }

  get beta(): number {
    return this[1];
  }
  set beta(value: number) {
    this[1] = checkNumber(value);
  }

  get gamma(): number {
    return this[2];
  }
  set gamma(value: number) {
    this[2] = checkNumber(value);
  }

  // phi, theta, psi angle notation
  get phi(): number {
    return this[0];
  }
  set phi(value: number) {
    this[0] = checkNumber(value);
  }

  get theta(): number {
    return this[1];
  }
  set theta(value: number) {
    this[1] = checkNumber(value);
  }

  get psi(): number {
    return this[2];
  }
  set psi(value: number) {
    this[2] = checkNumber(value);
  }
  // roll, pitch, yaw angle notation

  get roll(): number {
    return this[0];
  }
  set roll(value: number) {
    this[0] = checkNumber(value);
  }

  get pitch(): number {
    return this[1];
  }
  set pitch(value: number) {
    this[1] = checkNumber(value);
  }

  get yaw(): number {
    return this[2];
  }
  set yaw(value: number) {
    this[2] = checkNumber(value);
  }

  // rotation order, in all three angle notations
  get order(): RotationOrder {
    return this[3];
  }
  set order(value: RotationOrder) {
    this[3] = checkOrder(value);
  }

  // Constructors
  fromVector3(v: Readonly<NumericArray>, order: RotationOrder): this {
    return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
  }

  // TODO - with and without 4th element
  fromArray(array: Readonly<NumericArray>, offset: number = 0): this {
    this[0] = array[0 + offset];
    this[1] = array[1 + offset];
    this[2] = array[2 + offset];
    if (array[3] !== undefined) {
      this[3] = array[3];
    }
    return this.check();
  }

  // Common ZYX rotation order
  fromRollPitchYaw(roll: number, pitch: number, yaw: number): this {
    return this.set(roll, pitch, yaw, RotationOrder.ZYX);
  }

  fromRotationMatrix(m: Readonly<NumericArray>, order: RotationOrder = Euler.DefaultOrder): this {
    this._fromRotationMatrix(m, order);
    return this.check();
  }

  // ACCESSORS

  getRotationMatrix(m: NumericArray): NumericArray {
    return this._getRotationMatrix(m);
  }

  // TODO - move to Quaternion
  getQuaternion(): Quaternion {
    const q = new Quaternion();
    switch (this[4]) {
      case RotationOrder.XYZ:
        return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);
      case RotationOrder.YXZ:
        return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);
      case RotationOrder.ZXY:
        return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);
      case RotationOrder.ZYX:
        return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);
      case RotationOrder.YZX:
        return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);
      case RotationOrder.XZY:
        return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);
      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }
  }

  // INTERNAL METHODS
  // Conversion from Euler to rotation matrix and from matrix to Euler
  // Adapted from three.js under MIT license
  // // WARNING: this discards revolution information -bhouston
  // reorder(newOrder) {
  //   const q = new Quaternion().setFromEuler(this);
  //   return this.setFromQuaternion(q, newOrder);
  /* eslint-disable complexity, max-statements, one-var */
  _fromRotationMatrix(m: Readonly<NumericArray>, order = Euler.DefaultOrder): this {
    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    const m11 = m[0],
      m12 = m[4],
      m13 = m[8];
    const m21 = m[1],
      m22 = m[5],
      m23 = m[9];
    const m31 = m[2],
      m32 = m[6],
      m33 = m[10];
    order = order || this[3];
    switch (order) {
      case Euler.XYZ:
        this[1] = Math.asin(clamp(m13, -1, 1));
        if (Math.abs(m13) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m33);
          this[2] = Math.atan2(-m12, m11);
        } else {
          this[0] = Math.atan2(m32, m22);
          this[2] = 0;
        }
        break;
      case Euler.YXZ:
        this[0] = Math.asin(-clamp(m23, -1, 1));
        if (Math.abs(m23) < ALMOST_ONE) {
          this[1] = Math.atan2(m13, m33);
          this[2] = Math.atan2(m21, m22);
        } else {
          this[1] = Math.atan2(-m31, m11);
          this[2] = 0;
        }
        break;
      case Euler.ZXY:
        this[0] = Math.asin(clamp(m32, -1, 1));
        if (Math.abs(m32) < ALMOST_ONE) {
          this[1] = Math.atan2(-m31, m33);
          this[2] = Math.atan2(-m12, m22);
        } else {
          this[1] = 0;
          this[2] = Math.atan2(m21, m11);
        }
        break;
      case Euler.ZYX:
        this[1] = Math.asin(-clamp(m31, -1, 1));
        if (Math.abs(m31) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m33);
          this[2] = Math.atan2(m21, m11);
        } else {
          this[0] = 0;
          this[2] = Math.atan2(-m12, m22);
        }
        break;
      case Euler.YZX:
        this[2] = Math.asin(clamp(m21, -1, 1));
        if (Math.abs(m21) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m22);
          this[1] = Math.atan2(-m31, m11);
        } else {
          this[0] = 0;
          this[1] = Math.atan2(m13, m33);
        }
        break;
      case Euler.XZY:
        this[2] = Math.asin(-clamp(m12, -1, 1));
        if (Math.abs(m12) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m22);
          this[1] = Math.atan2(m13, m11);
        } else {
          this[0] = Math.atan2(-m23, m33);
          this[1] = 0;
        }
        break;
      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }
    this[3] = order;
    return this;
  }

  _getRotationMatrix(result: NumericArray): NumericArray {
    const te = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
    const x = this.x,
      y = this.y,
      z = this.z;
    const a = Math.cos(x);
    const c = Math.cos(y);
    const e = Math.cos(z);
    const b = Math.sin(x);
    const d = Math.sin(y);
    const f = Math.sin(z);
    switch (this[3]) {
      case Euler.XYZ: {
        const ae = a * e,
          af = a * f,
          be = b * e,
          bf = b * f;
        te[0] = c * e;
        te[4] = -c * f;
        te[8] = d;
        te[1] = af + be * d;
        te[5] = ae - bf * d;
        te[9] = -b * c;
        te[2] = bf - ae * d;
        te[6] = be + af * d;
        te[10] = a * c;
        break;
      }
      case Euler.YXZ: {
        const ce = c * e,
          cf = c * f,
          de = d * e,
          df = d * f;
        te[0] = ce + df * b;
        te[4] = de * b - cf;
        te[8] = a * d;
        te[1] = a * f;
        te[5] = a * e;
        te[9] = -b;
        te[2] = cf * b - de;
        te[6] = df + ce * b;
        te[10] = a * c;
        break;
      }
      case Euler.ZXY: {
        const ce = c * e,
          cf = c * f,
          de = d * e,
          df = d * f;
        te[0] = ce - df * b;
        te[4] = -a * f;
        te[8] = de + cf * b;
        te[1] = cf + de * b;
        te[5] = a * e;
        te[9] = df - ce * b;
        te[2] = -a * d;
        te[6] = b;
        te[10] = a * c;
        break;
      }
      case Euler.ZYX: {
        const ae = a * e,
          af = a * f,
          be = b * e,
          bf = b * f;
        te[0] = c * e;
        te[4] = be * d - af;
        te[8] = ae * d + bf;
        te[1] = c * f;
        te[5] = bf * d + ae;
        te[9] = af * d - be;
        te[2] = -d;
        te[6] = b * c;
        te[10] = a * c;
        break;
      }
      case Euler.YZX: {
        const ac = a * c,
          ad = a * d,
          bc = b * c,
          bd = b * d;
        te[0] = c * e;
        te[4] = bd - ac * f;
        te[8] = bc * f + ad;
        te[1] = f;
        te[5] = a * e;
        te[9] = -b * e;
        te[2] = -d * e;
        te[6] = ad * f + bc;
        te[10] = ac - bd * f;
        break;
      }
      case Euler.XZY: {
        const ac = a * c,
          ad = a * d,
          bc = b * c,
          bd = b * d;
        te[0] = c * e;
        te[4] = -f;
        te[8] = d * e;
        te[1] = ac * f + bd;
        te[5] = a * e;
        te[9] = ad * f - bc;
        te[2] = bc * f - ad;
        te[6] = b * e;
        te[10] = bd * f + ac;
        break;
      }
      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }
    // last column
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    // bottom row
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return te;
  }

  toQuaternion(): Quaternion {
    // Abbreviations for the various angular functions
    const cy = Math.cos(this.yaw * 0.5);
    const sy = Math.sin(this.yaw * 0.5);
    const cr = Math.cos(this.roll * 0.5);
    const sr = Math.sin(this.roll * 0.5);
    const cp = Math.cos(this.pitch * 0.5);
    const sp = Math.sin(this.pitch * 0.5);
    const w = cy * cr * cp + sy * sr * sp;
    const x = cy * sr * cp - sy * cr * sp;
    const y = cy * cr * sp + sy * sr * cp;
    const z = sy * cr * cp - cy * sr * sp;
    return new Quaternion(x, y, z, w);
  }
}

// HELPER FUNCTIONS

function validateOrder(value: number): boolean {
  return value >= 0 && value < 6;
}

function checkOrder(value: number) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }
  return value;
}
