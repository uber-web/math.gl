// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-promise/tape';
import {tapeEquals, tapeEqualsEpsilon} from 'test/utils/tape-assertions';

import {Vector3, Vector4, Matrix3, Matrix4, toRadians, _MathUtils} from '@math.gl/core';
import {
  BoundingSphere,
  OrientedBoundingBox,
  makeOrientedBoundingBoxFromPoints,
  Plane,
  INTERSECTION
} from '@math.gl/culling';
import Matrix from '@math.gl/core/classes/base/matrix';

const ZERO_VECTOR3 = Object.freeze(new Vector3(0, 0, 0));
const ZERO_MATRIX3 = Object.freeze(new Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]));

// TODO - copy the right positions array
const positions = [
  new Vector3(2.0, 0.0, 0.0),
  new Vector3(0.0, 3.0, 0.0),
  new Vector3(0.0, 0.0, 4.0),
  new Vector3(-2.0, 0.0, 0.0),
  new Vector3(0.0, -3.0, 0.0),
  new Vector3(0.0, 0.0, -4.0)
];

const positionsRadius = 1.0;
const positionsCenter = new Vector3(10000001.0, 0.0, 0.0);

const center = new Vector3(10000000.0, 0.0, 0.0);

const spherePositions = [
  center.clone().add([1, 0, 0]),
  center.clone().add([2, 0, 0]),
  center.clone().add([0, 0, 0]),
  center.clone().add([1, 1, 0]),
  center.clone().add([1, -1, 0]),
  center.clone().add([1, 0, 1]),
  center.clone().add([1, 0, -1])
];

/*
function rotatePositions(positions, axis, angle) {
  const points = [];

  const quaternion = Quaternion.fromAxisAngle(axis, angle);
  const rotation = Matrix3.fromQuaternion(quaternion);

  for (let i = 0; i < positions.length; ++i) {
    points.push(Matrix3.multiplyByVector(rotation, positions[i], new Vector3()));
  }

  return {points, rotation};
}

function translatePositions(positions, translation) {
  const points = [];
  for (let i = 0; i < positions.length; ++i) {
    points.push(new Vector3(translation).add(positions[i]));
  }

  return points;
}
*/

test('OrientedBoundingBox#constructor sets expected default values', (t) => {
  const box = new OrientedBoundingBox();
  tapeEquals(t, box.center, ZERO_VECTOR3);
  tapeEquals(t, box.halfAxes, ZERO_MATRIX3);
  t.end();
});

test('OrientedBoundingBox#halfSize - should return halfSize of quaternion based OBB', (t) => {
  const originalHalfSize = [100.45386505126953, 91.120384216308594, 426.03338623046875];
  const box = new OrientedBoundingBox().fromCenterHalfSizeQuaternion(
    [-122.40277014424709, 37.795204290863012, 134.5439856108278],
    originalHalfSize,
    [0.64432936906814575, 0.76474469900131226, -0.0020481476094573736, 0.0010012148413807154]
  );
  const delta = 0.0001;
  const halfSize = box.halfSize;
  const originalHalfSizeVector = new Vector3(originalHalfSize);
  const halfSizeVector = new Vector3(halfSize);
  t.ok(Math.abs(originalHalfSizeVector.len() - halfSizeVector.len()) < delta);
  t.end();
});

test('OrientedBoundingBox#quaternion - should return quaternion of quaternion based OBB', (t) => {
  const originalQuaternion = [
    0.64432936906814575, 0.76474469900131226, -0.0020481476094573736, 0.0010012148413807154
  ];
  const box = new OrientedBoundingBox().fromCenterHalfSizeQuaternion(
    [-122.40277014424709, 37.795204290863012, 134.5439856108278],
    [100.45386505126953, 91.120384216308594, 426.03338623046875],
    originalQuaternion
  );
  const delta = 0.00000001;
  const quaternion = box.quaternion;
  const originalQuaternionVector = new Vector4(originalQuaternion);
  const quaternionVector = new Vector4(quaternion);
  t.ok(Math.abs(originalQuaternionVector.len() - quaternionVector.len()) < delta);
  t.end();
});

