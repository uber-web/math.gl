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

import {configure} from '@math.gl/core';
import {_Polygon as Polygon, WINDING_COUNTER_CLOCKWISE, WINDING_CLOCKWISE} from '@math.gl/polygon';

const TEST_CASES = [
  {
    title: 'non-closed poly (flat)',
    polygon: [5, 0, 6, 4, 4, 5, 1, 5, 1, 0],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 5
  },
  {
    title: 'exactly closed poly (flat)',
    polygon: [5, 0, 6, 4, 4, 5, 1, 5, 1, 0, 5, 0],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 5
  },
  {
    title: 'EPSILON closed poly (flat)',
    polygon: [5, 0, 6, 4, 4, 5, 1, 5, 1, 0, 5, 0.0000001],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 5
  },
  {
    title: 'Flat 2d array with custom start and end offsets',
    polygon: [0, 0, 1, 1, 2, 1, 2, 2, 1, 2, 9, 5],
    area: 1,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 4,
    options: {
      start: 2,
      end: 10,
      size: 2
    }
  },
  {
    title: 'Flat 3d array with custom start and end offsets',
    polygon: [0, 0, 0, 1, 1, 0, 1, 2, 0, 2, 2, 0, 2, 1, 0, 9, 5, 2],
    area: 1,
    sign: WINDING_CLOCKWISE,
    segments: 4,
    options: {
      start: 3,
      end: 15,
      size: 3
    }
  },
  {
    title: 'non-closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0]],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 5
  },
  {
    title: 'exactly closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0], [5, 0]],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
    segments: 5
  },
  {
    title: 'EPSILON closed poly',
    polygon: [[5, 0], [6, 4], [4, 5], [1, 5], [1, 0], [5, 0.0000001]],
    area: 22,
    sign: WINDING_COUNTER_CLOCKWISE,
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
    const polygon = new Polygon(tc.polygon, tc.options);
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
    const polygon = new Polygon(tc.polygon, tc.options);
    let count = 0;
    polygon.forEachSegment(() => {
      count++;
    });
    t.equals(count, tc.segments, 'forEachSegment() iterated over all virtual segments');
  }

  configure(config);
  t.end();
});

test('Polygon#methods', t => {
  const testPoints = [1, 1, 2, 2, 1, 3];
  const testPolygonReversed = [1, 3, 2, 2, 1, 1];

  const polygon = new Polygon(testPoints);

  t.equals(
    polygon.getWindingDirection(),
    WINDING_COUNTER_CLOCKWISE,
    'getWindingDirection() returned expected result'
  );

  polygon.ensureWindingDirection(WINDING_CLOCKWISE);
  t.ok(
    testPoints.every((value, index) => value === testPolygonReversed[index]),
    'ensureWindingDirection() reversed polygon as expected'
  );

  t.equals(
    polygon.getWindingDirection(),
    WINDING_CLOCKWISE,
    'getWindingDirection() returned expected result'
  );

  t.end();
});
