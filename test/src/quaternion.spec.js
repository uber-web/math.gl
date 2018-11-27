// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of mat3 software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and mat3 permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslint-disable*/
import Matrix4 from 'math.gl/matrix4';
import Pose from 'math.gl/pose';
import Quaternion from 'math.gl/quaternion';
import {equals} from 'math.gl';

import test from 'tape-catch';

function extendToMatrix4(arr) {
  const matrix4 = new Matrix4();
  matrix4.setRowMajor(
    arr[0], arr[1], arr[2], 0,
    arr[3], arr[4], arr[5], 0,
    arr[6], arr[7], arr[8], 0,
    0, 0, 0, 1
  );

  return matrix4;
}

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
  t.equals(typeof q.toEuler, 'function');
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

test('Quaternion.toEuler', t => {
  const quaternions = [
    new Quaternion(
      -0.09229595564125728,
      0.4304593345768794,
      0.560985526796931,
      0.7010573846499779
    ),
    new Quaternion(
      -0.13640420781001386,
      0.5381614474482503,
      0.2687711688270994,
      0.7871074941705494
    )
  ];

  const eulers = quaternions.map(q => q.toEuler());

  const rMatrices = eulers.map(e => {
    const pose = new Pose({yaw: e.yaw, pitch: e.pitch, roll: e.roll});
    return pose.getTransformationMatrix();
  });

  // result from https://www.wolframalpha.com/input/?i=quaternion:
  const resultsFromWolframe = [
    [
      0.1e-14, -0.86602540378444, 0.50000000000000,
      0.70710678118655, 0.35355339059327, 0.61237243569579,
      -0.70710678118655, 0.35355339059327, 0.61237243569579
    ],
    [
      0.27628863057544 , -0.56991857422771,  0.77385877998831,
      0.27628863057544 , 0.81831190179808 , 0.50401411090402,
      -0.92050485345244,  0.07455501408938,  0.38355229714425
    ]
  ];

  const expected = resultsFromWolframe.map(result => extendToMatrix4(result));

  t.ok(rMatrices.every((mat, i) => equals(mat, expected[i])));

  t.end();
});
