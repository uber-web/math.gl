/* eslint-disable max-statements, max-depth */
import {experimental} from 'math.gl';
const {SphericalCoordinates} = experimental;
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

const REPRESENTATION_TEST_CASES = [
  {
    representations: [
      {theta: 0, phi: 0, radius: 1},
      {pitch: 0, bearing: 180, radius: 1}
    ],
    vector: [0, 0, 1]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: Math.PI, radius: 1},
      {pitch: 90, bearing: 0, radius: 1}
    ],
    vector: [0, 1, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: 0, radius: 1},
      {pitch: 90, bearing: 180, altitude: 1}
    ],
    vector: [0, -1, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: Math.PI / 2, radius: 1},
      {pitch: 90, bearing: 90, altitude: 1}
    ],
    vector: [1, 0, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: -Math.PI / 2, radius: 1},
      {pitch: 90, bearing: 270, altitude: 1}
    ],
    vector: [-1, 0, 0]
  },
  {
    representations: [
      {theta: Math.PI, phi: 0, radius: 1},
      {pitch: 180, bearing: 180, altitude: 1}
    ],
    vector: [0, 0, -1]
  }
];

test('SphericalCoordinates#import', t => {
  t.equals(typeof SphericalCoordinates, 'function', 'SphericalCoordinates import OK');
  t.end();
});

test('SphericalCoordinates#constructor', t => {
  const spherical = new SphericalCoordinates();
  t.ok(spherical, 'SphericalCoordinates default constructor OK');
  t.end();
});

test('SphericalCoordinates#representations', t => {
  for (const tc of REPRESENTATION_TEST_CASES) {
    for (const rep1 of tc.representations) {
      // Create
      const spherical = new SphericalCoordinates(rep1);
      // Checkl various representations
      for (const rep2 of tc.representations) {
        for (const key in Object.keys(rep2)) {
          t.equals(spherical[key], rep2[key]);
        }
      }
      // Check vector
      tapeEquals(t, spherical.toVector3(), tc.vector, `Vector conversion OK ${spherical}`);
    }
  }
  t.end();
});