test('OrientedBoundingBox#fromCenterHalfSizeQuaternion - constructs new OrientedBoundingBox from quaternion-based OBB', (t) => {
  const TEST_CENTER = Object.freeze(
    new Vector3(-122.40277014424709, 37.795204290863012, 134.5439856108278)
  );
  const TEST_MATRIX3 = Object.freeze(
    new Matrix3([
      -17.044740507911246, 98.99636360349382, -0.41896401976407743, 89.79905117716781,
      15.46048110602704, -0.16787981318476183, -0.47205173558557734, -1.8842793374379618,
      -426.02894738381406
    ])
  );

  const box = new OrientedBoundingBox().fromCenterHalfSizeQuaternion(
    [-122.40277014424709, 37.795204290863012, 134.5439856108278],
    [100.45386505126953, 91.120384216308594, 426.03338623046875],
    [0.64432936906814575, 0.76474469900131226, -0.0020481476094573736, 0.0010012148413807154]
  );
  tapeEquals(t, box.center, TEST_CENTER);
  tapeEquals(t, box.halfAxes, TEST_MATRIX3);
  t.end();
});

test('OrientedBoundingBox#clone', (t) => {
  const box = new OrientedBoundingBox();
  const result = box.clone();
  t.notEquals(box, result);
  tapeEquals(t, box, result);
  tapeEquals(t, box.clone(), box);
  t.end();
});

test('OrientedBoundingBox#equals works in all cases', (t) => {
  const box = new OrientedBoundingBox();
  tapeEquals(t, box.equals(new OrientedBoundingBox()), true);
  t.equals(box.equals(undefined), false);
  t.end();
});

test('OrientedBoundingBox#getBoundingSphere works with a result', (t) => {
  const box = makeOrientedBoundingBoxFromPoints(spherePositions);
  const sphere = new BoundingSphere();
  box.getBoundingSphere(sphere);
  tapeEquals(t, sphere.center, positionsCenter);
  t.ok(sphere.radius > 1.5);
  t.ok(sphere.radius < 2.0);
  t.end();
});

test('OrientedBoundingBox#getBoundingSphere works without a result parameter', (t) => {
  const box = makeOrientedBoundingBoxFromPoints(spherePositions);
  const sphere = box.getBoundingSphere();
  tapeEquals(t, sphere.center, positionsCenter);
  t.ok(sphere.radius > 1.5);
  t.ok(sphere.radius < 2.0);
  t.end();
});

test('OrientedBoundingBox#Calculate half sizes and half axes properly', (t) => {
  const halfAxes = new Matrix3([2, 0, 0, 0, 2, 0, 0, 0, 2]);
  const halfSize = [2, 2, 2];
  const volume = 8;
  const box = makeOrientedBoundingBoxFromPoints([
    new Vector3(2, -2, -2),
    new Vector3(-2, 2, 2),
    new Vector3(-2, -2, -2),
    new Vector3(2, 2, 2),
    new Vector3(2, -2, 2),
    new Vector3(-2, 2, -2),
    new Vector3(2, 2, -2),
    new Vector3(-2, -2, 2)
  ]);
  t.deepEqual(box.halfAxes, halfAxes);
  t.deepEqual(box.halfSize, halfSize);
  t.notEquals(box.halfSize[2], 1);
  t.equal(
    box.halfSize.reduce((res, hs) => res * hs),
    volume
  );
  t.end();
});

test('BoundingSphere#throws from fromOrientedBoundingBox with null orientedBoundingBox parameter', (t) => {
  // t.throws(() => sphere.fromOrientedBoundingBox(null));
  t.end();
});

