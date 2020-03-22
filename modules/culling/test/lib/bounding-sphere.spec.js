// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';

import {Vector3, Matrix4} from '@math.gl/core';
import {BoundingSphere, Plane, INTERSECTION} from '@math.gl/culling';

// const positionsRadius = 1.0;
// const positionsCenter = new Vector3(10000001.0, 0.0, 0.0);

const center = [10000000.0, 0.0, 0.0];

const VECTOR3_UNIT_X = new Vector3(1, 0, 0);
Object.freeze(VECTOR3_UNIT_X);

const VECTOR3_ZERO = new Vector3(0, 0, 0);
Object.freeze(VECTOR3_ZERO);

function getPositions() {
  return [
    new Vector3(center).add([1, 0, 0]),
    new Vector3(center).add([2, 0, 0]),
    new Vector3(center).add([0, 0, 0]),
    new Vector3(center).add([1, 1, 0]),
    new Vector3(center).add([1, -1, 0]),
    new Vector3(center).add([1, 0, 1]),
    new Vector3(center).add([1, 0, -1])
  ];
}

/*
function getPositionsAsFlatArray() {
  const positions = getPositions();
  const result = [];
  for (let i = 0; i < positions.length; ++i) {
    result.push(positions[i].x);
    result.push(positions[i].y);
    result.push(positions[i].z);
  }
  return result;
}

function getPositionsAsFlatArrayWithStride5() {
  const positions = getPositions();
  const result = [];
  for (let i = 0; i < positions.length; ++i) {
    result.push(positions[i].x);
    result.push(positions[i].y);
    result.push(positions[i].z);
    result.push(1.23);
    result.push(4.56);
  }
  return result;
}

function getPositionsAsEncodedFlatArray() {
  const positions = getPositions();
  const high = [];
  const low = [];
  for (let i = 0; i < positions.length; ++i) {
    const encoded = EncodedVector3.fromCartesian(positions[i]);
    high.push(encoded.high.x);
    high.push(encoded.high.y);
    high.push(encoded.high.z);
    low.push(encoded.low.x);
    low.push(encoded.low.y);
    low.push(encoded.low.z);
  }
  return {
    high,
    low
  };
}
*/

test('BoundingSphere#default constructing produces expected values', t => {
  const sphere = new BoundingSphere();
  tapeEquals(t, sphere.center, [0, 0, 0]);
  t.equals(sphere.radius, 0.0);

  t.end();
});

test('BoundingSphere#constructor sets expected values (array)', t => {
  const expectedCenter = [1.0, 2.0, 3.0];
  const expectedRadius = 1.0;
  const sphere = new BoundingSphere(expectedCenter, expectedRadius);
  tapeEquals(t, sphere.center, expectedCenter);
  t.equals(sphere.radius, expectedRadius);

  t.end();
});

test('BoundingSphere#constructor sets expected values (object)', t => {
  const expectedCenter = {x: 1.0, y: 2.0, z: 3.0};
  const expectedRadius = 1.0;
  // @ts-ignore TODO - add XYZ types
  const sphere = new BoundingSphere(expectedCenter, expectedRadius);
  tapeEquals(t, sphere.center, [1, 2, 3]);
  t.equals(sphere.radius, expectedRadius);

  t.end();
});

test('BoundingSphere#fromCornerPoints', t => {
  const sphere = new BoundingSphere().fromCornerPoints(
    new Vector3(-1.0, -0.0, 0.0),
    new Vector3(1.0, 0.0, 0.0)
  );
  tapeEquals(t, sphere, new BoundingSphere(VECTOR3_ZERO, 1.0));

  t.end();
});

test('BoundingSphere#fromCornerPoints throws without corner', t => {
  const sphere = new BoundingSphere();
  // @ts-ignore
  t.throws(() => sphere.fromCornerPoints());

  t.end();
});

