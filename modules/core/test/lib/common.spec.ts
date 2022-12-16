// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

import {Vector2, Vector3, Pose, _MathUtils} from '@math.gl/core';
import {config, configure, isArray, clone, equals, exactEquals, formatValue} from '@math.gl/core';
import {toRadians, toDegrees} from '@math.gl/core';
import {radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp} from '@math.gl/core';
import {tapeEquals} from 'test/utils/tape-assertions';
import test from 'tape-promise/tape';

test('math.gl#tests', (t) => {
  // Note: tape 4.12 and higher no longer compares 0 and -0 equally...
  // Workaround is to pin tape to 4.11
  t.equals(0, 0, '0 and 0 compares equally');
  t.equals(0, -0, '0 and -0 compares equally');
  t.deepEquals([0], [0], '0 and 0 compares equally');
  t.deepEquals([0], [-0], '0 and -0 compares equally');
  t.end();
});

test('math.gl#types', (t) => {
  t.equals(typeof isArray, 'function');
  t.equals(typeof radians, 'function');
  t.equals(typeof equals, 'function');
  t.equals(typeof config.EPSILON, 'number');
  t.ok(_MathUtils);
  t.end();
});

test('math.gl#configue', (t) => {
  const {EPSILON, debug} = config;
  configure({EPSILON: 1e-13, debug: false});
  t.equals(config.EPSILON, 1e-13);
  t.equals(config.debug, false);
  configure({EPSILON, debug});
  t.equals(config.EPSILON, EPSILON);
  t.equals(config.debug, debug);
  t.end();
});

