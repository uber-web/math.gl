// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import type {NumericArray} from '@math.gl/core';
import {Vector3, toRadians, toDegrees, config} from '@math.gl/core';
import {WGS84_CONSTANTS} from './constants';

type LngLatHeightObject = {
  longitude: number;
  latitude: number;
  height: number;
};

type XYZObject = {
  x: number;
  y: number;
  z: number;
};

type Cartographic = LngLatHeightObject | XYZObject | NumericArray;

function identity(x: number): number {
  return x;
}

const scratchVector = new Vector3();

export function fromCartographic(cartographic: Cartographic): number[];
export function fromCartographic<NumArrayT>(
  cartographic: Cartographic,
  result: NumArrayT,
  map?: (x: number) => number
): NumArrayT;
export function fromCartographic(
  cartographic: Cartographic,
  result = [] as number[],
  map = identity
): number[] {
  if ('longitude' in cartographic) {
    result[0] = map(cartographic.longitude);
    result[1] = map(cartographic.latitude);
    result[2] = cartographic.height;
  } else if ('x' in cartographic) {
    result[0] = map(cartographic.x);
    result[1] = map(cartographic.y);
    result[2] = cartographic.z;
  } else {
    result[0] = map(cartographic[0]);
    result[1] = map(cartographic[1]);
    result[2] = cartographic[2];
  }
  return result;
}

export function fromCartographicToRadians(cartographic: Cartographic, result?: number[]): number[];
export function fromCartographicToRadians<TArray>(
  cartographic: Cartographic,
  result: TArray
): TArray;
export function fromCartographicToRadians(
  cartographic: Cartographic,
  vector = [] as number[]
): number[] {
  return fromCartographic(cartographic, vector, config._cartographicRadians ? identity : toRadians);
}

export function fromCartographicToDegrees(cartographic: Cartographic, result?: number[]): number[];
export function fromCartographicToDegrees<TArray>(
  cartographic: Cartographic,
  result: TArray
): TArray;
export function fromCartographicToDegrees(
  cartographic: Cartographic,
  vector = [] as number[]
): number[] {
  return fromCartographic(cartographic, vector, config._cartographicRadians ? toDegrees : identity);
}

export function toCartographic<T extends Cartographic>(
  vector: Readonly<NumericArray>,
  cartographic: T,
  map: (x: number) => number = identity
): T {
  if ('longitude' in cartographic) {
    cartographic.longitude = map(vector[0]);
    cartographic.latitude = map(vector[1]);
    cartographic.height = vector[2];
  } else if ('x' in cartographic) {
    cartographic.x = map(vector[0]);
    cartographic.y = map(vector[1]);
    cartographic.z = vector[2];
  } else {
    cartographic[0] = map(vector[0]);
    cartographic[1] = map(vector[1]);
    cartographic[2] = vector[2];
  }
  return cartographic;
}

export function toCartographicFromRadians<T extends Cartographic>(
  vector: Readonly<NumericArray>,
  cartographic: T
): T {
  return toCartographic(vector, cartographic, config._cartographicRadians ? identity : toDegrees);
}

export function toCartographicFromDegrees<T extends Cartographic>(
  vector: Readonly<NumericArray>,
  cartographic: T
): T {
  return toCartographic(vector, cartographic, config._cartographicRadians ? toRadians : identity);
}

// Estimates if a vector is close to the surface of the WGS84 Ellipsoid
export function isWGS84(vector: Readonly<NumericArray>): boolean {
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

/*

export function fromCartographic(cartographic: Cartographic, result?: number[]): number[];
export function fromCartographic(cartographic: Cartographic, result: TypedArray): TypedArray;
export function fromCartographicToRadians(cartographic: Cartographic, result?: number[]): number[];
export function fromCartographicToRadians(
  cartographic: Cartographic,
  result: TypedArray
): TypedArray;
export function fromCartographicToDegrees(cartographic: Cartographic, result?: number[]): number[];
export function fromCartographicToDegrees(
  cartographic: Cartographic,
  result: TypedArray
): TypedArray;

export function toCartographic(vector: number[] | TypedArray, result: Cartographic): number[];
export function toCartographicFromRadians(
  vector: number[] | TypedArray,
  result: Cartographic
): number[];
export function toCartographicFromDegrees(
  vector: number[] | TypedArray,
  result: Cartographic
): number[];

// Estimates if a vector is close to the surface of the WGS84 Ellipsoid
export function isWGS84(vector: number[] | TypedArray): boolean;
*/
