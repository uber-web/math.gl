// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

export const WGS84_RADIUS_X = 6378137.0;
export const WGS84_RADIUS_Y = 6378137.0;
export const WGS84_RADIUS_Z = 6356752.3142451793;

// Pre-calculated ellipsoid defaults to avoid utils depending on `ellipsoid.js`

export const WGS84_CONSTANTS = {
  radii: [WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z],
  radiiSquared: [
    WGS84_RADIUS_X * WGS84_RADIUS_X,
    WGS84_RADIUS_Y * WGS84_RADIUS_Y,
    WGS84_RADIUS_Z * WGS84_RADIUS_Z
  ],
  oneOverRadii: [1.0 / WGS84_RADIUS_X, 1.0 / WGS84_RADIUS_Y, 1.0 / WGS84_RADIUS_Z],
  oneOverRadiiSquared: [
    1.0 / (WGS84_RADIUS_X * WGS84_RADIUS_X),
    1.0 / (WGS84_RADIUS_Y * WGS84_RADIUS_Y),
    1.0 / (WGS84_RADIUS_Z * WGS84_RADIUS_Z)
  ],
  maximumRadius: Math.max(WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z),
  centerToleranceSquared: 1e-1 // EPSILON1;
};
