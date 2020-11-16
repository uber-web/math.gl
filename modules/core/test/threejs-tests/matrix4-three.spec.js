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
/* eslint-disable */
import test from 'tape-catch';
import {Matrix4, Vector3, Quaternion, Euler, toRadians} from '@math.gl/core';
import {eps} from './constants';

function matrixEquals4(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  if (a.elements.length != b.elements.length) {
    return false;
  }

  for (let i = 0, il = a.elements.length; i < il; i++) {
    const delta = a.elements[i] - b.elements[i];
    if (delta > tolerance) {
      return false;
    }
  }

  return true;
}

// from Euler.js
function eulerEquals(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  const diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
  return diff < tolerance;
}

// INSTANCING
test('three.js#Matrix4#Instancing', t => {
  const a = new Matrix4();
  t.ok(a.determinant() == 1, 'Passed!');

  const b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

  // NOTE THREE.js is row-major
  b.transpose();
  // NOTE

  t.ok(b.elements[0] == 0);
  t.ok(b.elements[1] == 4);
  t.ok(b.elements[2] == 8);
  t.ok(b.elements[3] == 12);
  t.ok(b.elements[4] == 1);
  t.ok(b.elements[5] == 5);
  t.ok(b.elements[6] == 9);
  t.ok(b.elements[7] == 13);
  t.ok(b.elements[8] == 2);
  t.ok(b.elements[9] == 6);
  t.ok(b.elements[10] == 10);
  t.ok(b.elements[11] == 14);
  t.ok(b.elements[12] == 3);
  t.ok(b.elements[13] == 7);
  t.ok(b.elements[14] == 11);
  t.ok(b.elements[15] == 15);

  t.ok(!matrixEquals4(a, b), 'Passed!');
  t.end();
});

// PUBLIC STUFF
test.skip('three.js#Matrix4#isMatrix4', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test('three.js#Matrix4#set', t => {
  const b = new Matrix4();
  t.ok(b.determinant() == 1, 'Passed!');

  b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

  // NOTE THREE.js is row-major
  b.transpose();
  // NOTE

  t.ok(b.elements[0] == 0);
  t.ok(b.elements[1] == 4);
  t.ok(b.elements[2] == 8);
  t.ok(b.elements[3] == 12);
  t.ok(b.elements[4] == 1);
  t.ok(b.elements[5] == 5);
  t.ok(b.elements[6] == 9);
  t.ok(b.elements[7] == 13);
  t.ok(b.elements[8] == 2);
  t.ok(b.elements[9] == 6);
  t.ok(b.elements[10] == 10);
  t.ok(b.elements[11] == 14);
  t.ok(b.elements[12] == 3);
  t.ok(b.elements[13] == 7);
  t.ok(b.elements[14] == 11);
  t.ok(b.elements[15] == 15);
  t.end();
});

test('three.js#Matrix4#identity', t => {
  const b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

  // NOTE THREE.js is row-major
  b.transpose();
  // NOTE

  t.ok(b.elements[0] == 0);
  t.ok(b.elements[1] == 4);
  t.ok(b.elements[2] == 8);
  t.ok(b.elements[3] == 12);
  t.ok(b.elements[4] == 1);
  t.ok(b.elements[5] == 5);
  t.ok(b.elements[6] == 9);
  t.ok(b.elements[7] == 13);
  t.ok(b.elements[8] == 2);
  t.ok(b.elements[9] == 6);
  t.ok(b.elements[10] == 10);
  t.ok(b.elements[11] == 14);
  t.ok(b.elements[12] == 3);
  t.ok(b.elements[13] == 7);
  t.ok(b.elements[14] == 11);
  t.ok(b.elements[15] == 15);

  const a = new Matrix4();
  t.ok(!matrixEquals4(a, b), 'Passed!');

  b.identity();
  t.ok(matrixEquals4(a, b), 'Passed!');
  t.end();
});

test('three.js#Matrix4#clone', t => {
  const a = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  const b = a.clone();

  t.ok(matrixEquals4(a, b), 'Passed!');

  // ensure that it is a true copy
  a.elements[0] = 2;
  t.ok(!matrixEquals4(a, b), 'Passed!');
  t.end();
});

test('three.js#Matrix4#copy', t => {
  const a = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  const b = new Matrix4().copy(a);

  t.ok(matrixEquals4(a, b), 'Passed!');

  // ensure that it is a true copy
  a.elements[0] = 2;
  t.ok(!matrixEquals4(a, b), 'Passed!');
  t.end();
});

test.skip('three.js#Matrix4#copyPosition', t => {
  const a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  const b = new Matrix4().set(1, 2, 3, 0, 5, 6, 7, 0, 9, 10, 11, 0, 13, 14, 15, 16);

  t.notOk(matrixEquals4(a, b), 'a and b initially not equal');

  b.copyPosition(a);
  t.ok(matrixEquals4(a, b), 'a and b equal after copyPosition()');
  t.end();
});

test.skip('three.js#Matrix4#makeBasis/extractBasis', t => {
  const identityBasis = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];
  const a = new Matrix4().makeBasis(identityBasis[0], identityBasis[1], identityBasis[2]);
  const identity = new Matrix4();
  t.ok(matrixEquals4(a, identity), 'Passed!');

  const testBases = [[new Vector3(0, 1, 0), new Vector3(-1, 0, 0), new Vector3(0, 0, 1)]];
  for (let i = 0; i < testBases.length; i++) {
    const testBasis = testBases[i];
    const b = new Matrix4().makeBasis(testBasis[0], testBasis[1], testBasis[2]);
    const outBasis = [new Vector3(), new Vector3(), new Vector3()];
    b.extractBasis(outBasis[0], outBasis[1], outBasis[2]);
    // check what goes in, is what comes out.
    for (let j = 0; j < outBasis.length; j++) {
      t.ok(outBasis[j].equals(testBasis[j]), 'Passed!');
    }

    // get the basis out the hard war
    for (let j = 0; j < identityBasis.length; j++) {
      outBasis[j].copy(identityBasis[j]);
      outBasis[j].applyMatrix4(b);
    }
    // did the multiply method of basis extraction work?
    for (let j = 0; j < outBasis.length; j++) {
      t.ok(outBasis[j].equals(testBasis[j]), 'Passed!');
    }
  }
  t.end();
});