// eslint-disable-next-line max-statements
function intersectPlaneTestCornersEdgesFaces(t, center, axes) {
  const SQRT1_2 = Math.pow(1.0 / 2.0, 1 / 2.0);
  const SQRT3_4 = Math.pow(3.0 / 4.0, 1 / 2.0);

  const box = new OrientedBoundingBox(center, axes.clone().multiplyByScalar(0.5));

  const planeNormXform = function (nx, ny, nz, dist) {
    const n = new Vector3(nx, ny, nz);
    const arb = new Vector3(357, 924, 258);

    const p0 = n.clone().normalize().multiplyByScalar(-dist);
    const tang = n.clone().cross(arb).normalize();
    const binorm = n.clone().cross(tang).normalize();

    p0.transformByMatrix3(axes);
    tang.transformByMatrix3(axes);
    binorm.transformByMatrix3(axes);

    n.copy(tang).cross(binorm);
    if (n.magnitude() === 0) {
      return undefined;
    }
    n.normalize();

    p0.add(center);
    const d = -p0.dot(n);
    if (Math.abs(d) > 0.0001 && n.magnitudeSquared() > 0.0001) {
      return new Plane(n, d);
    }
    return undefined;
  };

  let pl;

  // Tests against faces

  // prettier-ignore-start
  pl = planeNormXform(+1.0, +0.0, +0.0, 0.50001);
  if (pl) {
    t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE);
  }
  pl = planeNormXform(-1.0, +0.0, +0.0, 0.50001);
  if (pl) {
    t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE);
  }
  pl = planeNormXform(+0.0, +1.0, +0.0, 0.50001);
  if (pl) {
    t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE);
  }
  pl = planeNormXform(+0.0, -1.0, +0.0, 0.50001);
  if (pl) {
    t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE);
  }
  /*
  pl = planeNormXform(+0.0, +0.0, +1.0,  0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+0.0, +0.0, -1.0,  0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }

  pl = planeNormXform(+1.0, +0.0, +0.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, +0.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, +0.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, +0.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +0.0, +1.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +0.0, -1.0,  0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +0.0, +0.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, +0.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, +0.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, +0.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +0.0, +1.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +0.0, -1.0, -0.49999); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +0.0, +0.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +0.0, +0.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, +1.0, +0.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, -1.0, +0.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, +0.0, +1.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, +0.0, -1.0, -0.50001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }

  // Tests against edges

  pl = planeNormXform(+1.0, +1.0, +0.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, -1.0, +0.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, +1.0, +0.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, -1.0, +0.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, +0.0, +1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, +0.0, -1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, +0.0, +1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, +0.0, -1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+0.0, +1.0, +1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+0.0, +1.0, -1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+0.0, -1.0, +1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+0.0, -1.0, -1.0,  SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }

  pl = planeNormXform(+1.0, +1.0, +0.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, +0.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, +0.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, +0.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +0.0, +1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +0.0, -1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, +1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, -1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, +1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, -1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, +1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, -1.0,  SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +1.0, +0.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, +0.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, +0.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, +0.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +0.0, +1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +0.0, -1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, +1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +0.0, -1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, +1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, +1.0, -1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, +1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+0.0, -1.0, -1.0, -SQRT1_2 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +1.0, +0.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, -1.0, +0.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +1.0, +0.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, -1.0, +0.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, +0.0, +1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, +0.0, -1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +0.0, +1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +0.0, -1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, +1.0, +1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, +1.0, -1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, -1.0, +1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+0.0, -1.0, -1.0, -SQRT1_2 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }

  // Tests against corners

  pl = planeNormXform(+1.0, +1.0, +1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, +1.0, -1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, -1.0, +1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(+1.0, -1.0, -1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, +1.0, +1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, +1.0, -1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, -1.0, +1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }
  pl = planeNormXform(-1.0, -1.0, -1.0,  SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INSIDE); }

  pl = planeNormXform(+1.0, +1.0, +1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +1.0, -1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, +1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, -1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, +1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, -1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, +1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, -1.0,  SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +1.0, +1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, +1.0, -1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, +1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(+1.0, -1.0, -1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, +1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, +1.0, -1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, +1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }
  pl = planeNormXform(-1.0, -1.0, -1.0, -SQRT3_4 + 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.INTERSECTING); }

  pl = planeNormXform(+1.0, +1.0, +1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, +1.0, -1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, -1.0, +1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(+1.0, -1.0, -1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +1.0, +1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, +1.0, -1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, -1.0, +1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  pl = planeNormXform(-1.0, -1.0, -1.0, -SQRT3_4 - 0.00001); if (pl) { t.equals(box.intersectPlane(pl), INTERSECTION.OUTSIDE); }
  */
  // prettier-ignore-end
}

test('intersectPlane works with untransformed box', (t) => {
  intersectPlaneTestCornersEdgesFaces(t, ZERO_VECTOR3, new Matrix3().identity());
  t.end();
});

