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

import {configure, Vector4, Matrix4, Matrix3, Quaternion} from 'math.gl';

test('Vector4#import', t => {
  t.equals(typeof Vector4, 'function');
  t.end();
});

test('Vector4#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Vector4()));
  t.end();
});

test('Vector4#debug validators', t => {
  const {debug} = configure();
  configure({debug: true});
  t.throws(() => new Vector4(NaN, 0, 0, 1));
  t.throws(() => new Vector4().copy([NaN, 0, 0, 1]));
  configure({debug: false});
  t.doesNotThrow(() => new Vector4(NaN, 0, 0, 1));
  t.doesNotThrow(() => new Vector4().copy([NaN, 0, 0, 1]));
  configure({debug});
  t.end();
});

test('Vector4#from', t => {
  tapeEquals(t, new Vector4().from([1, 2, 3, 4]), [1, 2, 3, 4]);
  tapeEquals(t, new Vector4().from({x: 1, y: 2, z: 3, w: 4}), [1, 2, 3, 4]);
  t.end();
});

test('Vector4#to', t => {
  const vector4 = new Vector4(1, 2, 3, 4);
  tapeEquals(t, vector4.to([0, 0, 0, 0]), [1, 2, 3, 4]);
  t.deepEquals(vector4.to({x: 0, y: 0, z: 0, w: 0}), {x: 1, y: 2, z: 3, w: 4});
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
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    t.equals(String(v), testCase.string);
    t.equals(`${v}`, testCase.string);
  }
  t.end();
});

test.skip('Vector4#scale', t => {
  const TEST_CASES = [
    {input: [1, 2, 3, 4], scale: 5, result: [5, 10, 15]},
    {input: [1, 2, 3, 4], scale: [2, 0, -1], result: [2, 0, -3]}
  ];
  for (const testCase of TEST_CASES) {
    const result = new Vector4(...testCase.input).scale(testCase.scale);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector4#distance', t => {
  const TEST_CASES = [{start: [0, 0, 0, 0], end: [3, 4, 0, 0], result: 5}];
  for (const testCase of TEST_CASES) {
    const result = new Vector4(...testCase.start).distance(testCase.end);
    t.equals(result, testCase.result);
  }
  t.end();
});

test('Vector4#len', t => {
  const TEST_CASES = [{input: [0, 0, 0], result: 0}, {input: [3, 4, 0], result: 5}];
  for (const testCase of TEST_CASES) {
    const result = new Vector4(...testCase.input).len();
    t.equals(result, testCase.result);
  }
  t.end();
});

test('Vector4#dot', t => {
  const TEST_CASES = [{input1: [1, 3, -5, 0], input2: [4, -2, -1, 0], result: 3}];
  for (const testCase of TEST_CASES) {
    const result = new Vector4(...testCase.input1).dot(testCase.input2);
    t.equals(result, testCase.result);
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
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    const result = v.normalize();
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector4#transform', t => {
  const transform = new Matrix4().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0, 0, 0], result: [ 0.5, 0.5, 0.5, 0 ]},
    {input: [1, 0, 0, 0], result: [ 1, 0.5, 0.5, 0 ]},
    {input: [3, 4, 0, 0], result: [2, 2.5, 0.5, 0]},
    {input: [1, 1, 1, 0], result: [1, 1, 1, 0]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    const result = v.transform(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector4#transformByMatrix3', t => {
  const transform = new Matrix3().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0, 0, 0], result: [0, 0, 0, 0]},
    {input: [1, 0, 0, 0], result: [0.5, 0, 0, 0]},
    {input: [3, 4, 0, 0], result: [1.5, 2, 0, 0]},
    {input: [1, 1, 1, 0], result: [1, 1, 1, 0]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    const result = v.transformByMatrix3(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector4#transformByMatrix2', t => {
  const transform = [0.5, 0, 0, 0.5];

  const TEST_CASES = [
    {input: [0, 0, 0, 0], result: [0, 0, 0, 0]},
    {input: [1, 0, 0, 0], result: [0.5, 0, 0, 0]},
    {input: [3, 4, 0, 0], result: [1.5, 2, 0, 0]},
    {input: [1, 1, 1, 0], result: [0.5, 0.5, 1, 0 ]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    const result = v.transformByMatrix2(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector4#transformByQuaternion', t => {
  const transform = new Quaternion(0.5, 0.5, 0.5, 0.5);

  const TEST_CASES = [
    {input: [0, 0, 0, 1], result: [0, 0, 0, 1]},
    {input: [1, 0, 0, 0], result: [0, 1, 0, 0]},
    {input: [3, 4, 0, 0], result: [0, 3, 4, 0]},
    {input: [1, 1, 1, 0], result: [ 1, 1, 1, 0 ]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector4(...testCase.input);
    const result = v.transformByQuaternion(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});
