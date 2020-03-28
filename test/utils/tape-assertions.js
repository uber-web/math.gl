import {equals, withEpsilon} from '@math.gl/core';

function isEqual(a, b) {
  if (a && a.equals) {
    return a.equals(b);
  }
  if (b && b.equals) {
    return b.equals(a);
  }
  return equals(a, b);
}

// FOR TAPE TESTING
// Use tape assert to compares using a.equals(b)
// Usage test(..., t => { tapeEquals(t, a, b, ...); });
export function tapeEquals(t, a, b, msg, extra) {
  t._assert(isEqual(a, b), {
    message: msg || 'should be equal',
    operator: 'equal',
    actual: a,
    expected: b,
    extra
  });
}

export function tapeNotEquals(t, a, b, msg, extra) {
  t._assert(!isEqual(a, b), {
    message: msg || 'should not be equal',
    operator: 'notEqual',
    actual: a,
    expected: b,
    extra
  });
}

// eslint-disable-next-line max-params
export function tapeEqualsEpsilon(t, a, b, epsilon, msg, extra) {
  return withEpsilon(epsilon, () => tapeEquals(t, a, b, msg, extra));
}
