// @author bhouston / http://exocortex.com
// @author TristanVALCKE / https://github.com/Itee

/* eslint-disable quotes, no-var */
import test from 'tape-catch';

import Vector4 from 'math.gl/vector4';
import Matrix4 from 'math.gl/matrix4';
import {x, y, z, w, eps} from './constants';

// INSTANCING
test('Vector4#Instancing', assert => {
  let a = new Vector4();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');
  assert.ok(a.z === 0, 'Passed!');
  assert.skip(a.w === 1, 'Passed!');

  a = new Vector4(x, y, z, w);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.ok(a.z === z, 'Passed!');
  assert.ok(a.w === w, 'Passed!');
  assert.end();
});

test('Vector4#set', assert => {
  const a = new Vector4();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');
  assert.ok(a.z === 0, 'Passed!');
  assert.skip(a.w === 1, 'Passed!');

  a.set(x, y, z, w);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.ok(a.z === z, 'Passed!');
  assert.ok(a.w === w, 'Passed!');
  assert.end();
});

test('Vector4#setScalar', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setX', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setY', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setZ', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setW', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setComponent', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#getComponent', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#clone', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#copy', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4().copy(a);
  assert.ok(b.x === x, 'Passed!');
  assert.ok(b.y === y, 'Passed!');
  assert.ok(b.z === z, 'Passed!');
  assert.ok(b.w === w, 'Passed!');

  // ensure that it is a true copy
  a.x = 0;
  a.y = -1;
  a.z = -2;
  a.w = -3;
  assert.ok(b.x === x, 'Passed!');
  assert.ok(b.y === y, 'Passed!');
  assert.ok(b.z === z, 'Passed!');
  assert.ok(b.w === w, 'Passed!');
  assert.end();
});

test('Vector4#add', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4(-x, -y, -z, -w);

  a.add(b);
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');
  assert.ok(a.z === 0, 'Passed!');
  assert.ok(a.w === 0, 'Passed!');

  var c = new Vector4().addVectors(b, b);
  assert.ok(c.x === -2 * x, 'Passed!');
  assert.ok(c.y === -2 * y, 'Passed!');
  assert.ok(c.z === -2 * z, 'Passed!');
  assert.ok(c.w === -2 * w, 'Passed!');
  assert.end();
});

test('Vector4#addScalar', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#addVectors', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#addScaledVector', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4(6, 7, 8, 9);
  const s = 3;

  a.addScaledVector(b, s);
  assert.strictEqual(a.x, x + b.x * s, 'Check x');
  assert.strictEqual(a.y, y + b.y * s, 'Check y');
  assert.strictEqual(a.z, z + b.z * s, 'Check z');
  assert.strictEqual(a.w, w + b.w * s, 'Check w');
  assert.end();
});

test('Vector4#sub', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4(-x, -y, -z, -w);

  a.sub(b);
  assert.ok(a.x === 2 * x, 'Passed!');
  assert.ok(a.y === 2 * y, 'Passed!');
  assert.ok(a.z === 2 * z, 'Passed!');
  assert.ok(a.w === 2 * w, 'Passed!');

  const c = new Vector4().subVectors(a, a);
  assert.ok(c.x === 0, 'Passed!');
  assert.ok(c.y === 0, 'Passed!');
  assert.ok(c.z === 0, 'Passed!');
  assert.ok(c.w === 0, 'Passed!');
  assert.end();
});

