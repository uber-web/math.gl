// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslint-disable*/
import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';

import {Quaternion, Vector3, Matrix4, Pose, equals} from 'math.gl';

function extendToMatrix4(arr) {
  const matrix4 = new Matrix4();
  matrix4.setRowMajor(
    arr[0],
    arr[1],
    arr[2],
    0,
    arr[3],
    arr[4],
    arr[5],
    0,
    arr[6],
    arr[7],
    arr[8],
    0,
    0,
    0,
    0,
    1
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
  // t.equals(typeof q.setQuaternion, 'function');
  // t.equals(typeof q.sub, 'function');
  // t.equals(typeof q.unit, 'function');
  t.end();
});

test('Quaternion.fromAxisRotation', t => {
  let q = new Quaternion().fromAxisRotation(new Vector3(0, 0, 1), Math.PI);
  tapeEquals(t, q, [0, 0, 1, Math.cos(Math.PI / 2)]);

  q = new Quaternion().fromAxisRotation(new Vector3(0, 1, 0), Math.PI);
  tapeEquals(t, q, [0, 1, 0, Math.cos(Math.PI / 2)]);

  q = new Quaternion().fromAxisRotation(new Vector3(1, 0, 0), Math.PI);
  tapeEquals(t, q, [1, 0, 0, Math.cos(Math.PI / 2)]);

  // const q1 = new Quaternion().fromAxisRotation(new Vector3(5, 0, -2), Math.PI / 3);
  // const q2 = new Quaternion().fromAxisRotation(new Vector3(1, 3, 0), Math.PI / 4);
  // q1.multiply(q2);
  // tapeEquals(t, q1, [0.6011183144537015, 0.29193457751898655, -0.0030205353559888126, 0.7439232829017486]);
  t.end();
});

const quatA = [1, 2, 3, 4];
const quatB = [5, 6, 7, 8];
const out = [0, 0, 0, 0];
const vec = [1, 1, -1];
const id = [0, 0, 0, 1];
const deg90 = Math.PI / 2;

test('create', t => {
  tapeEquals(
    t,
    new Quaternion(),
    [0, 0, 0, 1],
    'should return a 4 element array initialized to an identity quaternion'
  );
  tapeEquals(t, new Quaternion(1, 1, 1, 1), [1, 1, 1, 1], 'should return a 4 element array');
  tapeEquals(t, new Quaternion([2, 2, 2, 2]), [2, 2, 2, 2], 'should return a 4 element array');
  t.end();
});

test('clone', t => {
  const result = new Quaternion(quatA).clone();
  tapeEquals(
    t,
    result,
    quatA,
    'should return a 4 element array initialized to the values in quatA'
  );
  t.end();
});

test('copy', t => {
  const result = new Quaternion().copy(quatA);
  tapeEquals(t, result, [1, 2, 3, 4], 'should place values into out');
  t.end();
});

test('set', t => {
  const result = new Quaternion().set(1, 2, 3, 4);
  tapeEquals(
    t,
    result,
    [1, 2, 3, 4],
    'should return a 4 element array initialized to the values passed'
  );
  t.end();
});

test('identity', t => {
  const result = new Quaternion(1, 1, 1, 1).identity();
  tapeEquals(t, result, [0, 0, 0, 1], 'should return identity quaternion');
  t.end();
});

test('setAxisAngle', t => {
  const result = new Quaternion().setAxisAngle([1, 0, 0], Math.PI * 0.5);
  tapeEquals(t, result, [0.707106, 0, 0, 0.707106], 'should return correct values');
  t.end();
});

test('transform', t => {
  const quat = new Quaternion();
  t.throws(() => quat.transformVector4([NaN, 0, 0, 0]));
  t.throws(() => quat.transformVector4([0, 0, 0]));
  t.throws(() => quat.transformVector4([0, 0, 0, 0, 0]));
  t.end();
});

