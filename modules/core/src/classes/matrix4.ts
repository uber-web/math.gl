// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import Matrix from './base/matrix';
import {NumericArray} from '@math.gl/types';
import {checkVector} from '../lib/validators';

/* eslint-disable camelcase */
import {vec2_transformMat4AsVector, vec3_transformMat4AsVector} from '../lib/gl-matrix-extras';
import * as mat4 from 'gl-matrix/mat4';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';
import * as vec4 from 'gl-matrix/vec4';

enum INDICES {
  COL0ROW0 = 0,
  COL0ROW1 = 1,
  COL0ROW2 = 2,
  COL0ROW3 = 3,
  COL1ROW0 = 4,
  COL1ROW1 = 5,
  COL1ROW2 = 6,
  COL1ROW3 = 7,
  COL2ROW0 = 8,
  COL2ROW1 = 9,
  COL2ROW2 = 10,
  COL2ROW3 = 11,
  COL3ROW0 = 12,
  COL3ROW1 = 13,
  COL3ROW2 = 14,
  COL3ROW3 = 15
}

const DEFAULT_FOVY = (45 * Math.PI) / 180;
const DEFAULT_ASPECT = 1;
const DEFAULT_NEAR = 0.1;
const DEFAULT_FAR = 500;

const IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

/** 4x4 matrix */
export default class Matrix4 extends Matrix {
  static get IDENTITY(): Readonly<Matrix4> {
    return getIdentityMatrix();
  }

  static get ZERO(): Readonly<Matrix4> {
    return getZeroMatrix();
  }

  get ELEMENTS(): number {
    return 16;
  }

  get RANK(): number {
    return 4;
  }

  get INDICES(): typeof INDICES {
    return INDICES;
  }

