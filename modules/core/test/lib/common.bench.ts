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

import {Vector3, toRadians, radians} from '@math.gl/core';
import {isArray} from '@math.gl/core';

const classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const float32Array = new Float32Array([1, 0, 0]);
const float64Array = new Float64Array([1, 0, 0]);
const vector3 = new Vector3();

export function commonBench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Global Functions')
    .add('isArray(Vector3)', () => isArray(vector3))
    .add('isArray(Float32Array)', () => isArray(float32Array));

  if (addReferenceBenchmarks) {
    suite
      .add('isArray(array)', () => isArray(classicArray))
      .add('isArray(Float64Array)', () => isArray(float64Array));
  }

  suite
    .add('toRadians(Number)', () => toRadians(100))
    .add('radians(Vector3)', () => radians(vector3, vector3));

  if (addReferenceBenchmarks) {
    suite
      .add('toRadians(array)', () => toRadians(classicArray))
      .add('toRadians(Float32Array)', () => toRadians(float32Array))
      .add('toRadians(Float64Array)', () => toRadians(float64Array));
  }
}
