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

import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';
import {config, isArray, toRadians, toDegrees, equals, exactEquals, lerp, Vector2} from 'math.gl';
import {radians, degrees} from 'math.gl';

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
  tapeEquals(t, 1.0, 1.0, 'should return true for the same number');
  tapeEquals(t, 1.0 + config.EPSILON / 2, 1.0, 'should return true for numbers that are close');
  tapeEquals(t, [1.0, 2.0], new Float32Array([1.0, 2.0]),
    'should return true for Array and TypedArray with same values'
  );
  t.notOk(
    equals([1.0, 2.0], new Float32Array([1.0, 3.0])),
    'should return false for Array and TypedArray with different values'
  );
  tapeEquals(t, [1.0, 2.0], new Vector2([1.0, 2.0]),
    'should return true for Array and Vector2 with same values'
  );
  t.end();
});

test('math.exactEquals', t => {
  t.notOk(exactEquals(1.0, 0.0), 'should return false for different numbers');
  t.ok(exactEquals(1.0, 1.0), 'should return true for the same number');
  t.notOk(
    exactEquals(1.0 + config.EPSILON / 2, 1.0),
    'should return false for numbers that are close'
  );
  t.ok(exactEquals([1.0, 2.0], [1.0, 2.0]), 'should return true for Arrays  with same values');
  t.notOk(
    exactEquals([1.0, 2.0], new Float32Array([1.0, 2.0])),
    'should return false for Array and TypedArray with same values'
  );
  t.notOk(
    exactEquals([1.0, 2.0], new Float32Array([1.0, 3.0])),
    'should return false for Array and TypedArray with different values'
  );
  t.notOk(
    exactEquals([1.0, 2.0], new Vector2([1.0, 2.0])),
    'should return false for Array and Vector2 with same values'
  );
  t.end();
});

test('math#toRadians', t => {
  tapeEquals(t, toRadians(180), Math.PI, 'should return a value of 3.141592654(Math.PI)');
  tapeEquals(t, toRadians([180, 90]), [Math.PI, Math.PI /2], 'should return a value of 3.141592654(Math.PI)');
  t.end();
});

test('math#toDegrees', t => {
  tapeEquals(t, toDegrees(Math.PI), 180, 'should return a value of 180');
  tapeEquals(t, toDegrees([Math.PI, Math.PI /2]), [180, 90], 'should return a value of 180');
  t.end();
});


test('math#radians', t => {
  tapeEquals(t, radians(180), Math.PI, 'should return a value of 3.141592654(Math.PI)');
  tapeEquals(t, radians([180, 90]), [Math.PI, Math.PI /2], 'should return a value of 3.141592654(Math.PI)');
  t.end();
});

test('math#degrees', t => {
  tapeEquals(t, degrees(Math.PI), 180, 'should return a value of 180');
  tapeEquals(t, degrees([Math.PI, Math.PI /2]), [180, 90], 'should return a value of 180');
  t.end();
});

test('math#lerp', t => {
  tapeEquals(t, lerp(1.0, 2.0, 0.2), 1.2, 'interpolate between numbers');
  tapeEquals(t, lerp([1.0, 0.0], [2.0, -1.0], 0.2), [1.2, -0.2], 'interpolate between arrays');
  tapeEquals(t, lerp(new Float32Array([1.0, 0.0]), [2.0, -1.0], 0.2), [1.2, -0.2],
    'interpolate between arrays'
  );
  t.end();
});
