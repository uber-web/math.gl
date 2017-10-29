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

export const PROJECT_TYPE = 'github';
export const PROJECT_NAME = 'math.gl';
export const PROJECT_ORG = 'uber-web';
export const PROJECT_URL = `https://github.com/${PROJECT_ORG}/${PROJECT_NAME}`;
export const PROJECT_DESC = 'Array-based 3D Math Classes optimized for WebGL applications';

export const PROJECTS = {
  'deck.gl': 'https://uber.github.io/deck.gl',
  'luma.gl': 'https://uber.github.io/luma.gl',
  'react-map-gl': 'https://uber.github.io/react-map-gl',
  'vis.gl': 'https://uber-web.github.io/vis.gl'
};

export const HOME_HEADING =
  'A JavaScript math library optimized for WebGL applications.';

/* eslint-disable quotes */
export const HOME_BULLETS = [{
  text: 'A modern Array-based JavaScript math library',
  desc: `math.gl leverages modern JavaScript to derive its 'Vector' and 'Matrix' classes \
from the built-in 'Array' class, enabling a more natural and composable API.`,
  img: 'images/icon-layers.svg'
}, {
  text: 'Optimized for WebGL and 3D Programming',
  desc: `A selection of classes for typical 3D programming tasks, \
optimized for use with WebGL where it makes sense.`,
  img: 'images/icon-layers.svg'
}, {
  text: 'Strong Documentation and Debug Support',
  desc: `math.gl offers both reference documentation and articles, \
as well as facilities for quicklydetecting errors and debugging math code.`,
  img: 'images/icon-layers.svg'
}, {
  text: 'Built on Strong Foundations',
  desc: `math.gl incorporates techniques from the most used JavaScript 3D math libraries, \
like gl-matrix and the math classes from THREE.js`,
  img: 'images/icon-layers.svg'
}];

export const ADDITIONAL_LINKS = [];
