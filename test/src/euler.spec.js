import {_Euler as Euler} from 'math.gl';
import test from 'tape-catch';

import {almostEqual} from '../utils/tape-equals';

test('Euler#import', t => {
  t.equals(typeof Euler, 'function');
  t.end();
});

test('Euler#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Euler()));
  t.end();
});

test('Euler.toQuaternion', t => {
  const e = new Euler(0, 0, 90 / 180 * Math.PI, Euler.RollPitchYaw);
  const q = e.toQuaternion();
  t.ok(almostEqual(q.toEuler(), e));
  t.end();
});

