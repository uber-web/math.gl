// The MIT License
//
// Copyright © 2010-2018 three.js authors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// This file was copied from THREE.js math test suite (MIT licensed)
// @author bhouston / http://exocortex.com
// @author tschw
// @author TristanVALCKE / https://github.com/Itee

// @ts-nocheck
/* eslint-disable */
import test from 'tape-promise/tape';
import {Quaternion, Vector3, Vector4, Matrix4, Euler} from '@math.gl/core';
import {x, y, z, w, eps} from './constants';

const orders = ['XYZ', 'YXZ', 'ZXY', 'ZYX', 'YZX', 'XZY'];
// const eulerAngles = new Euler(0.1, -0.3, 0.25);

function qSub(a, b) {
  const result = new Quaternion();
  result.copy(a);

  result.x -= b.x;
  result.y -= b.y;
  result.z -= b.z;
  result.w -= b.w;

  return result;
}

function doSlerpObject(aArr, bArr, t) {
  const a = new Quaternion().fromArray(aArr),
    b = new Quaternion().fromArray(bArr),
    c = new Quaternion().fromArray(aArr);

  c.slerp(b, t);

  return {
    equals: function(x, y, z, w, maxError) {
      if (maxError === undefined) maxError = Number.EPSILON;

      return (
        Math.abs(x - c.x) <= maxError &&
        Math.abs(y - c.y) <= maxError &&
        Math.abs(z - c.z) <= maxError &&
        Math.abs(w - c.w) <= maxError
      );
    },

    length: c.len(),

    dotA: c.dot(a),
    dotB: c.dot(b)
  };
}

function doSlerpArray(a, b, t) {
  const result = [0, 0, 0, 0];

  Quaternion.slerpFlat(result, 0, a, 0, b, 0, t);

  function arrDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  return {
    equals: function(x, y, z, w, maxError) {
      if (maxError === undefined) maxError = Number.EPSILON;

      return (
        Math.abs(x - result[0]) <= maxError &&
        Math.abs(y - result[1]) <= maxError &&
        Math.abs(z - result[2]) <= maxError &&
        Math.abs(w - result[3]) <= maxError
      );
    },

    length: Math.sqrt(arrDot(result, result)),

    dotA: arrDot(result, a),
    dotB: arrDot(result, b)
  };
}

function slerpTestSkeleton(doSlerp, maxError, t) {
  const a = [0.6753410084407496, 0.4087830051091744, 0.32856700410659473, 0.5185120064806223];
  const b = [0.6602792107657797, 0.43647413932562285, 0.35119011210236006, 0.5001871596632682];

  let maxNormError = 0;

  function isNormal(result) {
    const normError = Math.abs(1 - result.length);
    maxNormError = Math.max(maxNormError, normError);
    return normError <= maxError;
  }

  let result;

  result = doSlerp(a, b, 0);
  t.ok(result.equals(a[0], a[1], a[2], a[3], 0), 'Exactly A @ t = 0');

  result = doSlerp(a, b, 1);
  t.ok(result.equals(b[0], b[1], b[2], b[3], 0), 'Exactly B @ t = 1');

  result = doSlerp(a, b, 0.5);
  t.ok(Math.abs(result.dotA - result.dotB) <= Number.EPSILON, 'Symmetry at 0.5');
  t.ok(isNormal(result), 'Approximately normal (at 0.5)');

  result = doSlerp(a, b, 0.25);
  t.ok(result.dotA > result.dotB, 'Interpolating at 0.25');
  t.ok(isNormal(result), 'Approximately normal (at 0.25)');

  result = doSlerp(a, b, 0.75);
  t.ok(result.dotA < result.dotB, 'Interpolating at 0.75');
  t.ok(isNormal(result), 'Approximately normal (at 0.75)');

  const D = Math.SQRT1_2;

  result = doSlerp([1, 0, 0, 0], [0, 0, 1, 0], 0.5);
  t.ok(result.equals(D, 0, D, 0), 'X/Z diagonal from axes');
  t.ok(isNormal(result), 'Approximately normal (X/Z diagonal)');

  result = doSlerp([0, D, 0, D], [0, -D, 0, D], 0.5);
  t.ok(result.equals(0, 0, 0, 1), 'W-Unit from diagonals');
  t.ok(isNormal(result), 'Approximately normal (W-Unit)');
}

