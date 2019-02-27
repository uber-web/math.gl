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
import {Matrix4, Vector3, config} from 'math.gl';
import test from 'tape-catch';
import {tapeEquals} from '../utils/tape-equals';

config.EPSILON = 1e-6;

const IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

const INDICES_MATRIX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const TRANSPOSED_INDICES_MATRIX = [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16];

// const MATRIX_TEST_CASES = {
//   identity: {
//     title: 'identity matrix',
//     INPUTS: [],
//     RESULT: IDENTITY_MATRIX
//   },
//   set: {}
// };

test('Matrix4#types', t => {
  t.equals(typeof Matrix4, 'function');
  t.end();
});

test('Matrix4#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Matrix4()));
  t.end();
});

test('Matrix4.toFloat32Array', t => {
  t.equals(typeof Matrix4.prototype.toFloat32Array, 'function');
  const m = new Matrix4();
  m.identity();
  t.equals(m.toFloat32Array().BYTES_PER_ELEMENT, 4);
  t.end();
});

test('Matrix4#identity (identity matrix)', t => {
  t.equals(typeof Matrix4.prototype.identity, 'function');
  const m = new Matrix4();
  m.identity();

  const RESULT = IDENTITY_MATRIX;

  tapeEquals(t, m, RESULT);
  t.end();
});

