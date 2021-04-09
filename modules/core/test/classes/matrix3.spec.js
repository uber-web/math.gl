// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

/* eslint-disable max-statements */
import {Matrix3, config} from '@math.gl/core';
import test from 'tape-promise/tape';
import {tapeEquals} from 'test/utils/tape-assertions';

config.EPSILON = 1e-6;

const IDENTITY_MATRIX = [1, 0, 0, 0, 1, 0, 0, 0, 1];

const INDICES_MATRIX = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const TRANSPOSED_INDICES_MATRIX = [1, 4, 7, 2, 5, 8, 3, 6, 9];

test('Matrix3#types', (t) => {
  t.equals(typeof Matrix3, 'function');
  t.ok(Matrix3.IDENTITY);
  t.ok(Matrix3.ZERO);
  t.end();
});

test('Matrix3#construct and Array.isArray check', (t) => {
  const m = new Matrix3();
  t.ok(Array.isArray(m));
  t.ok(m.INDICES);
  t.end();
});

test('Matrix3#from', (t) => {
  tapeEquals(t, new Matrix3().from([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // tapeEquals(t, new Matrix3().from({x: 1, y: 2, z: 3, w: 4}), [1, 2, 3, 4]);
  t.end();
});

test.skip('Matrix3#to', (t) => {
  const matrix = new Matrix3(1, 2, 3, 4, 5, 6, 7, 8, 9);
  tapeEquals(t, matrix.to([0, 0, 0, 0, 0, 0, 0, 0, 0]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // t.deepEquals(matrix.to({x: 0, y: 0, z: 0, w: 0}), {x: 1, y: 2, z: 4});
  t.end();
});

test('Matrix3#toFloat32Array', (t) => {
  t.equals(typeof Matrix3.prototype.toFloat32Array, 'function');
  const m = new Matrix3();
  m.identity();
  t.equals(m.toFloat32Array().BYTES_PER_ELEMENT, 4);
  t.end();
});

test('Matrix3#setRowMajor', (t) => {
  t.equals(typeof Matrix3.prototype.setRowMajor, 'function');

  // const INPUT = INDICES_MATRIX;
  // const RESULT = TRANSPOSED_INDICES_MATRIX;

  // const m = new Matrix3().setRowMajor(...INPUT);
  // tapeEquals(t, m, RESULT, 'setRowMajor gave the right result');

  t.end();
});

test('Matrix3#set', (t) => {
  t.equals(typeof Matrix3.prototype.set, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = INDICES_MATRIX;

  const m = new Matrix3().copy(INPUT);

  tapeEquals(t, m, RESULT, 'set gave the right result');

  t.end();
});

test('Matrix3#getElement and setElement', (t) => {
  t.equals(typeof new Matrix3().setElement, 'function');
  t.equals(typeof new Matrix3().getElement, 'function');

  const INPUT = INDICES_MATRIX;

  const m = new Matrix3().copy(INPUT);

  const VALUE = 10;

  m.setElement(2, 1, VALUE);
  const result = m.getElement(2, 1);
  tapeEquals(t, result, VALUE, 'getElement gave the right result');

  t.end();
});

test('Matrix3#getColumn and setColumn', (t) => {
  t.equals(typeof new Matrix3().setColumn, 'function');
  t.equals(typeof new Matrix3().getColumn, 'function');

  const INPUT = INDICES_MATRIX;

  const m = new Matrix3().copy(INPUT);

  tapeEquals(t, m.getColumn(0), [1, 2, 3]);
  tapeEquals(t, m.getColumn(1), [4, 5, 6]);
  tapeEquals(t, m.getColumn(2), [7, 8, 9]);

  m.setColumn(1, [6, -5, 4]);

  tapeEquals(t, m.getColumn(0), [1, 2, 3]);
  tapeEquals(t, m.getColumn(1), [6, -5, 4]);
  tapeEquals(t, m.getColumn(2), [7, 8, 9]);

  t.end();
});

test('Matrix3#determinant', (t) => {
  const RESULT = 5;

  t.equals(typeof Matrix3.prototype.determinant, 'function');
  const m = new Matrix3().set(1, 2, 3, 0, 1, 5, 5, 6, 0);
  const result = m.determinant();

  tapeEquals(t, result, RESULT, 'determinant gave the right result');
  t.end();
});

test('Matrix3#identity (identity matrix)', (t) => {
  t.equals(typeof Matrix3.prototype.identity, 'function');
  const m = new Matrix3();
  m.identity();

  const RESULT = IDENTITY_MATRIX;

  tapeEquals(t, m, RESULT);
  t.end();
});

test('Matrix3#copy', (t) => {
  t.equals(typeof Matrix3.prototype.copy, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = INDICES_MATRIX;

  const m = new Matrix3().copy(INPUT);

  tapeEquals(t, m, RESULT, 'copy gave the right result');

  t.end();
});

// calculation from the website below
// https://www.andre-gaschler.com/rotationconverter/

test('Matrix3#fromQuaternion', (t) => {
  t.equals(typeof Matrix3.prototype.fromQuaternion, 'function');

  const RESULT = [
    -0.7238737, 0.4321177, 0.5378486, 0.3953417, -0.379099, 0.8366534, 0.5654306, 0.8182654,
    0.1035857
  ];

  const q = [0.3713622, 0.5570433, 0.7427244, 0.0123787];

  const m = new Matrix3().identity();

  const result = m.fromQuaternion(q);

  tapeEquals(t, result, RESULT, 'fromQuaternion gave the right result');
  t.end();
});

test('Matrix3#transpose', (t) => {
  t.equals(typeof Matrix3.prototype.transpose, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = TRANSPOSED_INDICES_MATRIX;

  const m = new Matrix3().copy(INPUT);

  const result = m.transpose();

  tapeEquals(t, result, RESULT, 'transpose gave the right result');
  t.end();
});

test('Matrix3#invert', (t) => {
  const INPUT = [1, 2, 3, 0, 1, 5, 5, 6, 0];
  const RESULT = [-6, 3.6, 1.4, 5, -3, -1, -1, 0.8, 0.2];

  t.equals(typeof Matrix3.prototype.invert, 'function');
  const m = new Matrix3().copy(INPUT);
  const result = m.invert();

  tapeEquals(t, result, RESULT, 'invert gave the right result');
  t.end();
});

test('Matrix3#multiplyLeft', (t) => {
  const INPUT_A = INDICES_MATRIX;
  const INPUT_B = [1, 2, 3, 0, 1, 5, 5, 6, 0];
  const RESULT = [16, 22, 13, 34, 49, 37, 52, 76, 61];

  t.equals(typeof Matrix3.prototype.multiplyLeft, 'function');
  const ma = new Matrix3().copy(INPUT_A);
  const mb = new Matrix3().copy(INPUT_B);
  const result = ma.multiplyLeft(mb);

  tapeEquals(t, result, RESULT, 'multiplyLeft gave the right result');
  t.end();
});

test('Matrix3#multiplyRight', (t) => {
  const INPUT_A = INDICES_MATRIX;
  const INPUT_B = [1, 2, 3, 0, 1, 5, 5, 6, 0];
  const RESULT = [30, 36, 42, 39, 45, 51, 29, 40, 51];

  t.equals(typeof Matrix3.prototype.multiplyRight, 'function');
  const ma = new Matrix3().copy(INPUT_A);
  const mb = new Matrix3().copy(INPUT_B);
  const result = ma.multiplyRight(mb);

  tapeEquals(t, result, RESULT, 'invert gave the right result');
  t.end();
});

test('Matrix3#rotate', (t) => {
  const RESULT = [0, 1, 0, -1, 0, 0, 0, 0, 1];

  t.equals(typeof Matrix3.prototype.rotate, 'function');
  const m = new Matrix3().identity();
  const result = m.rotate(Math.PI / 2);

  tapeEquals(t, result, RESULT, 'rotate gave the right result');
  t.end();
});

test('Matrix3#scale', (t) => {
  const M1_RESULT = [1, 0, 0, 0, 2, 0, 0, 0, 1];
  const M2_RESULT = [2, 0, 0, 0, 2, 0, 0, 0, 1];

  t.equals(typeof Matrix3.prototype.scale, 'function');

  const m1 = new Matrix3().identity();
  const m1Result = m1.scale([1, 2, 1]);

  tapeEquals(t, m1Result, M1_RESULT, 'scale gave the right result');

  const m2 = new Matrix3().identity();
  const m2Result = m2.scale(2);

  tapeEquals(t, m2Result, M2_RESULT, 'scale gave the right result');

  t.end();
});

test('Matrix3#translate', (t) => {
  const RESULT = [1, 0, 0, 0, 1, 0, 1, 2, 1];

  t.equals(typeof Matrix3.prototype.translate, 'function');
  const m = new Matrix3().identity();
  const result = m.translate([1, 2]);

  tapeEquals(t, result, RESULT, 'translate gave the right result');
  t.end();
});

test('Matrix3#transform', (t) => {
  const TEST_CASES = [
    {
      method: 'transform',
      input: [2, 2, 0],
      expected: [4, 4, 0]
    },
    {
      method: 'transform',
      input: [2, 2],
      expected: [4, 4]
    },
    // DEPRECATED
    {
      method: 'transformVector',
      input: [2, 2],
      expected: [4, 4]
    },
    {
      method: 'transformVector',
      input: [2, 2, 0],
      expected: [4, 4, 0]
    },
    {
      method: 'transformVector2',
      input: [2, 2],
      expected: [4, 4]
    },
    {
      method: 'transformVector3',
      input: [2, 2, 0],
      expected: [4, 4, 0]
    }
  ];

  const matrix = new Matrix3().scale([2, 2, 2]);

  for (const testCase of TEST_CASES) {
    const p4 = matrix[testCase.method](testCase.input);
    tapeEquals(t, p4, testCase.expected, 'transform gave the right result');
  }

  t.throws(() => matrix.transform([NaN, 0, 0, 0]));
  t.throws(() => matrix.transform([0]));
  t.throws(() => matrix.transform([0, 0, 0, 0, 0]));
  // @ts-expect-error TS2551: Property 'transformAsVector' does not exist
  t.throws(() => matrix.transformAsVector([0, 0, 0, 0, 0]));
  // @ts-expect-error TS2551: Property 'transformAsVector' does not exist
  t.throws(() => matrix.transformAsPoint([0, 0, 0, 0, 0]));

  t.end();
});
