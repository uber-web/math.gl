// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// @ts-nocheck

import test from 'tape-catch';
import {tapeEquals, tapeEqualsEpsilon} from 'test/utils/tape-assertions';

import {_PerspectiveFrustum as PerspectiveFrustum} from '@math.gl/culling';
import {Vector2, Vector3, Vector4, Matrix4, _MathUtils, equals} from '@math.gl/core';

const VECTOR3_UNIT_Y = Object.freeze(new Vector3(0, 1, 0));
const VECTOR3_UNIT_Z = Object.freeze(new Vector3(0, 0, 1));

function beforeEachTest() {
  const frustum = new PerspectiveFrustum({
    near: 1.0,
    far: 2.0,
    aspectRatio: 1.0,
    fov: Math.PI / 3
  });

  const planes = frustum.computeCullingVolume(
    new Vector3(),
    new Vector3().copy(VECTOR3_UNIT_Z).negate(),
    VECTOR3_UNIT_Y
  ).planes;

  return {frustum, planes};
}

test('PerspectiveFrustum#constructs', t => {
  const options = {
    fov: 1.0,
    aspectRatio: 2.0,
    near: 3.0,
    far: 4.0,
    xOffset: 5.0,
    yOffset: 6.0
  };

  const f = new PerspectiveFrustum(options);
  t.equals(f.fov, options.fov);
  t.equals(f.aspectRatio, options.aspectRatio);
  t.equals(f.near, options.near);
  t.equals(f.far, options.far);
  t.equals(f.xOffset, options.xOffset);
  t.equals(f.yOffset, options.yOffset);

  t.end();
});

test('PerspectiveFrustum#default constructs', t => {
  const f = new PerspectiveFrustum();
  t.ok(f.fov === undefined);
  t.ok(f.aspectRatio === undefined);
  t.equals(f.near, 1.0);
  t.equals(f.far, 500000000.0);
  t.equals(f.xOffset, 0.0);
  t.equals(f.yOffset, 0.0);

  t.end();
});

test('PerspectiveFrustum#out of range fov causes an exception', t => {
  const {frustum} = beforeEachTest();
  frustum.fov = -1.0;
  t.throws(() => frustum.projectionMatrix);

  frustum.fov = _MathUtils.TWO_PI;

  t.throws(() => frustum.projectionMatrix);

  t.end();
});

test('PerspectiveFrustum#negative aspect ratio throws an exception', t => {
  const {frustum} = beforeEachTest();
  frustum.aspectRatio = -1.0;
  t.throws(() => frustum.projectionMatrix);

  t.end();
});

test('PerspectiveFrustum#out of range near plane throws an exception', t => {
  const {frustum} = beforeEachTest();
  frustum.near = -1.0;
  t.throws(() => frustum.projectionMatrix);

  t.end();
});

test('PerspectiveFrustum#negative far plane throws an exception', t => {
  const {frustum} = beforeEachTest();
  frustum.far = -1.0;
  t.throws(() => frustum.projectionMatrix);
  t.end();
});

test('PerspectiveFrustum#computeCullingVolume with no position throws an exception', t => {
  const {frustum} = beforeEachTest();
  t.throws(() => frustum.computeCullingVolume());
  t.end();
});

test('PerspectiveFrustum#computeCullingVolume with no direction throws an exception', t => {
  const {frustum} = beforeEachTest();
  t.throws(() => frustum.computeCullingVolume([0, 0, 0]));
  t.end();
});

test('PerspectiveFrustum#computeCullingVolume with no up throws an exception', t => {
  const {frustum} = beforeEachTest();
  t.throws(() => frustum.computeCullingVolume([0, 0, 0], [0, 0, 0]));
  t.end();
});

