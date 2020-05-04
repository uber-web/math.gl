// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, Matrix3} from '@math.gl/core';
import BoundingSphere from './bounding-sphere';
import {INTERSECTION} from '../constants';

const scratchVector = new Vector3();
const scratchOffset = new Vector3();
const scratchVectorU = new Vector3();
const scratchVectorV = new Vector3();
const scratchVectorW = new Vector3();
const scratchCorner = new Vector3();
const scratchToCenter = new Vector3();

const fromOrientedBoundingBoxScratchU = new Vector3();
const fromOrientedBoundingBoxScratchV = new Vector3();
const fromOrientedBoundingBoxScratchW = new Vector3();

const MATRIX3 = {
  COLUMN0ROW0: 0,
  COLUMN0ROW1: 1,
  COLUMN0ROW2: 2,
  COLUMN1ROW0: 3,
  COLUMN1ROW1: 4,
  COLUMN1ROW2: 5,
  COLUMN2ROW0: 6,
  COLUMN2ROW1: 7,
  COLUMN2ROW2: 8
};

export default class OrientedBoundingBox {
  constructor(center = [0, 0, 0], halfAxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    this.center = new Vector3().from(center);
    this.halfAxes = new Matrix3(halfAxes);
  }

  // Duplicates a OrientedBoundingBox instance.
  clone() {
    return new OrientedBoundingBox(this.center, this.halfAxes);
  }

  // Compares the provided OrientedBoundingBox componentwise and returns
  equals(right) {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.halfAxes.equals(right.halfAxes))
    );
  }

  // Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.
  getBoundingSphere(result = new BoundingSphere()) {
    const halfAxes = this.halfAxes;
    const u = halfAxes.getColumn(0, fromOrientedBoundingBoxScratchU);
    const v = halfAxes.getColumn(1, fromOrientedBoundingBoxScratchV);
    const w = halfAxes.getColumn(2, fromOrientedBoundingBoxScratchW);

    // Calculate "corner" vector
    const cornerVector = scratchVector
      .copy(u)
      .add(v)
      .add(w);

    result.center.copy(this.center);
    result.radius = cornerVector.magnitude();

    return result;
  }

  /**
   * Determines which side of a plane the oriented bounding box is located.
   *
   * @param plane The plane to test against.
   * @returns
   *  - `INTERSECTION.INSIDE` if the entire box is on the side of the plane the normal is pointing.
   *  - `INTERSECTION.OUTSIDE` if the entire box is on the opposite side.
   *  - `INTERSECTION.INTERSECTING` if the box intersects the plane.
   */
  intersectPlane(plane) {
    const center = this.center;
    const normal = plane.normal;
    const halfAxes = this.halfAxes;

    const normalX = normal.x;
    const normalY = normal.y;
    const normalZ = normal.z;

    // Plane is used as if it is its normal; the first three components are assumed to be normalized
    const radEffective =
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN0ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN0ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN0ROW2]
      ) +
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN1ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN1ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN1ROW2]
      ) +
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN2ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN2ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN2ROW2]
      );
    const distanceToPlane = normal.dot(center) + plane.distance;

    if (distanceToPlane <= -radEffective) {
      // The entire box is on the negative side of the plane normal
      return INTERSECTION.OUTSIDE;
    } else if (distanceToPlane >= radEffective) {
      // The entire box is on the positive side of the plane normal
      return INTERSECTION.INSIDE;
    }
    return INTERSECTION.INTERSECTING;
  }

  // Computes the estimated distance from the closest point on a bounding box to a point.
  distanceTo(point) {
    return Math.sqrt(this.distanceSquaredTo(point));
  }

  // Computes the estimated distance squared from the closest point on a bounding box to a point.
  // See Geometric Tools for Computer Graphics 10.4.2

  // eslint-disable-next-line max-statements
  distanceSquaredTo(point) {
    const offset = scratchOffset.from(point).subtract(this.center);

    const halfAxes = this.halfAxes;
    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    const uHalf = u.magnitude();
    const vHalf = v.magnitude();
    const wHalf = w.magnitude();

    u.normalize();
    v.normalize();
    w.normalize();

    let distanceSquared = 0.0;
    let d;

    d = Math.abs(offset.dot(u)) - uHalf;
    if (d > 0) {
      distanceSquared += d * d;
    }

    d = Math.abs(offset.dot(v)) - vHalf;
    if (d > 0) {
      distanceSquared += d * d;
    }

    d = Math.abs(offset.dot(w)) - wHalf;
    if (d > 0) {
      distanceSquared += d * d;
    }

    return distanceSquared;
  }

  // The distances calculated by the vector from the center of the bounding box
  // to position projected onto direction.

  // eslint-disable-next-line max-statements
  computePlaneDistances(position, direction, result = [-0, -0]) {
    let minDist = Number.POSITIVE_INFINITY;
    let maxDist = Number.NEGATIVE_INFINITY;

    const center = this.center;
    const halfAxes = this.halfAxes;

    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    // project first corner
    const corner = scratchCorner
      .copy(u)
      .add(v)
      .add(w)
      .add(center);

    const toCenter = scratchToCenter.copy(corner).subtract(position);
    let mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project second corner
    corner
      .copy(center)
      .add(u)
      .add(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project third corner
    corner
      .copy(center)
      .add(u)
      .subtract(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fourth corner
    corner
      .copy(center)
      .add(u)
      .subtract(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fifth corner
    center
      .copy(corner)
      .subtract(u)
      .add(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project sixth corner
    center
      .copy(corner)
      .subtract(u)
      .add(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project seventh corner
    center
      .copy(corner)
      .subtract(u)
      .subtract(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project eighth corner
    center
      .copy(corner)
      .subtract(u)
      .subtract(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    result[0] = minDist;
    result[1] = maxDist;
    return result;
  }

  getTransform() {
    // const modelMatrix = Matrix4.fromRotationTranslation(this.boundingVolume.halfAxes, this.boundingVolume.center);
    // return modelMatrix;
  }
}
