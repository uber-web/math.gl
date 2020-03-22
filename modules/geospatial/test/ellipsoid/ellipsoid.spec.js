// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-catch';
import {Vector3, toDegrees, _MathUtils} from '@math.gl/core';
import {Ellipsoid} from '@math.gl/geospatial';
import {tapeEquals, tapeEqualsEpsilon} from 'test/utils/tape-assertions';

const radii = new Vector3(1.0, 2.0, 3.0);
const radiiSquared = new Vector3(radii).multiply(radii);
const radiiToTheFourth = new Vector3(radiiSquared).multiply(radiiSquared);
const oneOverRadii = new Vector3(1 / radii.x, 1 / radii.y, 1 / radii.z);
const oneOverRadiiSquared = new Vector3(1 / radiiSquared.x, 1 / radiiSquared.y, 1 / radiiSquared.z);
const minimumRadius = 1.0;
const maximumRadius = 3.0;

// All values computes using STK Components
const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);
const spaceCartesianGeodeticSurfaceNormal = new Vector3(
  0.6829975339864266,
  -0.68299753398642649,
  0.25889908678270795
);

const spaceCartographic = new Vector3(-45.0, 15.0, 330000.0);
const spaceCartographicGeodeticSurfaceNormal = new Vector3(
  0.68301270189221941,
  -0.6830127018922193,
  0.25881904510252074
);

const surfaceCartesian = new Vector3(4094327.7921465295, 1909216.4044747739, 4487348.4088659193);
const surfaceCartographic = new Vector3(25.0, 45.0, 0.0);

test('Ellipsoid#default constructor creates zero Ellipsoid', t => {
  const ellipsoid = new Ellipsoid();
  tapeEquals(t, ellipsoid.radii, Vector3.ZERO);
  tapeEquals(t, ellipsoid.radiiSquared, Vector3.ZERO);
  tapeEquals(t, ellipsoid.radiiToTheFourth, Vector3.ZERO);
  tapeEquals(t, ellipsoid.oneOverRadii, Vector3.ZERO);
  tapeEquals(t, ellipsoid.oneOverRadiiSquared, Vector3.ZERO);
  t.equals(ellipsoid.minimumRadius, 0.0);
  t.equals(ellipsoid.maximumRadius, 0.0);
  t.end();
});

test('Ellipsoid#constructor computes correct values', t => {
  const ellipsoid = new Ellipsoid(radii.x, radii.y, radii.z);
  tapeEquals(t, ellipsoid.radii, radii);
  tapeEquals(t, ellipsoid.radiiSquared, radiiSquared);
  tapeEquals(t, ellipsoid.radiiToTheFourth, radiiToTheFourth);
  tapeEquals(t, ellipsoid.oneOverRadii, oneOverRadii);
  tapeEquals(t, ellipsoid.oneOverRadiiSquared, oneOverRadiiSquared);
  t.equals(ellipsoid.minimumRadius, minimumRadius);
  t.equals(ellipsoid.maximumRadius, maximumRadius);
  t.end();
});

test('Ellipsoid#ellipsoid is initialized with squaredXOverSquaredZ property', t => {
  const ellipsoid = new Ellipsoid(4, 4, 3);
  const squaredXOverSquaredZ = ellipsoid.radiiSquared.x / ellipsoid.radiiSquared.z;
  t.equals(ellipsoid.squaredXOverSquaredZ, squaredXOverSquaredZ);
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormalCartographic works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const returnedResult = ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic);
  tapeEqualsEpsilon(
    t,
    returnedResult,
    spaceCartographicGeodeticSurfaceNormal,
    _MathUtils.EPSILON15
  );
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormalCartographic works with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const result = new Vector3();
  const returnedResult = ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(
    t,
    returnedResult,
    spaceCartographicGeodeticSurfaceNormal,
    _MathUtils.EPSILON15
  );
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormal works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const returnedResult = ellipsoid.geodeticSurfaceNormal(spaceCartesian);
  tapeEqualsEpsilon(t, returnedResult, spaceCartesianGeodeticSurfaceNormal, _MathUtils.EPSILON15);
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormal works with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const result = new Vector3();
  const returnedResult = ellipsoid.geodeticSurfaceNormal(spaceCartesian, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, returnedResult, spaceCartesianGeodeticSurfaceNormal, _MathUtils.EPSILON15);
  t.end();
});

