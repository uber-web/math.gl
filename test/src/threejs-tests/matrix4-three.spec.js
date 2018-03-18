// This file is copied from THREE.js math test suite (MIT licensed)
// @author bhouston / http://exocortex.com
// @author TristanVALCKE / https://github.com/Itee

/* eslint-disable */
import test from 'tape-catch';

import Matrix4 from 'math.gl/matrix4';
import Vector3 from 'math.gl/vector3';
import Euler from 'math.gl/euler';
import Quaternion from 'math.gl/quaternion';

import {_Math} from 'math.gl';
import {eps} from './constants';

function matrixEquals4(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  if (a.elements.length != b.elements.length) {
    return false;
  }

  for (var i = 0, il = a.elements.length; i < il; i++) {
    var delta = a.elements[i] - b.elements[i];
    if (delta > tolerance) {
      return false;
    }
  }

  return true;
}

// from Euler.js
function eulerEquals(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  var diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
  return diff < tolerance;
}

// INSTANCING
test('Matrix4#Instancing', assert => {
  var a = new Matrix4();
  assert.ok(a.determinant() == 1, 'Passed!');

  var b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  assert.ok(b.elements[0] == 0);
  assert.ok(b.elements[1] == 4);
  assert.ok(b.elements[2] == 8);
  assert.ok(b.elements[3] == 12);
  assert.ok(b.elements[4] == 1);
  assert.ok(b.elements[5] == 5);
  assert.ok(b.elements[6] == 9);
  assert.ok(b.elements[7] == 13);
  assert.ok(b.elements[8] == 2);
  assert.ok(b.elements[9] == 6);
  assert.ok(b.elements[10] == 10);
  assert.ok(b.elements[11] == 14);
  assert.ok(b.elements[12] == 3);
  assert.ok(b.elements[13] == 7);
  assert.ok(b.elements[14] == 11);
  assert.ok(b.elements[15] == 15);

  assert.ok(!matrixEquals4(a, b), 'Passed!');
});

// PUBLIC STUFF
test.skip('Matrix4#isMatrix4', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#set', assert => {
  var b = new Matrix4();
  assert.ok(b.determinant() == 1, 'Passed!');

  b.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  assert.ok(b.elements[0] == 0);
  assert.ok(b.elements[1] == 4);
  assert.ok(b.elements[2] == 8);
  assert.ok(b.elements[3] == 12);
  assert.ok(b.elements[4] == 1);
  assert.ok(b.elements[5] == 5);
  assert.ok(b.elements[6] == 9);
  assert.ok(b.elements[7] == 13);
  assert.ok(b.elements[8] == 2);
  assert.ok(b.elements[9] == 6);
  assert.ok(b.elements[10] == 10);
  assert.ok(b.elements[11] == 14);
  assert.ok(b.elements[12] == 3);
  assert.ok(b.elements[13] == 7);
  assert.ok(b.elements[14] == 11);
  assert.ok(b.elements[15] == 15);
});

test('Matrix4#identity', assert => {
  var b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  assert.ok(b.elements[0] == 0);
  assert.ok(b.elements[1] == 4);
  assert.ok(b.elements[2] == 8);
  assert.ok(b.elements[3] == 12);
  assert.ok(b.elements[4] == 1);
  assert.ok(b.elements[5] == 5);
  assert.ok(b.elements[6] == 9);
  assert.ok(b.elements[7] == 13);
  assert.ok(b.elements[8] == 2);
  assert.ok(b.elements[9] == 6);
  assert.ok(b.elements[10] == 10);
  assert.ok(b.elements[11] == 14);
  assert.ok(b.elements[12] == 3);
  assert.ok(b.elements[13] == 7);
  assert.ok(b.elements[14] == 11);
  assert.ok(b.elements[15] == 15);

  var a = new Matrix4();
  assert.ok(!matrixEquals4(a, b), 'Passed!');

  b.identity();
  assert.ok(matrixEquals4(a, b), 'Passed!');
});

test('Matrix4#clone', assert => {
  var a = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  var b = a.clone();

  assert.ok(matrixEquals4(a, b), 'Passed!');

  // ensure that it is a true copy
  a.elements[0] = 2;
  assert.ok(!matrixEquals4(a, b), 'Passed!');
});

test('Matrix4#copy', assert => {
  var a = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  var b = new Matrix4().copy(a);

  assert.ok(matrixEquals4(a, b), 'Passed!');

  // ensure that it is a true copy
  a.elements[0] = 2;
  assert.ok(!matrixEquals4(a, b), 'Passed!');
});

