"use strict";module.export({tapeEquals:()=>tapeEquals});var equals;module.link('math.gl',{equals(v){equals=v}},0);

// FOR TAPE TESTING
// Use tape assert to compares using a.equals(b)
// Usage test(..., t => { tapeEquals(t, a, b, ...); });
function tapeEquals(t, a, b, msg, extra) {
  /* eslint-disable no-invalid-this */
  t._assert(Number.isFinite(a) ? equals(a, b) : a.equals(b), {
    message: msg || 'should be equal',
    operator: 'equal',
    actual: a,
    expected: b,
    extra
  });
}
