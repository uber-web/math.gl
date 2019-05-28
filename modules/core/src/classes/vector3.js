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
import {checkNumber, checkVector} from '../lib/validators';

import * as vec3 from 'gl-matrix/vec3';

const ORIGIN = [0, 0, 0];

export default class Vector3 extends Vector {
  // Creates a new vec3, either empty, or from an array or from values
  constructor(x = 0, y = 0, z = 0) {
    super(-0, -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
      }
      // PERF NOTE: bitwise or operator ensures JIT-compiler knows we assign only numbers
      this[0] = x;
      this[1] = y;
      this[2] = z;
    }
  }

  from(arrayOrObject) {
    if (isArray(arrayOrObject)) {
      if (config.debug) {
        checkVector(arrayOrObject, 3);
      }
      this[0] = arrayOrObject[0];
      this[1] = arrayOrObject[1];
      this[2] = arrayOrObject[2];
    } else {
      if (config.debug) {
        checkNumber(arrayOrObject.x);
        checkNumber(arrayOrObject.y);
        checkNumber(arrayOrObject.z);
      }
      this[0] = arrayOrObject.x;
      this[1] = arrayOrObject.y;
      this[2] = arrayOrObject.z;
    }
    return this;
  }

  to(arrayOrObject) {
    if (isArray(arrayOrObject)) {
      arrayOrObject[0] = this[0];
      arrayOrObject[1] = this[1];
      arrayOrObject[2] = this[2];
    } else {
      arrayOrObject.x = this[0];
      arrayOrObject.y = this[1];
      arrayOrObject.z = this[2];
    }
    return arrayOrObject;
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS() {
    return 3;
  }

  // x,y inherited from Vector

  get z() {
    return this[2];
  }
  set z(value) {
    return (this[2] = checkNumber(value));
  }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  angle(vector) {
    return vec3.angle(this, vector);
  }

  // MODIFIERS

  cross(vector) {
    vec3.cross(this, this, vector);
    return this.check();
  }

  rotateX({radians, origin = ORIGIN}) {
    vec3.rotateX(this, this, origin, radians);
    return this.check();
  }

  rotateY({radians, origin = ORIGIN}) {
    vec3.rotateY(this, this, origin, radians);
    return this.check();
  }

  rotateZ({radians, origin = ORIGIN}) {
    vec3.rotateZ(this, this, origin, radians);
    return this.check();
  }

  operation(operation, ...args) {
    operation(this, this, ...args);
    return this.check();
  }
}
