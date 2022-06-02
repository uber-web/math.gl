// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import {NumericArray} from '@math.gl/types';
import assert from './assert';

import type MathArray from '../classes/base/math-array';

export type ConfigurationOptions = {
  EPSILON: number;
  debug?: boolean;
  precision: number;
  printTypes?: boolean;
  printDegrees?: boolean;
  printRowMajor?: boolean;
  _cartographicRadians?: boolean;
};

const RADIANS_TO_DEGREES = (1 / Math.PI) * 180;
const DEGREES_TO_RADIANS = (1 / 180) * Math.PI;

// TODO - remove
export const config: ConfigurationOptions = {
  EPSILON: 1e-12,
  debug: false,
  precision: 4,
  printTypes: false,
  printDegrees: false,
  printRowMajor: true
};

export function configure(options?: Partial<ConfigurationOptions>): ConfigurationOptions {
  // Only copy existing keys
  for (const key in options) {
    assert(key in config);
    config[key] = options[key];
  }
  return config;
}

/**
 * Formats a value into a string
 * @param value
 * @param param1
 * @returns
 */
export function formatValue(
  value: number,
  {precision = config.precision}: {precision?: number} = {}
): string {
  value = round(value);
  // get rid of trailing zeros
  return `${parseFloat(value.toPrecision(precision))}`;
}

/**
 * Check if value is an "array"
 * Returns `true` if value is either an array or a typed array
 *
 * Note: returns `false` for `ArrayBuffer` and `DataView` instances
 */
export function isArray(value: unknown): boolean {
  return Array.isArray(value) || (ArrayBuffer.isView(value) && !(value instanceof DataView));
}

export function clone(array: NumericArray | MathArray): NumericArray {
  return 'clone' in array ? array.clone() : array.slice();
}

export function toRadians(degrees: number): number;
export function toRadians(degrees: NumericArray): NumericArray;

export function toRadians(degrees: number | NumericArray): number | NumericArray {
  return radians(degrees as NumericArray);
}

export function toDegrees(degrees: number): number;
export function toDegrees(degrees: NumericArray): NumericArray;

export function toDegrees(radians: number | NumericArray): number | NumericArray {
  return degrees(radians as NumericArray);
}

// GLSL math function equivalents - Works on both single values and vectors

/**
 * "GLSL equivalent" radians: Works on single values and vectors
 */
export function radians(degrees: number): number;
export function radians(degrees: NumericArray, result?: NumericArray): NumericArray;

export function radians(
  degrees: number | NumericArray,
  result?: NumericArray
): number | NumericArray {
  return map(degrees, (degrees) => degrees * DEGREES_TO_RADIANS, result);
}

/**
 * "GLSL equivalent" degrees: Works on single values and vectors
 */
export function degrees(radians: number): number;
export function degrees(radians: NumericArray, result?: NumericArray): NumericArray;

export function degrees(
  radians: number | NumericArray,
  result?: NumericArray
): number | NumericArray {
  return map(radians, (radians) => radians * RADIANS_TO_DEGREES, result);
}

/**
 * "GLSL equivalent" of `Math.sin`: Works on single values and vectors
 * @deprecated
 */
export function sin(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.sin(angle), result);
}

/**
 * "GLSL equivalent" of `Math.cos`: Works on single values and vectors
 * @deprecated
 */
export function cos(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.cos(angle), result);
}

/**
 * "GLSL equivalent" of `Math.tan`: Works on single values and vectors
 * @deprecated
 */
export function tan(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.tan(angle), result);
}

/**
 * "GLSL equivalent" of `Math.asin`: Works on single values and vectors
 * @deprecated
 */
export function asin(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.asin(angle), result);
}

/**
 * "GLSL equivalent" of `Math.acos`: Works on single values and vectors
 * @deprecated
 */
export function acos(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.acos(angle), result);
}

/**
 * "GLSL equivalent" of `Math.atan`: Works on single values and vectors
 * @deprecated
 */
export function atan(radians: number | NumericArray, result?: NumericArray): number | NumericArray {
  return map(radians, (angle) => Math.atan(angle), result);
}

/**
 * GLSL style value clamping: Works on single values and vectors
 */
export function clamp(value: number, min: number, max: number): number;
export function clamp(value: NumericArray, min: number, max: number): NumericArray;

export function clamp(
  value: number | NumericArray,
  min: number,
  max: number
): number | NumericArray {
  return map(value, (value) => Math.max(min, Math.min(max, value)));
}

/**
 * Interpolate between two numbers or two arrays
 */
export function lerp(a: number, b: number, t: number): number;
export function lerp(a: NumericArray, b: NumericArray, t: number): NumericArray;

export function lerp(
  a: number | NumericArray,
  b: number | NumericArray,
  t: number
): number | NumericArray {
  if (isArray(a)) {
    return (a as NumericArray).map((ai: number, i: number) => lerp(ai, (b as NumericArray)[i], t));
  }
  return t * (b as number) + (1 - t) * (a as number);
}

/* eslint-disable */

/**
 * Compares any two math objects, using `equals` method if available.
 * @param a
 * @param b
 * @param epsilon
 * @returns
 */
export function equals(a: any, b: any, epsilon?: number): boolean {
  const oldEpsilon = config.EPSILON;
  if (epsilon) {
    config.EPSILON = epsilon;
  }
  try {
    if (a === b) {
      return true;
    }
    if (isArray(a) && isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; ++i) {
        // eslint-disable-next-line max-depth
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a && a.equals) {
      return a.equals(b);
    }
    if (b && b.equals) {
      return b.equals(a);
    }
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.abs(a - b) <= config.EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
    }
    return false;
  } finally {
    config.EPSILON = oldEpsilon;
  }
}

export function exactEquals(a: any, b: any): boolean {
  if (a === b) {
    return true;
  }
  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.exactEquals) {
      return a.exactEquals(b);
    }
  }
  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; ++i) {
      if (!exactEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/* eslint-enable */

export function withEpsilon<T>(epsilon: number, func: () => T): T {
  const oldPrecision = config.EPSILON;
  config.EPSILON = epsilon;
  let value: T;
  try {
    value = func();
  } finally {
    config.EPSILON = oldPrecision;
  }
  return value;
}

// HELPERS

function round(value: number): number {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

// If the array has a clone function, calls it, otherwise returns a copy
function duplicateArray(array: NumericArray): NumericArray {
  // @ts-expect-error We check for math.gl class methods
  return array.clone ? array.clone() : (new Array(array.length) as number[]);
}

// If the argument value is an array, applies the func element wise,
// otherwise applies func to the argument value
function map(
  value: number | NumericArray,
  func: (x: number, index?: number, result?: NumericArray) => number,
  result?: NumericArray
): number | NumericArray {
  if (isArray(value)) {
    const array = value as NumericArray;
    result = result || duplicateArray(array);
    for (let i = 0; i < result.length && i < array.length; ++i) {
      result[i] = func(value[i], i, result);
    }
    return result;
  }
  return func(value as number);
}
