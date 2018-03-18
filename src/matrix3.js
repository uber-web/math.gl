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
// import {checkNumber} from './lib/common';
import Vector2 from './vector2';
import Vector3 from './vector3';
// import Vector2, {validateVector2} from './vector2';
// import Vector3, {validateVector3} from './vector3';
// import assert from 'assert';

// gl-matrix is too big. Cherry-pick individual imports from stack.gl version
/* eslint-disable camelcase */
import mat3_determinant from 'gl-mat3/determinant';
import mat3_transpose from 'gl-mat3/transpose';
import mat3_invert from 'gl-mat3/invert';
import mat3_multiply from 'gl-mat3/multiply';
// import mat3_rotateX from 'gl-mat3/rotateX';
// import mat3_rotateY from 'gl-mat3/rotateY';
// import mat3_rotateZ from 'gl-mat3/rotateZ';
import mat3_rotate from 'gl-mat3/rotate';
import mat3_scale from 'gl-mat3/scale';
import mat3_translate from 'gl-mat3/translate';
import vec2_transformMat4 from 'gl-vec2/transformMat4';
import vec3_transformMat4 from 'gl-vec3/transformMat4';
import vec4_transformMat4 from 'gl-vec4/transformMat4';

const IDENTITY = [1, 0, 0, 0, 1, 0, 0, 0, 1];

export function validateMatrix3(m) {
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

export default class Matrix3 extends MathArray {
  constructor(...args) {
    super();
    if (Array.isArray(args[0]) && arguments.length === 1) {
      this.copy(args[0]);
    } else {
      this.identity();
    }
  }

  get ELEMENTS() {
    return 9;
  }

  /* eslint-disable max-params */
  setRowMajor(m00 = 1, m10 = 0, m20 = 0, m01 = 0, m11 = 1, m21 = 0, m02 = 0, m12 = 0, m22 = 1) {
    return this.set(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  setColumnMajor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    return this.set(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  set(m00, m01, m02, m10, m11, m12, m20, m21, m22, m30, m31, m32) {
    this[0] = m00;
    this[1] = m01;
    this[2] = m02;
    this[4] = m10;
    this[5] = m11;
    this[6] = m12;
    this[8] = m20;
    this[9] = m21;
    this[10] = m22;
    this[12] = m30;
    this[13] = m31;
    this[14] = m32;
    return this.check();
  }
  /* eslint-enable max-params */

  // toString() {
  //   if (config.printRowMajor) {
  //     mat3_str(this);
  //   } else {
  //     mat3_str(this);
  //   }
  // }

  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  // Accessors

  determinant() {
    return mat3_determinant(this);
  }

  // Constructors

  identity() {
    for (let i = 0; i < IDENTITY.length; ++i) {
      this[i] = IDENTITY[i];
    }
    return this.check();
  }

  // Modifiers

  transpose() {
    mat3_transpose(this, this);
    return this.check();
  }

  invert() {
    mat3_invert(this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat3_multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat3_multiply(this, this, a);
    return this.check();
  }

  // Rotates a matrix by the given angle around the X axis
  // rotateX(radians) {
  //   mat3_rotateX(this, this, radians);
  //   this.check();
  //   return this;
  // }

  // Rotates a matrix by the given angle around the Y axis.
  // rotateY(radians) {
  //   mat3_rotateY(this, this, radians);
  //   this.check();
  //   return this;
  // }

  // Rotates a matrix by the given angle around the Z axis.
  // rotateZ(radians) {
  //   mat3_rotateZ(this, this, radians);
  //   this.check();
  //   return this;
  // }

  // rotateXYZ([rx, ry, rz]) {
  //   return this.rotateX(rx)
  //     .rotateY(ry)
  //     .rotateZ(rz);
  // }

  rotateAxis(radians, axis) {
    mat3_rotate(this, this, radians, axis);
    return this.check();
  }

  scale(vec) {
    mat3_scale(this, this, vec);
    return this.check();
  }

  translate(vec) {
    mat3_translate(this, this, vec);
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

  // transformVector4(vector, out = new Vector4()) {
  //   out = out || new Vector4();
  //   vec4_transformMat4(out, vector, this);
  //   assert(validateVector4(out));
  //   return out;
  // }

  // Transforms any 2, 3 or 4 element vector
  // returns a newly minted Vector2, Vector3 or Vector4
  transformVector(vector, out) {
    switch (vector.length) {
      case 2:
        return this.transformVector2(vector, out);
      case 3:
        return this.transformVector3(vector, out);
      // case 4:
      //   return this.transformVector4(vector, out);
      default:
        throw new Error('Illegal vector');
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
      // case 4:
      //   assert(vector[3] === 0);
      //   out = out || new Vector4();
      //   vec4_transformMat4(out, vector, this);
      //   break;
      default:
        throw new Error('Illegal vector');
    }
    return out;
  }

  // transformPoint(vector, out) {
  //   switch (vector.length) {
  //     case 2:
  //       out = out || new Vector2();
  //       vec4_transformMat4(out, [vector[0], vector[1], 0, 1], this);
  //       out.length = 2;
  //       assert(validateVector2(out));
  //       break;
  //     case 3:
  //       out = out || new Vector3();
  //       vec4_transformMat4(out, [vector[0], vector[1], vector[2], 1], this);
  //       out.length = 3;
  //       assert(validateVector3(out));
  //       break;
  //     case 4:
  //       assert(vector[3] !== 0);
  //       out = out || new Vector4();
  //       vec4_transformMat4(out, vector, this);
  //       assert(validateVector4(out));
  //       break;
  //     default:
  //       throw new Error('Illegal vector');
  //   }
  //   return out;
  // }
}
