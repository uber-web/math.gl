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

import {config} from '../lib/common';
import {validateVector, checkVector} from '../lib/validators';
import Matrix from '../lib/matrix';
import Vector2 from './vector2';
import Vector3 from './vector3';
import Vector4 from './vector4';

import * as mat4 from 'gl-matrix/mat4';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';
import * as vec4 from 'gl-matrix/vec4';

const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// eslint-disable-next-line complexity
export function validateMatrix4(m) {
  return (
    m.length === 16 &&
    Number.isFinite(m[0]) &&
    Number.isFinite(m[1]) &&
    Number.isFinite(m[2]) &&
    Number.isFinite(m[3]) &&
    Number.isFinite(m[4]) &&
    Number.isFinite(m[5]) &&
    Number.isFinite(m[6]) &&
    Number.isFinite(m[7]) &&
    Number.isFinite(m[8]) &&
    Number.isFinite(m[9]) &&
    Number.isFinite(m[10]) &&
    Number.isFinite(m[11]) &&
    Number.isFinite(m[12]) &&
    Number.isFinite(m[13]) &&
    Number.isFinite(m[14]) &&
    Number.isFinite(m[15])
  );
}

export default class Matrix4 extends Matrix {
  get ELEMENTS() {
    return 16;
  }

  get RANK() {
    return 4;
  }

  get Vector() {
    return Vector4;
  }

