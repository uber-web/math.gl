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

import Matrix from '../lib/matrix';
import {checkVector, deprecated} from '../lib/validators';
import {vec4_transformMat3} from '../lib/gl-matrix-extras';

import * as mat3 from 'gl-matrix/mat3';
import * as vec2 from 'gl-matrix/vec2';
import * as vec3 from 'gl-matrix/vec3';

const IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1];

// eslint-disable-next-line complexity
export function validateMatrix3(m) {
  return (
    m.length === 9 &&
    Number.isFinite(m[0]) &&
    Number.isFinite(m[1]) &&
    Number.isFinite(m[2]) &&
    Number.isFinite(m[3]) &&
    Number.isFinite(m[4]) &&
    Number.isFinite(m[5]) &&
    Number.isFinite(m[6]) &&
    Number.isFinite(m[7]) &&
    Number.isFinite(m[8])
  );
}

export default class Matrix3 extends Matrix {
  get ELEMENTS() {
    return 9;
  }

  get RANK() {
    return 3;
  }

  constructor(...args) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0);
    if (Array.isArray(args[0]) && arguments.length === 1) {
      this.copy(args[0]);
    } else {
      this.identity();
    }
  }

  copy(array) {
    return this.setColumnMajor(...array);
  }

  set(...args) {
    return this.setColumnMajor(...args);
  }

  // accepts row major order, stores as column major
  // eslint-disable-next-line max-params
  setRowMajor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  // accepts column major order, stores in column major order
  // eslint-disable-next-line max-params
  setColumnMajor(m00 = 1, m10 = 0, m20 = 0, m01 = 0, m11 = 1, m21 = 0, m02 = 0, m12 = 0, m22 = 1) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  // Accessors

  determinant() {
    return mat3.determinant(this);
  }

  // Constructors

  identity() {
    for (let i = 0; i < IDENTITY.length; ++i) {
      this[i] = IDENTITY[i];
    }
    return this.check();
  }

  // Calculates a 3x3 matrix from the given quaternion
  // q quat  Quaternion to create matrix from
  fromQuaternion(q) {
    mat3.fromQuat(this, q);
    return this.check();
  }

  // Modifiers

  transpose() {
    mat3.transpose(this, this);
    return this.check();
  }

  invert() {
    mat3.invert(this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat3.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat3.multiply(this, this, a);
    return this.check();
  }

  rotate(radians) {
    mat3.rotate(this, this, radians);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      mat3.scale(this, this, factor);
    } else {
      mat3.scale(this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    mat3.translate(this, this, vec);
    return this.check();
  }

  // Transforms

  transform(vector, result) {
    switch (vector.length) {
      case 2:
        result = vec2.transformMat3(result || [-0, -0], vector, this);
        break;
      case 3:
        vec3.transformMat3(result || [-0, -0, -0], vector, this);
        break;
      case 4:
        vec4_transformMat3(result || [-0, -0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(result, vector.length);
    return result;
  }

  // DEPRECATED IN 3.0

  transformVector(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector2(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector3(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  // Deprecations in v3.0
}