test.skip('three.js#Matrix4#extractRotation', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeRotationFromEuler/extractRotation', t => {
  const testValues = [
    new Euler(0, 0, 0, 'XYZ'),
    new Euler(1, 0, 0, 'XYZ'),
    new Euler(0, 1, 0, 'ZYX'),
    new Euler(0, 0, 0.5, 'YZX'),
    new Euler(0, 0, -0.5, 'YZX')
  ];

  for (let i = 0; i < testValues.length; i++) {
    const v = testValues[i];

    const m = new Matrix4().makeRotationFromEuler(v);

    const v2 = new Euler().setFromRotationMatrix(m, v.order);
    const m2 = new Matrix4().makeRotationFromEuler(v2);

    t.ok(
      matrixEquals4(m, m2, eps),
      'makeRotationFromEuler #' + i + ': original and Euler-derived matrices are equal'
    );
    t.ok(
      eulerEquals(v, v2, eps),
      'makeRotationFromEuler #' + i + ': original and matrix-derived Eulers are equal'
    );

    const m3 = new Matrix4().extractRotation(m2);
    const v3 = new Euler().setFromRotationMatrix(m3, v.order);

    t.ok(
      matrixEquals4(m, m3, eps),
      'extractRotation #' + i + ': original and extracted matrices are equal'
    );
    t.ok(
      eulerEquals(v, v3, eps),
      'extractRotation #' + i + ': original and extracted Eulers are equal'
    );
  }
  t.end();
});

test.skip('three.js#Matrix4#lookAt', t => {
  const a = new Matrix4();
  const expected = new Matrix4().identity();
  const eye = new Vector3(0, 0, 0);
  const target = new Vector3(0, 1, -1);
  const up = new Vector3(0, 1, 0);

  a.lookAt(eye, target, up);
  const rotation = new Euler().setFromRotationMatrix(a);
  t.numEqual(rotation.x * (180 / Math.PI), 45, 'Check the rotation');

  // eye and target are in the same position
  eye.copy(target);
  a.lookAt(eye, target, up);
  t.ok(matrixEquals4(a, expected), 'Check the result for eye == target');

  // up and z are parallel
  eye.set(0, 1, 0);
  target.set(0, 0, 0);
  a.lookAt(eye, target, up);
  expected.set(1, 0, 0, 0, 0, 0.0001, 1, 0, 0, -1, 0.0001, 0, 0, 0, 0, 1);
  t.ok(matrixEquals4(a, expected), 'Check the result for when up and z are parallel');
  t.end();
});

