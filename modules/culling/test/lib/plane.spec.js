// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';

import {configure, _MathUtils, Vector3, Matrix4, Matrix3} from '@math.gl/core';
import {Plane} from '@math.gl/culling';

const UNIT_X = [1, 0, 0];
const UNIT_Y = [0, 1, 0];
const UNIT_Z = [0, 0, 1];

test('Plane#constructs', t => {
  const normal = UNIT_X;
  const distance = 1.0;
  const plane = new Plane(normal, distance);
  tapeEquals(t, plane.normal, normal);
  tapeEquals(t, plane.distance, distance);
  t.end();
});

test('Plane#constructor throws without a normal', t => {
  t.throws(() => new Plane(null, 0.0));
  t.end();
});

test.skip('Plane#constructor throws if normal is not normalized', t => {
  t.throws(() => new Plane(new Vector3(1.0, 2.0, 3.0), 0.0));
  t.end();
});

test('Plane#constructor throws without a distance', t => {
  t.throws(() => new Plane(UNIT_X, null));
  t.end();
});

test('Plane#constructs from a point and a normal', t => {
  const normal = new Vector3(1.0, 2.0, 3.0).normalize();
  const point = new Vector3(4.0, 5.0, 6.0);
  const plane = new Plane().fromPointNormal(point, normal);
  tapeEquals(t, plane.normal, normal);
  tapeEquals(t, plane.distance, -normal.dot(point));
  t.end();
});

test('Plane#constructs from a point and a normal with result', t => {
  const normal = new Vector3(1.0, 2.0, 3.0).normalize();
  const point = new Vector3(4.0, 5.0, 6.0);

  const plane = new Plane().fromPointNormal(point, normal);

  tapeEquals(t, plane.normal, normal);
  tapeEquals(t, plane.distance, -normal.dot(point));
  t.end();
});

test('Plane#constructs from coefficents without result', t => {
  const result = new Plane().fromCoefficients(1, 0, 0, 0);

  tapeEquals(t, result.normal, UNIT_X);
  tapeEquals(t, result.distance, 0.0);
  t.end();
});

test('Plane#constructs from coefficents with result', t => {
  const result = new Plane().fromCoefficients(1, 0, 0, 0);

  tapeEquals(t, result.normal, UNIT_X);
  tapeEquals(t, result.distance, 0.0);
  t.end();
});

test('Plane#fromPointNormal throws without a point', t => {
  t.throws(() => new Plane().fromPointNormal(undefined, UNIT_X));
  t.end();
});

test('Plane#fromPointNormal throws without a normal', t => {
  t.throws(() => new Plane().fromPointNormal(UNIT_X, undefined));
  t.end();
});

test.skip('Plane#fromPointNormal throws if normal is not normalized', t => {
  t.throws(() => new Plane().fromPointNormal(Vector3.ZERO, Vector3.ZERO));
  t.end();
});

test('Plane#fromCoefficients throws without coefficients', t => {
  // @ts-ignore
  t.throws(() => new Plane().fromCoefficients(undefined));
  t.end();
});

test('Plane#fromCoefficients throws if normal is not normalized', t => {
  t.throws(() => new Plane().fromCoefficients(1.0, 2.0, 3.0, 4.0));
  t.end();
});

test('Plane#gets the distance to a point', t => {
  const normal = new Vector3(1.0, 2.0, 3.0).normalize();
  const plane = new Plane(normal, 12.34);
  const point = new Vector3(4.0, 5.0, 6.0);

  tapeEquals(t, plane.getPointDistance(point), plane.normal.dot(point) + plane.distance);
  t.end();
});

test('Plane#getPointDistance throws without a plane', t => {
  const point = Vector3.ZERO;
  // @ts-ignore
  t.throws(() => new Plane().getPointDistance(undefined, point));
  t.end();
});

test('Plane#getPointDistance throws without a point', t => {
  const plane = new Plane(UNIT_X, 0.0);
  t.throws(() => new Plane().getPointDistance(undefined));
  t.end();
});

test('Plane#projects a point onto the plane', t => {
  const point = new Vector3(1.0, 1.0, 0.0);

  let plane = new Plane(UNIT_X, 0.0);
  let result = plane.projectPointOntoPlane(point);
  tapeEquals(t, result, new Vector3(0.0, 1.0, 0.0));

  plane = new Plane(UNIT_Y, 0.0);
  result = plane.projectPointOntoPlane(point);
  tapeEquals(t, result, new Vector3(1.0, 0.0, 0.0));
  t.end();
});

test('Plane#projectPointOntoPlane uses result parameter', t => {
  const point = new Vector3(1.0, 1.0, 0.0);

  const plane = new Plane(UNIT_X, 0.0);
  const result = new Vector3();
  const returnedResult = plane.projectPointOntoPlane(point, result);
  t.equals(result, returnedResult);
  tapeEquals(t, result, new Vector3(0.0, 1.0, 0.0));
  t.end();
});

test('Plane#projectPointOntoPlane requires the point parameter', t => {
  t.throws(() => new Plane(UNIT_X, 0).projectPointOntoPlane(undefined));
  t.end();
});

test('Plane#clones a plane instance', t => {
  const normal = new Vector3(1.0, 2.0, 3.0).normalize();
  const distance = 4.0;
  const plane = new Plane(normal, distance);

  const result = plane.clone();
  tapeEquals(t, result.normal, normal);
  tapeEquals(t, result.distance, distance);
  t.end();
});

test('Plane#equals returns true only if two planes are equal by normal and distance', t => {
  const left = new Plane(UNIT_X, 0.0);
  let right = new Plane(UNIT_Y, 1.0);

  t.equals(left.equals(right), false);

  right = new Plane(UNIT_Y, 0.0);

  t.equals(left.equals(right), false);

  right = new Plane(UNIT_X, 0.0);

  t.equals(left.equals(right), true);

  right = new Plane(UNIT_X, 1.0);

  t.equals(left.equals(right), false);
  t.end();
});

test('Plane#equals throws is right is undefined', t => {
  const plane = new Plane(UNIT_X, 0.0);
  t.throws(() => plane.equals(undefined));
  t.end();
});

test('Plane#transforms a plane according to a transform', t => {
  const normal = new Vector3(1.0, 2.0, 3.0).normalize();
  const plane = new Plane(normal, 12.34);

  const transform = new Matrix4().scale(2.0).rotateY(Math.PI);

  const transformedPlane = plane.clone().transform(transform);

  tapeEquals(t, transformedPlane.distance, plane.distance * 2.0);
  tapeEquals(t, transformedPlane.normal, [-normal.x, normal.y, -normal.z], _MathUtils.EPSILON10);

  t.end();
});

test('Plane#transform throws without a transform', t => {
  const plane = new Plane(UNIT_X, 0.0);
  t.throws(() => plane.transform(undefined));
  t.end();
});