function changeEulerOrder(euler, order) {
  return new Euler(euler.x, euler.y, euler.z, order);
}

// INSTANCING
test('three.js#Quaternion#Instancing', t => {
  let a = new Quaternion();
  t.ok(a.x == 0, 'Passed!');
  t.ok(a.y == 0, 'Passed!');
  t.ok(a.z == 0, 'Passed!');
  t.ok(a.w == 1, 'Passed!');

  a = new Quaternion(x, y, z, w);
  t.ok(a.x === x, 'Passed!');
  t.ok(a.y === y, 'Passed!');
  t.ok(a.z === z, 'Passed!');
  t.ok(a.w === w, 'Passed!');
  t.end();
});

// STATIC STUFF
test('three.js#Quaternion#slerp', t => {
  slerpTestSkeleton(doSlerpObject, Number.EPSILON, t);
  t.end();
});

test.skip('three.js#Quaternion#slerpFlat - NOT IMPLEMENTED', t => {
  slerpTestSkeleton(doSlerpArray, Number.EPSILON, t);
  t.end();
});

// PROPERTIES
test('three.js#Quaternion#properties', t => {
  const a = new Quaternion();
  // a.onChange(function() {
  //   t.ok(true, 'onChange called');
  // });

  a.x = x;
  a.y = y;
  a.z = z;
  a.w = w;

  t.strictEqual(a.x, x, 'Check x');
  t.strictEqual(a.y, y, 'Check y');
  t.strictEqual(a.z, z, 'Check z');
  t.strictEqual(a.w, w, 'Check w');
  t.end();
});

// PUBLIC STUFF
test('three.js#Quaternion#set', t => {
  const a = new Quaternion();
  t.ok(a.x == 0, 'Passed!');
  t.ok(a.y == 0, 'Passed!');
  t.ok(a.z == 0, 'Passed!');
  t.ok(a.w == 1, 'Passed!');

  a.set(x, y, z, w);
  t.ok(a.x == x, 'Passed!');
  t.ok(a.y == y, 'Passed!');
  t.ok(a.z === z, 'Passed!');
  t.ok(a.w === w, 'Passed!');
  t.end();
});

test('three.js#Quaternion#clone', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

test('three.js#Quaternion#copy', t => {
  const a = new Quaternion(x, y, z, w);
  const b = new Quaternion().copy(a);
  t.ok(b.x == x, 'Passed!');
  t.ok(b.y == y, 'Passed!');
  t.ok(b.z == z, 'Passed!');
  t.ok(b.w == w, 'Passed!');

  // ensure that it is a true copy
  a.x = 0;
  a.y = -1;
  a.z = 0;
  a.w = -1;
  t.ok(b.x == x, 'Passed!');
  t.ok(b.y == y, 'Passed!');
  t.end();
});

test.skip('three.js#Quaternion#setFromEuler/setFromQuaternion', t => {
  const angles = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];

  // ensure euler conversion to/from Quaternion matches.
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < angles.length; j++) {
      const eulers2 = new Euler().setFromQuaternion(
        new Quaternion().setFromEuler(new Euler(angles[j].x, angles[j].y, angles[j].z, orders[i])),
        orders[i]
      );
      const newAngle = new Vector3(eulers2.x, eulers2.y, eulers2.z);
      t.ok(newAngle.distanceTo(angles[j]) < 0.001, 'Passed!');
    }
  }
  t.end();
});

test('three.js#Quaternion#setFromAxisAngle', t => {
  // TODO: find cases to validate.
  // t.ok( true, "Passed!" );

  const zero = new Quaternion();

  let a = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), 0);
  t.ok(a.equals(zero), 'Passed!');
  a = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), 0);
  t.ok(a.equals(zero), 'Passed!');
  a = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), 0);
  t.ok(a.equals(zero), 'Passed!');

  const b1 = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI);
  t.ok(!a.equals(b1), 'Passed!');
  const b2 = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI);
  t.ok(!a.equals(b2), 'Passed!');

  b1.multiply(b2);
  t.ok(a.equals(b1), 'Passed!');
  t.end();
});