  constructor(array?: Readonly<NumericArray>) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);
    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array: Readonly<NumericArray>): this {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    this[9] = array[9];
    this[10] = array[10];
    this[11] = array[11];
    this[12] = array[12];
    this[13] = array[13];
    this[14] = array[14];
    this[15] = array[15];
    return this.check();
  }

  // eslint-disable-next-line max-params
  set(
    m00: number,
    m10: number,
    m20: number,
    m30: number,
    m01: number,
    m11: number,
    m21: number,
    m31: number,
    m02: number,
    m12: number,
    m22: number,
    m32: number,
    m03: number,
    m13: number,
    m23: number,
    m33: number
  ): this {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  // accepts row major order, stores as column major
  // eslint-disable-next-line max-params
  setRowMajor(
    m00: number,
    m01: number,
    m02: number,
    m03: number,
    m10: number,
    m11: number,
    m12: number,
    m13: number,
    m20: number,
    m21: number,
    m22: number,
    m23: number,
    m30: number,
    m31: number,
    m32: number,
    m33: number
  ): this {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  toRowMajor(result: NumericArray): NumericArray {
    result[0] = this[0];
    result[1] = this[4];
    result[2] = this[8];
    result[3] = this[12];
    result[4] = this[1];
    result[5] = this[5];
    result[6] = this[9];
    result[7] = this[13];
    result[8] = this[2];
    result[9] = this[6];
    result[10] = this[10];
    result[11] = this[14];
    result[12] = this[3];
    result[13] = this[7];
    result[14] = this[11];
    result[15] = this[15];
    return result;
  }

  // Constructors

  /** Set to identity matrix */
  identity(): this {
    return this.copy(IDENTITY_MATRIX);
  }

  /**
   *
   * @param object
   * @returns self
   */
  fromObject(object: {[key: string]: any}): this {
    return this.check();
  }

  /**
   * Calculates a 4x4 matrix from the given quaternion
   * @param quaternion Quaternion to create matrix from
   * @returns self
   */
  fromQuaternion(quaternion: Readonly<NumericArray>): this {
    mat4.fromQuat(this, quaternion);
    return this.check();
  }

  /**
   * Generates a frustum matrix with the given bounds
   * @param view.left - Left bound of the frustum
   * @param view.right - Right bound of the frustum
   * @param view.bottom - Bottom bound of the frustum
   * @param view.top - Top bound of the frustum
   * @param view.near - Near bound of the frustum
   * @param view.far - Far bound of the frustum. Can be set to Infinity.
   * @returns self
   */
  frustum(view: {
    left: number;
    right: number;
    bottom: number;
    top: number;
    near: number;
    far?: number;
  }): this {
    const {left, right, bottom, top, near = DEFAULT_NEAR, far = DEFAULT_FAR} = view;
    if (far === Infinity) {
      computeInfinitePerspectiveOffCenter(this, left, right, bottom, top, near);
    } else {
      mat4.frustum(this, left, right, bottom, top, near, far);
    }
    return this.check();
  }

  /**
   * Generates a look-at matrix with the given eye position, focal point,
   * and up axis
   * @param view.eye - (vector) Position of the viewer
   * @param view.center - (vector) Point the viewer is looking at
   * @param view.up - (vector) Up axis
   * @returns self
   */
  lookAt(view: {
    eye: Readonly<NumericArray>;
    center?: Readonly<NumericArray>;
    up?: Readonly<NumericArray>;
  }): this {
    const {eye, center = [0, 0, 0], up = [0, 1, 0]} = view;
    mat4.lookAt(this, eye, center, up);
    return this.check();
  }

  /**
   * Generates a orthogonal projection matrix with the given bounds
   * from "traditional" view space parameters
   * @param view.left - Left bound of the frustum
   * @param view.right number  Right bound of the frustum
   * @param view.bottom - Bottom bound of the frustum
   * @param view.top number  Top bound of the frustum
   * @param view.near - Near bound of the frustum
   * @param view.far number  Far bound of the frustum
   * @returns self
   */
  ortho(view: {
    left: number;
    right: number;
    bottom: number;
    top: number;
    near?: number;
    far?: number;
  }): this {
    const {left, right, bottom, top, near = DEFAULT_NEAR, far = DEFAULT_FAR} = view;
    mat4.ortho(this, left, right, bottom, top, near, far);
    return this.check();
  }

  /**
   * Generates an orthogonal projection matrix with the same parameters
   * as a perspective matrix (plus focalDistance)
   * @param view.fovy Vertical field of view in radians
   * @param view.aspect Aspect ratio. Typically viewport width / viewport height
   * @param view.focalDistance Distance in the view frustum used for extent calculations
   * @param view.near Near bound of the frustum
   * @param view.far Far bound of the frustum
   * @returns self
   */
  orthographic(view: {
    fovy?: number;
    aspect?: number;
    focalDistance?: number;
    near?: number;
    far?: number;
  }): this {
    const {
      fovy = DEFAULT_FOVY,
      aspect = DEFAULT_ASPECT,
      focalDistance = 1,
      near = DEFAULT_NEAR,
      far = DEFAULT_FAR
    } = view;

    checkRadians(fovy);

    const halfY = fovy / 2;
    const top = focalDistance * Math.tan(halfY); // focus_plane is the distance from the camera
    const right = top * aspect;

    return this.ortho({
      left: -right,
      right,
      bottom: -top,
      top,
      near,
      far
    });
  }

  /**
   * Generates a perspective projection matrix with the given bounds
   * @param view.fovy Vertical field of view in radians
   * @param view.aspect Aspect ratio. typically viewport width/height
   * @param view.near Near bound of the frustum
   * @param view.far Far bound of the frustum
   * @returns self
   */
  perspective(view: {fovy: number; aspect?: number; near?: number; far?: number}): this {
    const {fovy = (45 * Math.PI) / 180, aspect = 1, near = 0.1, far = 500} = view;
    checkRadians(fovy);
    mat4.perspective(this, fovy, aspect, near, far);
    return this.check();
  }

  // Accessors

  determinant(): number {
    return mat4.determinant(this);
  }

  /**
   * Extracts the non-uniform scale assuming the matrix is an affine transformation.
   * The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
   * @param result
   * @returns self
   */
  getScale(result: NumericArray = [-0, -0, -0]): NumericArray {
    // explicit is faster than hypot...
    result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
    result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
    // result[0] = Math.hypot(this[0], this[1], this[2]);
    // result[1] = Math.hypot(this[4], this[5], this[6]);
    // result[2] = Math.hypot(this[8], this[9], this[10]);
    return result;
  }

  /**
   * Gets the translation portion, assuming the matrix is a affine transformation matrix.
   * @param result
   * @returns self
   */
  getTranslation(result: NumericArray = [-0, -0, -0]): NumericArray {
    result[0] = this[12];
    result[1] = this[13];
    result[2] = this[14];
    return result;
  }

  /**
   * Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
   * @param result
   * @param scaleResult
   * @returns self
   */
  getRotation(result?: NumericArray, scaleResult?: NumericArray): NumericArray {
    result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
    scaleResult = scaleResult || [-0, -0, -0];
    const scale = this.getScale(scaleResult);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = 0;
    result[4] = this[4] * inverseScale0;
    result[5] = this[5] * inverseScale1;
    result[6] = this[6] * inverseScale2;
    result[7] = 0;
    result[8] = this[8] * inverseScale0;
    result[9] = this[9] * inverseScale1;
    result[10] = this[10] * inverseScale2;
    result[11] = 0;
    result[12] = 0;
    result[13] = 0;
    result[14] = 0;
    result[15] = 1;
    return result;
  }

  /**
   *
   * @param result
   * @param scaleResult
   * @returns self
   */
  getRotationMatrix3(result?: NumericArray, scaleResult?: NumericArray): NumericArray {
    result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0];
    scaleResult = scaleResult || [-0, -0, -0];
    const scale = this.getScale(scaleResult);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = this[4] * inverseScale0;
    result[4] = this[5] * inverseScale1;
    result[5] = this[6] * inverseScale2;
    result[6] = this[8] * inverseScale0;
    result[7] = this[9] * inverseScale1;
    result[8] = this[10] * inverseScale2;
    return result;
  }

  // Modifiers

  transpose(): this {
    mat4.transpose(this, this);
    return this.check();
  }

  invert(): this {
    mat4.invert(this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a: Readonly<NumericArray>): this {
    mat4.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a: Readonly<NumericArray>): this {
    mat4.multiply(this, this, a);
    return this.check();
  }

  // Rotates a matrix by the given angle around the X axis
  rotateX(radians: number): this {
    mat4.rotateX(this, this, radians);
    // mat4.rotate(this, this, radians, [1, 0, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Y axis.
  rotateY(radians: number): this {
    mat4.rotateY(this, this, radians);
    // mat4.rotate(this, this, radians, [0, 1, 0]);
    return this.check();
  }

  /**
   * Rotates a matrix by the given angle around the Z axis.
   * @param radians
   * @returns self
   */
  rotateZ(radians: number): this {
    mat4.rotateZ(this, this, radians);
    // mat4.rotate(this, this, radians, [0, 0, 1]);
    return this.check();
  }

  /**
   *
   * @param param0
   * @returns self
   */
  rotateXYZ(angleXYZ: Readonly<NumericArray>): this {
    return this.rotateX(angleXYZ[0]).rotateY(angleXYZ[1]).rotateZ(angleXYZ[2]);
  }

  /**
   *
   * @param radians
   * @param axis
   * @returns self
   */
  rotateAxis(radians: number, axis: Readonly<NumericArray>): this {
    mat4.rotate(this, this, radians, axis);
    return this.check();
  }

  /**
   *
   * @param factor
   * @returns self
   */
  scale(factor: number | Readonly<NumericArray>): this {
    mat4.scale(this, this, Array.isArray(factor) ? factor : [factor, factor, factor]);
    return this.check();
  }

  /**
   *
   * @param vec
   * @returns self
   */
  translate(vector: Readonly<NumericArray>): this {
    mat4.translate(this, this, vector);
    return this.check();
  }

  // Transforms

  /**
   * Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
   * @param vector
   * @param result
   * @returns self
   */
  transform(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    if (vector.length === 4) {
      result = vec4.transformMat4(result || [-0, -0, -0, -0], vector, this);
      checkVector(result, 4);
      return result;
    }
    return this.transformAsPoint(vector, result);
  }

  /**
   * Transforms any 2 or 3 element array as point (w implicitly 1)
   * @param vector
   * @param result
   * @returns self
   */
  transformAsPoint(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    const {length} = vector;
    let out: NumericArray;
    switch (length) {
      case 2:
        out = vec2.transformMat4(result || [-0, -0], vector, this);
        break;
      case 3:
        out = vec3.transformMat4(result || [-0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(out, vector.length);
    return out;
  }

  /**
   * Transforms any 2 or 3 element array as vector (w implicitly 0)
   * @param vector
   * @param result
   * @returns self
   */
  transformAsVector(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    let out: NumericArray;
    switch (vector.length) {
      case 2:
        out = vec2_transformMat4AsVector(result || [-0, -0], vector, this);
        break;
      case 3:
        out = vec3_transformMat4AsVector(result || [-0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(out, vector.length);
    return out;
  }

  /** @deprecated */
  transformPoint(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    return this.transformAsPoint(vector, result);
  }

  /** @deprecated */
  transformVector(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    return this.transformAsPoint(vector, result);
  }

  /** @deprecated */
  transformDirection(vector: Readonly<NumericArray>, result?: NumericArray): NumericArray {
    return this.transformAsVector(vector, result);
  }

  // three.js math API compatibility

  makeRotationX(radians: number): this {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x: number, y: number, z: number): this {
    return this.identity().translate([x, y, z]);
  }
}

// TODO initializing static members directly is an option, but make sure no tree-shaking issues
let ZERO: Matrix4;
let IDENTITY: Matrix4;

function getZeroMatrix(): Readonly<Matrix4> {
  if (!ZERO) {
    ZERO = new Matrix4([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Object.freeze(ZERO);
  }
  return ZERO;
}

function getIdentityMatrix(): Matrix4 {
  if (!IDENTITY) {
    IDENTITY = new Matrix4();
    Object.freeze(IDENTITY);
  }
  return IDENTITY;
}

// HELPER FUNCTIONS

function checkRadians(possiblyDegrees: number) {
  if (possiblyDegrees > Math.PI * 2) {
    throw Error('expected radians');
  }
}

// eslint-disable-next-line max-params
function computeInfinitePerspectiveOffCenter(
  result: NumericArray,
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number
): NumericArray {
  const column0Row0 = (2 * near) / (right - left);
  const column1Row1 = (2 * near) / (top - bottom);
  const column2Row0 = (right + left) / (right - left);
  const column2Row1 = (top + bottom) / (top - bottom);
  const column2Row2 = -1;
  const column2Row3 = -1;
  const column3Row2 = -2 * near;
  result[0] = column0Row0;
  result[1] = 0;
  result[2] = 0;
  result[3] = 0;
  result[4] = 0;
  result[5] = column1Row1;
  result[6] = 0;
  result[7] = 0;
  result[8] = column2Row0;
  result[9] = column2Row1;
  result[10] = column2Row2;
  result[11] = column2Row3;
  result[12] = 0;
  result[13] = 0;
  result[14] = column3Row2;
  result[15] = 0;
  return result;
}