test('math.gl#isArray', (t) => {
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

test('math.gl#clone', (t) => {
  tapeEquals(t, clone([1, 2, 3]), [1, 2, 3], 'clone([])');
  tapeEquals(t, clone(new Vector3([1, 2, 3])), [1, 2, 3], 'clone([])');
  t.end();
});

test('math.gl#formatValue', (t) => {
  t.equals(formatValue(1), '1');
  t.end();
});

test('math.gl#equals', (t) => {
  t.notOk(equals(1.0, 0.0), 'should return false for different numbers');
  tapeEquals(t, 1.0, 1.0, 'should return true for the same number');
  tapeEquals(t, 1.0 + config.EPSILON / 2, 1.0, 'should return true for numbers that are close');
  tapeEquals(
    t,
    [1.0, 2.0],
    new Float32Array([1.0, 2.0]),
    'should return true for Array and TypedArray with same values'
  );
  t.notOk(
    equals([1.0, 2.0], new Float32Array([1.0, 3.0])),
    'should return false for Array and TypedArray with different values'
  );
  t.notOk(equals([0], 0), 'should return false for Array and Number');
  t.notOk(equals(null, 0), 'should return false for null and Number');
  tapeEquals(
    t,
    [1.0, 2.0],
    new Vector2([1.0, 2.0]),
    'should return true for Array and Vector2 with same values'
  );
  t.ok(
    equals(new Vector2([1.0, 2.0]), [1.0, 2.0]),
    'should return true for Array and Vector2 with same values'
  );
  t.notOk(
    equals([1.0, 2.0], [1.0, 2.0, 3.0]),
    'should return false for Arrays of different lengths'
  );
  t.ok(
    equals(new Vector2([1.0, 2.0]), [1.0, 2.0]),
    'should return true for Arrays of different types'
  );
  t.notOk(
    equals([1.0, 2.0], new Pose()),
    'should return false for incompatible objects w equals method'
  );
  t.notOk(
    equals(new Pose(), [1.0, 2.0]),
    'should return false for incompatible objects w equals method'
  );
  t.end();
});

test('math.gl#exactEquals', (t) => {
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
  t.notOk(
    exactEquals([1.0, 2.0], [1.0, 2.0, 3.0]),
    'should return false for Arrays of different lengths'
  );
  t.notOk(
    exactEquals(new Pose(), [1.0, 2.0]),
    'should return false for incompatible objects w equals method'
  );
  t.notOk(
    exactEquals([1.0, 2.0], new Pose()),
    'should return false for incompatible objects w equals method'
  );
  t.notOk(
    exactEquals(new Pose(), new Pose({x: 1})),
    'should return false for different compatible objects w equals method'
  );
  t.notOk(
    exactEquals(new Pose({x: 1}), new Pose()),
    'should return false for different compatible objects w equals method'
  );
  t.notOk(
    exactEquals([new Pose({x: 1})], [new Pose()]),
    'should return false for arrays of different compatible objects w equals method'
  );
  t.end();
});

function runTests(t, functionUnderTest, testCases) {
  for (const testCase of testCases) {
    tapeEquals(
      t,
      functionUnderTest(testCase.input),
      testCase.result,
      `should return a value of ${JSON.stringify(testCase.result)}`
    );
  }
}

test('math.gl#toRadians', (t) => {
  runTests(t, toRadians, [
    {input: 180, result: Math.PI},
    {input: [180, 180, 180], result: [Math.PI, Math.PI, Math.PI]},
    {input: new Vector3(180, 180, 180), result: [Math.PI, Math.PI, Math.PI]}
  ]);
  t.end();
});

test('math.gl#toDegrees', (t) => {
  runTests(t, toDegrees, [
    {input: Math.PI, result: 180},
    {input: [Math.PI, Math.PI, Math.PI], result: [180, 180, 180]}
  ]);
  t.end();
});

test('math.gl#radians', (t) => {
  runTests(t, radians, [
    {input: 180, result: Math.PI},
    {input: [180, 180, 180], result: [Math.PI, Math.PI, Math.PI]},
    {input: new Vector3(180, 180, 180), result: [Math.PI, Math.PI, Math.PI]}
  ]);
  t.end();
});

test('math.gl#degrees', (t) => {
  runTests(t, degrees, [
    {input: Math.PI, result: 180},
    {input: [Math.PI, Math.PI, Math.PI], result: [180, 180, 180]}
  ]);
  t.end();
});

test('math.gl#sin', (t) => {
  runTests(t, sin, [
    {input: 0, result: 0},
    {input: [Math.PI / 2, Math.PI / 6, 0], result: [1, 0.5, 0]}
  ]);
  t.end();
});

test('math.gl#cos', (t) => {
  runTests(t, cos, [
    {input: 0, result: 1},
    {input: [Math.PI / 2, Math.PI / 3, 0], result: [0, 0.5, 1]}
  ]);
  t.end();
});

test('math.gl#tan', (t) => {
  runTests(t, tan, [
    {input: 0, result: 0},
    {input: [Math.PI / 4, 0], result: [1, 0]}
  ]);
  t.end();
});

test('math.gl#asin', (t) => {
  runTests(t, asin, [
    {input: 0, result: 0},
    {input: [1, 0.5, 0], result: [Math.PI / 2, Math.PI / 6, 0]}
  ]);
  t.end();
});

test('math.gl#acos', (t) => {
  runTests(t, acos, [
    {input: 1, result: 0},
    {input: [0, 0.5, 1], result: [Math.PI / 2, Math.PI / 3, 0]}
  ]);
  t.end();
});

test('math.gl#atan', (t) => {
  runTests(t, atan, [
    {input: 0, result: 0},
    {input: [1, 0], result: [Math.PI / 4, 0]}
  ]);
  t.end();
});

test('math.gl#clamp', (t) => {
  tapeEquals(t, clamp(5.0, 2.0, 0.2), 2, 'clamp numbers');
  tapeEquals(t, clamp([1.0, 0.0], -1.0, 0.2), [0.2, -0], 'clamp arrays');
  tapeEquals(t, clamp(new Float32Array([2.0, -1.0]), -1.0, 1.0), [1.0, -1.0], 'clamp arrays');
  t.end();
});

test('math.gl#lerp', (t) => {
  tapeEquals(t, lerp(1.0, 2.0, 0.2), 1.2, 'interpolate between numbers');
  tapeEquals(t, lerp([1.0, 0.0], [2.0, -1.0], 0.2), [1.2, -0.2], 'interpolate between arrays');
  tapeEquals(
    t,
    lerp(new Float32Array([1.0, 0.0]), [2.0, -1.0], 0.2),
    [1.2, -0.2],
    'interpolate between arrays'
  );
  t.end();
});