test('Ellipsoid#geocentricSurfaceNormal works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const returnedResult = ellipsoid.geocentricSurfaceNormal([2, 0, 0]);
  tapeEquals(t, returnedResult, [1, 0, 0]);
  t.end();
});

test('Ellipsoid#geocentricSurfaceNormal works with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const result = new Vector3();
  const returnedResult = ellipsoid.geocentricSurfaceNormal([2, 0, 0], result);
  t.ok(returnedResult === result);
  tapeEquals(t, returnedResult, [1, 0, 0]);
  t.end();
});

test('Ellipsoid#cartographicToCartesian works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const returnedResult = ellipsoid.cartographicToCartesian(spaceCartographic);
  tapeEqualsEpsilon(t, returnedResult, spaceCartesian, _MathUtils.EPSILON7);
  t.end();
});

test('Ellipsoid#cartographicToCartesian works with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const result = new Vector3();
  const returnedResult = ellipsoid.cartographicToCartesian(spaceCartographic, result);
  t.ok(result === returnedResult);
  tapeEqualsEpsilon(t, returnedResult, spaceCartesian, _MathUtils.EPSILON7);
  t.end();
});

test('Ellipsoid#cartographicToCartesian works with an Object result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const result = {x: 0, y: 0, z: 0};
  // @ts-ignore ADD XYZ TYPE
  const returnedResult = ellipsoid.cartographicToCartesian(spaceCartographic, result);
  t.ok(result === returnedResult);
  tapeEqualsEpsilon(t, returnedResult.x, spaceCartesian.x, _MathUtils.EPSILON7);
  tapeEqualsEpsilon(t, returnedResult.y, spaceCartesian.y, _MathUtils.EPSILON7);
  tapeEqualsEpsilon(t, returnedResult.z, spaceCartesian.z, _MathUtils.EPSILON7);
  t.end();
});

test('Ellipsoid#cartesianToCartographic works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const returnedResult = ellipsoid.cartesianToCartographic(surfaceCartesian);
  tapeEqualsEpsilon(t, returnedResult, surfaceCartographic, _MathUtils.EPSILON8);
  t.end();
});

test('Ellipsoid#cartesianToCartographic works with a result parameter', t => {
  const result = new Vector3();
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(surfaceCartesian, result);
  t.ok(result === returnedResult);
  tapeEqualsEpsilon(t, returnedResult, surfaceCartographic, _MathUtils.EPSILON8);
  t.end();
});

test('Ellipsoid#cartesianToCartographic works with an Object result parameter', t => {
  const result = {x: 0, y: 0, z: 0};
  // @ts-ignore
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(surfaceCartesian, result);
  t.ok(result === returnedResult);
  tapeEqualsEpsilon(t, returnedResult.x, surfaceCartographic.x, _MathUtils.EPSILON8);
  tapeEqualsEpsilon(t, returnedResult.y, surfaceCartographic.y, _MathUtils.EPSILON8);
  tapeEqualsEpsilon(t, returnedResult.z, surfaceCartographic.z, _MathUtils.EPSILON8);
  t.end();
});

test('Ellipsoid#cartesianToCartographic works with a Cartesian result parameter', t => {
  const result = {longitude: 0, latitude: 0, height: 0};
  // @ts-ignore
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(surfaceCartesian, result);
  t.ok(result === returnedResult);
  tapeEqualsEpsilon(t, returnedResult.longitude, surfaceCartographic.x, _MathUtils.EPSILON8);
  tapeEqualsEpsilon(t, returnedResult.latitude, surfaceCartographic.y, _MathUtils.EPSILON8);
  tapeEqualsEpsilon(t, returnedResult.height, surfaceCartographic.z, _MathUtils.EPSILON8);
  t.end();
});

test('Ellipsoid#cartesianToCartographic works close to center', t => {
  const expected = new Vector3(
    toDegrees(9.999999999999999e-11),
    toDegrees(1.0067394967422763e-20),
    -6378137.0
  );
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(new Vector3(1e-50, 1e-60, 1e-70));
  t.ok(returnedResult, expected);
  t.end();
});

