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

import Vector from './vector';
import {checkNumber} from './common';

// gl-matrix is too big. Cherry-pick individual imports from stack.gl version
/* eslint-disable camelcase */
import vec2_set from 'gl-vec2/set';
import vec2_add from 'gl-vec2/add';
import vec2_subtract from 'gl-vec2/subtract';
import vec2_multiply from 'gl-vec2/multiply';
import vec2_divide from 'gl-vec2/divide';
import vec2_scale from 'gl-vec2/scale';
import vec2_scaleAndAdd from 'gl-vec2/scaleAndAdd';
import vec2_negate from 'gl-vec2/negate';
import vec2_normalize from 'gl-vec2/normalize';
import vec2_dot from 'gl-vec2/dot';
import vec2_cross from 'gl-vec2/cross';
import vec2_lerp from 'gl-vec2/lerp';

export function validateVector2(v) {
  return v.length === 2 &&
    Number.isFinite(v[0]) && Number.isFinite(v[1]);
}

export default class Vector2 extends Vector {
  // Creates a new, empty vec2
  constructor(x = 0, y = 0) {
    super();
    if (Array.isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      this.set(x, y);
    }
  }

  set(x, y) {
    vec2_set(this, x, y);
    this.check();
    return this;
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS() { return 2; }
  get x()      { return this[0]; }
  set x(value) { return this[0] = checkNumber(value); }
  get y()      { return this[1]; }
  set y(value) { return this[1] = checkNumber(value); }
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */

  add(...vectors) {
    for (const vector of vectors) {
      vec2_add(this, this, vector);
    }
    return this;
  }

  subtract(...vectors) {
    for (const vector of vectors) {
      vec2_subtract(this, this, vector);
    }
    this.check();
    return this;
  }

  multiply(...vectors) {
    for (const vector of vectors) {
      vec2_multiply(this, this, vector);
    }
    this.check();
    return this;
  }

  divide(...vectors) {
    for (const vector of vectors) {
      vec2_divide(this, this, vector);
    }
    this.check();
    return this;
  }

  scale(scale) {
    if (Number.isFinite(scale)) {
      vec2_scale(this, this, scale);
    }
    this.check();
    return this;
  }

  scaleAndAdd(vector, scale) {
    vec2_scaleAndAdd(this, this, vector, scale);
    this.check();
    return this;
  }

  negate() {
    vec2_negate(this, this);
    this.check();
    return this;
  }

  normalize() {
    vec2_normalize(this, this);
    this.check();
    return this;
  }

  dot(vector) {
    return vec2_dot(this, vector);
  }

  cross(vector) {
    vec2_cross(this, this, vector);
    this.check();
    return this;
  }

  lerp(vector, coeff) {
    vec2_lerp(this, this, vector, coeff);
    this.check();
    return this;
  }

  horizontalAngle() {
    return Math.atan2(this.y, this.x);
  }

  verticalAngle() {
    return Math.atan2(this.x, this.y);
  }

  operation(operation, ...args) {
    operation(this, this, ...args);
    this.check();
    return this;
  }
}
