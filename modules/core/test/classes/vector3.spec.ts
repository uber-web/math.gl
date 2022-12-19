// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

/* eslint-disable max-statements */
import test from 'tape-promise/tape';
import {tapeEquals} from 'test/utils/tape-assertions';

import {Vector3, Matrix4, Matrix3, Quaternion} from '@math.gl/core';

test('Vector3#import', (t) => {
  t.equals(typeof Vector3, 'function');
  t.end();
});

test('Vector3#construct and Array.isArray check', (t) => {
  t.ok(Array.isArray(new Vector3()));
  t.end();
});

test('Vector3#from', (t) => {
  let vector3;
  vector3 = new Vector3().from([1, 2, 3]);
  tapeEquals(t, vector3, [1, 2, 3]);
  vector3 = new Vector3().from({x: 1, y: 2, z: 3});
  tapeEquals(t, vector3, [1, 2, 3]);
  t.end();
});

test('Vector3#to', (t) => {
  const vector3 = new Vector3(1, 2, 3);
  tapeEquals(t, vector3.to([0, 0, 0]), [1, 2, 3]);
  t.deepEquals(vector3.to({x: 0, y: 0, z: 0}), {x: 1, y: 2, z: 3});
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector3#members and methods', (t) => {
  const v = new Vector3();
  t.equals(v.x, 0);
  t.equals(v.y, 0);
  t.equals(v.z, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector3#rotates', (t) => {
  const TEST_CASES = [
    {input: [0, 0, 1], radians: Math.PI, rotateX: [0, 0, -1]},
    {input: [0, 0, 1], radians: Math.PI / 2, rotateX: [0, -1, 0]}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector3(tc.input);
    tapeEquals(t, v.rotateX({radians: tc.radians}), tc.rotateX);
  }
  t.end();
});

test('Vector3#toString', (t) => {
  const TEST_CASES = [{input: [0, 0, 1], precision: 5, string: '[0, 0, 1]'}];
  for (const tc of TEST_CASES) {
    const v = new Vector3(tc.input);
    t.equals(String(v), tc.string);
    t.equals(`${v}`, tc.string);
  }
  t.end();
});

test('Vector3#scale', (t) => {
  const TEST_CASES = [
    {input: [1, 2, 3], scale: 5, result: [5, 10, 15]},
    {input: [1, 2, 3], scale: [2, 0, -1], result: [2, 0, -3]}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector3(tc.input).scale(tc.scale);
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector3#distance', (t) => {
  const TEST_CASES = [{start: [0, 0, 0], end: [3, 4, 0], result: 5}];
  for (const tc of TEST_CASES) {
    const result = new Vector3(tc.start).distance(tc.end);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector3#len', (t) => {
  const TEST_CASES = [
    {input: [0, 0, 0], result: 0},
    {input: [3, 4, 0], result: 5}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector3(tc.input).len();
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector3#dot', (t) => {
  const TEST_CASES = [{input1: [1, 3, -5], input2: [4, -2, -1], result: 3}];
  for (const tc of TEST_CASES) {
    const result = new Vector3(tc.input1).dot(tc.input2);
    t.equals(result, tc.result);
  }
  t.end();
});

test('Vector3#angle', (t) => {
  const TEST_CASES = [{input: [0, 1, 0], result: Math.PI / 2}];
  for (const tc of TEST_CASES) {
    const result = new Vector3([1, 0, 0]).angle(tc.input);
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

test('Vector3#normalize', (t) => {
  const TEST_CASES = [
    {input: [0, 0, 0], result: [0, 0, 0]},
    {input: [1, 0, 0], result: [1, 0, 0]},
    {input: [3, 4, 0], result: [0.6, 0.8, 0]},
    {input: [1, 1, 1], result: [1 / Math.sqrt(3), 1 / Math.sqrt(3), 1 / Math.sqrt(3)]}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector3(tc.input);
    const result = v.normalize();
    t.ok(result.equals(tc.result));
  }
  t.end();
});

test('Vector3.rotateX', (t) => {
  let result = new Vector3([0, 1, 0]).rotateX({radians: Math.PI});
  t.ok(result.equals([0, -1, 0]), 'rotation around [0, 0, 0] should return rotated vector');

  result = new Vector3([2, 7, 0]).rotateX({radians: Math.PI, origin: [2, 5, 0]});
  t.ok(result.equals([2, 3, 0]), 'rotation around arbitrary origin should return rotated vector');

  t.end();
});

test('Vector3.rotateY', (t) => {
  let result = new Vector3([1, 1, 0]).rotateY({radians: Math.PI});
  t.ok(result.equals([-1, 1, 0]), 'rotation around [0, 0, 0] should return rotated vector');

  result = new Vector3([-2, 3, 10]).rotateY({radians: Math.PI, origin: [-4, 3, 10]});
  t.ok(result.equals([-6, 3, 10]), 'rotation around arbitrary origin should return rotated vector');

  t.end();
});

test('Vector3.rotateZ', (t) => {
  let result = new Vector3([0, 1, 0]).rotateZ({radians: Math.PI});
  t.ok(result.equals([0, -1, 0]), 'rotation around [0, 0, 0] should return rotated vector');

  result = new Vector3([0, 6, -5]).rotateZ({radians: Math.PI, origin: [0, 0, -5]});
  t.ok(result.equals([0, -6, -5]), 'rotation around arbitrary origin should return rotated vector');

  t.end();
});

test('Vector3#transform', (t) => {
  const transform = new Matrix4().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0, 0], result: [0.5, 0.5, 0.5]},
    {input: [1, 0, 0], result: [1, 0.5, 0.5]},
    {input: [3, 4, 0], result: [2, 2.5, 0.5]},
    {input: [1, 1, 1], result: [1, 1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector3(testCase.input);
    const result = v.transform(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector3#transformByMatrix3', (t) => {
  const transform = new Matrix3().scale([0.5, 0.5, 0.5]).translate([1, 1, 1]);

  const TEST_CASES = [
    {input: [0, 0, 0], result: [0, 0, 0]},
    {input: [1, 0, 0], result: [0.5, 0, 0]},
    {input: [3, 4, 0], result: [1.5, 2, 0]},
    {input: [1, 1, 1], result: [1, 1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector3(testCase.input);
    const result = v.transformByMatrix3(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector3#transformByMatrix2', (t) => {
  const transform = [0.5, 0, 0, 0.5];

  const TEST_CASES = [
    {input: [0, 0, 0], result: [0, 0, 0]},
    {input: [1, 0, 0], result: [0.5, 0, 0]},
    {input: [3, 4, 0], result: [1.5, 2, 0]},
    {input: [1, 1, 1], result: [0.5, 0.5, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector3(testCase.input);
    const result = v.transformByMatrix2(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});

test('Vector3#transformByQuaternion', (t) => {
  const transform = new Quaternion(0.5, 0.5, 0.5, 0.5);

  const TEST_CASES = [
    {input: [0, 0, 0], result: [0, 0, 0]},
    {input: [1, 0, 0], result: [0, 1, 0]},
    {input: [3, 4, 0], result: [0, 3, 4]},
    {input: [1, 1, 1], result: [1, 1, 1]}
  ];
  for (const testCase of TEST_CASES) {
    const v = new Vector3(testCase.input);
    const result = v.transformByQuaternion(transform);
    tapeEquals(t, result, testCase.result);
  }
  t.end();
});
