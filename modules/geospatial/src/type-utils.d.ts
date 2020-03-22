// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// import {Vector3} from '@math.gl/core';

type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array;

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

type Cartographic = LngLatHeightObject | XYZObject | number[] | TypedArray;

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