  constructor() {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      this.copy(arguments[0]);
    } else {
      this.identity();
    }
  }

  fromObject(object) {
    const array = object.elements;
    return this.fromRowMajor(array);
  }

  toObject(object) {
    const array = object.elements;
    this.toRowMajor(array);
    return object;
  }

  // Sets exact values (column major)
  set(...args) {
    return this.fromColumnMajor(...args);
  }

  // accepts column major order, stores in column major order
  fromColumnMajor(...args) {
    return this.copy(args);
  }

  // accepts row major order, stores as column major
  fromRowMajor(...args) {
    this[0] = args[0];
    this[1] = args[4];
    this[2] = args[8];
    this[3] = args[12];
    this[4] = args[1];
    this[5] = args[5];
    this[6] = args[9];
    this[7] = args[13];
    this[8] = args[2];
    this[9] = args[6];
    this[10] = args[10];
    this[11] = args[14];
    this[12] = args[3];
    this[13] = args[7];
    this[14] = args[11];
    this[15] = args[15];
    return this.check();
  }

  toColumnMajor(result) {
    return this.toArray(result);
  }

  toRowMajor(result) {
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
  }

  // Constructors

  identity() {
    return this.copy(IDENTITY);
  }

  // Calculates a 4x4 matrix from the given quaternion
  // q quat  Quaternion to create matrix from
  fromQuaternion(q) {
    mat4.fromQuat(this, q);
    return this.check();
  }

  // Generates a frustum matrix with the given bounds
  // left  Number  Left bound of the frustum
  // right Number  Right bound of the frustum
  // bottom  Number  Bottom bound of the frustum
  // top Number  Top bound of the frustum
  // near  Number  Near bound of the frustum
  // far Number  Far bound of the frustum
  frustum({left, right, bottom, top, near, far}) {
    mat4.frustum(this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates a look-at matrix with the given eye position, focal point,
  // and up axis
  // eye vec3  Position of the viewer
  // center  vec3  Point the viewer is looking at
  // up  vec3  vec3 pointing up
  lookAt(eye, center, up) {
    // Signature: lookAt({eye, center = [0, 0, 0], up = [0, 1, 0]}))
    if (arguments.length === 1) {
      ({eye, center, up} = eye);
    }

    center = center || [0, 0, 0];
    up = up || [0, 1, 0];

    mat4.lookAt(this, eye, center, up);
    return this.check();
  }

  // Generates a orthogonal projection matrix with the given bounds
  // from "traditional" view space parameters
  // left  number  Left bound of the frustum
  // right number  Right bound of the frustum
  // bottom  number  Bottom bound of the frustum
  // top number  Top bound of the frustum
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  ortho({left, right, bottom, top, near = 0.1, far = 500}) {
    mat4.ortho(this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates an orthogonal projection matrix with the same parameters
  // as a perspective matrix (plus focalDistance)
  // fovy  number  Vertical field of view in radians
  // aspect  number  Aspect ratio. typically viewport width/height
  // focalDistance distance in the view frustum used for extent calculations
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  orthographic({
    fovy = (45 * Math.PI) / 180,
    aspect = 1,
    focalDistance = 1,
    near = 0.1,
    far = 500
  }) {
    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }
    const halfY = fovy / 2;
    const top = focalDistance * Math.tan(halfY); // focus_plane is the distance from the camera
    const right = top * aspect;

    return new Matrix4().ortho({
      left: -right,
      right,
      bottom: -top,
      top,
      near,
      far
    });
  }

  // Generates a perspective projection matrix with the given bounds
  // fovy  number  Vertical field of view in radians
  // aspect  number  Aspect ratio. typically viewport width/height
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  perspective({
    fovy,
    fov = (45 * Math.PI) / 180, // DEPRECATED
    aspect = 1,
    near = 0.1,
    far = 500
  } = {}) {
    fovy = fovy || fov;
    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }
    mat4.perspective(this, fovy, aspect, near, far);
    return this.check();
  }

  // Accessors

  determinant() {
    return mat4.determinant(this);
  }

  // Extracts the non-uniform scale assuming the matrix is an affine transformation.
  // The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
  getScale(result = [-0, -0, -0]) {
    // explicit is faster than hypot...
    result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
    result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
    // result[0] = Math.hypot(this[0], this[1], this[2]);
    // result[1] = Math.hypot(this[4], this[5], this[6]);
    // result[2] = Math.hypot(this[8], this[9], this[10]);
    return result;
  }

  // Gets the translation portion, assuming the matrix is a affine transformation matrix.
  getTranslation(result = [-0, -0, -0]) {
    result[0] = this[12];
    result[1] = this[13];
    result[2] = this[14];
    return result;
  }

  // Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
  getRotation(
    result = [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0],
    scaleResult = null
  ) {
    const scale = this.getScale(scaleResult || [-0, -0, -0]);

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

  // Modifiers

  transpose() {
    mat4.transpose(this, this);
    return this.check();
  }

  invert() {
    mat4.invert(this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat4.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat4.multiply(this, this, a);
    return this.check();
  }

  // Rotates a matrix by the given angle around the X axis
  rotateX(radians) {
    mat4.rotateX(this, this, radians);
    // mat4.rotate(this, this, radians, [1, 0, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Y axis.
  rotateY(radians) {
    mat4.rotateY(this, this, radians);
    // mat4.rotate(this, this, radians, [0, 1, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Z axis.
  rotateZ(radians) {
    mat4.rotateZ(this, this, radians);
    // mat4.rotate(this, this, radians, [0, 0, 1]);
    return this.check();
  }

  rotateXYZ([rx, ry, rz]) {
    return this.rotateX(rx)
      .rotateY(ry)
      .rotateZ(rz);
  }

  rotateAxis(radians, axis) {
    mat4.rotate(this, this, radians, axis);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      mat4.scale(this, this, factor);
    } else {
      mat4.scale(this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    mat4.translate(this, this, vec);
    return this.check();
  }

  transformVector2(vector, result) {
    // result = result || [0, 0];
    result = result || new Vector2();
    vec2.transformMat4(result, vector, this);
    if (config.debug) {
      validateVector(result, 2);
    }
    return result;
  }

  transformVector3(vector, result) {
    // result = result || [0, 0, 0];
    result = result || new Vector3();
    vec3.transformMat4(result, vector, this);
    if (config.debug) {
      validateVector(result, 3);
    }
    return result;
  }

  transformVector4(vector, result) {
    // result = result || [0, 0, 0, 0];
    result = result || new Vector4();
    vec4.transformMat4(result, vector, this);
    if (config.debug) {
      validateVector(result, 4);
    }
    return result;
  }

  // Transforms any 2, 3 or 4 element vector
  // returns a newly minted Vector2, Vector3 or Vector4
  transformVector(vector, result) {
    switch (vector.length) {
      case 2:
        return this.transformVector2(vector, result);
      case 3:
        return this.transformVector3(vector, result);
      case 4:
        return vector[3]
          ? this.transformVector4(vector, result)
          : this.transformDirection4(vector, result);
      default:
        throw new Error('Illegal vector');
    }
  }

  transformDirection(vector, result) {
    return this._transformVector(vector, result, 0);
  }

  transformDirection4(vector, result = vector) {
    const x = vector[0];
    const y = vector[1];
    const z = vector[2];
    result[0] = this[0] * x + this[4] * y + this[8] * z;
    result[1] = this[1] * x + this[5] * y + this[9] * z;
    result[2] = this[2] * x + this[6] * y + this[10] * z;
    result[3] = 0;
    return checkVector(result, 4);
  }

  transformDirection3(vector, result = vector) {
    const x = vector[0];
    const y = vector[1];
    const z = vector[2];
    const w = vector[3];
    result[0] = this[0] * x + this[4] * y + this[8] * z + this[12] * w;
    result[1] = this[1] * x + this[5] * y + this[9] * z + this[13] * w;
    result[2] = this[2] * x + this[6] * y + this[10] * z + this[14] * w;
    result[3] = 0;
    return checkVector(result, 4);
  }

  transformPoint(vector, result) {
    return this._transformVector(vector, result, 1);
  }

  _transformVector(vector, result, w) {
    switch (vector.length) {
      case 2:
        result = result || new Vector2();
        // result = result || [0, 0];
        vec4.transformMat4(result, [vector[0], vector[1], 0, w], this);
        result.length = 2;
        return checkVector(result, 2);
      case 3:
        result = result || new Vector3();
        // result = result || [0, 0, 0];
        vec4.transformMat4(result, [vector[0], vector[1], vector[2], w], this);
        result.length = 3;
        return checkVector(result, 3);
      case 4:
        if (Boolean(w) !== Boolean(vector[3])) {
          throw new Error('math.gl: Matrix4.transformPoint - invalid vector');
        }
        result = result || new Vector4();
        // result = result || [0, 0, 0, 0];
        vec4.transformMat4(result, vector, this);
        return checkVector(result, 4);
      default:
        throw new Error('Illegal vector');
    }
  }

  // three.js math API compatibility
  makeRotationX(radians) {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x, y, z) {
    return this.identity().translate([x, y, z]);
  }

  makeRotationFromQuaternion(q) {
    return this.fromQuaternion(q);
  }

  // DEPRECATED

  /* eslint-disable max-params */
  // accepts row major order, stores as column major
  // prettier-ignore
  setRowMajor(
    m00 = 1,
    m01 = 0,
    m02 = 0,
    m03 = 0,
    m10 = 0,
    m11 = 1,
    m12 = 0,
    m13 = 0,
    m20 = 0,
    m21 = 0,
    m22 = 1,
    m23 = 0,
    m30 = 0,
    m31 = 0,
    m32 = 0,
    m33 = 1
  ) {
    // prettier-ignore
    return this.fromRowMajor(
      m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33
    );
  }

  // accepts column major order, stores in column major order
  // prettier-ignore
  setColumnMajor(
    m00 = 1,
    m10 = 0,
    m20 = 0,
    m30 = 0,
    m01 = 0,
    m11 = 1,
    m21 = 0,
    m31 = 0,
    m02 = 0,
    m12 = 0,
    m22 = 1,
    m32 = 0,
    m03 = 0,
    m13 = 0,
    m23 = 0,
    m33 = 1
  ) {
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
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */
  /* eslint-enable max-params */
}