/*
test.skip('intersectPlane works with off-center box', t => {
  intersectPlaneTestCornersEdgesFaces(new Vector3(1.0, 0.0, 0.0), Matrix3.IDENTITY);
  intersectPlaneTestCornersEdgesFaces(new Vector3(0.7, -1.8, 12.0), Matrix3.IDENTITY);
  t.end();
});

test.skip('intersectPlane works with rotated box', t => {
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromQuaternion(
      Quaternion.fromAxisAngle(new Vector3(0.5, 1.5, -1.2), 1.2),
      new Matrix3()
    )
  );
  t.end();
});

test.skip('intersectPlane works with scaled box', t => {
  const m = new Matrix3();
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromScale(new Vector3(1.5, 0.4, 20.6), m)
  );
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromScale(new Vector3(0.0, 0.4, 20.6), m)
  );
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromScale(new Vector3(1.5, 0.0, 20.6), m)
  );
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromScale(new Vector3(1.5, 0.4, 0.0), m)
  );
  intersectPlaneTestCornersEdgesFaces(
    ZERO_VECTOR3,
    Matrix3.fromScale(new Vector3(0.0, 0.0, 0.0), m)
  );
  t.end();
});

test.skip('intersectPlane works with this arbitrary box', t => {
  const m = Matrix3.fromScale(new Vector3(1.5, 80.4, 2.6), new Matrix3());
  const n = Matrix3.fromQuaternion(
    Quaternion.fromAxisAngle(new Vector3(0.5, 1.5, -1.2), 1.2),
    new Matrix3()
  );
  Matrix3.multiply(m, n, n);
  intersectPlaneTestCornersEdgesFaces(new Vector3(-5.1, 0.0, 0.1), n);
  t.end();
});

test.skip('intersectPlane fails without box parameter', t => {
  const plane = new Cartesian4(1.0, 0.0, 0.0, 0.0);
  t.throws(() => OrientedBoundingBox.intersectPlane(undefined, plane));
  t.end();
});

test.skip('intersectPlane fails without plane parameter', t => {
  const box = new OrientedBoundingBox(Vector3.IDENTITY, ZERO_MATRIX3);
  t.throws(() => OrientedBoundingBox.intersectPlane(box, undefined));
  t.end();
});
*/

function makeRotationY(angle) {
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  return new Matrix3([cosAngle, 0.0, sinAngle, 0.0, 1.0, 0.0, -sinAngle, 0.0, cosAngle]);
}

function makeRotationZ(angle, result) {
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);
  return new Matrix3([cosAngle, -sinAngle, 0.0, sinAngle, cosAngle, 0.0, 0.0, 0.0, 1.0]);
}

// eslint-disable-next-line max-statements
test('OrientedBoundingBox#distanceSquaredTo', (t) => {
  const r0 = makeRotationZ(toRadians(-45.0));
  const r1 = makeRotationY(toRadians(45.0));

  const rotation = r1.multiplyRight(r0);
  const scale = new Vector3(2.0, 3.0, 4.0);
  const rotationScale = rotation.scale(scale);

  const center = new Vector3(4.0, 3.0, 2.0);

  const obb = new OrientedBoundingBox(center, rotationScale);

  const halfAxes = obb.halfAxes;
  const xAxis = halfAxes.getColumn(0, new Vector3());
  const yAxis = halfAxes.getColumn(1, new Vector3());
  const zAxis = halfAxes.getColumn(2, new Vector3());

  // from positive x direction
  const cartesian = new Vector3(xAxis).multiplyByScalar(2.0);
  cartesian.add(center);

  let d = cartesian.distanceTo(center) - scale.x;
  let expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  /*
  // from negative x direction
  Vector3.multiplyByScalar(xAxis, -2.0, cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - scale.x;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  // from positive y direction
  Vector3.multiplyByScalar(yAxis, 2.0, cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - scale.y;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  // from negative y direction
  Vector3.multiplyByScalar(yAxis, -2.0, cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - scale.y;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  // from positive z direction
  Vector3.multiplyByScalar(zAxis, 2.0, cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - scale.z;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  // from negative z direction
  Vector3.multiplyByScalar(zAxis, -2.0, cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - scale.z;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);

  // from corner point
  Vector3.add(xAxis, yAxis, cartesian);
  Vector3.add(zAxis, cartesian, cartesian);

  const cornerDistance = Vector3.magnitude(cartesian);
  Vector3.add(cartesian, center, cartesian);

  d = Vector3.distance(cartesian, center) - cornerDistance;
  expected = d * d;
  tapeEqualsEpsilon(t, obb.distanceSquaredTo(cartesian), expected, _MathUtils.EPSILON10);
  */
  t.end();
});