test('Vector4#subScalar', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#subVectors', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#multiplyScalar', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#applyMatrix4', assert => {
  var a = new Vector4(x, y, z, w);
  var m = new Matrix4().makeRotationX(Math.PI);
  var expected = new Vector4(2, -3, -4, 5);

  a.applyMatrix4(m);
  assert.ok(Math.abs(a.x - expected.x) <= eps, 'Rotation matrix: check x');
  assert.ok(Math.abs(a.y - expected.y) <= eps, 'Rotation matrix: check y');
  assert.ok(Math.abs(a.z - expected.z) <= eps, 'Rotation matrix: check z');
  assert.ok(Math.abs(a.w - expected.w) <= eps, 'Rotation matrix: check w');

  a.set(x, y, z, w);
  m.makeTranslation(5, 7, 11);
  expected.set(27, 38, 59, 5);

  a.applyMatrix4(m);
  assert.ok(Math.abs(a.x - expected.x) <= eps, 'Translation matrix: check x');
  assert.ok(Math.abs(a.y - expected.y) <= eps, 'Translation matrix: check y');
  assert.ok(Math.abs(a.z - expected.z) <= eps, 'Translation matrix: check z');
  assert.ok(Math.abs(a.w - expected.w) <= eps, 'Translation matrix: check w');

  a.set(x, y, z, w);
  // m.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1);
  m.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0);
  expected.set(2, 3, 4, 4);

  /* TODO
  a.applyMatrix4(m);
  assert.ok(Math.abs(a.x - expected.x) <= eps, 'Custom matrix: check x');
  assert.ok(Math.abs(a.y - expected.y) <= eps, 'Custom matrix: check y');
  assert.ok(Math.abs(a.z - expected.z) <= eps, 'Custom matrix: check z');
  assert.ok(Math.abs(a.w - expected.w) <= eps, 'Custom matrix: check w');

  a.set(x, y, z, w);
  m.set(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
  expected.set(68, 224, 442, 664);

  a.applyMatrix4(m);
  assert.ok(Math.abs(a.x - expected.x) <= eps, 'Bogus matrix: check x');
  assert.ok(Math.abs(a.y - expected.y) <= eps, 'Bogus matrix: check y');
  assert.ok(Math.abs(a.z - expected.z) <= eps, 'Bogus matrix: check z');
  assert.ok(Math.abs(a.w - expected.w) <= eps, 'Bogus matrix: check w');
  */
  assert.end();
});

test('Vector4#divideScalar', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setAxisAngleFromQuaternion', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#setAxisAngleFromRotationMatrix', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#min', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#max', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#clamp', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#clampScalar', assert => {
  var a = new Vector4(-0.1, 0.01, 0.5, 1.5);
  var clamped = new Vector4(0.1, 0.1, 0.5, 1.0);

  a.clampScalar(0.1, 1.0);
  assert.ok(Math.abs(a.x - clamped.x) <= eps, 'Check x');
  assert.ok(Math.abs(a.y - clamped.y) <= eps, 'Check y');
  assert.ok(Math.abs(a.z - clamped.z) <= eps, 'Check z');
  assert.ok(Math.abs(a.w - clamped.w) <= eps, 'Check w');
  assert.end();
});

test('Vector4#clampLength', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#floor', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#ceil', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#round', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#roundToZero', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#negate', assert => {
  var a = new Vector4(x, y, z, w);

  a.negate();
  assert.ok(a.x === -x, 'Passed!');
  assert.ok(a.y === -y, 'Passed!');
  assert.ok(a.z === -z, 'Passed!');
  assert.ok(a.w === -w, 'Passed!');
  assert.end();
});

test('Vector4#dot', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4(-x, -y, -z, -w);
  const c = new Vector4(0, 0, 0, 0);

  let result = a.dot(b);
  assert.ok(result === -x * x - y * y - z * z - w * w, 'Passed!');

  result = a.dot(c);
  assert.ok(result === 0, 'Passed!');
  assert.end();
});

test('Vector4#lengthSq', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#length', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test.skip('Vector4#manhattanLength', assert => {
  const a = new Vector4(x, 0, 0, 0);
  const b = new Vector4(0, -y, 0, 0);
  const c = new Vector4(0, 0, z, 0);
  const d = new Vector4(0, 0, 0, w);
  const e = new Vector4(0, 0, 0, 0);

  assert.ok(a.manhattanLength() === x, 'Positive x');
  assert.ok(b.manhattanLength() === y, 'Negative y');
  assert.ok(c.manhattanLength() === z, 'Positive z');
  assert.ok(d.manhattanLength() === w, 'Positive w');
  assert.ok(e.manhattanLength() === 0, 'Empty initialization');

  a.set(x, y, z, w);
  assert.ok(
    a.manhattanLength() === Math.abs(x) + Math.abs(y) + Math.abs(z) + Math.abs(w),
    'All components'
  );
  assert.end();
});

