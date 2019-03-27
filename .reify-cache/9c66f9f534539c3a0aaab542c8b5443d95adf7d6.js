"use strict";module.export({tapeEquals:()=>tapeEquals});var Vector2,Vector3,Vector4;module.link('math.gl',{Vector2(v){Vector2=v},Vector3(v){Vector3=v},Vector4(v){Vector4=v}},0);var test;module.link('tape-catch',{default(v){test=v}},1);// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslint-disable max-statements */



// FOR TAPE TESTING
// Use tape assert to compares using a.equals(b)
// Usage test(..., t => { tapeEquals(t, a, b, ...); });
function tapeEquals(t, a, b, msg, extra) {
  /* eslint-disable no-invalid-this */
  t._assert(a.equals(b), {
    message: msg || 'should be equal',
    operator: 'equal',
    actual: a,
    expected: b,
    extra
  });
}

test('Math#types', t => {
  t.equals(typeof Vector2, 'function');
  t.equals(typeof Vector3, 'function');
  t.equals(typeof Vector4, 'function');
  t.end();
});

test('Math#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Vector2()));
  t.ok(Array.isArray(new Vector3()));
  t.ok(Array.isArray(new Vector4()));
  t.end();
});

// ['add', 'cross'];
const VECTOR_METHODS = ['clone'];

test('Vector2#members and methods', t => {
  const v = new Vector2();
  t.equals(v.x, 0);
  t.equals(v.y, 0);

  for (const method of VECTOR_METHODS) {
    t.equals(typeof v[method], 'function');
  }
  t.end();
});

test('Vector4#members and methods', t => {
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