test('Matrix4#copyPosition', assert => {
  var a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var b = new Matrix4().set(1, 2, 3, 0, 5, 6, 7, 0, 9, 10, 11, 0, 13, 14, 15, 16);

  assert.notOk(matrixEquals4(a, b), 'a and b initially not equal');

  b.copyPosition(a);
  assert.ok(matrixEquals4(a, b), 'a and b equal after copyPosition()');
});

test('Matrix4#makeBasis/extractBasis', assert => {
  var identityBasis = [new Vector3(1, 0, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1)];
  var a = new Matrix4().makeBasis(identityBasis[0], identityBasis[1], identityBasis[2]);
  var identity = new Matrix4();
  assert.ok(matrixEquals4(a, identity), 'Passed!');

  var testBases = [[new Vector3(0, 1, 0), new Vector3(-1, 0, 0), new Vector3(0, 0, 1)]];
  for (var i = 0; i < testBases.length; i++) {
    var testBasis = testBases[i];
    var b = new Matrix4().makeBasis(testBasis[0], testBasis[1], testBasis[2]);
    var outBasis = [new Vector3(), new Vector3(), new Vector3()];
    b.extractBasis(outBasis[0], outBasis[1], outBasis[2]);
    // check what goes in, is what comes out.
    for (var j = 0; j < outBasis.length; j++) {
      assert.ok(outBasis[j].equals(testBasis[j]), 'Passed!');
    }

    // get the basis out the hard war
    for (var j = 0; j < identityBasis.length; j++) {
      outBasis[j].copy(identityBasis[j]);
      outBasis[j].applyMatrix4(b);
    }
    // did the multiply method of basis extraction work?
    for (var j = 0; j < outBasis.length; j++) {
      assert.ok(outBasis[j].equals(testBasis[j]), 'Passed!');
    }
  }
});

test.skip('Matrix4#extractRotation', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#makeRotationFromEuler/extractRotation', assert => {
  var testValues = [
    new Euler(0, 0, 0, 'XYZ'),
    new Euler(1, 0, 0, 'XYZ'),
    new Euler(0, 1, 0, 'ZYX'),
    new Euler(0, 0, 0.5, 'YZX'),
    new Euler(0, 0, -0.5, 'YZX')
  ];

  for (var i = 0; i < testValues.length; i++) {
    var v = testValues[i];

    var m = new Matrix4().makeRotationFromEuler(v);

    var v2 = new Euler().setFromRotationMatrix(m, v.order);
    var m2 = new Matrix4().makeRotationFromEuler(v2);

    assert.ok(
      matrixEquals4(m, m2, eps),
      'makeRotationFromEuler #' + i + ': original and Euler-derived matrices are equal'
    );
    assert.ok(
      eulerEquals(v, v2, eps),
      'makeRotationFromEuler #' + i + ': original and matrix-derived Eulers are equal'
    );

    var m3 = new Matrix4().extractRotation(m2);
    var v3 = new Euler().setFromRotationMatrix(m3, v.order);

    assert.ok(
      matrixEquals4(m, m3, eps),
      'extractRotation #' + i + ': original and extracted matrices are equal'
    );
    assert.ok(
      eulerEquals(v, v3, eps),
      'extractRotation #' + i + ': original and extracted Eulers are equal'
    );
  }
});

test('Matrix4#lookAt', assert => {
  var a = new Matrix4();
  var expected = new Matrix4().identity();
  var eye = new Vector3(0, 0, 0);
  var target = new Vector3(0, 1, -1);
  var up = new Vector3(0, 1, 0);

  a.lookAt(eye, target, up);
  var rotation = new Euler().setFromRotationMatrix(a);
  assert.numEqual(rotation.x * (180 / Math.PI), 45, 'Check the rotation');

  // eye and target are in the same position
  eye.copy(target);
  a.lookAt(eye, target, up);
  assert.ok(matrixEquals4(a, expected), 'Check the result for eye == target');

  // up and z are parallel
  eye.set(0, 1, 0);
  target.set(0, 0, 0);
  a.lookAt(eye, target, up);
  expected.set(1, 0, 0, 0, 0, 0.0001, 1, 0, 0, -1, 0.0001, 0, 0, 0, 0, 1);
  assert.ok(matrixEquals4(a, expected), 'Check the result for when up and z are parallel');
});

