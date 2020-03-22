// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3} from '@math.gl/core';

/** A plane in Hessian Normal Form */
export default class Plane {
  readonly normal: Vector3;
  readonly distance: number;

  constructor(normal?: readonly number[], distance?: number);

  fromNormalDistance(normal: readonly number[], distance: number);

  /** Creates a plane from a normal and a point on the plane. */
  fromPointNormal(point: readonly number[], normal: readonly number[]);

  /** Creates a plane from the general equation */
  fromCoefficients(a: number, b: number, c: number, d: number): Plane;

  /** Duplicates a Plane instance. */
  clone(): Plane;

  /** Compares the provided Planes by normal and distance */
  equals(right: Plane): Plane;

  /** Computes the signed shortest distance of a point to a plane.
   * The sign of the distance determines which side of the plane the point is on.
   */
  getPointDistance(point: readonly number[]): number;

  /** Transforms the plane by the given transformation matrix. */
  transform(matrix4: readonly number[]): Plane;

  /** Projects a point onto the plane. */
  projectPointOntoPlane(point: readonly number[], result: Vector3): Vector3;
  projectPointOntoPlane(point: readonly number[], result?: readonly number[]): readonly number[];
}
