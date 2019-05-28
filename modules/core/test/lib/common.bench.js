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

import {Vector3, toRadians} from 'math.gl';
import {isArray} from 'math.gl';

const classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const float32Array = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const float64Array = new Float64Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const mathglArray = new Vector3();

export default function commonBench(suite, addReferenceBenchmarks) {
  suite
    .group('array test cost')
    .add('Array#isArray(Vector3)', () => Array.isArray(mathglArray))
    .add('Array#isArray(array)', () => Array.isArray(classicArray))
    .add('Array#isArray(Float32Array)', () => Array.isArray(float32Array))
    .add('Array#isArray(Float64Array)', () => Array.isArray(float64Array));

  if (addReferenceBenchmarks) {
    suite
      .add('math.gl#isArray(Vector3)', () => isArray(mathglArray))
      .add('math.gl#isArray(array)', () => isArray(classicArray))
      .add('math.gl#isArray(Float32Array)', () => isArray(float32Array))
      .add('math.gl#isArray(Float64Array)', () => isArray(float64Array));
  }

  suite
    .group('toRadians/toDegrees')
    .add('toRadians(Number)', () => toRadians(100))
    .add('toRadians(Vector3)', () => toRadians(mathglArray))
    .add('toRadians(array)', () => toRadians(classicArray))
    .add('toRadians(Float32Array)', () => toRadians(float32Array))
    .add('toRadians(Float64Array)', () => toRadians(float64Array));
}