test('Matrix4#copy', t => {
  t.equals(typeof Matrix4.prototype.copy, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = INDICES_MATRIX;

  const m = new Matrix4().copy(INPUT);

  tapeEquals(t, m, RESULT, 'copy gave the right result');

  t.end();
});

test('Matrix4#set', t => {
  t.equals(typeof Matrix4.prototype.set, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = INDICES_MATRIX;

  const m = new Matrix4().set(...INPUT);

  tapeEquals(t, m, RESULT, 'set gave the right result');

  t.end();
});

test('Matrix4#setRowMajor', t => {
  t.equals(typeof Matrix4.prototype.setRowMajor, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = TRANSPOSED_INDICES_MATRIX;

  let m = new Matrix4().setRowMajor(...INPUT);

  tapeEquals(t, m, RESULT, 'setRowMajor gave the right result');

  m = new Matrix4().setRowMajor(1, 2, 3, 4, 5, 6, 7, 8);

  tapeEquals(
    t,
    m,
    [1, 5, 0, 0, 2, 6, 0, 0, 3, 7, 1, 0, 4, 8, 0, 1],
    'setRowMajor with missing params gave the right result'
  );

  m = new Matrix4().setRowMajor();

  tapeEquals(t, m, IDENTITY_MATRIX, 'setRowMajor with no params gave the right result');

  t.end();
});

test('Matrix4#setColumnMajor', t => {
  t.equals(typeof Matrix4.prototype.setColumnMajor, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = INDICES_MATRIX;

  let m = new Matrix4().setColumnMajor(...INPUT);

  tapeEquals(t, m, RESULT, 'set gave the right result');

  m = new Matrix4().setColumnMajor(1, 2, 3, 4, 5, 6, 7, 8);

  tapeEquals(
    t,
    m,
    [1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 1, 0, 0, 0, 0, 1],
    'setColumnMajor with missing params gave the right result'
  );

  m = new Matrix4().setColumnMajor();

  tapeEquals(t, m, IDENTITY_MATRIX, 'setColumnMajor with no params gave the right result');

  t.end();
});

test('Matrix4.transpose', t => {
  t.equals(typeof Matrix4.prototype.transpose, 'function');

  const INPUT = INDICES_MATRIX;
  const RESULT = TRANSPOSED_INDICES_MATRIX;

  const m = new Matrix4().set(...INPUT);

  const result = m.transpose();

  tapeEquals(t, result, RESULT, 'transpose gave the right result');
  t.end();
});

// test('Matrix4.add', t => {
//   const RESULT = [
//     2, 0, 0, 0,
//     0, 2, 0, 0,
//     0, 0, 2, 0,
//     0, 0, 0, 2
//   ];

//   t.equals(typeof Matrix4.prototype.add, 'function');
//   let m = new Matrix4().identity();
//   m = m.add(m);

//   tapeEquals(t, m, RESULT, 'add gave the right result');
//   t.end();
// });

test('Matrix4.scale', t => {
  const M1_RESULT = [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1];
  const M2_RESULT = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1];

  t.equals(typeof Matrix4.prototype.scale, 'function');
  const m1 = new Matrix4().identity();
  const m1Result = m1.scale([1, 2, 3]);

  tapeEquals(t, m1Result, M1_RESULT, 'scale gave the right result');

  const m2 = new Matrix4().identity();
  const m2Result = m2.scale(2);

  tapeEquals(t, m2Result, M2_RESULT, 'scale gave the right result');

  t.end();
});

test('Matrix4.translate', t => {
  const RESULT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 2, 3, 1];

  t.equals(typeof Matrix4.prototype.translate, 'function');
  const m = new Matrix4().identity();
  const result = m.translate([1, 2, 3]);

  tapeEquals(t, result, RESULT, 'translate gave the right result');
  t.end();
});

// test('Matrix4.invert', t => {
//   t.equals(typeof Matrix4.prototype.invert, 'function');
//   const m = new Matrix4();
//   m.identity();
//   const ans = m.frustum(-1, 1, -1, 1, 0.1, 100).invert();
//   t.ok(abs(ans.n11 - 9.99999999) < delta);
//   t.ok(abs(ans.n12 - 0) < delta);
//   t.ok(abs(ans.n13 - 0) < delta);
//   t.ok(abs(ans.n14 - 0) < delta);
//   t.ok(abs(ans.n21 - 0) < delta);
//   t.ok(abs(ans.n22 - 9.99999999) < delta);
//   t.ok(abs(ans.n23 - 0) < delta);
//   t.ok(abs(ans.n24 - 0) < delta);
//   t.ok(abs(ans.n31 - 0) < delta);
//   t.ok(abs(ans.n32 - 0) < delta);
//   t.ok(abs(ans.n33 - 0) < delta);
//   t.ok(abs(ans.n34 - -1) < delta);
//   t.ok(abs(ans.n41 - 0) < delta);
//   t.ok(abs(ans.n42 - 0) < delta);
//   t.ok(abs(ans.n43 - -4.995) < delta);
//   t.ok(abs(ans.n44 - 5.005) < delta);
//   t.end();
// });

// test('Matrix4.mulVector3', t => {
//   t.equals(typeof Matrix4.prototype.mulVector3, 'function');
//   const v = new Vector3(1, 1, 1);
//   const m = new Matrix4();
//   const ans = m.mulVector3(v);

//   t.equals(ans[0], 1);
//   t.equals(ans[1], 1);
//   t.equals(ans[2], 1);
//   t.end();
// });

// test('Matrix4.$mulVector3', t => {
//   t.equals(typeof Matrix4.prototype.$mulVector3, 'function');
//   const v = new Vector3(1, 1, 1);
//   const m = new Matrix4();

//   m.$mulVector3(v);

//   t.equals(v[0], 1);
//   t.equals(v[1], 1);
//   t.equals(v[2], 1);
//   t.end();
// });

// test('Matrix4.mulMatrix42', t => {
//   t.equals(typeof Matrix4.prototype.mulMatrix42, 'function');
//   const m1 = new Matrix4();
//   m1.set(1, 2, 3, 4,
//          5, 6, 7, 8,
//          9, 10, 11, 12,
//          13, 14, 15, 16);

//   const m2 = new Matrix4();
//   m2.set(1, 2, 3, 4,
//          5, 6, 7, 8,
//          9, 10, 11, 12,
//          13, 14, 15, 16).$transpose();

//   const ans = new Matrix4();
//   ans.mulMatrix42(m1, m2);
//   t.ok(abs(ans.n11 - 30) < delta);
//   t.ok(abs(ans.n12 - 70) < delta);
//   t.ok(abs(ans.n13 - 110) < delta);
//   t.ok(abs(ans.n14 - 150) < delta);
//   t.ok(abs(ans.n21 - 70) < delta);
//   t.ok(abs(ans.n22 - 174) < delta);
//   t.ok(abs(ans.n23 - 278) < delta);
//   t.ok(abs(ans.n24 - 382) < delta);
//   t.ok(abs(ans.n31 - 110) < delta);
//   t.ok(abs(ans.n32 - 278) < delta);
//   t.ok(abs(ans.n33 - 446) < delta);
//   t.ok(abs(ans.n34 - 614) < delta);
//   t.ok(abs(ans.n41 - 150) < delta);
//   t.ok(abs(ans.n42 - 382) < delta);
//   t.ok(abs(ans.n43 - 614) < delta);
//   t.ok(abs(ans.n44 - 846) < delta);
//   t.end();
// });

// test('Matrix4.lookAt', t => {
//   t.equals(typeof Matrix4.prototype.lookAt, 'function');
//   t.end();
// });

// test('Matrix4.perspective', t => {
//   t.equals(typeof Matrix4.prototype.perspective, 'function');
//   t.end();
// });

// test('Matrix4.frustum', t => {
//   t.equals(typeof Matrix4.prototype.frustum, 'function');
//   const m = new Matrix4();
//   m.identity();
//   const ans = m.frustum(-1, 1, -1, 1, 0.1, 100);
//   t.ok(abs(ans.n11 - 0.1) < delta);
//   t.ok(abs(ans.n12 - 0) < delta);
//   t.ok(abs(ans.n13 - 0) < delta);
//   t.ok(abs(ans.n14 - 0) < delta);
//   t.ok(abs(ans.n21 - 0) < delta);
//   t.ok(abs(ans.n22 - 0.1) < delta);
//   t.ok(abs(ans.n23 - 0) < delta);
//   t.ok(abs(ans.n24 - 0) < delta);
//   t.ok(abs(ans.n31 - 0) < delta);
//   t.ok(abs(ans.n32 - 0) < delta);
//   t.ok(abs(ans.n33 - -1.002002002002002) < delta);
//   t.ok(abs(ans.n34 - -0.20020020020020018) < delta);
//   t.ok(abs(ans.n41 - 0) < delta);
//   t.ok(abs(ans.n42 - 0) < delta);
//   t.ok(abs(ans.n43 - -1) < delta);
//   t.ok(abs(ans.n44 - 0) < delta);
//   t.end();
// });

test('Matrix4.rotateAxis', t => {
  t.equals(typeof Matrix4.prototype.rotateAxis, 'function');
  const v = new Vector3(1, 2, 3).normalize();
  const theta = Math.PI / 4;
  const m = new Matrix4();

  const result = m.rotateAxis(theta, v);
  const reference = new Matrix4([
    0.7280277013778687,
    -0.525104820728302,
    0.4407272934913635,
    0,
    0.6087885979157627,
    0.7907905578613281,
    -0.06345657259225845,
    0,
    -0.3152016404063445,
    0.3145079017103789,
    0.8953952789306641,
    0,
    0,
    0,
    0,
    1
  ]).transpose();
  t.assert(result.equals(reference), 'rotateAxis generated expected matrix');
  t.end();
});

// test('Matrix4.rotateXYZ', t => {
//   t.equals(typeof Matrix4.prototype.rotateXYZ, 'function');
//   const m = new Matrix4();
//   const result = m.rotateXYZ([1, 2, 3]);
//   const reference = new Matrix4([
//     0.411982245665683, -0.8337376517741568, -0.36763046292489926, 0,
//     -0.05872664492762098, -0.42691762127620736, 0.9023815854833308, 0,
//     -0.9092974268256817, -0.35017548837401463, -0.2248450953661529, 0,
//     0, 0, 0, 1
//   ]).transpose();
//   t.assert(result.equals(reference), 'rotateXYZ generated expected matrix');
//   t.end();
// });

test('Matrix4#transform', t => {
  const matrix = new Matrix4().translate([1, 2, 3]).scale([2, 2, 2]);

  const direction = [2, 2, 0, 0];
  const result = [4, 4, 0, 0];

  const point = [2, 2, 0, 1];
  const resultPoint = [5, 6, 3, 1];

  let p4 = matrix.transformDirection(direction);
  tapeEquals(t, p4, result, 'transform gave the right result');

  p4 = matrix.transformPoint(point);
  tapeEquals(t, p4, resultPoint, 'transform gave the right result');

  direction.length = 3;
  point.length = 3;
  result.length = 3;
  resultPoint.length = 3;
  let p3 = matrix.transformDirection(direction);
  tapeEquals(t, p3, result, 'transform gave the right result');

  p3 = matrix.transformPoint(point);
  tapeEquals(t, p3, resultPoint, 'transform gave the right result');

  direction.length = 2;
  point.length = 2;
  result.length = 2;
  resultPoint.length = 2;
  let p2 = matrix.transformDirection(direction);
  tapeEquals(t, p2, result, 'transform gave the right result');

  p2 = matrix.transformPoint(point);
  tapeEquals(t, p2, resultPoint, 'transform gave the right result');

  t.end();
});
