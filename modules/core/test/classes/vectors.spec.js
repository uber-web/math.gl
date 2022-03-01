// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

/* eslint-disable max-statements */
import {Vector2, Vector3, Vector4} from '@math.gl/core';
import test from 'tape-promise/tape';

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

test('Math#types', (t) => {
  t.equals(typeof Vector2, 'function');
  t.equals(typeof Vector3, 'function');
  t.equals(typeof Vector4, 'function');
  t.end();
});

test('Math#construct and Array.isArray check', (t) => {
  t.ok(Array.isArray(new Vector2()));
  t.ok(Array.isArray(new Vector3()));
  t.ok(Array.isArray(new Vector4()));
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector2#members and methods', (t) => {
  const v = new Vector2();
  t.equals(v.x, 0);
  t.equals(v.y, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector4#members and methods', (t) => {
  const v = new Vector4();
  t.equals(v.x, 0);
  t.equals(v.y, 0);
  t.equals(v.z, 0);
  t.equals(v.w, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});
