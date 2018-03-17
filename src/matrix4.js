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

import MathArray from './lib/math-array';
import {checkNumber} from './lib/common';
import Vector2 from './vector2';
import Vector3 from './vector3';
import Vector4 from './vector4';
// import Vector2, {validateVector2} from './vector2';
// import Vector3, {validateVector3} from './vector3';
// import Vector4, {validateVector4} from './vector4';

// gl-matrix is too big. Cherry-pick individual imports from stack.gl version
/* eslint-disable camelcase */
import mat4_determinant from 'gl-mat4/determinant';
import mat4_fromQuat from 'gl-mat4/fromQuat';
import mat4_frustum from 'gl-mat4/frustum';
import mat4_lookAt from 'gl-mat4/lookAt';
import mat4_ortho from 'gl-mat4/ortho';
import mat4_perspective from 'gl-mat4/perspective';
import mat4_transpose from 'gl-mat4/transpose';
import mat4_invert from 'gl-mat4/invert';
import mat4_multiply from 'gl-mat4/multiply';
import mat4_rotate from 'gl-mat4/rotate';
import mat4_scale from 'gl-mat4/scale';
import mat4_translate from 'gl-mat4/translate';
import vec2_transformMat4 from 'gl-vec2/transformMat4';
import vec3_transformMat4 from 'gl-vec3/transformMat4';
import vec4_transformMat4 from 'gl-vec4/transformMat4';

// import mat4_rotateX from 'gl-mat4/rotateX';
// import mat4_rotateY from 'gl-mat4/rotateY';
// import mat4_rotateZ from 'gl-mat4/rotateZ';

const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

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

const tempVector4 = [0, 0, 0, 0];

export default class Matrix4 extends MathArray {
  constructor(...args) {
    super();
    if (Array.isArray(args[0]) && arguments.length === 1) {
      this.copy(args[0]);
    } else {
      this.identity();
    }
  }

  get ELEMENTS() {
    return 16;
  }

  /* eslint-disable max-params */
  // accepts row major order, stores as column major
  setRowMajor(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
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

  // accepts row major order and stores in row major order
  setColumnMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    this[0] = m00;
    this[1] = m01;
    this[2] = m02;
    this[3] = m03;
    this[4] = m10;
    this[5] = m11;
    this[6] = m12;
    this[7] = m13;
    this[8] = m20;
    this[9] = m21;
    this[10] = m22;
    this[11] = m23;
    this[12] = m30;
    this[13] = m31;
    this[14] = m32;
    this[15] = m33;
    return this.check();
  }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  // Assumes row major format
  set(...args) {
    return this.setRowMajor(...args);
  }

  // By default assumes row major indices
  getElement(i, j, columnMajor = false) {
    return columnMajor ? this[i][j] : this[j][i];
  }

  // By default assumes row major indices
  setElement(i, j, value, columnMajor = false) {
    if (columnMajor) {
      this[j][i] = checkNumber(value);
    } else {
      this[j][i] = checkNumber(value);
    }
    return this;
  }

  /* eslint-enable max-params */

  // toString() {
  //   if (config.printRowMajor) {
  //     mat4_str(this);
  //   } else {
  //     mat4_str(this);
  //   }
  // }

  // Accessors

  determinant() {
    return mat4_determinant(this);
  }

  // Constructors

  identity() {
    return this.copy(IDENTITY);
  }

