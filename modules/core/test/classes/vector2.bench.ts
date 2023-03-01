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

import {Vector2} from '@math.gl/core';

const array = [0, 0];
const float32Array = new Float32Array([0, 0]);
const vector2 = new Vector2();

export function vector2Bench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Vector2')
    .add('Vector2#new()', () => new Vector2(1, 2))
    .add('Vector2#set()', () => vector2.set(1, 2))
    .add('Vector2#copy()', () => vector2.copy([1, 2]));
  // .add('Vector2#from(Vector2)', () => vector2.from(arrayVector))
  // .add('Vector2#to(Vector2)', () => vector2.to(arrayVector))

  if (addReferenceBenchmarks) {
    suite
      .group('Vector2 Type Conversion Cost')
      .add('Vector2.from#Array', () => vector2.from(array))
      .add('Vector2.from#Float32Array', () => vector2.from(float32Array))
      .add('Vector2.to#Array', () => vector2.to(array))
      .add('Vector2.to#Float32Array', () => vector2.to(float32Array));
  }

  return suite;
}
