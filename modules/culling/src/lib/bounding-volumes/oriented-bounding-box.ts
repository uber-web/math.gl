// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, Matrix3, Matrix4, Quaternion, NumericArray} from '@math.gl/core';
import type {BoundingVolume} from './bounding-volume';
import BoundingSphere from './bounding-sphere';
import type Plane from '../plane';
import {INTERSECTION} from '../../constants';

const scratchVector3 = new Vector3();
const scratchOffset = new Vector3();
const scratchVectorU = new Vector3();
const scratchVectorV = new Vector3();
const scratchVectorW = new Vector3();
const scratchCorner = new Vector3();
const scratchToCenter = new Vector3();

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

/**
 * An OrientedBoundingBox of some object is a closed and convex cuboid.
 * It can provide a tighter bounding volume than `BoundingSphere` or
 * `AxisAlignedBoundingBox` in many cases.
 */
export default class OrientedBoundingBox implements BoundingVolume {
  center: Vector3;
  halfAxes: Matrix3;

  /**
   * An OrientedBoundingBox of some object is a closed and convex cuboid.
   * It can provide a tighter bounding volume than
   * `BoundingSphere` or `AxisAlignedBoundingBox` in many cases.
   */
  constructor(center?: readonly number[], halfAxes?: readonly number[]);
  constructor(center: Readonly<NumericArray> = [0, 0, 0], halfAxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    this.center = new Vector3().from(center);
    this.halfAxes = new Matrix3(halfAxes);
  }

  /** Returns an array with three halfSizes for the bounding box */
  get halfSize(): number[] {
    const xAxis = this.halfAxes.getColumn(0);
    const yAxis = this.halfAxes.getColumn(1);
    const zAxis = this.halfAxes.getColumn(2);
    return [new Vector3(xAxis).len(), new Vector3(yAxis).len(), new Vector3(zAxis).len()];
  }

  /** Returns a quaternion describing the orientation of the bounding box */
  get quaternion(): Quaternion {
    const xAxis = this.halfAxes.getColumn(0);
    const yAxis = this.halfAxes.getColumn(1);
    const zAxis = this.halfAxes.getColumn(2);
    const normXAxis = new Vector3(xAxis).normalize();
    const normYAxis = new Vector3(yAxis).normalize();
    const normZAxis = new Vector3(zAxis).normalize();
    return new Quaternion().fromMatrix3(new Matrix3([...normXAxis, ...normYAxis, ...normZAxis]));
  }

  /**
   * Create OrientedBoundingBox from quaternion based OBB,
   */
  fromCenterHalfSizeQuaternion(
    center: number[],
    halfSize: number[],
    quaternion: number[]
  ): OrientedBoundingBox {
    const quaternionObject = new Quaternion(quaternion);
    const directionsMatrix = new Matrix3().fromQuaternion(quaternionObject);
    directionsMatrix[0] = directionsMatrix[0] * halfSize[0];
    directionsMatrix[1] = directionsMatrix[1] * halfSize[0];
    directionsMatrix[2] = directionsMatrix[2] * halfSize[0];
    directionsMatrix[3] = directionsMatrix[3] * halfSize[1];
    directionsMatrix[4] = directionsMatrix[4] * halfSize[1];
    directionsMatrix[5] = directionsMatrix[5] * halfSize[1];
    directionsMatrix[6] = directionsMatrix[6] * halfSize[2];
    directionsMatrix[7] = directionsMatrix[7] * halfSize[2];
    directionsMatrix[8] = directionsMatrix[8] * halfSize[2];
    this.center = new Vector3().from(center);
    this.halfAxes = directionsMatrix;
    return this;
  }

  /** Duplicates a OrientedBoundingBox instance. */
  clone(): OrientedBoundingBox {
    return new OrientedBoundingBox(this.center, this.halfAxes);
  }

  /** Compares the provided OrientedBoundingBox component wise and returns */
  equals(right: OrientedBoundingBox): boolean {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.halfAxes.equals(right.halfAxes))
    );
  }

  /** Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box. */
  getBoundingSphere(result = new BoundingSphere()): BoundingSphere {
    const halfAxes = this.halfAxes;
    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    // Calculate "corner" vector
    const cornerVector = scratchVector3.copy(u).add(v).add(w);

    result.center.copy(this.center);
    result.radius = cornerVector.magnitude();

    return result;
  }

  /** Determines which side of a plane the oriented bounding box is located. */
  intersectPlane(plane: Plane): number {
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

  /** Computes the estimated distance from the closest point on a bounding box to a point. */
  distanceTo(point: readonly number[]): number {
    return Math.sqrt(this.distanceSquaredTo(point));
  }

  /**
   * Computes the estimated distance squared from the closest point
   * on a bounding box to a point.
   * See Geometric Tools for Computer Graphics 10.4.2
   */
  distanceSquaredTo(point: readonly number[]): number {
    // Computes the estimated distance squared from the
    // closest point on a bounding box to a point.
    // See Geometric Tools for Computer Graphics 10.4.2
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

  /**
   * The distances calculated by the vector from the center of the bounding box
   * to position projected onto direction.
   *
   * - If you imagine the infinite number of planes with normal direction,
   *   this computes the smallest distance to the closest and farthest planes
   *   from `position` that intersect the bounding box.
   *
   * @param position The position to calculate the distance from.
   * @param direction The direction from position.
   * @param result An Interval (array of length 2) to store the nearest and farthest distances.
   * @returns Interval (array of length 2) with nearest and farthest distances
   *   on the bounding box from position in direction.
   */
  // eslint-disable-next-line max-statements
  computePlaneDistances(
    position: readonly number[],
    direction: Vector3,
    result: number[] = [-0, -0]
  ): number[] {
    let minDist = Number.POSITIVE_INFINITY;
    let maxDist = Number.NEGATIVE_INFINITY;

    const center = this.center;
    const halfAxes = this.halfAxes;

    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    // project first corner
    const corner = scratchCorner.copy(u).add(v).add(w).add(center);

    const toCenter = scratchToCenter.copy(corner).subtract(position);
    let mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project second corner
    corner.copy(center).add(u).add(v).subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project third corner
    corner.copy(center).add(u).subtract(v).add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fourth corner
    corner.copy(center).add(u).subtract(v).subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fifth corner
    center.copy(corner).subtract(u).add(v).add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project sixth corner
    center.copy(corner).subtract(u).add(v).subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project seventh corner
    center.copy(corner).subtract(u).subtract(v).add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project eighth corner
    center.copy(corner).subtract(u).subtract(v).subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    result[0] = minDist;
    result[1] = maxDist;
    return result;
  }

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns itself, i.e. the modified BoundingVolume.
   */
  transform(transformation: readonly number[]): this {
    this.center.transformAsPoint(transformation);

    const xAxis = this.halfAxes.getColumn(0, scratchVectorU);
    xAxis.transformAsPoint(transformation);

    const yAxis = this.halfAxes.getColumn(1, scratchVectorV);
    yAxis.transformAsPoint(transformation);

    const zAxis = this.halfAxes.getColumn(2, scratchVectorW);
    zAxis.transformAsPoint(transformation);

    this.halfAxes = new Matrix3([...xAxis, ...yAxis, ...zAxis]);
    return this;
  }

  getTransform(): Matrix4 {
    // const modelMatrix = Matrix4.fromRotationTranslation(this.boundingVolume.halfAxes, this.boundingVolume.center);
    // return modelMatrix;
    throw new Error('not implemented');
  }
}
