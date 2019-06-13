(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(17);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(2);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__(205);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log10.js
var es6_math_log10 = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/react-table/es/index.js + 6 modules
var es = __webpack_require__(217);

// EXTERNAL MODULE: ../examples/benchmarks/react-table.css
var react_table = __webpack_require__(192);

// CONCATENATED MODULE: ../examples/benchmarks/bench-results.js








function getPercent(score) {
  // Log scale between 100K - 100M, 0-3
  var logScore = Math.min(Math.max(Math.log10(score) - 5, 0), 5);
  var percent = Math.min(Math.max(logScore * 33.3333333, 5), 100);
  return percent;
}

var GREEN = '#85cc00';
var ORANGE = '#ffbf00';
var RED = '#ff2e00';

function Star() {
  return react_default.a.createElement("span", {
    style: {
      fontSize: '100%',
      color: 'yellow'
    }
  }, "\u2605");
} // eslint-disable-next-line react/prop-types


function BarCell(_ref) {
  var color = _ref.color,
      percent = _ref.percent,
      _ref$stars = _ref.stars,
      stars = _ref$stars === void 0 ? 0 : _ref$stars,
      children = _ref.children;
  return react_default.a.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: '#dadada',
      borderRadius: '2px'
    }
  }, react_default.a.createElement("div", {
    style: {
      width: percent + "%",
      // ` workaround chrome devtools formatting issue
      height: '100%',
      backgroundColor: color,
      borderRadius: '2px',
      transition: 'all .2s ease-out'
    }
  }, new Array(stars).fill(null).map(function (_, i) {
    return react_default.a.createElement(Star, {
      key: "" + i
    });
  }), children));
} // eslint-disable-next-line react/prop-types


function PerformanceBarCell(_ref2) {
  var row = _ref2.row;
  var score = row.score;
  var percent = getPercent(score); // 1 star per 100M

  var stars = Math.floor((score || 0) / 5e7);
  var color = GREEN;

  if (percent < getPercent(1e7)) {
    color = ORANGE;
  }

  if (percent < getPercent(1e6)) {
    color = RED;
  }

  return percent ? react_default.a.createElement(BarCell, {
    color: color,
    percent: percent,
    stars: stars
  }) : null;
}

var bench_results_BenchResults =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(BenchResults, _Component);

  function BenchResults() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BenchResults.prototype;

  _proto._renderTable = function _renderTable() {
    // eslint-disable-next-line react/prop-types
    var log = this.props.log;
    return react_default.a.createElement("div", null, react_default.a.createElement("div", {
      style: {
        display: 'flex',
        height: 22
      }
    }, react_default.a.createElement(BarCell, {
      color: RED,
      percent: 100
    }, ' ', "< 1M iterations/s"), react_default.a.createElement("div", {
      style: {
        width: 20
      }
    }), react_default.a.createElement(BarCell, {
      color: ORANGE,
      percent: 100
    }, "1M - 10M iterations/s"), react_default.a.createElement("div", {
      style: {
        width: 20
      }
    }), react_default.a.createElement(BarCell, {
      color: GREEN,
      percent: 100
    }, "> 10M iterations/s"), react_default.a.createElement("div", {
      style: {
        width: 20
      }
    }), react_default.a.createElement(BarCell, {
      color: GREEN,
      percent: 100
    }, react_default.a.createElement(Star, null), "50M iterations/s")), react_default.a.createElement(es["a" /* default */], {
      data: log,
      columns: [{
        Header: 'Id',
        accessor: 'id',
        Cell: function Cell(_ref3) {
          var row = _ref3.row;
          return row.formattedValue ? row.id : react_default.a.createElement("h3", null, row.id.replace(/@math\.gl\/[a-zA-Z]*: /, ''));
        }
      }, {
        Header: 'iter/s',
        accessor: 'formattedValue',
        maxWidth: 85
      }, {
        Header: 'Score',
        accessor: 'value',
        id: 'score',
        Cell: PerformanceBarCell,
        maxWidth: 300
      }],
      showPagination: false,
      manual: true,
      className: "-striped -highlight"
    }));
  };

  _proto.render = function render() {
    return react_default.a.createElement("div", null, this._renderTable());
  };

  return BenchResults;
}(react["Component"]);


// EXTERNAL MODULE: ../node_modules/@probe.gl/bench/dist/esm/index.js + 13 modules
var esm = __webpack_require__(216);

// CONCATENATED MODULE: ../modules/core/test/lib/javascript.bench.js
// CLASS INHERITANCE
//
// This class identifies

const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

class ClassNoConstructor {}
class ClassWithConstructor {
  constructor() {
    this.data = null;
  }
}
class ClassWithConstructorXYZ {
  constructor() {
    this.x = -0;
    this.y = -0;
    this.z = -0;
    this.w = -0;
  }
}
class ClassWithConstructor04 {
  constructor() {
    this[0] = -0;
    this[1] = -0;
    this[2] = -0;
    this[3] = -0;
  }
}

class ArrayExtenderNoConstructor extends Array {}
class ArrayExtenderEmptyConstructor extends Array {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}
class ArrayExtender extends Array {
  constructor() {
    super(16);
    for (let i = 0; i < 16; i++) {
      this[i] = IDENTITY[i];
    }
  }
}

// DEFAULT PARAMETERS

class XYZVector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class XYZVectorLogicalOr {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
}

class XYZVectorBitwiseOr {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
}

// COMBINED BENCH

function javascriptBench(suite, addReferenceBenchmarks) {
  if (addReferenceBenchmarks) {
    suite
      .group('Class/Array inheritance construction cost')
      .add('new Array', () => new Array()) // eslint-disable-line
      .add('new ArrayExtender', () => new ArrayExtender())
      .add('new ArrayExtenderNoConstructor', () => new ArrayExtenderNoConstructor())
      .add('new ArrayExtenderEmptyConstructor', () => new ArrayExtenderEmptyConstructor())
      .add('new ClassNoConstructor', () => new ClassNoConstructor())
      .add('new ClassWithConstructor', () => new ClassWithConstructor())
      .add('new ClassWithConstructorXYZ', () => new ClassWithConstructorXYZ())
      .add('new ClassWithConstructor0-4', () => new ClassWithConstructor04());

    suite
      .group('Default parameter cost')
      .add('new XYZVector#default params', () => new XYZVector())
      .add('new XYZVector#logical or', () => new XYZVectorLogicalOr())
      .add('new XYZVector#bitwise or', () => new XYZVectorBitwiseOr());
  }

  return suite;
}

// CONCATENATED MODULE: ../modules/core/src/lib/assert.js
function assert(condition, message) {
  if (!condition) {
    throw new Error(`math.gl assertion ${message}`);
  }
}

// CONCATENATED MODULE: ../modules/core/src/lib/common.js
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



const RADIANS_TO_DEGREES = (1 / Math.PI) * 180;
const DEGREES_TO_RADIANS = (1 / 180) * Math.PI;

// TODO - remove
/* eslint-disable no-shadow */
const config = {};
config.EPSILON = 1e-12;
config.debug = false;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;



function configure(options = {}) {
  // Only copy existing keys
  for (const key in options) {
    assert(key in config);
    config[key] = options[key];
  }
  return config;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value, {precision = config.precision || 4} = {}) {
  value = round(value);
  // get rid of trailing zeros
  return `${parseFloat(value.toPrecision(precision))}`;
}

// Returns true if value is either an array or a typed array
// Note: does not return true for ArrayBuffers and DataViews
function isArray(value) {
  return Array.isArray(value) || (ArrayBuffer.isView(value) && value.length !== undefined);
}

// If the array has a clone function, calls it, otherwise returns a copy
function duplicateArray(array) {
  return array.clone ? array.clone() : new Array(array.length);
}

function clone(array) {
  return array.clone ? array.clone() : new Array(...array);
}

// If the argument value is an array, applies the func element wise,
// otherwise applies func to the argument value
function common_map(value, func, result) {
  if (isArray(value)) {
    result = result || duplicateArray(value);
    for (let i = 0; i < result.length && i < value.length; ++i) {
      result[i] = func(value[i], i, result);
    }
    return result;
  }
  return func(value);
}

function toRadians(degrees) {
  return common_radians(degrees);
}

function toDegrees(radians) {
  return degrees(radians);
}

//
// GLSL math function equivalents
// Works on both single values and vectors
//

function common_radians(degrees, result) {
  return common_map(degrees, degrees => degrees * DEGREES_TO_RADIANS, result);
}

function degrees(radians, result) {
  return common_map(radians, radians => radians * RADIANS_TO_DEGREES, result);
}

// GLSL equivalent: Works on single values and vectors
function sin(radians) {
  return common_map(radians, angle => Math.sin(angle));
}

// GLSL equivalent: Works on single values and vectors
function cos(radians) {
  return common_map(radians, angle => Math.cos(angle));
}

// GLSL equivalent: Works on single values and vectors
function tan(radians) {
  return common_map(radians, angle => Math.tan(angle));
}

// GLSL equivalent: Works on single values and vectors
function asin(radians) {
  return common_map(radians, angle => Math.asin(angle));
}

// GLSL equivalent: Works on single values and vectors
function acos(radians) {
  return common_map(radians, angle => Math.acos(angle));
}

// GLSL equivalent: Works on single values and vectors
function atan(radians) {
  return common_map(radians, angle => Math.atan(angle));
}

function clamp(value, min, max) {
  return common_map(value, value => Math.max(min, Math.min(max, value)));
}

// Interpolate between two numbers or two arrays
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map((ai, i) => lerp(ai, b[i], t));
  }
  return t * b + (1 - t) * a;
}

// eslint-disable-next-line complexity
function equals(a, b, epsilon) {
  const oldEpsilon = config.EPSILON;
  if (epsilon) {
    config.EPSILON = epsilon;
  }
  try {
    if (a === b) {
      return true;
    }
    if (isArray(a) && isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; ++i) {
        // eslint-disable-next-line max-depth
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a && typeof a === 'object' && a.equals) {
      return a.equals(b);
    }
    if (b && typeof b === 'object' && b.equals) {
      return b.equals(a);
    }
    return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
  } finally {
    config.EPSILON = oldEpsilon;
  }
}

// eslint-disable-next-line complexity
function exactEquals(a, b) {
  if (a === b) {
    return true;
  }
  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (a.exactEquals) {
      return a.exactEquals(b);
    }
  }
  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; ++i) {
      if (!exactEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function withEpsilon(EPSILON, func) {
  const oldPrecision = config.EPSILON;
  config.EPSILON = EPSILON;
  let value;
  try {
    value = func();
  } finally {
    config.EPSILON = oldPrecision;
  }
  return value;
}

// CONCATENATED MODULE: ../modules/core/src/classes/base/math-array.js
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



class math_array_MathArray extends Array {
  clone() {
    return new this.constructor().copy(this);
  }

  from(arrayOrObject) {
    return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
  }

  fromArray(array, offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i + offset];
    }
    return this.check();
  }

  to(arrayOrObject) {
    if (arrayOrObject === this) {
      return this;
    }
    return isArray(arrayOrObject) ? this.toArray(arrayOrObject) : this.toObject(arrayOrObject);
  }

  toTarget(target) {
    return target ? this.to(target) : this;
  }

  toArray(array = [], offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      array[offset + i] = this[i];
    }
    return array;
  }

  toFloat32Array() {
    return new Float32Array(this);
  }

  toString() {
    return this.formatString(config);
  }

  formatString(opts) {
    let string = '';
    for (let i = 0; i < this.ELEMENTS; ++i) {
      string += (i > 0 ? ', ' : '') + formatValue(this[i], opts);
    }
    return `${opts.printTypes ? this.constructor.name : ''}[${string}]`;
  }

  equals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (!equals(this[i], array[i])) {
        return false;
      }
    }
    return true;
  }

  exactEquals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (this[i] !== array[i]) {
        return false;
      }
    }
    return true;
  }

  // Modifiers

  negate() {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = -this[i];
    }
    return this.check();
  }

  lerp(a, b, t) {
    if (t === undefined) {
      t = b;
      b = a;
      a = this; // eslint-disable-line
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      const ai = a[i];
      this[i] = ai + t * (b[i] - ai);
    }
    return this.check();
  }

  min(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(vector[i], this[i]);
    }
    return this.check();
  }

  max(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.max(vector[i], this[i]);
    }
    return this.check();
  }

  clamp(minVector, maxVector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
    }
    return this.check();
  }

  add(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] += vector[i];
      }
    }
    return this.check();
  }

  subtract(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] -= vector[i];
      }
    }
    return this.check();
  }

  scale(scale) {
    if (Array.isArray(scale)) {
      return this.multiply(scale);
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scale;
    }
    return this.check();
  }

  // three.js compatibility

  sub(a) {
    return this.subtract(a);
  }

  setScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = a;
    }
    return this.check();
  }

  addScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] += a;
    }
    return this.check();
  }

  subScalar(a) {
    return this.addScalar(-a);
  }

  multiplyScalar(scalar) {
    // Multiplies all elements
    // `Matrix4.scale` only scales its 3x3 "minor"
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }
    return this.check();
  }

  divideScalar(a) {
    return this.scale(1 / a);
  }

  clampScalar(min, max) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], min), max);
    }
    return this.check();
  }

  // Cesium compatibility

  multiplyByScalar(scalar) {
    return this.scale(scalar);
  }

  // THREE.js compatibility
  get elements() {
    return this;
  }

  // Debug checks

  check() {
    if (config.debug && !this.validate(this)) {
      throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);
    }
    return this;
  }

  validate() {
    let valid = this.length === this.ELEMENTS;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      valid = valid && Number.isFinite(this[i]);
    }
    return valid;
  }
}

// CONCATENATED MODULE: ../modules/core/src/lib/validators.js
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



function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }
  // Could be arguments "array" (v.every not availasble)
  for (let i = 0; i < v.length; ++i) {
    if (!Number.isFinite(v[i])) {
      return false;
    }
  }
  return true;
}

function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error(`Invalid number ${value}`);
  }
  return value;
}

