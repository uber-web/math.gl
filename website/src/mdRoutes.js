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

export default [{
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Overview',
    markdown: require('../../docs/README.md')
  }, {
    name: 'What\'s New',
    markdown: require('../../docs/whats-new.md')
  }, {
    name: 'Upgrade Guide',
    markdown: require('../../docs/upgrade-guide.md')
  }, {
    name: 'Roadmap',
    markdown: require('../../docs/roadmap.md')
  }, {
    name: 'Get started',
    children: [{
      name: 'Installation',
      markdown: require('../../docs/get-started/README.md')
    }, {
      name: 'Using with three.js',
      markdown: require('../../docs/get-started/using-with-three-js.md')
    }, {
      name: 'Using with gl-matrix',
      markdown: require('../../docs/get-started/using-with-gl-matrix.md')
    }]
  }, {
    name: 'Developer Guide',
    children: [{
      name: 'Debugging',
      markdown: require('../../docs/developer-guide/debugging.md')
    }, {
      name: 'Floating Point',
      markdown: require('../../docs/developer-guide/floating-point.md')
    }, {
      name: 'Homogenous Coordinates',
      markdown: require('../../docs/developer-guide/homogenous-coordinates.md')
    }, {
      name: 'Performance',
      markdown: require('../../docs/developer-guide/performance.md')
    }, {
      name: 'Transformations',
      markdown: require('../../docs/developer-guide/using-transformations.md')
    }, {
      name: 'View and Projection Matrices',
      markdown: require('../../docs/developer-guide/view-and-projection.md')
    // }, {
    //   name: 'Vectors',
    //   markdown: require('../../docs/get-started/using-vectors.md')
    }]
  }, {
    name: 'API Reference',
    children: [{
      name: 'MathArray',
      markdown: require('../../docs/api-reference/math-array.md')
    }, {
      name: 'Matrix4',
      markdown: require('../../docs/api-reference/matrix4.md')
    }, {
      name: 'Quaternion',
      markdown: require('../../docs/api-reference/quaternion.md')
    }, {
      name: 'Vector2',
      markdown: require('../../docs/api-reference/vector2.md')
    }, {
      name: 'Vector3',
      markdown: require('../../docs/api-reference/vector3.md')
    }, {
      name: 'Vector4',
      markdown: require('../../docs/api-reference/vector4.md')
    }, {
      name: 'Utilities',
      markdown: require('../../docs/api-reference/utilities.md')
    }]
  }, {
    name: 'Experimental API',
    children: [{
      name: 'Euler (Experimental)',
      markdown: require('../../docs/api-reference/euler.md')
    }, {
      name: 'Pose (Experimental)',
      markdown: require('../../docs/api-reference/pose.md')
    }, {
      name: 'SphericalCoordinates (Experimental)',
      markdown: require('../../docs/api-reference/spherical-coordinates.md')
    }, {
      name: 'Polygon (Experimental)',
      markdown: require('../../docs/api-reference/addons/polygon.md')
    }]
  }]
}];
