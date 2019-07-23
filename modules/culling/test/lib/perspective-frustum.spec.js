import {beforeEach, it, expect} from 'test/utils/expect-assertions';

import {PerspectiveFrustum} from '@math.gl/culling/lib/perspective-frustum';
import {Vector3} from 'math.gl';

/* eslint-disable */
var frustum, planes;

beforeEach(function() {
  frustum = new PerspectiveFrustum();
  frustum.near = 1.0;
  frustum.far = 2.0;
  frustum.aspectRatio = 1.0;
  frustum.fov = Math.PI / 3;
  planes = frustum.computeCullingVolume(
    new Vector3(),
    Vector3.negate(Vector3.UNIT_Z, new Vector3()),
    Vector3.UNIT_Y
  ).planes;
});

it('constructs', function() {
  var options = {
    fov: 1.0,
    aspectRatio: 2.0,
    near: 3.0,
    far: 4.0,
    xOffset: 5.0,
    yOffset: 6.0
  };
  var f = new PerspectiveFrustum(options);
  expect(f.fov).toEqual(options.fov);
  expect(f.aspectRatio).toEqual(options.aspectRatio);
  expect(f.near).toEqual(options.near);
  expect(f.far).toEqual(options.far);
  expect(f.xOffset).toEqual(options.xOffset);
  expect(f.yOffset).toEqual(options.yOffset);
});

it('default constructs', function() {
  var f = new PerspectiveFrustum();
  expect(f.fov).toBeUndefined();
  expect(f.aspectRatio).toBeUndefined();
  expect(f.near).toEqual(1.0);
  expect(f.far).toEqual(500000000.0);
  expect(f.xOffset).toEqual(0.0);
  expect(f.yOffset).toEqual(0.0);
});

it('out of range fov causes an exception', function() {
  frustum.fov = -1.0;
  expect(function() {
    return frustum.projectionMatrix;
  }).toThrowDeveloperError();

  frustum.fov = CesiumMath.TWO_PI;
  expect(function() {
    return frustum.projectionMatrix;
  }).toThrowDeveloperError();
});

it('negative aspect ratio throws an exception', function() {
  frustum.aspectRatio = -1.0;
  expect(function() {
    return frustum.projectionMatrix;
  }).toThrowDeveloperError();
});

it('out of range near plane throws an exception', function() {
  frustum.near = -1.0;
  expect(function() {
    return frustum.projectionMatrix;
  }).toThrowDeveloperError();
});

it('negative far plane throws an exception', function() {
  frustum.far = -1.0;
  expect(function() {
    return frustum.projectionMatrix;
  }).toThrowDeveloperError();
});

it('computeCullingVolume with no position throws an exception', function() {
  expect(function() {
    return frustum.computeCullingVolume();
  }).toThrowDeveloperError();
});

it('computeCullingVolume with no direction throws an exception', function() {
  expect(function() {
    return frustum.computeCullingVolume(new Vector3());
  }).toThrowDeveloperError();
});

it('computeCullingVolume with no up throws an exception', function() {
  expect(function() {
    return frustum.computeCullingVolume(new Vector3(), new Vector3());
  }).toThrowDeveloperError();
});

it('get frustum left plane', function() {
  var leftPlane = planes[0];
  var expectedResult = new Cartesian4(Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  expect(leftPlane).toEqualEpsilon(expectedResult, CesiumMath.EPSILON14);
});

it('get frustum right plane', function() {
  var rightPlane = planes[1];
  var expectedResult = new Cartesian4(-Math.sqrt(3.0) / 2.0, 0.0, -0.5, 0.0);
  expect(rightPlane).toEqualEpsilon(expectedResult, CesiumMath.EPSILON14);
});

it('get frustum bottom plane', function() {
  var bottomPlane = planes[2];
  var expectedResult = new Cartesian4(0.0, Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  expect(bottomPlane).toEqualEpsilon(expectedResult, CesiumMath.EPSILON14);
});

it('get frustum top plane', function() {
  var topPlane = planes[3];
  var expectedResult = new Cartesian4(0.0, -Math.sqrt(3.0) / 2.0, -0.5, 0.0);
  expect(topPlane).toEqualEpsilon(expectedResult, CesiumMath.EPSILON14);
});

it('get frustum near plane', function() {
  var nearPlane = planes[4];
  var expectedResult = new Cartesian4(0.0, 0.0, -1.0, -1.0);
  expect(nearPlane).toEqual(expectedResult);
});

it('get frustum far plane', function() {
  var farPlane = planes[5];
  var expectedResult = new Cartesian4(0.0, 0.0, 1.0, 2.0);
  expect(farPlane).toEqual(expectedResult);
});

it('get sseDenominator', function() {
  expect(frustum.sseDenominator).toEqualEpsilon(1.1547, CesiumMath.EPSILON5);
});

it('get perspective projection matrix', function() {
  var projectionMatrix = frustum.projectionMatrix;
  var expected = Matrix4.computePerspectiveFieldOfView(
    frustum.fovy,
    frustum.aspectRatio,
    frustum.near,
    frustum.far,
    new Matrix4()
  );
  expect(projectionMatrix).toEqualEpsilon(expected, CesiumMath.EPSILON6);
});

it('get infinite perspective matrix', function() {
  var top = frustum.near * Math.tan(0.5 * frustum.fovy);
  var bottom = -top;
  var right = frustum.aspectRatio * top;
  var left = -right;
  var near = frustum.near;

  var expected = Matrix4.computeInfinitePerspectiveOffCenter(
    left,
    right,
    bottom,
    top,
    near,
    new Matrix4()
  );
  expect(frustum.infiniteProjectionMatrix).toEqual(expected);
});

it('get pixel dimensions', function() {
  var dimensions = new Cartesian2(1.0, 1.0);
  var pixelSize = frustum.getPixelDimensions(dimensions.x, dimensions.y, 1.0, new Cartesian2());
  var expected = frustum._offCenterFrustum.getPixelDimensions(
    dimensions.x,
    dimensions.y,
    1.0,
    new Cartesian2()
  );
  expect(pixelSize.x).toEqual(expected.x);
  expect(pixelSize.y).toEqual(expected.y);
});

it('equals', function() {
  var frustum2 = new PerspectiveFrustum();
  frustum2.near = 1.0;
  frustum2.far = 2.0;
  frustum2.fov = Math.PI / 3.0;
  frustum2.aspectRatio = 1.0;
  expect(frustum.equals(frustum2)).toEqual(true);
});

it('equals undefined', function() {
  expect(frustum.equals()).toEqual(false);
});

it('throws with undefined frustum parameters', function() {
  var frustum = new PerspectiveFrustum();
  expect(function() {
    return frustum.infiniteProjectionMatrix;
  }).toThrowDeveloperError();
});

it('clone', function() {
  var frustum2 = frustum.clone();
  expect(frustum).toEqual(frustum2);
});

it('clone with result parameter', function() {
  var result = new PerspectiveFrustum();
  var frustum2 = frustum.clone(result);
  expect(frustum2).toBe(result);
  expect(frustum).toEqual(frustum2);
});

createPackableSpecs(
  PerspectiveFrustum,
  new PerspectiveFrustum({
    fov: 1.0,
    aspectRatio: 2.0,
    near: 3.0,
    far: 4.0,
    xOffset: 5.0,
    yOffset: 6.0
  }),
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0]
);