test('BoundingSphere#fromCornerPoints throws without oppositeCorner', t => {
  const sphere = new BoundingSphere();
  // @ts-ignore
  t.throws(() => sphere.fromCornerPoints(VECTOR3_UNIT_X));

  t.end();
});

test('BoundingSphere#clone', t => {
  const sphere = new BoundingSphere(new Vector3(1.0, 2.0, 3.0), 4.0);
  const result = sphere.clone();
  t.notEqual(sphere, result);
  tapeEquals(t, sphere, result);

  t.end();
});

test('BoundingSphere#equals', t => {
  const sphere = new BoundingSphere([1.0, 2.0, 3.0], 4.0);
  t.equals(sphere.equals(new BoundingSphere([1.0, 2.0, 3.0], 4.0)), true);
  t.equals(sphere.equals(new BoundingSphere([5.0, 2.0, 3.0], 4.0)), false);
  t.equals(sphere.equals(new BoundingSphere([1.0, 6.0, 3.0], 4.0)), false);
  t.equals(sphere.equals(new BoundingSphere([1.0, 2.0, 7.0], 4.0)), false);
  t.equals(sphere.equals(new BoundingSphere([1.0, 2.0, 3.0], 8.0)), false);
  t.equals(sphere.equals(undefined), false);

  t.end();
});

test('BoundingSphere#intersectPlane with sphere on the positive side of a plane', t => {
  const sphere = new BoundingSphere(VECTOR3_ZERO, 0.5);
  const normal = new Vector3(VECTOR3_UNIT_X).negate();
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -normal.dot(position));
  t.equals(sphere.intersectPlane(plane), INTERSECTION.INSIDE);

  t.end();
});

test('BoundingSphere#intersectPlane with sphere on the negative side of a plane', t => {
  const sphere = new BoundingSphere(VECTOR3_ZERO, 0.5);
  const normal = VECTOR3_UNIT_X;
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -normal.dot(position));
  t.equals(sphere.intersectPlane(plane), INTERSECTION.OUTSIDE);

  t.end();
});

test('BoundingSphere#intersectPlane with sphere intersecting a plane', t => {
  const sphere = new BoundingSphere(VECTOR3_UNIT_X, 0.5);
  const normal = VECTOR3_UNIT_X;
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -normal.dot(position));
  t.equals(sphere.intersectPlane(plane), INTERSECTION.INTERSECTING);

  t.end();
});

test('BoundingSphere#expands to contain another sphere', t => {
  const bs1 = new BoundingSphere(VECTOR3_UNIT_X.clone().negate(), 1.0);
  const bs2 = new BoundingSphere(VECTOR3_UNIT_X, 1.0);
  const expected = new BoundingSphere(VECTOR3_ZERO, 2.0);
  tapeEquals(t, bs1.union(bs2), expected);

  t.end();
});

test('BoundingSphere#union left sphere encloses right', t => {
  const bs1 = new BoundingSphere(VECTOR3_ZERO, 3.0);
  const bs2 = new BoundingSphere(VECTOR3_UNIT_X, 1.0);
  const union = bs1.union(bs2);
  tapeEquals(t, union, bs1);

  t.end();
});

test('BoundingSphere#union of co-located spheres, right sphere encloses left', t => {
  const bs1 = new BoundingSphere(VECTOR3_UNIT_X, 1.0);
  const bs2 = new BoundingSphere(VECTOR3_UNIT_X, 2.0);
  const union = bs1.union(bs2);
  tapeEquals(t, union, bs2);

  t.end();
});

test('BoundingSphere#union result parameter is a tight fit', t => {
  const bs1 = new BoundingSphere(new Vector3(VECTOR3_UNIT_X).negate().scale(3.0), 3.0);
  const bs2 = new BoundingSphere(VECTOR3_UNIT_X, 1.0);
  const expected = new BoundingSphere(new Vector3(VECTOR3_UNIT_X).negate().scale(2.0), 4.0);
  bs1.union(bs2);
  tapeEquals(t, bs1, expected);

  t.end();
});

