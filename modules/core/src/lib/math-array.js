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

import {config, formatValue, equals} from './common';
import {checkVector} from './validators';

export default class MathArray extends Array {
  clone() {
    return new this.constructor().copy(this);
  }

  copy(array) {
    if (config.debug) {
      checkVector(array, this.ELEMENTS, this.constructor.name);
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i];
    }
    return this;
  }

  set(...args) {
    if (config.debug) {
      checkVector(args, this.ELEMENTS, this.constructor.name);
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = args[i];
    }
    return this;
  }

  from(arrayOrObject) {
    return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
  }

  fromArray(array, offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i + offset];
    }
    return this.check();
  }

  to(arrayOrObject) {
    return Array.isArray(arrayOrObject)
      ? this.toArray(arrayOrObject)
      : this.toObject(arrayOrObject);
  }

  toArray(array = [], offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      array[offset + i] = this[i];
    }
    return array;
  }

  toFloat32Array() {
    return new Float32Array(this);
  }

  toString() {
    return this.formatString(config);
  }

  formatString(opts) {
    let string = '';
    for (let i = 0; i < this.ELEMENTS; ++i) {
      string += (i > 0 ? ', ' : '') + formatValue(this[i], opts);
    }
    return `${opts.printTypes ? this.constructor.name : ''}[${string}]`;
  }

  equals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (!equals(this[i], array[i])) {
        return false;
      }
    }
    return true;
  }

  exactEquals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (this[i] !== array[i]) {
        return false;
      }
    }
    return true;
  }

  // Modifiers

  negate() {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = -this[i];
    }
    return this.check();
  }

  inverse() {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = 1 / this[i];
    }
    return this.check();
  }

  lerp(a, b, t) {
    if (t === undefined) {
      t = b;
      b = a;
      a = this; // eslint-disable-line
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      const ai = a[i];
      this[i] = ai + t * (b[i] - ai);
    }
    return this.check();
  }

  min(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(vector[i], this[i]);
    }
    return this.check();
  }

  max(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.max(vector[i], this[i]);
    }
    return this.check();
  }

  clamp(minVector, maxVector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
    }
    return this.check();
  }

  // three.js compatibility

  sub(a) {
    return this.subtract(a);
  }

  setScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = a;
    }
    return this.check();
  }

  addScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] += a;
    }
    return this.check();
  }

  subScalar(a) {
    return this.addScalar(-a);
  }

  multiplyScalar(a) {
    return this.scale(a);
  }

  divideScalar(a) {
    return this.scale(1 / a);
  }

  clampScalar(min, max) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], min), max);
    }
    return this.check();
  }

  // Debug checks

  check() {
    if (config.debug && !this.validate(this)) {
      throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);
    }
    return this;
  }

  validate() {
    let valid = this.length === this.ELEMENTS;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      valid = valid && Number.isFinite(this[i]);
    }
    return valid;
  }
}
