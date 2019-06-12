// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3} from 'math.gl';
import BoundingSphere from '../lib/bounding-sphere';

/* eslint-disable */
const fromPointsXMin = new Vector3();
const fromPointsYMin = new Vector3();
const fromPointsZMin = new Vector3();
const fromPointsXMax = new Vector3();
const fromPointsYMax = new Vector3();
const fromPointsZMax = new Vector3();
const fromPointsCurrentPos = new Vector3();
const fromPointsScratch = new Vector3();
const fromPointsRitterCenter = new Vector3();
const fromPointsMinBoxPt = new Vector3();
const fromPointsMaxBoxPt = new Vector3();
const fromPointsNaiveCenterScratch = new Vector3();
const volumeConstant = (4.0 / 3.0) * Math.PI;

/*
Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points.
The bounding sphere is computed by running two algorithms, a naive algorithm and
Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.
   *
@param {Vector3[]} [positions] An array of points that the bounding sphere will enclose.  Each point must have <code>x</code>, <code>y</code>, and <code>z</code> properties.
@param {BoundingSphere} [result] The object onto which to store the result.
@returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
   *
@see {@link http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/|Bounding Sphere computation article}
*/

export function makeBoundingSphereFromPoints(positions, result = new BoundingSphere()) {
  if (!positions || positions.length === 0) {
    return result.fromCenterRadius([0, 0, 0], 0);
  }

  const currentPos = fromPointsCurrentPos.copy(positions[0]);

  const xMin = fromPointsXMin.copy(currentPos);
  const yMin = fromPointsYMin.copy(currentPos);
  const zMin = fromPointsZMin.copy(currentPos);

  const xMax = fromPointsXMax.copy(currentPos);
  const yMax = fromPointsYMax.copy(currentPos);
  const zMax = fromPointsZMax.copy(currentPos);

  for (const position of positions) {
    currentPos.copy(position);

    const x = currentPos.x;
    const y = currentPos.y;
    const z = currentPos.z;

    // Store points containing the the smallest and largest components
    if (x < xMin.x) {
      currentPos.copy(xMin);
    }

    if (x > xMax.x) {
      currentPos.copy(xMax);
    }

    if (y < yMin.y) {
      currentPos.copy(yMin);
    }

    if (y > yMax.y) {
      currentPos.copy(yMax);
    }

    if (z < zMin.z) {
      currentPos.copy(zMin);
    }

    if (z > zMax.z) {
      currentPos.copy(zMax);
    }
  }

  // Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
  const xSpan = fromPointsScratch
    .copy(xMax)
    .subtract(xMin)
    .magnitudeSquared();
  const ySpan = fromPointsScratch
    .copy(yMax)
    .subtract(yMin)
    .magnitudeSquared();
  const zSpan = fromPointsScratch
    .copy(zMax)
    .subtract(zMin)
    .magnitudeSquared();

  // Set the diameter endpoints to the largest span.
  let diameter1 = xMin;
  let diameter2 = xMax;
  let maxSpan = xSpan;
  if (ySpan > maxSpan) {
    maxSpan = ySpan;
    diameter1 = yMin;
    diameter2 = yMax;
  }
  if (zSpan > maxSpan) {
    maxSpan = zSpan;
    diameter1 = zMin;
    diameter2 = zMax;
  }

  // Calculate the center of the initial sphere found by Ritter's algorithm
  const ritterCenter = fromPointsRitterCenter;
  ritterCenter.x = (diameter1.x + diameter2.x) * 0.5;
  ritterCenter.y = (diameter1.y + diameter2.y) * 0.5;
  ritterCenter.z = (diameter1.z + diameter2.z) * 0.5;

  // Calculate the radius of the initial sphere found by Ritter's algorithm
  let radiusSquared = fromPointsScratch
    .copy(diameter2)
    .subtract(ritterCenter)
    .magnitudeSquared();
  let ritterRadius = Math.sqrt(radiusSquared);

  // Find the center of the sphere found using the Naive method.
  const minBoxPt = fromPointsMinBoxPt;
  minBoxPt.x = xMin.x;
  minBoxPt.y = yMin.y;
  minBoxPt.z = zMin.z;

  const maxBoxPt = fromPointsMaxBoxPt;
  maxBoxPt.x = xMax.x;
  maxBoxPt.y = yMax.y;
  maxBoxPt.z = zMax.z;

  const naiveCenter = fromPointsNaiveCenterScratch
    .copy(minBoxPt)
    .add(maxBoxPt)
    .multiplyByScalar(0.5);

  // Begin 2nd pass to find naive radius and modify the ritter sphere.
  let naiveRadius = 0;
  for (const position of positions) {
    currentPos.copy(position);

    // Find the furthest point from the naive center to calculate the naive radius.
    const r = fromPointsScratch
      .copy(currentPos)
      .subtract(naiveCenter)
      .magnitude();
    if (r > naiveRadius) {
      naiveRadius = r;
    }

    // Make adjustments to the Ritter Sphere to include all points.
    const oldCenterToPointSquared = fromPointsScratch
      .copy(currentPos)
      .subtract(ritterCenter)
      .magnitudeSquared();

    if (oldCenterToPointSquared > radiusSquared) {
      const oldCenterToPoint = Math.sqrt(oldCenterToPointSquared);
      // Calculate new radius to include the point that lies outside
      ritterRadius = (ritterRadius + oldCenterToPoint) * 0.5;
      radiusSquared = ritterRadius * ritterRadius;
      // Calculate center of new Ritter sphere
      const oldToNew = oldCenterToPoint - ritterRadius;
      ritterCenter.x = (ritterRadius * ritterCenter.x + oldToNew * currentPos.x) / oldCenterToPoint;
      ritterCenter.y = (ritterRadius * ritterCenter.y + oldToNew * currentPos.y) / oldCenterToPoint;
      ritterCenter.z = (ritterRadius * ritterCenter.z + oldToNew * currentPos.z) / oldCenterToPoint;
    }
  }

  if (ritterRadius < naiveRadius) {
    ritterCenter.to(result.center);
    result.radius = ritterRadius;
  } else {
    naiveCenter.to(result.center);
    result.radius = naiveRadius;
  }

  return result;
}
