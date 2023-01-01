import {TypedArray, NumericArray} from './array-types';

/**
 * Check is an array is a typed array
 * @param value value to be tested
 * @returns input as TypedArray, or null
 */
export function isTypedArray(value: unknown): TypedArray | null {
  return ArrayBuffer.isView(value) && !(value instanceof DataView) ? (value as TypedArray) : null;
}

/**
 * Check is an array is a numeric array (typed array or array of numbers)
 * @param value value to be tested
 * @returns input as NumericArray, or null
 */
export function isNumericArray(value: unknown): NumericArray | null {
  if (Array.isArray(value)) {
    return value.length === 0 || typeof value[0] === 'number' ? (value as number[]) : null;
  }
  return isTypedArray(value);
}