test.skip('Quaternion#setFromEuler/setFromRotationMatrix', t => {
  // ensure euler conversion for Quaternion matches that of Matrix4
  for (let i = 0; i < orders.length; i++) {
    const q = new Quaternion().setFromEuler(changeEulerOrder(eulerAngles, orders[i]));
    const m = new Matrix4().makeRotationFromEuler(changeEulerOrder(eulerAngles, orders[i]));
    const q2 = new Quaternion().setFromRotationMatrix(m);

    t.ok(qSub(q, q2).len() < 0.001, 'Passed!');
  }
  t.end();
});

test.skip('three.js#Quaternion#setFromRotationMatrix', t => {
  // contrived examples purely to please the god of code coverage...
  // match conditions in constious 'else [if]' blocks

  const a = new Quaternion();
  let q = new Quaternion(-9, -2, 3, -4).normalize();
  const m = new Matrix4().makeRotationFromQuaternion(q);
  let expected = new Vector4(
    0.8581163303210332,
    0.19069251784911848,
    -0.2860387767736777,
    0.38138503569823695
  );

  a.setFromRotationMatrix(m);
  t.ok(Math.abs(a.x - expected.x) <= eps, 'm11 > m22 && m11 > m33: check x');
  t.ok(Math.abs(a.y - expected.y) <= eps, 'm11 > m22 && m11 > m33: check y');
  t.ok(Math.abs(a.z - expected.z) <= eps, 'm11 > m22 && m11 > m33: check z');
  t.ok(Math.abs(a.w - expected.w) <= eps, 'm11 > m22 && m11 > m33: check w');

  q = new Quaternion(-1, -2, 1, -1).normalize();
  m.makeRotationFromQuaternion(q);
  expected = new Vector4(
    0.37796447300922714,
    0.7559289460184544,
    -0.37796447300922714,
    0.37796447300922714
  );

  a.setFromRotationMatrix(m);
  t.ok(Math.abs(a.x - expected.x) <= eps, 'm22 > m33: check x');
  t.ok(Math.abs(a.y - expected.y) <= eps, 'm22 > m33: check y');
  t.ok(Math.abs(a.z - expected.z) <= eps, 'm22 > m33: check z');
  t.ok(Math.abs(a.w - expected.w) <= eps, 'm22 > m33: check w');
  t.end();
});

test.skip('three.js#Quaternion#setFromUnitVectors', t => {
  const a = new Quaternion();
  const b = new Vector3(1, 0, 0);
  const c = new Vector3(0, 1, 0);
  const expected = new Quaternion(0, 0, Math.sqrt(2) / 2, Math.sqrt(2) / 2);

  a.setFromUnitVectors(b, c);
  t.ok(Math.abs(a.x - expected.x) <= eps, 'Check x');
  t.ok(Math.abs(a.y - expected.y) <= eps, 'Check y');
  t.ok(Math.abs(a.z - expected.z) <= eps, 'Check z');
  t.ok(Math.abs(a.w - expected.w) <= eps, 'Check w');
  t.end();
});

test('three.js#Quaternion#inverse/conjugate', t => {
  const a = new Quaternion(x, y, z, w);

  // TODO: add better validation here.

  const b = a.clone().conjugate();

  t.ok(a.x == -b.x, 'Passed!');
  t.ok(a.y == -b.y, 'Passed!');
  t.ok(a.z == -b.z, 'Passed!');
  t.ok(a.w == b.w, 'Passed!');
  t.end();
});

