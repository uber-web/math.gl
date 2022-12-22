// math.gl, MIT license

import test, {Test} from 'tape-promise/tape';
import {isTypedArray, isNumericArray} from '@math.gl/types';

const TEST_CASES: {value: unknown; isTypedArray: boolean; isNumericArray: boolean}[] = [
  {value: new Float32Array(1), isTypedArray: true, isNumericArray: true},
  {value: new Uint8Array(2), isTypedArray: true, isNumericArray: true},
  {value: [], isTypedArray: false, isNumericArray: true},
  {value: [100, 100], isTypedArray: false, isNumericArray: true},
  {value: ['a'], isTypedArray: false, isNumericArray: false},
  {value: new ArrayBuffer(4), isTypedArray: false, isNumericArray: false},
  {value: new DataView(new ArrayBuffer(16)), isTypedArray: false, isNumericArray: false},
  {value: undefined, isTypedArray: false, isNumericArray: false},
  {value: null, isTypedArray: false, isNumericArray: false},
  {value: {}, isTypedArray: false, isNumericArray: false},
  {value: {length: 0}, isTypedArray: false, isNumericArray: false},
  {value: 1, isTypedArray: false, isNumericArray: false},
  {value: NaN, isTypedArray: false, isNumericArray: false},
  {value: 'NaN', isTypedArray: false, isNumericArray: false},
  {value: '', isTypedArray: false, isNumericArray: false}
];

test('math.gl#isTypedArray', (t) => {
  for (const tc of TEST_CASES) {
    t.equal(
      Boolean(isTypedArray(tc.value)),
      tc.isTypedArray,
      `isTypedArray(${JSON.stringify(tc.value)}) => ${tc.isTypedArray}`
    );
  }
  t.end();
});

test.only('math.gl#isNumericArray', (t) => {
  for (const tc of TEST_CASES) {
    t.equal(
      Boolean(isNumericArray(tc.value)),
      tc.isNumericArray,
      `isNumericArray(${JSON.stringify(tc.value)}) => ${tc.isNumericArray}`
    );
  }
  t.end();
});
