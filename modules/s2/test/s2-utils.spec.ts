// loaders.gl, MIT license
import test from 'tape-promise/tape';

import {
  getS2BoundaryFlat,
  getS2CellIdFromToken,
  getS2TokenFromCellId,
  getS2OrientedBoundingBoxCornerPoints,
  getS2Cell,
  getS2LngLat,
  getS2QuadKey,
  getS2CellIdFromQuadkey,
  getS2ChildCellId,
  getS2QuadkeyFromCellId,
  getS2Region
} from '@math.gl/s2';

import type {S2HeightInfo} from '@math.gl/s2';
import Long from 'long';

import TEST_DATA from './data/test-data';

function round(num: number, digits: number) {
  const k = Math.pow(10, digits);
  return Math.round((num + Number.EPSILON) * k) / k;
}

test('S2Geometry#getIds', (t) => {
  for (const test of TEST_DATA) {
    const tokenOrKey = test.tokenOrKey;
    const key = getS2QuadKey(tokenOrKey);
    const id: Long = getS2CellIdFromQuadkey(key);

    for (let index = 0; index < 4; index++) {
      const childId = getS2ChildCellId(id, index);
      const childKey = getS2QuadkeyFromCellId(childId);
      const eChildKey = test.expectChildKey?.replace('{index}', `${index}`);
      // const eKey = test.expectKey?.replace('{index}', `${index}`);
      // console.log(eKey);
      // console.log(eChildKey);
      // console.log(`
      //   tokenOrKey=${tokenOrKey},
      //   index=${index},
      //   key=     ${key},
      //   childKey=${childKey}
      // `);
      t.ok(childKey === eChildKey, `tokenOrKey=${tokenOrKey}, get child cell`);
    }
  }

  t.end();
});

test('S2Geometry#convert_id_key_token', (t) => {
  for (const test of TEST_DATA) {
    const tokenOrKey = test.tokenOrKey;
    const key = getS2QuadKey(tokenOrKey);
    const id: Long = getS2CellIdFromQuadkey(key);
    const token = getS2TokenFromCellId(id);
    const idFromToken = getS2CellIdFromToken(token);
    t.ok(id.equals(idFromToken), `tokenOrKey=${tokenOrKey}, convert id -> token -> id`);
  }
  t.end();
});

test('S2Geometry#getS2CellFromQuadKey', (t) => {
  for (const test of TEST_DATA) {
    const tokenOrKey = test.tokenOrKey;
    const cell = getS2Cell(tokenOrKey);
    // console.log(
    //   `tokenOrKey=${tokenOrKey}, quadkey=${key}, cell=${JSON.stringify(
    //     cell
    //   )}, expect=${JSON.stringify(test.expectS2Cell)}`
    // );
    t.ok(
      JSON.stringify(cell) === JSON.stringify(test.expectS2Cell),
      `tokenOrKey=${tokenOrKey}, check S2Cell`
    );
  }
  t.end();
});

test('S2Geometry#getCenter', (t) => {
  for (const test of TEST_DATA) {
    const tokenOrKey = test.tokenOrKey;
    // const key = getS2QuadKey(test.tokenOrKey);
    // const id: Long = getS2CellIdFromQuadkey(key);
    // console.log(`\ntokenOrKey=${test.tokenOrKey}, id=${id}`);
    const center: [number, number] = getS2LngLat(tokenOrKey);
    // console.log(`center_lng = ${center[0]}, center_lat = ${center[1]}`);
    if (test.expectCenter) {
      t.ok(
        round(center[0], 2) === test.expectCenter?.lng &&
          round(center[1], 2) === test.expectCenter?.lat,
        `tokenOrKey=${tokenOrKey}, get center`
      );
    }
  }
  t.end();
});

test('S2Geometry#getS2Region', (t) => {
  for (const test of TEST_DATA) {
    const tokenOrKey = test.tokenOrKey;
    const key = getS2QuadKey(tokenOrKey);
    const cell = getS2Cell(tokenOrKey);

    const region = getS2Region(cell);
    // console.log(`\ntokenOrKey=${test.tokenOrKey}, key=${key}, S2Region=${JSON.stringify(region)}`);
    if (test.expectRegion) {
      t.ok(
        round(region.west, 2) === test.expectRegion?.west &&
          round(region.east, 2) === test.expectRegion?.east &&
          round(region.north, 2) === test.expectRegion?.north &&
          round(region.south, 2) === test.expectRegion?.south,
        `tokenOrKey=${tokenOrKey}, key=${key}, check S2Region=${JSON.stringify(region)}`
      );
    }
  }
  t.end();
});

test('S2Geometry#getOrientedBoundingBoxCornerPoints_For_level_0', (t) => {
  for (const test of TEST_DATA) {
    const heightInfo: S2HeightInfo = {maximumHeight: 0, minimumHeight: 0};
    // const key = getS2QuadKey(test.tokenOrKey);
    const obb = getS2OrientedBoundingBoxCornerPoints(test.tokenOrKey, heightInfo);
    console.log(`tokenOrKey=${test.tokenOrKey}, obb=${JSON.stringify(obb)}`);
    if (test.expectOBB) {
      for (let i = 0; i < 8; i++) {
        t.ok(
          compareArrays(obb[i], test.expectOBB[i]),
          `tokenOrKey=${test.tokenOrKey}, correct corner ${i}`
        );
      }
    }
  }
  t.end();
});

const compareArrays = (a: number[], b: number[]) => {
  return (
    a.length === b.length &&
    a.every((element, index) => {
      return round(element, 2) === round(b[index], 2);
    })
  );
};

test('S2Geometry#tokenToIdToToken', (t) => {
  for (const test of TEST_DATA) {
    if (test.tokenOrKey.indexOf('/') === -1) {
      // test.tokenOrKey is a token
      const token = test.tokenOrKey;
      let cellId = getS2CellIdFromToken(token);
      let token2 = getS2TokenFromCellId(cellId);
      t.ok(token == token2, `token1=${token} token2=${token2}`);
    }
  }
  t.end();
});

test('S2Geometry#getS2BoundaryFlat', (t) => {
  for (const test of TEST_DATA) {
    const polygon = getS2BoundaryFlat(test.tokenOrKey);
    t.ok(polygon instanceof Float64Array, 'polygon is flat array');
    t.is((polygon.length / 2 - 1) % 4, 0, 'polygon has 4 sides');
    t.deepEqual(polygon.slice(0, 2), polygon.slice(-2), 'polygon is closed');
  }

  t.end();
});
