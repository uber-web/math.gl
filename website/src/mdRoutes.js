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

import overview from '../../docs/README.md';

import euler from '../../docs/api-reference/euler.md';
import mathArray from '../../docs/api-reference/math-array.md';
import matrix4 from '../../docs/api-reference/matrix4.md';
import quaternion from '../../docs/api-reference/quaternion.md';
import spherical from '../../docs/api-reference/spherical-coordinates.md';
import utilities from '../../docs/api-reference/utilities.md';
import vector2 from '../../docs/api-reference/vector2.md';
import vector3 from '../../docs/api-reference/vector3.md';
import vector4 from '../../docs/api-reference/vector4.md';

import install from '../../docs/get-started/README.md';
import debugging from '../../docs/get-started/debugging.md';
import floating from '../../docs/articles/floating-point.md';
import homogenous from '../../docs/articles/homogenous-coordinates.md';
import performance from '../../docs/articles/performance.md';
import transformations from '../../docs/articles/using-transformations.md';
import viewproj from '../../docs/articles/view-and-projection.md';
// import vectors from '../../docs/get-started/using-vectors.md';

export default [{
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Overview',
    markdown: overview
  }, {
    name: 'Get started',
    children: [{
      name: 'Installation',
      markdown: install
    }, {
      name: 'Debugging',
      markdown: debugging
    }]
  }, {
    name: 'Articles',
    children: [{
      name: 'Floating Point',
      markdown: floating
    }, {
      name: 'Homogenous Coordinates',
      markdown: homogenous
    }, {
      name: 'Performance',
      markdown: performance
    }, {
      name: 'Transformations',
      markdown: transformations
    }, {
      name: 'View and Projection Matrices',
      markdown: viewproj
    // }, {
    //   name: 'Vectors',
    //   markdown: vectors
    }]
  }, {
    name: 'API Reference',
    children: [{
      name: 'MathArray',
      markdown: mathArray
    }, {
      name: 'Matrix4',
      markdown: matrix4
    }, {
      name: 'Quaternion',
      markdown: quaternion
    }, {
      name: 'Vector2',
      markdown: vector2
    }, {
      name: 'Vector3',
      markdown: vector3
    }, {
      name: 'Vector4',
      markdown: vector4
    }, {
      name: 'Utilities',
      markdown: utilities
    }]
  }, {
    name: 'Experimental API',
    children: [{
      name: 'Euler',
      markdown: euler
    }, {
      name: 'SphericalCoordinates',
      markdown: spherical
    }]
  }]
}];