test.skip('three.js#Matrix4#multiply', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#premultiply', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#multiplyMatrices', t => {
  // Reference:
  //
  // #!/usr/bin/env python
  // from __future__ import print_function
  // import numpy as np
  // print(
  //     np.dot(
  //         np.reshape([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53], (4, 4)),
  //         np.reshape([59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131], (4, 4))
  //     )
  // )
  //
  // [[ 1585  1655  1787  1861]
  //  [ 5318  5562  5980  6246]
  //  [10514 11006 11840 12378]
  //  [15894 16634 17888 18710]]
  const lhs = new Matrix4().set(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
  const rhs = new Matrix4().set(
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131
  );
  const ans = new Matrix4();

  ans.multiplyMatrices(lhs, rhs);

  t.equals(ans.elements[0], 1585);
  t.equals(ans.elements[1], 5318);
  t.equals(ans.elements[2], 10514);
  t.equals(ans.elements[3], 15894);
  t.equals(ans.elements[4], 1655);
  t.equals(ans.elements[5], 5562);
  t.equals(ans.elements[6], 11006);
  t.equals(ans.elements[7], 16634);
  t.equals(ans.elements[8], 1787);
  t.equals(ans.elements[9], 5980);
  t.equals(ans.elements[10], 11840);
  t.equals(ans.elements[11], 17888);
  t.equals(ans.elements[12], 1861);
  t.equals(ans.elements[13], 6246);
  t.equals(ans.elements[14], 12378);
  t.equals(ans.elements[15], 18710);
  t.end();
});

test('three.js#Matrix4#multiplyScalar', t => {
  const b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

  // NOTE THREE.js is row-major
  b.transpose();
  // NOTE

  t.equals(b.elements[0], 0);
  t.equals(b.elements[1], 4);
  t.equals(b.elements[2], 8);
  t.equals(b.elements[3], 12);
  t.equals(b.elements[4], 1);
  t.equals(b.elements[5], 5);
  t.equals(b.elements[6], 9);
  t.equals(b.elements[7], 13);
  t.equals(b.elements[8], 2);
  t.equals(b.elements[9], 6);
  t.equals(b.elements[10], 10);
  t.equals(b.elements[11], 14);
  t.equals(b.elements[12], 3);
  t.equals(b.elements[13], 7);
  t.equals(b.elements[14], 11);
  t.equals(b.elements[15], 15);

  b.multiplyScalar(2);
  t.equals(b.elements[0], 0 * 2);
  t.equals(b.elements[1], 4 * 2);
  t.equals(b.elements[2], 8 * 2);
  t.equals(b.elements[3], 12 * 2);
  t.equals(b.elements[4], 1 * 2);
  t.equals(b.elements[5], 5 * 2);
  t.equals(b.elements[6], 9 * 2);
  t.equals(b.elements[7], 13 * 2);
  t.equals(b.elements[8], 2 * 2);
  t.equals(b.elements[9], 6 * 2);
  t.equals(b.elements[10], 10 * 2);
  t.equals(b.elements[11], 14 * 2);
  t.equals(b.elements[12], 3 * 2);
  t.equals(b.elements[13], 7 * 2);
  t.equals(b.elements[14], 11 * 2);
  t.equals(b.elements[15], 15 * 2);
  t.end();
});