test('BoundingSphere#expands to contain another point', t => {
  const bs = new BoundingSphere(new Vector3(VECTOR3_UNIT_X).negate(), 1.0);
  const point = VECTOR3_UNIT_X;
  const expected = new BoundingSphere(new Vector3(VECTOR3_UNIT_X).negate(), 2.0);
  tapeEquals(t, bs.expand(point), expected);

  t.end();
});

test('BoundingSphere#applies transform', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const transform = new Matrix4().translate(new Vector3(1.0, 2.0, 3.0));
  const expected = new BoundingSphere(new Vector3(1.0, 2.0, 3.0), 1.0);
  tapeEquals(t, bs.transform(transform), expected);

  t.end();
});

test('BoundingSphere#applies scale transform', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const transform = new Matrix4().scale(new Vector3(1.0, 2.0, 3.0));
  const expected = new BoundingSphere(VECTOR3_ZERO, 3.0);
  tapeEquals(t, bs.transform(transform), expected);

  t.end();
});

test('BoundingSphere#estimated distance squared to point', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const position = new Vector3(-2.0, 1.0, 0.0);
  const expected = position.lengthSquared() - 1.0;
  t.equals(bs.distanceSquaredTo(position), expected);

  t.end();
});

test('BoundingSphere#estimated distance to point', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const position = new Vector3(-2.0, 1.0, 0.0);
  const expected = position.lengthSquared() - 1.0;
  t.equals(bs.distanceTo(position), Math.sqrt(expected));

  t.end();
});

test('BoundingSphere#union throws with no parameter', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.union(undefined));

  t.end();
});

test('BoundingSphere#expand throws without a point', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.expand(undefined));

  t.end();
});

test('BoundingSphere#intersectPlane throws without a plane', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.intersectPlane(undefined));

  t.end();
});

test('BoundingSphere#transform throws without a transform', t => {
  const sphere = new BoundingSphere();
  // @ts-ignore
  t.throws(() => sphere.transform());

  t.end();
});

test('BoundingSphere#distanceSquaredTo throws without a cartesian', t => {
  const sphere = new BoundingSphere();
  // @ts-ignore
  t.throws(() => sphere.distanceSquaredTo(new BoundingSphere()));

  t.end();
});

// CESIUM TEST CASES FOR UNPORTED METHODS

/*
test('BoundingSphere#applies transform without scale', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const transform = new Matrix4().translate(new Vector3(1.0, 2.0, 3.0));
  const expected = new BoundingSphere(new Vector3(1.0, 2.0, 3.0), 1.0);
  tapeEquals(t, BoundingSphere.transformWithoutScale(bs, transform), expected);

  t.end();
});

test('BoundingSphere#transformWithoutScale ignores scale', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const transform = new Matrix4().scale(new Vector3(1.0, 2.0, 3.0));
  const expected = new BoundingSphere(VECTOR3_ZERO, 1.0);
  tapeEquals(t, BoundingSphere.transformWithoutScale(bs, transform), expected);

  t.end();
});

test('BoundingSphere#finds distances', t => {
  const bs = new BoundingSphere(VECTOR3_ZERO, 1.0);
  const position = new Vector3(-2.0, 1.0, 0.0);
  const direction = VECTOR3_UNIT_X;
  const expected = new Interval(1.0, 3.0);
  t.equals(BoundingSphere.computePlaneDistances(bs, position, direction), expected);

  t.end();
});
*/

