// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

export const INTERSECT = Object.freeze({
  OUTSIDE: -1, // Represents that an object is not contained within the frustum.
  INTERSECTING: 0, // Represents that an object intersects one of the frustum's planes.
  INSIDE: 1 // Represents that an object is fully within the frustum.
});

export const Intersect = INTERSECT;