test('Ellipsoid#cartesianToCartographic return undefined very close to center', t => {
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(
    new Vector3(1e-150, 1e-150, 1e-150)
  );
  t.equals(returnedResult, undefined);
  t.end();
});

test('Ellipsoid#cartesianToCartographic return undefined at center', t => {
  const returnedResult = Ellipsoid.WGS84.cartesianToCartographic(Vector3.ZERO);
  t.equals(returnedResult, undefined);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface scaled in the x direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(1.0, 0.0, 0.0);
  const cartesian = new Vector3(9.0, 0.0, 0.0);
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface scaled in the y direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.0, 2.0, 0.0);
  const cartesian = new Vector3(0.0, 8.0, 0.0);
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface scaled in the z direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.0, 0.0, 3.0);
  const cartesian = new Vector3(0.0, 0.0, 8.0);
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface works without a result parameter', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.2680893773941855, 1.1160466902266495, 2.3559801120411263);
  const cartesian = new Vector3(4.0, 5.0, 6.0);
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian);
  tapeEqualsEpsilon(t, returnedResult, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface works with a result parameter', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.2680893773941855, 1.1160466902266495, 2.3559801120411263);
  const cartesian = new Vector3(4.0, 5.0, 6.0);
  const result = new Vector3();
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface returns undefined at center', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const cartesian = new Vector3(0.0, 0.0, 0.0);
  const returnedResult = ellipsoid.scaleToGeodeticSurface(cartesian);
  t.equals(returnedResult, undefined);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface scaled in the x direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(1.0, 0.0, 0.0);
  const cartesian = new Vector3(9.0, 0.0, 0.0);
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface scaled in the y direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.0, 2.0, 0.0);
  const cartesian = new Vector3(0.0, 8.0, 0.0);
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface scaled in the z direction', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.0, 0.0, 3.0);
  const cartesian = new Vector3(0.0, 0.0, 8.0);
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian);
  t.deepEquals(returnedResult, expected);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface works without a result parameter', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.7807200583588266, 0.9759000729485333, 1.1710800875382399);
  const cartesian = new Vector3(4.0, 5.0, 6.0);
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian);
  tapeEqualsEpsilon(t, returnedResult, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface works with a result parameter', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.7807200583588266, 0.9759000729485333, 1.1710800875382399);
  const cartesian = new Vector3(4.0, 5.0, 6.0);
  const result = new Vector3();
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface works with an Object result parameter', t => {
  const ellipsoid = new Ellipsoid(1.0, 2.0, 3.0);
  const expected = new Vector3(0.7807200583588266, 0.9759000729485333, 1.1710800875382399);
  const cartesian = new Vector3(4.0, 5.0, 6.0);
  const result = {x: 0, y: 0, z: 0};
  // @ts-ignore TODO - remove
  const returnedResult = ellipsoid.scaleToGeocentricSurface(cartesian, result);
  // @ts-ignore
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, result.x, expected.x, _MathUtils.EPSILON16);
  tapeEqualsEpsilon(t, result.y, expected.y, _MathUtils.EPSILON16);
  tapeEqualsEpsilon(t, result.z, expected.z, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#transformPositionToScaledSpace works without a result parameter', t => {
  const ellipsoid = new Ellipsoid(2.0, 3.0, 4.0);
  const expected = new Vector3(2.0, 2.0, 2.0);
  const cartesian = new Vector3(4.0, 6.0, 8.0);
  const returnedResult = ellipsoid.transformPositionToScaledSpace(cartesian);
  tapeEqualsEpsilon(t, returnedResult, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#transformPositionToScaledSpace works with a result parameter', t => {
  const ellipsoid = new Ellipsoid(2.0, 3.0, 4.0);
  const expected = new Vector3(3.0, 3.0, 3.0);
  const cartesian = new Vector3(6.0, 9.0, 12.0);
  const result = new Vector3();
  const returnedResult = ellipsoid.transformPositionToScaledSpace(cartesian, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#transformPositionFromScaledSpace works without a result parameter', t => {
  const ellipsoid = new Ellipsoid(2.0, 3.0, 4.0);
  const expected = new Vector3(4.0, 6.0, 8.0);
  const cartesian = new Vector3(2.0, 2.0, 2.0);
  const returnedResult = ellipsoid.transformPositionFromScaledSpace(cartesian);
  tapeEqualsEpsilon(t, returnedResult, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#transformPositionFromScaledSpace works with a result parameter', t => {
  const ellipsoid = new Ellipsoid(2.0, 3.0, 4.0);
  const expected = new Vector3(6.0, 9.0, 12.0);
  const cartesian = new Vector3(3.0, 3.0, 3.0);
  const result = new Vector3();
  const returnedResult = ellipsoid.transformPositionFromScaledSpace(cartesian, result);
  t.ok(returnedResult === result);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON16);
  t.end();
});

test('Ellipsoid#equals works in all cases', t => {
  const ellipsoid = new Ellipsoid(1.0, 0.0, 0.0);
  t.equals(ellipsoid.equals(new Ellipsoid(1.0, 0.0, 0.0)), true);
  t.equals(ellipsoid.equals(new Ellipsoid(1.0, 1.0, 0.0)), false);
  t.equals(ellipsoid.equals(undefined), false);
  t.end();
});

test('Ellipsoid#toString produces expected values', t => {
  const expected = '[1, 2, 3]';
  const ellipsoid = new Ellipsoid(1, 2, 3);
  t.equals(ellipsoid.toString(), expected);
  t.end();
});

test('Ellipsoid#constructor throws if x less than 0', t => {
  t.throws(() => new Ellipsoid(-1, 0, 0));
  t.end();
});

test('Ellipsoid#constructor throws if y less than 0', t => {
  t.throws(() => new Ellipsoid(0, -1, 0));
  t.end();
});

test('Ellipsoid#constructor throws if z less than 0', t => {
  t.throws(() => new Ellipsoid(0, 0, -1));
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormalCartographic throws with no cartographic', t => {
  t.throws(() => Ellipsoid.WGS84.geodeticSurfaceNormalCartographic(undefined));
  t.end();
});

test.skip('Ellipsoid#geocentricSurfaceNormal throws with no', t => {
  t.throws(() => Ellipsoid.WGS84.geocentricSurfaceNormal(undefined));
  t.end();
});

test('Ellipsoid#geodeticSurfaceNormal throws with no cartesian', t => {
  t.throws(() => Ellipsoid.WGS84.geodeticSurfaceNormal(undefined));
  t.end();
});

test('Ellipsoid#cartographicToCartesian throws with no cartographic', t => {
  t.throws(() => Ellipsoid.WGS84.cartographicToCartesian(undefined));
  t.end();
});

test('Ellipsoid#cartographicArrayToCartesianArray throws with no cartographics', t => {
  // @ts-ignore
  t.throws(() => Ellipsoid.WGS84.cartographicArrayToCartesianArray(undefined));
  t.end();
});

test('Ellipsoid#cartesianToCartographic throws with no cartesian', t => {
  t.throws(() => Ellipsoid.WGS84.cartesianToCartographic(undefined));
  t.end();
});

test('Ellipsoid#cartesianArrayToCartographicArray throws with no cartesians', t => {
  // @ts-ignore
  t.throws(() => Ellipsoid.WGS84.cartesianArrayToCartographicArray(undefined));
  t.end();
});

test('Ellipsoid#scaleToGeodeticSurface throws with no cartesian', t => {
  t.throws(() => Ellipsoid.WGS84.scaleToGeodeticSurface(undefined));
  t.end();
});

test('Ellipsoid#scaleToGeocentricSurface throws with no cartesian', t => {
  t.throws(() => Ellipsoid.WGS84.scaleToGeocentricSurface(undefined));
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis throws with no position', t => {
  // @ts-ignore
  t.throws(() => Ellipsoid.WGS84.getSurfaceNormalIntersectionWithZAxis(undefined));
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis throws if the ellipsoid is not an ellipsoid of revolution', t => {
  const ellipsoid = new Ellipsoid(1, 2, 3);
  const cartesian = new Vector3();
  // @ts-ignore
  t.throws(() => ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesian));
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis throws if the ellipsoid has radii.z === 0', t => {
  const ellipsoid = new Ellipsoid(1, 2, 0);
  const cartesian = new Vector3();
  // @ts-ignore
  t.throws(() => ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesian));
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis works without a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const cartographic = [35.23, 33.23, 0]; // Cartographic.fromDegrees(35.23, 33.23);
  const cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  const returnedResult = ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesianOnTheSurface);
  t.ok(returnedResult instanceof Array);
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis works with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const cartographic = [35.23, 33.23, 0]; // Cartographic.fromDegrees(35.23, 33.23);
  const cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  const returnedResult = ellipsoid.getSurfaceNormalIntersectionWithZAxis(
    cartesianOnTheSurface,
    undefined,
    cartesianOnTheSurface
  );
  t.ok(returnedResult === cartesianOnTheSurface);
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis returns undefined if the result is outside the ellipsoid with buffer parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const cartographic = [35.23, 33.23, 0]; // Cartographic.fromDegrees(35.23, 33.23);
  const cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  const returnedResult = ellipsoid.getSurfaceNormalIntersectionWithZAxis(
    cartesianOnTheSurface,
    ellipsoid.radii.z
  );
  t.ok(returnedResult === undefined);
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis returns undefined if the result is outside the ellipsoid without buffer parameter', t => {
  const majorAxis = 10;
  const minorAxis = 1;
  const ellipsoid = new Ellipsoid(majorAxis, majorAxis, minorAxis);
  const cartographic = [45.0, 90.0, 0]; // Cartographic.fromDegrees(45.0, 90.0);
  const cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  const returnedResult = ellipsoid.getSurfaceNormalIntersectionWithZAxis(
    cartesianOnTheSurface,
    undefined
  );
  t.ok(returnedResult === undefined);
  t.end();
});