test('three.js#Quaternion#dot', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

test('three.js#Quaternion#normalize/length/lengthSq', t => {
  const a = new Quaternion(x, y, z, w);

  t.ok(a.len() != 1, 'Passed!');
  t.ok(a.lengthSq() != 1, 'Passed!');
  a.normalize();
  t.ok(a.len() == 1, 'Passed!');
  t.ok(a.lengthSq() == 1, 'Passed!');

  a.set(0, 0, 0, 0);
  t.ok(a.lengthSq() == 0, 'Passed!');
  t.ok(a.len() == 0, 'Passed!');
  a.normalize();
  t.ok(a.lengthSq() == 1, 'Passed!');
  t.ok(a.len() == 1, 'Passed!');
  t.end();
});

test.skip('Quaternion#multiplyQuaternions/multiply', t => {
  const angles = [new Euler(1, 0, 0), new Euler(0, 1, 0), new Euler(0, 0, 1)];

  const q1 = new Quaternion().setFromEuler(changeEulerOrder(angles[0], 'XYZ'));
  const q2 = new Quaternion().setFromEuler(changeEulerOrder(angles[1], 'XYZ'));
  const q3 = new Quaternion().setFromEuler(changeEulerOrder(angles[2], 'XYZ'));

  const q = new Quaternion().multiplyQuaternions(q1, q2).multiply(q3);

  const m1 = new Matrix4().makeRotationFromEuler(changeEulerOrder(angles[0], 'XYZ'));
  const m2 = new Matrix4().makeRotationFromEuler(changeEulerOrder(angles[1], 'XYZ'));
  const m3 = new Matrix4().makeRotationFromEuler(changeEulerOrder(angles[2], 'XYZ'));

  const m = new Matrix4().multiplyMatrices(m1, m2).multiply(m3);

  const qFromM = new Quaternion().setFromRotationMatrix(m);

  t.ok(qSub(q, qFromM).len() < 0.001, 'Passed!');
  t.end();
});

test('three.js#Quaternion#premultiply', t => {
  const a = new Quaternion(x, y, z, w);
  const b = new Quaternion(2 * x, -y, -2 * z, w);
  const expected = new Quaternion(42, -32, -2, 58);

  a.premultiply(b);
  t.ok(Math.abs(a.x - expected.x) <= eps, 'Check x');
  t.ok(Math.abs(a.y - expected.y) <= eps, 'Check y');
  t.ok(Math.abs(a.z - expected.z) <= eps, 'Check z');
  t.ok(Math.abs(a.w - expected.w) <= eps, 'Check w');
  t.end();
});

test('three.js#Quaternion#slerp', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

test('three.js#Quaternion#equals', t => {
  const a = new Quaternion(x, y, z, w);
  const b = new Quaternion(-x, -y, -z, -w);

  t.ok(a.x != b.x, 'Passed!');
  t.ok(a.y != b.y, 'Passed!');

  t.ok(!a.equals(b), 'Passed!');
  t.ok(!b.equals(a), 'Passed!');

  a.copy(b);
  t.ok(a.x == b.x, 'Passed!');
  t.ok(a.y == b.y, 'Passed!');

  t.ok(a.equals(b), 'Passed!');
  t.ok(b.equals(a), 'Passed!');
  t.end();
});

test('three.js#Quaternion#fromArray', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

test('three.js#Quaternion#toArray', t => {
  const a = new Quaternion(x, y, z, w);

  let array = a.toArray();
  t.strictEqual(array[0], x, 'No array, no offset: check x');
  t.strictEqual(array[1], y, 'No array, no offset: check y');
  t.strictEqual(array[2], z, 'No array, no offset: check z');
  t.strictEqual(array[3], w, 'No array, no offset: check w');

  array = [];
  a.toArray(array);
  t.strictEqual(array[0], x, 'With array, no offset: check x');
  t.strictEqual(array[1], y, 'With array, no offset: check y');
  t.strictEqual(array[2], z, 'With array, no offset: check z');
  t.strictEqual(array[3], w, 'With array, no offset: check w');

  array = [];
  a.toArray(array, 1);
  t.strictEqual(array[0], undefined, 'With array and offset: check [0]');
  t.strictEqual(array[1], x, 'With array and offset: check x');
  t.strictEqual(array[2], y, 'With array and offset: check y');
  t.strictEqual(array[3], z, 'With array and offset: check z');
  t.strictEqual(array[4], w, 'With array and offset: check w');
  t.end();
});

test.skip('three.js#Quaternion#onChange - NOT IMPLEMENTED', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Quaternion#onChangeCallback - NOT IMPLEMENTED', t => {
  t.ok(true, "everything's gonna be alright");
  t.end();
});

// OTHERS
test.skip('Quaternion#multiplyVector3', t => {
  const angles = [new Euler(1, 0, 0), new Euler(0, 1, 0), new Euler(0, 0, 1)];

  // ensure euler conversion for Quaternion matches that of Matrix4
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < angles.length; j++) {
      const q = new Quaternion().setFromEuler(changeEulerOrder(angles[j], orders[i]));
      const m = new Matrix4().makeRotationFromEuler(changeEulerOrder(angles[j], orders[i]));

      const v0 = new Vector3(1, 0, 0);
      const qv = v0.clone().applyQuaternion(q);
      const mv = v0.clone().applyMatrix4(m);

      t.ok(qv.distanceTo(mv) < 0.001, 'Passed!');
    }
  }
  t.end();
});
