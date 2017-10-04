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
export {default as vec2_set} from 'gl-vec2/set';
export {default as vec2_add} from 'gl-vec2/add';
export {default as vec2_subtract} from 'gl-vec2/subtract';
export {default as vec2_multiply} from 'gl-vec2/multiply';
export {default as vec2_divide} from 'gl-vec2/divide';
export {default as vec2_scale} from 'gl-vec2/scale';
export {default as vec2_scaleAndAdd} from 'gl-vec2/scaleAndAdd';
export {default as vec2_negate} from 'gl-vec2/negate';
export {default as vec2_normalize} from 'gl-vec2/normalize';
export {default as vec2_dot} from 'gl-vec2/dot';
export {default as vec2_cross} from 'gl-vec2/cross';
export {default as vec2_lerp} from 'gl-vec2/lerp';
