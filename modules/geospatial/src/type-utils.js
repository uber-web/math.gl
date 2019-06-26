// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, isArray, toRadians, toDegrees, config} from 'math.gl';
import {WGS84_CONSTANTS} from './constants';

const noop = x => x;

const scratchVector = new Vector3();

export function fromCartographic(cartographic, vector, map = noop) {
  if (isArray(cartographic)) {
    vector[0] = map(cartographic[0]);
    vector[1] = map(cartographic[1]);
    vector[2] = cartographic[2];
  } else if ('longitude' in cartographic) {
    vector[0] = map(cartographic.longitude);
    vector[1] = map(cartographic.latitude);
    vector[2] = cartographic.height;
  } else {
    vector[0] = map(cartographic.x);
    vector[1] = map(cartographic.y);
    vector[2] = cartographic.z;
  }
  return vector;
}

export function fromCartographicToRadians(cartographic, vector = scratchVector) {
  return fromCartographic(cartographic, vector, config.cartographicRadians ? noop : toRadians);
}

export function fromCartographicToDegrees(cartographic, vector = scratchVector) {
  return fromCartographic(cartographic, vector, config.cartographicRadians ? toDegrees : noop);
}

export function toCartographic(vector, cartographic, map = noop) {
  if (isArray(cartographic)) {
    cartographic[0] = map(vector[0]);
    cartographic[1] = map(vector[1]);
    cartographic[2] = vector[2];
  } else if ('longitude' in cartographic) {
    cartographic.longitude = map(vector[0]);
    cartographic.latitude = map(vector[1]);
    cartographic.height = vector[2];
  } else {
    cartographic.x = map(vector[0]);
    cartographic.y = map(vector[1]);
    cartographic.z = vector[2];
  }
  return cartographic;
}

export function toCartographicFromRadians(vector, cartographic) {
  return toCartographic(vector, cartographic, config.cartographicRadians ? noop : toDegrees);
}

export function toCartographicFromDegrees(vector, cartographic) {
  return toCartographic(vector, cartographic, config.cartographicRadians ? toRadians : noop);
}

export function isWGS84(vector) {
  if (!vector) {
    return false;
  }
  scratchVector.from(vector);
  const {oneOverRadiiSquared, centerToleranceSquared} = WGS84_CONSTANTS;
  const x2 = vector[0] * vector[0] * oneOverRadiiSquared[0];
  const y2 = vector[1] * vector[1] * oneOverRadiiSquared[1];
  const z2 = vector[2] * vector[2] * oneOverRadiiSquared[2];
  return Math.abs(x2 + y2 + z2 - 1) < centerToleranceSquared;
}