test('OrientedBoundingBox#distanceSquaredTo throws without cartesian', (t) => {
  t.throws(() => new OrientedBoundingBox().distanceSquaredTo(undefined));
  t.end();
});

// eslint-disable-next-line max-statements
test('OrientedBoundingBox#computePlaneDistances', (t) => {
  const r0 = makeRotationZ(toRadians(-45.0));
  const r1 = makeRotationY(toRadians(45.0));

  const rotation = r0.multiplyLeft(r1);
  const scale = new Vector3(2.0, 3.0, 4.0);
  const rotationScale = rotation.scale(scale);

  const center = new Vector3(4.0, 3.0, 2.0);

  const obb = new OrientedBoundingBox(center, rotationScale);

  const halfAxes = obb.halfAxes;
  const xAxis = halfAxes.getColumn(0, new Vector3());
  // const yAxis = halfAxes.getColumn(1, new Vector3());
  // const zAxis = halfAxes.getColumn(2, new Vector3());

  // from x direction
  const position = new Vector3(xAxis).multiplyByScalar(2.0).add(center);

  const direction = new Vector3(xAxis).negate().normalize();

  // let d = position.distanceTo(center);
  // let expectedNear = d - scale.x;
  // let expectedFar = d + scale.x;

  const distances = obb.computePlaneDistances(position, direction);

  /*
  tapeEqualsEpsilon(t, distances.start, expectedNear, _MathUtils.EPSILON14);
  tapeEqualsEpsilon(t, distances.stop, expectedFar, _MathUtils.EPSILON14);

  // from y direction
  position.copy(yAxis).multiplyByScalar(2.0).add(center);

  direction.copy(yAxis).negate().normalize();

  d = position.distance(center);
  expectedNear = d - scale.y;
  expectedFar = d + scale.y;

  obb.computePlaneDistances(position, direction, distances);
  tapeEqualsEpsilon(t, distances.start, expectedNear, _MathUtils.EPSILON14);
  tapeEqualsEpsilon(t, distances.stop, expectedFar, _MathUtils.EPSILON14);

  // from z direction
  position.copy(zAxis).multiplyByScalar(2.0).add(center);

  direction.copy(zAxis).negate().normalize();

  d = position.distance(center);
  expectedNear = d - scale.z;
  expectedFar = d + scale.z;

  obb.computePlaneDistances(position, direction, distances);
  tapeEqualsEpsilon(t, distances.start, expectedNear, _MathUtils.EPSILON14);
  tapeEqualsEpsilon(t, distances.stop, expectedFar, _MathUtils.EPSILON14);

  // from corner point
  position.copy(xAxis).add(yAxis).add(zAxis);

  direction.copy(position).negate().normalize();

  const cornerDistance = position.magnitude();
  position.add(center);

  d = position.distance(center);
  expectedNear = d - cornerDistance;
  expectedFar = d + cornerDistance;

  obb.computePlaneDistances(position, direction, distances);
  tapeEqualsEpsilon(t, distances.start, expectedNear, _MathUtils.EPSILON14);
  tapeEqualsEpsilon(t, distances.stop, expectedFar, _MathUtils.EPSILON14);
  */

  t.end();
});

test('OrientedBoundingBox#computePlaneDistances throws without a box', (t) => {
  t.throws(() =>
    new OrientedBoundingBox().computePlaneDistances(undefined, new Vector3(), new Vector3())
  );
  t.end();
});

test('OrientedBoundingBox#computePlaneDistances throws without a position', (t) => {
  t.throws(() => new OrientedBoundingBox().computePlaneDistances(undefined, new Vector3()));
  t.end();
});

test('OrientedBoundingBox#computePlaneDistances throws without a direction', (t) => {
  t.throws(() => new OrientedBoundingBox().computePlaneDistances(new Vector3(), undefined));
  t.end();
});

