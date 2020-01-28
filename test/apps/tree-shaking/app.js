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

/* eslint-disable no-var, max-statements */
import {Matrix4, radians} from 'math.gl';

const SIDE = 256;

export const UNIFORMS = {
  uTime: 0.1,
  uModel: new Matrix4().rotateX(0.01).rotateY(0.013),
  uView: new Matrix4().lookAt({
    center: [0, 0, 0],
    eye: [
      (Math.cos(0.005) * SIDE) / 2,
      (Math.sin(0.006) * SIDE) / 2,
      ((Math.sin(0.0035) + 1) * SIDE) / 4 + 32
    ]
  }),
  uProjection: new Matrix4().perspective({fov: radians(60), aspect: 0.75, near: 1, far: 2048.0})
};
