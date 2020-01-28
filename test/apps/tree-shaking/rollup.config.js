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

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';
import alias from 'rollup-plugin-alias';

import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-js-harmony';

import sizes from 'rollup-plugin-sizes';

export default {
  entry: 'app.js',
  dest: 'dist/bundle-rollup.js', // equivalent to --output
  format: 'cjs',
  plugins: [
    alias({
      'math.gl': '../../../dist-es6/index.js',
      buffer: '../../../dist-es6/rollup-buffer.js'
    }),
    builtins({
      buffer: false
    }),
    commonjs(),
    resolve(),
    json(),
    uglify({}, minify),
    sizes()
  ]
};
