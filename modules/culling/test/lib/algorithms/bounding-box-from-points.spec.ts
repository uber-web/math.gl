import test from 'tape-promise/tape';
import {
  makeOrientedBoundingBoxFromPoints,
  makeAxisAlignedBoundingBoxFromPoints
} from '@math.gl/culling';
import {Vector3, equals} from '@math.gl/core';

const testPoints = [
  [1, 0, 0],
  [2, 0, 0],
  [0, 0, 0],
  [1, 1, 2]
];

test('makeOrientedBoundingBoxFromPoints#empty', (t) => {
  const boundingBox = makeOrientedBoundingBoxFromPoints([]);
  t.ok(equals(boundingBox.center, Vector3.ZERO));
  t.ok(equals(boundingBox.halfSize, Vector3.ZERO));
  t.end();
});

test('makeOrientedBoundingBoxFromPoints#one point', (t) => {
  const point = [1, 2, 3];
  const boundingBox = makeOrientedBoundingBoxFromPoints([point]);
  t.ok(equals(boundingBox.center, point));
  t.ok(equals(boundingBox.halfSize, Vector3.ZERO));
  t.end();
});

test('makeOrientedBoundingBoxFromPoints', (t) => {
  const boundingBox = makeOrientedBoundingBoxFromPoints(testPoints);
  for (const point of testPoints) {
    t.ok(equals(boundingBox.distanceTo(point), 0), 'point is inside the bounding box');
  }
  t.end();
});

test('makeAxisAlignedBoundingBoxFromPoints', (t) => {
  const boundingBox = makeAxisAlignedBoundingBoxFromPoints(testPoints);
  t.ok(equals(boundingBox.center, [1, 0.5, 1]));
  t.ok(equals(boundingBox.halfDiagonal, [1, 0.5, 1]));
  t.end();
});