function checkVector(v, length, callerName) {
  if (config.debug && !validateVector(v, length)) {
    throw new Error(`math.gl: ${callerName | ''} some fields set to invalid numbers'`);
  }
  return v;
}

const validators_map = {};

function deprecated(method, version) {
  if (!validators_map[method]) {
    validators_map[method] = true;
    // eslint-disable-next-line
    console.warn(
      `${method} has been removed in version ${version}, see upgrade guide for more information`
    );
  }
}

// CONCATENATED MODULE: ../modules/core/src/classes/base/vector.js




class vector_Vector extends math_array_MathArray {
  // ACCESSORS

  get x() {
    return this[0];
  }
  set x(value) {
    return (this[0] = checkNumber(value));
  }

  get y() {
    return this[1];
  }
  set y(value) {
    return (this[1] = checkNumber(value));
  }

  // NOTE: `length` is a reserved word for Arrays, so we can't use `v.length()`
  // Offer `len` and `magnitude`
  len() {
    return Math.sqrt(this.lengthSquared());
  }

  magnitude() {
    return this.len();
  }

  lengthSquared() {
    let length = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      length += this[i] * this[i];
    }
    return length;
  }

  magnitudeSquared() {
    return this.lengthSquared();
  }

  distance(mathArray) {
    return Math.sqrt(this.distanceSquared(mathArray));
  }

  distanceSquared(mathArray) {
    let length = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      const dist = this[i] - mathArray[i];
      length += dist * dist;
    }
    return checkNumber(length);
  }

  dot(mathArray) {
    let product = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      product += this[i] * mathArray[i];
    }
    return checkNumber(product);
  }

  // MODIFIERS

  normalize() {
    const length = this.magnitude();
    if (length !== 0) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= length;
      }
    }
    return this.check();
  }

  // negate() {
  //   for (let i = 0; i < this.ELEMENTS; ++i) {
  //     this[i] = -this[i];
  //   }
  //   return this.check();
  // }

  // inverse() {
  //   for (let i = 0; i < this.ELEMENTS; ++i) {
  //     this[i] = 1 / this[i];
  //   }
  //   return this.check();
  // }

  multiply(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= vector[i];
      }
    }
    return this.check();
  }

  divide(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= vector[i];
      }
    }
    return this.check();
  }

  // THREE.js compatibility
  lengthSq() {
    return this.lengthSquared();
  }

  distanceTo(vector) {
    return this.distance(vector);
  }

  distanceToSquared(vector) {
    return this.distanceSquared(vector);
  }

  getComponent(i) {
    assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    return checkNumber(this[i]);
  }

  setComponent(i, value) {
    assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    this[i] = value;
    return this.check();
  }

  addVectors(a, b) {
    return this.copy(a).add(b);
  }

  subVectors(a, b) {
    return this.copy(a).subtract(b);
  }

  multiplyVectors(a, b) {
    return this.copy(a).multiply(b);
  }

  addScaledVector(a, b) {
    return this.add(new this.constructor(a).multiplyScalar(b));
  }
}

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__(199);

// CONCATENATED MODULE: ../modules/core/src/lib/gl-matrix-extras.js
// vec2 additions

function vec2_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const w = m[3] * x + m[7] * y || 1.0;
  out[0] = (m[0] * x + m[4] * y) / w;
  out[1] = (m[1] * x + m[5] * y) / w;
  return out;
}

// vec3 additions

// Transform as vector, only uses 3x3 minor matrix
function vec3_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = m[3] * x + m[7] * y + m[11] * z || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}

function vec3_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  return out;
}

// vec4 additions

function vec4_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

function vec4_transformMat3(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  out[0] = m[0] * x + m[3] * y + m[6] * z;
  out[1] = m[1] * x + m[4] * y + m[7] * z;
  out[2] = m[2] * x + m[5] * y + m[8] * z;
  out[3] = a[3];
  return out;
}

// CONCATENATED MODULE: ../modules/core/src/classes/vector3.js
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








const ORIGIN = [0, 0, 0];