test.skip('three.js#Matrix4#applyToBufferAttribute', t => {
  const a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  const attr = new Float32BufferAttribute([1, 2, 1, 3, 0, 3], 3);
  const expected = new Float32BufferAttribute(
    [
      0.1666666716337204,
      0.4444444477558136,
      0.7222222089767456,
      0.1599999964237213,
      0.4399999976158142,
      0.7200000286102295
    ],
    3
  );

  const applied = a.applyToBufferAttribute(attr);

  t.strictEqual(
    expected.count,
    applied.count,
    'Applied buffer and expected buffer have the same number of entries'
  );

  for (let i = 0, l = expected.count; i < l; i++) {
    t.ok(Math.abs(applied.getX(i) - expected.getX(i)) <= eps, 'Check x');
    t.ok(Math.abs(applied.getY(i) - expected.getY(i)) <= eps, 'Check y');
    t.ok(Math.abs(applied.getZ(i) - expected.getZ(i)) <= eps, 'Check z');
  }
  t.end();
});

test('three.js#Matrix4#determinant', t => {
  const a = new Matrix4();
  t.ok(a.determinant() == 1, 'Passed!');

  a.elements[0] = 2;
  t.ok(a.determinant() == 2, 'Passed!');

  a.elements[0] = 0;
  t.ok(a.determinant() == 0, 'Passed!');

  // calculated via http://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/fourD/index.htm
  a.set(2, 3, 4, 5, -1, -21, -3, -4, 6, 7, 8, 10, -8, -9, -10, -12);
  t.ok(a.determinant() == 76, 'Passed!');
  t.end();
});

test('three.js#Matrix4#transpose', t => {
  const a = new Matrix4();
  let b = a.clone().transpose();
  t.ok(matrixEquals4(a, b), 'Passed!');

  b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  const c = b.clone().transpose();
  t.ok(!matrixEquals4(b, c), 'Passed!');
  c.transpose();
  t.ok(matrixEquals4(b, c), 'Passed!');
  t.end();
});

test.skip('three.js#Matrix4#setPosition', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#getInverse', t => {
  const identity = new Matrix4();

  const a = new Matrix4();
  const b = new Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  const c = new Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  t.ok(!matrixEquals4(a, b), 'Passed!');
  b.getInverse(a, false);
  t.ok(matrixEquals4(b, new Matrix4()), 'Passed!');

  try {
    b.getInverse(c, true);
    t.ok(false, 'Passed!'); // should never get here.
  } catch (err) {
    t.ok(true, 'Passed!');
  }

  const testMatrices = [
    new Matrix4().makeRotationX(0.3),
    new Matrix4().makeRotationX(-0.3),
    new Matrix4().makeRotationY(0.3),
    new Matrix4().makeRotationY(-0.3),
    new Matrix4().makeRotationZ(0.3),
    new Matrix4().makeRotationZ(-0.3),
    new Matrix4().makeScale(1, 2, 3),
    new Matrix4().makeScale(1 / 8, 1 / 2, 1 / 3),
    new Matrix4().makePerspective(-1, 1, 1, -1, 1, 1000),
    new Matrix4().makePerspective(-16, 16, 9, -9, 0.1, 10000),
    new Matrix4().makeTranslation(1, 2, 3)
  ];

  for (let i = 0, il = testMatrices.length; i < il; i++) {
    const m = testMatrices[i];

    const mInverse = new Matrix4().getInverse(m);
    const mSelfInverse = m.clone();
    mSelfInverse.getInverse(mSelfInverse);

    // self-inverse should the same as inverse
    t.ok(matrixEquals4(mSelfInverse, mInverse), 'Passed!');

    // the determinant of the inverse should be the reciprocal
    t.ok(Math.abs(m.determinant() * mInverse.determinant() - 1) < 0.0001, 'Passed!');

    const mProduct = new Matrix4().multiplyMatrices(m, mInverse);

    // the determinant of the identity matrix is 1
    t.ok(Math.abs(mProduct.determinant() - 1) < 0.0001, 'Passed!');
    t.ok(matrixEquals4(mProduct, identity), 'Passed!');
  }
  t.end();
});

test.skip('three.js#Matrix4#scale', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#getMaxScaleOnAxis', t => {
  const a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  const expected = Math.sqrt(3 * 3 + 7 * 7 + 11 * 11);

  t.ok(Math.abs(a.getMaxScaleOnAxis() - expected) <= eps, 'Check result');
  t.end();
});