/*
test('BoundingSphere#fromEllipsoid', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const sphere = BoundingSphere.fromEllipsoid(ellipsoid);
  t.equals(sphere.center, VECTOR3_ZERO);
  t.equals(sphere.radius, ellipsoid.maximumRadius);

  t.end();
});

test('BoundingSphere#fromEllipsoid with a result parameter', t => {
  const ellipsoid = Ellipsoid.WGS84;
  const sphere = new BoundingSphere(new Vector3(1.0, 2.0, 3.0), 4.0);
  const result = BoundingSphere.fromEllipsoid(ellipsoid, sphere);
  expect(result).toBe(sphere);
  t.equals(result, new BoundingSphere(VECTOR3_ZERO, ellipsoid.maximumRadius));

  t.end();
});

test('BoundingSphere#fromEllipsoid throws without ellipsoid', t => {
  t.throws(() => sphere.fromEllipsoid());

  t.end();
});

test('BoundingSphere#fromBoundingSpheres with undefined returns an empty sphere', t => {
  const sphere = BoundingSphere.fromBoundingSpheres();
  t.equals(sphere.center, VECTOR3_ZERO);
  t.equals(sphere.radius, 0.0);

  t.end();
});

test('BoundingSphere#fromBoundingSpheres with empty array returns an empty sphere', t => {
  const sphere = BoundingSphere.fromBoundingSpheres([]);
  t.equals(sphere.center, VECTOR3_ZERO);
  t.equals(sphere.radius, 0.0);

  t.end();
});

test('BoundingSphere#fromBoundingSpheres works with 1 sphere', t => {
  const one = new BoundingSphere(new Vector3(1, 2, 3), 4);

  const sphere = BoundingSphere.fromBoundingSpheres([one]);
  t.equals(sphere, one);

  t.end();
});

test('BoundingSphere#fromBoundingSpheres works with 2 spheres', t => {
  const one = new BoundingSphere(new Vector3(1, 2, 3), 4);
  const two = new BoundingSphere(new Vector3(5, 6, 7), 8);

  const sphere = BoundingSphere.fromBoundingSpheres([one, two]);
  t.equals(sphere, BoundingSphere.union(one, two, new BoundingSphere()));

  t.end();
});

test('BoundingSphere#fromBoundingSpheres works with 3 spheres', t => {
  const one = new BoundingSphere(new Vector3(0, 0, 0), 1);
  const two = new BoundingSphere(new Vector3(0, 3, 0), 1);
  const three = new BoundingSphere(new Vector3(0, 0, 4), 1);

  const expected = new BoundingSphere(new Vector3(0.0, 1.5, 2.0), 3.5);
  const sphere = BoundingSphere.fromBoundingSpheres([one, two, three]);
  t.equals(sphere, expected);

  t.end();
});

test('BoundingSphere#projectTo2D', t => {
  const positions = getPositions();
  const projection = new GeographicProjection();

  const positions2D = [];
  for (let i = 0; i < positions.length; ++i) {
    const position = positions[i];
    const cartographic = projection.ellipsoid.cartesianToCartographic(position);
    positions2D.push(projection.project(cartographic));
  }

  const boundingSphere3D = BoundingSphere.fromPoints(positions);
  const boundingSphere2D = BoundingSphere.projectTo2D(boundingSphere3D, projection);
  const actualSphere = BoundingSphere.fromPoints(positions2D);
  actualSphere.center = new Vector3(actualSphere.center.z, actualSphere.center.x, actualSphere.center.y);

  expect(boundingSphere2D.center).toEqualEpsilon(actualSphere.center, CesiumMath.EPSILON6);
  expect(boundingSphere2D.radius).toBeGreaterThan(actualSphere.radius);

  t.end();
});

test('BoundingSphere#projectTo2D with result parameter', t => {
  const positions = getPositions();
  const projection = new GeographicProjection();
  const sphere = new BoundingSphere();

  const positions2D = [];
  for (let i = 0; i < positions.length; ++i) {
    const position = positions[i];
    const cartographic = projection.ellipsoid.cartesianToCartographic(position);
    positions2D.push(projection.project(cartographic));
  }

  const boundingSphere3D = BoundingSphere.fromPoints(positions);
  const boundingSphere2D = BoundingSphere.projectTo2D(boundingSphere3D, projection, sphere);
  const actualSphere = BoundingSphere.fromPoints(positions2D);
  actualSphere.center = new Vector3(actualSphere.center.z, actualSphere.center.x, actualSphere.center.y);

  expect(boundingSphere2D).toBe(sphere);
  expect(boundingSphere2D.center).toEqualEpsilon(actualSphere.center, CesiumMath.EPSILON6);
  expect(boundingSphere2D.radius).toBeGreaterThan(actualSphere.radius);

  t.end();
});

test('BoundingSphere#union throws with no left parameter', t => {
  const right = new BoundingSphere();
  t.throws(() => sphere.union(undefined, right));

  t.end();
});

test('BoundingSphere#transformWithoutScale throws without a sphere', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.transformWithoutScale());

  t.end();
});

test('BoundingSphere#transformWithoutScale throws without a transform', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.transformWithoutScale(sphere));

  t.end();
});

test('BoundingSphere#computePlaneDistances throws without a sphere', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.computePlaneDistances());

  t.end();
});

test('BoundingSphere#computePlaneDistances throws without a position', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.computePlaneDistances(new BoundingSphere()));

  t.end();
});

test('BoundingSphere#computePlaneDistances throws without a direction', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.computePlaneDistances(new BoundingSphere(), new Vector3()));

  t.end();
});

test('BoundingSphere#isOccluded throws without a sphere', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.isOccluded());

  t.end();
});

test('BoundingSphere#isOccluded throws without an occluder', t => {
  const sphere = new BoundingSphere();
  t.throws(() => sphere.isOccluded(new BoundingSphere()));

  t.end();
});

/*
function expectBoundingSphereToContainPoint(boundingSphere, point, projection) {
  const pointInCartesian = projection.project(point);
  const distanceFromCenter = Vector3.magnitude(Vector3.subtract(pointInCartesian, boundingSphere.center, new Vector3()));

  // The distanceFromCenter for corner points at the height extreme should equal the
  // bounding sphere's radius.  But due to rounding errors it can end up being
  // very slightly greater.  Pull in the distanceFromCenter slightly to
  // account for this possibility.
  distanceFromCenter -= CesiumMath.EPSILON9;

  expect(distanceFromCenter).toBeLessThanOrEqualTo(boundingSphere.radius);
}

test('BoundingSphere#fromRectangleWithHeights2D includes specified min and max heights', t => {
  const rectangle = new Rectangle(0.1, 0.5, 0.2, 0.6);
  const projection = new GeographicProjection();
  const minHeight = -327.0;
  const maxHeight = 2456.0;
  const boundingSphere = BoundingSphere.fromRectangleWithHeights2D(rectangle, projection, minHeight, maxHeight);

  // Test that the corners are inside the bounding sphere.
  const point = Rectangle.southwest(rectangle).clone();
  point.height = minHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.southwest(rectangle).clone();
  point.height = maxHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.northeast(rectangle).clone();
  point.height = minHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.northeast(rectangle).clone();
  point.height = maxHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.southeast(rectangle).clone();
  point.height = minHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.southeast(rectangle).clone();
  point.height = maxHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.northwest(rectangle).clone();
  point.height = minHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.northwest(rectangle).clone();
  point.height = maxHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  // Test that the center is inside the bounding sphere
  point = Rectangle.center(rectangle).clone();
  point.height = minHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = Rectangle.center(rectangle).clone();
  point.height = maxHeight;
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  // Test that the edge midpoints are inside the bounding sphere.
  point = new Cartographic(Rectangle.center(rectangle).longitude, rectangle.south, minHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(Rectangle.center(rectangle).longitude, rectangle.south, maxHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(Rectangle.center(rectangle).longitude, rectangle.north, minHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(Rectangle.center(rectangle).longitude, rectangle.north, maxHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(rectangle.west, Rectangle.center(rectangle).latitude, minHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(rectangle.west, Rectangle.center(rectangle).latitude, maxHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(rectangle.east, Rectangle.center(rectangle).latitude, minHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  point = new Cartographic(rectangle.east, Rectangle.center(rectangle).latitude, maxHeight);
  expectBoundingSphereToContainPoint(boundingSphere, point, projection);

  t.end();
});
*/
