type NumericArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array
  | number[];

declare module 'gl-matrix/vec2' {
  function length(a: Readonly<NumericArray>): number;
  function negate<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function add<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function sub<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function scale<T extends NumericArray>(out: T, a: Readonly<NumericArray>, b: number): T;
  function lerp<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    t: number
  ): T;
  function transformMat2<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformMat2d<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformMat3<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformMat4<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
}

declare module 'gl-matrix/vec3' {
  function length(a: Readonly<NumericArray>): number;
  function angle(a: Readonly<NumericArray>, b: Readonly<NumericArray>): number;
  function dot(a: Readonly<NumericArray>, b: Readonly<NumericArray>): number;
  function negate<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function add<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function sub<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function mul<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function cross<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function rotateX<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    rad: number
  ): T;
  function rotateY<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    rad: number
  ): T;
  function rotateZ<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    rad: number
  ): T;
  function transformMat3<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformMat4<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformQuat<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    q: Readonly<NumericArray>
  ): T;
}

declare module 'gl-matrix/vec4' {
  function length(a: Readonly<NumericArray>): number;
  function negate<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function scale<T extends NumericArray>(out: T, a: Readonly<NumericArray>, b: number): T;
  function transformMat4<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    m: Readonly<NumericArray>
  ): T;
  function transformQuat<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    q: Readonly<NumericArray>
  ): T;
}

declare module 'gl-matrix/mat3' {
  function determinant(a: Readonly<NumericArray>): number;
  function fromQuat<T extends NumericArray>(out: T, q: Readonly<NumericArray>): T;
  function transpose<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function invert<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function translate<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    v: Readonly<NumericArray>
  ): T;
  function scale<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    v: Readonly<NumericArray>
  ): T;
  function rotate<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function multiply<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
}

declare module 'gl-matrix/mat4' {
  function determinant(a: Readonly<NumericArray>): number;
  function fromQuat<T extends NumericArray>(out: T, q: Readonly<NumericArray>): T;
  function transpose<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function invert<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function getRotation<T extends NumericArray>(out: T, mat: Readonly<NumericArray>): T;
  function getScaling<T extends NumericArray>(out: T, mat: Readonly<NumericArray>): T;
  function getTranslation<T extends NumericArray>(out: T, mat: Readonly<NumericArray>): T;
  function equals(a: Readonly<NumericArray>, b: Readonly<NumericArray>): boolean;
  function translate<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    v: Readonly<NumericArray>
  ): T;
  function scale<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    v: Readonly<NumericArray>
  ): T;
  function rotate<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    rad: number,
    axis: Readonly<NumericArray>
  ): T;
  function rotateX<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function rotateY<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function rotateZ<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function multiply<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function lookAt<T extends NumericArray>(
    out: T,
    eye: Readonly<NumericArray>,
    center: Readonly<NumericArray>,
    up: Readonly<NumericArray>
  ): T;
  function perspective<T extends NumericArray>(
    out: T,
    fovy: number,
    aspect: number,
    near: number,
    far: number
  ): T;
  function frustum<T extends NumericArray>(
    out: T,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ): T;
  function ortho<T extends NumericArray>(
    out: T,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ): T;
}

declare module 'gl-matrix/quat' {
  function identity<T extends NumericArray>(out: T): T;
  function length(a: Readonly<NumericArray>): number;
  function squaredLength(a: Readonly<NumericArray>): number;
  function fromMat3<T extends NumericArray>(out: T, m: Readonly<NumericArray>): T;
  function setAxisAngle<T extends NumericArray>(
    out: T,
    axis: Readonly<NumericArray>,
    rad: number
  ): T;
  function rotationTo<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function add<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function dot(a: Readonly<NumericArray>, b: Readonly<NumericArray>): number;
  function invert<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function calculateW<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;
  function conjugate<T extends NumericArray>(out: T, a: Readonly<NumericArray>): T;

  function lerp<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    t: number
  ): T;
  function slerp<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>,
    t: number
  ): T;
  function scale<T extends NumericArray>(out: T, a: Readonly<NumericArray>, b: number): T;
  function multiply<T extends NumericArray>(
    out: T,
    a: Readonly<NumericArray>,
    b: Readonly<NumericArray>
  ): T;
  function rotateX<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function rotateY<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
  function rotateZ<T extends NumericArray>(out: T, a: Readonly<NumericArray>, rad: number): T;
}
