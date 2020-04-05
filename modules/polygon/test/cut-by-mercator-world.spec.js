import test from 'tape-catch';
import {cutPolylineByMercatorWorld, cutPolygonByMercatorWorld} from '@math.gl/polygon';

import {flatten} from './lineclip.spec';
import {equals} from '@math.gl/core';

test('cutPolylineByMercatorWorld - simple', t => {
  t.ok(
    equals(cutPolylineByMercatorWorld([-170, 0, 170, 20]), [
      [-170, 0, -180, 10],
      [180, 10, 170, 20]
    ]),
    '2d'
  );

  t.ok(
    equals(cutPolylineByMercatorWorld([-170, 0, 100, 170, 20, 200], {size: 3}), [
      [-170, 0, 100, -180, 10, 150],
      [180, 10, 150, 170, 20, 200]
    ]),
    '3d'
  );

  t.end();
});

test('cutPolylineByMercatorWorld - multiple crossings', t => {
  const result = cutPolylineByMercatorWorld([-170, 0, 170, 20, -175, 35, 175, 45]);

  t.comment(result);
  t.ok(
    equals(result, [
      [-170, 0, -180, 10],
      [180, 10, 170, 20, 180, 30],
      [-180, 30, -175, 35, -180, 40],
      [180, 40, 175, 45]
    ])
  );

  t.end();
});

test('cutPolylineByMercatorWorld - multiple worlds', t => {
  const polyline = [];
  const N = 30;

  for (let i = 0; i < N; i++) {
    polyline.push([((i * 60 + 30) % 360) - 180, i]);
  }
  const result = cutPolylineByMercatorWorld(flatten(polyline));

  t.is(result.length, Math.ceil((N * 60) / 360), 'returns correct number of parts');

  for (const positions of result) {
    // check left/right bounds
    let valid = positions[0] === -180 || positions[positions.length - 2] === 180;
    for (let i = 2; i < positions.length; i += 2) {
      // check slope
      valid = valid && positions[i] > positions[i - 2] && positions[i + 1] > positions[i - 1];
    }
    t.ok(valid, 'part is valid');
  }

  t.end();
});

test('cutPolygonByMercatorWorld - simple', t => {
  const polygon = [[-170, 0], [170, 0], [170, 20], [-170, 20]];
  const expectedA = [[170, 20], [180, 20], [180, 0], [170, 0]];
  const expectedB = [[-180, 20], [-170, 20], [-170, 0], [-180, 0]];

  t.ok(
    equals(cutPolygonByMercatorWorld(flatten(polygon)), [flatten(expectedA), flatten(expectedB)]),
    '2d'
  );

  polygon.forEach(p => (p[2] = 100));
  expectedA.forEach(p => (p[2] = 100));
  expectedB.forEach(p => (p[2] = 100));

  t.ok(
    equals(cutPolygonByMercatorWorld(flatten(polygon), null, {size: 3}), [
      flatten(expectedA),
      flatten(expectedB)
    ]),
    '3d'
  );

  t.end();
});

test('cutPolygonByMercatorWorld - with holes', t => {
  const polygon = [[-170, 0], [170, 0], [170, 20], [-170, 20]];
  const expectedA = [[170, 20], [180, 20], [180, 0], [170, 0]];
  const expectedB = [[-180, 20], [-170, 20], [-170, 0], [-180, 0]];

  const holeA = [[175, 10], [173, 10], [175, 8], [173, 8]];
  const holeB = [[-175, 10], [-173, 10], [-175, 8], [-173, 8]];

  let result = cutPolygonByMercatorWorld(flatten([polygon, holeA]), [8]);
  t.is(result.length, 2, 'Returns correct number of parts');
  t.ok(
    equals(result[0].positions, flatten([expectedA, holeA])) &&
      equals(result[0].holeIndices, [8]) &&
      equals(result[1], flatten(expectedB))
  );

  result = cutPolygonByMercatorWorld(flatten([polygon, holeB]), [8]);
  t.is(result.length, 2, 'Returns correct number of parts');
  t.ok(
    equals(result[0], flatten(expectedA)) &&
      equals(result[1].positions, flatten([expectedB, holeB])) &&
      equals(result[1].holeIndices, [8])
  );

  t.end();
});

test('cutPolygonByMercatorWorld - contains pole', t => {
  const polygon = [[-150, 75], [-90, 80], [-30, 70], [30, 60], [90, 70], [150, 75]];

  const result = cutPolygonByMercatorWorld(flatten(polygon));

  t.ok(
    equals(result, [
      flatten([
        [-90, 80],
        [-30, 70],
        [30, 60],
        [90, 70],
        [150, 75],
        [180, 75],
        [180, 85.051129],
        [-90, 85.051129]
      ]),
      flatten([[-180, 75], [-150, 75], [-90, 80], [-90, 85.051129], [-180, 85.051129]])
    ])
  );

  t.end();
});