test('Vector4#normalize', assert => {
  const a = new Vector4(x, 0, 0, 0);
  const b = new Vector4(0, -y, 0, 0);
  const c = new Vector4(0, 0, z, 0);
  const d = new Vector4(0, 0, 0, -w);

  a.normalize();
  assert.ok(a.len() === 1, 'Passed!');
  assert.ok(a.x === 1, 'Passed!');

  b.normalize();
  assert.ok(b.len() === 1, 'Passed!');
  assert.ok(b.y === -1, 'Passed!');

  c.normalize();
  assert.ok(c.len() === 1, 'Passed!');
  assert.ok(c.z === 1, 'Passed!');

  d.normalize();
  assert.ok(d.len() === 1, 'Passed!');
  assert.ok(d.w === -1, 'Passed!');
  assert.end();
});

test.skip('Vector4#setLength', assert => {
  let a = new Vector4(x, 0, 0, 0);

  assert.ok(a.len() === x, 'Passed!');
  a.setLength(y);
  assert.ok(a.len() === y, 'Passed!');

  a = new Vector4(0, 0, 0, 0);
  assert.ok(a.len() === 0, 'Passed!');
  a.setLength(y);
  assert.ok(a.len() === 0, 'Passed!');
  a.setLength();
  assert.ok(isNaN(a.len()), 'Passed!');
  assert.end();
});

test('Vector4#lerp', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#lerpVectors', assert => {
  assert.pass("everything's gonna be alright");
  assert.end();
});

test('Vector4#equals', assert => {
  const a = new Vector4(x, 0, z, 0);
  const b = new Vector4(0, -y, 0, -w);

  assert.ok(a.x !== b.x, 'Passed!');
  assert.ok(a.y !== b.y, 'Passed!');
  assert.ok(a.z !== b.z, 'Passed!');
  assert.ok(a.w !== b.w, 'Passed!');

  assert.ok(!a.equals(b), 'Passed!');
  assert.ok(!b.equals(a), 'Passed!');

  a.copy(b);
  assert.ok(a.x === b.x, 'Passed!');
  assert.ok(a.y === b.y, 'Passed!');
  assert.ok(a.z === b.z, 'Passed!');
  assert.ok(a.w === b.w, 'Passed!');

  assert.ok(a.equals(b), 'Passed!');
  assert.ok(b.equals(a), 'Passed!');
  assert.end();
});

test('Vector4#fromArray', assert => {
  const a = new Vector4();
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  a.fromArray(array);
  assert.strictEqual(a.x, 1, 'No offset: check x');
  assert.strictEqual(a.y, 2, 'No offset: check y');
  assert.strictEqual(a.z, 3, 'No offset: check z');
  assert.strictEqual(a.w, 4, 'No offset: check w');

  a.fromArray(array, 4);
  assert.strictEqual(a.x, 5, 'With offset: check x');
  assert.strictEqual(a.y, 6, 'With offset: check y');
  assert.strictEqual(a.z, 7, 'With offset: check z');
  assert.strictEqual(a.w, 8, 'With offset: check w');
  assert.end();
});

test('Vector4#toArray', assert => {
  const a = new Vector4(x, y, z, w);

  let array = a.toArray();
  assert.strictEqual(array[0], x, 'No array, no offset: check x');
  assert.strictEqual(array[1], y, 'No array, no offset: check y');
  assert.strictEqual(array[2], z, 'No array, no offset: check z');
  assert.strictEqual(array[3], w, 'No array, no offset: check w');

  array = [];
  a.toArray(array);
  assert.strictEqual(array[0], x, 'With array, no offset: check x');
  assert.strictEqual(array[1], y, 'With array, no offset: check y');
  assert.strictEqual(array[2], z, 'With array, no offset: check z');
  assert.strictEqual(array[3], w, 'With array, no offset: check w');

  array = [];
  a.toArray(array, 1);
  assert.strictEqual(array[0], undefined, 'With array and offset: check [0]');
  assert.strictEqual(array[1], x, 'With array and offset: check x');
  assert.strictEqual(array[2], y, 'With array and offset: check y');
  assert.strictEqual(array[3], z, 'With array and offset: check z');
  assert.strictEqual(array[4], w, 'With array and offset: check w');
  assert.end();
});

