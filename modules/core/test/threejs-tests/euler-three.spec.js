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
// Original authors:
// @author bhouston / http://exocortex.com
// @author TristanVALCKE / https://github.com/Itee

/* eslint-disable */
/* global QUnit */
import {Euler} from 'math.gl/Euler';
import {Matrix4} from 'math.gl/Matrix4';
import {Quaternion} from 'math.gl/Quaternion';
import {Vector3} from 'math.gl/Vector3';
import {x, y, z} from './Constants.tests';

const eulerZero = new Euler(0, 0, 0, 'XYZ');
const eulerAxyz = new Euler(1, 0, 0, 'XYZ');
const eulerAzyx = new Euler(0, 1, 0, 'ZYX');

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

function eulerEquals(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  var diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);

  return diff < tolerance;
}

function quatEquals(a, b, tolerance) {
  tolerance = tolerance || 0.0001;
  var diff = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z) + Math.abs(a.w - b.w);

  return diff < tolerance;
}

export default QUnit.module('Maths', () => {
  QUnit.module('Euler', () => {
    // INSTANCING
    QUnit.test('Instancing', t => {
      var a = new Euler();
      t.ok(a.equals(eulerZero), 'Passed!');
      t.ok(!a.equals(eulerAxyz), 'Passed!');
      t.ok(!a.equals(eulerAzyx), 'Passed!');
    });

    // STATIC STUFF
    QUnit.todo('RotationOrders', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('DefaultOrder', t => {
      t.ok(false, "everything's gonna be alright");
    });

    // PROPERTIES STUFF
    QUnit.todo('x', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('y', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('z', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('order', t => {
      t.ok(false, "everything's gonna be alright");
    });

    // PUBLIC STUFF
    QUnit.todo('isEuler', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.test('set/setFromVector3/toVector3', t => {
      var a = new Euler();

      a.set(0, 1, 0, 'ZYX');
      t.ok(a.equals(eulerAzyx), 'Passed!');
      t.ok(!a.equals(eulerAxyz), 'Passed!');
      t.ok(!a.equals(eulerZero), 'Passed!');

      var vec = new Vector3(0, 1, 0);

      var b = new Euler().setFromVector3(vec, 'ZYX');
      t.ok(a.equals(b), 'Passed!');

      var c = b.toVector3();
      t.ok(c.equals(vec), 'Passed!');
    });

    QUnit.test('clone/copy/equals', t => {
      var a = eulerAxyz.clone();
      t.ok(a.equals(eulerAxyz), 'Passed!');
      t.ok(!a.equals(eulerZero), 'Passed!');
      t.ok(!a.equals(eulerAzyx), 'Passed!');

      a.copy(eulerAzyx);
      t.ok(a.equals(eulerAzyx), 'Passed!');
      t.ok(!a.equals(eulerAxyz), 'Passed!');
      t.ok(!a.equals(eulerZero), 'Passed!');
    });

    QUnit.test('Quaternion.setFromEuler/Euler.fromQuaternion', t => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var q = new Quaternion().setFromEuler(v);

        var v2 = new Euler().setFromQuaternion(q, v.order);
        var q2 = new Quaternion().setFromEuler(v2);
        t.ok(quatEquals(q, q2), 'Passed!');
      }
    });

    QUnit.test('Matrix4.setFromEuler/Euler.fromRotationMatrix', t => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var m = new Matrix4().makeRotationFromEuler(v);

        var v2 = new Euler().setFromRotationMatrix(m, v.order);
        var m2 = new Matrix4().makeRotationFromEuler(v2);
        t.ok(matrixEquals4(m, m2, 0.0001), 'Passed!');
      }
    });

    QUnit.test('reorder', t => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var q = new Quaternion().setFromEuler(v);

        v.reorder('YZX');
        var q2 = new Quaternion().setFromEuler(v);
        t.ok(quatEquals(q, q2), 'Passed!');

        v.reorder('ZXY');
        var q3 = new Quaternion().setFromEuler(v);
        t.ok(quatEquals(q, q3), 'Passed!');
      }
    });

    QUnit.test('set/get properties, check callbacks', t => {
      var a = new Euler();
      a.onChange(function() {
        t.step('set: onChange called');
      });

      t.expect(8);

      // should be 4 calls to onChangeCallback
      a.x = 1;
      a.y = 2;
      a.z = 3;
      a.order = 'ZYX';

      t.strictEqual(a.x, 1, 'get: check x');
      t.strictEqual(a.y, 2, 'get: check y');
      t.strictEqual(a.z, 3, 'get: check z');
      t.strictEqual(a.order, 'ZYX', 'get: check order');
    });

    QUnit.test('clone/copy, check callbacks', t => {
      t.expect(3);

      var a = new Euler(1, 2, 3, 'ZXY');
      var b = new Euler(4, 5, 6, 'XZY');
      var cb = function() {
        t.step('onChange called');
      };
      a.onChange(cb);
      b.onChange(cb);

      // clone doesn't trigger onChange
      var a = b.clone();
      t.ok(a.equals(b), 'clone: check if a equals b');

      // copy triggers onChange once
      var a = new Euler(1, 2, 3, 'ZXY');
      a.onChange(cb);
      a.copy(b);
      t.ok(a.equals(b), 'copy: check if a equals b');
    });

    QUnit.test('toArray', t => {
      var order = 'YXZ';
      var a = new Euler(x, y, z, order);

      var array = a.toArray();
      t.strictEqual(array[0], x, 'No array, no offset: check x');
      t.strictEqual(array[1], y, 'No array, no offset: check y');
      t.strictEqual(array[2], z, 'No array, no offset: check z');
      t.strictEqual(array[3], order, 'No array, no offset: check order');

      var array = [];
      a.toArray(array);
      t.strictEqual(array[0], x, 'With array, no offset: check x');
      t.strictEqual(array[1], y, 'With array, no offset: check y');
      t.strictEqual(array[2], z, 'With array, no offset: check z');
      t.strictEqual(array[3], order, 'With array, no offset: check order');

      var array = [];
      a.toArray(array, 1);
      t.strictEqual(array[0], undefined, 'With array and offset: check [0]');
      t.strictEqual(array[1], x, 'With array and offset: check x');
      t.strictEqual(array[2], y, 'With array and offset: check y');
      t.strictEqual(array[3], z, 'With array and offset: check z');
      t.strictEqual(array[4], order, 'With array and offset: check order');
    });

    QUnit.test('fromArray', t => {
      t.expect(10);

      var a = new Euler();
      var array = [x, y, z];
      var cb = function() {
        t.step('onChange called');
      };
      a.onChange(cb);

      a.fromArray(array);
      t.strictEqual(a.x, x, 'No order: check x');
      t.strictEqual(a.y, y, 'No order: check y');
      t.strictEqual(a.z, z, 'No order: check z');
      t.strictEqual(a.order, 'XYZ', 'No order: check order');

      var a = new Euler();
      var array = [x, y, z, 'ZXY'];
      a.onChange(cb);
      a.fromArray(array);
      t.strictEqual(a.x, x, 'With order: check x');
      t.strictEqual(a.y, y, 'With order: check y');
      t.strictEqual(a.z, z, 'With order: check z');
      t.strictEqual(a.order, 'ZXY', 'With order: check order');
    });

    QUnit.todo('onChange', t => {
      t.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('onChangeCallback', t => {
      t.ok(false, "everything's gonna be alright");
    });

    // OTHERS
    QUnit.test('gimbalLocalQuat', t => {
      // known problematic quaternions
      var q1 = new Quaternion(
        0.5207769385244341,
        -0.4783214164122354,
        0.520776938524434,
        0.47832141641223547
      );
      var q2 = new Quaternion(
        0.11284905712620674,
        0.6980437630368944,
        -0.11284905712620674,
        0.6980437630368944
      );

      var eulerOrder = 'ZYX';

      // create Euler directly from a Quaternion
      var eViaQ1 = new Euler().setFromQuaternion(q1, eulerOrder); // there is likely a bug here

      // create Euler from Quaternion via an intermediate Matrix4
      var mViaQ1 = new Matrix4().makeRotationFromQuaternion(q1);
      var eViaMViaQ1 = new Euler().setFromRotationMatrix(mViaQ1, eulerOrder);

      // the results here are different
      t.ok(eulerEquals(eViaQ1, eViaMViaQ1), 'Passed!'); // this result is correct
    });
  });
});
