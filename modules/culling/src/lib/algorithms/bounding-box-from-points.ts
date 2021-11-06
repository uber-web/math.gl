// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, Matrix3} from '@math.gl/core';
import computeEigenDecomposition from './compute-eigen-decomposition';
import OrientedBoundingBox from '../bounding-volumes/oriented-bounding-box';
import AxisAlignedBoundingBox from '../bounding-volumes/axis-aligned-bounding-box';

const scratchVector2 = new Vector3();

const scratchVector3 = new Vector3();

const scratchVector4 = new Vector3();

const scratchVector5 = new Vector3();

const scratchVector6 = new Vector3();

const scratchCovarianceResult = new Matrix3();

const scratchEigenResult = {
  diagonal: new Matrix3(),
  unitary: new Matrix3()
};

/**
 * Computes an instance of an OrientedBoundingBox of the given positions.
 *
 * This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
 * Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
 */
/* eslint-disable max-statements */
export function makeOrientedBoundingBoxFromPoints(
  positions: number[][],
  result: OrientedBoundingBox = new OrientedBoundingBox()
): OrientedBoundingBox {
  if (!positions || positions.length === 0) {
    result.halfAxes = new Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    result.center = new Vector3();
    return result;
  }

  const length = positions.length;
  const meanPoint = new Vector3(0, 0, 0);
  for (const position of positions) {
    meanPoint.add(position);
  }
  const invLength = 1.0 / length;
  meanPoint.multiplyByScalar(invLength);

  let exx = 0.0;
  let exy = 0.0;
  let exz = 0.0;
  let eyy = 0.0;
  let eyz = 0.0;
  let ezz = 0.0;

  for (const position of positions) {
    const p = scratchVector2.copy(position).subtract(meanPoint);
    exx += p.x * p.x;
    exy += p.x * p.y;
    exz += p.x * p.z;
    eyy += p.y * p.y;
    eyz += p.y * p.z;
    ezz += p.z * p.z;
  }

  exx *= invLength;
  exy *= invLength;
  exz *= invLength;
  eyy *= invLength;
  eyz *= invLength;
  ezz *= invLength;

  const covarianceMatrix = scratchCovarianceResult;
  covarianceMatrix[0] = exx;
  covarianceMatrix[1] = exy;
  covarianceMatrix[2] = exz;
  covarianceMatrix[3] = exy;
  covarianceMatrix[4] = eyy;
  covarianceMatrix[5] = eyz;
  covarianceMatrix[6] = exz;
  covarianceMatrix[7] = eyz;
  covarianceMatrix[8] = ezz;

  const {unitary} = computeEigenDecomposition(covarianceMatrix, scratchEigenResult);
  const rotation = result.halfAxes.copy(unitary);

  let v1 = rotation.getColumn(0, scratchVector4);
  let v2 = rotation.getColumn(1, scratchVector5);
  let v3 = rotation.getColumn(2, scratchVector6);

  let u1 = -Number.MAX_VALUE;
  let u2 = -Number.MAX_VALUE;
  let u3 = -Number.MAX_VALUE;
  let l1 = Number.MAX_VALUE;
  let l2 = Number.MAX_VALUE;
  let l3 = Number.MAX_VALUE;

  for (const position of positions) {
    scratchVector2.copy(position);

    u1 = Math.max(scratchVector2.dot(v1), u1);
    u2 = Math.max(scratchVector2.dot(v2), u2);
    u3 = Math.max(scratchVector2.dot(v3), u3);

    l1 = Math.min(scratchVector2.dot(v1), l1);
    l2 = Math.min(scratchVector2.dot(v2), l2);
    l3 = Math.min(scratchVector2.dot(v3), l3);
  }

  v1 = v1.multiplyByScalar(0.5 * (l1 + u1));
  v2 = v2.multiplyByScalar(0.5 * (l2 + u2));
  v3 = v3.multiplyByScalar(0.5 * (l3 + u3));

  result.center.copy(v1).add(v2).add(v3);

  const scale = scratchVector3.set(u1 - l1, u2 - l2, u3 - l3).multiplyByScalar(0.5);
  const scaleMatrix = new Matrix3([scale[0], 0, 0, 0, scale[1], 0, 0, 0, scale[2]]);
  result.halfAxes.multiplyRight(scaleMatrix);

  return result;
}

/**
 * Computes an instance of an AxisAlignedBoundingBox. The box is determined by
 * finding the points spaced the farthest apart on the x, y, and z axes.
 */
export function makeAxisAlignedBoundingBoxFromPoints(
  positions: readonly number[][],
  result: AxisAlignedBoundingBox = new AxisAlignedBoundingBox()
): AxisAlignedBoundingBox {
  if (!positions || positions.length === 0) {
    result.minimum.set(0, 0, 0);
    result.maximum.set(0, 0, 0);
    result.center.set(0, 0, 0);
    result.halfDiagonal.set(0, 0, 0);
    return result;
  }

  let minimumX = positions[0][0];
  let minimumY = positions[0][1];
  let minimumZ = positions[0][2];

  let maximumX = positions[0][0];
  let maximumY = positions[0][1];
  let maximumZ = positions[0][2];

  for (const p of positions) {
    const x = p[0];
    const y = p[1];
    const z = p[2];

    minimumX = Math.min(x, minimumX);
    maximumX = Math.max(x, maximumX);
    minimumY = Math.min(y, minimumY);
    maximumY = Math.max(y, maximumY);
    minimumZ = Math.min(z, minimumZ);
    maximumZ = Math.max(z, maximumZ);
  }

  result.minimum.set(minimumX, minimumY, minimumZ);
  result.maximum.set(maximumX, maximumY, maximumZ);
  result.center.copy(result.minimum).add(result.maximum).scale(0.5);
  result.halfDiagonal.copy(result.maximum).subtract(result.center);

  return result;
}
