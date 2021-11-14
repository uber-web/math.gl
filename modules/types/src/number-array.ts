/**
 * TypeScript type covering all typed arrays
 */
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array;

// TODO
// | BigInt64Array
// | BigUint64Array;

/**
 * TypeScript type covering all typed arrays and classic arrays consisting of numbers
 */
export type NumericArray = TypedArray | number[];

/**
 * TypeScript type covering all typed arrays and classic arrays consisting of numbers
 */
export type NumberArray = TypedArray | number[];
