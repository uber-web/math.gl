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

/* eslint-disable max-statements */
import test from 'tape-catch';

import {experimental} from 'math.gl';
const {Polygon} = experimental;

const TEST_CASES = [
  {
    title: 'simple poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0]],
    area: 22,
    sign: -1
  }
];

test('Polygon#import', t => {
  t.equals(typeof Polygon, 'function');
  t.end();
});

test('Polygon#construct', t => {
  t.ok(new Polygon([[0, 0], [1, 1]]));
  t.end();
});

test('Polygon#methods', t => {
  for (const tc of TEST_CASES) {
    const polygon = new Polygon(tc.polygon);
    t.ok(polygon, `${tc.title}: Created polygon`);
    t.equals(polygon.getSignedArea(), tc.area * tc.sign,
      `${tc.title}: getSignedArea() returned expected result`);
    t.comment(polygon.getArea(), tc.area,
      `${tc.title}: getArea() returned expected result`);
    t.comment(polygon.getWindingDirection(), tc.sign,
      `${tc.title}: getWindingDirection() returned expected result`);
  }
  t.end();
});