/*
test.skip('Vector4#fromBufferAttribute', assert => {
  var a = new Vector4();
  var attr = new BufferAttribute(new Float32Array([1, 2, 3, 4, 5, 6, 7, 8]), 4);

  a.fromBufferAttribute(attr, 0);
  assert.strictEqual(a.x, 1, 'Offset 0: check x');
  assert.strictEqual(a.y, 2, 'Offset 0: check y');
  assert.strictEqual(a.z, 3, 'Offset 0: check z');
  assert.strictEqual(a.w, 4, 'Offset 0: check w');

  a.fromBufferAttribute(attr, 1);
  assert.strictEqual(a.x, 5, 'Offset 1: check x');
  assert.strictEqual(a.y, 6, 'Offset 1: check y');
  assert.strictEqual(a.z, 7, 'Offset 1: check z');
  assert.strictEqual(a.w, 8, 'Offset 1: check w');
});
*/

// TODO (Itee) refactor/split
test.skip('Vector4#setX,setY,setZ,setW', assert => {
  var a = new Vector4();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');
  assert.ok(a.z === 0, 'Passed!');
  assert.ok(a.w === 1, 'Passed!');

  a.setX(x);
  a.setY(y);
  a.setZ(z);
  a.setW(w);

  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.ok(a.z === z, 'Passed!');
  assert.ok(a.w === w, 'Passed!');
  assert.end();
});

test('Vector4#setComponent,getComponent', assert => {
  var a = new Vector4();
  assert.ok(a.x === 0, 'Passed!');
  assert.ok(a.y === 0, 'Passed!');
  assert.ok(a.z === 0, 'Passed!');
  assert.skip(a.w === 1, 'Passed!');

  a.setComponent(0, 1);
  a.setComponent(1, 2);
  a.setComponent(2, 3);
  a.setComponent(3, 4);
  assert.ok(a.getComponent(0) === 1, 'Passed!');
  assert.ok(a.getComponent(1) === 2, 'Passed!');
  assert.ok(a.getComponent(2) === 3, 'Passed!');
  assert.ok(a.getComponent(3) === 4, 'Passed!');
  assert.end();
});

test('Vector4#setComponent/getComponent exceptions', assert => {
  var a = new Vector4();

  assert.throws(
    () => a.setComponent(4, 0),
    /index is out of range/,
    'setComponent with an out of range index throws Error'
  );
  assert.throws(
    () => a.getComponent(4),
    /index is out of range/,
    'getComponent with an out of range index throws Error'
  );
  assert.end();
});

test('Vector4#setScalar/addScalar/subScalar', assert => {
  var a = new Vector4();
  var s = 3;

  a.setScalar(s);
  assert.strictEqual(a.x, s, 'setScalar: check x');
  assert.strictEqual(a.y, s, 'setScalar: check y');
  assert.strictEqual(a.z, s, 'setScalar: check z');
  assert.strictEqual(a.w, s, 'setScalar: check w');

  a.addScalar(s);
  assert.strictEqual(a.x, 2 * s, 'addScalar: check x');
  assert.strictEqual(a.y, 2 * s, 'addScalar: check y');
  assert.strictEqual(a.z, 2 * s, 'addScalar: check z');
  assert.strictEqual(a.w, 2 * s, 'addScalar: check w');

  a.subScalar(2 * s);
  assert.strictEqual(a.x, 0, 'subScalar: check x');
  assert.strictEqual(a.y, 0, 'subScalar: check y');
  assert.strictEqual(a.z, 0, 'subScalar: check z');
  assert.strictEqual(a.w, 0, 'subScalar: check w');
  assert.end();
});

