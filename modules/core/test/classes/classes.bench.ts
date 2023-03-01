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

import {configure, Vector2, Vector3, Vector4, Matrix3, Matrix4} from '@math.gl/core';

configure({debug: false});

const mathglArray = new Matrix4();
const mathglVector4 = new Vector4();

export function classesBench(suite, addReferenceBenchmarks) {
  suite
    // add tests
    .group('@math.gl/core: Object Construction Summary')
    .add('new Vector2', () => new Vector2())
    .add('new Vector3', () => new Vector3())
    .add('new Vector4', () => new Vector4())
    .add('new Matrix3', () => new Matrix3())
    .add('new Matrix4', () => new Matrix4());

  if (addReferenceBenchmarks) {
    suite
      .group('Vector2 construction')
      .add('Array(2)', () => new Array(2))
      .add('[0, 0]', () => [0, 0])

      .group('Vector3 construction')
      .add('Array(0.1, 0.2, 0.3)', () => new Array(3))
      .add('Array(3)', () => new Array(3))
      .add('[0.1, 0.2, 0.3]', () => [0.1, 0.2, 0.3])

      .group('Vector4 construction')
      .add('Array(4)', () => new Array(4))
      .add('[0, 0, 0, 1]', () => [0, 0, 0, 1])

      .group('Matrix3 construction')
      .add('Array(9)', () => new Array(9))
      .add('[1, 0, 0, ...]', () => [1, 0, 0, 0, 1, 0, 0, 0, 1]);

    // .group('Matrix4 construction')
    // .add('Array(16)', () => new Array(16))
    // .add('[1, 0, 0, 0, ...]', () => [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    suite
      .group('debug validation cost')
      .add(
        'Vector4#validate (debug)',
        () => configure({debug: true}),
        () => mathglVector4.check()
      )
      .add(
        'Vector4#validate (prod)',
        () => configure({debug: false}),
        () => mathglVector4.check()
      )
      .add(
        'Matrix4#validate (debug)',
        () => configure({debug: true}),
        () => mathglArray.check()
      )
      .add(
        'Matrix4#validate (prod)',
        () => configure({debug: false}),
        () => mathglArray.check()
      );
  }

  return suite;
}
