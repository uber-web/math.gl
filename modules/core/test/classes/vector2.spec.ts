// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

/* eslint-disable max-statements */
import test from 'tape-promise/tape';
import {tapeEquals} from 'test/utils/tape-assertions';

import {Vector2, Matrix4, Matrix3} from '@math.gl/core';

test('Vector2#import', (t) => {
  t.equals(typeof Vector2, 'function');
  t.end();
});

test('Vector2#construct and Array.isArray check', (t) => {
  t.ok(Array.isArray(new Vector2()));
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector2#members and methods', (t) => {
  const v = new Vector2();
  t.equals(v.x, 0);
  t.equals(v.y, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector2#from', (t) => {
  let vector2;
  vector2 = new Vector2().from([1, 2]);
  tapeEquals(t, vector2, [1, 2]);
  vector2 = new Vector2().from({x: 1, y: 2});
  tapeEquals(t, vector2, [1, 2]);
  t.end();
});

test('Vector2#to', (t) => {
  const vector2 = new Vector2(1, 2);
  tapeEquals(t, vector2.to([0, 0]), [1, 2]);
  t.deepEquals(vector2.to({x: 0, y: 0}), {x: 1, y: 2});
  t.end();
});

test('Vector2#toString', (t) => {
  const TEST_CASES = [{input: [0, 1], precision: 5, string: '[0, 1]'}];
  for (const tc of TEST_CASES) {
    const v = new Vector2(tc.input);
    t.equals(String(v), tc.string);
    t.equals(`${v}`, tc.string);
  }
  t.end();
});

test('Vector2#scale', (t) => {
  const TEST_CASES = [
    {input: [1, 2], scale: 5, result: [5, 10]},
    {input: [1, 2], scale: [2, -1], result: [2, -2]}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.input).scale(tc.scale);
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector2#distance', (t) => {
  const TEST_CASES = [{start: [0, 0], end: [3, 4], result: 5}];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.start).distance(tc.end);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector2#len', (t) => {
  const TEST_CASES = [
    {input: [0, 0], result: 0},
    {input: [3, 4], result: 5}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.input).len();
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector2#dot', (t) => {
  const TEST_CASES = [{input1: [1, 3], input2: [4, -2], result: -2}];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.input1).dot(tc.input2);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector2#normalize', (t) => {
  const TEST_CASES = [
    {input: [0, 0], result: [0, 0]},
    {input: [1, 0], result: [1, 0]},
    {input: [3, 4], result: [0.6, 0.8]},
    {input: [1, 1], result: [1 / Math.sqrt(2), 1 / Math.sqrt(2)]}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector2(tc.input);
    const result = v.normalize();
    t.ok(result.equals(tc.result));
  }
  t.end();
});

test('Vector2#horizontalAngle', (t) => {
  const TEST_CASES = [
    {input: [0, 0], result: 0},
    {input: [1, 0], result: 0},
    {input: [1, 1], result: 0.7853981633974483}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.input).horizontalAngle();
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector2#verticalAngle', (t) => {
  const TEST_CASES = [
    {input: [0, 0], result: 0},
    {input: [1, 0], result: 1.5707963267948966},
    {input: [1, 1], result: 0.7853981633974483}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector2(tc.input).verticalAngle();
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector2#transform', (t) => {
  const transform = new Matrix4().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0], result: [0.5, 0.5]},
    {input: [1, 0], result: [1, 0.5]},
    {input: [3, 4], result: [2, 2.5]},
    {input: [1, 1], result: [1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector2(testCase.input);
    const result = v.transform(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector2#transformAsVector', (t) => {
  const transform = new Matrix4().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0], result: [0, 0]},
    {input: [1, 0], result: [0.5, 0]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector2(testCase.input);
    const result = v.transformAsVector(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector2#transformByMatrix3', (t) => {
  const transform = new Matrix3().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0], result: [0.5, 0.5]},
    {input: [1, 0], result: [1, 0.5]},
    {input: [3, 4], result: [2, 2.5]},
    {input: [1, 1], result: [1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector2(testCase.input);
    const result = v.transformByMatrix3(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector2#transformByMatrix2x3', (t) => {
  const transform = [0.5, 0, 0, 0.5, 0.5, 0.5];

  const TEST_CASES = [
    {input: [0, 0], result: [0.5, 0.5]},
    {input: [1, 0], result: [1, 0.5]},
    {input: [3, 4], result: [2, 2.5]},
    {input: [1, 1], result: [1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector2(testCase.input);
    const result = v.transformByMatrix2x3(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector2#transformByMatrix2', (t) => {
  const transform = [0.5, 0, 0, 0.5];

  const TEST_CASES = [
    {input: [0, 0], result: [0, 0]},
    {input: [1, 0], result: [0.5, 0]},
    {input: [3, 4], result: [1.5, 2]},
    {input: [1, 1], result: [0.5, 0.5]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector2(testCase.input);
    const result = v.transformByMatrix2(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});