test('Vector4#multiply/divide', assert => {
  var a = new Vector4(x, y, z, w);
  var b = new Vector4(-x, -y, -z, -w);

  a.multiplyScalar(-2);
  assert.ok(a.x === x * -2, 'Passed!');
  assert.ok(a.y === y * -2, 'Passed!');
  assert.ok(a.z === z * -2, 'Passed!');
  assert.ok(a.w === w * -2, 'Passed!');

  b.multiplyScalar(-2);
  assert.ok(b.x === 2 * x, 'Passed!');
  assert.ok(b.y === 2 * y, 'Passed!');
  assert.ok(b.z === 2 * z, 'Passed!');
  assert.ok(b.w === 2 * w, 'Passed!');

  a.divideScalar(-2);
  assert.ok(a.x === x, 'Passed!');
  assert.ok(a.y === y, 'Passed!');
  assert.ok(a.z === z, 'Passed!');
  assert.ok(a.w === w, 'Passed!');

  b.divideScalar(-2);
  assert.ok(b.x === -x, 'Passed!');
  assert.ok(b.y === -y, 'Passed!');
  assert.ok(b.z === -z, 'Passed!');
  assert.ok(b.w === -w, 'Passed!');
  assert.end();
});

test('Vector4#min/max/clamp', assert => {
  const a = new Vector4(x, y, z, w);
  const b = new Vector4(-x, -y, -z, -w);
  const c = new Vector4();

  c.copy(a).min(b);
  assert.ok(c.x === -x, 'Passed!');
  assert.ok(c.y === -y, 'Passed!');
  assert.ok(c.z === -z, 'Passed!');
  assert.ok(c.w === -w, 'Passed!');

  c.copy(a).max(b);
  assert.ok(c.x === x, 'Passed!');
  assert.ok(c.y === y, 'Passed!');
  assert.ok(c.z === z, 'Passed!');
  assert.ok(c.w === w, 'Passed!');

  c.set(-2 * x, 2 * y, -2 * z, 2 * w);
  c.clamp(b, a);
  assert.ok(c.x === -x, 'Passed!');
  assert.ok(c.y === y, 'Passed!');
  assert.ok(c.z === -z, 'Passed!');
  assert.ok(c.w === w, 'Passed!');
  assert.end();
});

test('Vector4#length/lengthSq', assert => {
  const a = new Vector4(x, 0, 0, 0);
  const b = new Vector4(0, -y, 0, 0);
  const c = new Vector4(0, 0, z, 0);
  const d = new Vector4(0, 0, 0, w);
  const e = new Vector4(0, 0, 0, 0);

  assert.ok(a.len() === x, 'Passed!');
  assert.ok(a.lengthSq() === x * x, 'Passed!');
  assert.ok(b.len() === y, 'Passed!');
  assert.ok(b.lengthSq() === y * y, 'Passed!');
  assert.ok(c.len() === z, 'Passed!');
  assert.ok(c.lengthSq() === z * z, 'Passed!');
  assert.ok(d.len() === w, 'Passed!');
  assert.ok(d.lengthSq() === w * w, 'Passed!');
  assert.ok(e.len() === 0, 'Passed!');
  assert.ok(e.lengthSq() === 0, 'Passed!');

  a.set(x, y, z, w);
  assert.ok(a.len() === Math.sqrt(x * x + y * y + z * z + w * w), 'Passed!');
  assert.ok(a.lengthSq() === x * x + y * y + z * z + w * w, 'Passed!');
  assert.end();
});

test('Vector4#lerp/clone', assert => {
  const a = new Vector4(x, 0, z, 0);
  const b = new Vector4(0, -y, 0, -w);

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
  assert.ok(a.clone().lerp(b, 0.5).z === z * 0.5, 'Passed!');
  assert.ok(a.clone().lerp(b, 0.5).w === -w * 0.5, 'Passed!');

  assert.ok(
    a
      .clone()
      .lerp(b, 1)
      .equals(b),
    'Passed!'
  );
  assert.end();
});