test('PerspectiveFrustum#get frustum left plane', t => {
  const {planes} = beforeEachTest();
  const leftPlane = planes[0];
  const expectedResult = new Vector4(Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  equals(leftPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('PerspectiveFrustum#get frustum right plane', t => {
  const {planes} = beforeEachTest();
  const rightPlane = planes[1];
  const expectedResult = new Vector4(-Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  equals(rightPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('PerspectiveFrustum#get frustum bottom plane', t => {
  const {planes} = beforeEachTest();
  const bottomPlane = planes[2];
  const expectedResult = new Vector4(0.0, Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  equals(bottomPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('PerspectiveFrustum#get frustum top plane', t => {
  const {planes} = beforeEachTest();
  const topPlane = planes[3];
  const expectedResult = new Vector4(0.0, -Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  equals(topPlane, expectedResult, _MathUtils.EPSILON14);
  t.end();
});

test('PerspectiveFrustum#get frustum near plane', t => {
  const {planes} = beforeEachTest();
  const nearPlane = planes[4];
  const expectedResult = new Vector4(0.0, 0.0, -1.0, -1.0);
  equals(nearPlane, expectedResult, _MathUtils.EPSILON15);
  t.end();
});

test('PerspectiveFrustum#get frustum far plane', t => {
  const {planes} = beforeEachTest();
  const farPlane = planes[5];
  const expectedResult = new Vector4(0.0, 0.0, 1.0, 2.0);
  equals(farPlane, expectedResult, _MathUtils.EPSILON15);
  t.end();
});

test('PerspectiveFrustum#get sseDenominator', t => {
  const {frustum} = beforeEachTest();
  equals(frustum.sseDenominator, 1.1547, _MathUtils.EPSILON5);
  t.end();
});

test('PerspectiveFrustum#get perspective projection matrix', t => {
  const {frustum} = beforeEachTest();
  const projectionMatrix = frustum.projectionMatrix;
  const expected = new Matrix4().perspective({
    fovy: frustum.fovy,
    aspectRatio: frustum.aspectRatio,
    near: frustum.near,
    far: frustum.far
  });
  tapeEqualsEpsilon(t, projectionMatrix, expected, _MathUtils.EPSILON6);
  t.end();
});

test('PerspectiveFrustum#get infinite perspective matrix', t => {
  const {frustum} = beforeEachTest();
  const top = frustum.near * Math.tan(0.5 * frustum.fovy);
  const bottom = -top;
  const right = frustum.aspectRatio * top;
  const left = -right;
  const near = frustum.near;

  const expected = new Matrix4().frustum({
    left,
    right,
    bottom,
    top,
    near,
    far: Infinity
  });
  tapeEquals(t, frustum.infiniteProjectionMatrix, expected);
  t.end();
});

test('PerspectiveFrustum#get pixel dimensions', t => {
  const {frustum} = beforeEachTest();
  const dimensions = new Vector2(1.0, 1.0);
  const pixelSize = frustum.getPixelDimensions(dimensions.x, dimensions.y, 1.0, new Vector2());
  const expected = frustum._offCenterFrustum.getPixelDimensions(
    dimensions.x,
    dimensions.y,
    1.0,
    new Vector2()
  );
  t.equals(pixelSize.x, expected.x);
  t.equals(pixelSize.y, expected.y);
  t.end();
});

test('PerspectiveFrustum#equals', t => {
  const {frustum} = beforeEachTest();
  const frustum2 = new PerspectiveFrustum();
  frustum2.near = 1.0;
  frustum2.far = 2.0;
  frustum2.fov = Math.PI / 3.0;
  frustum2.aspectRatio = 1.0;
  t.ok(frustum.equals(frustum2));
  t.end();
});

test('PerspectiveFrustum#equals undefined', t => {
  const {frustum} = beforeEachTest();
  t.notOk(frustum.equals());
  t.end();
});

test('PerspectiveFrustum#throws with undefined frustum parameters', t => {
  const frustum = new PerspectiveFrustum();
  t.throws(() => frustum.infiniteProjectionMatrix);
  t.end();
});

test('PerspectiveFrustum#clone', t => {
  const {frustum} = beforeEachTest();
  const frustum2 = frustum.clone();
  tapeEquals(t, frustum, frustum2);
  t.end();
});
