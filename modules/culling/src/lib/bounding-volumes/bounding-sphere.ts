// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {NumericArray, Vector3} from '@math.gl/core';
import * as mat4 from 'gl-matrix/mat4';
import {INTERSECTION} from '../../constants';
import {BoundingVolume} from './bounding-volume';
import Plane from '../plane';

const scratchVector = new Vector3();
const scratchVector2 = new Vector3();

/** A BoundingSphere */
export default class BoundingSphere implements BoundingVolume {
  center: Vector3;
  radius: number;

  /** Creates a bounding sphere */
  constructor(center: readonly number[] = [0, 0, 0], radius: number = 0.0) {
    this.radius = -0;
    this.center = new Vector3();
    this.fromCenterRadius(center, radius);
  }

  /** Sets the bounding sphere from `center` and `radius`. */
  fromCenterRadius(center: readonly number[], radius: number): this {
    this.center.from(center);
    this.radius = radius;
    return this;
  }

  /**
   * Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
   * tightly and fully encompasses the box.
   */
  fromCornerPoints(corner: readonly number[], oppositeCorner: readonly number[]): this {
    oppositeCorner = scratchVector.from(oppositeCorner);
    this.center = new Vector3().from(corner).add(oppositeCorner).scale(0.5);
    this.radius = this.center.distance(oppositeCorner);
    return this;
  }

  /** Compares the provided BoundingSphere component wise */
  equals(right: BoundingSphere): boolean {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.radius === right.radius)
    );
  }

  /** Duplicates a BoundingSphere instance. */
  clone(): BoundingSphere {
    return new BoundingSphere(this.center, this.radius);
  }

  /** Computes a bounding sphere that contains both the left and right bounding spheres. */
  union(boundingSphere: BoundingSphere): BoundingSphere {
    const leftCenter = this.center;
    const leftRadius = this.radius;
    const rightCenter = boundingSphere.center;
    const rightRadius = boundingSphere.radius;

    const toRightCenter = scratchVector.copy(rightCenter).subtract(leftCenter);
    const centerSeparation = toRightCenter.magnitude();

    if (leftRadius >= centerSeparation + rightRadius) {
      // Left sphere wins.
      return this.clone();
    }

    if (rightRadius >= centerSeparation + leftRadius) {
      // Right sphere wins.
      return boundingSphere.clone();
    }

    // There are two tangent points, one on far side of each sphere.
    const halfDistanceBetweenTangentPoints = (leftRadius + centerSeparation + rightRadius) * 0.5;

    // Compute the center point halfway between the two tangent points.
    scratchVector2
      .copy(toRightCenter)
      .scale((-leftRadius + halfDistanceBetweenTangentPoints) / centerSeparation)
      .add(leftCenter);

    this.center.copy(scratchVector2);
    this.radius = halfDistanceBetweenTangentPoints;

    return this;
  }

  /** Computes a bounding sphere by enlarging the provided sphere to contain the provided point. */
  expand(point: readonly number[]): this {
    const scratchPoint = scratchVector.from(point);
    const radius = scratchPoint.subtract(this.center).magnitude();
    if (radius > this.radius) {
      this.radius = radius;
    }
    return this;
  }

  // BoundingVolume interface

  /**
   * Applies a 4x4 affine transformation matrix to a bounding sphere.
   * @param sphere The bounding sphere to apply the transformation to.
   * @param transform The transformation matrix to apply to the bounding sphere.
   * @returns self.
   */
  transform(transform: readonly number[]): this {
    this.center.transform(transform);
    const scale = mat4.getScaling(scratchVector, transform);
    this.radius = Math.max(scale[0], Math.max(scale[1], scale[2])) * this.radius;
    return this;
  }

  /** Computes the estimated distance squared from the closest point on a bounding sphere to a point. */
  distanceSquaredTo(point: Readonly<NumericArray>): number {
    const d = this.distanceTo(point);
    return d * d;
  }

  /** Computes the estimated distance from the closest point on a bounding sphere to a point. */
  distanceTo(point: Readonly<NumericArray>): number {
    const scratchPoint = scratchVector.from(point);
    const delta = scratchPoint.subtract(this.center);
    return Math.max(0, delta.len() - this.radius);
  }

  /** Determines which side of a plane a sphere is located. */
  intersectPlane(plane: Plane): number {
    const center = this.center;
    const radius = this.radius;
    const normal = plane.normal;
    const distanceToPlane = normal.dot(center) + plane.distance;

    // The center point is negative side of the plane normal
    if (distanceToPlane < -radius) {
      return INTERSECTION.OUTSIDE;
    }
    // The center point is positive side of the plane, but radius extends beyond it; partial overlap
    if (distanceToPlane < radius) {
      return INTERSECTION.INTERSECTING;
    }
    // The center point and radius is positive side of the plane
    return INTERSECTION.INSIDE;
  }
}