test.skip('getAxisAngle', tt => {
  test('getAxisAngle for a quaternion representing no rotation', t => {
    const quat = new Quaternion().setAxisAngle(out[(0, 1, 0)], 0.0);
    const out = [0, 0, 0];
    deg90 = quat.getAxisAngle(out);
    tapeEquals(
      t,
      deg90 % (Math.PI * 2.0),
      0.0,
      'should return a multiple of 2*PI as the angle component'
    );
  });

  /*
	test('for a simple rotation about X axis', t => {
		beforeEach(function() { result = quat.setAxisAngle(out, [1, 0, 0], 0.7778); deg90 = quat.getAxisAngle(vec, out); });
		test('should return the same provided angle', function() { expect(deg90).toBeEqualish(0.7778); });
		test('should return the X axis as the angle', function() { expect(vec).toBeEqualish([1, 0, 0]); });
	});

	test('for a simple rotation about Y axis', t => {
		beforeEach(function() { result = quat.setAxisAngle(out, [0, 1, 0], 0.879546); deg90 = quat.getAxisAngle(vec, out); });
		test('should return the same provided angle', function() { expect(deg90).toBeEqualish(0.879546); });
		test('should return the X axis as the angle', function() { expect(vec).toBeEqualish([0, 1, 0]); });
	});

	test('for a simple rotation about Z axis', t => {
		beforeEach(function() { result = quat.setAxisAngle(out, [0, 0, 1], 0.123456); deg90 = quat.getAxisAngle(vec, out); });
		test('should return the same provided angle', function() { expect(deg90).toBeEqualish(0.123456); });
		test('should return the X axis as the angle', function() { expect(vec).toBeEqualish([0, 0, 1]); });
	});

	test('for a slightly irregular axis and right angle', t => {
		beforeEach(function() { result = quat.setAxisAngle(out, [0.707106, 0, 0.707106], Math.PI * 0.5); deg90 = quat.getAxisAngle(vec, out); });
		test('should place values into vec', function() { expect(vec).toBeEqualish([0.707106, 0, 0.707106]); });
		test('should return a numeric angle', function() { expect(deg90).toBeEqualish(Math.PI * 0.5); });
	});

	test('for a very irregular axis and negative input angle', t => {
		beforeEach(function() {
			quatA = quat.setAxisAngle(quatA, [0.65538555, 0.49153915, 0.57346237], 8.8888);
			deg90 = quat.getAxisAngle(vec, quatA);
			quatB = quat.setAxisAngle(quatB, vec, deg90);
		});
		test('should return an angle between 0 and 2*PI', function() { expect(deg90).toBeGreaterThan(0.0); expect(deg90).toBeLessThan(Math.PI * 2.0); });
		test('should create the same quaternion from axis and angle extracted', function() { expect(quatA).toBeEqualish(quatB); });
	});
  */
  t.end();
});

