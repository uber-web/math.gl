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

import {Vector4} from '@math.gl/core';

const array = [0, 0, 0, 0];
const float32Array = new Float32Array([0, 0, 0, 0]);
const vector4 = new Vector4();

export default function vector4Bench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Vector4')
    .add('Vector4#new()', () => new Vector4(1, 2, 3, 4))
    .add('Vector4#set()', () => vector4.set(1, 2, 3, 4))
    .add('Vector4#copy()', () => vector4.copy([1, 2, 3, 4]));
  // .add('Vector4#from(Vector4)', () => vector4.from(arrayVector))
  // .add('Vector4#to(Vector4)', () => vector4.to(arrayVector))

  if (addReferenceBenchmarks) {
    suite
      .group('Vector4 Type Conversion Cost')
      .add('Vector4.from#Array', () => vector4.from(array))
      .add('Vector4.from#Float32Array', () => vector4.from(float32Array))
      .add('Vector4.to#Array', () => vector4.to(array))
      .add('Vector4.to#Float32Array', () => vector4.to(float32Array));
  }

  return suite;
}
