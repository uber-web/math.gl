import test from 'tape-catch';

import {_PerspectiveFrustum as PerspectiveFrustum} from '@math.gl/culling';
import {Vector2, Vector3, Vector4, Matrix4, _MathUtils, equals} from 'math.gl';

/* eslint-disable */
let frustum = null;
let planes = null;

Vector3.UNIT_X = new Vector3(1, 0, 0);
Vector3.UNIT_Y = new Vector3(0, 1, 0);
Vector3.UNIT_Z = new Vector3(0, 0, 1);

function beforeEachTest() {
  const frustum = new PerspectiveFrustum({
    near: 1.0,
    far: 2.0,
    aspectRatio: 1.0,
    fov: Math.PI / 3
  });

  planes = frustum.computeCullingVolume(
    new Vector3(),
    new Vector3().negate(Vector3.UNIT_Z, new Vector3()),
    Vector3.UNIT_Y
  ).planes;

  return {frustum, planes};
}

test('constructs', t => {
  let options = {
    fov: 1.0,
    aspectRatio: 2.0,
    near: 3.0,
    far: 4.0,
    xOffset: 5.0,
    yOffset: 6.0
  };

  let f = new PerspectiveFrustum(options);
  t.equals(f.fov, options.fov);
  t.equals(f.aspectRatio, options.aspectRatio);
  t.equals(f.near, options.near);
  t.equals(f.far, options.far);
  t.equals(f.xOffset, options.xOffset);
  t.equals(f.yOffset, options.yOffset);

  t.end();
});

test('default constructs', t => {
  let f = new PerspectiveFrustum();
  t.ok(f.fov === undefined);
  t.ok(f.aspectRatio === undefined);
  t.equals(f.near, 1.0);
  t.equals(f.far, 500000000.0);
  t.equals(f.xOffset, 0.0);
  t.equals(f.yOffset, 0.0);

  t.end();
});

// test('out of range fov causes an exception', t => {
//   const {frustum} = beforeEachTest();
//   frustum.fov = -1.0;
//   t.throw(() => frustum.projectionMatrix);
//
//   frustum.fov = _MathUtils.TWO_PI;
//
//   t.throw(() => frustum.projectionMatrix);
//
//   t.end();
// });
//
// test('negative aspect ratio throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   frustum.aspectRatio = -1.0;
//   t.throw(() => frustum.projectionMatrix);
//
//   t.end();
// });
//
// test('out of range near plane throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   frustum.near = -1.0;
//   t.throw(() => frustum.projectionMatrix);
//
//   t.end();
// });
//
// test('negative far plane throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   frustum.far = -1.0;
//   t.throw(() => frustum.projectionMatrix);
//   t.end();
// });
//
// test('computeCullingVolume with no position throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   t.throw(() => frustum.projectionMatrix);
//   t.end();
// });
//
// test('computeCullingVolume with no direction throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   t.throw(() => frustum.projectionMatrix);
//   t.end();
// });
//
// test('computeCullingVolume with no up throws an exception', t => {
//   const {frustum} = beforeEachTest();
//   t.throw(() => frustum.projectionMatrix);
//   t.end();
// });

test('get frustum left plane', t => {
  const {planes} = beforeEachTest();
  let leftPlane = planes[0];
  let expectedResult = new Vector4(Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  equals(leftPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('get frustum right plane', t => {
  const {planes} = beforeEachTest();
  let rightPlane = planes[1];
  let expectedResult = new Vector4(-Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  equals(rightPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('get frustum bottom plane', t => {
  const {planes} = beforeEachTest();
  let bottomPlane = planes[2];
  let expectedResult = new Vector4(0.0, Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  equals(bottomPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('get frustum top plane', t => {
  const {planes} = beforeEachTest();
  let topPlane = planes[3];
  let expectedResult = new Vector4(0.0, -Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  equals(topPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('get frustum near plane', t => {
  const {planes} = beforeEachTest();
  let nearPlane = planes[4];
  let expectedResult = new Vector4(0.0, 0.0, -1.0, -1.0);
  t.equals(nearPlane, expectedResult);
  t.end();
});

test('get frustum far plane', t => {
  const {planes} = beforeEachTest();
  let farPlane = planes[5];
  let expectedResult = new Vector4(0.0, 0.0, 1.0, 2.0);
  t.equals(farPlane, expectedResult);
  t.end();
});

test('get sseDenominator', t => {
  const {frustum} = beforeEachTest();
  equals(frustum.sseDenominator, 1.1547, _MathUtils.EPSILON5);
  t.end();
});

test('get perspective projection matrix', t => {
  const {frustum} = beforeEachTest();
  let projectionMatrix = frustum.projectionMatrix;
  let expected = Matrix4.computePerspectiveFieldOfView(
    frustum.fovy,
    frustum.aspectRatio,
    frustum.near,
    frustum.far,
    new Matrix4()
  );
  equals(projectionMatrix, expected, _MathUtils.EPSILON6);
  t.end();
});

test('get infinite perspective matrix', t => {
  const {frustum} = beforeEachTest();
  let top = frustum.near * Math.tan(0.5 * frustum.fovy);
  let bottom = -top;
  let right = frustum.aspectRatio * top;
  let left = -right;
  let near = frustum.near;

  let expected = Matrix4._computeInfinitePerspectiveOffCenter(
    left,
    right,
    bottom,
    top,
    near,
    new Matrix4()
  );
  t.equals(frustum.infiniteProjectionMatrix, expected);
  t.end();
});

test('get pixel dimensions', t => {
  const {frustum} = beforeEachTest();
  let dimensions = new Vector2(1.0, 1.0);
  let pixelSize = frustum.getPixelDimensions(dimensions.x, dimensions.y, 1.0, new Vector2());
  let expected = frustum._offCenterFrustum.getPixelDimensions(
    dimensions.x,
    dimensions.y,
    1.0,
    new Vector2()
  );
  t.equals(pixelSize.x, expected.x);
  t.equals(pixelSize.y, expected.y);
  t.end();
});

test('equals', t => {
  const {frustum} = beforeEachTest();
  let frustum2 = new PerspectiveFrustum();
  frustum2.near = 1.0;
  frustum2.far = 2.0;
  frustum2.fov = Math.PI / 3.0;
  frustum2.aspectRatio = 1.0;
  t.ok(frustum.equals(frustum2));
  t.end();
});

test('equals undefined', t => {
  const {frustum} = beforeEachTest();
  t.notOk(frustum.equals());
  t.end();
});

test('throws with undefined frustum parameters', t => {
  let frustum = new PerspectiveFrustum();
  t.throw(() => frustum.infiniteProjectionMatrix);
  t.end();
});

test('clone', t => {
  const {frustum} = beforeEachTest();
  let frustum2 = frustum.clone();
  t.equals(frustum, frustum2);
  t.end();
});

test('clone with result parameter', t => {
  const {frustum} = beforeEachTest();
  let result = new PerspectiveFrustum();
  let frustum2 = frustum.clone(result);
  t.equals(frustum2, result);
  t.equals(frustum, frustum2);
  t.end();
});

// createPackableSpecs(
//   PerspectiveFrustum,
//   new PerspectiveFrustum({
//     fov: 1.0,
//     aspectRatio: 2.0,
//     near: 3.0,
//     far: 4.0,
//     xOffset: 5.0,
//     yOffset: 6.0
//   }),
//   [1.0, 2.0, 3.0, 4.0, 5.0, 6.0]
// );
