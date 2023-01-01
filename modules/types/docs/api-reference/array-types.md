# Array Types

## Types

### `TypedArray`

Any javascript typed array

### `NumericArray`

Any javascript typed array, or any javascript array containing numbers

## Utilities

### `isTypedArray(value: unknown): TypedArray | null`

Avoids type problems with the `ArrayBuffer.isView()` check.

### `isNumericArray(value: unknown): TypedArray | null`

Avoids type problems with the `ArrayBuffer.isView()` check. 

Note: only the type of the first element in a standard array is checked to be a `number`.
