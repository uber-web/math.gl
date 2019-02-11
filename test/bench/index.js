// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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

/* eslint-disable no-console, no-invalid-this */
import {Bench} from 'probe.gl/bench';

import {configure, Vector2, Vector3, Vector4, Matrix3, Matrix4} from 'math.gl';
// import * as vec3 from 'gl-matrix/vec3';
import * as mat4 from 'gl-matrix/mat4';

configure({debug: false});

const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

class ClassNoConstructor {}
class ClassWithConstructor {
  constructor() {
    this.data = null;
  }
}
class ArrayExtenderNoConstructor extends Array {}
class ArrayExtenderEmptyConstructor extends Array {
  constructor() {
    super();
  }
}
class ArrayExtender extends Array {
  constructor() {
    super(16);
    for (let i = 0; i < 16; i++) {
      this[i] = IDENTITY[i];
    }
  }
}

const classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const float32Array = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const float64Array = new Float64Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const mathglArray = new Matrix4();

const suite = new Bench()

  .group('debug validation cost')
  .add('Matrix4#validate', () => {
    mathglArray.validate();
  })

  .group('4x4 multiplication')
  .add('Matrix4#multiplyRight(Matrix4)', () => {
    mathglArray.multiplyRight(mathglArray);
  })
  .add('gl-matrix#multiply(Matrix4)', () => {
    mat4.multiply(mathglArray, mathglArray, mathglArray);
  })
  .add('gl-matrix#multiply(array)', () => {
    mat4.multiply(classicArray, classicArray, classicArray);
  })
  .add('gl-matrix#multiply(float32Array)', () => {
    mat4.multiply(float32Array, float32Array, float32Array);
  })
  .add('gl-matrix#multiply(float64Array)', () => {
    mat4.multiply(float64Array, float64Array, float64Array);
  })

  // add tests
  .group('Vector2 construction')
  .add('new Vector2', () => {
    return new Vector2();
  })
  .add('Array(2)', () => {
    return Array(2);
  })
  .add('[0, 0]', () => {
    return [0, 0];
  })

  .group('Vector3 construction')
  .add('new Vector3', () => {
    return new Vector3();
  })
  .add('Array(3)', () => {
    return Array(3);
  })
  .add('[0, 0, 0]', () => {
    return [0, 0, 0];
  })

  .group('Vector4 construction')
  .add('new Vector4', () => {
    return new Vector4();
  })
  .add('Array(4)', () => {
    return Array(4);
  })
  .add('[0, 0, 0, 1]', () => {
    return [0, 0, 0, 1];
  })

  .group('Matrix3 construction')
  .add('new Matrix3', () => {
    return new Matrix3();
  })
  .add('Array(9)', () => {
    return Array(9);
  })
  .add('[1, 0, 0, ...]', () => {
    return [1, 0, 0, 0, 1, 0, 0, 0, 1];
  })

  .group('Matrix4 construction')
  .add('new Matrix4', () => {
    return new Matrix4();
  })
  .add('Array(16)', () => {
    return Array(16);
  })
  .add('[1, 0, 0, 0, ...]', () => {
    return [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  })
  .add('new Float32Array(16)', () => {
    return new Float32Array(16);
  })
  .add('new Float32Array(IDENTITY)', () => {
    return new Float32Array(IDENTITY);
  })
  .add('new Float64Array(16)', () => {
    return new Float64Array(16);
  })
  .add('new Float64Array(IDENTITY)', () => {
    return new Float64Array(IDENTITY);
  })

  .group('Class/Array inheritance construction cost')
  .add('new ArrayExtender', () => {
    return new ArrayExtender();
  })
  .add('new ArrayExtenderEmptyConstructor', () => {
    return new ArrayExtenderEmptyConstructor();
  })
  .add('new ArrayExtenderNoConstructor', () => {
    return new ArrayExtenderNoConstructor();
  })
  .add('new ClassWithConstructor', () => {
    return new ClassWithConstructor();
  })
  .add('new ClassNoConstructor', () => {
    return new ClassNoConstructor();
  })

  // Calibrate performance
  .calibrate();

// Run tests
suite.run();
