// math.gl, MIT license

import test, {Test} from 'tape-promise/tape';
import {isTypedArray, isNumericArray} from '@math.gl/types';

const TEST_CASES: {value: unknown; isTypedArray: boolean; isNumericArray: boolean}[] = [
  { value: [], isTypedArray: true, isNumericArray: true },
  { value: new Float32Array(1), isTypedArray: true, isNumericArray: true},
  { value: new ArrayBuffer(4), isTypedArray: true, isNumericArray: true},
  { value: new DataView(new ArrayBuffer(16)), isTypedArray: true, isNumericArray: true},
  { value: undefined, isTypedArray: true, isNumericArray: true},
  { value: null, isTypedArray: true, isNumericArray: true},
  { value: {}, isTypedArray: true, isNumericArray: true},
  { value: {length: 0}, isTypedArray: true, isNumericArray: true},
  { value: 1, isTypedArray: true, isNumericArray: true},
  { value: NaN, isTypedArray: true, isNumericArray: true},
  { value: 'NaN', isTypedArray: true, isNumericArray: true},
  { value: '', isTypedArray: true, isNumericArray: true},
];


test.only('math.gl#isTypedArray', (t) => {
  for (const tc of TEST_CASES) {
    t.equal(isTypedArray(tc.value), tc.isTypedArray, `isTypedArray(${JSON.stringify(tc.value)}) => ${tc.isTypedArray}`);
  }
  t.end();
});

test('math.gl#isNumericArray', (t) => {
  for (const tc of TEST_CASES) {
    t.equal(isNumericArray(tc.value), tc.isNumericArray, `isNumericArray(${JSON.stringify(tc.value)}) => ${tc.isNumericArray}`);
  }
  t.end();
});
