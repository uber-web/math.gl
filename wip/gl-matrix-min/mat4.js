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
export {default as mat4_determinant} from 'gl-mat4/determinant';
export {default as mat4_fromQuat} from 'gl-mat4/fromQuat';
export {default as mat4_frustum} from 'gl-mat4/frustum';
export {default as mat4_lookAt} from 'gl-mat4/lookAt';
export {default as mat4_ortho} from 'gl-mat4/ortho';
export {default as mat4_perspective} from 'gl-mat4/perspective';
export {default as mat4_transpose} from 'gl-mat4/transpose';
export {default as mat4_invert} from 'gl-mat4/invert';
export {default as mat4_multiply} from 'gl-mat4/multiply';
export {default as mat4_rotateX} from 'gl-mat4/rotateX';
export {default as mat4_rotateY} from 'gl-mat4/rotateY';
export {default as mat4_rotateZ} from 'gl-mat4/rotateZ';
export {default as mat4_rotate} from 'gl-mat4/rotateZ';
export {default as mat4_scale} from 'gl-mat4/scale';
export {default as mat4_translate} from 'gl-mat4/translate';
export {default as vec2_transformMat4} from 'gl-vec2/transformMat4';
export {default as vec3_transformMat4} from 'gl-vec3/transformMat4';
export {default as vec4_transformMat4} from 'gl-vec4/transformMat4';
