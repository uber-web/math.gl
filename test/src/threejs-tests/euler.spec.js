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
    QUnit.test('Instancing', assert => {
      var a = new Euler();
      assert.ok(a.equals(eulerZero), 'Passed!');
      assert.ok(!a.equals(eulerAxyz), 'Passed!');
      assert.ok(!a.equals(eulerAzyx), 'Passed!');
    });

    // STATIC STUFF
    QUnit.todo('RotationOrders', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('DefaultOrder', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    // PROPERTIES STUFF
    QUnit.todo('x', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('y', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('z', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('order', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    // PUBLIC STUFF
    QUnit.todo('isEuler', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.test('set/setFromVector3/toVector3', assert => {
      var a = new Euler();

      a.set(0, 1, 0, 'ZYX');
      assert.ok(a.equals(eulerAzyx), 'Passed!');
      assert.ok(!a.equals(eulerAxyz), 'Passed!');
      assert.ok(!a.equals(eulerZero), 'Passed!');

      var vec = new Vector3(0, 1, 0);

      var b = new Euler().setFromVector3(vec, 'ZYX');
      assert.ok(a.equals(b), 'Passed!');

      var c = b.toVector3();
      assert.ok(c.equals(vec), 'Passed!');
    });

    QUnit.test('clone/copy/equals', assert => {
      var a = eulerAxyz.clone();
      assert.ok(a.equals(eulerAxyz), 'Passed!');
      assert.ok(!a.equals(eulerZero), 'Passed!');
      assert.ok(!a.equals(eulerAzyx), 'Passed!');

      a.copy(eulerAzyx);
      assert.ok(a.equals(eulerAzyx), 'Passed!');
      assert.ok(!a.equals(eulerAxyz), 'Passed!');
      assert.ok(!a.equals(eulerZero), 'Passed!');
    });

    QUnit.test('Quaternion.setFromEuler/Euler.fromQuaternion', assert => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var q = new Quaternion().setFromEuler(v);

        var v2 = new Euler().setFromQuaternion(q, v.order);
        var q2 = new Quaternion().setFromEuler(v2);
        assert.ok(quatEquals(q, q2), 'Passed!');
      }
    });

    QUnit.test('Matrix4.setFromEuler/Euler.fromRotationMatrix', assert => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var m = new Matrix4().makeRotationFromEuler(v);

        var v2 = new Euler().setFromRotationMatrix(m, v.order);
        var m2 = new Matrix4().makeRotationFromEuler(v2);
        assert.ok(matrixEquals4(m, m2, 0.0001), 'Passed!');
      }
    });

    QUnit.test('reorder', assert => {
      var testValues = [eulerZero, eulerAxyz, eulerAzyx];
      for (var i = 0; i < testValues.length; i++) {
        var v = testValues[i];
        var q = new Quaternion().setFromEuler(v);

        v.reorder('YZX');
        var q2 = new Quaternion().setFromEuler(v);
        assert.ok(quatEquals(q, q2), 'Passed!');

        v.reorder('ZXY');
        var q3 = new Quaternion().setFromEuler(v);
        assert.ok(quatEquals(q, q3), 'Passed!');
      }
    });

    QUnit.test('set/get properties, check callbacks', assert => {
      var a = new Euler();
      a.onChange(function() {
        assert.step('set: onChange called');
      });

      assert.expect(8);

      // should be 4 calls to onChangeCallback
      a.x = 1;
      a.y = 2;
      a.z = 3;
      a.order = 'ZYX';

      assert.strictEqual(a.x, 1, 'get: check x');
      assert.strictEqual(a.y, 2, 'get: check y');
      assert.strictEqual(a.z, 3, 'get: check z');
      assert.strictEqual(a.order, 'ZYX', 'get: check order');
    });

    QUnit.test('clone/copy, check callbacks', assert => {
      assert.expect(3);

      var a = new Euler(1, 2, 3, 'ZXY');
      var b = new Euler(4, 5, 6, 'XZY');
      var cb = function() {
        assert.step('onChange called');
      };
      a.onChange(cb);
      b.onChange(cb);

      // clone doesn't trigger onChange
      var a = b.clone();
      assert.ok(a.equals(b), 'clone: check if a equals b');

      // copy triggers onChange once
      var a = new Euler(1, 2, 3, 'ZXY');
      a.onChange(cb);
      a.copy(b);
      assert.ok(a.equals(b), 'copy: check if a equals b');
    });

    QUnit.test('toArray', assert => {
      var order = 'YXZ';
      var a = new Euler(x, y, z, order);

      var array = a.toArray();
      assert.strictEqual(array[0], x, 'No array, no offset: check x');
      assert.strictEqual(array[1], y, 'No array, no offset: check y');
      assert.strictEqual(array[2], z, 'No array, no offset: check z');
      assert.strictEqual(array[3], order, 'No array, no offset: check order');

      var array = [];
      a.toArray(array);
      assert.strictEqual(array[0], x, 'With array, no offset: check x');
      assert.strictEqual(array[1], y, 'With array, no offset: check y');
      assert.strictEqual(array[2], z, 'With array, no offset: check z');
      assert.strictEqual(array[3], order, 'With array, no offset: check order');

      var array = [];
      a.toArray(array, 1);
      assert.strictEqual(array[0], undefined, 'With array and offset: check [0]');
      assert.strictEqual(array[1], x, 'With array and offset: check x');
      assert.strictEqual(array[2], y, 'With array and offset: check y');
      assert.strictEqual(array[3], z, 'With array and offset: check z');
      assert.strictEqual(array[4], order, 'With array and offset: check order');
    });

    QUnit.test('fromArray', assert => {
      assert.expect(10);

      var a = new Euler();
      var array = [x, y, z];
      var cb = function() {
        assert.step('onChange called');
      };
      a.onChange(cb);

      a.fromArray(array);
      assert.strictEqual(a.x, x, 'No order: check x');
      assert.strictEqual(a.y, y, 'No order: check y');
      assert.strictEqual(a.z, z, 'No order: check z');
      assert.strictEqual(a.order, 'XYZ', 'No order: check order');

      var a = new Euler();
      var array = [x, y, z, 'ZXY'];
      a.onChange(cb);
      a.fromArray(array);
      assert.strictEqual(a.x, x, 'With order: check x');
      assert.strictEqual(a.y, y, 'With order: check y');
      assert.strictEqual(a.z, z, 'With order: check z');
      assert.strictEqual(a.order, 'ZXY', 'With order: check order');
    });

    QUnit.todo('onChange', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    QUnit.todo('onChangeCallback', assert => {
      assert.ok(false, "everything's gonna be alright");
    });

    // OTHERS
    QUnit.test('gimbalLocalQuat', assert => {
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
      assert.ok(eulerEquals(eViaQ1, eViaMViaQ1), 'Passed!'); // this result is correct
    });
  });
});
