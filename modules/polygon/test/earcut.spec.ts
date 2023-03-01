/*
  Adapted from https://github.com/mapbox/earcut

  ISC License

  Copyright (c) 2016, Mapbox

  Permission to use, copy, modify, and/or distribute this software for any purpose
  with or without fee is hereby granted, provided that the above copyright notice
  and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
  OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
  TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
  THIS SOFTWARE.

 */

// @ts-nocheck External code

import fs from 'fs';
import test from 'tape-promise/tape';
import {earcut} from '@math.gl/polygon';
import {extractAreas, deviation, flatten} from './earcut-utils';
import expected from './data/earcut/expected';

test('indices-2d', function (t) {
  const indices = earcut([10, 0, 0, 50, 60, 60, 70, 10]);
  t.same(indices, [1, 0, 3, 3, 2, 1]);
  t.end();
});

test('indices-3d', function (t) {
  const indices = earcut([10, 4, 0, 0, 50, 0, 60, 60, 0, 70, 10, 0], null, 3);
  t.same(indices, [1, 0, 3, 3, 2, 1]);
  t.end();
});

test('indices-3d', function (t) {
  const indices = earcut([10, 4, 0, 0, 50, 0, 60, 60, 0, 70, 10, 0], null, 3);
  t.same(indices, [1, 0, 3, 3, 2, 1]);
  t.end();
});

test('projection', function (t) {
  let indices = earcut([0, 4, 0, 0, 50, 0, 0, 60, 20, 0, 10, 20], null, 3, undefined, 'xy');
  t.same(indices, []); // Polygon has no area on the XY plane

  indices = earcut([0, 4, 0, 0, 50, 0, 0, 60, 20, 0, 10, 20], null, 3, undefined, 'yz');
  t.same(indices, [2, 3, 0, 0, 1, 2]);

  t.end();
});

async function openFile(filePath) {
  let data = null;
  if (fs && 'promises' in fs) {
    data = await fs.promises.readFile(filePath);
    data = JSON.parse(data.toString());
  } else if (typeof fetch !== 'undefined') {
    const request = await fetch(filePath);
    data = await request.json();
  }
  return data;
}

const FIXTURES_PATH = 'modules/polygon/test/data/earcut/fixtures/';

Object.keys(expected.triangles).forEach((id) => {
  test(id, async (t) => {
    const filepath = FIXTURES_PATH + `${id}.json`;
    const raw = await openFile(filepath);
    const data = flatten(raw);
    const indices = earcut(data.vertices, data.holes, data.dimensions);
    const actualDeviation = deviation(data.vertices, data.holes, data.dimensions, indices);
    const expectedTriangles = expected.triangles[id];
    const expectedDeviation = expected.errors[id] || 0;

    const numTriangles = indices.length / 3;
    t.ok(
      numTriangles === expectedTriangles,
      `${numTriangles} triangles when expected ${expectedTriangles}`
    );

    if (expectedTriangles > 0) {
      t.ok(
        actualDeviation <= expectedDeviation,
        `deviation ${actualDeviation} <= ${expectedDeviation}`
      );
    }

    // Compare to result obtained with precomputed areas
    const areas = extractAreas(data.vertices, data.holes, data.dimensions);
    const indices2 = earcut(data.vertices, data.holes, data.dimensions, areas);
    t.deepEqual(
      indices2,
      indices,
      'earcut triangulation with precomputed areas should match one without precomputation'
    );

    t.end();
  });
});
