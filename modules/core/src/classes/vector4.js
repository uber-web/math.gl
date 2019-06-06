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

import Vector from '../lib/vector';
import {config, isArray} from '../lib/common';
import {checkNumber} from '../lib/validators';

import * as vec4 from 'gl-matrix/vec3';
import {vec4_transformMat2, vec4_transformMat3} from '../lib/gl-matrix-extras';

export default class Vector4 extends Vector {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      // this.set(x, y, z, w);
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
        checkNumber(w);
      }
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = w;
    }
  }

  fromObject(object) {
    if (config.debug) {
      checkNumber(object.x);
      checkNumber(object.y);
      checkNumber(object.z);
      checkNumber(object.w);
    }
    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this;
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    object.w = this[3];
    return object;
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS() {
    return 4;
  }

  // x,y inherited from Vector

  get z() {
    return this[2];
  }

  set z(value) {
    return (this[2] = checkNumber(value));
  }

  get w() {
    return this[3];
  }

  set w(value) {
    return (this[3] = checkNumber(value));
  }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  transform(matrix4) {
    vec4.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    vec4_transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    vec4_transformMat2(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    vec4.transformQuat(this, this, quaternion);
    return this.check();
  }

  // three.js compatibility
  applyMatrix4(m) {
    m.transform(this, this);
    return this;
  }
}
