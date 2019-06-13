// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import {config} from 'math.gl';

// math.gl classes
export {default as Vector2} from './classes/vector2';
export {default as Vector3} from './classes/vector3';
export {default as Vector4} from './classes/vector4';
export {default as Matrix3} from './classes/matrix3';
export {default as Matrix4} from './classes/matrix4';
export {default as Quaternion} from './classes/quaternion';

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
  // experimental
  withEpsilon as _withEpsilon
} from './lib/common';

export {checkNumber} from './lib/validators';

export {default as _MathUtils} from './lib/math-utils';

export {default as _SphericalCoordinates} from './classes/spherical-coordinates';
export {default as _Pose} from './classes/pose';
export {default as _Euler} from './classes/euler';
export {default as _Polygon} from './addons/polygon';

export {default as assert} from './lib/assert';

/* global self, window, global */
const globals = {
  // eslint-disable-next-line no-restricted-globals
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global
};

const global_ = globals.global || globals.self || globals.window;

// Make config avalable as global variable for access in debugger
// TODO - integrate with probe.gl (as soft dependency) to persist across reloades
global_.mathgl = {
  config
};
