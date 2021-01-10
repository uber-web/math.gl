# Matrix

`Matrix` is a base class for [`Matrix3`](./docs/api-reference/vector3) and [`Matrix4`](./docs/api-reference/vector4), providing common methods to those classes.

## Methods

### toString()

Returns a string representation of the matrix

### setElement(): this

Sets the element at "conceptual position" `M[i][j]`, row major indices by default

`matrix3.set(i, j, value, columnMajor = false)`

### getElement(): number

Gets the element at "conceptual position" `M[i][j]`, row major indices by default

`matrix3.get(i, j, columnMajor = false)`

### getColumn(columnIndex: number [ , result: number[3]]): number[3]

Extracts a column from the matrix

### setColumn(columnIndex: number, columnVector: number[3]): Matrix

Copies a column into the matrix
