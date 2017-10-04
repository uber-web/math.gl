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
export {default as vec4_set} from 'gl-vec4/set';
export {default as vec4_distance} from 'gl-vec4/distance';
export {default as vec4_add} from 'gl-vec4/add';
export {default as vec4_subtract} from 'gl-vec4/subtract';
export {default as vec4_multiply} from 'gl-vec4/multiply';
export {default as vec4_divide} from 'gl-vec4/divide';
export {default as vec4_scale} from 'gl-vec4/scale';
export {default as vec4_scaleAndAdd} from 'gl-vec4/scaleAndAdd';
export {default as vec4_negate} from 'gl-vec4/negate';
export {default as vec4_inverse} from 'gl-vec4/inverse';
export {default as vec4_normalize} from 'gl-vec4/normalize';
export {default as vec4_dot} from 'gl-vec4/dot';
// export {default as vec4_cross} from 'gl-vec4/cross';
export {default as vec4_lerp} from 'gl-vec4/lerp';
