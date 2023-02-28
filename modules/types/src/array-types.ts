/**
 * TypeScript type covering all typed arrays
 */
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

// TODO
// | BigInt64Array
// | BigUint64Array;

export type TypedArrayConstructor =
  | Int8ArrayConstructor
  | Uint8ArrayConstructor
  | Uint8ClampedArrayConstructor
  | Int16ArrayConstructor
  | Uint16ArrayConstructor
  | Int32ArrayConstructor
  | Uint32ArrayConstructor
  | Float32ArrayConstructor
  | Float64ArrayConstructor;

/**
 * TypeScript type covering all typed arrays and classic arrays consisting of numbers
 */
export type NumericArray = TypedArray | number[];

/**
 * TypeScript type covering all typed arrays and classic arrays consisting of numbers
 * @note alias for NumericArray
 */
export type NumberArray = NumericArray;
