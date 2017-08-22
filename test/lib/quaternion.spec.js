/* eslint-disable max-statements */
import {Quaternion} from 'math.gl';
import test from 'tape-catch';

test('Quaternion#import', t => {
  t.equals(typeof Quaternion, 'function');
  t.end();
});

test('Quaternion#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Quaternion()));
  t.end();
});

test('Quaternion#methods', t => {
  const q = new Quaternion();
  t.equals(q[0], 0);
  t.equals(q[1], 0);
  t.equals(q[2], 0);
  t.equals(q[3], 1);
  t.equals(typeof q.add, 'function');
  t.equals(typeof q.clone, 'function');
  t.equals(typeof q.conjugate, 'function');
  // t.equals(typeof q.divQuaternion, 'function');
  t.equals(typeof q.invert, 'function');
  t.equals(typeof q.multiply, 'function');
  // t.equals(typeof q.negate, 'function');
  // t.equals(typeof q.norm, 'function');
  // t.equals(typeof q.normSq, 'function');
  t.equals(typeof q.scale, 'function');
  t.equals(typeof q.set, 'function');
  // t.equals(typeof q.setQuaternion, 'function');
  // t.equals(typeof q.sub, 'function');
  // t.equals(typeof q.unit, 'function');
  t.end();
});

// test('Quaternion.fromAxisRotation', t => {
//   let q = Quaternion.fromAxisRotation(new Vector3(0, 0, 1), Math.PI);
//   t.equals(q[0], 0);
//   t.equals(q[1], 0);
//   t.equals(q[2], 1);
//   t.equals(q[3], Math.cos(Math.PI / 2));

//   q = Quaternion.fromAxisRotation(new Vector3(0, 1, 0), Math.PI);
//   t.equals(q[0], 0);
//   t.equals(q[1], 1);
//   t.equals(q[2], 0);
//   t.equals(q[3], Math.cos(Math.PI / 2));

//   q = Quaternion.fromAxisRotation(new Vector3(1, 0, 0), Math.PI);
//   t.equals(q[0], 1);
//   t.equals(q[1], 0);
//   t.equals(q[2], 0);
//   t.equals(q[3], Math.cos(Math.PI / 2));

//   const q1 = Quaternion.fromAxisRotation(new Vector3(5, 0, -2), Math.PI / 3);
//   const q2 = Quaternion.fromAxisRotation(new Vector3(1, 3, 0), Math.PI / 4);
//   q1.$mulQuaternion(q2);
//   t.equals(q1[0], 0.6011183144537015);
//   t.equals(q1[1], 0.29193457751898655);
//   t.equals(q1[2], -0.0030205353559888126);
//   t.equals(q1[3], 0.7439232829017486);
//   t.end();
// });
