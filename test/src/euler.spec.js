import {_Euler as Euler, equals} from 'math.gl';
import test from 'tape-catch';

const DEGREE_TO_RADIANS = Math.PI / 180;

test('Euler#import', t => {
  t.equals(typeof Euler, 'function');
  t.end();
});

test('Euler#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Euler()));
  t.end();
});

test('Euler#toQuaternion', t => {
  const eulers = [
    new Euler(
      90 * DEGREE_TO_RADIANS,
      -89 * DEGREE_TO_RADIANS,
      -180 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    ),
    new Euler(
      30 * DEGREE_TO_RADIANS,
      45 * DEGREE_TO_RADIANS,
      90 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    ),
    new Euler(
      11 * DEGREE_TO_RADIANS,
      67 * DEGREE_TO_RADIANS,
      45 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    )
  ];
  const quaternions = eulers.map(e => e.toQuaternion());
  t.ok(quaternions.every((q, i) => equals(new Euler().fromQuaternion(q), eulers[i])));
  t.end();
});
