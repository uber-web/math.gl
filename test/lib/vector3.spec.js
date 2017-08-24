/* eslint-disable max-statements */
import {Vector3} from 'math.gl';
import test from 'tape-catch';

// FOR TAPE TESTING
// Use tape assert to compares using a.equals(b)
// Usage test(..., t => { tapeEquals(t, a, b, ...); });
export function tapeEquals(t, a, b, msg, extra) {
  /* eslint-disable no-invalid-this */
  t._assert(a.equals(b), {
    message: msg || 'should be equal',
    operator: 'equal',
    actual: a,
    expected: b,
    extra
  });
}

test('Vector3#import', t => {
  t.equals(typeof Vector3, 'function');
  t.end();
});

test('Vector3#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Vector3()));
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector3#members and methods', t => {
  const v = new Vector3();
  t.equals(v.x, 0);
  t.equals(v.y, 0);
  t.equals(v.z, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector3#rotates', t => {
  const TEST_CASES = [
    {input: [0, 0, 1], radians: Math.PI, rotateX: [0, 0, -1]},
    {input: [0, 0, 1], radians: Math.PI / 2, rotateX: [0, -1, 0]}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector3(...tc.input);
    tapeEquals(t, v.rotateX({radians: tc.radians}), tc.rotateX);
  }
  t.end();
});

test('Vector3#toString', t => {
  const TEST_CASES = [
    {input: [0, 0, 1], precision: 5, string: 'Vector3[0, 0, 1]'}
  ];
  for (const tc of TEST_CASES) {
    const v = new Vector3(...tc.input);
    t.equals(String(v), tc.string);
    t.equals(`${v}`, tc.string);
  }
  t.end();
});

test('Vector3#scale', t => {
  const TEST_CASES = [
    {input: [1, 2, 3], scale: 5, result: [5, 10, 15]},
    {input: [1, 2, 3], scale: [2, 0, -1], result: [2, 0, -3]}
  ];
  for (const tc of TEST_CASES) {
    const result = new Vector3(...tc.input).scale(tc.scale);
    tapeEquals(t, result, tc.result);
  }
  t.end();
});

