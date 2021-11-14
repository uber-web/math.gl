// luma.gl, MIT license

// types
export type {TypedArray, NumericArray} from '@math.gl/types';

// classes
export {default as Vector2} from './classes/vector2';
export {default as Vector3} from './classes/vector3';
export {default as Vector4} from './classes/vector4';
export {default as Matrix3} from './classes/matrix3';
export {default as Matrix4} from './classes/matrix4';
export {default as Quaternion} from './classes/quaternion';

// experimental
export {default as SphericalCoordinates} from './classes/spherical-coordinates';
export {default as Pose} from './classes/pose';
export {default as Euler} from './classes/euler';

export {default as _MathUtils} from './lib/math-utils';

// lib
export {default as assert} from './lib/assert';

export {
  // math.gl global utility methods
  config,
  configure,
  formatValue,
  isArray,
  clone,
  equals,
  exactEquals,
  toRadians,
  toDegrees,
  // math.gl "GLSL"-style functions
  radians,
  degrees,
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  clamp,
  lerp,
  withEpsilon
} from './lib/common';

// DEPRECATED
export {default as _SphericalCoordinates} from './classes/spherical-coordinates';
export {default as _Pose} from './classes/pose';
export {default as _Euler} from './classes/euler';
