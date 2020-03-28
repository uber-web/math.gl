// import test from 'tape-catch';
import {it, expect} from 'test/utils/expect-assertions';

import {AxisAlignedBoundingBox, INTERSECTION, Plane} from '@math.gl/culling';
import {Vector3} from '@math.gl/core';

const positions = [
  new Vector3(3, -1, -3),
  new Vector3(2, -2, -2),
  new Vector3(1, -3, -1),
  new Vector3(0, 0, 0),
  new Vector3(-1, 1, 1),
  new Vector3(-2, 2, 2),
  new Vector3(-3, 3, 3)
];

const positionsMinimum = new Vector3(-3, -3, -3);
const positionsMaximum = new Vector3(3, 3, 3);
const positionsCenter = new Vector3(0, 0, 0);

const VECTOR3_UNIT_X = Object.freeze(new Vector3(1, 0, 0));
const VECTOR3_ZERO = Object.freeze(new Vector3(0, 0, 0));
const VECTOR3_UNIT_Y = Object.freeze(new Vector3(0, 1, 0));
const VECTOR3_UNIT_Z = Object.freeze(new Vector3(0, 0, 1));

it('AxisAlignedBoundingBox#constructor sets expected default values', () => {
  const box = new AxisAlignedBoundingBox();
  expect(box.minimum).toEqual(VECTOR3_ZERO);
  expect(box.maximum).toEqual(VECTOR3_ZERO);
  expect(box.center).toEqual(VECTOR3_ZERO);
});

it('AxisAlignedBoundingBox#constructor sets expected parameter values', () => {
  const minimum = new Vector3(1, 2, 3);
  const maximum = new Vector3(4, 5, 6);
  const center = new Vector3(2.5, 3.5, 4.5);
  const box = new AxisAlignedBoundingBox(minimum, maximum, center);
  expect(box.minimum).toEqual(minimum);
  expect(box.maximum).toEqual(maximum);
  expect(box.center).toEqual(center);
});

it('AxisAlignedBoundingBox#constructor computes center if not supplied', () => {
  const minimum = new Vector3(1, 2, 3);
  const maximum = new Vector3(4, 5, 6);
  const expectedCenter = new Vector3(2.5, 3.5, 4.5);
  const box = new AxisAlignedBoundingBox(minimum, maximum);
  expect(box.minimum).toEqual(minimum);
  expect(box.maximum).toEqual(maximum);
  expect(box.center).toEqual(expectedCenter);
});

it('AxisAlignedBoundingBox#fromPoints constructs empty box with undefined positions', () => {
  const box = new AxisAlignedBoundingBox().fromPoints(undefined);
  expect(box.minimum).toEqual(VECTOR3_ZERO);
  expect(box.maximum).toEqual(VECTOR3_ZERO);
  expect(box.center).toEqual(VECTOR3_ZERO);
});

it('AxisAlignedBoundingBox#fromPoints constructs empty box with empty positions', () => {
  const box = new AxisAlignedBoundingBox().fromPoints([]);
  expect(box.minimum).toEqual(VECTOR3_ZERO);
  expect(box.maximum).toEqual(VECTOR3_ZERO);
  expect(box.center).toEqual(VECTOR3_ZERO);
});

it('AxisAlignedBoundingBox#fromPoints computes the correct values', () => {
  const box = new AxisAlignedBoundingBox().fromPoints(positions);
  expect(box.minimum).toEqual(positionsMinimum);
  expect(box.maximum).toEqual(positionsMaximum);
  expect(box.center).toEqual(positionsCenter);
});

it('AxisAlignedBoundingBox#clone', () => {
  const box = new AxisAlignedBoundingBox(VECTOR3_UNIT_Y, VECTOR3_UNIT_X);
  const result = box.clone();
  expect(box).not.toBe(result);
  expect(box).toEqual(result);
});

it('AxisAlignedBoundingBox#clone with box of offset center', () => {
  const box = new AxisAlignedBoundingBox(VECTOR3_UNIT_Y, VECTOR3_UNIT_X, VECTOR3_UNIT_Z);
  const result = box.clone();
  expect(box).not.toBe(result);
  expect(box).toEqual(result);
});

it('AxisAlignedBoundingBox#equals works in all cases', () => {
  const box = new AxisAlignedBoundingBox(VECTOR3_UNIT_X, VECTOR3_UNIT_Y, VECTOR3_UNIT_Z);
  const bogie = new Vector3(2, 3, 4);
  expect(
    box.equals(new AxisAlignedBoundingBox(VECTOR3_UNIT_X, VECTOR3_UNIT_Y, VECTOR3_UNIT_Z))
  ).toEqual(true);
  expect(box.equals(new AxisAlignedBoundingBox(bogie, VECTOR3_UNIT_Y, VECTOR3_UNIT_Y))).toEqual(
    false
  );
  expect(box.equals(new AxisAlignedBoundingBox(VECTOR3_UNIT_X, bogie, VECTOR3_UNIT_Z))).toEqual(
    false
  );
  expect(box.equals(new AxisAlignedBoundingBox(VECTOR3_UNIT_X, VECTOR3_UNIT_Y, bogie))).toEqual(
    false
  );
  expect(box.equals(undefined)).toEqual(false);
});

it('AxisAlignedBoundingBox#computes the bounding box for a single position', () => {
  const box = new AxisAlignedBoundingBox().fromPoints([positions[0]]);
  expect(box.minimum).toEqual(positions[0]);
  expect(box.maximum).toEqual(positions[0]);
  expect(box.center).toEqual(positions[0]);
});

it('AxisAlignedBoundingBox#intersectPlane works with box on the positive side of a plane', () => {
  const box = new AxisAlignedBoundingBox(new Vector3(VECTOR3_UNIT_X).negate(), VECTOR3_ZERO);
  const normal = new Vector3(VECTOR3_UNIT_X).negate();
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -new Vector3(normal).dot(position));
  expect(box.intersectPlane(plane)).toEqual(INTERSECTION.INSIDE);
});

it('AxisAlignedBoundingBox#intersectPlane works with box on the negative side of a plane', () => {
  const box = new AxisAlignedBoundingBox(new Vector3(VECTOR3_UNIT_X).negate(), VECTOR3_ZERO);
  const normal = VECTOR3_UNIT_X;
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -new Vector3(normal).dot(position));
  expect(box.intersectPlane(plane)).toEqual(INTERSECTION.OUTSIDE);
});

it('AxisAlignedBoundingBox#intersectPlane works with box intersecting a plane', () => {
  const box = new AxisAlignedBoundingBox(
    VECTOR3_ZERO,
    new Vector3(VECTOR3_UNIT_X).scale(2.0),
    new Vector3()
  );
  const normal = VECTOR3_UNIT_X;
  const position = VECTOR3_UNIT_X;
  const plane = new Plane(normal, -new Vector3(normal).dot(position));
  expect(box.intersectPlane(plane)).toEqual(INTERSECTION.INTERSECTING);
});

it('AxisAlignedBoundingBox#intersectPlane throws without a plane', () => {
  const box = new AxisAlignedBoundingBox();
  expect(() => {
    box.intersectPlane(undefined);
  }).toThrow();
});