  // Calculates a 4x4 matrix from the given quaternion
  // q quat  Quaternion to create matrix from
  fromQuaternion(q) {
    mat4_fromQuat(this, q);
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
    mat4_frustum(this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates a look-at matrix with the given eye position, focal point,
  // and up axis
  // eye vec3  Position of the viewer
  // center  vec3  Point the viewer is looking at
  // up  vec3  vec3 pointing up
  lookAt({eye, center = [0, 0, 0], up = [0, 1, 0]}) {
    mat4_lookAt(this, eye, center, up);
    return this.check();
  }

  // Generates a orthogonal projection matrix with the given bounds
  // left  number  Left bound of the frustum
  // right number  Right bound of the frustum
  // bottom  number  Bottom bound of the frustum
  // top number  Top bound of the frustum
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  ortho({left, right, bottom, top, near = 0.1, far = 500}) {
    mat4_ortho(this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates a perspective projection matrix with the given bounds
  // fovy  number  Vertical field of view in radians
  // aspect  number  Aspect ratio. typically viewport width/height
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  perspective({fov = 45 * Math.PI / 180, aspect = 1, near = 0.1, far = 500} = {}) {
    if (fov > Math.PI * 2) {
      throw Error('radians');
    }
    mat4_perspective(this, fov, aspect, near, far);
    return this.check();
  }

  // Modifiers

  transpose() {
    mat4_transpose(this, this);
    return this.check();
  }

  invert() {
    mat4_invert(this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat4_multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat4_multiply(this, this, a);
    return this.check();
  }

  // Rotates a matrix by the given angle around the X axis
  rotateX(radians) {
    // mat4_rotateX(this, this, radians);
    mat4_rotate(this, this, radians, [1, 0, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Y axis.
  rotateY(radians) {
    // mat4_rotateY(this, this, radians);
    mat4_rotate(this, this, radians, [0, 1, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Z axis.
  rotateZ(radians) {
    // mat4_rotateZ(this, this, radians);
    mat4_rotate(this, this, radians, [0, 0, 1]);
    return this.check();
  }

  rotateXYZ([rx, ry, rz]) {
    return this.rotateX(rx)
      .rotateY(ry)
      .rotateZ(rz);
  }

  rotateAxis(radians, axis) {
    mat4_rotate(this, this, radians, axis);
    return this.check();
  }

  scale(vec) {
    mat4_scale(this, this, vec);
    return this.check();
  }

  translate(vec) {
    mat4_translate(this, this, vec);
    return this.check();
  }

  transformVector2(vector, out) {
    out = out || new Vector2();
    vec2_transformMat4(out, vector, this);
    // assert(validateVector2(out));
    return out;
  }

  transformVector3(vector, out = new Vector3()) {
    out = out || new Vector3();
    vec3_transformMat4(out, vector, this);
    // assert(validateVector3(out));
    return out;
  }

  transformVector4(vector, out = new Vector4()) {
    out = out || new Vector4();
    vec4_transformMat4(out, vector, this);
    // assert(validateVector4(out));
    return out.check();
  }

  // Transforms any 2, 3 or 4 element vector
  // returns a newly minted Vector2, Vector3 or Vector4
  transformVector(vector, out) {
    switch (vector.length) {
    case 2: return this.transformVector2(vector, out);
    case 3: return this.transformVector3(vector, out);
    case 4: return this.transformVector4(vector, out);
    default: throw new Error('Illegal vector');
    }
  }

  transformDirection(vector, out) {
    switch (vector.length) {
    case 2:
      vec4_transformMat4(tempVector4, [vector[0], vector[1], 0, 0], this);
      out = out || new Vector2();
      [out[0], out[1]] = tempVector4;
      break;
    case 3:
      vec4_transformMat4(tempVector4, [vector[0], vector[1], vector[2], 0], this);
      out = out || new Vector3();
      [out[0], out[1], out[2]] = tempVector4;
      break;
    case 4:
      // assert(vector[3] === 0);
      out = out || new Vector4();
      vec4_transformMat4(out, vector, this);
      break;
    default: throw new Error('Illegal vector');
    }
    return out;
  }

  transformPoint(vector, out) {
    switch (vector.length) {
    case 2:
      out = out || new Vector2();
      vec4_transformMat4(out, [vector[0], vector[1], 0, 1], this);
      out.length = 2;
      // assert(validateVector2(out));
      break;
    case 3:
      out = out || new Vector3();
      vec4_transformMat4(out, [vector[0], vector[1], vector[2], 1], this);
      out.length = 3;
      // assert(validateVector3(out));
      break;
    case 4:
      // assert(vector[3] !== 0);
      out = out || new Vector4();
      vec4_transformMat4(out, vector, this);
      // assert(validateVector4(out));
      break;
    default:
      throw new Error('Illegal vector');
    }
    return out;
  }

  // three.js compatibility
  makeRotationX(radians) {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x, y, z) {
    return this.identity().translate([x, y, z]);
  }
}
