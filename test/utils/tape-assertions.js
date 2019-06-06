import {equals, _withEpsilon} from 'math.gl';

// FOR TAPE TESTING
// Use tape assert to compares using a.equals(b)
// Usage test(..., t => { tapeEquals(t, a, b, ...); });
export function tapeEquals(t, a, b, msg, extra) {
  /* eslint-disable no-invalid-this */
  let valid = false;
  if (a && a.equals) {
    valid = a.equals(b);
  } else if (b && b.equals) {
    valid = b.equals(a);
  } else {
    valid = equals(a, b);
  }
  t._assert(valid, {
    message: msg || 'should be equal',
    operator: 'equal',
    actual: a,
    expected: b,
    extra
  });
}

export function tapeNotEquals(t, a, b, msg, extra) {
  return !tapeEquals(t, a, b, msg, extra);
}

// eslint-disable-next-line max-params
export function tapeEqualsEpsilon(t, a, b, epsilon, msg, extra) {
  return _withEpsilon(epsilon, () => tapeEquals(t, a, b, msg, extra));
}

// eslint-disable-next-line max-params
// export function tapeEqualsExact(t, a, b, msg, extra) {
//   return t.deepE;
// }
