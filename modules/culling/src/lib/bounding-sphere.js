// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import {Vector3, Matrix4} from 'math.gl';
import * as mat4 from 'gl-matrix/mat4';
import {Intersect} from '../constants';

// import Rectangle from './rectangle';

// const defaultProjection = new GeographicProjection();
// const fromRectangle2DLowerLeft = new Vector3();
// const fromRectangle2DUpperRight = new Vector3();
// const fromRectangle2DSouthwest = new Cartographic();
// const fromRectangle2DNortheast = new Cartographic();

// const fromRectangle3DScratch = [];

const scratchVector = new Vector3();
const scratchVector2 = new Vector3();

export default class BoundingSphere {
  constructor(center = [0, 0, 0], radius = 0.0) {
    this.radius = -0;
    this.center = new Vector3();
    this.fromCenterRadius(center, radius);
  }

  fromCenterRadius(center, radius) {
    this.center.from(center);
    this.radius = radius;
    return this;
  }

  // Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
  // tighly and fully encompases the box.
  fromCornerPoints(corner, oppositeCorner) {
    oppositeCorner = scratchVector.from(oppositeCorner);
    this.center = new Vector3()
      .from(corner)
      .add(oppositeCorner)
      .scale(0.5);
    this.radius = this.center.distance(oppositeCorner);
    return this;
  }

  // Compares the provided BoundingSphere componentwise
  equals(right) {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.radius === right.radius)
    );
  }

  // Duplicates a BoundingSphere instance.
  clone() {
    return new BoundingSphere(this.center, this.radius);
  }

  // Computes a bounding sphere that contains both the left and right bounding spheres.
  union(boundingSphere) {
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

  // Computes a bounding sphere by enlarging the provided sphere to contain the provided point.
  expand(point) {
    point = scratchVector.from(point);
    const radius = point.subtract(this.center).magnitude();
    if (radius > this.radius) {
      this.radius = radius;
    }
    return this;
  }

  // Determines which side of a plane a sphere is located.
  intersectPlane(plane) {
    var center = this.center;
    var radius = this.radius;
    var normal = plane.normal;
    var distanceToPlane = normal.dot(center) + plane.distance;

    // The center point is negative side of the plane normal
    if (distanceToPlane < -radius) {
      return Intersect.OUTSIDE;
    }
    // The center point is positive side of the plane, but radius extends beyond it; partial overlap
    if (distanceToPlane < radius) {
      return Intersect.INTERSECTING;
    }
    // The center point and radius is positive side of the plane
    return Intersect.INSIDE;
  }

  // Applies a 4x4 affine transformation matrix to a bounding sphere.
  //    *
  // @param {BoundingSphere} sphere The bounding sphere to apply the transformation to.
  // @param {Matrix4} transform The transformation matrix to apply to the bounding sphere.
  // @returns {BoundingSphere} The modified this parameter or a new BoundingSphere instance if none was provided.
  transform(transform) {
    this.center.transform(transform);
    const scale = mat4.getScaling(scratchVector, transform);
    this.radius = Math.max(scale[0], Math.max(scale[1], scale[2])) * this.radius;
    return this;
  }

  // Computes the estimated distance squared from the closest point on a bounding sphere to a point.
  distanceSquaredTo(point) {
    point = scratchVector.from(point);
    const delta = point.subtract(this.center);
    return delta.lengthSquared() - this.radius * this.radius;
  }

  distanceTo(point) {
    return Math.sqrt(this.distanceSquaredTo(point));
  }
}