test('Ellipsoid#getSurfaceNormalIntersectionWithZAxis returns a result that is equal to a value that computed in a different way', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const cartographic = [35.23, 33.23, 0]; // Cartographic.fromDegrees(35.23, 33.23);
  let cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  const surfaceNormal = ellipsoid.geodeticSurfaceNormal(cartesianOnTheSurface);
  const magnitude = cartesianOnTheSurface[0] / surfaceNormal[0];

  const expected = new Vector3();
  expected.z = cartesianOnTheSurface[2] - surfaceNormal[2] * magnitude;
  let result = ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesianOnTheSurface, undefined);
  tapeEqualsEpsilon(t, result, expected, _MathUtils.EPSILON8);

  // at the equator
  cartesianOnTheSurface = new Vector3(ellipsoid.radii.x, 0, 0);
  result = ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesianOnTheSurface, undefined);
  tapeEqualsEpsilon(t, result, Vector3.ZERO, _MathUtils.EPSILON8);

  t.end();
});

test("getSurfaceNormalIntersectionWithZAxis returns a result that when it's used as an origin for a vector with the surface normal direction it produces an accurate cartographic", t => {
  const ellipsoid = Ellipsoid.WGS84;

  let cartographic = [35.23, 33.23, 0];
  let cartesianOnTheSurface = ellipsoid.cartographicToCartesian(cartographic);
  let surfaceNormal = ellipsoid.geodeticSurfaceNormal(cartesianOnTheSurface);

  let result = ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesianOnTheSurface, undefined);

  let surfaceNormalWithLength = new Vector3(surfaceNormal).multiplyByScalar(
    ellipsoid.maximumRadius
  );
  let position = new Vector3(surfaceNormalWithLength).add(result);
  let resultCartographic = ellipsoid.cartesianToCartographic(position);
  resultCartographic[2] = 0.0;
  tapeEqualsEpsilon(t, resultCartographic, cartographic, _MathUtils.EPSILON8);

  // at the north pole
  cartographic = [0, 90, 0];
  cartesianOnTheSurface = new Vector3(0, 0, ellipsoid.radii.z);
  surfaceNormal = ellipsoid.geodeticSurfaceNormal(cartesianOnTheSurface);
  surfaceNormalWithLength = new Vector3(surfaceNormal).multiplyByScalar(ellipsoid.maximumRadius);
  result = ellipsoid.getSurfaceNormalIntersectionWithZAxis(cartesianOnTheSurface, undefined);
  position = new Vector3(surfaceNormalWithLength).add(result);
  resultCartographic = ellipsoid.cartesianToCartographic(position);
  resultCartographic[2] = 0.0;
  tapeEqualsEpsilon(t, resultCartographic, cartographic, _MathUtils.EPSILON8);

  t.end();
});
