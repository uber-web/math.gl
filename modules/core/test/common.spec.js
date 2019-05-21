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

import {isArray, radians, equals, lerp, config} from 'math.gl';
// import {tapeEquals} from './index';
import test from 'tape-catch';

test('Math#types', t => {
  t.equals(typeof isArray, 'function');
  t.equals(typeof radians, 'function');
  t.equals(typeof equals, 'function');
  t.equals(typeof config.EPSILON, 'number');
  t.end();
});

test('Math#construct and isArray check', t => {
  t.ok(isArray([]), 'isArray([])');
  t.ok(isArray(new Float32Array(1)), 'isArray(Float32Array)');
  t.notOk(isArray(new ArrayBuffer(4)), 'isArray(ArrayBuffer)');
  t.notOk(isArray(new DataView(new ArrayBuffer(16))), 'isArray(DataView)');

  t.notOk(isArray(undefined), 'isArray(undefined)');
  t.notOk(isArray(null), 'isArray(null)');
  t.notOk(isArray({}), 'isArray({})');
  t.notOk(isArray({length: 0}), 'isArray({...})');
  t.notOk(isArray(1), 'isArray(1)');
  t.notOk(isArray(NaN), 'isArray(NaN)');
  t.notOk(isArray('NaN'), "isArray('NaN')");
  t.notOk(isArray(''), "isArray('')");

  t.end();
});

test('math.equals', t => {
  t.notOk(equals(1.0, 0.0), 'should return false for different numbers');
  t.ok(equals(1.0, 1.0), 'should return true for the same number');
  t.ok(equals(1.0 + config.EPSILON / 2, 1.0), 'should return true for numbers that are close');
  t.ok(
    equals([1.0, 2.0], new Float32Array([1.0, 2.0])),
    'should return true for Array and TypedArray with same values'
  );
  t.notOk(
    equals([1.0, 2.0], new Float32Array([1.0, 3.0])),
    'should return false for Array and TypedArray with same values'
  );
  t.end();
});

test('math#radians', t => {
  t.ok(equals(radians(180), Math.PI), 'should return a value of 3.141592654(Math.PI)');
  t.end();
});

test('math#lerp', t => {
  t.ok(equals(lerp(1.0, 2.0, 0.2), 1.2), 'interpolate between numbers');
  t.ok(equals(lerp([1.0, 0.0], [2.0, -1.0], 0.2), [1.2, -0.2]), 'interpolate between arrays');
  t.ok(
    equals(lerp(new Float32Array([1.0, 0.0]), [2.0, -1.0], 0.2), [1.2, -0.2]),
    'interpolate between arrays'
  );
  t.end();
});
