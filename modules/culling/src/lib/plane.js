// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import {Vector3, equals, assert, MathUtils} from 'math.gl';

const scratchPosition = new Vector3();
const scratchNormal = new Vector3();

// A plane in Hessian Normal Form
export default class Plane {
  constructor(normal = [0, 0, 1], distance = 0) {
    this.normal = new Vector3();
    this.distance = -0;
    this.fromNormalDistance(normal, distance);
  }

  fromNormalDistance(normal, distance) {
    assert(Number.isFinite(distance));
    this.normal.from(normal).normalize();
    this.distance = distance;
    return this;
  }

  // Creates a plane from a normal and a point on the plane.
  fromPointNormal(point, normal) {
    point = scratchPosition.from(point);
    this.normal.from(normal).normalize();
    const distance = -this.normal.dot(point);
    this.distance = distance;

    return this;
  }

  // Creates a plane from the general equation
  fromCoefficients(a, b, c, d) {
    this.normal.set(a, b, c);
    assert(equals(this.normal.len(), 1));
    this.distance = d;
    return this;
  }

  // Duplicates a Plane instance.
  clone(plane) {
    return new Plane(this.normal, this.distance);
  }

  // Compares the provided Planes by normal and distance
  equals(right) {
    return equals(this.distance, right.distance) && equals(this.normal, right.normal);
  }

  // Computes the signed shortest distance of a point to a plane.
  // The sign of the distance determines which side of the plane the point is on.
  getPointDistance(point) {
    return this.normal.dot(point) + this.distance;
  }

  // Transforms the plane by the given transformation matrix.
  transform(matrix4) {
    const normal = scratchNormal
      .copy(this.normal)
      .transformAsVector(matrix4)
      .normalize();
    const point = this.normal.scale(-this.distance).transform(matrix4);
    return this.fromPointNormal(point, normal);
  }

  // Projects a point onto the plane.
  projectPointOntoPlane(point, result = [0, 0, 0]) {
    point = scratchPosition.from(point);
    // projectedPoint = point - (normal.point + scale) * normal
    const pointDistance = this.getPointDistance(point);
    const scaledNormal = scratchNormal.copy(this.normal).scale(pointDistance);

    return point.subtract(scaledNormal).to(result);
  }
}
