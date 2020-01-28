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
import {tapeEquals} from 'test/utils/tape-assertions';

import {configure, _Polygon as Polygon} from '@math.gl/core';

const TEST_CASES = [
  {
    title: 'non-closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0]],
    area: 22,
    sign: -1,
    segments: 5
  },
  {
    title: 'exactly closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0], [5, 0]],
    area: 22,
    sign: -1,
    segments: 5
  },
  {
    title: 'EPSILON closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0], [5, 0.0000001]],
    area: 22,
    sign: -1,
    segments: 5
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
  configure({EPSILON: 1e-4});

  for (const tc of TEST_CASES) {
    const polygon = new Polygon(tc.polygon);
    t.ok(polygon, `${tc.title}: Created polygon`);
    tapeEquals(
      t,
      polygon.getSignedArea(),
      tc.area * tc.sign,
      `${tc.title}: getSignedArea() returned expected result`
    );
    tapeEquals(t, polygon.getArea(), tc.area, `${tc.title}: getArea() returned expected result`);
    tapeEquals(
      t,
      polygon.getWindingDirection(),
      tc.sign,
      `${tc.title}: getWindingDirection() returned expected result`
    );
  }

  configure({EPSILON: 1e-12});
  t.end();
});

test('Polygon#forEachSegment', t => {
  const config = configure({EPSILON: 1e-4});

  for (const tc of TEST_CASES) {
    const polygon = new Polygon(tc.polygon);
    let count = 0;
    polygon.forEachSegment(() => {
      count++;
    });
    t.equals(count, tc.segments, 'forEachSegment() iterated over all virtual segments');
  }

  configure(config);
  t.end();
});