/*
test('add', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.add(out, quatA, quatB); });

		test('should place values into out', function() { expect(out).toBeEqualish([6, 8, 10, 12]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.add(quatA, quatA, quatB); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([6, 8, 10, 12]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatB is the output quaternion', t => {
		beforeEach(function() { result = quat.add(quatB, quatA, quatB); });

		test('should place values into quatB', function() { expect(quatB).toBeEqualish([6, 8, 10, 12]); });
		test('should return quatB', function() { expect(result).toBe(quatB); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});
});

test('multiply', t => {
	test('should have an alias called 'mul'', function() { expect(quat.mul).toEqual(quat.multiply); });

	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.multiply(out, quatA, quatB); });

		test('should place values into out', function() { expect(out).toBeEqualish([24, 48, 48, -6]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.multiply(quatA, quatA, quatB); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([24, 48, 48, -6]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatB is the output quaternion', t => {
		beforeEach(function() { result = quat.multiply(quatB, quatA, quatB); });

		test('should place values into quatB', function() { expect(quatB).toBeEqualish([24, 48, 48, -6]); });
		test('should return quatB', function() { expect(result).toBe(quatB); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});
});

test('scale', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.scale(out, quatA, 2); });

		test('should place values into out', function() { expect(out).toBeEqualish([2, 4, 6, 8]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.scale(quatA, quatA, 2); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([2, 4, 6, 8]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
	});
});

test('length', t => {
	test('should have an alias called 'len'', function() { expect(quat.len).toEqual(quat.length); });

	beforeEach(function() { result = quat.len(quatA); });

	test('should return the length', function() { expect(result).toBeEqualish(5.477225); });
});

test('squaredLength', t => {
	test('should have an alias called 'sqrLen'', function() { expect(quat.sqrLen).toEqual(quat.squaredLength); });

	beforeEach(function() { result = quat.squaredLength(quatA); });

	test('should return the squared length', function() { expect(result).toEqual(30); });
});

test('normalize', t => {
	beforeEach(function() { quatA = [5, 0, 0, 0]; });

	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.normalize(out, quatA); });

		test('should place values into out', function() { expect(out).toBeEqualish([1, 0, 0, 0]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([5, 0, 0, 0]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.normalize(quatA, quatA); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([1, 0, 0, 0]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
	});
});

test('invert', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.invert(out, quatA); });

		test('should place values into out', function() { expect(out).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.invert(quatA, quatA); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([-0.033333, -0.066666, -0.1, 0.133333]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
	});
});

test('conjugate', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.conjugate(out, quatA); });

		test('should place values into out', function() { expect(out).toBeEqualish([-1, -2, -3, 4]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.conjugate(quatA, quatA); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([-1, -2, -3, 4]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
	});
});

test('str', t => {
	beforeEach(function() { result = quat.str(quatA); });

	test('should return a string representation of the quaternion', function() { expect(result).toEqual('quat(1, 2, 3, 4)'); });
});

test('exactEquals', t => {
	let quatC, r0, r1;
	beforeEach(function() {
		quatA = [0, 1, 2, 3];
		quatB = [0, 1, 2, 3];
		quatC = [1, 2, 3, 4];
		r0 = quat.exactEquals(quatA, quatB);
		r1 = quat.exactEquals(quatA, quatC);
	});

	test('should return true for identical quaternions', function() { expect(r0).toBe(true); });
	test('should return false for different quaternions', function() { expect(r1).toBe(false); });
	test('should not modify quatA', function() { expect(quatA).toBeEqualish([0, 1, 2, 3]); });
	test('should not modify quatB', function() { expect(quatB).toBeEqualish([0, 1, 2, 3]); });
});

test('equals', t => {
	let quatC, quatD, r0, r1, r2;
	beforeEach(function() {
		quatA = [0, 1, 2, 3];
		quatB = [0, 1, 2, 3];
		quatC = [1, 2, 3, 4];
		quatD = [1e-16, 1, 2, 3];
		r0 = quat.equals(quatA, quatB);
		r1 = quat.equals(quatA, quatC);
		r2 = quat.equals(quatA, quatD);
	});
	test('should return true for identical quaternions', function() { expect(r0).toBe(true); });
	test('should return false for different quaternions', function() { expect(r1).toBe(false); });
	test('should return true for close but not identical quaternions', function() { expect(r2).toBe(true); });
	test('should not modify quatA', function() { expect(quatA).toBeEqualish([0, 1, 2, 3]); });
	test('should not modify quatB', function() { expect(quatB).toBeEqualish([0, 1, 2, 3]); });
});

test('slerp', t => {
	test('the normal case', t => {
		beforeEach(function() {
			result = quat.slerp(out, [0, 0, 0, 1], [0, 1, 0, 0], 0.5);
		});

		test('should return out', function() { expect(result).toBe(out); });
		test('should calculate proper quat', function() {
			expect(result).toBeEqualish([0, 0.707106, 0, 0.707106]);
		});
	});

	test('where a == b', t => {
		beforeEach(function() {
			result = quat.slerp(out, [0, 0, 0, 1], [0, 0, 0, 1], 0.5);
		});

		test('should return out', function() { expect(result).toBe(out); });
		test('should calculate proper quat', function() {
			expect(result).toBeEqualish([0, 0, 0, 1]);
		});
	});

	test('where theta == 180deg', t => {
		beforeEach(function() {
			quat.rotateX(quatA, [1,0,0,0], Math.PI); // 180 deg
			result = quat.slerp(out, [1,0,0,0], quatA, 1);
		});

		test('should calculate proper quat', function() {
			expect(result).toBeEqualish([0,0,0,-1]);
		});
	});

	test('where a == -b', t => {
		beforeEach(function() {
			result = quat.slerp(out, [1, 0, 0, 0], [-1, 0, 0, 0], 0.5);
		});

		test('should return out', function() { expect(result).toBe(out); });
		test('should calculate proper quat', function() {
			expect(result).toBeEqualish([1, 0, 0, 0]);
		});
	});
});

test('rotateX', t => {
	beforeEach(function() {
		result = quat.rotateX(out, id, deg90);
	});

	test('should return out', function() { expect(result).toBe(out); });
	test('should transform vec accordingly', function() {
		vec3.transformQuat(vec, [0,0,-1], out);
		expect(vec).toBeEqualish([0, 1, 0]);
	});
});

test('rotateY', t => {
	beforeEach(function() {
		result = quat.rotateY(out, id, deg90);
	});

	test('should return out', function() { expect(result).toBe(out); });
	test('should transform vec accordingly', function() {
		vec3.transformQuat(vec, [0,0,-1], out);
		expect(vec).toBeEqualish([-1, 0, 0]);
	});
});

test('rotateZ', t => {
	beforeEach(function() {
		result = quat.rotateZ(out, id, deg90);
	});

	test('should return out', function() { expect(result).toBe(out); });
	test('should transform vec accordingly', function() {
		vec3.transformQuat(vec, [0,1,0], out);
		expect(vec).toBeEqualish([-1, 0, 0]);
	});
});

test('fromMat3', t => {
	let matr;

	test('legacy', t => {
		beforeEach(function() {
			matr = [ 1, 0,  0,
					 0, 0, -1,
					 0, 1,  0 ];
			result = quat.fromMat3(out, matr);
		});

		test('should set dest to the correct value', function() {
			expect(result).toBeEqualish([-0.707106, 0, 0, 0.707106]);
		});
	});

	test('where trace > 0', t => {
		beforeEach(function() {
			matr = [ 1, 0,  0,
					 0, 0, -1,
					 0, 1,  0 ];
			result = quat.fromMat3(out, matr);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should produce the correct transformation', function() {
			expect(vec3.transformQuat([], [0,1,0], out)).toBeEqualish([0,0,-1]);
		});
	});

	test('from a normal matrix looking 'backward'', t => {
		beforeEach(function() {
			matr = mat3.create();
			mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, 1], [0, 1, 0]))));
			result = quat.fromMat3(out, matr);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should produce the same transformation as the given matrix', function() {
			expect(vec3.transformQuat([], [3,2,-1], quat.normalize(out, out))).toBeEqualish(vec3.transformMat3([], [3,2,-1], matr));
		});
	});

	test('from a normal matrix looking 'left' and 'upside down'', t => {
		beforeEach(function() {
			matr = mat3.create();
			mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [-1, 0, 0], [0, -1, 0]))));
			result = quat.fromMat3(out, matr);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should produce the same transformation as the given matrix', function() {
			expect(vec3.transformQuat([], [3,2,-1], quat.normalize(out, out))).toBeEqualish(vec3.transformMat3([], [3,2,-1], matr));
		});
	});

	test('from a normal matrix looking 'upside down'', t => {
		beforeEach(function() {
			matr = mat3.create();
			mat3.transpose(matr, mat3.invert(matr, mat3.fromMat4(matr, mat4.lookAt(mat4.create(), [0, 0, 0], [0, 0, -1], [0, -1, 0]))));
			result = quat.fromMat3(out, matr);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should produce the same transformation as the given matrix', function() {
			expect(vec3.transformQuat([], [3,2,-1], quat.normalize(out, out))).toBeEqualish(vec3.transformMat3([], [3,2,-1], matr));
		});
	});
});

test('fromEuler', t => {
	test('legacy', t => {
		beforeEach(function() {
			result = quat.fromEuler(out, -90, 0, 0);
		});

		test('should set dest to the correct value', function() {
			expect(result).toBeEqualish([-0.707106, 0, 0, 0.707106]);
		});
	});

	test('where trace > 0', t => {
		beforeEach(function() {
			result = quat.fromEuler(out, -90, 0, 0);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should produce the correct transformation', function() {
			expect(vec3.transformQuat([], [0,1,0], out)).toBeEqualish([0,0,-1]);
		});
	});
});

test('setAxes', t => {
	let r;
	beforeEach(function() { r = vec3.create(); });

	test('looking left', t => {
		let view, up, right;
		beforeEach(function() {
			view = [-1, 0, 0];
			up   = [ 0, 1, 0];
			right= [ 0, 0,-1];
			result = quat.setAxes([], view, right, up);
		});

		test('should transform local view into world left', function() {
			r = vec3.transformQuat([], [0,0,-1], result);
			expect(r).toBeEqualish([1, 0, 0]);
		});

		test('should transform local right into world front', function() {
			r = vec3.transformQuat([], [1,0,0], result);
			expect(r).toBeEqualish([0, 0, 1]);
		});
	});

	test('given opengl defaults', t => {
		let view, up, right;
		beforeEach(function() {
			view = [0, 0, -1];
			up   = [0, 1,  0];
			right= [1, 0,  0];
			result = quat.setAxes(out, view, right, up);
		});

		test('should return out', function() {
			expect(result).toBe(out);
		});

		test('should produce identity', function() {
			expect(out).toBeEqualish([0, 0, 0, 1]);
		});
	});

	test('legacy example', t => {
		let view, up, right;
		beforeEach(function() {
			right= [1,  0, 0];
			up   = [0,  0, 1];
			view = [0, -1, 0];
			result = quat.setAxes(out, view, right, up);
		});

		xtest('should set correct quat4 values', function() {
			expect(result).toBeEqualish([0.707106, 0, 0, 0.707106]);
		});
	});
});

test('rotationTo', t => {
	let r;
	beforeEach(function() { r = vec3.create(); });

	test('at right angle', t => {
		beforeEach(function() {
			result = quat.rotationTo(out, [0, 1, 0], [1, 0, 0]);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('should calculate proper quaternion', function() {
			expect(out).toBeEqualish([0, 0, -0.707106, 0.707106]);
		});
	});

	test('when vectors are parallel', t => {
		beforeEach(function() {
			result = quat.rotationTo(out, [0, 1, 0], [0, 1, 0]);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('multiplying A should produce B', function() {
			expect(vec3.transformQuat(r, [0, 1, 0], out)).toBeEqualish([0, 1, 0]);
		});
	});

	test('when vectors are opposed X', t => {
		beforeEach(function() {
			result = quat.rotationTo(out, [1, 0, 0], [-1, 0, 0]);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('multiplying A should produce B', function() {
			expect(vec3.transformQuat(r, [1, 0, 0], out)).toBeEqualish([-1, 0, 0]);
		});
	});

	test('when vectors are opposed Y', t => {
		beforeEach(function() {
			result = quat.rotationTo(out, [0, 1, 0], [0, -1, 0]);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('multiplying A should produce B', function() {
			expect(vec3.transformQuat(r, [0, 1, 0], out)).toBeEqualish([0, -1, 0]);
		});
	});

	test('when vectors are opposed Z', t => {
		beforeEach(function() {
			result = quat.rotationTo(out, [0, 0, 1], [0, 0, -1]);
		});

		test('should return out', function() { expect(result).toBe(out); });

		test('multiplying A should produce B', function() {
			expect(vec3.transformQuat(r, [0, 0, 1], out)).toBeEqualish([0, 0, -1]);
		});
	});
});

test('lerp', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.lerp(out, quatA, quatB, 0.5); });

		test('should place values into out', function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.lerp(quatA, quatA, quatB, 0.5); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatB is the output quaternion', t => {
		beforeEach(function() { result = quat.lerp(quatB, quatA, quatB, 0.5); });

		test('should place values into quatB', function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
		test('should return quatB', function() { expect(result).toBe(quatB); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});
});

test('slerp', t => {
	test('with a separate output quaternion', t => {
		beforeEach(function() { result = quat.slerp(out, quatA, quatB, 0.5); });

		test('should place values into out', function() { expect(out).toBeEqualish([3, 4, 5, 6]); });
		test('should return out', function() { expect(result).toBe(out); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatA is the output quaternion', t => {
		beforeEach(function() { result = quat.slerp(quatA, quatA, quatB, 0.5); });

		test('should place values into quatA', function() { expect(quatA).toBeEqualish([3, 4, 5, 6]); });
		test('should return quatA', function() { expect(result).toBe(quatA); });
		test('should not modify quatB', function() { expect(quatB).toBeEqualish([5, 6, 7, 8]); });
	});

	test('when quatB is the output quaternion', t => {
		beforeEach(function() { result = quat.slerp(quatB, quatA, quatB, 0.5); });

		test('should place values into quatB', function() { expect(quatB).toBeEqualish([3, 4, 5, 6]); });
		test('should return quatB', function() { expect(result).toBe(quatB); });
		test('should not modify quatA', function() { expect(quatA).toBeEqualish([1, 2, 3, 4]); });
	});
});

test('random', t => {
	beforeEach(function() { result = quat.random(out); });

	test('should result in a normalized quaternion', function() {
		let copy = quat.clone(out);
		expect(quat.normalize(out, out)).toBeEqualish(copy);
	});
	test('should return out', function() { expect(result).toBe(out); });
});

*/
