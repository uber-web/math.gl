import {_Euler as Euler, equals} from 'math.gl';
import test from 'tape-catch';

test('Euler#import', t => {
  t.equals(typeof Euler, 'function');
  t.end();
});

test('Euler#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Euler()));
  t.end();
});

test('Euler.toQuaternion', t => {
  const eulers = [
    new Euler(30 / 180 * Math.PI, 45 / 180 * Math.PI, 90 / 180 * Math.PI, Euler.RollPitchYaw),
    new Euler(11 / 180 * Math.PI, 67 / 180 * Math.PI, 45 / 180 * Math.PI, Euler.RollPitchYaw),
  ];
  const quaternions = eulers.map(e => e.toQuaternion());
  t.ok(quaternions.every((q, i) => equals(q.toEuler(), eulers[i])));
  t.end();
});

