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

/* eslint-disable max-statements */
import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';

import {Vector4} from 'math.gl';

test('Vector4#import', t => {
  t.equals(typeof Vector4, 'function');
  t.end();
});

test('Vector4#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Vector4()));
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector4#members and methods', t => {
  const v = new Vector4();
  t.equals(v.x, 0);
  t.equals(v.y, 0);
  t.equals(v.z, 0);
  t.equals(v.w, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector4#toString', t => {
  const TEST_CASES = [{input: [0, 0, 0, 1], precision: 5, string: '[0, 0, 0, 1]'}];
  for (const tc of TEST_CASES) {
    const v = new Vector4(...tc.input);
    t.equals(String(v), tc.string);
    t.equals(`${v}`, tc.string);
  }
  t.end();
});

test.skip('Vector4#scale', t => {
  const TEST_CASES = [
    {input: [1, 2, 3, 4], scale: 5, result: [5, 10, 15]},
    {input: [1, 2, 3, 4], scale: [2, 0, -1], result: [2, 0, -3]}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector4(...tc.input).scale(tc.scale);
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector4#distance', t => {
  const TEST_CASES = [{start: [0, 0, 0, 0], end: [3, 4, 0, 0], result: 5}];
  for (const tc of TEST_CASES) {
    const result = new Vector4(...tc.start).distance(tc.end);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector4#len', t => {
  const TEST_CASES = [{input: [0, 0, 0], result: 0}, {input: [3, 4, 0], result: 5}];
  for (const tc of TEST_CASES) {
    const result = new Vector4(...tc.input).len();
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector4#dot', t => {
  const TEST_CASES = [{input1: [1, 3, -5, 0], input2: [4, -2, -1, 0], result: 3}];
  for (const tc of TEST_CASES) {
    const result = new Vector4(...tc.input1).dot(tc.input2);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector4#normalize', t => {
  const TEST_CASES = [
    {input: [0, 0, 0, 0], result: [0, 0, 0, 0]},
    {input: [1, 0, 0, 0], result: [1, 0, 0, 0]},
    {input: [3, 4, 0, 0], result: [0.6, 0.8, 0, 0]},
    {input: [1, 1, 1, 0], result: [1 / Math.sqrt(3), 1 / Math.sqrt(3), 1 / Math.sqrt(3), 0]}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector4(...tc.input);
    const result = v.normalize();
    tapeEquals(t, result, tc.result);
  }
  t.end();
});