test.skip('Matrix4#multiply', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test.skip('Matrix4#premultiply', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#multiplyMatrices', assert => {
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
  var lhs = new Matrix4().set(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
  var rhs = new Matrix4().set(
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
  var ans = new Matrix4();

  ans.multiplyMatrices(lhs, rhs);

  assert.ok(ans.elements[0] == 1585);
  assert.ok(ans.elements[1] == 5318);
  assert.ok(ans.elements[2] == 10514);
  assert.ok(ans.elements[3] == 15894);
  assert.ok(ans.elements[4] == 1655);
  assert.ok(ans.elements[5] == 5562);
  assert.ok(ans.elements[6] == 11006);
  assert.ok(ans.elements[7] == 16634);
  assert.ok(ans.elements[8] == 1787);
  assert.ok(ans.elements[9] == 5980);
  assert.ok(ans.elements[10] == 11840);
  assert.ok(ans.elements[11] == 17888);
  assert.ok(ans.elements[12] == 1861);
  assert.ok(ans.elements[13] == 6246);
  assert.ok(ans.elements[14] == 12378);
  assert.ok(ans.elements[15] == 18710);
});

test('Matrix4#multiplyScalar', assert => {
  var b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  assert.ok(b.elements[0] == 0);
  assert.ok(b.elements[1] == 4);
  assert.ok(b.elements[2] == 8);
  assert.ok(b.elements[3] == 12);
  assert.ok(b.elements[4] == 1);
  assert.ok(b.elements[5] == 5);
  assert.ok(b.elements[6] == 9);
  assert.ok(b.elements[7] == 13);
  assert.ok(b.elements[8] == 2);
  assert.ok(b.elements[9] == 6);
  assert.ok(b.elements[10] == 10);
  assert.ok(b.elements[11] == 14);
  assert.ok(b.elements[12] == 3);
  assert.ok(b.elements[13] == 7);
  assert.ok(b.elements[14] == 11);
  assert.ok(b.elements[15] == 15);

  b.multiplyScalar(2);
  assert.ok(b.elements[0] == 0 * 2);
  assert.ok(b.elements[1] == 4 * 2);
  assert.ok(b.elements[2] == 8 * 2);
  assert.ok(b.elements[3] == 12 * 2);
  assert.ok(b.elements[4] == 1 * 2);
  assert.ok(b.elements[5] == 5 * 2);
  assert.ok(b.elements[6] == 9 * 2);
  assert.ok(b.elements[7] == 13 * 2);
  assert.ok(b.elements[8] == 2 * 2);
  assert.ok(b.elements[9] == 6 * 2);
  assert.ok(b.elements[10] == 10 * 2);
  assert.ok(b.elements[11] == 14 * 2);
  assert.ok(b.elements[12] == 3 * 2);
  assert.ok(b.elements[13] == 7 * 2);
  assert.ok(b.elements[14] == 11 * 2);
  assert.ok(b.elements[15] == 15 * 2);
});

test('Matrix4#applyToBufferAttribute', assert => {
  var a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var attr = new Float32BufferAttribute([1, 2, 1, 3, 0, 3], 3);
  var expected = new Float32BufferAttribute(
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

  var applied = a.applyToBufferAttribute(attr);

  assert.strictEqual(
    expected.count,
    applied.count,
    'Applied buffer and expected buffer have the same number of entries'
  );

  for (var i = 0, l = expected.count; i < l; i++) {
    assert.ok(Math.abs(applied.getX(i) - expected.getX(i)) <= eps, 'Check x');
    assert.ok(Math.abs(applied.getY(i) - expected.getY(i)) <= eps, 'Check y');
    assert.ok(Math.abs(applied.getZ(i) - expected.getZ(i)) <= eps, 'Check z');
  }
});

test('Matrix4#determinant', assert => {
  var a = new Matrix4();
  assert.ok(a.determinant() == 1, 'Passed!');

  a.elements[0] = 2;
  assert.ok(a.determinant() == 2, 'Passed!');

  a.elements[0] = 0;
  assert.ok(a.determinant() == 0, 'Passed!');

  // calculated via http://www.euclideanspace.com/maths/algebra/matrix/functions/determinant/fourD/index.htm
  a.set(2, 3, 4, 5, -1, -21, -3, -4, 6, 7, 8, 10, -8, -9, -10, -12);
  assert.ok(a.determinant() == 76, 'Passed!');
});

test('Matrix4#transpose', assert => {
  var a = new Matrix4();
  var b = a.clone().transpose();
  assert.ok(matrixEquals4(a, b), 'Passed!');

  var b = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  var c = b.clone().transpose();
  assert.ok(!matrixEquals4(b, c), 'Passed!');
  c.transpose();
  assert.ok(matrixEquals4(b, c), 'Passed!');
});

test.skip('Matrix4#setPosition', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#getInverse', assert => {
  var identity = new Matrix4();

  var a = new Matrix4();
  var b = new Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  var c = new Matrix4().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  assert.ok(!matrixEquals4(a, b), 'Passed!');
  b.getInverse(a, false);
  assert.ok(matrixEquals4(b, new Matrix4()), 'Passed!');

  try {
    b.getInverse(c, true);
    assert.ok(false, 'Passed!'); // should never get here.
  } catch (err) {
    assert.ok(true, 'Passed!');
  }

  var testMatrices = [
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

  for (var i = 0, il = testMatrices.length; i < il; i++) {
    var m = testMatrices[i];

    var mInverse = new Matrix4().getInverse(m);
    var mSelfInverse = m.clone();
    mSelfInverse.getInverse(mSelfInverse);

    // self-inverse should the same as inverse
    assert.ok(matrixEquals4(mSelfInverse, mInverse), 'Passed!');

    // the determinant of the inverse should be the reciprocal
    assert.ok(Math.abs(m.determinant() * mInverse.determinant() - 1) < 0.0001, 'Passed!');

    var mProduct = new Matrix4().multiplyMatrices(m, mInverse);

    // the determinant of the identity matrix is 1
    assert.ok(Math.abs(mProduct.determinant() - 1) < 0.0001, 'Passed!');
    assert.ok(matrixEquals4(mProduct, identity), 'Passed!');
  }
});

test.skip('Matrix4#scale', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#getMaxScaleOnAxis', assert => {
  var a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var expected = Math.sqrt(3 * 3 + 7 * 7 + 11 * 11);

  assert.ok(Math.abs(a.getMaxScaleOnAxis() - expected) <= eps, 'Check result');
});

test.skip('Matrix4#makeTranslation', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test.skip('Matrix4#makeRotationX', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test.skip('Matrix4#makeRotationY', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test.skip('Matrix4#makeRotationZ', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#makeRotationAxis', assert => {
  var axis = new Vector3(1.5, 0.0, 1.0).normalize();
  var radians = _Math.degToRad(45);
  var a = new Matrix4().makeRotationAxis(axis, radians);

  var expected = new Matrix4().set(
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

  assert.ok(matrixEquals4(a, expected), 'Check numeric result');
});

test.skip('Matrix4#makeScale', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test.skip('Matrix4#makeShear', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#compose/decompose', assert => {
  var tValues = [
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

  var sValues = [
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

  var rValues = [
    new Quaternion(),
    new Quaternion().setFromEuler(new Euler(1, 1, 0)),
    new Quaternion().setFromEuler(new Euler(1, -1, 1)),
    new Quaternion(0, 0.9238795292366128, 0, 0.38268342717215614)
  ];

  for (var ti = 0; ti < tValues.length; ti++) {
    for (var si = 0; si < sValues.length; si++) {
      for (var ri = 0; ri < rValues.length; ri++) {
        var t = tValues[ti];
        var s = sValues[si];
        var r = rValues[ri];

        var m = new Matrix4().compose(t, r, s);
        var t2 = new Vector3();
        var r2 = new Quaternion();
        var s2 = new Vector3();

        m.decompose(t2, r2, s2);

        var m2 = new Matrix4().compose(t2, r2, s2);

        /*
				// debug code
				var matrixIsSame = matrixEquals4( m, m2 );
				if ( ! matrixIsSame ) {

					console.log( t, s, r );
					console.log( t2, s2, r2 );
					console.log( m, m2 );

				}
				*/

        assert.ok(matrixEquals4(m, m2), 'Passed!');
      }
    }
  }
});

test.skip('Matrix4#makePerspective', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#makeOrthographic', assert => {
  var a = new Matrix4().makeOrthographic(-1, 1, -1, 1, 1, 100);
  var expected = new Matrix4().set(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -2 / 99, -101 / 99, 0, 0, 0, 1);

  assert.ok(matrixEquals4(a, expected), 'Check result');
});

test('Matrix4#equals', assert => {
  var a = new Matrix4().set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var b = new Matrix4().set(0, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

  assert.notOk(a.equals(b), 'Check that a does not equal b');
  assert.notOk(b.equals(a), 'Check that b does not equal a');

  a.copy(b);
  assert.ok(a.equals(b), 'Check that a equals b after copy()');
  assert.ok(b.equals(a), 'Check that b equals a after copy()');
});

test.skip('Matrix4#fromArray', assert => {
  assert.ok(false, "everything's gonna be alright");
});

test('Matrix4#toArray', assert => {
  var a = new Matrix4().set(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  var noOffset = [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16];
  var withOffset = [undefined, 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16];

  var array = a.toArray();
  assert.deepEqual(array, noOffset, 'No array, no offset');

  var array = [];
  a.toArray(array);
  assert.deepEqual(array, noOffset, 'With array, no offset');

  var array = [];
  a.toArray(array, 1);
  assert.deepEqual(array, withOffset, 'With array, with offset');
});
