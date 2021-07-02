import {Vector3} from '@math.gl/core';
import {INTERSECTION} from '../../constants';

const scratchVector = new Vector3();
const scratchNormal = new Vector3();

export default class AxisAlignedBoundingBox {
  constructor(minimum = [0, 0, 0], maximum = [0, 0, 0], center = null) {
    // If center was not defined, compute it.
    center = center || scratchVector.copy(minimum).add(maximum).scale(0.5);
    this.center = new Vector3(center);
    this.halfDiagonal = new Vector3(maximum).subtract(this.center);

    /**
     * The minimum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */
    this.minimum = new Vector3(minimum);

    /**
     * The maximum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */
    this.maximum = new Vector3(maximum);
  }

  /**
   * Duplicates a AxisAlignedBoundingBox instance.
   *
   * @returns {AxisAlignedBoundingBox} A new AxisAlignedBoundingBox instance.
   */
  clone() {
    return new AxisAlignedBoundingBox(this.minimum, this.maximum, this.center);
  }

  /**
   * Compares the provided AxisAlignedBoundingBox componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {AxisAlignedBoundingBox} [right] The second AxisAlignedBoundingBox to compare with.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  equals(right) {
    return (
      this === right ||
      (Boolean(right) && this.minimum.equals(right.minimum) && this.maximum.equals(right.maximum))
    );
  }

  transform(transformation) {
    this.center.transformAsPoint(transformation);
    // TODO - this.halfDiagonal.transformAsVector(transformation);
    this.halfDiagonal.transform(transformation);
    this.minimum.transform(transformation);
    this.maximum.transform(transformation);
    return this;
  }

  /**
   * Determines which side of a plane a box is located.
   */
  intersectPlane(plane) {
    const {halfDiagonal} = this;
    const normal = scratchNormal.from(plane.normal);
    const e =
      halfDiagonal.x * Math.abs(normal.x) +
      halfDiagonal.y * Math.abs(normal.y) +
      halfDiagonal.z * Math.abs(normal.z);
    const s = this.center.dot(normal) + plane.distance; // signed distance from center

    if (s - e > 0) {
      return INTERSECTION.INSIDE;
    }

    if (s + e < 0) {
      // Not in front because normals point inward
      return INTERSECTION.OUTSIDE;
    }

    return INTERSECTION.INTERSECTING;
  }

  // Computes the estimated distance from the closest point on a bounding box to a point.
  distanceTo(point) {
    return Math.sqrt(this.distanceSquaredTo(point));
  }

  // Computes the estimated distance squared from the closest point on a bounding box to a point.
  // A simplified version of OrientedBoundingBox.distanceSquaredTo
  distanceSquaredTo(point) {
    const offset = scratchVector.from(point).subtract(this.center);
    const {halfDiagonal} = this;

    let distanceSquared = 0.0;
    let d;

    d = Math.abs(offset.x) - halfDiagonal.x;
    if (d > 0) {
      distanceSquared += d * d;
    }

    d = Math.abs(offset.y) - halfDiagonal.y;
    if (d > 0) {
      distanceSquared += d * d;
    }

    d = Math.abs(offset.z) - halfDiagonal.z;
    if (d > 0) {
      distanceSquared += d * d;
    }

    return distanceSquared;
  }
}