class vector3_Vector3 extends vector_Vector {
  constructor(x = 0, y = 0, z = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0);
    if (arguments.length === 1 && isArray(x)) {
      this.copy(x);
    } else {
      // this.set(x, y, z);
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
      }
      this[0] = x;
      this[1] = y;
      this[2] = z;
    }
  }

  set(x, y, z) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    return this.check();
  }

  fromObject(object) {
    if (config.debug) {
      checkNumber(object.x);
      checkNumber(object.y);
      checkNumber(object.z);
    }
    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    return object;
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS() {
    return 3;
  }

  // x,y inherited from Vector

  get z() {
    return this[2];
  }
  set z(value) {
    return (this[2] = checkNumber(value));
  }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  angle(vector) {
    return vec3["a" /* angle */](this, vector);
  }

  // MODIFIERS

  cross(vector) {
    vec3["b" /* cross */](this, this, vector);
    return this.check();
  }

  rotateX({radians, origin = ORIGIN}) {
    vec3["e" /* rotateX */](this, this, origin, radians);
    return this.check();
  }

  rotateY({radians, origin = ORIGIN}) {
    vec3["f" /* rotateY */](this, this, origin, radians);
    return this.check();
  }

  rotateZ({radians, origin = ORIGIN}) {
    vec3["g" /* rotateZ */](this, this, origin, radians);
    return this.check();
  }

  // Transforms

  // transforms as point (4th component is implicitly 1)
  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  // transforms as point (4th component is implicitly 1)
  transformAsPoint(matrix4) {
    vec3["i" /* transformMat4 */](this, this, matrix4);
    return this.check();
  }

  // transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
  transformAsVector(matrix4) {
    vec3_transformMat4AsVector(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    vec3["h" /* transformMat3 */](this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    vec3_transformMat2(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    vec3["j" /* transformQuat */](this, this, quaternion);
    return this.check();
  }
}

// CONCATENATED MODULE: ../modules/core/test/lib/common.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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




const classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const float32Array = new Float32Array([1, 0, 0]);
const float64Array = new Float64Array([1, 0, 0]);
const vector3 = new vector3_Vector3();

function commonBench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Global Functions')
    .add('isArray(Vector3)', () => isArray(vector3))
    .add('isArray(Float32Array)', () => isArray(float32Array));

  if (addReferenceBenchmarks) {
    suite
      .add('isArray(array)', () => isArray(classicArray))
      .add('isArray(Float64Array)', () => isArray(float64Array));
  }

  suite
    .add('toRadians(Number)', () => toRadians(100))
    .add('radians(Vector3)', () => common_radians(vector3, vector3));

  if (addReferenceBenchmarks) {
    suite
      .add('toRadians(array)', () => toRadians(classicArray))
      .add('toRadians(Float32Array)', () => toRadians(float32Array))
      .add('toRadians(Float64Array)', () => toRadians(float64Array));
  }
}

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec2.js
var vec2 = __webpack_require__(203);

// CONCATENATED MODULE: ../modules/core/src/classes/vector2.js
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








class vector2_Vector2 extends vector_Vector {
  // Creates a new, empty vec2
  constructor(x = 0, y = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(2); // -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
      }
      this[0] = x;
      this[1] = y;
    }
  }

  set(x, y, z) {
    this[0] = x;
    this[1] = y;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    return this.check();
  }

  fromObject(object) {
    if (config.debug) {
      checkNumber(object.x);
      checkNumber(object.y);
    }
    this[0] = object.x;
    this[1] = object.y;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    return object;
  }

  // Getters/setters
  get ELEMENTS() {
    return 2;
  }

  // x,y inherited from Vector

  horizontalAngle() {
    return Math.atan2(this.y, this.x);
  }

  verticalAngle() {
    return Math.atan2(this.x, this.y);
  }

  // Transforms

  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  // transforms as point (4th component is implicitly 1)
  transformAsPoint(matrix4) {
    vec2["d" /* transformMat4 */](this, this, matrix4);
    return this.check();
  }

  // transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
  transformAsVector(matrix4) {
    vec2_transformMat4AsVector(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    vec2["c" /* transformMat3 */](this, this, matrix3);
    return this.check();
  }

  transformByMatrix2x3(matrix2x3) {
    vec2["b" /* transformMat2d */](this, this, matrix2x3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    vec2["a" /* transformMat2 */](this, this, matrix2);
    return this.check();
  }
}

// CONCATENATED MODULE: ../modules/core/test/classes/vector2.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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



const vector2_bench_array = [0, 0];
const vector2_bench_float32Array = new Float32Array([0, 0]);
const vector2 = new vector2_Vector2();

function vector2Bench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Vector2')
    .add('Vector2#new()', () => new vector2_Vector2(1, 2))
    .add('Vector2#set()', () => vector2.set(1, 2))
    .add('Vector2#copy()', () => vector2.copy([1, 2]));
  // .add('Vector2#from(Vector2)', () => vector2.from(arrayVector))
  // .add('Vector2#to(Vector2)', () => vector2.to(arrayVector))

  if (addReferenceBenchmarks) {
    suite
      .group('Vector2 Type Conversion Cost')
      .add('Vector2.from#Array', () => vector2.from(vector2_bench_array))
      .add('Vector2.from#Float32Array', () => vector2.from(vector2_bench_float32Array))
      .add('Vector2.to#Array', () => vector2.to(vector2_bench_array))
      .add('Vector2.to#Float32Array', () => vector2.to(vector2_bench_float32Array));
  }

  return suite;
}

// CONCATENATED MODULE: ../modules/core/test/classes/vector3.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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



class ObjectVector {
  constructor(x = -0, y = -0, z = -0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const vector3_bench_array = [0, 0, 0];
const vector3_bench_float32Array = new Float32Array([0, 0, 0]);
const objectVector = new ObjectVector();
const arrayVector = new vector3_Vector3();
const vector3_bench_vector3 = new vector3_Vector3();

function vector3Bench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Vector3')
    .add('Vector3#new()', () => new vector3_Vector3(1, 2, 3))
    .add('Vector3#set()', () => vector3_bench_vector3.set(1, 2, 3))
    .add('Vector3#copy()', () => vector3_bench_vector3.copy([1, 2, 3]))
    .add('Vector3#from(Vector3)', () => vector3_bench_vector3.from(arrayVector))
    .add('Vector3#to(Vector3)', () => vector3_bench_vector3.to(arrayVector))
    ;

  if (addReferenceBenchmarks) {
    suite
      .group('Vector3 Type Conversion Cost')
      .add('Vector3#from(Object)', () => vector3_bench_vector3.from(objectVector))
      .add('Vector3#to(Object)', () => vector3_bench_vector3.to(objectVector))
      .add('Vector3.from#Array', () => vector3_bench_vector3.from(vector3_bench_array))
      .add('Vector3.from#Float32Array', () => vector3_bench_vector3.from(vector3_bench_float32Array))
      .add('Vector3.to#Array', () => vector3_bench_vector3.to(vector3_bench_array))
      .add('Vector3.to#Float32Array', () => vector3_bench_vector3.to(vector3_bench_float32Array));
  }

  return suite;
}

// CONCATENATED MODULE: ../modules/core/src/classes/vector4.js
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








class vector4_Vector4 extends vector_Vector {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      // this.set(x, y, z, w);
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
        checkNumber(w);
      }
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = w;
    }
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  fromObject(object) {
    if (config.debug) {
      checkNumber(object.x);
      checkNumber(object.y);
      checkNumber(object.z);
      checkNumber(object.w);
    }
    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this;
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    object.w = this[3];
    return object;
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS() {
    return 4;
  }

  // x,y inherited from Vector

  get z() {
    return this[2];
  }

  set z(value) {
    return (this[2] = checkNumber(value));
  }

  get w() {
    return this[3];
  }

  set w(value) {
    return (this[3] = checkNumber(value));
  }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  transform(matrix4) {
    vec3["i" /* transformMat4 */](this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    vec4_transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    vec4_transformMat2(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    vec3["j" /* transformQuat */](this, this, quaternion);
    return this.check();
  }

  // three.js compatibility
  applyMatrix4(m) {
    m.transform(this, this);
    return this;
  }
}

// CONCATENATED MODULE: ../modules/core/test/classes/vector4.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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



const vector4_bench_array = [0, 0, 0, 0];
const vector4_bench_float32Array = new Float32Array([0, 0, 0, 0]);
const vector4 = new vector4_Vector4();

function vector4Bench(suite, addReferenceBenchmarks) {
  suite
    .group('@math.gl/core: Vector4')
    .add('Vector4#new()', () => new vector4_Vector4(1, 2, 3, 4))
    .add('Vector4#set()', () => vector4.set(1, 2, 3, 4))
    .add('Vector4#copy()', () => vector4.copy([1, 2, 3, 4]));
  // .add('Vector4#from(Vector4)', () => vector4.from(arrayVector))
  // .add('Vector4#to(Vector4)', () => vector4.to(arrayVector))

  if (addReferenceBenchmarks) {
    suite
      .group('Vector4 Type Conversion Cost')
      .add('Vector4.from#Array', () => vector4.from(vector4_bench_array))
      .add('Vector4.from#Float32Array', () => vector4.from(vector4_bench_float32Array))
      .add('Vector4.to#Array', () => vector4.to(vector4_bench_array))
      .add('Vector4.to#Float32Array', () => vector4.to(vector4_bench_float32Array));
  }

  return suite;
}

// CONCATENATED MODULE: ../modules/core/src/classes/base/matrix.js




class matrix_Matrix extends math_array_MathArray {
  // fromObject(object) {
  //   const array = object.elements;
  //   return this.fromRowMajor(array);
  // }

  // toObject(object) {
  //   const array = object.elements;
  //   this.toRowMajor(array);
  //   return object;
  // }

  toString() {
    let string = '[';
    if (config.printRowMajor) {
      string += 'row-major:';
      for (let row = 0; row < this.RANK; ++row) {
        for (let col = 0; col < this.RANK; ++col) {
          string += ` ${this[col * this.RANK + row]}`;
        }
      }
    } else {
      string += 'column-major:';
      for (let i = 0; i < this.ELEMENTS; ++i) {
        string += ` ${this[i]}`;
      }
    }
    string += ']';
    return string;
  }

  getElementIndex(row, col) {
    return col * this.RANK + row;
  }

  // By default assumes row major indices
  getElement(row, col) {
    return this[col * this.RANK + row];
  }

  // By default assumes row major indices
  setElement(row, col, value) {
    this[col * this.RANK + row] = checkNumber(value);
    return this;
  }

  getColumn(columnIndex, result = new Array(this.RANK).fill(-0)) {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      result[i] = this[firstIndex + i];
    }
    return result;
  }

  setColumn(columnIndex, columnVector) {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      this[firstIndex + i] = columnVector[i];
    }
    return this;
  }
}

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat4.js
var mat4 = __webpack_require__(202);

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec4.js
var vec4 = __webpack_require__(212);

// CONCATENATED MODULE: ../modules/core/src/classes/matrix4.js
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











const matrix4_IDENTITY = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const ZERO = Object.freeze([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

const INDICES = Object.freeze({
  COL0ROW0: 0,
  COL0ROW1: 1,
  COL0ROW2: 2,
  COL0ROW3: 3,
  COL1ROW0: 4,
  COL1ROW1: 5,
  COL1ROW2: 6,
  COL1ROW3: 7,
  COL2ROW0: 8,
  COL2ROW1: 9,
  COL2ROW2: 10,
  COL2ROW3: 11,
  COL3ROW0: 12,
  COL3ROW1: 13,
  COL3ROW2: 14,
  COL3ROW3: 15
});

const constants = {};

class matrix4_Matrix4 extends matrix_Matrix {
  get ELEMENTS() {
    return 16;
  }

  get RANK() {
    return 4;
  }

  get INDICES() {
    return INDICES;
  }

  get IDENTITY() {
    constants.IDENTITY = constants.IDENTITY || Object.freeze(new matrix4_Matrix4(matrix4_IDENTITY));
    return constants.IDENTITY;
  }

  get ZERO() {
    constants.ZERO = constants.ZERO || Object.freeze(new matrix4_Matrix4(ZERO));
    return constants.ZERO;
  }

  constructor(array) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);
    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    this[9] = array[9];
    this[10] = array[10];
    this[11] = array[11];
    this[12] = array[12];
    this[13] = array[13];
    this[14] = array[14];
    this[15] = array[15];
    return this.check();
  }

  // eslint-disable-next-line max-params
  set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  // accepts row major order, stores as column major
  // eslint-disable-next-line max-params
  setRowMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  toRowMajor(result) {
    result[0] = this[0];
    result[1] = this[4];
    result[2] = this[8];
    result[3] = this[12];
    result[4] = this[1];
    result[5] = this[5];
    result[6] = this[9];
    result[7] = this[13];
    result[8] = this[2];
    result[9] = this[6];
    result[10] = this[10];
    result[11] = this[14];
    result[12] = this[3];
    result[13] = this[7];
    result[14] = this[11];
    result[15] = this[15];
    return result;
  }

  // Constructors

  identity() {
    return this.copy(matrix4_IDENTITY);
  }

  // Calculates a 4x4 matrix from the given quaternion
  // q quat  Quaternion to create matrix from
  fromQuaternion(q) {
    mat4["b" /* fromQuat */](this, q);
    return this.check();
  }

  // Generates a frustum matrix with the given bounds
  // left  Number  Left bound of the frustum
  // right Number  Right bound of the frustum
  // bottom  Number  Bottom bound of the frustum
  // top Number  Top bound of the frustum
  // near  Number  Near bound of the frustum
  // far Number  Far bound of the frustum
  frustum({left, right, bottom, top, near, far}) {
    mat4["c" /* frustum */](this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates a look-at matrix with the given eye position, focal point,
  // and up axis
  // eye vec3  Position of the viewer
  // center  vec3  Point the viewer is looking at
  // up  vec3  vec3 pointing up
  lookAt(eye, center, up) {
    // Signature: lookAt({eye, center = [0, 0, 0], up = [0, 1, 0]}))
    if (arguments.length === 1) {
      ({eye, center, up} = eye);
    }

    center = center || [0, 0, 0];
    up = up || [0, 1, 0];

    mat4["f" /* lookAt */](this, eye, center, up);
    return this.check();
  }

  // Generates a orthogonal projection matrix with the given bounds
  // from "traditional" view space parameters
  // left  number  Left bound of the frustum
  // right number  Right bound of the frustum
  // bottom  number  Bottom bound of the frustum
  // top number  Top bound of the frustum
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  ortho({left, right, bottom, top, near = 0.1, far = 500}) {
    mat4["h" /* ortho */](this, left, right, bottom, top, near, far);
    return this.check();
  }

  // Generates an orthogonal projection matrix with the same parameters
  // as a perspective matrix (plus focalDistance)
  // fovy  number  Vertical field of view in radians
  // aspect  number  Aspect ratio. typically viewport width/height
  // focalDistance distance in the view frustum used for extent calculations
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  orthographic({
    fovy = (45 * Math.PI) / 180,
    aspect = 1,
    focalDistance = 1,
    near = 0.1,
    far = 500
  }) {
    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }
    const halfY = fovy / 2;
    const top = focalDistance * Math.tan(halfY); // focus_plane is the distance from the camera
    const right = top * aspect;

    return new matrix4_Matrix4().ortho({
      left: -right,
      right,
      bottom: -top,
      top,
      near,
      far
    });
  }

  // Generates a perspective projection matrix with the given bounds
  // fovy  number  Vertical field of view in radians
  // aspect  number  Aspect ratio. typically viewport width/height
  // near  number  Near bound of the frustum
  // far number  Far bound of the frustum
  perspective({
    fovy,
    fov = (45 * Math.PI) / 180, // DEPRECATED
    aspect = 1,
    near = 0.1,
    far = 500
  } = {}) {
    fovy = fovy || fov;
    if (fovy > Math.PI * 2) {
      throw Error('radians');
    }
    mat4["i" /* perspective */](this, fovy, aspect, near, far);
    return this.check();
  }

  // Accessors

  determinant() {
    return mat4["a" /* determinant */](this);
  }

  // Extracts the non-uniform scale assuming the matrix is an affine transformation.
  // The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
  getScale(result = [-0, -0, -0]) {
    // explicit is faster than hypot...
    result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
    result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
    // result[0] = Math.hypot(this[0], this[1], this[2]);
    // result[1] = Math.hypot(this[4], this[5], this[6]);
    // result[2] = Math.hypot(this[8], this[9], this[10]);
    return result;
  }

  // Gets the translation portion, assuming the matrix is a affine transformation matrix.
  getTranslation(result = [-0, -0, -0]) {
    result[0] = this[12];
    result[1] = this[13];
    result[2] = this[14];
    return result;
  }

  // Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
  getRotation(
    result = [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0],
    scaleResult = null
  ) {
    const scale = this.getScale(scaleResult || [-0, -0, -0]);

    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];

    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = 0;
    result[4] = this[4] * inverseScale0;
    result[5] = this[5] * inverseScale1;
    result[6] = this[6] * inverseScale2;
    result[7] = 0;
    result[8] = this[8] * inverseScale0;
    result[9] = this[9] * inverseScale1;
    result[10] = this[10] * inverseScale2;
    result[11] = 0;
    result[12] = 0;
    result[13] = 0;
    result[14] = 0;
    result[15] = 1;
    return result;
  }

  // Modifiers

  transpose() {
    mat4["p" /* transpose */](this, this);
    return this.check();
  }

  invert() {
    mat4["e" /* invert */](this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat4["g" /* multiply */](this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat4["g" /* multiply */](this, this, a);
    return this.check();
  }

  // Rotates a matrix by the given angle around the X axis
  rotateX(radians) {
    mat4["k" /* rotateX */](this, this, radians);
    // mat4.rotate(this, this, radians, [1, 0, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Y axis.
  rotateY(radians) {
    mat4["l" /* rotateY */](this, this, radians);
    // mat4.rotate(this, this, radians, [0, 1, 0]);
    return this.check();
  }

  // Rotates a matrix by the given angle around the Z axis.
  rotateZ(radians) {
    mat4["m" /* rotateZ */](this, this, radians);
    // mat4.rotate(this, this, radians, [0, 0, 1]);
    return this.check();
  }

  rotateXYZ([rx, ry, rz]) {
    return this.rotateX(rx)
      .rotateY(ry)
      .rotateZ(rz);
  }

  rotateAxis(radians, axis) {
    mat4["j" /* rotate */](this, this, radians, axis);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      mat4["n" /* scale */](this, this, factor);
    } else {
      mat4["n" /* scale */](this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    mat4["o" /* translate */](this, this, vec);
    return this.check();
  }

  // Transforms

  // Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
  transform(vector, result) {
    if (vector.length === 4) {
      result = vec4["a" /* transformMat4 */](result || [-0, -0, -0, -0], vector, this);
      checkVector(result, 4);
      return result;
    }
    return this.transformAsPoint(vector, result);
  }

  // Transforms any 2 or 3 element array as point (w implicitly 1)
  transformAsPoint(vector, result) {
    const {length} = vector;
    switch (length) {
      case 2:
        result = vec2["d" /* transformMat4 */](result || [-0, -0], vector, this);
        break;
      case 3:
        result = vec3["i" /* transformMat4 */](result || [-0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(result, vector.length);
    return result;
  }

  // Transforms any 2 or 3 element array as vector (w implicitly 0)
  transformAsVector(vector, result) {
    switch (vector.length) {
      case 2:
        result = vec2_transformMat4AsVector(result || [-0, -0], vector, this);
        break;
      case 3:
        result = vec3_transformMat4AsVector(result || [-0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(result, vector.length);
    return result;
  }

  // three.js math API compatibility
  makeRotationX(radians) {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x, y, z) {
    return this.identity().translate([x, y, z]);
  }

  makeRotationFromQuaternion(q) {
    return this.fromQuaternion(q);
  }

  // DEPRECATED in 3.0

  transformPoint(vector, result) {
    deprecated('Matrix4.transformPoint', '3.0');
    return this.transformAsPoint(vector, result);
  }

  transformVector(vector, result) {
    deprecated('Matrix4.transformVector', '3.0');
    return this.transformAsPoint(vector, result);
  }

  transformDirection(vector, result) {
    deprecated('Matrix4.transformDirection', '3.0');
    return this.transformAsVector(vector, result);
  }
}

// CONCATENATED MODULE: ../modules/core/test/classes/matrix4.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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




/*
class CesiumMatrix4 {
  constructor(x = -0, y = -0, z = -0) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = z;
    this[4] = z;
    this[5] = z;
    this[6] = z;
    this[7] = z;
    this[8] = z;
    this[9] = z;
    this[10] = z;
    this[11] = z;
    this[12] = z;
    this[13] = z;
    this[14] = z;
    this[15] = z;
  }
}

function THREEMatrix4() {
  this.elements = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];
}
*/

const matrix4_bench_array = [0, 0, 0];
// const arrayVector = new CesiumMatrix4();
// const objectVector = new THREEMatrix4();
const matrix4_bench_matrix4 = new matrix4_Matrix4();

const matrix4_bench_IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

const matrix4_bench_classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const matrix4_bench_float32Array = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const matrix4_bench_float64Array = new Float64Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

const mathglVector4 = new vector4_Vector4();
const dirVector4 = new vector4_Vector4(0, 0, 0, 0);
const pointVector4 = new vector4_Vector4(0, 0, 0, 1);
const matrix4_bench_vector3 = [0, 0, 0];

function matrix4Bench(suite, addReferenceBenchmarks) {
  suite
    // add tests
    .group('@math.gl/core: Matrix4 constructors')
    .add('Matrix4#new Matrix4()', () => configure({debug: false}), () => new matrix4_Matrix4())
    .add('Matrix4#new Matrix4(debug)', () => configure({debug: true}), () => new matrix4_Matrix4())
    .add('Matrix4#copy()', () => configure({debug: false}), () => matrix4_bench_matrix4.copy(matrix4_bench_IDENTITY))
    .add('Matrix4#copy(debug)', () => configure({debug: true}), () => matrix4_bench_matrix4.copy(matrix4_bench_IDENTITY))
    .add('Matrix4#set()', () => configure({debug: false}), () => matrix4_bench_matrix4.set(1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1))
    .add('Matrix4#setRowMajor()', () =>
      matrix4_bench_matrix4.setRowMajor(1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    )
    .add('Matrix4#identity', () => matrix4_bench_matrix4.identity())
    .add('Matrix4#fromQuaternion', () => matrix4_bench_matrix4.fromQuaternion([1, 1, 1, 1]));
  // .add('Matrix4#from(Matrix4)', () => matrix4.from(arrayVector))
  // .add('Matrix4#from(Object)', () => matrix4.from(objectVector))
  // .add('Matrix4#to(Matrix4)', () => matrix4.to(arrayVector))
  // .add('Matrix4#to(Object)', () => matrix4.to(objectVector));

  if (addReferenceBenchmarks) {
    suite
      .add('Array(16)', () => new Array(16))
      .add('[1, 0, 0, 0, ...]', () => [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      .add('new Float32Array(16)', () => new Float32Array(16))
      .add('new Float32Array(IDENTITY)', () => new Float32Array(matrix4_bench_IDENTITY))
      .add('new Float64Array(16)', () => new Float64Array(16))
      .add('new Float64Array(IDENTITY)', () => new Float64Array(matrix4_bench_IDENTITY));
  }

  if (addReferenceBenchmarks) {
    suite
      .add('Matrix4#from(Array)', () => matrix4_bench_matrix4.from(matrix4_bench_array))
      .add('Matrix4#from(Float32Array)', () => matrix4_bench_matrix4.from(matrix4_bench_float32Array))
      .add('Matrix4#to(Array)', () => matrix4_bench_matrix4.to(matrix4_bench_array))
      .add('Matrix4#to(Float32Array)', () => matrix4_bench_matrix4.to(matrix4_bench_float32Array));
    // .group('debug validation cost')
    // .add('Matrix4#validate (debug)', () => configure({debug: true}), () => matrix4.check())
    // .add('Matrix4#validate ', () => configure({debug: false}), () => matrix4.check())
  }

  suite
    .group('@math.gl/core: Matrix4 Multiplication')
    .add('Matrix4#multiplyRight(Matrix4)', () => matrix4_bench_matrix4.multiplyRight(matrix4_bench_matrix4))
    .add('gl-matrix#multiply(Matrix4)', () => mat4["g" /* multiply */](matrix4_bench_matrix4, matrix4_bench_matrix4, matrix4_bench_matrix4))
    .add('Matrix4#transform(dir4)', () => matrix4_bench_matrix4.transform(dirVector4, mathglVector4))
    .add('Matrix4#transform(point4)', () => matrix4_bench_matrix4.transform(pointVector4, mathglVector4))
    .add('Matrix4#transformAsVector(v3)', () => matrix4_bench_matrix4.transformAsVector(matrix4_bench_vector3, matrix4_bench_vector3))
    .add('Matrix4#transformAsPoint(v3)', () => matrix4_bench_matrix4.transformAsVector(matrix4_bench_vector3, matrix4_bench_vector3));

  suite
    .group('@math.gl/core: Matrix4 accessors')
    .add('Matrix4#determinant()', () => matrix4_bench_matrix4.determinant())
    .add('Matrix4#getScale()', () => matrix4_bench_matrix4.getScale())
    .add('Matrix4#getTranslation()', () => matrix4_bench_matrix4.getTranslation())
    .add('Matrix4#getRotation()', () => matrix4_bench_matrix4.getRotation());

  suite
    .group('@math.gl/core: Matrix4 operations')
    .add('Matrix4#transpose()', () => matrix4_bench_matrix4.transpose())
    .add('Matrix4#invert()', () => matrix4_bench_matrix4.invert())

    .add('Matrix4#scale()', () => matrix4_bench_matrix4.scale(2))
    .add('Matrix4#translate()', () => matrix4_bench_matrix4.translate([1, 1, 1]));

  if (addReferenceBenchmarks) {
    suite
      .add('gl-matrix#multiply(array)', () =>
        mat4["g" /* multiply */](matrix4_bench_classicArray, matrix4_bench_classicArray, matrix4_bench_classicArray)
      )
      .add('gl-matrix#multiply(float32Array)', () =>
        mat4["g" /* multiply */](matrix4_bench_float32Array, matrix4_bench_float32Array, matrix4_bench_float32Array)
      )
      .add('gl-matrix#multiply(float64Array)', () =>
        mat4["g" /* multiply */](matrix4_bench_float64Array, matrix4_bench_float64Array, matrix4_bench_float64Array)
      );
  }

  return suite;
}

// CONCATENATED MODULE: ../modules/core/test/bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
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




// import classesBench from './classes/classes.bench';





function coreBench(suite, addReferenceBenchmarks) {
  // classesBench(suite, addReferenceBenchmarks);
  commonBench(suite, addReferenceBenchmarks);
  javascriptBench(suite, addReferenceBenchmarks);

  matrix4Bench(suite, addReferenceBenchmarks);

  vector2Bench(suite, addReferenceBenchmarks);
  vector3Bench(suite, addReferenceBenchmarks);
  vector4Bench(suite, addReferenceBenchmarks);

  return suite;
}

// CONCATENATED MODULE: ../modules/geospatial/src/type-utils.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md



const noop = x => x;

const scratchVector = new vector3_Vector3();

function fromCartographic(cartographic, vector, map = noop) {
  if (isArray(cartographic)) {
    vector[0] = map(cartographic[0]);
    vector[1] = map(cartographic[1]);
    vector[2] = cartographic[2];
  } else if ('longitude' in cartographic) {
    vector[0] = map(cartographic.longitude);
    vector[1] = map(cartographic.latitude);
    vector[2] = cartographic.height;
  } else {
    vector[0] = map(cartographic.x);
    vector[1] = map(cartographic.y);
    vector[2] = cartographic.z;
  }
  return vector;
}

function fromCartographicToRadians(cartographic, vector = scratchVector) {
  return fromCartographic(cartographic, vector, config.cartographicRadians ? noop : toRadians);
}

function fromCartographicToDegrees(cartographic, vector = scratchVector) {
  return fromCartographic(cartographic, vector, config.cartographicRadians ? toDegrees : noop);
}

function toCartographic(vector, cartographic, map = noop) {
  if (isArray(cartographic)) {
    cartographic[0] = map(vector[0]);
    cartographic[1] = map(vector[1]);
    cartographic[2] = vector[2];
  } else if ('longitude' in cartographic) {
    cartographic.longitude = map(vector[0]);
    cartographic.latitude = map(vector[1]);
    cartographic.height = vector[2];
  } else {
    cartographic.x = map(vector[0]);
    cartographic.y = map(vector[1]);
    cartographic.z = vector[2];
  }
  return cartographic;
}

function toCartographicFromRadians(vector, cartographic) {
  return toCartographic(vector, cartographic, config.cartographicRadians ? noop : toDegrees);
}

function toCartographicFromDegrees(vector, cartographic) {
  return toCartographic(vector, cartographic, config.cartographicRadians ? toRadians : noop);
}

// CONCATENATED MODULE: ../modules/core/src/lib/math-utils.js
// NOTE: Added to make Cesium-derived test cases work
// TODO: Determine if/how to keep
/* harmony default export */ var math_utils = ({
  EPSILON1: 1e-1,
  EPSILON2: 1e-2,
  EPSILON3: 1e-3,
  EPSILON4: 1e-4,
  EPSILON5: 1e-5,
  EPSILON6: 1e-6,
  EPSILON7: 1e-7,
  EPSILON8: 1e-8,
  EPSILON9: 1e-9,
  EPSILON10: 1e-10,
  EPSILON11: 1e-11,
  EPSILON12: 1e-12,
  EPSILON13: 1e-13,
  EPSILON14: 1e-14,
  EPSILON15: 1e-15,
  EPSILON16: 1e-16,
  EPSILON17: 1e-17,
  EPSILON18: 1e-18,
  EPSILON19: 1e-19,
  EPSILON20: 1e-20,

  PI_OVER_TWO: Math.PI / 2,
  PI_OVER_FOUR: Math.PI / 4,
  PI_OVER_SIX: Math.PI / 6
});

// CONCATENATED MODULE: ../modules/geospatial/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

const WGS84_RADIUS_X = 6378137.0;
const WGS84_RADIUS_Y = 6378137.0;
const WGS84_RADIUS_Z = 6356752.3142451793;

// Pre-calculated ellipsoid defaults to avoid utils depending on `ellipsoid.js`

const WGS84_CONSTANTS = {
  radii: [WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z],
  radiiSquared: [
    WGS84_RADIUS_X * WGS84_RADIUS_X,
    WGS84_RADIUS_Y * WGS84_RADIUS_Y,
    WGS84_RADIUS_Z * WGS84_RADIUS_Z
  ],
  oneOverRadii: [1.0 / WGS84_RADIUS_X, 1.0 / WGS84_RADIUS_Y, 1.0 / WGS84_RADIUS_Z],
  oneOverRadiiSquared: [
    (1.0 / WGS84_RADIUS_X) * WGS84_RADIUS_X,
    (1.0 / WGS84_RADIUS_Y) * WGS84_RADIUS_Y,
    (1.0 / WGS84_RADIUS_Z) * WGS84_RADIUS_Z
  ],
  maximumRadius: Math.max(WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z),
  centerToleranceSquared: 1e-1 // EPSILON1;
};

// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/scale-to-geodetic-surface.js
/* eslint-disable */



const scale_to_geodetic_surface_scratchVector = new vector3_Vector3();
const scaleToGeodeticSurfaceIntersection = new vector3_Vector3();
const scaleToGeodeticSurfaceGradient = new vector3_Vector3();

// Scales the provided Cartesian position along the geodetic surface normal
// so that it is on the surface of this ellipsoid.  If the position is
// at the center of the ellipsoid, this function returns undefined.
function scaleToGeodeticSurface(cartesian, ellipsoid, result = new vector3_Vector3()) {
  const {oneOverRadii, oneOverRadiiSquared, centerToleranceSquared} = ellipsoid;

  scale_to_geodetic_surface_scratchVector.from(cartesian);

  const positionX = cartesian.x;
  const positionY = cartesian.y;
  const positionZ = cartesian.z;

  const oneOverRadiiX = oneOverRadii.x;
  const oneOverRadiiY = oneOverRadii.y;
  const oneOverRadiiZ = oneOverRadii.z;

  const x2 = positionX * positionX * oneOverRadiiX * oneOverRadiiX;
  const y2 = positionY * positionY * oneOverRadiiY * oneOverRadiiY;
  const z2 = positionZ * positionZ * oneOverRadiiZ * oneOverRadiiZ;

  // Compute the squared ellipsoid norm.
  const squaredNorm = x2 + y2 + z2;
  const ratio = Math.sqrt(1.0 / squaredNorm);

  // When very close to center or at center
  if (!Number.isFinite(ratio)) {
    return undefined;
  }

  // As an initial approximation, assume that the radial intersection is the projection point.
  const intersection = scaleToGeodeticSurfaceIntersection;
  intersection.copy(cartesian).scale(ratio);

  // If the position is near the center, the iteration will not converge.
  if (squaredNorm < centerToleranceSquared) {
    return intersection.to(result);
  }

  const oneOverRadiiSquaredX = oneOverRadiiSquared.x;
  const oneOverRadiiSquaredY = oneOverRadiiSquared.y;
  const oneOverRadiiSquaredZ = oneOverRadiiSquared.z;

  // Use the gradient at the intersection point in place of the true unit normal.
  // The difference in magnitude will be absorbed in the multiplier.
  const gradient = scaleToGeodeticSurfaceGradient;
  gradient.set(
    intersection.x * oneOverRadiiSquaredX * 2.0,
    intersection.y * oneOverRadiiSquaredY * 2.0,
    intersection.z * oneOverRadiiSquaredZ * 2.0
  );

  // Compute the initial guess at the normal vector multiplier, lambda.
  let lambda = ((1.0 - ratio) * cartesian.len()) / (0.5 * gradient.len());
  let correction = 0.0;

  let xMultiplier;
  let yMultiplier;
  let zMultiplier;
  let func;

  do {
    lambda -= correction;

    xMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredX);
    yMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredY);
    zMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredZ);

    const xMultiplier2 = xMultiplier * xMultiplier;
    const yMultiplier2 = yMultiplier * yMultiplier;
    const zMultiplier2 = zMultiplier * zMultiplier;

    const xMultiplier3 = xMultiplier2 * xMultiplier;
    const yMultiplier3 = yMultiplier2 * yMultiplier;
    const zMultiplier3 = zMultiplier2 * zMultiplier;

    func = x2 * xMultiplier2 + y2 * yMultiplier2 + z2 * zMultiplier2 - 1.0;

    // "denominator" here refers to the use of this expression in the velocity and acceleration
    // computations in the sections to follow.
    const denominator =
      x2 * xMultiplier3 * oneOverRadiiSquaredX +
      y2 * yMultiplier3 * oneOverRadiiSquaredY +
      z2 * zMultiplier3 * oneOverRadiiSquaredZ;

    const derivative = -2.0 * denominator;

    correction = func / derivative;
  } while (Math.abs(func) > math_utils.EPSILON12);

  return scale_to_geodetic_surface_scratchVector.scale([xMultiplier, yMultiplier, zMultiplier]).to(result);
}

// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/ellipsoid-transform.js


const EPSILON14 = 1e-14;
// Contains functions for transforming positions to reference frames.

// Caclulate third axis from given two axii
const VECTOR_PRODUCT_LOCAL_FRAME = {
  up: {
    south: 'east',
    north: 'west',
    west: 'south',
    east: 'north'
  },
  down: {
    south: 'west',
    north: 'east',
    west: 'north',
    east: 'south'
  },
  south: {
    up: 'west',
    down: 'east',
    west: 'down',
    east: 'up'
  },
  north: {
    up: 'east',
    down: 'west',
    west: 'up',
    east: 'down'
  },
  west: {
    up: 'north',
    down: 'south',
    north: 'down',
    south: 'up'
  },
  east: {
    up: 'south',
    down: 'north',
    north: 'up',
    south: 'down'
  }
};

const degeneratePositionLocalFrame = {
  north: [-1, 0, 0],
  east: [0, 1, 0],
  up: [0, 0, 1],
  south: [1, 0, 0],
  west: [0, -1, 0],
  down: [0, 0, -1]
};

const scratchAxisVectors = {
  east: new vector3_Vector3(),
  north: new vector3_Vector3(),
  up: new vector3_Vector3(),
  west: new vector3_Vector3(),
  south: new vector3_Vector3(),
  down: new vector3_Vector3()
};

const scratchVector1 = new vector3_Vector3();
const scratchVector2 = new vector3_Vector3();
const scratchVector3 = new vector3_Vector3();

// Computes a 4x4 transformation matrix from a reference frame
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
// eslint-disable-next-line max-statements, max-params, complexity
function localFrameToFixedFrame(
  ellipsoid,
  firstAxis,
  secondAxis,
  thirdAxis,
  origin,
  result
) {
  const thirdAxisInferred =
    VECTOR_PRODUCT_LOCAL_FRAME[firstAxis] && VECTOR_PRODUCT_LOCAL_FRAME[firstAxis][secondAxis];
  // firstAxis and secondAxis must be east, north, up, west, south or down.');
  assert(thirdAxisInferred && (!thirdAxis || thirdAxis === thirdAxisInferred));

  let firstAxisVector;
  let secondAxisVector;
  let thirdAxisVector;

  // If x and y are zero, assume origin is at a pole, which is a special case.
  const atPole = equals(origin.x, 0.0, EPSILON14) && equals(origin.y, 0.0, EPSILON14);

  if (atPole) {
    // Look up axis value and adjust
    const sign = Math.sign(origin.z);

    firstAxisVector = scratchVector1.fromArray(degeneratePositionLocalFrame[firstAxis]);
    if (firstAxis !== 'east' && firstAxis !== 'west') {
      firstAxisVector.scale(sign);
    }

    secondAxisVector = scratchVector2.fromArray(degeneratePositionLocalFrame[secondAxis]);
    if (secondAxis !== 'east' && secondAxis !== 'west') {
      secondAxisVector.scale(sign);
    }

    thirdAxisVector = scratchVector3.fromArray(degeneratePositionLocalFrame[thirdAxis]);
    if (thirdAxis !== 'east' && thirdAxis !== 'west') {
      thirdAxisVector.scale(sign);
    }
  } else {
    // Calculate all axis
    const {up, east, north} = scratchAxisVectors;

    east.set(-origin.y, origin.x, 0.0).normalize();
    ellipsoid.geodeticSurfaceNormal(origin, up);
    north.copy(up).cross(east);

    const {down, west, south} = scratchAxisVectors;

    down.copy(up).scale(-1);
    west.copy(east).scale(-1);
    south.copy(north).scale(-1);

    // Pick three axis based on desired orientation
    firstAxisVector = scratchAxisVectors[firstAxis];
    secondAxisVector = scratchAxisVectors[secondAxis];
    thirdAxisVector = scratchAxisVectors[thirdAxis];
  }

  // TODO - assuming the result is column-major
  result[0] = firstAxisVector.x;
  result[1] = firstAxisVector.y;
  result[2] = firstAxisVector.z;
  result[3] = 0.0;
  result[4] = secondAxisVector.x;
  result[5] = secondAxisVector.y;
  result[6] = secondAxisVector.z;
  result[7] = 0.0;
  result[8] = thirdAxisVector.x;
  result[9] = thirdAxisVector.y;
  result[10] = thirdAxisVector.z;
  result[11] = 0.0;
  result[12] = origin.x;
  result[13] = origin.y;
  result[14] = origin.z;
  result[15] = 1.0;
  return result;
}

// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/ellipsoid.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */









const ellipsoid_scratchVector = new vector3_Vector3();
const scratchNormal = new vector3_Vector3();
const scratchK = new vector3_Vector3();
const scratchPosition = new vector3_Vector3();
const scratchHeight = new vector3_Vector3();

let wgs84;

// A quadratic surface defined in Cartesian coordinates by the equation
// <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
// to represent the shape of planetary bodies.
class ellipsoid_Ellipsoid {
  // An Ellipsoid instance initialized to the WGS84 standard.
  static get WGS84() {
    wgs84 = wgs84 || new ellipsoid_Ellipsoid(WGS84_RADIUS_X, WGS84_RADIUS_Y, WGS84_RADIUS_Z);
    return wgs84;
  }

  // Computes an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
  static fromVector3([x, y, z]) {
    return new ellipsoid_Ellipsoid(x, y, z);
  }

  constructor(x = 0.0, y = 0.0, z = 0.0) {
    assert(x >= 0.0);
    assert(y >= 0.0);
    assert(z >= 0.0);

    this.radii = new vector3_Vector3(x, y, z);

    this.radiiSquared = new vector3_Vector3(x * x, y * y, z * z);

    this.radiiToTheFourth = new vector3_Vector3(x * x * x * x, y * y * y * y, z * z * z * z);

    this.oneOverRadii = new vector3_Vector3(
      x === 0.0 ? 0.0 : 1.0 / x,
      y === 0.0 ? 0.0 : 1.0 / y,
      z === 0.0 ? 0.0 : 1.0 / z
    );

    this.oneOverRadiiSquared = new vector3_Vector3(
      x === 0.0 ? 0.0 : 1.0 / (x * x),
      y === 0.0 ? 0.0 : 1.0 / (y * y),
      z === 0.0 ? 0.0 : 1.0 / (z * z)
    );

    this.minimumRadius = Math.min(x, y, z);

    this.maximumRadius = Math.max(x, y, z);

    this.centerToleranceSquared = math_utils.EPSILON1;

    if (this.radiiSquared.z !== 0) {
      this.squaredXOverSquaredZ = this.radiiSquared.x / this.radiiSquared.z;
    }

    Object.freeze(this);
  }

  // Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
  equals(right) {
    return this === right || Boolean(right && this.radii.equals(right.radii));
  }

  // Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
  toString() {
    return this.radii.toString();
  }

  // Converts the provided cartographic to Cartesian representation.
  cartographicToCartesian(cartographic, result = new vector3_Vector3()) {
    const normal = scratchNormal;
    const k = scratchK;

    const [, , height] = cartographic;
    this.geodeticSurfaceNormalCartographic(cartographic, normal);
    k.copy(this.radiiSquared).scale(normal);

    const gamma = Math.sqrt(normal.dot(k));
    k.scale(1 / gamma);

    normal.scale(height);

    k.add(normal);

    return k.to(result);
  }

  // Converts the provided cartesian to cartographic (lng/lat/z) representation.
  // The cartesian is undefined at the center of the ellipsoid.
  cartesianToCartographic(cartesian, result = new vector3_Vector3()) {
    const point = this.scaleToGeodeticSurface(cartesian, scratchPosition);

    if (!point) {
      return undefined;
    }

    const normal = this.geodeticSurfaceNormal(point, scratchNormal);

    const h = scratchHeight;
    h.copy(cartesian).subtract(point);

    const longitude = Math.atan2(normal.y, normal.x);
    const latitude = Math.asin(normal.z);
    const height = Math.sign(vec3["c" /* dot */](h, cartesian)) * vec3["d" /* length */](h);

    return toCartographicFromRadians([longitude, latitude, height], result);
  }

  // Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
  // centered at the provided origin to the provided ellipsoid's fixed reference frame.
  eastNorthUpToFixedFrame(origin, result = new matrix4_Matrix4()) {
    return localFrameToFixedFrame(this, 'east', 'north', 'up', origin, result);
  }

  // Computes a 4x4 transformation matrix from a reference frame centered at
  // the provided origin to the ellipsoid's fixed reference frame.
  localFrameToFixedFrame(firstAxis, secondAxis, thirdAxis, origin, result = new matrix4_Matrix4()) {
    return localFrameToFixedFrame(this, firstAxis, secondAxis, thirdAxis, origin, result);
  }

  // Computes the unit vector directed from the center of this ellipsoid toward
  // the provided Cartesian position.
  geocentricSurfaceNormal(cartesian) {
    return ellipsoid_scratchVector.from(cartesian).normalize();
  }

  // Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
  geodeticSurfaceNormalCartographic(cartographic, result = new vector3_Vector3()) {
    const cartographicVectorRadians = fromCartographicToRadians(cartographic);

    const longitude = cartographicVectorRadians[0];
    const latitude = cartographicVectorRadians[1];

    const cosLatitude = Math.cos(latitude);

    ellipsoid_scratchVector
      .set(cosLatitude * Math.cos(longitude), cosLatitude * Math.sin(longitude), Math.sin(latitude))
      .normalize();

    return ellipsoid_scratchVector.to(result);
  }

  // Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
  geodeticSurfaceNormal(cartesian, result = new vector3_Vector3()) {
    return ellipsoid_scratchVector
      .from(cartesian)
      .scale(this.oneOverRadiiSquared)
      .normalize()
      .to(result);
  }

  // Scales the provided Cartesian position along the geodetic surface normal
  // so that it is on the surface of this ellipsoid.  If the position is
  // at the center of the ellipsoid, this function returns undefined.
  scaleToGeodeticSurface(cartesian, result) {
    return scaleToGeodeticSurface(cartesian, this, result);
  }

  // Scales the provided Cartesian position along the geocentric surface normal
  // so that it is on the surface of this ellipsoid.
  scaleToGeocentricSurface(cartesian, result = new vector3_Vector3()) {
    scratchPosition.from(cartesian);

    const positionX = scratchPosition.x;
    const positionY = scratchPosition.y;
    const positionZ = scratchPosition.z;
    const oneOverRadiiSquared = this.oneOverRadiiSquared;

    const beta =
      1.0 /
      Math.sqrt(
        positionX * positionX * oneOverRadiiSquared.x +
          positionY * positionY * oneOverRadiiSquared.y +
          positionZ * positionZ * oneOverRadiiSquared.z
      );

    return scratchPosition.multiplyScalar(beta).to(result);
  }

  // Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
  // its components by the result of `Ellipsoid#oneOverRadii`
  transformPositionToScaledSpace(position, result = new vector3_Vector3()) {
    return scratchPosition
      .from(position)
      .scale(this.oneOverRadii)
      .to(result);
  }

  // Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
  // its components by the result of `Ellipsoid#radii`.
  transformPositionFromScaledSpace(position, result = new vector3_Vector3()) {
    return scratchPosition
      .from(position)
      .scale(this.radii)
      .to(result);
  }

  // Computes a point which is the intersection of the surface normal with the z-axis.
  getSurfaceNormalIntersectionWithZAxis(position, buffer = 0.0, result = new vector3_Vector3()) {
    // Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)
    assert(equals(this.radii.x, this.radii.y, math_utils.EPSILON15));
    assert(this.radii.z > 0);

    scratchPosition.from(position);
    const z = scratchPosition.z * (1 - this.squaredXOverSquaredZ);

    if (Math.abs(z) >= this.radii.z - buffer) {
      return undefined;
    }

    return scratchPosition.set(0.0, 0.0, z).to(result);
  }
}

// CONCATENATED MODULE: ../modules/geospatial/src/index.js


// CONCATENATED MODULE: ../modules/geospatial/test/ellipsoid/ellipsoid.bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md



// import {externalVector3ToArray, setExternalVector3} from '@math.gl/geospatial/type-utils';
// import * as vec3 from 'gl-matrix/vec3';

const ellipsoid_bench_ellipsoid = ellipsoid_Ellipsoid.WGS84;
const spaceCartesian = new vector3_Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);
const spaceCartographic = new vector3_Vector3(-45.0, 15.0, 330000.0);
// const spaceCartographicObject = {x: -45.0, y: 15.0, z: 330000.0};
const resultVector = new vector3_Vector3();
// const resultArray = [0, 0, 0];
// const resultObject = {x: 0, y: 0, z: 0};

const ellipsoid_bench_origin = new vector3_Vector3(1.0, 0.0, 0.0);
// const northPole = new Vector3(0.0, 0.0, 1.0);
const resultMatrix = new matrix4_Matrix4();

function ellipsoidBench(suite) {
  // const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);

  suite
    .group('@math.gl/geospatial Ellipsoid')
    .add('#cartographicToCartesian(=>Vector3)', () =>
      ellipsoid_bench_ellipsoid.cartographicToCartesian(spaceCartographic, resultVector)
    )
    .add('#cartesianToCartographic(=>Vector3)', () =>
      ellipsoid_bench_ellipsoid.cartesianToCartographic(spaceCartesian, resultVector)
    )
    .add('#eastNorthUpToFixedFrame()', () =>
      ellipsoid_Ellipsoid.WGS84.eastNorthUpToFixedFrame(ellipsoid_bench_origin, resultMatrix)
    )
    // .add('#eastNorthUpToFixedFrame(Pole)', () =>
    //   Ellipsoid.WGS84.eastNorthUpToFixedFrame(northPole, resultMatrix)
    // )

    // .add('#cartographicToCartesian(=>Object)', () =>
    //   ellipsoid.cartographicToCartesian(spaceCartographic, resultObject)
    // )
    // .add('#geodSurfNormalCarto(=>Object)', () =>
    //   ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographicObject, resultObject)
    // )

    .add('#geodSurfNormal(=>Vector3)', () =>
      ellipsoid_bench_ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic, resultVector)
    )
    // .add('#geodSurfNormalCarto() Opt', () =>
    //   geodeticSurfaceNormalCartographicOptimized(spaceCartographic, resultArray)
    // )

    .add('#geodeticSurfaceNormal(=>Vector3)', () =>
      ellipsoid_bench_ellipsoid.geodeticSurfaceNormal(spaceCartesian, resultVector)
    )

    .add('#scaleToGeocentricSurface(=>Vector3)', () =>
      ellipsoid_bench_ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultVector)
    )
    // .add('#scaleToGeocentricSurface(=>Object)', () =>
    //   ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultObject)
    // )
    ;

  return suite;
}

/*
// Hand optimized version of Ellipsoid.geodeticSurfaceNormalCartographic
// Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
function geodeticSurfaceNormalCartographicOptimized(cartographic, result = new Vector3()) {
  // const longitude = cartographic.longitude;
  // const latitude = cartographic.latitude;

  // const longitude = toRadians(cartographic[0]);
  // const latitude = toRadians(cartographic[1]);
  const longitude = cartographic[0];
  const latitude = cartographic[1];

  const cosLatitude = Math.cos(latitude);

  const x = cosLatitude * Math.cos(longitude);
  const y = cosLatitude * Math.sin(longitude);
  const z = Math.sin(latitude);

  result.x = x;
  result.y = y;
  result.z = z;

  return vec3.normalize(result, result);
}
*/

// CONCATENATED MODULE: ../modules/geospatial/test/bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md






class bench_ObjectVector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const bench_array = [0, 0, 0];
const bench_float32Array = new Float32Array([0, 0, 0]);
const bench_objectVector = new bench_ObjectVector();
const bench_vector = new vector3_Vector3();
const bench_vector3 = new vector3_Vector3();

function geospatialBench(suite, addReferenceBenchmarks) {
  suite
    .group('Cartographic Type Conversion Cost')
    .add('fromCartographic#Vector3', () => fromCartographic(bench_vector3, bench_vector))
    .add('fromCartographicToRadians#Vector3', () => fromCartographicToRadians(bench_vector3, bench_vector))
    .add('toCartographicFromRadians#Vector3', () => toCartographicFromRadians(bench_vector3, bench_vector))
    ;

  if (addReferenceBenchmarks) {
    suite
      .add('fromCartographicToRadians#Object', () => fromCartographicToRadians(bench_vector3, bench_objectVector))
      .add('toCartographicFromRadians#Object', () =>
        toCartographicFromRadians(bench_vector3, bench_objectVector)
      )
      .add('fromCartographicToRadians#Array', () => fromCartographicToRadians(bench_vector3, bench_array))
      .add('fromCartographicToRadians#Float32Array', () =>
        fromCartographicToRadians(bench_vector3, bench_float32Array)
      )
      .add('toCartographicFromRadians#Array', () => toCartographicFromRadians(bench_vector3, bench_array))
      .add('toCartographicFromRadians#Float32Array', () =>
        toCartographicFromRadians(bench_vector3, bench_float32Array)
      );
  }

  ellipsoidBench(suite);

  return suite;
}

// CONCATENATED MODULE: ../modules/culling/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

const INTERSECT = Object.freeze({
  OUTSIDE: -1, // Represents that an object is not contained within the frustum.
  INTERSECTING: 0, // Represents that an object intersects one of the frustum's planes.
  INSIDE: 1 // Represents that an object is fully within the frustum.
});

const Intersect = INTERSECT;

// CONCATENATED MODULE: ../modules/culling/src/lib/bounding-sphere.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */




// import Rectangle from './rectangle';

// const defaultProjection = new GeographicProjection();
// const fromRectangle2DLowerLeft = new Vector3();
// const fromRectangle2DUpperRight = new Vector3();
// const fromRectangle2DSouthwest = new Cartographic();
// const fromRectangle2DNortheast = new Cartographic();

// const fromRectangle3DScratch = [];

const bounding_sphere_scratchVector = new vector3_Vector3();
const bounding_sphere_scratchVector2 = new vector3_Vector3();

class bounding_sphere_BoundingSphere {
  constructor(center = [0, 0, 0], radius = 0.0) {
    this.radius = -0;
    this.center = new vector3_Vector3();
    this.fromCenterRadius(center, radius);
  }

  fromCenterRadius(center, radius) {
    this.center.from(center);
    this.radius = radius;
    return this;
  }

  // Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
  // tighly and fully encompases the box.
  fromCornerPoints(corner, oppositeCorner) {
    oppositeCorner = bounding_sphere_scratchVector.from(oppositeCorner);
    this.center = new vector3_Vector3()
      .from(corner)
      .add(oppositeCorner)
      .scale(0.5);
    this.radius = this.center.distance(oppositeCorner);
    return this;
  }

  // Compares the provided BoundingSphere componentwise
  equals(right) {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.radius === right.radius)
    );
  }

  // Duplicates a BoundingSphere instance.
  clone() {
    return new bounding_sphere_BoundingSphere(this.center, this.radius);
  }

  // Computes a bounding sphere that contains both the left and right bounding spheres.
  union(boundingSphere) {
    const leftCenter = this.center;
    const leftRadius = this.radius;
    const rightCenter = boundingSphere.center;
    const rightRadius = boundingSphere.radius;

    const toRightCenter = bounding_sphere_scratchVector.copy(rightCenter).subtract(leftCenter);
    const centerSeparation = toRightCenter.magnitude();

    if (leftRadius >= centerSeparation + rightRadius) {
      // Left sphere wins.
      return this.clone();
    }

    if (rightRadius >= centerSeparation + leftRadius) {
      // Right sphere wins.
      return boundingSphere.clone();
    }

    // There are two tangent points, one on far side of each sphere.
    const halfDistanceBetweenTangentPoints = (leftRadius + centerSeparation + rightRadius) * 0.5;

    // Compute the center point halfway between the two tangent points.
    bounding_sphere_scratchVector2
      .copy(toRightCenter)
      .scale((-leftRadius + halfDistanceBetweenTangentPoints) / centerSeparation)
      .add(leftCenter);

    this.center.copy(bounding_sphere_scratchVector2);
    this.radius = halfDistanceBetweenTangentPoints;

    return this;
  }

  // Computes a bounding sphere by enlarging the provided sphere to contain the provided point.
  expand(point) {
    point = bounding_sphere_scratchVector.from(point);
    const radius = point.subtract(this.center).magnitude();
    if (radius > this.radius) {
      this.radius = radius;
    }
    return this;
  }

  // Determines which side of a plane a sphere is located.
  intersectPlane(plane) {
    var center = this.center;
    var radius = this.radius;
    var normal = plane.normal;
    var distanceToPlane = normal.dot(center) + plane.distance;

    // The center point is negative side of the plane normal
    if (distanceToPlane < -radius) {
      return Intersect.OUTSIDE;
    }
    // The center point is positive side of the plane, but radius extends beyond it; partial overlap
    if (distanceToPlane < radius) {
      return Intersect.INTERSECTING;
    }
    // The center point and radius is positive side of the plane
    return Intersect.INSIDE;
  }

  // Applies a 4x4 affine transformation matrix to a bounding sphere.
  //    *
  // @param {BoundingSphere} sphere The bounding sphere to apply the transformation to.
  // @param {Matrix4} transform The transformation matrix to apply to the bounding sphere.
  // @returns {BoundingSphere} The modified this parameter or a new BoundingSphere instance if none was provided.
  transform(transform) {
    this.center.transform(transform);
    const scale = mat4["d" /* getScaling */](bounding_sphere_scratchVector, transform);
    this.radius = Math.max(scale[0], Math.max(scale[1], scale[2])) * this.radius;
    return this;
  }

  // Computes the estimated distance squared from the closest point on a bounding sphere to a point.
  distanceSquaredTo(point) {
    point = bounding_sphere_scratchVector.from(point);
    const delta = point.subtract(this.center);
    return delta.lengthSquared() - this.radius * this.radius;
  }
}

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat3.js
var mat3 = __webpack_require__(213);

// CONCATENATED MODULE: ../modules/core/src/classes/matrix3.js
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









const matrix3_IDENTITY = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
const matrix3_ZERO = Object.freeze([0, 0, 0, 0, 0, 0, 0, 0, 0]);

const matrix3_INDICES = Object.freeze({
  COL0ROW0: 0,
  COL0ROW1: 1,
  COL0ROW2: 2,
  COL1ROW0: 3,
  COL1ROW1: 4,
  COL1ROW2: 5,
  COL2ROW0: 6,
  COL2ROW1: 7,
  COL2ROW2: 8
});

const matrix3_constants = {};

class matrix3_Matrix3 extends matrix_Matrix {
  static get IDENTITY() {
    matrix3_constants.IDENTITY = matrix3_constants.IDENTITY || Object.freeze(new matrix3_Matrix3(matrix3_IDENTITY));
    return matrix3_constants.IDENTITY;
  }

  static get ZERO() {
    matrix3_constants.ZERO = matrix3_constants.ZERO || Object.freeze(new matrix3_Matrix3(matrix3_ZERO));
    return matrix3_constants.ZERO;
  }

  get ELEMENTS() {
    return 9;
  }

  get RANK() {
    return 3;
  }

  get INDICES() {
    return matrix3_INDICES;
  }

  constructor(array) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0);
    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    return this.check();
  }

  // accepts column major order, stores in column major order
  // eslint-disable-next-line max-params
  set(m00, m10, m20, m01, m11, m21, m02, m12, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  // accepts row major order, stores as column major
  // eslint-disable-next-line max-params
  setRowMajor(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  // Accessors

  determinant() {
    return mat3["a" /* determinant */](this);
  }

  // Constructors

  identity() {
    return this.copy(matrix3_IDENTITY);
  }

  // Calculates a 3x3 matrix from the given quaternion
  // q quat  Quaternion to create matrix from
  fromQuaternion(q) {
    mat3["b" /* fromQuat */](this, q);
    return this.check();
  }

  // Modifiers

  transpose() {
    mat3["h" /* transpose */](this, this);
    return this.check();
  }

  invert() {
    mat3["c" /* invert */](this, this);
    return this.check();
  }

  // Operations

  multiplyLeft(a) {
    mat3["d" /* multiply */](this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    mat3["d" /* multiply */](this, this, a);
    return this.check();
  }

  rotate(radians) {
    mat3["e" /* rotate */](this, this, radians);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      mat3["f" /* scale */](this, this, factor);
    } else {
      mat3["f" /* scale */](this, this, [factor, factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    mat3["g" /* translate */](this, this, vec);
    return this.check();
  }

  // Transforms

  transform(vector, result) {
    switch (vector.length) {
      case 2:
        result = vec2["c" /* transformMat3 */](result || [-0, -0], vector, this);
        break;
      case 3:
        vec3["h" /* transformMat3 */](result || [-0, -0, -0], vector, this);
        break;
      case 4:
        vec4_transformMat3(result || [-0, -0, -0, -0], vector, this);
        break;
      default:
        throw new Error('Illegal vector');
    }
    checkVector(result, vector.length);
    return result;
  }

  // DEPRECATED IN 3.0

  transformVector(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector2(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  transformVector3(vector, result) {
    deprecated('Matrix3.transformVector');
    return this.transform(vector, result);
  }

  // Deprecations in v3.0
}

// CONCATENATED MODULE: ../modules/culling/src/algorithms/compute-eigen-decomposition.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md



const scratchMatrix = new matrix3_Matrix3();

const scratchUnitary = new matrix3_Matrix3();
const scratchDiagonal = new matrix3_Matrix3();

const jMatrix = new matrix3_Matrix3();
const jMatrixTranspose = new matrix3_Matrix3();

/**
 * Computes the eigenvectors and eigenvalues of a symmetric matrix.
 * <p>
 * Returns a diagonal matrix and unitary matrix such that:
 * <code>matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)</code>
 * </p>
 * <p>
 * The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
 * of the unitary matrix are the corresponding eigenvectors.
 * </p>
 *
 * @param {Matrix3} matrix The matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
 * @param {Object} [result] An object with unitary and diagonal properties which are matrices onto which to store the result.
 * @returns {Object} An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
 *
 * @example
 * const a = //... symmetric matrix
 * const result = {
 *   unitary : new Matrix3(),
 *   diagonal : new Matrix3()
 * };
 * computeEigenDecomposition(a, result);
 *
 * const unitaryTranspose = Matrix3.transpose(result.unitary, new Matrix3());
 * const b = Matrix3.multiply(result.unitary, result.diagonal, new Matrix3());
 * Matrix3.multiply(b, unitaryTranspose, b); // b is now equal to a
 *
 * const lambda = result.diagonal.getColumn(0, new Vector3()).x;  // first eigenvalue
 * const v = result.unitary.getColumn(0, new Vector3());          // first eigenvector
 * const c = v.multiplyByScalar(lambda);                          // equal to v.transformByMatrix3(a)
 */

// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.3 The Classical Jacobi Algorithm
function computeEigenDecomposition(matrix, result = {}) {
  const EIGEN_TOLERANCE = math_utils.EPSILON20;
  const EIGEN_MAX_SWEEPS = 10;

  let count = 0;
  let sweep = 0;

  const unitaryMatrix = scratchUnitary;
  const diagonalMatrix = scratchDiagonal;

  unitaryMatrix.identity();
  diagonalMatrix.copy(matrix);

  const epsilon = EIGEN_TOLERANCE * computeFrobeniusNorm(diagonalMatrix);

  while (sweep < EIGEN_MAX_SWEEPS && offDiagonalFrobeniusNorm(diagonalMatrix) > epsilon) {
    shurDecomposition(diagonalMatrix, jMatrix);

    jMatrixTranspose.copy(jMatrix).transpose();

    diagonalMatrix.multiplyRight(jMatrix);
    diagonalMatrix.multiplyLeft(jMatrixTranspose);
    unitaryMatrix.multiplyRight(jMatrix);

    if (++count > 2) {
      ++sweep;
      count = 0;
    }
  }

  result.unitary = unitaryMatrix.toTarget(result.unitary);
  result.diagonal = diagonalMatrix.toTarget(result.diagonal);

  return result;
}

function computeFrobeniusNorm(matrix) {
  let norm = 0.0;
  for (let i = 0; i < 9; ++i) {
    const temp = matrix[i];
    norm += temp * temp;
  }
  return Math.sqrt(norm);
}

const rowVal = [1, 0, 0];
const colVal = [2, 2, 1];

// Computes the "off-diagonal" Frobenius norm.
// Assumes matrix is symmetric.
function offDiagonalFrobeniusNorm(matrix) {
  let norm = 0.0;
  for (let i = 0; i < 3; ++i) {
    const temp = matrix[scratchMatrix.getElementIndex(colVal[i], rowVal[i])];
    norm += 2.0 * temp * temp;
  }
  return Math.sqrt(norm);
}

// The routine takes a matrix, which is assumed to be symmetric, and
// finds the largest off-diagonal term, and then creates
// a matrix (result) which can be used to help reduce it
//
// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.2 The 2by2 Symmetric Schur Decomposition.
//
// eslint-disable-next-line max-statements
function shurDecomposition(matrix, result) {
  const tolerance = math_utils.EPSILON15;

  let maxDiagonal = 0.0;
  let rotAxis = 1;

  // find pivot (rotAxis) based on max diagonal of matrix
  for (let i = 0; i < 3; ++i) {
    const temp = Math.abs(matrix[scratchMatrix.getElementIndex(colVal[i], rowVal[i])]);
    if (temp > maxDiagonal) {
      rotAxis = i;
      maxDiagonal = temp;
    }
  }

  const p = rowVal[rotAxis];
  const q = colVal[rotAxis];

  let c = 1.0;
  let s = 0.0;

  if (Math.abs(matrix[scratchMatrix.getElementIndex(q, p)]) > tolerance) {
    const qq = matrix[scratchMatrix.getElementIndex(q, q)];
    const pp = matrix[scratchMatrix.getElementIndex(p, p)];
    const qp = matrix[scratchMatrix.getElementIndex(q, p)];

    const tau = (qq - pp) / 2.0 / qp;
    let t;

    if (tau < 0.0) {
      t = -1.0 / (-tau + Math.sqrt(1.0 + tau * tau));
    } else {
      t = 1.0 / (tau + Math.sqrt(1.0 + tau * tau));
    }

    c = 1.0 / Math.sqrt(1.0 + t * t);
    s = t * c;
  }

  // Copy into result
  matrix3_Matrix3.IDENTITY.to(result);
  result[scratchMatrix.getElementIndex(p, p)] = result[scratchMatrix.getElementIndex(q, q)] = c;
  result[scratchMatrix.getElementIndex(q, p)] = s;
  result[scratchMatrix.getElementIndex(p, q)] = -s;

  return result;
}

// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-box-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md




const bounding_box_from_points_scratchVector2 = new vector3_Vector3();

const bounding_box_from_points_scratchVector3 = new vector3_Vector3();

const scratchVector4 = new vector3_Vector3();

const scratchVector5 = new vector3_Vector3();

const scratchVector6 = new vector3_Vector3();

const scratchCovarianceResult = new matrix3_Matrix3();

const scratchEigenResult = {
  diagonal: new matrix3_Matrix3(),
  unitary: new matrix3_Matrix3()
};

// Computes an instance of an OrientedBoundingBox of the given positions.
// This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
// Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
// eslint-disable-next-line max-statements
function makeOrientedBoundingBoxfromPoints(positions, result) {
  if (!positions || positions.length === 0) {
    result.halfAxes = new matrix3_Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    result.center = new vector3_Vector3();
    return result;
  }

  const length = positions.length;
  const meanPoint = new vector3_Vector3(0, 0, 0);
  for (const position of positions) {
    meanPoint.add(position);
  }
  const invLength = 1.0 / length;
  meanPoint.multiplyByScalar(invLength);

  let exx = 0.0;
  let exy = 0.0;
  let exz = 0.0;
  let eyy = 0.0;
  let eyz = 0.0;
  let ezz = 0.0;

  for (const position of positions) {
    const p = bounding_box_from_points_scratchVector2.copy(position).subtract(meanPoint);
    exx += p.x * p.x;
    exy += p.x * p.y;
    exz += p.x * p.z;
    eyy += p.y * p.y;
    eyz += p.y * p.z;
    ezz += p.z * p.z;
  }

  exx *= invLength;
  exy *= invLength;
  exz *= invLength;
  eyy *= invLength;
  eyz *= invLength;
  ezz *= invLength;

  const covarianceMatrix = scratchCovarianceResult;
  covarianceMatrix[0] = exx;
  covarianceMatrix[1] = exy;
  covarianceMatrix[2] = exz;
  covarianceMatrix[3] = exy;
  covarianceMatrix[4] = eyy;
  covarianceMatrix[5] = eyz;
  covarianceMatrix[6] = exz;
  covarianceMatrix[7] = eyz;
  covarianceMatrix[8] = ezz;

  const {unitary} = computeEigenDecomposition(covarianceMatrix, scratchEigenResult);
  const rotation = result.halfAxes.copy(unitary);

  let v1 = rotation.getColumn(0, scratchVector4);
  let v2 = rotation.getColumn(1, scratchVector5);
  let v3 = rotation.getColumn(2, scratchVector6);

  let u1 = -Number.MAX_VALUE;
  let u2 = -Number.MAX_VALUE;
  let u3 = -Number.MAX_VALUE;
  let l1 = Number.MAX_VALUE;
  let l2 = Number.MAX_VALUE;
  let l3 = Number.MAX_VALUE;

  for (const position of positions) {
    u1 = Math.max(position.dot(v1), u1);
    u2 = Math.max(position.dot(v2), u2);
    u3 = Math.max(position.dot(v3), u3);

    l1 = Math.min(position.dot(v1), l1);
    l2 = Math.min(position.dot(v2), l2);
    l3 = Math.min(position.dot(v3), l3);
  }

  v1 = v1.multiplyByScalar(0.5 * (l1 + u1));
  v2 = v2.multiplyByScalar(0.5 * (l2 + u2));
  v3 = v3.multiplyByScalar(0.5 * (l3 + u3));

  result.center
    .copy(v1)
    .add(v2)
    .add(v3);

  const scale = bounding_box_from_points_scratchVector3.set(u1 - l1, u2 - l2, u3 - l3).multiplyByScalar(0.5);
  result.halfAxes.multiplyByScalar(scale);

  return result;
}

// CONCATENATED MODULE: ../modules/culling/src/lib/oriented-bounding-box.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md





const oriented_bounding_box_scratchVector = new vector3_Vector3();

const scratchOffset = new vector3_Vector3();
const scratchVectorU = new vector3_Vector3();
const scratchVectorV = new vector3_Vector3();
const scratchVectorW = new vector3_Vector3();
const scratchPPrime = new vector3_Vector3();
const scratchCorner = new vector3_Vector3();
const scratchToCenter = new vector3_Vector3();

const fromOrientedBoundingBoxScratchU = new vector3_Vector3();
const fromOrientedBoundingBoxScratchV = new vector3_Vector3();
const fromOrientedBoundingBoxScratchW = new vector3_Vector3();

const MATRIX3 = {
  COLUMN0ROW0: 0,
  COLUMN0ROW1: 1,
  COLUMN0ROW2: 2,
  COLUMN1ROW0: 3,
  COLUMN1ROW1: 4,
  COLUMN1ROW2: 5,
  COLUMN2ROW0: 6,
  COLUMN2ROW1: 7,
  COLUMN2ROW2: 8
};

class oriented_bounding_box_OrientedBoundingBox {
  // An OrientedBoundingBox of some object is a closed and convex cuboid. It can provide a tighter bounding volume than {@link BoundingSphere} or {@link AxisAlignedBoundingBox} in many cases.
  constructor(center = [0, 0, 0], halfAxes = [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    this.center = new vector3_Vector3().from(center);
    this.halfAxes = new matrix3_Matrix3(halfAxes);
  }

  // Duplicates a OrientedBoundingBox instance.
  clone(result) {
    return new oriented_bounding_box_OrientedBoundingBox(this.center, this.halfAxes);
  }

  fromPoints(points, result = new oriented_bounding_box_OrientedBoundingBox()) {
    return makeOrientedBoundingBoxfromPoints(points, result);
  }

  // Compares the provided OrientedBoundingBox componentwise and returns
  equals(right) {
    return (
      this === right ||
      (Boolean(right) && this.center.equals(right.center) && this.halfAxes.equals(right.halfAxes))
    );
  }

  // Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.
  getBoundingSphere(result = new bounding_sphere_BoundingSphere()) {
    const halfAxes = this.halfAxes;
    const u = halfAxes.getColumn(0, fromOrientedBoundingBoxScratchU);
    const v = halfAxes.getColumn(1, fromOrientedBoundingBoxScratchV);
    const w = halfAxes.getColumn(2, fromOrientedBoundingBoxScratchW);

    // Calculate "corner" vector
    const cornerVector = oriented_bounding_box_scratchVector
      .copy(u)
      .add(v)
      .add(w);

    result.center.copy(this.center);
    result.radius = cornerVector.magnitude();

    return result;
  }

  /**
   * Determines which side of a plane the oriented bounding box is located.
   *
   * @param {OrientedBoundingBox} box The oriented bounding box to test.
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is on the opposite side, and {@link Intersect.INTERSECTING} if the box intersects the plane.
   */
  intersectPlane(plane) {
    const center = this.center;
    const normal = plane.normal;
    const halfAxes = this.halfAxes;

    const normalX = normal.x;
    const normalY = normal.y;
    const normalZ = normal.z;

    // Plane is used as if it is its normal; the first three components are assumed to be normalized
    const radEffective =
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN0ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN0ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN0ROW2]
      ) +
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN1ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN1ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN1ROW2]
      ) +
      Math.abs(
        normalX * halfAxes[MATRIX3.COLUMN2ROW0] +
          normalY * halfAxes[MATRIX3.COLUMN2ROW1] +
          normalZ * halfAxes[MATRIX3.COLUMN2ROW2]
      );
    const distanceToPlane = normal.dot(center) + plane.distance;

    if (distanceToPlane <= -radEffective) {
      // The entire box is on the negative side of the plane normal
      return Intersect.OUTSIDE;
    } else if (distanceToPlane >= radEffective) {
      // The entire box is on the positive side of the plane normal
      return Intersect.INSIDE;
    }
    return Intersect.INTERSECTING;
  }

  // Computes the estimated distance from the closest point on a bounding box to a point.
  distanceTo(point) {
    return Math.sqrt(this.distanceSquaredTo(point));
  }

  // Computes the estimated distance squared from the closest point on a bounding box to a point.
  // See Geometric Tools for Computer Graphics 10.4.2

  // eslint-disable-next-line max-statements
  distanceSquaredTo(point) {
    const offset = scratchOffset.copy(point).subtract(this.center);

    const halfAxes = this.halfAxes;
    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    const uHalf = u.magnitude();
    const vHalf = v.magnitude();
    const wHalf = w.magnitude();

    u.normalize();
    v.normalize();
    w.normalize();

    const pPrime = scratchPPrime;
    pPrime.x = offset.dot(u);
    pPrime.y = offset.dot(v);
    pPrime.z = offset.dot(w);

    let distanceSquared = 0.0;
    let d;

    if (pPrime.x < -uHalf) {
      d = pPrime.x + uHalf;
      distanceSquared += d * d;
    } else if (pPrime.x > uHalf) {
      d = pPrime.x - uHalf;
      distanceSquared += d * d;
    }

    if (pPrime.y < -vHalf) {
      d = pPrime.y + vHalf;
      distanceSquared += d * d;
    } else if (pPrime.y > vHalf) {
      d = pPrime.y - vHalf;
      distanceSquared += d * d;
    }

    if (pPrime.z < -wHalf) {
      d = pPrime.z + wHalf;
      distanceSquared += d * d;
    } else if (pPrime.z > wHalf) {
      d = pPrime.z - wHalf;
      distanceSquared += d * d;
    }

    return distanceSquared;
  }

  // The distances calculated by the vector from the center of the bounding box
  // to position projected onto direction.

  // eslint-disable-next-line max-statements
  computePlaneDistances(position, direction, result = [[], []]) {
    let minDist = Number.POSITIVE_INFINITY;
    let maxDist = Number.NEGATIVE_INFINITY;

    const center = this.center;
    const halfAxes = this.halfAxes;

    const u = halfAxes.getColumn(0, scratchVectorU);
    const v = halfAxes.getColumn(1, scratchVectorV);
    const w = halfAxes.getColumn(2, scratchVectorW);

    // project first corner
    const corner = scratchCorner
      .copy(u)
      .add(v)
      .add(w)
      .add(center);

    const toCenter = scratchToCenter.copy(corner).subtract(position);
    let mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project second corner
    corner
      .copy(center)
      .add(u)
      .add(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project third corner
    corner
      .copy(center)
      .add(u)
      .subtract(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fourth corner
    corner
      .copy(center)
      .add(u)
      .subtract(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project fifth corner
    center
      .copy(corner)
      .subtract(u)
      .add(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project sixth corner
    center
      .copy(corner)
      .subtract(u)
      .add(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project seventh corner
    center
      .copy(corner)
      .subtract(u)
      .subtract(v)
      .add(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    // project eighth corner
    center
      .copy(corner)
      .subtract(u)
      .subtract(v)
      .subtract(w);

    toCenter.copy(corner).subtract(position);
    mag = direction.dot(toCenter);

    minDist = Math.min(mag, minDist);
    maxDist = Math.max(mag, maxDist);

    result.start = minDist;
    result.stop = maxDist;
    return result;
  }

  getTransform() {
    // const modelMatrix = Matrix4.fromRotationTranslation(this.boundingVolume.halfAxes, this.boundingVolume.center);
    // return modelMatrix;
  }
}

// CONCATENATED MODULE: ../modules/culling/src/lib/plane.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */


const plane_scratchNormal = new vector3_Vector3();
const plane_scratchVector3 = new vector3_Vector3();
const plane_scratchPosition = new vector3_Vector3();

// A plane in Hessian Normal Form
class plane_Plane {
  constructor(normal = [0, 0, 1], distance = 0) {
    assert(Number.isFinite(distance));
    this.normal = new vector3_Vector3().from(normal).normalize();
    this.distance = distance;
  }

  // Creates a plane from a normal and a point on the plane.
  fromPointNormal(point, normal) {
    point = plane_scratchVector3.from(point);

    this.normal.from(normal).normalize();
    const distance = -this.normal.dot(point);
    this.distance = distance;

    return this;
  }

  // Creates a plane from the general equation
  fromCoefficients(a, b, c, d) {
    this.normal.set(a, b, c);
    assert(this.normal.len() === 1);
    this.distance = d;
    return this;
  }

  // Duplicates a Plane instance.
  clone(plane) {
    return new plane_Plane(this.normal, this.distance);
  }

  // Compares the provided Planes by normal and distance
  equals(right) {
    return equals(this.distance, right.distance) && equals(this.normal, right.normal);
  }

  // Computes the signed shortest distance of a point to a plane.
  // The sign of the distance determines which side of the plane the point is on.
  getPointDistance(point) {
    return this.normal.dot(point) + this.distance;
  }

  // Transforms the plane by the given transformation matrix.
  transform(matrix4) {
    const normal = plane_scratchNormal
      .copy(this.normal)
      .transformAsVector(matrix4)
      .normalize();
    const point = this.normal.scale(-this.distance).transform(matrix4);
    return this.fromPointNormal(point, normal);
  }

  // Projects a point onto the plane.
  projectPointOntoPlane(point, result = [0, 0, 0]) {
    point = plane_scratchPosition.from(point);
    // projectedPoint = point - (normal.point + scale) * normal
    const pointDistance = this.getPointDistance(point);
    const scaledNormal = plane_scratchNormal.copy(this.normal).scale(pointDistance);

    return point.subtract(scaledNormal).to(result);
  }
}

// CONCATENATED MODULE: ../modules/culling/src/lib/culling-volume.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */




// X, Y, Z Unit vectors
const faces = [new vector3_Vector3([1, 0, 0]), new vector3_Vector3([0, 1, 0]), new vector3_Vector3([0, 0, 1])];

const scratchPlaneCenter = new vector3_Vector3();
const scratchPlaneNormal = new vector3_Vector3();
const scratchPlane = new plane_Plane(new vector3_Vector3(1.0, 0.0, 0.0), 0.0);

// A culling volume defined by planes.
class culling_volume_CullingVolume {
  // For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
  // represents the case where the object bounding volume is entirely outside the culling volume.
  static get MASK_OUTSIDE() {
    return 0xffffffff;
  }

  // For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
  // represents the case where the object bounding volume is entirely inside the culling volume.
  static get MASK_INSIDE() {
    return 0x00000000;
  }

  // For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
  // represents the case where the object bounding volume (may) intersect all planes of the culling volume.
  static get MASK_INDETERMINATE() {
    return 0x7fffffff;
  }

  constructor(planes = []) {
    // {Cartesian4[]} [planes] An array of clipping planes.
    this.planes = planes;
  }

  // Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
  // The planes are aligned to the x, y, and z axes in world coordinates.
  fromBoundingSphere(boundingSphere) {
    this.planes.length = 2 * faces.length;

    const center = boundingSphere.center;
    const radius = boundingSphere.radius;

    let planeIndex = 0;

    for (const faceNormal of faces) {
      let plane0 = this.planes[planeIndex];
      let plane1 = this.planes[planeIndex + 1];

      if (!plane0) {
        plane0 = this.planes[planeIndex] = new vector4_Vector4();
      }
      if (!plane1) {
        plane1 = this.planes[planeIndex + 1] = new vector4_Vector4();
      }

      scratchPlaneCenter
        .copy(faceNormal)
        .scale(-radius)
        .add(center);

      plane0.x = faceNormal.x;
      plane0.y = faceNormal.y;
      plane0.z = faceNormal.z;
      plane0.w = -faceNormal.dot(scratchPlaneCenter);

      scratchPlaneCenter
        .copy(faceNormal)
        .scale(radius)
        .add(center);
      plane1.x = -faceNormal.x;
      plane1.y = -faceNormal.y;
      plane1.z = -faceNormal.z;
      plane0.w = -faceNormal.negate().dot(scratchPlaneCenter);
      // plane1.w = -Vector3.dot(Vector3.negate(faceNormal, scratchPlaneNormal), scratchPlaneCenter);

      planeIndex += 2;
    }

    return this;
  }

  // Determines whether a bounding volume intersects the culling volume.
  computeVisibility(boundingVolume) {
    assert(boundingVolume);
    const planes = this.planes;
    const intersect = Intersect.INSIDE;
    for (const plane of this.planes) {
      const result = boundingVolume.intersectPlane(plane);
      switch (result) {
        case Intersect.OUTSIDE:
          // We are done
          return Intersect.OUTSIDE;

        case Intersect.INTERSECTING:
          // If no other intersection is outside, return INTERSECTING
          intersect = Intersect.INTERSECTING;
          break;

        default:
      }
    }

    return intersect;
  }

  // Determines whether a bounding volume intersects the culling volume.
  /*
   * @param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *                                 volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *                                 the parent (and therefore this) volume is completely inside plane[planeIndex]
   *                                 and that plane check can be skipped.
  computeVisibilityWithPlaneMask(boundingVolume, parentPlaneMask) {
    // assert(boundingVolume, 'boundingVolume is required.');
    // assert(parentPlaneMask, 'parentPlaneMask is required.');

    if (
      parentPlaneMask === CullingVolume.MASK_OUTSIDE ||
      parentPlaneMask === CullingVolume.MASK_INSIDE
    ) {
      // parent is completely outside or completely inside, so this child is as well.
      return parentPlaneMask;
    }

    // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
    // (Because if there are fewer than 31 planes, the upper bits wont be changed.)
    const mask = CullingVolume.MASK_INSIDE;

    const planes = this.planes;
    for (let k = 0; k < this.planes.length; ++k) {
      // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
      const flag = k < 31 ? 1 << k : 0;
      if (k < 31 && (parentPlaneMask & flag) === 0) {
        // boundingVolume is known to be INSIDE this plane.
        continue;
      }

      const result = boundingVolume.intersectPlane(Plane.fromCartesian4(planes[k], scratchPlane));
      if (result === Intersect.OUTSIDE) {
        return CullingVolume.MASK_OUTSIDE;
      } else if (result === Intersect.INTERSECTING) {
        mask |= flag;
      }
    }

    return mask;
  }
  */
}

// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-sphere-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md




/* eslint-disable */
const fromPointsXMin = new vector3_Vector3();
const fromPointsYMin = new vector3_Vector3();
const fromPointsZMin = new vector3_Vector3();
const fromPointsXMax = new vector3_Vector3();
const fromPointsYMax = new vector3_Vector3();
const fromPointsZMax = new vector3_Vector3();
const fromPointsCurrentPos = new vector3_Vector3();
const fromPointsScratch = new vector3_Vector3();
const fromPointsRitterCenter = new vector3_Vector3();
const fromPointsMinBoxPt = new vector3_Vector3();
const fromPointsMaxBoxPt = new vector3_Vector3();
const fromPointsNaiveCenterScratch = new vector3_Vector3();
const volumeConstant = (4.0 / 3.0) * Math.PI;

/*
Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points.
The bounding sphere is computed by running two algorithms, a naive algorithm and
Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.
   *
@param {Vector3[]} [positions] An array of points that the bounding sphere will enclose.  Each point must have <code>x</code>, <code>y</code>, and <code>z</code> properties.
@param {BoundingSphere} [result] The object onto which to store the result.
@returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
   *
@see {@link http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/|Bounding Sphere computation article}
*/

function makeBoundingSphereFromPoints(positions, result = new bounding_sphere_BoundingSphere()) {
  if (!positions || positions.length === 0) {
    return result.fromCenterRadius([0, 0, 0], 0);
  }

  const currentPos = fromPointsCurrentPos.copy(positions[0]);

  const xMin = fromPointsXMin.copy(currentPos);
  const yMin = fromPointsYMin.copy(currentPos);
  const zMin = fromPointsZMin.copy(currentPos);

  const xMax = fromPointsXMax.copy(currentPos);
  const yMax = fromPointsYMax.copy(currentPos);
  const zMax = fromPointsZMax.copy(currentPos);

  for (const position of positions) {
    currentPos.copy(position);

    const x = currentPos.x;
    const y = currentPos.y;
    const z = currentPos.z;

    // Store points containing the the smallest and largest components
    if (x < xMin.x) {
      currentPos.copy(xMin);
    }

    if (x > xMax.x) {
      currentPos.copy(xMax);
    }

    if (y < yMin.y) {
      currentPos.copy(yMin);
    }

    if (y > yMax.y) {
      currentPos.copy(yMax);
    }

    if (z < zMin.z) {
      currentPos.copy(zMin);
    }

    if (z > zMax.z) {
      currentPos.copy(zMax);
    }
  }

  // Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
  const xSpan = fromPointsScratch
    .copy(xMax)
    .subtract(xMin)
    .magnitudeSquared();
  const ySpan = fromPointsScratch
    .copy(yMax)
    .subtract(yMin)
    .magnitudeSquared();
  const zSpan = fromPointsScratch
    .copy(zMax)
    .subtract(zMin)
    .magnitudeSquared();

  // Set the diameter endpoints to the largest span.
  let diameter1 = xMin;
  let diameter2 = xMax;
  let maxSpan = xSpan;
  if (ySpan > maxSpan) {
    maxSpan = ySpan;
    diameter1 = yMin;
    diameter2 = yMax;
  }
  if (zSpan > maxSpan) {
    maxSpan = zSpan;
    diameter1 = zMin;
    diameter2 = zMax;
  }

  // Calculate the center of the initial sphere found by Ritter's algorithm
  const ritterCenter = fromPointsRitterCenter;
  ritterCenter.x = (diameter1.x + diameter2.x) * 0.5;
  ritterCenter.y = (diameter1.y + diameter2.y) * 0.5;
  ritterCenter.z = (diameter1.z + diameter2.z) * 0.5;

  // Calculate the radius of the initial sphere found by Ritter's algorithm
  let radiusSquared = fromPointsScratch
    .copy(diameter2)
    .subtract(ritterCenter)
    .magnitudeSquared();
  let ritterRadius = Math.sqrt(radiusSquared);

  // Find the center of the sphere found using the Naive method.
  const minBoxPt = fromPointsMinBoxPt;
  minBoxPt.x = xMin.x;
  minBoxPt.y = yMin.y;
  minBoxPt.z = zMin.z;

  const maxBoxPt = fromPointsMaxBoxPt;
  maxBoxPt.x = xMax.x;
  maxBoxPt.y = yMax.y;
  maxBoxPt.z = zMax.z;

  const naiveCenter = fromPointsNaiveCenterScratch
    .copy(minBoxPt)
    .add(maxBoxPt)
    .multiplyByScalar(0.5);

  // Begin 2nd pass to find naive radius and modify the ritter sphere.
  let naiveRadius = 0;
  for (const position of positions) {
    currentPos.copy(position);

    // Find the furthest point from the naive center to calculate the naive radius.
    const r = fromPointsScratch
      .copy(currentPos)
      .subtract(naiveCenter)
      .magnitude();
    if (r > naiveRadius) {
      naiveRadius = r;
    }

    // Make adjustments to the Ritter Sphere to include all points.
    const oldCenterToPointSquared = fromPointsScratch
      .copy(currentPos)
      .subtract(ritterCenter)
      .magnitudeSquared();

    if (oldCenterToPointSquared > radiusSquared) {
      const oldCenterToPoint = Math.sqrt(oldCenterToPointSquared);
      // Calculate new radius to include the point that lies outside
      ritterRadius = (ritterRadius + oldCenterToPoint) * 0.5;
      radiusSquared = ritterRadius * ritterRadius;
      // Calculate center of new Ritter sphere
      const oldToNew = oldCenterToPoint - ritterRadius;
      ritterCenter.x = (ritterRadius * ritterCenter.x + oldToNew * currentPos.x) / oldCenterToPoint;
      ritterCenter.y = (ritterRadius * ritterCenter.y + oldToNew * currentPos.y) / oldCenterToPoint;
      ritterCenter.z = (ritterRadius * ritterCenter.z + oldToNew * currentPos.z) / oldCenterToPoint;
    }
  }

  if (ritterRadius < naiveRadius) {
    ritterCenter.to(result.center);
    result.radius = ritterRadius;
  } else {
    naiveCenter.to(result.center);
    result.radius = naiveRadius;
  }

  return result;
}

// CONCATENATED MODULE: ../modules/culling/src/index.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md










// CONCATENATED MODULE: ../modules/culling/test/bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md




const bench_plane = new plane_Plane();
const bench_boundingSphere = new bounding_sphere_BoundingSphere();
const bench_transform = new matrix4_Matrix4();

function cullingBench(suite, addReferenceBenchmarks) {
  suite
    .group('BoundingSphere')
    .add('BoundingSphere#new()', () => new bounding_sphere_BoundingSphere())
    .add('BoundingSphere#transform', () => bench_boundingSphere.transform(bench_transform))

    .group('Plane')
    .add('Plane#new()', () => new plane_Plane())
    .add('Plane#transform', () => bench_plane.transform(bench_transform));

  return suite;
}

// CONCATENATED MODULE: ../test/modules.bench.js



function addBenchmarks(suite, addReferenceBenchmarks) {
  coreBench(suite, addReferenceBenchmarks);
  geospatialBench(suite, addReferenceBenchmarks);
  cullingBench(suite, addReferenceBenchmarks);
  return suite;
}
// CONCATENATED MODULE: ../examples/benchmarks/app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return app_App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });







var app_addReferenceBenchmarks = false;
var LOG_ENTRY = {
  GROUP: 'group',
  TEST: 'test',
  COMPLETE: 'complete'
};

function parseSIPrefix(itersPerSecond) {
  var value = parseFloat(itersPerSecond);
  var prefix = itersPerSecond[itersPerSecond.length - 1];

  switch (prefix) {
    case 'M':
      return value * 1000000;

    case 'K':
      return value * 1000;

    default:
      return value;
  }
}

var app_App =
/*#__PURE__*/
function (_PureComponent) {
  inheritsLoose_default()(App, _PureComponent);

  function App(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.suite = new esm["a" /* Bench */]({
      log: _this._logResult.bind(assertThisInitialized_default()(_this))
    });
    addBenchmarks(_this.suite, app_addReferenceBenchmarks);
    _this.state = {
      log: []
    };
    return _this;
  }

  var _proto = App.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.suite // Calibrate performance
    .calibrate().run() // when running in browser, notify test the driver that it's done
    .then(function () {});
  };

  _proto._logResult = function _logResult(result) {
    var entry = result.entry,
        id = result.id,
        itersPerSecond = result.itersPerSecond,
        error = result.error;
    var log = this.state.log;

    switch (entry) {
      case LOG_ENTRY.GROUP:
        log.push({
          id: id
        });
        break;

      case LOG_ENTRY.TEST:
        var value = parseSIPrefix(itersPerSecond); // log.push(`├─ ${id}: ${itersPerSecond} iterations/s ±${(error * 100).toFixed(2)}%`);

        log.push({
          id: id,
          value: value,
          formattedValue: itersPerSecond,
          formattedError: (error * 100).toFixed(2) + "%"
        });
        break;

      case LOG_ENTRY.COMPLETE:
        break;

      default:
    }

    this.forceUpdate();
  };

  _proto.render = function render() {
    var log = this.state.log;
    return react_default.a.createElement("div", null, react_default.a.createElement(bench_results_BenchResults, {
      log: log
    }));
  };

  return App;
}(react["PureComponent"]);


function renderToDOM(container) {
  Object(react_dom["render"])(react_default.a.createElement(app_App, null), container);
}

/***/ })

}]);
//# sourceMappingURL=component---examples-benchmarks-app-js-164aae4151c75368f281.js.map