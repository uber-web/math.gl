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

// gl-matrix is too big. Cherry-pick individual imports from stack.gl version
/* eslint-disable camelcase */
export {default as quat_fromMat3} from 'gl-quat/fromMat3';
export {default as quat_identity} from 'gl-quat/identity';
export {default as quat_length} from 'gl-quat/length';
export {default as quat_squaredLength} from 'gl-quat/squaredLength';
export {default as quat_dot} from 'gl-quat/dot';
// export {default as quat_getAxisAngle} from 'gl-quat/getAxisAngle';
export {default as quat_rotationTo} from 'gl-quat/rotationTo';
export {default as quat_add} from 'gl-quat/add';
export {default as quat_calculateW} from 'gl-quat/calculateW';
export {default as quat_conjugate} from 'gl-quat/conjugate';
export {default as quat_invert} from 'gl-quat/invert';
export {default as quat_lerp} from 'gl-quat/lerp';
export {default as quat_multiply} from 'gl-quat/multiply';
export {default as quat_normalize} from 'gl-quat/normalize';
export {default as quat_rotateX} from 'gl-quat/rotateX';
export {default as quat_rotateY} from 'gl-quat/rotateY';
export {default as quat_rotateZ} from 'gl-quat/rotateZ';
export {default as quat_scale} from 'gl-quat/scale';
export {default as quat_set} from 'gl-quat/set';
export {default as quat_setAxisAngle} from 'gl-quat/setAxisAngle';
export {default as quat_slerp} from 'gl-quat/slerp';
