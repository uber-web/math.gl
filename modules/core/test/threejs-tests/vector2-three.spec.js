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

// This file is copied from THREE.js math test suite (MIT licensed)
// @author bhouston / http://exocortex.com
// @author TristanVALCKE / https://github.com/Itee

// @ts-nocheck
/* eslint-disable quotes, no-var */
import test from 'tape-catch';

import {Vector2, Matrix3} from '@math.gl/core';
import {x, y} from './constants';

// INSTANCING

test('three.js#Vector2#Instancing', assert => {
  let a = new Vector2();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');

  a = new Vector2(x, y);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#properties', assert => {
  var a = new Vector2(0, 0);
  var width = 100;
  var height = 200;

  assert.ok((a.width = width), 'Set width');
  assert.ok((a.height = height), 'Set height');

  a.set(width, height);
  assert.strictEqual(a.width, width, 'Get width');
  assert.strictEqual(a.height, height, 'Get height');
  assert.end();
});

test.skip('Vector2#Vector2#width', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#height', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

// PUBLIC STUFF
test.skip('Vector2#Vector2#isVector2', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test('three.js#Vector2#set', assert => {
  var a = new Vector2();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');

  a.set(x, y);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#setScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#setX', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#setY', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#setComponent', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#getComponent', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#clone', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test('three.js#Vector2#copy', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2().copy(a);
  assert.ok(b.x === x, 'Passed!');
  assert.ok(b.y === y, 'Passed!');

  // ensure that it is a true copy
  a.x = 0;
  a.y = -1;
  assert.ok(b.x === x, 'Passed!');
  assert.ok(b.y === y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#add', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(-x, -y);

  a.add(b);
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');

  var c = new Vector2().addVectors(b, b);
  assert.ok(c.x === -2 * x, 'Passed!');
  assert.ok(c.y === -2 * y, 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#addScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#addVectors', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test('three.js#Vector2#addScaledVector', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(2, 3);
  var s = 3;

  a.addScaledVector(b, s);
  assert.strictEqual(a.x, x + b.x * s, 'Check x');
  assert.strictEqual(a.y, y + b.y * s, 'Check y');
  assert.end();
});

test('three.js#Vector2#sub', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(-x, -y);

  a.sub(b);
  assert.ok(a.x === 2 * x, 'Passed!');
  assert.ok(a.y === 2 * y, 'Passed!');

  var c = new Vector2().subVectors(a, a);
  assert.ok(c.x === 0, 'Passed!');
  assert.ok(c.y === 0, 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#subScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#subVectors', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#multiply', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#multiplyScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#divide', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#divideScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

// TODO
test.skip('Vector2#applyMatrix3', assert => {
  var a = new Vector2(x, y);
  var m = new Matrix3().set(2, 3, 5, 7, 11, 13, 17, 19, 23);

  a.applyMatrix3(m);
  assert.strictEqual(a.x, 18, 'Check x');
  assert.strictEqual(a.y, 60, 'Check y');
  assert.end();
});

test.skip('Vector2#Vector2#min', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#max', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#clamp', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#clampScalar', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#clampLength', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#floor', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#ceil', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#round', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#roundToZero', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test('three.js#Vector2#negate', assert => {
  var a = new Vector2(x, y);

  a.negate();
  assert.ok(a.x === -x, 'Passed!');
  assert.ok(a.y === -y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#dot', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(-x, -y);
  var c = new Vector2();

  let result = a.dot(b);
  assert.ok(result === -x * x - y * y, 'Passed!');

  result = a.dot(c);
  assert.ok(result === 0, 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#lengthSq', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#length', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#manhattanLength', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);
  var c = new Vector2();

  assert.strictEqual(a.manhattanLength(), x, 'Positive component');
  assert.strictEqual(b.manhattanLength(), y, 'Negative component');
  assert.strictEqual(c.manhattanLength(), 0, 'Empty component');

  a.set(x, y);
  assert.strictEqual(a.manhattanLength(), Math.abs(x) + Math.abs(y), 'Two components');
  assert.end();
});

test('three.js#Vector2#normalize', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);

  a.normalize();
  assert.ok(a.len() === 1, 'Passed!');
  assert.ok(a.x === 1, 'Passed!');

  b.normalize();
  assert.ok(b.len() === 1, 'Passed!');
  assert.ok(b.y === -1, 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#angle', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#distanceTo', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#distanceToSquared', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#manhattanDistanceTo', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#setLength', assert => {
  let a = new Vector2(x, 0);

  assert.ok(a.len() === x, 'Passed!');
  a.setLength(y);
  assert.ok(a.len() === y, 'Passed!');

  a = new Vector2(0, 0);
  assert.ok(a.len() === 0, 'Passed!');
  a.setLength(y);
  assert.ok(a.len() === 0, 'Passed!');
  a.setLength();
  assert.ok(isNaN(a.len()), 'Passed!');
  assert.end();
});

test.skip('Vector2#Vector2#lerp', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test.skip('Vector2#Vector2#lerpVectors', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

test('three.js#Vector2#equals', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);

  assert.ok(a.x !== b.x, 'Passed!');
  assert.ok(a.y !== b.y, 'Passed!');

  assert.ok(!a.equals(b), 'Passed!');
  assert.ok(!b.equals(a), 'Passed!');

  a.copy(b);
  assert.ok(a.x === b.x, 'Passed!');
  assert.ok(a.y === b.y, 'Passed!');

  assert.ok(a.equals(b), 'Passed!');
  assert.ok(b.equals(a), 'Passed!');
  assert.end();
});

test('three.js#Vector2#fromArray', assert => {
  var a = new Vector2();
  var array = [1, 2, 3, 4];

  a.fromArray(array);
  assert.strictEqual(a.x, 1, 'No offset: check x');
  assert.strictEqual(a.y, 2, 'No offset: check y');

  a.fromArray(array, 2);
  assert.strictEqual(a.x, 3, 'With offset: check x');
  assert.strictEqual(a.y, 4, 'With offset: check y');
  assert.end();
});

test('three.js#Vector2#toArray', assert => {
  var a = new Vector2(x, y);

  let array = a.toArray();
  assert.strictEqual(array[0], x, 'No array, no offset: check x');
  assert.strictEqual(array[1], y, 'No array, no offset: check y');

  array = [];
  a.toArray(array);
  assert.strictEqual(array[0], x, 'With array, no offset: check x');
  assert.strictEqual(array[1], y, 'With array, no offset: check y');

  array = [];
  a.toArray(array, 1);
  assert.strictEqual(array[0], undefined, 'With array and offset: check [0]');
  assert.strictEqual(array[1], x, 'With array and offset: check x');
  assert.strictEqual(array[2], y, 'With array and offset: check y');
  assert.end();
});

/* TODO
test.skip('Vector2#fromBufferAttribute', assert => {
  var a = new Vector2();
  var attr = new BufferAttribute(new Float32Array([1, 2, 3, 4]), 2);

  a.fromBufferAttribute(attr, 0);
  assert.strictEqual(a.x, 1, 'Offset 0: check x');
  assert.strictEqual(a.y, 2, 'Offset 0: check y');

  a.fromBufferAttribute(attr, 1);
  assert.strictEqual(a.x, 3, 'Offset 1: check x');
  assert.strictEqual(a.y, 4, 'Offset 1: check y');
  assert.end();
});
*/

test.skip('Vector2#Vector2#rotateAround', assert => {
  assert.ok(false, "everything's gonna be alright");
  assert.end();
});

// TODO (Itee) refactor/split
test.skip('Vector2#setX,setY', assert => {
  var a = new Vector2();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');

  a.setX(x);
  a.setY(y);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#setComponent,getComponent', assert => {
  var a = new Vector2();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');

  a.setComponent(0, 1);
  a.setComponent(1, 2);
  assert.ok(a.getComponent(0) === 1, 'Passed!');
  assert.ok(a.getComponent(1) === 2, 'Passed!');
  assert.end();
});

test('three.js#Vector2#multiply/divide', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(-x, -y);

  a.multiplyScalar(-2);
  assert.ok(a.x === x * -2, 'Passed!');
  assert.ok(a.y === y * -2, 'Passed!');

  b.multiplyScalar(-2);
  assert.ok(b.x === 2 * x, 'Passed!');
  assert.ok(b.y === 2 * y, 'Passed!');

  a.divideScalar(-2);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');

  b.divideScalar(-2);
  assert.ok(b.x === -x, 'Passed!');
  assert.ok(b.y === -y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#min/max/clamp', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(-x, -y);
  var c = new Vector2();

  c.copy(a).min(b);
  assert.ok(c.x === -x, 'Passed!');
  assert.ok(c.y === -y, 'Passed!');

  c.copy(a).max(b);
  assert.ok(c.x === x, 'Passed!');
  assert.ok(c.y === y, 'Passed!');

  c.set(-2 * x, 2 * y);
  c.clamp(b, a);
  assert.ok(c.x === -x, 'Passed!');
  assert.ok(c.y === y, 'Passed!');

  c.set(-2 * x, 2 * x);
  c.clampScalar(-x, x);
  assert.equal(c.x, -x, 'scalar clamp x');
  assert.equal(c.y, x, 'scalar clamp y');
  assert.end();
});

test.skip('Vector2#rounding', assert => {
  assert.deepEqual(new Vector2(-0.1, 0.1).floor(), new Vector2(-1, 0), 'floor .1');
  assert.deepEqual(new Vector2(-0.5, 0.5).floor(), new Vector2(-1, 0), 'floor .5');
  assert.deepEqual(new Vector2(-0.9, 0.9).floor(), new Vector2(-1, 0), 'floor .9');

  assert.deepEqual(new Vector2(-0.1, 0.1).ceil(), new Vector2(0, 1), 'ceil .1');
  assert.deepEqual(new Vector2(-0.5, 0.5).ceil(), new Vector2(0, 1), 'ceil .5');
  assert.deepEqual(new Vector2(-0.9, 0.9).ceil(), new Vector2(0, 1), 'ceil .9');

  assert.deepEqual(new Vector2(-0.1, 0.1).round(), new Vector2(0, 0), 'round .1');
  assert.deepEqual(new Vector2(-0.5, 0.5).round(), new Vector2(0, 1), 'round .5');
  assert.deepEqual(new Vector2(-0.9, 0.9).round(), new Vector2(-1, 1), 'round .9');

  assert.deepEqual(new Vector2(-0.1, 0.1).roundToZero(), new Vector2(0, 0), 'roundToZero .1');
  assert.deepEqual(new Vector2(-0.5, 0.5).roundToZero(), new Vector2(0, 0), 'roundToZero .5');
  assert.deepEqual(new Vector2(-0.9, 0.9).roundToZero(), new Vector2(0, 0), 'roundToZero .9');
  assert.deepEqual(new Vector2(-1.1, 1.1).roundToZero(), new Vector2(-1, 1), 'roundToZero 1.1');
  assert.deepEqual(new Vector2(-1.5, 1.5).roundToZero(), new Vector2(-1, 1), 'roundToZero 1.5');
  assert.deepEqual(new Vector2(-1.9, 1.9).roundToZero(), new Vector2(-1, 1), 'roundToZero 1.9');
  assert.end();
});

test('three.js#Vector2#length/lengthSq', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);
  var c = new Vector2();

  assert.ok(a.len() === x, 'Passed!');
  assert.ok(a.lengthSq() === x * x, 'Passed!');
  assert.ok(b.len() === y, 'Passed!');
  assert.ok(b.lengthSq() === y * y, 'Passed!');
  assert.ok(c.len() === 0, 'Passed!');
  assert.ok(c.lengthSq() === 0, 'Passed!');

  a.set(x, y);
  assert.ok(a.len() === Math.sqrt(x * x + y * y), 'Passed!');
  assert.ok(a.lengthSq() === x * x + y * y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#distanceTo/distanceToSquared', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);
  var c = new Vector2();

  assert.ok(a.distanceTo(c) === x, 'Passed!');
  assert.ok(a.distanceToSquared(c) === x * x, 'Passed!');

  assert.ok(b.distanceTo(c) === y, 'Passed!');
  assert.ok(b.distanceToSquared(c) === y * y, 'Passed!');
  assert.end();
});

test('three.js#Vector2#lerp/clone', assert => {
  var a = new Vector2(x, 0);
  var b = new Vector2(0, -y);

  assert.ok(a.lerp(a, 0).equals(a.lerp(a, 0.5)), 'Passed!');
  assert.ok(a.lerp(a, 0).equals(a.lerp(a, 1)), 'Passed!');

  assert.ok(
    a
      .clone()
      .lerp(b, 0)
      .equals(a),
    'Passed!'
  );

  assert.ok(a.clone().lerp(b, 0.5).x === x * 0.5, 'Passed!');
  assert.ok(a.clone().lerp(b, 0.5).y === -y * 0.5, 'Passed!');

  assert.ok(
    a
      .clone()
      .lerp(b, 1)
      .equals(b),
    'Passed!'
  );
  assert.end();
});

test('three.js#Vector2#setComponent/getComponent exceptions', assert => {
  var a = new Vector2(0, 0);

  assert.throws(
    () => a.setComponent(2, 0),
    /index is out of range/,
    'setComponent with an out of range index throws Error'
  );
  assert.throws(
    () => a.getComponent(2),
    /index is out of range/,
    'getComponent with an out of range index throws Error'
  );
  assert.end();
});

test('three.js#Vector2#setScalar/addScalar/subScalar', assert => {
  var a = new Vector2(1, 1);
  var s = 3;

  a.setScalar(s);
  assert.strictEqual(a.x, s, 'setScalar: check x');
  assert.strictEqual(a.y, s, 'setScalar: check y');

  a.addScalar(s);
  assert.strictEqual(a.x, 2 * s, 'addScalar: check x');
  assert.strictEqual(a.y, 2 * s, 'addScalar: check y');

  a.subScalar(2 * s);
  assert.strictEqual(a.x, 0, 'subScalar: check x');
  assert.strictEqual(a.y, 0, 'subScalar: check y');
  assert.end();
});

test('three.js#Vector2#multiply/divide', assert => {
  var a = new Vector2(x, y);
  var b = new Vector2(2 * x, 2 * y);
  var c = new Vector2(4 * x, 4 * y);

  a.multiply(b);
  assert.strictEqual(a.x, x * b.x, 'multiply: check x');
  assert.strictEqual(a.y, y * b.y, 'multiply: check y');

  b.divide(c);
  assert.strictEqual(b.x, 0.5, 'divide: check x');
  assert.strictEqual(b.y, 0.5, 'divide: check y');
  assert.end();
});
