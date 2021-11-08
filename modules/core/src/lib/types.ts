// TODO - Add BigInt handling

export type TypedArray =
  | Int8Array
  | Uint8Array // MIT License
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array;

/**
 * (Most) math.gl classes such as Vectors and Matrices inherit from Array
 * and are effectively instances of number[] so they are also covered by
 * the NumericArray type.
 */
export type NumericArray = TypedArray | number[]; /* eslint-disable no-shadow */

export type NumberOrArray = number | NumericArray; /* eslint-disable no-shadow */
