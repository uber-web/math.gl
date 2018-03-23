import {experimental} from 'math.gl';
const {Euler} = experimental;

import test from 'tape-catch';

test('Euler#import', t => {
  t.equals(typeof Euler, 'function');
  t.end();
});

test('Euler#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Euler()));
  t.end();
});