test.skip('three.js#Matrix4#makeTranslation', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeRotationX', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeRotationY', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeRotationZ', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeRotationAxis', t => {
  const axis = new Vector3(1.5, 0.0, 1.0).normalize();
  const radians = toRadians(45);
  const a = new Matrix4().makeRotationAxis(axis, radians);

  const expected = new Matrix4().set(
    0.9098790095958609,
    -0.39223227027636803,
    0.13518148560620882,
    0,
    0.39223227027636803,
    0.7071067811865476,
    -0.588348405414552,
    0,
    0.13518148560620882,
    0.588348405414552,
    0.7972277715906868,
    0,
    0,
    0,
    0,
    1
  );

  t.ok(matrixEquals4(a, expected), 'Check numeric result');
  t.end();
});

test.skip('three.js#Matrix4#makeScale', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeShear', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#compose/decompose', t => {
  const tValues = [
    new Vector3(),
    new Vector3(3, 0, 0),
    new Vector3(0, 4, 0),
    new Vector3(0, 0, 5),
    new Vector3(-6, 0, 0),
    new Vector3(0, -7, 0),
    new Vector3(0, 0, -8),
    new Vector3(-2, 5, -9),
    new Vector3(-2, -5, -9)
  ];

  const sValues = [
    new Vector3(1, 1, 1),
    new Vector3(2, 2, 2),
    new Vector3(1, -1, 1),
    new Vector3(-1, 1, 1),
    new Vector3(1, 1, -1),
    new Vector3(2, -2, 1),
    new Vector3(-1, 2, -2),
    new Vector3(-1, -1, -1),
    new Vector3(-2, -2, -2)
  ];

  const rValues = [
    new Quaternion(),
    new Quaternion().setFromEuler(new Euler(1, 1, 0)),
    new Quaternion().setFromEuler(new Euler(1, -1, 1)),
    new Quaternion(0, 0.9238795292366128, 0, 0.38268342717215614)
  ];

  for (let ti = 0; ti < tValues.length; ti++) {
    for (let si = 0; si < sValues.length; si++) {
      for (let ri = 0; ri < rValues.length; ri++) {
        const t = tValues[ti];
        const s = sValues[si];
        const r = rValues[ri];

        const m = new Matrix4().compose(
          t,
          r,
          s
        );
        const t2 = new Vector3();
        const r2 = new Quaternion();
        const s2 = new Vector3();

        m.decompose(t2, r2, s2);

        const m2 = new Matrix4().compose(
          t2,
          r2,
          s2
        );

        /*
				// debug code
				const matrixIsSame = matrixEquals4( m, m2 );
				if ( ! matrixIsSame ) {

					console.log( t, s, r );
					console.log( t2, s2, r2 );
					console.log( m, m2 );

				}
				*/

        t.ok(matrixEquals4(m, m2), 'Passed!');
      }
    }
  }
  t.end();
});

test.skip('three.js#Matrix4#makePerspective', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test.skip('three.js#Matrix4#makeOrthographic', t => {
  const a = new Matrix4().makeOrthographic(-1, 1, -1, 1, 1, 100);
  const expected = new Matrix4().set(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -2 / 99, -101 / 99, 0, 0, 0, 1);

  t.ok(matrixEquals4(a, expected), 'Check result');
  t.end();
});

test('three.js#Matrix4#equals', t => {
  const a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  const b = new Matrix4().set(-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

  t.notOk(a.equals(b), 'Check that a does not equal b');
  t.notOk(b.equals(a), 'Check that b does not equal a');

  a.copy(b);
  t.ok(a.equals(b), 'Check that a equals b after copy()');
  t.ok(b.equals(a), 'Check that b equals a after copy()');
  t.end();
});

test.skip('three.js#Matrix4#fromArray', t => {
  t.ok(false, "everything's gonna be alright");
  t.end();
});

test('three.js#Matrix4#toArray', t => {
  const a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  // NOTE THREE.js is row-major
  a.transpose();
  // NOTE

  const noOffset = [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16];
  const withOffset = [undefined, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16];

  let array = a.toArray();
  t.deepEqual(array, noOffset, 'No array, no offset');

  array = [];
  a.toArray(array);
  t.deepEqual(array, noOffset, 'With array, no offset');

  array = [undefined];
  a.toArray(array, 1);
  t.deepEqual(array, withOffset, 'With array, with offset');
  t.end();
});
