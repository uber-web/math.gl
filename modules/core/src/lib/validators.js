// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {config} from './common';

export function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }
  return v.every(Number.isFinite);
}

export function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error(`Invalid number ${value}`);
  }
  return value;
}

export function checkVector(v, length, callerName) {
  if (config.debug && !validateVector(v, length)) {
    throw new Error(`math.gl: ${callerName | ''} some fields set to invalid numbers'`);
  }
  return v;
}

// export function validateArray(v, offset, length) {
//   if (v.length !== length) {
//     return false;
//   }
//   length += offset;
//   for (let i = offset; i < length; ++i) {
//   	if (!Number.isFinite(array[i]))
//   }
//   return v.every(Number.isFinite);
// }

export function checkArray(v, length, callerName) {
  if (!validateVector(v, length)) {
    throw new Error(`math.gl: ${callerName | ''} some fields set to invalid numbers'`);
  }
}