test('OrientedBoundingBox#applies transform: translation, rotation, scale', (t) => {
  const VECTOR3_ZERO = new Vector3(0, 0, 0);
  const obb = new OrientedBoundingBox(VECTOR3_ZERO, [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  const transform = new Matrix4()
    .translate(new Vector3(1.0, 2.0, 3.0))
    .rotateZ(Math.PI / 2)
    .scale(2);
  const expected = new OrientedBoundingBox(
    new Vector3(1.0, 2.0, 3.0),
    [1.0000000000000002, 4, 3, -1, 2, 3, 1, 2, 5]
  );
  const result = obb.transform(transform);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON8);
  t.end();
});

/*
test('OrientedBoundingBox#isOccluded', t => {
  const occluderSphere = new BoundingSphere(new Vector3(0, 0, -1.5), 0.5);
  const occluder = new Occluder(occluderSphere, ZERO_VECTOR3);

  const radius = 0.25 / Math.sqrt(2.0);
  const halfAxes = Matrix3.multiplyByScale(Matrix3.IDENTITY, new Vector3(radius, radius, radius), new Matrix3());
  const obb = new OrientedBoundingBox(new Vector3(0, 0, -2.75), halfAxes);
  t.equals(obb.isOccluded(occluder), true);

  occluderSphere = new BoundingSphere(new Vector3(0, 0, -2.75), 0.25);
  occluder = new Occluder(occluderSphere, ZERO_VECTOR3);

  radius = 0.5 / Math.sqrt(2.0);
  halfAxes = Matrix3.multiplyByScale(Matrix3.IDENTITY, new Vector3(radius, radius, radius), new Matrix3());
  obb = new OrientedBoundingBox(new Vector3(0, 0, -1.5), halfAxes);
  t.equals(obb.isOccluded(occluder), false);
  t.end();
});

test('OrientedBoundingBox#isOccluded throws without a box', t => {
  t.throws(() => OrientedBoundingBox.isOccluded(undefined, new Occluder(new BoundingSphere(), new Vector3())));
  t.end();
});

test('OrientedBoundingBox#isOccluded throws without a occluder', t => {
  t.throws(() => OrientedBoundingBox.isOccluded(new OrientedBoundingBox(), undefined));
  t.end();
});

test.skip('fromPoints constructs empty box with undefined positions', t => {
  const box = OrientedBoundingBox.fromPoints(undefined);
  t.equals(box.halfAxes, ZERO_MATRIX3);
  t.equals(box.center, ZERO_VECTOR3);
  t.end();
});

test.skip('fromPoints constructs empty box with empty positions', t => {
  const box = OrientedBoundingBox.fromPoints([]);
  t.equals(box.halfAxes, ZERO_MATRIX3);
  t.equals(box.center, ZERO_VECTOR3);
  t.end();
});

test.skip('fromPoints correct scale', t => {
  const box = OrientedBoundingBox.fromPoints(positions);
  t.equals(box.halfAxes, Matrix3.fromScale(new Vector3(2.0, 3.0, 4.0)));
  t.equals(box.center, ZERO_VECTOR3);
  t.end();
});

test.skip('fromPoints correct translation', t => {
  const translation = new Vector3(10.0, -20.0, 30.0);
  const points = translatePositions(positions, translation);
  const box = OrientedBoundingBox.fromPoints(points);
  t.equals(box.halfAxes, Matrix3.fromScale(new Vector3(2.0, 3.0, 4.0)));
  t.equals(box.center, translation);
  t.end();
});

test.skip('fromPoints rotation about z', t => {
  const result = rotatePositions(positions, Vector3.UNIT_Z, _MathUtils.PI_OVER_FOUR);
  const points = result.points;
  const rotation = result.rotation;
  rotation[1] = -rotation[1];
  rotation[3] = -rotation[3];

  const box = OrientedBoundingBox.fromPoints(points);
  tapeEqualsEpsilon(t, box.halfAxes,
    Matrix3.multiplyByScale(rotation, new Vector3(3.0, 2.0, 4.0), new Matrix3()),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.center, ZERO_VECTOR3, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromPoints rotation about y', t => {
  const result = rotatePositions(positions, Vector3.UNIT_Y, _MathUtils.PI_OVER_FOUR);
  const points = result.points;
  const rotation = result.rotation;
  rotation[2] = -rotation[2];
  rotation[6] = -rotation[6];

  const box = OrientedBoundingBox.fromPoints(points);
  tapeEqualsEpsilon(t, box.halfAxes,
    Matrix3.multiplyByScale(rotation, new Vector3(4.0, 3.0, 2.0), new Matrix3()),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.center, ZERO_VECTOR3, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromPoints rotation about x', t => {
  const result = rotatePositions(positions, Vector3.UNIT_X, _MathUtils.PI_OVER_FOUR);
  const points = result.points;
  const rotation = result.rotation;
  rotation[5] = -rotation[5];
  rotation[7] = -rotation[7];

  const box = OrientedBoundingBox.fromPoints(points);
  tapeEqualsEpsilon(t, box.halfAxes,
    Matrix3.multiplyByScale(rotation, new Vector3(2.0, 4.0, 3.0), new Matrix3()),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.center, ZERO_VECTOR3, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromPoints rotation and translation', t => {
  const result = rotatePositions(positions, Vector3.UNIT_Z, _MathUtils.PI_OVER_FOUR);
  const points = result.points;
  const rotation = result.rotation;
  rotation[1] = -rotation[1];
  rotation[3] = -rotation[3];

  const translation = new Vector3(-40.0, 20.0, -30.0);
  points = translatePositions(points, translation);

  const box = OrientedBoundingBox.fromPoints(points);
  tapeEqualsEpsilon(t, box.halfAxes,
    Matrix3.multiplyByScale(rotation, new Vector3(3.0, 2.0, 4.0), new Matrix3()),
    _MathUtils.EPSILON14
  );
  tapeEqualsEpsilon(t, box.center, translation, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromRectangle sets correct default ellipsoid', t => {
  const rectangle = new Rectangle(-0.9, -1.2, 0.5, 0.7);
  const box1 = OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0);
  const box2 = OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0, Ellipsoid.WGS84);

  tapeEqualsEpsilon(t, box1.center, box2.center, _MathUtils.EPSILON15);

  tapeEqualsEpsilon(t, box1.halfAxes, box2.halfAxes, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromRectangle sets correct default heights', t => {
  const rectangle = new Rectangle(0.0, 0.0, 0.0, 0.0);
  const box = OrientedBoundingBox.fromRectangle(
    rectangle,
    undefined,
    undefined,
    Ellipsoid.UNIT_SPHERE
  );

  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);

  const rotScale = ZERO_MATRIX3;
  tapeEqualsEpsilon(t, box.halfAxes, rotScale, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromRectangle throws without rectangle', t => {
  const ellipsoid = Ellipsoid.UNIT_SPHERE;
  t.throws(() => OrientedBoundingBox.fromRectangle(undefined, 0.0, 0.0, ellipsoid));
  t.end();
});

test.skip('fromRectangle throws with invalid rectangles', t => {
  const ellipsoid = Ellipsoid.UNIT_SPHERE;
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-1.0, 1.0, 1.0, -1.0), 0.0, 0.0, ellipsoid)
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-2.0, 2.0, -1.0, 1.0), 0.0, 0.0, ellipsoid)
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-4.0, -2.0, 4.0, 1.0), 0.0, 0.0, ellipsoid)
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-2.0, -2.0, 1.0, 2.0), 0.0, 0.0, ellipsoid)
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-1.0, -2.0, 2.0, 2.0), 0.0, 0.0, ellipsoid)
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(new Rectangle(-4.0, -1.0, 4.0, 2.0), 0.0, 0.0, ellipsoid)
  );
  t.end();
});

test.skip('fromRectangle throws with non-revolution ellipsoids', t => {
  const rectangle = new Rectangle(0.0, 0.0, 0.0, 0.0);
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0, new Ellipsoid(1.01, 1.0, 1.01))
  );
  t.throws(() =>
    OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0, new Ellipsoid(1.0, 1.01, 1.01))
  );
  t.end();
});

test.skip('fromRectangle creates an OrientedBoundingBox without a result parameter', t => {
  const ellipsoid = Ellipsoid.UNIT_SPHERE;
  const rectangle = new Rectangle(0.0, 0.0, 0.0, 0.0);
  const box = OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0, ellipsoid);

  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);

  const rotScale = ZERO_MATRIX3;
  tapeEqualsEpsilon(t, box.halfAxes, rotScale, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromRectangle creates an OrientedBoundingBox with a result parameter', t => {
  const ellipsoid = Ellipsoid.UNIT_SPHERE;
  const rectangle = new Rectangle(0.0, 0.0, 0.0, 0.0);
  const result = new OrientedBoundingBox();
  const box = OrientedBoundingBox.fromRectangle(rectangle, 0.0, 0.0, ellipsoid, result);
  expect(box).toBe(result);

  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);

  const rotScale = ZERO_MATRIX3;
  tapeEqualsEpsilon(t, box.halfAxes, rotScale, _MathUtils.EPSILON15);
  t.end();
});

test.skip('fromRectangle for rectangles with heights', t => {
  const d90 = _MathUtils.PI_OVER_TWO;

  let box;

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, 0.0, 0.0, 0.0),
    1.0,
    1.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(2.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, 0.0, 0.0, 0.0),
    -1.0,
    -1.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, 0.0, 0.0, 0.0),
    -1.0,
    1.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, new Matrix3(0, 0, 1, 0, 0, 0, 0, 0, 0), _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d90, d90, d90),
    0.0,
    1.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, new Matrix3(0, 0, 1, 2, 0, 0, 0, 2, 0), _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d90, d90, d90),
    -1.0,
    -1.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d90, d90, d90),
    -1.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.5, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0, 0, 0.5, 1, 0, 0, 0, 1, 0),
    _MathUtils.EPSILON15
  );
  t.end();
});

test.skip('fromRectangle for interesting, degenerate, and edge-case rectangles', t => {
  const d45 = _MathUtils.PI_OVER_FOUR;
  const d30 = _MathUtils.PI_OVER_SIX;
  const d90 = _MathUtils.PI_OVER_TWO;
  const d135 = 3 * _MathUtils.PI_OVER_FOUR;
  const d180 = _MathUtils.PI;
  const sqrt3 = Math.sqrt(3.0);

  let box;

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, 0.0, 0.0, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(1.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(d180, 0.0, -d180, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(-1.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(d180, 0.0, d180, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(-1.0, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, d90, 0.0, d90),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.0, 0.0, 1.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes, ZERO_MATRIX3, _MathUtils.EPSILON15);

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, 0.0, d180, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.0, 0.5, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(-1.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d90, d90, d90),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.5, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, 0.5, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d30, d90, d90),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.1875 * sqrt3, 0.0, 0.1875), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0, -sqrt3 / 4, (5 * sqrt3) / 16, 1, 0, 0, 0, 3 / 4, 5 / 16),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, -d90, d90, d30),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center,
    new Vector3(0.1875 * sqrt3, 0.0, -0.1875),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0, sqrt3 / 4, (5 * sqrt3) / 16, 1, 0, 0, 0, 3 / 4, -5 / 16),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, -d30, d180, d90),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.0, 0.1875 * sqrt3, 0.1875), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(-1, 0, 0, 0, -sqrt3 / 4, (5 * sqrt3) / 16, 0, 3 / 4, 5 / 16),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, -d90, d180, d30),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center,
    new Vector3(0.0, 0.1875 * sqrt3, -0.1875),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(-1, 0, 0, 0, sqrt3 / 4, (5 * sqrt3) / 16, 0, 3 / 4, -5 / 16),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d45, 0.0, d45, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center,
    new Vector3((1.0 + Math.SQRT1_2) / 2.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, 0.5 * (1.0 - Math.SQRT1_2), Math.SQRT1_2, 0.0, 0.0, 0.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(d135, 0.0, -d135, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center,
    new Vector3(-(1.0 + Math.SQRT1_2) / 2.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, -0.5 * (1.0 - Math.SQRT1_2), -Math.SQRT1_2, 0.0, 0.0, 0.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, -d45, 0.0, d45),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center,
    new Vector3((1.0 + Math.SQRT1_2) / 2.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, 0.5 * (1.0 - Math.SQRT1_2), 0.0, 0.0, 0.0, 0.0, Math.SQRT1_2, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(-d90, 0.0, d90, 0.0),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.5, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, 0.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0),
    _MathUtils.EPSILON15
  );

  box = OrientedBoundingBox.fromRectangle(
    new Rectangle(0.0, -d90, 0.0, d90),
    0.0,
    0.0,
    Ellipsoid.UNIT_SPHERE
  );
  tapeEqualsEpsilon(t, box.center, new Vector3(0.5, 0.0, 0.0), _MathUtils.EPSILON15);
  tapeEqualsEpsilon(t, box.halfAxes,
    new Matrix3(0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0),
    _MathUtils.EPSILON15
  );

  t.end();
});
*/
