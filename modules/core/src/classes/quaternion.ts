// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import MathArray from './base/math-array';
import {checkNumber, checkVector} from '../lib/validators';
import assert from '../lib/assert';
import * as quat from 'gl-matrix/quat';
import * as vec4 from 'gl-matrix/vec4';
import {NumericArray} from '../lib/types';

const IDENTITY_QUATERNION = [0, 0, 0, 1] as const;

export default class Quaternion extends MathArray {
  constructor(x: number | Readonly<NumericArray> = 0, y = 0, z = 0, w = 1) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0);
    // eslint-disable-next-line prefer-rest-params
    if (Array.isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      this.set(x, y, z, w);
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  fromObject(object: {[key: string]: any}): this {
    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this.check();
  }

  /**
   * Creates a quaternion from the given 3x3 rotation matrix.
   * NOTE: The resultant quaternion is not normalized, so you should
   * be sure to renormalize the quaternion yourself where necessary.
   * @param m
   * @returns
   */
  fromMatrix3(m) {
    quat.fromMat3(this, m);
    return this.check();
  }

  fromAxisRotation(axis, rad) {
    quat.setAxisAngle(this, axis, rad);
    return this.check();
  }

  /** Set a quat to the identity quaternion */
  identity() {
    quat.identity(this);
    return this.check();
  }

  // Set the components of a quat to the given values
  // set(i, j, k, l) {
  //   quat.set(this, i, j, k, l);
  //   return this.check();
  // }

  // Sets a quat from the given angle and rotation axis, then returns it.
  setAxisAngle(axis, rad) {
    return this.fromAxisRotation(axis, rad);
  }

  // Getters/setters
  get ELEMENTS() {
    return 4;
  }
  get x() {
    return this[0];
  }
  set x(value) {
    this[0] = checkNumber(value);
  }
  get y() {
    return this[1];
  }
  set y(value) {
    this[1] = checkNumber(value);
  }
  get z() {
    return this[2];
  }
  set z(value) {
    this[2] = checkNumber(value);
  }
  get w() {
    return this[3];
  }
  set w(value) {
    this[3] = checkNumber(value);
  }

  // Calculates the length of a quat
  len() {
    return quat.length(this);
  }
  // Calculates the squared length of a quat
  lengthSquared() {
    return quat.squaredLength(this);
  }
  // Calculates the dot product of two quat's
  // @return {Number}
  dot(a, b) {
    if (b !== undefined) {
      throw new Error('Quaternion.dot only takes one argument');
    }
    return quat.dot(this, a);
  }
  // Gets the rotation axis and angle for a given quaternion.
  // If a quaternion is created with setAxisAngle, this method will
  // return the same values as providied in the original parameter
  // list OR functionally equivalent values.
  // Example: The quaternion formed by axis [0, 0, 1] and angle -90
  // is the same as the quaternion formed by [0, 0, 1] and 270.
  // This method favors the latter.
  // @return {{[x,y,z], Number}}
  // getAxisAngle() {
  //   const axis = [];
  //   const angle = quat.getAxisAngle(axis, this);
  //   return {axis, angle};
  // }
  // MODIFIERS
  // Sets a quaternion to represent the shortest rotation from one vector
  // to another. Both vectors are assumed to be unit length.
  rotationTo(vectorA, vectorB) {
    quat.rotationTo(this, vectorA, vectorB);
    return this.check();
  }
  // Sets the specified quaternion with values corresponding to the given axes.
  // Each axis is a vec3 and is expected to be unit length and perpendicular
  // to all other specified axes.
  // setAxes() {
  //   Number
  // }
  // Performs a spherical linear interpolation with two control points
  // sqlerp() {
  //   Number;
  // }
  // Adds two quat's
  add(a: Readonly<NumericArray>) {
    quat.add(this, this, a);
    return this.check();
  }
  // Calculates the W component of a quat from the X, Y, and Z components.
  // Any existing W component will be ignored.
  calculateW() {
    quat.calculateW(this, this);
    return this.check();
  }
  // Calculates the conjugate of a quat If the quaternion is normalized,
  // this function is faster than quat.inverse and produces the same result.
  conjugate() {
    quat.conjugate(this, this);
    return this.check();
  }
  // Calculates the inverse of a quat
  invert() {
    quat.invert(this, this);
    return this.check();
  }
  // Performs a linear interpolation between two quat's
  lerp(a: Readonly<NumericArray>, b: Readonly<NumericArray> | number, t?: number): this {
    if (t === undefined) {
      return this.lerp(this, a, b as number);
    }
    quat.lerp(this, a, b, t);
    return this.check();
  }
  // Multiplies two quat's
  multiplyRight(a, b) {
    assert(!b); // Quaternion.multiply only takes one argument
    quat.multiply(this, this, a);
    return this.check();
  }
  multiplyLeft(a, b) {
    assert(!b); // Quaternion.multiply only takes one argument
    quat.multiply(this, a, this);
    return this.check();
  }
  // Normalize a quat
  normalize() {
    // Handle 0 case
    const length = this.len();
    const l = length > 0 ? 1 / length : 0;
    this[0] = this[0] * l;
    this[1] = this[1] * l;
    this[2] = this[2] * l;
    this[3] = this[3] * l;
    // Set to [0, 0, 0, 1] if length is 0
    if (length === 0) {
      this[3] = 1;
    }
    return this.check();
  }
  // Rotates a quaternion by the given angle about the X axis
  rotateX(rad) {
    quat.rotateX(this, this, rad);
    return this.check();
  }
  // Rotates a quaternion by the given angle about the Y axis
  rotateY(rad) {
    quat.rotateY(this, this, rad);
    return this.check();
  }
  // Rotates a quaternion by the given angle about the Z axis
  rotateZ(rad) {
    quat.rotateZ(this, this, rad);
    return this.check();
  }
  // Scales a quat by a scalar number
  scale(b) {
    quat.scale(this, this, b);
    return this.check();
  }
  // Performs a spherical linear interpolation between two quat
  slerp(start, target, ratio) {
    // eslint-disable-next-line prefer-rest-params
    switch (arguments.length) {
      case 1: // Deprecated signature ({start, target, ratio})
        // eslint-disable-next-line prefer-rest-params
        ({start = IDENTITY_QUATERNION, target, ratio} = arguments[0]);
        break;
      case 2: // THREE.js compatibility signature (target, ration)
        // eslint-disable-next-line prefer-rest-params
        [target, ratio] = arguments;
        start = this; // eslint-disable-line
        break;
      default: // Default signature: (start, target, ratio)
    }
    quat.slerp(this, start, target, ratio);
    return this.check();
  }
  transformVector4(vector, result = vector) {
    vec4.transformQuat(result, vector, this);
    return checkVector(result, 4);
  }
  // THREE.js Math API compatibility
  lengthSq() {
    return this.lengthSquared();
  }
  setFromAxisAngle(axis, rad) {
    return this.setAxisAngle(axis, rad);
  }
  premultiply(a, b) {
    return this.multiplyLeft(a, b);
  }
  multiply(a, b) {
    return this.multiplyRight(a, b);
  }
}
