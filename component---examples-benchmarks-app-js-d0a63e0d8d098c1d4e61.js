(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "/8Fb":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("XKFU");
var $entries = __webpack_require__("UExd")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "/IxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export identity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invert; });
/* unused harmony export adjoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return rotateZ; });
/* unused harmony export fromTranslation */
/* unused harmony export fromScaling */
/* unused harmony export fromRotation */
/* unused harmony export fromXRotation */
/* unused harmony export fromYRotation */
/* unused harmony export fromZRotation */
/* unused harmony export fromRotationTranslation */
/* unused harmony export fromQuat2 */
/* unused harmony export getTranslation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getScaling; });
/* unused harmony export getRotation */
/* unused harmony export fromRotationTranslationScale */
/* unused harmony export fromRotationTranslationScaleOrigin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return perspective; });
/* unused harmony export perspectiveFromFieldOfView */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lookAt; });
/* unused harmony export targetTo */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export mul */
/* unused harmony export sub */
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x8ZO");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y9lz");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yOd+");



/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"]) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "/KAi":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__("XKFU");
var _isFinite = __webpack_require__("dyZX").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "0SR0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__("DW2E");

// EXTERNAL MODULE: ../modules/core/src/classes/base/matrix.js
var matrix = __webpack_require__("CZB0");

// EXTERNAL MODULE: ../modules/core/src/lib/validators.js
var validators = __webpack_require__("Jp9o");

// EXTERNAL MODULE: ../modules/core/src/lib/gl-matrix-extras.js
var gl_matrix_extras = __webpack_require__("RHrP");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.hypot.js
var es6_math_hypot = __webpack_require__("x8ZO");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__("Y9lz");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/common.js
var common = __webpack_require__("yOd+");

// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/mat3.js



/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new common["a" /* ARRAY_TYPE */](9);

  if (common["a" /* ARRAY_TYPE */] != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new common["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new common["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function mat3_invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function mat3_determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function mat3_translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function mat3_rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function mat3_scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec2.js
var vec2 = __webpack_require__("umh7");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__("MTwu");

// CONCATENATED MODULE: ../modules/core/src/classes/matrix3.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matrix3_Matrix3; });
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
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
var IDENTITY=Object.freeze([1,0,0,0,1,0,0,0,1]);var ZERO=Object.freeze([0,0,0,0,0,0,0,0,0]);var INDICES=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL1ROW0:3,COL1ROW1:4,COL1ROW2:5,COL2ROW0:6,COL2ROW1:7,COL2ROW2:8});var constants={};var matrix3_Matrix3=/*#__PURE__*/function(_Matrix){_inheritsLoose(Matrix3,_Matrix);_createClass(Matrix3,[{key:"ELEMENTS",get:function get(){return 9;}},{key:"RANK",get:function get(){return 3;}},{key:"INDICES",get:function get(){return INDICES;}}],[{key:"IDENTITY",get:function get(){constants.IDENTITY=constants.IDENTITY||Object.freeze(new Matrix3(IDENTITY));return constants.IDENTITY;}},{key:"ZERO",get:function get(){constants.ZERO=constants.ZERO||Object.freeze(new Matrix3(ZERO));return constants.ZERO;}}]);function Matrix3(array){var _this;// PERF NOTE: initialize elements as double precision numbers
_this=_Matrix.call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0)||this;if(arguments.length===1&&Array.isArray(array)){_this.copy(array);}else{_this.identity();}return _this;}var _proto=Matrix3.prototype;_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];this[4]=array[4];this[5]=array[5];this[6]=array[6];this[7]=array[7];this[8]=array[8];return this.check();}// accepts column major order, stores in column major order
// eslint-disable-next-line max-params
;_proto.set=function set(m00,m10,m20,m01,m11,m21,m02,m12,m22){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m01;this[4]=m11;this[5]=m21;this[6]=m02;this[7]=m12;this[8]=m22;return this.check();}// accepts row major order, stores as column major
// eslint-disable-next-line max-params
;_proto.setRowMajor=function setRowMajor(m00,m01,m02,m10,m11,m12,m20,m21,m22){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m01;this[4]=m11;this[5]=m21;this[6]=m02;this[7]=m12;this[8]=m22;return this.check();}// Accessors
;_proto.determinant=function determinant(){return mat3_determinant(this);}// Constructors
;_proto.identity=function identity(){return this.copy(IDENTITY);}// Calculates a 3x3 matrix from the given quaternion
// q quat  Quaternion to create matrix from
;_proto.fromQuaternion=function fromQuaternion(q){fromQuat(this,q);return this.check();}// Modifiers
;_proto.transpose=function transpose(){mat3_transpose(this,this);return this.check();};_proto.invert=function invert(){mat3_invert(this,this);return this.check();}// Operations
;_proto.multiplyLeft=function multiplyLeft(a){multiply(this,a,this);return this.check();};_proto.multiplyRight=function multiplyRight(a){multiply(this,this,a);return this.check();};_proto.rotate=function rotate(radians){mat3_rotate(this,this,radians);return this.check();};_proto.scale=function scale(factor){if(Array.isArray(factor)){mat3_scale(this,this,factor);}else{mat3_scale(this,this,[factor,factor,factor]);}return this.check();};_proto.translate=function translate(vec){mat3_translate(this,this,vec);return this.check();}// Transforms
;_proto.transform=function transform(vector,result){switch(vector.length){case 2:result=vec2["c" /* transformMat3 */](result||[-0,-0],vector,this);break;case 3:result=vec3["h" /* transformMat3 */](result||[-0,-0,-0],vector,this);break;case 4:result=Object(gl_matrix_extras["e" /* vec4_transformMat3 */])(result||[-0,-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}Object(validators["b" /* checkVector */])(result,vector.length);return result;}// DEPRECATED IN 3.0
;_proto.transformVector=function transformVector(vector,result){Object(validators["c" /* deprecated */])('Matrix3.transformVector');return this.transform(vector,result);};_proto.transformVector2=function transformVector2(vector,result){Object(validators["c" /* deprecated */])('Matrix3.transformVector');return this.transform(vector,result);};_proto.transformVector3=function transformVector3(vector,result){Object(validators["c" /* deprecated */])('Matrix3.transformVector');return this.transform(vector,result);}// Deprecations in v3.0
;return Matrix3;}(matrix["a" /* default */]);

/***/ }),

/***/ "7h0T":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__("XKFU");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "9Usm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector4; });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JmAm");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ggdh");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Jp9o");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MTwu");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RHrP");
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
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
var Vector4=/*#__PURE__*/function(_Vector){_inheritsLoose(Vector4,_Vector);function Vector4(x,y,z,w){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}if(w===void 0){w=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,-0,-0,-0,-0)||this;if(Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "e"])(x)&&arguments.length===1){_this.copy(x);}else{// this.set(x, y, z, w);
if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(y);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(z);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(w);}_this[0]=x;_this[1]=y;_this[2]=z;_this[3]=w;}return _this;}var _proto=Vector4.prototype;_proto.set=function set(x,y,z,w){this[0]=x;this[1]=y;this[2]=z;this[3]=w;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];return this.check();};_proto.fromObject=function fromObject(object){if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.y);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.z);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.w);}this[0]=object.x;this[1]=object.y;this[2]=object.z;this[3]=object.w;return this;};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];object.z=this[2];object.w=this[3];return object;}// Getters/setters
/* eslint-disable no-multi-spaces, brace-style, no-return-assign */;/* eslint-enable no-multi-spaces, brace-style, no-return-assign */_proto.transform=function transform(matrix4){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* transformMat4 */ "i"](this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){Object(_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__[/* vec4_transformMat3 */ "e"])(this,this,matrix3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){Object(_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__[/* vec4_transformMat2 */ "d"])(this,this,matrix2);return this.check();};_proto.transformByQuaternion=function transformByQuaternion(quaternion){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* transformQuat */ "j"](this,this,quaternion);return this.check();}// three.js compatibility
;_proto.applyMatrix4=function applyMatrix4(m){m.transform(this,this);return this;};_createClass(Vector4,[{key:"ELEMENTS",get:function get(){return 4;}// x,y inherited from Vector
},{key:"z",get:function get(){return this[2];},set:function set(value){return this[2]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(value);}},{key:"w",get:function get(){return this[3];},set:function set(value){return this[3]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(value);}}]);return Vector4;}(_base_vector__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "CZB0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix; });
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bHtr");
/* harmony import */ var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a1Th");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Btvt");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("G+lc");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Jp9o");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Ggdh");
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var Matrix=/*#__PURE__*/function(_MathArray){_inheritsLoose(Matrix,_MathArray);function Matrix(){return _MathArray.apply(this,arguments)||this;}var _proto=Matrix.prototype;// fromObject(object) {
//   const array = object.elements;
//   return this.fromRowMajor(array);
// }
// toObject(object) {
//   const array = object.elements;
//   this.toRowMajor(array);
//   return object;
// }
_proto.toString=function toString(){var string='[';if(_lib_common__WEBPACK_IMPORTED_MODULE_5__[/* config */ "a"].printRowMajor){string+='row-major:';for(var row=0;row<this.RANK;++row){for(var col=0;col<this.RANK;++col){string+=" "+this[col*this.RANK+row];}}}else{string+='column-major:';for(var i=0;i<this.ELEMENTS;++i){string+=" "+this[i];}}string+=']';return string;};_proto.getElementIndex=function getElementIndex(row,col){return col*this.RANK+row;}// By default assumes row major indices
;_proto.getElement=function getElement(row,col){return this[col*this.RANK+row];}// By default assumes row major indices
;_proto.setElement=function setElement(row,col,value){this[col*this.RANK+row]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_4__[/* checkNumber */ "a"])(value);return this;};_proto.getColumn=function getColumn(columnIndex,result){if(result===void 0){result=new Array(this.RANK).fill(-0);}var firstIndex=columnIndex*this.RANK;for(var i=0;i<this.RANK;++i){result[i]=this[firstIndex+i];}return result;};_proto.setColumn=function setColumn(columnIndex,columnVector){var firstIndex=columnIndex*this.RANK;for(var i=0;i<this.RANK;++i){this[firstIndex+i]=columnVector[i];}return this;};return Matrix;}(_math_array__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);

/***/ }),

/***/ "CyHz":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__("XKFU");

$export($export.S, 'Math', { sign: __webpack_require__("lvtm") });


/***/ }),

/***/ "DW2E":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__("0/R4");
var meta = __webpack_require__("Z6vF").onFreeze;

__webpack_require__("Xtr8")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "FLlr":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("XKFU");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__("l0Rn")
});


/***/ }),

/***/ "G+lc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathArray; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rGqo");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yt8O");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XfO3");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9AAn");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("I5cv");
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/SS/");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xfY5");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/KAi");
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Zz4T");
/* harmony import */ var core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_sub__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("f3/d");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("a1Th");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Btvt");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Y9lz");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Ggdh");
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// Copyright (c) 2017 Uber Technologies, Inc.
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
var MathArray=/*#__PURE__*/function(_Array){_inheritsLoose(MathArray,_Array);function MathArray(){return _Array.apply(this,arguments)||this;}var _proto=MathArray.prototype;_proto.clone=function clone(){return new this.constructor().copy(this);};_proto.from=function from(arrayOrObject){return Array.isArray(arrayOrObject)?this.copy(arrayOrObject):this.fromObject(arrayOrObject);};_proto.fromArray=function fromArray(array,offset){if(offset===void 0){offset=0;}for(var i=0;i<this.ELEMENTS;++i){this[i]=array[i+offset];}return this.check();};_proto.to=function to(arrayOrObject){if(arrayOrObject===this){return this;}return Object(_lib_common__WEBPACK_IMPORTED_MODULE_13__[/* isArray */ "e"])(arrayOrObject)?this.toArray(arrayOrObject):this.toObject(arrayOrObject);};_proto.toTarget=function toTarget(target){return target?this.to(target):this;};_proto.toArray=function toArray(array,offset){if(array===void 0){array=[];}if(offset===void 0){offset=0;}for(var i=0;i<this.ELEMENTS;++i){array[offset+i]=this[i];}return array;};_proto.toFloat32Array=function toFloat32Array(){return new Float32Array(this);};_proto.toString=function toString(){return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_13__[/* config */ "a"]);};_proto.formatString=function formatString(opts){var string='';for(var i=0;i<this.ELEMENTS;++i){string+=(i>0?', ':'')+Object(_lib_common__WEBPACK_IMPORTED_MODULE_13__[/* formatValue */ "d"])(this[i],opts);}return(opts.printTypes?this.constructor.name:'')+"["+string+"]";};_proto.equals=function equals(array){if(!array||this.length!==array.length){return false;}for(var i=0;i<this.ELEMENTS;++i){if(!Object(_lib_common__WEBPACK_IMPORTED_MODULE_13__[/* equals */ "c"])(this[i],array[i])){return false;}}return true;};_proto.exactEquals=function exactEquals(array){if(!array||this.length!==array.length){return false;}for(var i=0;i<this.ELEMENTS;++i){if(this[i]!==array[i]){return false;}}return true;}// Modifiers
;_proto.negate=function negate(){for(var i=0;i<this.ELEMENTS;++i){this[i]=-this[i];}return this.check();};_proto.lerp=function lerp(a,b,t){if(t===undefined){t=b;b=a;a=this;// eslint-disable-line
}for(var i=0;i<this.ELEMENTS;++i){var ai=a[i];this[i]=ai+t*(b[i]-ai);}return this.check();};_proto.min=function min(vector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(vector[i],this[i]);}return this.check();};_proto.max=function max(vector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.max(vector[i],this[i]);}return this.check();};_proto.clamp=function clamp(minVector,maxVector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(Math.max(this[i],minVector[i]),maxVector[i]);}return this.check();};_proto.add=function add(){for(var _len=arguments.length,vectors=new Array(_len),_key=0;_key<_len;_key++){vectors[_key]=arguments[_key];}for(var _i=0,_vectors=vectors;_i<_vectors.length;_i++){var vector=_vectors[_i];for(var i=0;i<this.ELEMENTS;++i){this[i]+=vector[i];}}return this.check();};_proto.subtract=function subtract(){for(var _len2=arguments.length,vectors=new Array(_len2),_key2=0;_key2<_len2;_key2++){vectors[_key2]=arguments[_key2];}for(var _i2=0,_vectors2=vectors;_i2<_vectors2.length;_i2++){var vector=_vectors2[_i2];for(var i=0;i<this.ELEMENTS;++i){this[i]-=vector[i];}}return this.check();};_proto.scale=function scale(_scale){if(Array.isArray(_scale)){return this.multiply(_scale);}for(var i=0;i<this.ELEMENTS;++i){this[i]*=_scale;}return this.check();}// three.js compatibility
;_proto.sub=function sub(a){return this.subtract(a);};_proto.setScalar=function setScalar(a){for(var i=0;i<this.ELEMENTS;++i){this[i]=a;}return this.check();};_proto.addScalar=function addScalar(a){for(var i=0;i<this.ELEMENTS;++i){this[i]+=a;}return this.check();};_proto.subScalar=function subScalar(a){return this.addScalar(-a);};_proto.multiplyScalar=function multiplyScalar(scalar){// Multiplies all elements
// `Matrix4.scale` only scales its 3x3 "minor"
for(var i=0;i<this.ELEMENTS;++i){this[i]*=scalar;}return this.check();};_proto.divideScalar=function divideScalar(a){return this.scale(1/a);};_proto.clampScalar=function clampScalar(min,max){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(Math.max(this[i],min),max);}return this.check();}// Cesium compatibility
;_proto.multiplyByScalar=function multiplyByScalar(scalar){return this.scale(scalar);}// THREE.js compatibility
;// Debug checks
_proto.check=function check(){if(_lib_common__WEBPACK_IMPORTED_MODULE_13__[/* config */ "a"].debug&&!this.validate(this)){throw new Error("math.gl: "+this.constructor.name+" some fields set to invalid numbers'");}return this;};_proto.validate=function validate(){var valid=this.length===this.ELEMENTS;for(var i=0;i<this.ELEMENTS;++i){valid=valid&&Number.isFinite(this[i]);}return valid;};_createClass(MathArray,[{key:"elements",get:function get(){return this;}}]);return MathArray;}(_wrapNativeSuper(Array));

/***/ }),

/***/ "Ggdh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return formatValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isArray; });
/* unused harmony export clone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return toRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return toDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return radians; });
/* unused harmony export degrees */
/* unused harmony export sin */
/* unused harmony export cos */
/* unused harmony export tan */
/* unused harmony export asin */
/* unused harmony export acos */
/* unused harmony export atan */
/* unused harmony export clamp */
/* unused harmony export lerp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return equals; });
/* unused harmony export exactEquals */
/* unused harmony export withEpsilon */
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("I5cv");
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/SS/");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XfO3");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HEwt");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a1Th");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Btvt");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("rE2o");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ioFf");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rGqo");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xfY5");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("/KAi");
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("a0bm");
function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// Copyright (c) 2017 Uber Technologies, Inc.
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
var RADIANS_TO_DEGREES=1/Math.PI*180;var DEGREES_TO_RADIANS=1/180*Math.PI;// TODO - remove
/* eslint-disable no-shadow */var config={};config.EPSILON=1e-12;config.debug=false;config.precision=4;config.printTypes=false;config.printDegrees=false;config.printRowMajor=true;function configure(options){if(options===void 0){options={};}// Only copy existing keys
for(var key in options){Object(_assert__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(key in config);config[key]=options[key];}return config;}function round(value){return Math.round(value/config.EPSILON)*config.EPSILON;}function formatValue(value,_temp){var _ref=_temp===void 0?{}:_temp,_ref$precision=_ref.precision,precision=_ref$precision===void 0?config.precision||4:_ref$precision;value=round(value);// get rid of trailing zeros
return""+parseFloat(value.toPrecision(precision));}// Returns true if value is either an array or a typed array
// Note: does not return true for ArrayBuffers and DataViews
function isArray(value){return Array.isArray(value)||ArrayBuffer.isView(value)&&value.length!==undefined;}// If the array has a clone function, calls it, otherwise returns a copy
function duplicateArray(array){return array.clone?array.clone():new Array(array.length);}function clone(array){return array.clone?array.clone():_construct(Array,_toConsumableArray(array));}// If the argument value is an array, applies the func element wise,
// otherwise applies func to the argument value
function map(value,func,result){if(isArray(value)){result=result||duplicateArray(value);for(var i=0;i<result.length&&i<value.length;++i){result[i]=func(value[i],i,result);}return result;}return func(value);}function toRadians(degrees){return radians(degrees);}function toDegrees(radians){return degrees(radians);}//
// GLSL math function equivalents
// Works on both single values and vectors
//
function radians(degrees,result){return map(degrees,function(degrees){return degrees*DEGREES_TO_RADIANS;},result);}function degrees(radians,result){return map(radians,function(radians){return radians*RADIANS_TO_DEGREES;},result);}// GLSL equivalent: Works on single values and vectors
function sin(radians){return map(radians,function(angle){return Math.sin(angle);});}// GLSL equivalent: Works on single values and vectors
function cos(radians){return map(radians,function(angle){return Math.cos(angle);});}// GLSL equivalent: Works on single values and vectors
function tan(radians){return map(radians,function(angle){return Math.tan(angle);});}// GLSL equivalent: Works on single values and vectors
function asin(radians){return map(radians,function(angle){return Math.asin(angle);});}// GLSL equivalent: Works on single values and vectors
function acos(radians){return map(radians,function(angle){return Math.acos(angle);});}// GLSL equivalent: Works on single values and vectors
function atan(radians){return map(radians,function(angle){return Math.atan(angle);});}function clamp(value,min,max){return map(value,function(value){return Math.max(min,Math.min(max,value));});}// Interpolate between two numbers or two arrays
function lerp(a,b,t){if(isArray(a)){return a.map(function(ai,i){return lerp(ai,b[i],t);});}return t*b+(1-t)*a;}// eslint-disable-next-line complexity
function equals(a,b,epsilon){var oldEpsilon=config.EPSILON;if(epsilon){config.EPSILON=epsilon;}try{if(a===b){return true;}if(isArray(a)&&isArray(b)){if(a.length!==b.length){return false;}for(var i=0;i<a.length;++i){// eslint-disable-next-line max-depth
if(!equals(a[i],b[i])){return false;}}return true;}if(a&&a.equals){return a.equals(b);}if(b&&b.equals){return b.equals(a);}if(Number.isFinite(a)&&Number.isFinite(b)){return Math.abs(a-b)<=config.EPSILON*Math.max(1.0,Math.abs(a),Math.abs(b));}return false;}finally{config.EPSILON=oldEpsilon;}}// eslint-disable-next-line complexity
function exactEquals(a,b){if(a===b){return true;}if(a&&typeof a==='object'&&b&&typeof b==='object'){if(a.constructor!==b.constructor){return false;}if(a.exactEquals){return a.exactEquals(b);}}if(isArray(a)&&isArray(b)){if(a.length!==b.length){return false;}for(var i=0;i<a.length;++i){if(!exactEquals(a[i],b[i])){return false;}}return true;}return false;}function withEpsilon(EPSILON,func){var oldPrecision=config.EPSILON;config.EPSILON=EPSILON;var value;try{value=func();}finally{config.EPSILON=oldPrecision;}return value;}

/***/ }),

/***/ "HoFx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2; });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JmAm");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ggdh");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Jp9o");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("umh7");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RHrP");
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
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
var Vector2=/*#__PURE__*/function(_Vector){_inheritsLoose(Vector2,_Vector);// Creates a new, empty vec2
function Vector2(x,y){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,2)||this;// -0, -0);
if(Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "e"])(x)&&arguments.length===1){_this.copy(x);}else{if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(y);}_this[0]=x;_this[1]=y;}return _this;}var _proto=Vector2.prototype;_proto.set=function set(x,y,z){this[0]=x;this[1]=y;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];return this.check();};_proto.fromObject=function fromObject(object){if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.y);}this[0]=object.x;this[1]=object.y;return this.check();};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];return object;}// Getters/setters
;// x,y inherited from Vector
_proto.horizontalAngle=function horizontalAngle(){return Math.atan2(this.y,this.x);};_proto.verticalAngle=function verticalAngle(){return Math.atan2(this.x,this.y);}// Transforms
;_proto.transform=function transform(matrix4){return this.transformAsPoint(matrix4);}// transforms as point (4th component is implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(matrix4){gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__[/* transformMat4 */ "d"](this,this,matrix4);return this.check();}// transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
;_proto.transformAsVector=function transformAsVector(matrix4){Object(_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__[/* vec2_transformMat4AsVector */ "a"])(this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__[/* transformMat3 */ "c"](this,this,matrix3);return this.check();};_proto.transformByMatrix2x3=function transformByMatrix2x3(matrix2x3){gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__[/* transformMat2d */ "b"](this,this,matrix2x3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__[/* transformMat2 */ "a"](this,this,matrix2);return this.check();};_createClass(Vector2,[{key:"ELEMENTS",get:function get(){return 2;}}]);return Vector2;}(_base_vector__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "I5cv":
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__("XKFU");
var create = __webpack_require__("Kuth");
var aFunction = __webpack_require__("2OiF");
var anObject = __webpack_require__("y3w9");
var isObject = __webpack_require__("0/R4");
var fails = __webpack_require__("eeVq");
var bind = __webpack_require__("8MEG");
var rConstruct = (__webpack_require__("dyZX").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "JmAm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("G+lc");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Jp9o");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a0bm");
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var Vector=/*#__PURE__*/function(_MathArray){_inheritsLoose(Vector,_MathArray);function Vector(){return _MathArray.apply(this,arguments)||this;}var _proto=Vector.prototype;// NOTE: `length` is a reserved word for Arrays, so we can't use `v.length()`
// Offer `len` and `magnitude`
_proto.len=function len(){return Math.sqrt(this.lengthSquared());};_proto.magnitude=function magnitude(){return this.len();};_proto.lengthSquared=function lengthSquared(){var length=0;for(var i=0;i<this.ELEMENTS;++i){length+=this[i]*this[i];}return length;};_proto.magnitudeSquared=function magnitudeSquared(){return this.lengthSquared();};_proto.distance=function distance(mathArray){return Math.sqrt(this.distanceSquared(mathArray));};_proto.distanceSquared=function distanceSquared(mathArray){var length=0;for(var i=0;i<this.ELEMENTS;++i){var dist=this[i]-mathArray[i];length+=dist*dist;}return Object(_lib_validators__WEBPACK_IMPORTED_MODULE_1__[/* checkNumber */ "a"])(length);};_proto.dot=function dot(mathArray){var product=0;for(var i=0;i<this.ELEMENTS;++i){product+=this[i]*mathArray[i];}return Object(_lib_validators__WEBPACK_IMPORTED_MODULE_1__[/* checkNumber */ "a"])(product);}// MODIFIERS
;_proto.normalize=function normalize(){var length=this.magnitude();if(length!==0){for(var i=0;i<this.ELEMENTS;++i){this[i]/=length;}}return this.check();}// negate() {
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
;_proto.multiply=function multiply(){for(var _len=arguments.length,vectors=new Array(_len),_key=0;_key<_len;_key++){vectors[_key]=arguments[_key];}for(var _i=0,_vectors=vectors;_i<_vectors.length;_i++){var vector=_vectors[_i];for(var i=0;i<this.ELEMENTS;++i){this[i]*=vector[i];}}return this.check();};_proto.divide=function divide(){for(var _len2=arguments.length,vectors=new Array(_len2),_key2=0;_key2<_len2;_key2++){vectors[_key2]=arguments[_key2];}for(var _i2=0,_vectors2=vectors;_i2<_vectors2.length;_i2++){var vector=_vectors2[_i2];for(var i=0;i<this.ELEMENTS;++i){this[i]/=vector[i];}}return this.check();}// THREE.js compatibility
;_proto.lengthSq=function lengthSq(){return this.lengthSquared();};_proto.distanceTo=function distanceTo(vector){return this.distance(vector);};_proto.distanceToSquared=function distanceToSquared(vector){return this.distanceSquared(vector);};_proto.getComponent=function getComponent(i){Object(_lib_assert__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(i>=0&&i<this.ELEMENTS,'index is out of range');return Object(_lib_validators__WEBPACK_IMPORTED_MODULE_1__[/* checkNumber */ "a"])(this[i]);};_proto.setComponent=function setComponent(i,value){Object(_lib_assert__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(i>=0&&i<this.ELEMENTS,'index is out of range');this[i]=value;return this.check();};_proto.addVectors=function addVectors(a,b){return this.copy(a).add(b);};_proto.subVectors=function subVectors(a,b){return this.copy(a).subtract(b);};_proto.multiplyVectors=function multiplyVectors(a,b){return this.copy(a).multiply(b);};_proto.addScaledVector=function addScaledVector(a,b){return this.add(new this.constructor(a).multiplyScalar(b));};_createClass(Vector,[{key:"x",// ACCESSORS
get:function get(){return this[0];},set:function set(value){return this[0]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_1__[/* checkNumber */ "a"])(value);}},{key:"y",get:function get(){return this[1];},set:function set(value){return this[1]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_1__[/* checkNumber */ "a"])(value);}}]);return Vector;}(_math_array__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "Jp9o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateVector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deprecated; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xfY5");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/KAi");
/* harmony import */ var core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_finite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ggdh");
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
function validateVector(v,length){if(v.length!==length){return false;}// Could be arguments "array" (v.every not availasble)
for(var i=0;i<v.length;++i){if(!Number.isFinite(v[i])){return false;}}return true;}function checkNumber(value){if(!Number.isFinite(value)){throw new Error("Invalid number "+value);}return value;}function checkVector(v,length,callerName){if(_common__WEBPACK_IMPORTED_MODULE_2__[/* config */ "a"].debug&&!validateVector(v,length)){throw new Error("math.gl: "+(callerName|'')+" some fields set to invalid numbers'");}return v;}var map={};function deprecated(method,version){if(!map[method]){map[method]=true;// eslint-disable-next-line
console.warn(method+" has been removed in version "+version+", see upgrade guide for more information");}}

/***/ }),

/***/ "KFwR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElectron; });
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("V+eJ");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U8pU");


function isElectron(mockUserAgent) {
  if (typeof window !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(window.process) === 'object' && window.process.type === 'renderer') {
    return true;
  }

  if (typeof process !== 'undefined' && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(process.versions) === 'object' && Boolean(process.versions.electron)) {
    return true;
  }

  var realUserAgent = (typeof navigator === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(navigator)) === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent;
  var userAgent = mockUserAgent || realUserAgent;

  if (userAgent && userAgent.indexOf('Electron') >= 0) {
    return true;
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "MTwu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return length; });
/* unused harmony export fromValues */
/* unused harmony export copy */
/* unused harmony export set */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiply */
/* unused harmony export divide */
/* unused harmony export ceil */
/* unused harmony export floor */
/* unused harmony export min */
/* unused harmony export max */
/* unused harmony export round */
/* unused harmony export scale */
/* unused harmony export scaleAndAdd */
/* unused harmony export distance */
/* unused harmony export squaredDistance */
/* unused harmony export squaredLength */
/* unused harmony export negate */
/* unused harmony export inverse */
/* unused harmony export normalize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cross; });
/* unused harmony export lerp */
/* unused harmony export hermite */
/* unused harmony export bezier */
/* unused harmony export random */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return angle; });
/* unused harmony export zero */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export sub */
/* unused harmony export mul */
/* unused harmony export div */
/* unused harmony export dist */
/* unused harmony export sqrDist */
/* unused harmony export len */
/* unused harmony export sqrLen */
/* unused harmony export forEach */
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x8ZO");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y9lz");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yOd+");



/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_2__[/* RANDOM */ "c"]() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_2__[/* RANDOM */ "c"]() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);
  normalize(tempA, tempA);
  normalize(tempB, tempB);
  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "OGtf":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("XKFU");
var fails = __webpack_require__("eeVq");
var defined = __webpack_require__("vhPU");
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),

/***/ "PxPc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("pIFo");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("bHtr");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log10.js
var es6_math_log10 = __webpack_require__("eHKK");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__("V+eJ");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("Z2Ku");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("L9s1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("dRSK");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__("bWfx");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.some.js
var es6_array_some = __webpack_require__("dZ+Y");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.bind.js
var es6_function_bind = __webpack_require__("2Spj");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__("/SS/");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__("hHhE");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__("HAE/");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("91GP");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__("LK8F");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("rE2o");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("ioFf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rGqo");

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("TSYQ");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("yt8O");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("RW0V");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("KKXr");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-nan.js
var es6_number_is_nan = __webpack_require__("7h0T");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("xfY5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("a1Th");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__("h7Nl");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("Btvt");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__("0l/t");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("Vd3H");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__("DNiP");

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__("TOwV");

// CONCATENATED MODULE: ./node_modules/react-table/es/utils.js


















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}



 //

/* harmony default export */ var utils = ({
  get: utils_get,
  set: set,
  takeRight: takeRight,
  last: last,
  orderBy: orderBy,
  range: range,
  remove: remove,
  clone: clone,
  getFirstDefined: getFirstDefined,
  sum: sum,
  makeTemplateComponent: makeTemplateComponent,
  groupBy: groupBy,
  isArray: isArray,
  splitProps: splitProps,
  compactObject: compactObject,
  isSortingDesc: isSortingDesc,
  normalizeComponent: normalizeComponent,
  asPx: asPx
});

function utils_get(obj, path, def) {
  if (!path) {
    return obj;
  }

  var pathObj = makePathArray(path);
  var val = void 0;

  try {
    val = pathObj.reduce(function (current, pathPart) {
      return current[pathPart];
    }, obj);
  } catch (e) {// continue regardless of error
  }

  return typeof val !== 'undefined' ? val : def;
}

function set() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments[1];
  var value = arguments[2];
  var keys = makePathArray(path);
  var keyPart = void 0;
  var cursor = obj;

  while ((keyPart = keys.shift()) && keys.length) {
    if (!cursor[keyPart]) {
      cursor[keyPart] = {};
    }

    cursor = cursor[keyPart];
  }

  cursor[keyPart] = value;
  return obj;
}

function takeRight(arr, n) {
  var start = n > arr.length ? 0 : arr.length - n;
  return arr.slice(start);
}

function last(arr) {
  return arr[arr.length - 1];
}

function range(n) {
  var arr = [];

  for (var i = 0; i < n; i += 1) {
    arr.push(n);
  }

  return arr;
}

function orderBy(arr, funcs, dirs, indexKey) {
  return arr.sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var comp = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = comp(rowA, rowB);

      if (sortInt) {
        return desc ? -sortInt : sortInt;
      }
    } // Use the row index for tie breakers


    return dirs[0] ? rowA[indexKey] - rowB[indexKey] : rowB[indexKey] - rowA[indexKey];
  });
}

function remove(a, b) {
  return a.filter(function (o, i) {
    var r = b(o);

    if (r) {
      a.splice(i, 1);
      return true;
    }

    return false;
  });
}

function clone(a) {
  try {
    return JSON.parse(JSON.stringify(a, function (key, value) {
      if (typeof value === 'function') {
        return value.toString();
      }

      return value;
    }));
  } catch (e) {
    return a;
  }
}

function getFirstDefined() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (typeof (arguments.length <= i ? undefined : arguments[i]) !== 'undefined') {
      return arguments.length <= i ? undefined : arguments[i];
    }
  }
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

function makeTemplateComponent(compClass, displayName) {
  if (!displayName) {
    throw new Error('No displayName found for template component:', compClass);
  }

  var cmp = function cmp(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'className']);

    return react_default.a.createElement('div', _extends({
      className: classnames_default()(compClass, className)
    }, rest), children);
  };

  cmp.displayName = displayName;
  return cmp;
}

function groupBy(xs, key) {
  return xs.reduce(function (rv, x, i) {
    var resKey = typeof key === 'function' ? key(x, i) : x[key];
    rv[resKey] = isArray(rv[resKey]) ? rv[resKey] : [];
    rv[resKey].push(x);
    return rv;
  }, {});
}

function asPx(value) {
  value = Number(value);
  return Number.isNaN(value) ? null : value + 'px';
}

function isArray(a) {
  return Array.isArray(a);
} // ########################################################################
// Non-exported Helpers
// ########################################################################


function makePathArray(obj) {
  return flattenDeep(obj).join('.').replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }

  return newArr;
}

function splitProps(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      rest = _objectWithoutProperties(_ref2, ['className', 'style']);

  return {
    className: className,
    style: style,
    rest: rest || {}
  };
}

function compactObject(obj) {
  var newObj = {};

  if (obj) {
    Object.keys(obj).map(function (key) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined && typeof obj[key] !== 'undefined') {
        newObj[key] = obj[key];
      }

      return true;
    });
  }

  return newObj;
}

function isSortingDesc(d) {
  return !!(d.sort === 'desc' || d.desc === true || d.asc === false);
}

function normalizeComponent(Comp, props) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Comp;

  if (react_is["isElement"](Comp) || typeof Comp === 'string') {
    return Comp;
  } else if (react_is["isValidElementType"](Comp)) {
    return react_default.a.createElement(Comp, props);
  }

  return fallback;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__("8+KV");

// CONCATENATED MODULE: ./node_modules/react-table/es/lifecycle.js











var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* harmony default export */ var lifecycle = (function (Base) {
  return function (_Base) {
    _inherits(_class, _Base);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      var defaultState = {
        page: props.defaultPage,
        pageSize: props.defaultPageSize,
        sorted: props.defaultSorted,
        expanded: props.defaultExpanded,
        filtered: props.defaultFiltered,
        resized: props.defaultResized,
        currentlyResizing: false,
        skipNextSort: false
      };

      var resolvedState = _this.getResolvedState(props, defaultState);

      var dataModel = _this.getDataModel(resolvedState, true);

      _this.state = _this.calculateNewResolvedState(dataModel);
      return _this;
    }

    _createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.fireFetchData();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var oldState = this.getResolvedState(prevProps, prevState);
        var newState = this.getResolvedState(this.props, this.state); // Do a deep compare of new and old `defaultOption` and
        // if they are different reset `option = defaultOption`

        var defaultableOptions = ['sorted', 'filtered', 'resized', 'expanded'];
        defaultableOptions.forEach(function (x) {
          var defaultName = 'default' + (x.charAt(0).toUpperCase() + x.slice(1));

          if (JSON.stringify(oldState[defaultName]) !== JSON.stringify(newState[defaultName])) {
            newState[x] = newState[defaultName];
          }
        }); // If they change these table options, we need to reset defaults
        // or else we could get into a state where the user has changed the UI
        // and then disabled the ability to change it back.
        // e.g. If `filterable` has changed, set `filtered = defaultFiltered`

        var resettableOptions = ['sortable', 'filterable', 'resizable'];
        resettableOptions.forEach(function (x) {
          if (oldState[x] !== newState[x]) {
            var baseName = x.replace('able', '');
            var optionName = baseName + 'ed';
            var defaultName = 'default' + (optionName.charAt(0).toUpperCase() + optionName.slice(1));
            newState[optionName] = newState[defaultName];
          }
        }); // Props that trigger a data update

        if (oldState.data !== newState.data || oldState.columns !== newState.columns || oldState.pivotBy !== newState.pivotBy || oldState.sorted !== newState.sorted || oldState.filtered !== newState.filtered) {
          this.setStateWithData(this.getDataModel(newState, oldState.data !== newState.data));
        }
      }
    }, {
      key: 'calculateNewResolvedState',
      value: function calculateNewResolvedState(dataModel) {
        var oldState = this.getResolvedState();
        var newResolvedState = this.getResolvedState({}, dataModel);
        var freezeWhenExpanded = newResolvedState.freezeWhenExpanded; // Default to unfrozen state

        newResolvedState.frozen = false; // If freezeWhenExpanded is set, check for frozen conditions

        if (freezeWhenExpanded) {
          // if any rows are expanded, freeze the existing data and sorting
          var keys = Object.keys(newResolvedState.expanded);

          for (var i = 0; i < keys.length; i += 1) {
            if (newResolvedState.expanded[keys[i]]) {
              newResolvedState.frozen = true;
              break;
            }
          }
        } // If the data isn't frozen and either the data or
        // sorting model has changed, update the data


        if (oldState.frozen && !newResolvedState.frozen || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData) {
          // Handle collapseOnsortedChange & collapseOnDataChange
          if (oldState.sorted !== newResolvedState.sorted && this.props.collapseOnSortingChange || oldState.filtered !== newResolvedState.filtered || oldState.showFilters !== newResolvedState.showFilters || oldState.sortedData && !newResolvedState.frozen && oldState.resolvedData !== newResolvedState.resolvedData && this.props.collapseOnDataChange) {
            newResolvedState.expanded = {};
          }

          Object.assign(newResolvedState, this.getSortedData(newResolvedState));
        } // Set page to 0 if filters change


        if (oldState.filtered !== newResolvedState.filtered) {
          newResolvedState.page = 0;
        } // Calculate pageSize all the time


        if (newResolvedState.sortedData) {
          newResolvedState.pages = newResolvedState.manual ? newResolvedState.pages : Math.ceil(newResolvedState.sortedData.length / newResolvedState.pageSize);
          newResolvedState.page = newResolvedState.manual ? newResolvedState.page : Math.max(newResolvedState.page >= newResolvedState.pages ? newResolvedState.pages - 1 : newResolvedState.page, 0);
        }

        return newResolvedState;
      }
    }, {
      key: 'setStateWithData',
      value: function setStateWithData(dataModel, cb) {
        var _this2 = this;

        var oldState = this.getResolvedState();
        var newResolvedState = this.calculateNewResolvedState(dataModel);
        return this.setState(newResolvedState, function () {
          if (cb) {
            cb();
          }

          if (oldState.page !== newResolvedState.page || oldState.pageSize !== newResolvedState.pageSize || oldState.sorted !== newResolvedState.sorted || oldState.filtered !== newResolvedState.filtered) {
            _this2.fireFetchData();
          }
        });
      }
    }]);

    return _class;
  }(Base);
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("/8Fb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("INYr");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("XfO3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("HEwt");

// CONCATENATED MODULE: ./node_modules/react-table/es/methods.js






















var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var methods_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var methods_createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

function methods_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function methods_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function methods_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



/* harmony default export */ var methods = (function (Base) {
  return function (_Base) {
    methods_inherits(_class, _Base);

    function _class() {
      methods_classCallCheck(this, _class);

      return methods_possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    methods_createClass(_class, [{
      key: 'getResolvedState',
      value: function getResolvedState(props, state) {
        var resolvedState = methods_extends({}, utils.compactObject(this.state), utils.compactObject(this.props), utils.compactObject(state), utils.compactObject(props));

        return resolvedState;
      }
    }, {
      key: 'getDataModel',
      value: function getDataModel(newState, dataChanged) {
        var _this2 = this;

        var columns = newState.columns,
            _newState$pivotBy = newState.pivotBy,
            pivotBy = _newState$pivotBy === undefined ? [] : _newState$pivotBy,
            data = newState.data,
            resolveData = newState.resolveData,
            pivotIDKey = newState.pivotIDKey,
            pivotValKey = newState.pivotValKey,
            subRowsKey = newState.subRowsKey,
            aggregatedKey = newState.aggregatedKey,
            nestingLevelKey = newState.nestingLevelKey,
            originalKey = newState.originalKey,
            indexKey = newState.indexKey,
            groupedByPivotKey = newState.groupedByPivotKey,
            SubComponent = newState.SubComponent; // Determine Header Groups

        var hasHeaderGroups = false;
        columns.forEach(function (column) {
          if (column.columns) {
            hasHeaderGroups = true;
          }
        });
        var columnsWithExpander = [].concat(_toConsumableArray(columns));
        var expanderColumn = columns.find(function (col) {
          return col.expander || col.columns && col.columns.some(function (col2) {
            return col2.expander;
          });
        }); // The actual expander might be in the columns field of a group column

        if (expanderColumn && !expanderColumn.expander) {
          expanderColumn = expanderColumn.columns.find(function (col) {
            return col.expander;
          });
        } // If we have SubComponent's we need to make sure we have an expander column


        if (SubComponent && !expanderColumn) {
          expanderColumn = {
            expander: true
          };
          columnsWithExpander = [expanderColumn].concat(_toConsumableArray(columnsWithExpander));
        }

        var makeDecoratedColumn = function makeDecoratedColumn(column, parentColumn) {
          var dcol = void 0;

          if (column.expander) {
            dcol = methods_extends({}, _this2.props.column, _this2.props.expanderDefaults, column);
          } else {
            dcol = methods_extends({}, _this2.props.column, column);
          } // Ensure minWidth is not greater than maxWidth if set


          if (dcol.maxWidth < dcol.minWidth) {
            dcol.minWidth = dcol.maxWidth;
          }

          if (parentColumn) {
            dcol.parentColumn = parentColumn;
          } // First check for string accessor


          if (typeof dcol.accessor === 'string') {
            dcol.id = dcol.id || dcol.accessor;
            var accessorString = dcol.accessor;

            dcol.accessor = function (row) {
              return utils.get(row, accessorString);
            };

            return dcol;
          } // Fall back to functional accessor (but require an ID)


          if (dcol.accessor && !dcol.id) {
            console.warn(dcol);
            throw new Error('A column id is required if using a non-string accessor for column above.');
          } // Fall back to an undefined accessor


          if (!dcol.accessor) {
            dcol.accessor = function () {
              return undefined;
            };
          }

          return dcol;
        };

        var allDecoratedColumns = []; // Decorate the columns

        var decorateAndAddToAll = function decorateAndAddToAll(column, parentColumn) {
          var decoratedColumn = makeDecoratedColumn(column, parentColumn);
          allDecoratedColumns.push(decoratedColumn);
          return decoratedColumn;
        };

        var decoratedColumns = columnsWithExpander.map(function (column) {
          if (column.columns) {
            return methods_extends({}, column, {
              columns: column.columns.map(function (d) {
                return decorateAndAddToAll(d, column);
              })
            });
          }

          return decorateAndAddToAll(column);
        }); // Build the visible columns, headers and flat column list

        var visibleColumns = decoratedColumns.slice();
        var allVisibleColumns = [];
        visibleColumns = visibleColumns.map(function (column) {
          if (column.columns) {
            var visibleSubColumns = column.columns.filter(function (d) {
              return pivotBy.indexOf(d.id) > -1 ? false : utils.getFirstDefined(d.show, true);
            });
            return methods_extends({}, column, {
              columns: visibleSubColumns
            });
          }

          return column;
        });
        visibleColumns = visibleColumns.filter(function (column) {
          return column.columns ? column.columns.length : pivotBy.indexOf(column.id) > -1 ? false : utils.getFirstDefined(column.show, true);
        }); // Find any custom pivot location

        var pivotIndex = visibleColumns.findIndex(function (col) {
          return col.pivot;
        }); // Handle Pivot Columns

        if (pivotBy.length) {
          // Retrieve the pivot columns in the correct pivot order
          var pivotColumns = [];
          pivotBy.forEach(function (pivotID) {
            var found = allDecoratedColumns.find(function (d) {
              return d.id === pivotID;
            });

            if (found) {
              pivotColumns.push(found);
            }
          });
          var PivotParentColumn = pivotColumns.reduce(function (prev, current) {
            return prev && prev === current.parentColumn && current.parentColumn;
          }, pivotColumns[0].parentColumn);
          var PivotGroupHeader = hasHeaderGroups && PivotParentColumn.Header;

          PivotGroupHeader = PivotGroupHeader || function () {
            return react_default.a.createElement('strong', null, 'Pivoted');
          };

          var pivotColumnGroup = {
            Header: PivotGroupHeader,
            columns: pivotColumns.map(function (col) {
              return methods_extends({}, _this2.props.pivotDefaults, col, {
                pivoted: true
              });
            }) // Place the pivotColumns back into the visibleColumns

          };

          if (pivotIndex >= 0) {
            pivotColumnGroup = methods_extends({}, visibleColumns[pivotIndex], pivotColumnGroup);
            visibleColumns.splice(pivotIndex, 1, pivotColumnGroup);
          } else {
            visibleColumns.unshift(pivotColumnGroup);
          }
        } // Build Header Groups


        var headerGroups = [];
        var currentSpan = []; // A convenience function to add a header and reset the currentSpan

        var addHeader = function addHeader(columns, column) {
          headerGroups.push(methods_extends({}, _this2.props.column, column, {
            columns: columns
          }));
          currentSpan = [];
        }; // Build flast list of allVisibleColumns and HeaderGroups


        visibleColumns.forEach(function (column) {
          if (column.columns) {
            allVisibleColumns = allVisibleColumns.concat(column.columns);

            if (currentSpan.length > 0) {
              addHeader(currentSpan);
            }

            addHeader(column.columns, column);
            return;
          }

          allVisibleColumns.push(column);
          currentSpan.push(column);
        });

        if (hasHeaderGroups && currentSpan.length > 0) {
          addHeader(currentSpan);
        } // Access the data


        var accessRow = function accessRow(d, i) {
          var _row;

          var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var row = (_row = {}, _defineProperty(_row, originalKey, d), _defineProperty(_row, indexKey, i), _defineProperty(_row, subRowsKey, d[subRowsKey]), _defineProperty(_row, nestingLevelKey, level), _row);
          allDecoratedColumns.forEach(function (column) {
            if (column.expander) return;
            row[column.id] = column.accessor(d);
          });

          if (row[subRowsKey]) {
            row[subRowsKey] = row[subRowsKey].map(function (d, i) {
              return accessRow(d, i, level + 1);
            });
          }

          return row;
        }; // // If the data hasn't changed, just use the cached data


        var resolvedData = this.resolvedData; // If the data has changed, run the data resolver and cache the result

        if (!this.resolvedData || dataChanged) {
          resolvedData = resolveData(data);
          this.resolvedData = resolvedData;
        } // Use the resolved data


        resolvedData = resolvedData.map(function (d, i) {
          return accessRow(d, i);
        }); // TODO: Make it possible to fabricate nested rows without pivoting

        var aggregatingColumns = allVisibleColumns.filter(function (d) {
          return !d.expander && d.aggregate;
        }); // If pivoting, recursively group the data

        var aggregate = function aggregate(rows) {
          var aggregationValues = {};
          aggregatingColumns.forEach(function (column) {
            var values = rows.map(function (d) {
              return d[column.id];
            });
            aggregationValues[column.id] = column.aggregate(values, rows);
          });
          return aggregationValues;
        };

        if (pivotBy.length) {
          var groupRecursively = function groupRecursively(rows, keys) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0; // This is the last level, just return the rows

            if (i === keys.length) {
              return rows;
            } // Group the rows together for this level


            var groupedRows = Object.entries(utils.groupBy(rows, keys[i])).map(function (_ref) {
              var _ref3;

              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              return _ref3 = {}, _defineProperty(_ref3, pivotIDKey, keys[i]), _defineProperty(_ref3, pivotValKey, key), _defineProperty(_ref3, keys[i], key), _defineProperty(_ref3, subRowsKey, value), _defineProperty(_ref3, nestingLevelKey, i), _defineProperty(_ref3, groupedByPivotKey, true), _ref3;
            }); // Recurse into the subRows

            groupedRows = groupedRows.map(function (rowGroup) {
              var _extends2;

              var subRows = groupRecursively(rowGroup[subRowsKey], keys, i + 1);
              return methods_extends({}, rowGroup, (_extends2 = {}, _defineProperty(_extends2, subRowsKey, subRows), _defineProperty(_extends2, aggregatedKey, true), _extends2), aggregate(subRows));
            });
            return groupedRows;
          };

          resolvedData = groupRecursively(resolvedData, pivotBy);
        }

        return methods_extends({}, newState, {
          resolvedData: resolvedData,
          allVisibleColumns: allVisibleColumns,
          headerGroups: headerGroups,
          allDecoratedColumns: allDecoratedColumns,
          hasHeaderGroups: hasHeaderGroups
        });
      }
    }, {
      key: 'getSortedData',
      value: function getSortedData(resolvedState) {
        var manual = resolvedState.manual,
            sorted = resolvedState.sorted,
            filtered = resolvedState.filtered,
            defaultFilterMethod = resolvedState.defaultFilterMethod,
            resolvedData = resolvedState.resolvedData,
            allDecoratedColumns = resolvedState.allDecoratedColumns;
        var sortMethodsByColumnID = {};
        allDecoratedColumns.filter(function (col) {
          return col.sortMethod;
        }).forEach(function (col) {
          sortMethodsByColumnID[col.id] = col.sortMethod;
        }); // Resolve the data from either manual data or sorted data

        return {
          sortedData: manual ? resolvedData : this.sortData(this.filterData(resolvedData, filtered, defaultFilterMethod, allDecoratedColumns), sorted, sortMethodsByColumnID)
        };
      }
    }, {
      key: 'fireFetchData',
      value: function fireFetchData() {
        // determine the current state, preferring certain state values over props
        var currentState = methods_extends({}, this.getResolvedState(), {
          page: this.getStateOrProp('page'),
          pageSize: this.getStateOrProp('pageSize'),
          filtered: this.getStateOrProp('filtered')
        });

        this.props.onFetchData(currentState, this);
      }
    }, {
      key: 'getPropOrState',
      value: function getPropOrState(key) {
        return utils.getFirstDefined(this.props[key], this.state[key]);
      }
    }, {
      key: 'getStateOrProp',
      value: function getStateOrProp(key) {
        return utils.getFirstDefined(this.state[key], this.props[key]);
      }
    }, {
      key: 'filterData',
      value: function filterData(data, filtered, defaultFilterMethod, allVisibleColumns) {
        var _this3 = this;

        var filteredData = data;

        if (filtered.length) {
          filteredData = filtered.reduce(function (filteredSoFar, nextFilter) {
            var column = allVisibleColumns.find(function (x) {
              return x.id === nextFilter.id;
            }); // Don't filter hidden columns or columns that have had their filters disabled

            if (!column || column.filterable === false) {
              return filteredSoFar;
            }

            var filterMethod = column.filterMethod || defaultFilterMethod; // If 'filterAll' is set to true, pass the entire dataset to the filter method

            if (column.filterAll) {
              return filterMethod(nextFilter, filteredSoFar, column);
            }

            return filteredSoFar.filter(function (row) {
              return filterMethod(nextFilter, row, column);
            });
          }, filteredData); // Apply the filter to the subrows if we are pivoting, and then
          // filter any rows without subcolumns because it would be strange to show

          filteredData = filteredData.map(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return row;
            }

            return methods_extends({}, row, _defineProperty({}, _this3.props.subRowsKey, _this3.filterData(row[_this3.props.subRowsKey], filtered, defaultFilterMethod, allVisibleColumns)));
          }).filter(function (row) {
            if (!row[_this3.props.subRowsKey]) {
              return true;
            }

            return row[_this3.props.subRowsKey].length > 0;
          });
        }

        return filteredData;
      }
    }, {
      key: 'sortData',
      value: function sortData(data, sorted) {
        var _this4 = this;

        var sortMethodsByColumnID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!sorted.length) {
          return data;
        }

        var sortedData = (this.props.orderByMethod || utils.orderBy)(data, sorted.map(function (sort) {
          // Support custom sorting methods for each column
          if (sortMethodsByColumnID[sort.id]) {
            return function (a, b) {
              return sortMethodsByColumnID[sort.id](a[sort.id], b[sort.id], sort.desc);
            };
          }

          return function (a, b) {
            return _this4.props.defaultSortMethod(a[sort.id], b[sort.id], sort.desc);
          };
        }), sorted.map(function (d) {
          return !d.desc;
        }), this.props.indexKey);

        sortedData.forEach(function (row) {
          if (!row[_this4.props.subRowsKey]) {
            return;
          }

          row[_this4.props.subRowsKey] = _this4.sortData(row[_this4.props.subRowsKey], sorted, sortMethodsByColumnID);
        });
        return sortedData;
      }
    }, {
      key: 'getMinRows',
      value: function getMinRows() {
        return utils.getFirstDefined(this.props.minRows, this.getStateOrProp('pageSize'));
      } // User actions

    }, {
      key: 'onPageChange',
      value: function onPageChange(page) {
        var _props = this.props,
            onPageChange = _props.onPageChange,
            collapseOnPageChange = _props.collapseOnPageChange;
        var newState = {
          page: page
        };

        if (collapseOnPageChange) {
          newState.expanded = {};
        }

        this.setStateWithData(newState, function () {
          return onPageChange && onPageChange(page);
        });
      }
    }, {
      key: 'onPageSizeChange',
      value: function onPageSizeChange(newPageSize) {
        var onPageSizeChange = this.props.onPageSizeChange;

        var _getResolvedState = this.getResolvedState(),
            pageSize = _getResolvedState.pageSize,
            page = _getResolvedState.page; // Normalize the page to display


        var currentRow = pageSize * page;
        var newPage = Math.floor(currentRow / newPageSize);
        this.setStateWithData({
          pageSize: newPageSize,
          page: newPage
        }, function () {
          return onPageSizeChange && onPageSizeChange(newPageSize, newPage);
        });
      }
    }, {
      key: 'sortColumn',
      value: function sortColumn(column, additive) {
        var _getResolvedState2 = this.getResolvedState(),
            sorted = _getResolvedState2.sorted,
            skipNextSort = _getResolvedState2.skipNextSort,
            defaultSortDesc = _getResolvedState2.defaultSortDesc;

        var firstSortDirection = Object.prototype.hasOwnProperty.call(column, 'defaultSortDesc') ? column.defaultSortDesc : defaultSortDesc;
        var secondSortDirection = !firstSortDirection; // we can't stop event propagation from the column resize move handlers
        // attached to the document because of react's synthetic events
        // so we have to prevent the sort function from actually sorting
        // if we click on the column resize element within a header.

        if (skipNextSort) {
          this.setStateWithData({
            skipNextSort: false
          });
          return;
        }

        var onSortedChange = this.props.onSortedChange;

        var newSorted = utils.clone(sorted || []).map(function (d) {
          d.desc = utils.isSortingDesc(d);
          return d;
        });

        if (!utils.isArray(column)) {
          // Single-Sort
          var existingIndex = newSorted.findIndex(function (d) {
            return d.id === column.id;
          });

          if (existingIndex > -1) {
            var existing = newSorted[existingIndex];

            if (existing.desc === secondSortDirection) {
              if (additive) {
                newSorted.splice(existingIndex, 1);
              } else {
                existing.desc = firstSortDirection;
                newSorted = [existing];
              }
            } else {
              existing.desc = secondSortDirection;

              if (!additive) {
                newSorted = [existing];
              }
            }
          } else if (additive) {
            newSorted.push({
              id: column.id,
              desc: firstSortDirection
            });
          } else {
            newSorted = [{
              id: column.id,
              desc: firstSortDirection
            }];
          }
        } else {
          // Multi-Sort
          var _existingIndex = newSorted.findIndex(function (d) {
            return d.id === column[0].id;
          }); // Existing Sorted Column


          if (_existingIndex > -1) {
            var _existing = newSorted[_existingIndex];

            if (_existing.desc === secondSortDirection) {
              if (additive) {
                newSorted.splice(_existingIndex, column.length);
              } else {
                column.forEach(function (d, i) {
                  newSorted[_existingIndex + i].desc = firstSortDirection;
                });
              }
            } else {
              column.forEach(function (d, i) {
                newSorted[_existingIndex + i].desc = secondSortDirection;
              });
            }

            if (!additive) {
              newSorted = newSorted.slice(_existingIndex, column.length);
            } // New Sort Column

          } else if (additive) {
            newSorted = newSorted.concat(column.map(function (d) {
              return {
                id: d.id,
                desc: firstSortDirection
              };
            }));
          } else {
            newSorted = column.map(function (d) {
              return {
                id: d.id,
                desc: firstSortDirection
              };
            });
          }
        }

        this.setStateWithData({
          page: !sorted.length && newSorted.length || !additive ? 0 : this.state.page,
          sorted: newSorted
        }, function () {
          return onSortedChange && onSortedChange(newSorted, column, additive);
        });
      }
    }, {
      key: 'filterColumn',
      value: function filterColumn(column, value) {
        var _getResolvedState3 = this.getResolvedState(),
            filtered = _getResolvedState3.filtered;

        var onFilteredChange = this.props.onFilteredChange; // Remove old filter first if it exists

        var newFiltering = (filtered || []).filter(function (x) {
          return x.id !== column.id;
        });

        if (value !== '') {
          newFiltering.push({
            id: column.id,
            value: value
          });
        }

        this.setStateWithData({
          filtered: newFiltering
        }, function () {
          return onFilteredChange && onFilteredChange(newFiltering, column, value);
        });
      }
    }, {
      key: 'resizeColumnStart',
      value: function resizeColumnStart(event, column, isTouch) {
        var _this5 = this;

        event.stopPropagation();
        var parentWidth = event.target.parentElement.getBoundingClientRect().width;
        var pageX = void 0;

        if (isTouch) {
          pageX = event.changedTouches[0].pageX;
        } else {
          pageX = event.pageX;
        }

        this.trapEvents = true;
        this.setStateWithData({
          currentlyResizing: {
            id: column.id,
            startX: pageX,
            parentWidth: parentWidth
          }
        }, function () {
          if (isTouch) {
            document.addEventListener('touchmove', _this5.resizeColumnMoving);
            document.addEventListener('touchcancel', _this5.resizeColumnEnd);
            document.addEventListener('touchend', _this5.resizeColumnEnd);
          } else {
            document.addEventListener('mousemove', _this5.resizeColumnMoving);
            document.addEventListener('mouseup', _this5.resizeColumnEnd);
            document.addEventListener('mouseleave', _this5.resizeColumnEnd);
          }
        });
      }
    }, {
      key: 'resizeColumnMoving',
      value: function resizeColumnMoving(event) {
        event.stopPropagation();
        var _props2 = this.props,
            onResizedChange = _props2.onResizedChange,
            column = _props2.column;

        var _getResolvedState4 = this.getResolvedState(),
            resized = _getResolvedState4.resized,
            currentlyResizing = _getResolvedState4.currentlyResizing,
            columns = _getResolvedState4.columns;

        var currentColumn = columns.find(function (c) {
          return c.accessor === currentlyResizing.id || c.id === currentlyResizing.id;
        });
        var minResizeWidth = currentColumn && currentColumn.minResizeWidth != null ? currentColumn.minResizeWidth : column.minResizeWidth; // Delete old value

        var newResized = resized.filter(function (x) {
          return x.id !== currentlyResizing.id;
        });
        var pageX = void 0;

        if (event.type === 'touchmove') {
          pageX = event.changedTouches[0].pageX;
        } else if (event.type === 'mousemove') {
          pageX = event.pageX;
        }

        var newWidth = Math.max(currentlyResizing.parentWidth + pageX - currentlyResizing.startX, minResizeWidth);
        newResized.push({
          id: currentlyResizing.id,
          value: newWidth
        });
        this.setStateWithData({
          resized: newResized
        }, function () {
          return onResizedChange && onResizedChange(newResized, event);
        });
      }
    }, {
      key: 'resizeColumnEnd',
      value: function resizeColumnEnd(event) {
        event.stopPropagation();
        var isTouch = event.type === 'touchend' || event.type === 'touchcancel';

        if (isTouch) {
          document.removeEventListener('touchmove', this.resizeColumnMoving);
          document.removeEventListener('touchcancel', this.resizeColumnEnd);
          document.removeEventListener('touchend', this.resizeColumnEnd);
        } // If its a touch event clear the mouse one's as well because sometimes
        // the mouseDown event gets called as well, but the mouseUp event doesn't


        document.removeEventListener('mousemove', this.resizeColumnMoving);
        document.removeEventListener('mouseup', this.resizeColumnEnd);
        document.removeEventListener('mouseleave', this.resizeColumnEnd); // The touch events don't propagate up to the sorting's onMouseDown event so
        // no need to prevent it from happening or else the first click after a touch
        // event resize will not sort the column.

        if (!isTouch) {
          this.setStateWithData({
            skipNextSort: true,
            currentlyResizing: false
          });
        }
      }
    }]);

    return _class;
  }(Base);
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("9VmF");

// CONCATENATED MODULE: ./node_modules/react-table/es/pagination.js









var pagination_createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var pagination_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function pagination_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function pagination_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function pagination_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}




var pagination_defaultButton = function defaultButton(props) {
  return react_default.a.createElement('button', pagination_extends({
    type: 'button'
  }, props, {
    className: '-btn'
  }), props.children);
};

var pagination_ReactTablePagination = function (_Component) {
  pagination_inherits(ReactTablePagination, _Component);

  function ReactTablePagination(props) {
    pagination_classCallCheck(this, ReactTablePagination);

    var _this = pagination_possibleConstructorReturn(this, (ReactTablePagination.__proto__ || Object.getPrototypeOf(ReactTablePagination)).call(this, props));

    _this.getSafePage = _this.getSafePage.bind(_this);
    _this.changePage = _this.changePage.bind(_this);
    _this.applyPage = _this.applyPage.bind(_this);
    _this.state = {
      page: props.page
    };
    return _this;
  }

  pagination_createClass(ReactTablePagination, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.page !== this.props.page && prevState.page !== this.state.page) {
        // this is probably safe because we only update when old/new state.page are different
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          page: this.props.page
        });
      }
    }
  }, {
    key: 'getSafePage',
    value: function getSafePage(page) {
      if (Number.isNaN(page)) {
        page = this.props.page;
      }

      return Math.min(Math.max(page, 0), this.props.pages - 1);
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      page = this.getSafePage(page);
      this.setState({
        page: page
      });

      if (this.props.page !== page) {
        this.props.onPageChange(page);
      }
    }
  }, {
    key: 'applyPage',
    value: function applyPage(e) {
      if (e) {
        e.preventDefault();
      }

      var page = this.state.page;
      this.changePage(page === '' ? this.props.page : page);
    }
  }, {
    key: 'getPageJumpProperties',
    value: function getPageJumpProperties() {
      var _this2 = this;

      return {
        onKeyPress: function onKeyPress(e) {
          if (e.which === 13 || e.keyCode === 13) {
            _this2.applyPage();
          }
        },
        onBlur: this.applyPage,
        value: this.state.page === '' ? '' : this.state.page + 1,
        onChange: function onChange(e) {
          var val = e.target.value;
          var page = val - 1;

          if (val === '') {
            return _this2.setState({
              page: val
            });
          }

          _this2.setState({
            page: _this2.getSafePage(page)
          });
        },
        inputType: this.state.page === '' ? 'text' : 'number',
        pageJumpText: this.props.pageJumpText
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          pages = _props.pages,
          page = _props.page,
          showPageSizeOptions = _props.showPageSizeOptions,
          pageSizeOptions = _props.pageSizeOptions,
          pageSize = _props.pageSize,
          showPageJump = _props.showPageJump,
          canPrevious = _props.canPrevious,
          canNext = _props.canNext,
          onPageSizeChange = _props.onPageSizeChange,
          className = _props.className,
          PreviousComponent = _props.PreviousComponent,
          NextComponent = _props.NextComponent,
          renderPageJump = _props.renderPageJump,
          renderCurrentPage = _props.renderCurrentPage,
          renderTotalPagesCount = _props.renderTotalPagesCount,
          renderPageSizeOptions = _props.renderPageSizeOptions;
      return react_default.a.createElement('div', {
        className: classnames_default()(className, '-pagination'),
        style: this.props.style
      }, react_default.a.createElement('div', {
        className: '-previous'
      }, react_default.a.createElement(PreviousComponent, {
        onClick: function onClick() {
          if (!canPrevious) return;

          _this3.changePage(page - 1);
        },
        disabled: !canPrevious
      }, this.props.previousText)), react_default.a.createElement('div', {
        className: '-center'
      }, react_default.a.createElement('span', {
        className: '-pageInfo'
      }, this.props.pageText, ' ', showPageJump ? renderPageJump(this.getPageJumpProperties()) : renderCurrentPage(page), ' ', this.props.ofText, ' ', renderTotalPagesCount(pages)), showPageSizeOptions && renderPageSizeOptions({
        pageSize: pageSize,
        rowsSelectorText: this.props.rowsSelectorText,
        pageSizeOptions: pageSizeOptions,
        onPageSizeChange: onPageSizeChange,
        rowsText: this.props.rowsText
      })), react_default.a.createElement('div', {
        className: '-next'
      }, react_default.a.createElement(NextComponent, {
        onClick: function onClick() {
          if (!canNext) return;

          _this3.changePage(page + 1);
        },
        disabled: !canNext
      }, this.props.nextText)));
    }
  }]);

  return ReactTablePagination;
}(react["Component"]);

pagination_ReactTablePagination.defaultProps = {
  PreviousComponent: pagination_defaultButton,
  NextComponent: pagination_defaultButton,
  renderPageJump: function renderPageJump(_ref) {
    var onChange = _ref.onChange,
        value = _ref.value,
        onBlur = _ref.onBlur,
        onKeyPress = _ref.onKeyPress,
        inputType = _ref.inputType,
        pageJumpText = _ref.pageJumpText;
    return react_default.a.createElement('div', {
      className: '-pageJump'
    }, react_default.a.createElement('input', {
      'aria-label': pageJumpText,
      type: inputType,
      onChange: onChange,
      value: value,
      onBlur: onBlur,
      onKeyPress: onKeyPress
    }));
  },
  renderCurrentPage: function renderCurrentPage(page) {
    return react_default.a.createElement('span', {
      className: '-currentPage'
    }, page + 1);
  },
  renderTotalPagesCount: function renderTotalPagesCount(pages) {
    return react_default.a.createElement('span', {
      className: '-totalPages'
    }, pages || 1);
  },
  renderPageSizeOptions: function renderPageSizeOptions(_ref2) {
    var pageSize = _ref2.pageSize,
        pageSizeOptions = _ref2.pageSizeOptions,
        rowsSelectorText = _ref2.rowsSelectorText,
        onPageSizeChange = _ref2.onPageSizeChange,
        rowsText = _ref2.rowsText;
    return react_default.a.createElement('span', {
      className: 'select-wrap -pageSizeOptions'
    }, react_default.a.createElement('select', {
      'aria-label': rowsSelectorText,
      onChange: function onChange(e) {
        return onPageSizeChange(Number(e.target.value));
      },
      value: pageSize
    }, pageSizeOptions.map(function (option, i) {
      return (// eslint-disable-next-line react/no-array-index-key
        react_default.a.createElement('option', {
          key: i,
          value: option
        }, option + ' ' + rowsText)
      );
    })));
  }
};
/* harmony default export */ var pagination = (pagination_ReactTablePagination);
// CONCATENATED MODULE: ./node_modules/react-table/es/defaultProps.js






var defaultProps_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function defaultProps_objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}


 //




var emptyObj = function emptyObj() {
  return {};
};

/* harmony default export */ var defaultProps = ({
  // General
  data: [],
  resolveData: function resolveData(data) {
    return data;
  },
  loading: false,
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  pageSizeOptions: [5, 10, 20, 25, 50, 100],
  defaultPage: 0,
  defaultPageSize: 20,
  showPageJump: true,
  collapseOnSortingChange: true,
  collapseOnPageChange: true,
  collapseOnDataChange: true,
  freezeWhenExpanded: false,
  sortable: true,
  multiSort: true,
  resizable: true,
  filterable: false,
  defaultSortDesc: false,
  defaultSorted: [],
  defaultFiltered: [],
  defaultResized: [],
  defaultExpanded: {},
  // eslint-disable-next-line no-unused-vars
  defaultFilterMethod: function defaultFilterMethod(filter, row, column) {
    var id = filter.pivotId || filter.id;
    return row[id] !== undefined ? String(row[id]).startsWith(filter.value) : true;
  },
  // eslint-disable-next-line no-unused-vars
  defaultSortMethod: function defaultSortMethod(a, b, desc) {
    // force null and undefined to the bottom
    a = a === null || a === undefined ? '' : a;
    b = b === null || b === undefined ? '' : b; // force any string values to lowercase

    a = typeof a === 'string' ? a.toLowerCase() : a;
    b = typeof b === 'string' ? b.toLowerCase() : b; // Return either 1 or -1 to indicate a sort priority

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    } // returning 0, undefined or any falsey value will use subsequent sorts or
    // the index as a tiebreaker


    return 0;
  },
  // Controlled State Props
  // page: undefined,
  // pageSize: undefined,
  // sorted: [],
  // filtered: [],
  // resized: [],
  // expanded: {},
  // Controlled State Callbacks
  onPageChange: undefined,
  onPageSizeChange: undefined,
  onSortedChange: undefined,
  onFilteredChange: undefined,
  onResizedChange: undefined,
  onExpandedChange: undefined,
  // Pivoting
  pivotBy: undefined,
  // Key Constants
  pivotValKey: '_pivotVal',
  pivotIDKey: '_pivotID',
  subRowsKey: '_subRows',
  aggregatedKey: '_aggregated',
  nestingLevelKey: '_nestingLevel',
  originalKey: '_original',
  indexKey: '_index',
  groupedByPivotKey: '_groupedByPivot',
  // Server-side Callbacks
  onFetchData: function onFetchData() {
    return null;
  },
  // Classes
  className: '',
  style: {},
  // Component decorators
  getProps: emptyObj,
  getTableProps: emptyObj,
  getTheadGroupProps: emptyObj,
  getTheadGroupTrProps: emptyObj,
  getTheadGroupThProps: emptyObj,
  getTheadProps: emptyObj,
  getTheadTrProps: emptyObj,
  getTheadThProps: emptyObj,
  getTheadFilterProps: emptyObj,
  getTheadFilterTrProps: emptyObj,
  getTheadFilterThProps: emptyObj,
  getTbodyProps: emptyObj,
  getTrGroupProps: emptyObj,
  getTrProps: emptyObj,
  getTdProps: emptyObj,
  getTfootProps: emptyObj,
  getTfootTrProps: emptyObj,
  getTfootTdProps: emptyObj,
  getPaginationProps: emptyObj,
  getLoadingProps: emptyObj,
  getNoDataProps: emptyObj,
  getResizerProps: emptyObj,
  // Global Column Defaults
  column: {
    // Renderers
    Cell: undefined,
    Header: undefined,
    Footer: undefined,
    Aggregated: undefined,
    Pivot: undefined,
    PivotValue: undefined,
    Expander: undefined,
    Filter: undefined,
    Placeholder: undefined,
    // All Columns
    sortable: undefined,
    // use table default
    resizable: undefined,
    // use table default
    filterable: undefined,
    // use table default
    show: true,
    minWidth: 100,
    minResizeWidth: 11,
    // Cells only
    className: '',
    style: {},
    getProps: emptyObj,
    // Pivot only
    aggregate: undefined,
    // Headers only
    headerClassName: '',
    headerStyle: {},
    getHeaderProps: emptyObj,
    // Footers only
    footerClassName: '',
    footerStyle: {},
    getFooterProps: emptyObj,
    filterMethod: undefined,
    filterAll: false,
    sortMethod: undefined
  },
  // Global Expander Column Defaults
  expanderDefaults: {
    sortable: false,
    resizable: false,
    filterable: false,
    width: 35
  },
  pivotDefaults: {// extend the defaults for pivoted columns here
  },
  // Text
  previousText: 'Previous',
  nextText: 'Next',
  loadingText: 'Loading...',
  noDataText: 'No rows found',
  pageText: 'Page',
  ofText: 'of',
  rowsText: 'rows',
  pageJumpText: 'jump to page',
  rowsSelectorText: 'rows per page',
  // Components
  TableComponent: function TableComponent(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = defaultProps_objectWithoutProperties(_ref, ['children', 'className']);

    return react_default.a.createElement('div', defaultProps_extends({
      className: classnames_default()('rt-table', className),
      role: 'grid' // tabIndex='0'

    }, rest), children);
  },
  TheadComponent: utils.makeTemplateComponent('rt-thead', 'Thead'),
  TbodyComponent: utils.makeTemplateComponent('rt-tbody', 'Tbody'),
  TrGroupComponent: function TrGroupComponent(_ref2) {
    var children = _ref2.children,
        className = _ref2.className,
        rest = defaultProps_objectWithoutProperties(_ref2, ['children', 'className']);

    return react_default.a.createElement('div', defaultProps_extends({
      className: classnames_default()('rt-tr-group', className),
      role: 'rowgroup'
    }, rest), children);
  },
  TrComponent: function TrComponent(_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        rest = defaultProps_objectWithoutProperties(_ref3, ['children', 'className']);

    return react_default.a.createElement('div', defaultProps_extends({
      className: classnames_default()('rt-tr', className),
      role: 'row'
    }, rest), children);
  },
  ThComponent: function ThComponent(_ref4) {
    var toggleSort = _ref4.toggleSort,
        className = _ref4.className,
        children = _ref4.children,
        rest = defaultProps_objectWithoutProperties(_ref4, ['toggleSort', 'className', 'children']);

    return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events
      react_default.a.createElement('div', defaultProps_extends({
        className: classnames_default()('rt-th', className),
        onClick: function onClick(e) {
          return toggleSort && toggleSort(e);
        },
        role: 'columnheader',
        tabIndex: '-1' // Resolves eslint issues without implementing keyboard navigation incorrectly

      }, rest), children)
    );
  },
  TdComponent: function TdComponent(_ref5) {
    var toggleSort = _ref5.toggleSort,
        className = _ref5.className,
        children = _ref5.children,
        rest = defaultProps_objectWithoutProperties(_ref5, ['toggleSort', 'className', 'children']);

    return react_default.a.createElement('div', defaultProps_extends({
      className: classnames_default()('rt-td', className),
      role: 'gridcell'
    }, rest), children);
  },
  TfootComponent: utils.makeTemplateComponent('rt-tfoot', 'Tfoot'),
  FilterComponent: function FilterComponent(_ref6) {
    var filter = _ref6.filter,
        _onChange = _ref6.onChange,
        column = _ref6.column;
    return react_default.a.createElement('input', {
      type: 'text',
      style: {
        width: '100%'
      },
      placeholder: column.Placeholder,
      value: filter ? filter.value : '',
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      }
    });
  },
  ExpanderComponent: function ExpanderComponent(_ref7) {
    var isExpanded = _ref7.isExpanded;
    return react_default.a.createElement('div', {
      className: classnames_default()('rt-expander', isExpanded && '-open')
    }, "\u2022");
  },
  PivotValueComponent: function PivotValueComponent(_ref8) {
    var subRows = _ref8.subRows,
        value = _ref8.value;
    return react_default.a.createElement('span', null, value, ' ', subRows && '(' + subRows.length + ')');
  },
  AggregatedComponent: function AggregatedComponent(_ref9) {
    var subRows = _ref9.subRows,
        column = _ref9.column;
    var previewValues = subRows.filter(function (d) {
      return typeof d[column.id] !== 'undefined';
    }).map(function (row, i) {
      return (// eslint-disable-next-line react/no-array-index-key
        react_default.a.createElement('span', {
          key: i
        }, row[column.id], i < subRows.length - 1 ? ', ' : '')
      );
    });
    return react_default.a.createElement('span', null, previewValues);
  },
  PivotComponent: undefined,
  // this is a computed default generated using
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: pagination,
  PreviousComponent: undefined,
  NextComponent: undefined,
  LoadingComponent: function LoadingComponent(_ref10) {
    var className = _ref10.className,
        loading = _ref10.loading,
        loadingText = _ref10.loadingText,
        rest = defaultProps_objectWithoutProperties(_ref10, ['className', 'loading', 'loadingText']);

    return react_default.a.createElement('div', defaultProps_extends({
      className: classnames_default()('-loading', {
        '-active': loading
      }, className)
    }, rest), react_default.a.createElement('div', {
      className: '-loading-inner'
    }, loadingText));
  },
  NoDataComponent: utils.makeTemplateComponent('rt-noData', 'NoData'),
  ResizerComponent: utils.makeTemplateComponent('rt-resizer', 'Resizer'),
  PadRowComponent: function PadRowComponent() {
    return react_default.a.createElement('span', null, '\xA0');
  }
});
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-table/es/propTypes.js

/* harmony default export */ var propTypes = ({
  // General
  data: prop_types_default.a.any,
  loading: prop_types_default.a.bool,
  showPagination: prop_types_default.a.bool,
  showPaginationTop: prop_types_default.a.bool,
  showPaginationBottom: prop_types_default.a.bool,
  showPageSizeOptions: prop_types_default.a.bool,
  pageSizeOptions: prop_types_default.a.array,
  defaultPageSize: prop_types_default.a.number,
  showPageJump: prop_types_default.a.bool,
  collapseOnSortingChange: prop_types_default.a.bool,
  collapseOnPageChange: prop_types_default.a.bool,
  collapseOnDataChange: prop_types_default.a.bool,
  freezeWhenExpanded: prop_types_default.a.bool,
  sortable: prop_types_default.a.bool,
  resizable: prop_types_default.a.bool,
  filterable: prop_types_default.a.bool,
  defaultSortDesc: prop_types_default.a.bool,
  defaultSorted: prop_types_default.a.array,
  defaultFiltered: prop_types_default.a.array,
  defaultResized: prop_types_default.a.array,
  defaultExpanded: prop_types_default.a.object,
  defaultFilterMethod: prop_types_default.a.func,
  defaultSortMethod: prop_types_default.a.func,
  // Controlled State Callbacks
  onPageChange: prop_types_default.a.func,
  onPageSizeChange: prop_types_default.a.func,
  onSortedChange: prop_types_default.a.func,
  onFilteredChange: prop_types_default.a.func,
  onResizedChange: prop_types_default.a.func,
  onExpandedChange: prop_types_default.a.func,
  // Pivoting
  pivotBy: prop_types_default.a.array,
  // Key Constants
  pivotValKey: prop_types_default.a.string,
  pivotIDKey: prop_types_default.a.string,
  subRowsKey: prop_types_default.a.string,
  aggregatedKey: prop_types_default.a.string,
  nestingLevelKey: prop_types_default.a.string,
  originalKey: prop_types_default.a.string,
  indexKey: prop_types_default.a.string,
  groupedByPivotKey: prop_types_default.a.string,
  // Server-side Callbacks
  onFetchData: prop_types_default.a.func,
  // Classes
  className: prop_types_default.a.string,
  style: prop_types_default.a.object,
  // Component decorators
  getProps: prop_types_default.a.func,
  getTableProps: prop_types_default.a.func,
  getTheadGroupProps: prop_types_default.a.func,
  getTheadGroupTrProps: prop_types_default.a.func,
  getTheadGroupThProps: prop_types_default.a.func,
  getTheadProps: prop_types_default.a.func,
  getTheadTrProps: prop_types_default.a.func,
  getTheadThProps: prop_types_default.a.func,
  getTheadFilterProps: prop_types_default.a.func,
  getTheadFilterTrProps: prop_types_default.a.func,
  getTheadFilterThProps: prop_types_default.a.func,
  getTbodyProps: prop_types_default.a.func,
  getTrGroupProps: prop_types_default.a.func,
  getTrProps: prop_types_default.a.func,
  getTdProps: prop_types_default.a.func,
  getTfootProps: prop_types_default.a.func,
  getTfootTrProps: prop_types_default.a.func,
  getTfootTdProps: prop_types_default.a.func,
  getPaginationProps: prop_types_default.a.func,
  getLoadingProps: prop_types_default.a.func,
  getNoDataProps: prop_types_default.a.func,
  getResizerProps: prop_types_default.a.func,
  // Global Column Defaults
  columns: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    // Renderers
    Cell: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Header: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Footer: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Aggregated: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Pivot: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    PivotValue: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Expander: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.string, prop_types_default.a.elementType]),
    Filter: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.elementType]),
    // All Columns
    sortable: prop_types_default.a.bool,
    // use table default
    resizable: prop_types_default.a.bool,
    // use table default
    filterable: prop_types_default.a.bool,
    // use table default
    show: prop_types_default.a.bool,
    minWidth: prop_types_default.a.number,
    minResizeWidth: prop_types_default.a.number,
    // Cells only
    className: prop_types_default.a.string,
    style: prop_types_default.a.object,
    getProps: prop_types_default.a.func,
    // Pivot only
    aggregate: prop_types_default.a.func,
    // Headers only
    headerClassName: prop_types_default.a.string,
    headerStyle: prop_types_default.a.object,
    getHeaderProps: prop_types_default.a.func,
    // Footers only
    footerClassName: prop_types_default.a.string,
    footerStyle: prop_types_default.a.object,
    getFooterProps: prop_types_default.a.func,
    filterMethod: prop_types_default.a.func,
    filterAll: prop_types_default.a.bool,
    sortMethod: prop_types_default.a.func
  })),
  // Global Expander Column Defaults
  expanderDefaults: prop_types_default.a.shape({
    sortable: prop_types_default.a.bool,
    resizable: prop_types_default.a.bool,
    filterable: prop_types_default.a.bool,
    width: prop_types_default.a.number
  }),
  pivotDefaults: prop_types_default.a.object,
  // Text
  previousText: prop_types_default.a.node,
  nextText: prop_types_default.a.node,
  loadingText: prop_types_default.a.node,
  noDataText: prop_types_default.a.node,
  pageText: prop_types_default.a.node,
  ofText: prop_types_default.a.node,
  rowsText: prop_types_default.a.node,
  pageJumpText: prop_types_default.a.node,
  rowsSelectorText: prop_types_default.a.node,
  // Components
  TableComponent: prop_types_default.a.elementType,
  TheadComponent: prop_types_default.a.elementType,
  TbodyComponent: prop_types_default.a.elementType,
  TrGroupComponent: prop_types_default.a.elementType,
  TrComponent: prop_types_default.a.elementType,
  ThComponent: prop_types_default.a.elementType,
  TdComponent: prop_types_default.a.elementType,
  TfootComponent: prop_types_default.a.elementType,
  FilterComponent: prop_types_default.a.elementType,
  ExpanderComponent: prop_types_default.a.elementType,
  PivotValueComponent: prop_types_default.a.elementType,
  AggregatedComponent: prop_types_default.a.elementType,
  // this is a computed default generated using
  PivotComponent: prop_types_default.a.elementType,
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: prop_types_default.a.elementType,
  PreviousComponent: prop_types_default.a.elementType,
  NextComponent: prop_types_default.a.elementType,
  LoadingComponent: prop_types_default.a.elementType,
  NoDataComponent: prop_types_default.a.elementType,
  ResizerComponent: prop_types_default.a.elementType,
  PadRowComponent: prop_types_default.a.elementType
});
// CONCATENATED MODULE: ./node_modules/react-table/es/index.js
















var es_slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var es_createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function es_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function es_possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function es_inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}


 //






var ReactTableDefaults = defaultProps;

var es_ReactTable = function (_Methods) {
  es_inherits(ReactTable, _Methods);

  function ReactTable(props) {
    es_classCallCheck(this, ReactTable);

    var _this = es_possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this, props));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);
    return _this;
  }

  es_createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing; // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();

      var padRows = utils.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;

          var rowWithViewIndex = es_extends({}, row, {
            _viewIndex: index
          });

          var newPath = path.concat([i]);

          if (rowWithViewIndex[subRowsKey] && utils.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = es_slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }

          return rowWithViewIndex;
        }), index];
      };

      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = es_slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];
      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = utils.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return utils.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = es_extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = utils.splitProps(getProps(finalState, undefined, undefined, this));

      var tableProps = utils.splitProps(getTableProps(finalState, undefined, undefined, this));

      var tBodyProps = utils.splitProps(getTbodyProps(finalState, undefined, undefined, this));

      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this); // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };

        var flex = utils.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));

        var width = utils.sum(column.columns.map(function (col) {
          return utils.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));

        var maxWidth = utils.sum(column.columns.map(function (col) {
          return utils.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = utils.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));

        var columnHeaderProps = utils.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = es_extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = es_extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: utils.asPx(width),
          maxWidth: utils.asPx(maxWidth)
        };
        return react_default.a.createElement(ThComponent, es_extends({
          key: i + '-' + column.id,
          className: classnames_default()(classes),
          style: es_extends({}, styles, flexStyles)
        }, rest), utils.normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        }));
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = utils.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));

        var theadGroupTrProps = utils.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(TheadComponent, es_extends({
          className: classnames_default()('-headerGroups', theadGroupProps.className),
          style: es_extends({}, theadGroupProps.style, {
            minWidth: rowMinWidth + 'px'
          })
        }, theadGroupProps.rest), react_default.a.createElement(TrComponent, es_extends({
          className: theadGroupTrProps.className,
          style: theadGroupTrProps.style
        }, theadGroupTrProps.rest), headerGroups.map(makeHeaderGroup)));
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;

        var width = utils.getFirstDefined(resizedCol.value, column.width, column.minWidth);

        var maxWidth = utils.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

        var theadThProps = utils.splitProps(getTheadThProps(finalState, undefined, column, _this2));

        var columnHeaderProps = utils.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = es_extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = es_extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = utils.getFirstDefined(column.resizable, resizable, false);

        var resizer = isResizable ? react_default.a.createElement(ResizerComponent, es_extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = utils.getFirstDefined(column.sortable, sortable, false);

        return react_default.a.createElement(ThComponent, es_extends({
          key: i + '-' + column.id,
          className: classnames_default()(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
          style: es_extends({}, styles, {
            flex: width + ' 0 auto',
            width: utils.asPx(width),
            maxWidth: utils.asPx(maxWidth)
          }),
          toggleSort: function toggleSort(e) {
            if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
          }
        }, rest), react_default.a.createElement('div', {
          className: classnames_default()(isResizable && 'rt-resizable-header-content')
        }, utils.normalizeComponent(column.Header, {
          data: sortedData,
          column: column
        })), resizer);
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = utils.splitProps(getTheadProps(finalState, undefined, undefined, _this2));

        var theadTrProps = utils.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(TheadComponent, es_extends({
          className: classnames_default()('-header', theadProps.className),
          style: es_extends({}, theadProps.style, {
            minWidth: rowMinWidth + 'px'
          })
        }, theadProps.rest), react_default.a.createElement(TrComponent, es_extends({
          className: theadTrProps.className,
          style: theadTrProps.style
        }, theadTrProps.rest), allVisibleColumns.map(makeHeader)));
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};

        var width = utils.getFirstDefined(resizedCol.value, column.width, column.minWidth);

        var maxWidth = utils.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

        var theadFilterThProps = utils.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));

        var columnHeaderProps = utils.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = es_extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = es_extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });
        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = utils.getFirstDefined(column.filterable, filterable, false);

        return react_default.a.createElement(ThComponent, es_extends({
          key: i + '-' + column.id,
          className: classnames_default()(classes),
          style: es_extends({}, styles, {
            flex: width + ' 0 auto',
            width: utils.asPx(width),
            maxWidth: utils.asPx(maxWidth)
          })
        }, rest), isFilterable ? utils.normalizeComponent(ResolvedFilterComponent, {
          column: column,
          filter: filter,
          onChange: function onChange(value) {
            return _this2.filterColumn(column, value);
          }
        }, defaultProps.column.Filter) : null);
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = utils.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));

        var theadFilterTrProps = utils.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(TheadComponent, es_extends({
          className: classnames_default()('-filters', theadFilterProps.className),
          style: es_extends({}, theadFilterProps.style, {
            minWidth: rowMinWidth + 'px'
          })
        }, theadFilterProps.rest), react_default.a.createElement(TrComponent, es_extends({
          className: theadFilterTrProps.className,
          style: theadFilterTrProps.style
        }, theadFilterTrProps.rest), allVisibleColumns.map(makeFilter)));
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };

        var isExpanded = utils.get(expanded, rowInfo.nestingPath);

        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);

        var trProps = utils.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));

        return react_default.a.createElement(TrGroupComponent, es_extends({
          key: rowInfo.nestingPath.join('_')
        }, trGroupProps), react_default.a.createElement(TrComponent, es_extends({
          className: classnames_default()(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
          style: trProps.style
        }, trProps.rest), allVisibleColumns.map(function (column, i2) {
          var resizedCol = resized.find(function (x) {
            return x.id === column.id;
          }) || {};
          var show = typeof column.show === 'function' ? column.show() : column.show;

          var width = utils.getFirstDefined(resizedCol.value, column.width, column.minWidth);

          var maxWidth = utils.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

          var tdProps = utils.splitProps(getTdProps(finalState, rowInfo, column, _this2));

          var columnProps = utils.splitProps(column.getProps(finalState, rowInfo, column, _this2));

          var classes = [tdProps.className, column.className, columnProps.className];

          var styles = es_extends({}, tdProps.style, column.style, columnProps.style);

          var cellInfo = es_extends({}, rowInfo, {
            isExpanded: isExpanded,
            column: es_extends({}, column),
            value: rowInfo.row[column.id],
            pivoted: column.pivoted,
            expander: column.expander,
            resized: resized,
            show: show,
            width: width,
            maxWidth: maxWidth,
            tdProps: tdProps,
            columnProps: columnProps,
            classes: classes,
            styles: styles
          });

          var value = cellInfo.value;
          var useOnExpanderClick = void 0;
          var isBranch = void 0;
          var isPreview = void 0;

          var onExpanderClick = function onExpanderClick(e) {
            var newExpanded = utils.clone(expanded);

            if (isExpanded) {
              newExpanded = utils.set(newExpanded, cellInfo.nestingPath, false);
            } else {
              newExpanded = utils.set(newExpanded, cellInfo.nestingPath, {});
            }

            return _this2.setStateWithData({
              expanded: newExpanded
            }, function () {
              return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e, cellInfo);
            });
          }; // Default to a standard cell


          var resolvedCell = utils.normalizeComponent(column.Cell, cellInfo, value); // Resolve Renderers


          var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
          var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
          var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;

          var DefaultResolvedPivotComponent = PivotComponent || function (props) {
            return react_default.a.createElement('div', null, react_default.a.createElement(ResolvedExpanderComponent, props), react_default.a.createElement(ResolvedPivotValueComponent, props));
          };

          var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent; // Is this cell expandable?

          if (cellInfo.pivoted || cellInfo.expander) {
            // Make it expandable by defualt
            cellInfo.expandable = true;
            useOnExpanderClick = true; // If pivoted, has no subRows, and does not have a subComponent,
            // do not make expandable

            if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
              cellInfo.expandable = false;
            }
          }

          if (cellInfo.pivoted) {
            // Is this column a branch?
            isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows; // Should this column be blank?

            isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows; // Pivot Cell Render Override

            if (isBranch) {
              // isPivot
              resolvedCell = utils.normalizeComponent(ResolvedPivotComponent, es_extends({}, cellInfo, {
                value: row[pivotValKey]
              }), row[pivotValKey]);
            } else if (isPreview) {
              // Show the pivot preview
              resolvedCell = utils.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
            } else {
              resolvedCell = null;
            }
          } else if (cellInfo.aggregated) {
            resolvedCell = utils.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
          }

          if (cellInfo.expander) {
            resolvedCell = utils.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);

            if (pivotBy) {
              if (cellInfo.groupedByPivot) {
                resolvedCell = null;
              }

              if (!cellInfo.subRows && !SubComponent) {
                resolvedCell = null;
              }
            }
          }

          var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {}; // If there are multiple onClick events, make sure they don't
          // override eachother. This should maybe be expanded to handle all
          // function attributes

          var interactionProps = {
            onClick: resolvedOnExpanderClick
          };

          if (tdProps.rest.onClick) {
            interactionProps.onClick = function (e) {
              tdProps.rest.onClick(e, function () {
                return resolvedOnExpanderClick(e);
              });
            };
          }

          if (columnProps.rest.onClick) {
            interactionProps.onClick = function (e) {
              columnProps.rest.onClick(e, function () {
                return resolvedOnExpanderClick(e);
              });
            };
          } // Return the cell


          return react_default.a.createElement(TdComponent // eslint-disable-next-line react/no-array-index-key
          , es_extends({
            key: i2 + '-' + column.id,
            className: classnames_default()(classes, !cellInfo.expandable && !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
            style: es_extends({}, styles, {
              flex: width + ' 0 auto',
              width: utils.asPx(width),
              maxWidth: utils.asPx(maxWidth)
            })
          }, tdProps.rest, columnProps.rest, interactionProps), resolvedCell);
        })), rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
          return makePageRow(d, i, rowInfo.nestingPath);
        }), SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo, function () {
          var newExpanded = utils.clone(expanded);

          utils.set(newExpanded, rowInfo.nestingPath, false);
        }));
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;

        var width = utils.getFirstDefined(resizedCol.value, column.width, column.minWidth);

        var flex = width;

        var maxWidth = utils.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

        var tdProps = utils.splitProps(getTdProps(finalState, undefined, column, _this2));

        var columnProps = utils.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = es_extends({}, tdProps.style, column.style, columnProps.style);

        return react_default.a.createElement(TdComponent, es_extends({
          key: i + '-' + column.id,
          className: classnames_default()(classes, !show && 'hidden'),
          style: es_extends({}, styles, {
            flex: flex + ' 0 auto',
            width: utils.asPx(width),
            maxWidth: utils.asPx(maxWidth)
          })
        }, tdProps.rest), utils.normalizeComponent(PadRowComponent));
      };

      var makePadRow = function makePadRow(row, i) {
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);

        var trProps = utils.splitProps(getTrProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(TrGroupComponent, es_extends({
          key: 'pad-' + i
        }, trGroupProps), react_default.a.createElement(TrComponent, {
          className: classnames_default()('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
          style: trProps.style || {}
        }, allVisibleColumns.map(makePadColumn)));
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;

        var width = utils.getFirstDefined(resizedCol.value, column.width, column.minWidth);

        var maxWidth = utils.getFirstDefined(resizedCol.value, column.width, column.maxWidth);

        var tFootTdProps = utils.splitProps(getTfootTdProps(finalState, undefined, column, _this2));

        var columnProps = utils.splitProps(column.getProps(finalState, undefined, column, _this2));

        var columnFooterProps = utils.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = es_extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return react_default.a.createElement(TdComponent, es_extends({
          key: i + '-' + column.id,
          className: classnames_default()(classes, !show && 'hidden'),
          style: es_extends({}, styles, {
            flex: width + ' 0 auto',
            width: utils.asPx(width),
            maxWidth: utils.asPx(maxWidth)
          })
        }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest), utils.normalizeComponent(column.Footer, {
          data: sortedData,
          column: column
        }));
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = utils.splitProps(getTfootProps(finalState, undefined, undefined, _this2));

        var tFootTrProps = utils.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(TfootComponent, es_extends({
          className: tFootProps.className,
          style: es_extends({}, tFootProps.style, {
            minWidth: rowMinWidth + 'px'
          })
        }, tFootProps.rest), react_default.a.createElement(TrComponent, es_extends({
          className: classnames_default()(tFootTrProps.className),
          style: tFootTrProps.style
        }, tFootTrProps.rest), allVisibleColumns.map(makeColumnFooter)));
      };

      var makePagination = function makePagination(isTop) {
        var paginationProps = utils.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));

        return react_default.a.createElement(PaginationComponent, es_extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style,
          isTop: isTop
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        return react_default.a.createElement('div', es_extends({
          className: classnames_default()('ReactTable', className, rootProps.className),
          style: es_extends({}, style, rootProps.style)
        }, rootProps.rest), showPagination && showPaginationTop ? react_default.a.createElement('div', {
          className: 'pagination-top'
        }, makePagination(true)) : null, react_default.a.createElement(TableComponent, es_extends({
          className: classnames_default()(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
          style: tableProps.style
        }, tableProps.rest), hasHeaderGroups ? makeHeaderGroups() : null, makeHeaders(), hasFilters ? makeFilters() : null, react_default.a.createElement(TbodyComponent, es_extends({
          className: classnames_default()(tBodyProps.className),
          style: es_extends({}, tBodyProps.style, {
            minWidth: rowMinWidth + 'px'
          })
        }, tBodyProps.rest), pageRows.map(function (d, i) {
          return makePageRow(d, i);
        }), padRows.map(makePadRow)), hasColumnFooter ? makeColumnFooters() : null), showPagination && showPaginationBottom ? react_default.a.createElement('div', {
          className: 'pagination-bottom'
        }, makePagination(false)) : null, !pageRows.length && react_default.a.createElement(NoDataComponent, noDataProps, utils.normalizeComponent(noDataText)), react_default.a.createElement(LoadingComponent, es_extends({
          loading: loading,
          loadingText: loadingText
        }, loadingProps)));
      }; // childProps are optionally passed to a function-as-a-child


      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}(methods(lifecycle(react["Component"])));

es_ReactTable.propTypes = propTypes;
es_ReactTable.defaultProps = defaultProps;
/* harmony default export */ var es = (es_ReactTable);
// EXTERNAL MODULE: ../examples/benchmarks/react-table.css
var react_table = __webpack_require__("v9ym");

// CONCATENATED MODULE: ../examples/benchmarks/bench-results.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/prop-types */function getPercent(score){// Log scale between 100K - 100M, 0-3
var logScore=Math.min(Math.max(Math.log10(score)-5,0),5);var percent=Math.min(Math.max(logScore*33.3333333,5),100);return percent;}var GREEN='#85cc00';var ORANGE='#ffbf00';var RED='#ff2e00';function Star(){return react_default.a.createElement("span",{style:{fontSize:'100%',color:'yellow'}},"\u2605");}function BarCell(_ref){var color=_ref.color,percent=_ref.percent,_ref$stars=_ref.stars,stars=_ref$stars===void 0?0:_ref$stars,children=_ref.children;return react_default.a.createElement("div",{style:{width:'100%',height:'100%',backgroundColor:'#dadada',borderRadius:'2px'}},react_default.a.createElement("div",{style:{width:percent+"%",// ` workaround chrome devtools formatting issue
height:'100%',backgroundColor:color,borderRadius:'2px',transition:'all .2s ease-out'}},new Array(stars).fill(null).map(function(_,i){return react_default.a.createElement(Star,{key:""+i});}),children));}// eslint-disable-next-line react/prop-types
function PerformanceBarCell(_ref2){var row=_ref2.row;var score=row.score;var percent=getPercent(score);// 1 star per 100M
var stars=Math.floor((score||0)/5e7);var color=GREEN;if(percent<getPercent(1e7)){color=ORANGE;}if(percent<getPercent(1e6)){color=RED;}return percent?react_default.a.createElement(BarCell,{color:color,percent:percent,stars:stars}):null;}var bench_results_BenchResults=/*#__PURE__*/function(_Component){_inheritsLoose(BenchResults,_Component);function BenchResults(){return _Component.apply(this,arguments)||this;}var _proto=BenchResults.prototype;_proto._renderTable=function _renderTable(){// eslint-disable-next-line react/prop-types
var log=this.props.log;return react_default.a.createElement("div",null,react_default.a.createElement("div",{style:{display:'flex',height:22}},react_default.a.createElement(BarCell,{color:RED,percent:100},' ',"< 1M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:ORANGE,percent:100},"1M - 10M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:GREEN,percent:100},"> 10M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:GREEN,percent:100},react_default.a.createElement(Star,null),"50M iterations/s")),react_default.a.createElement(es,{data:log,columns:[{Header:'Id',accessor:'id',Cell:function Cell(_ref3){var row=_ref3.row;return row.formattedValue?row.id:react_default.a.createElement("h3",null,row.id.replace(/@math\.gl\/[a-zA-Z]*: /,''));}},{Header:'iter/s',accessor:'formattedValue',maxWidth:85},{Header:'Score',accessor:'value',id:'score',Cell:PerformanceBarCell,maxWidth:300}],showPagination:false,manual:true,className:"-striped -highlight"}));};_proto.render=function render(){return react_default.a.createElement("div",null,this._renderTable());};return BenchResults;}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("VRzm");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.seal.js
var es6_object_seal = __webpack_require__("z2o2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ../node_modules/probe.gl/dist/esm/env/globals.js
var globals = __webpack_require__("W7fB");

// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/autobind.js





function autobind(obj) {
  var predefined = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['constructor'];
  var proto = Object.getPrototypeOf(obj);
  var propNames = Object.getOwnPropertyNames(proto);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var key = _step.value;

      if (typeof obj[key] === 'function') {
        if (!predefined.find(function (name) {
          return key === name;
        })) {
          obj[key] = obj[key].bind(obj);
        }
      }
    };

    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.now.js
var es6_date_now = __webpack_require__("eM6i");

// EXTERNAL MODULE: ../node_modules/probe.gl/dist/esm/env/is-browser.js
var is_browser = __webpack_require__("o7VR");

// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/globals.js


var VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'untranspiled source';
var isBrowser = Object(is_browser["a" /* default */])();
// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/hi-res-timestamp.js


function getHiResTimestamp() {
  var timestamp;

  if (isBrowser && globals["c" /* window */].performance) {
    timestamp = globals["c" /* window */].performance.now();
  } else if (globals["b" /* process */].hrtime) {
    var timeParts = globals["b" /* process */].hrtime();
    timestamp = timeParts[0] * 1000 + timeParts[1] / 1e6;
  } else {
    timestamp = Date.now();
  }

  return timestamp;
}
// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/assert.js
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/local-storage.js




function getStorage(type) {
  try {
    var storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  } catch (e) {
    return null;
  }
}

var local_storage_LocalStorage = function () {
  function LocalStorage(id, defaultSettings) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

    classCallCheck_classCallCheck(this, LocalStorage);

    this.storage = getStorage(type);
    this.id = id;
    this.config = {};
    Object.assign(this.config, defaultSettings);

    this._loadConfiguration();
  }

  createClass_createClass(LocalStorage, [{
    key: "getConfiguration",
    value: function getConfiguration() {
      return this.config;
    }
  }, {
    key: "setConfiguration",
    value: function setConfiguration(configuration) {
      this.config = {};
      return this.updateConfiguration(configuration);
    }
  }, {
    key: "updateConfiguration",
    value: function updateConfiguration(configuration) {
      Object.assign(this.config, configuration);

      if (this.storage) {
        var serialized = JSON.stringify(this.config);
        this.storage.setItem(this.id, serialized);
      }

      return this;
    }
  }, {
    key: "_loadConfiguration",
    value: function _loadConfiguration() {
      var configuration = {};

      if (this.storage) {
        var serializedConfiguration = this.storage.getItem(this.id);
        configuration = serializedConfiguration ? JSON.parse(serializedConfiguration) : {};
      }

      Object.assign(this.config, configuration);
      return this;
    }
  }]);

  return LocalStorage;
}();


// CONCATENATED MODULE: ../node_modules/@probe.gl/bench/dist/esm/format-utils.js
function formatSI(number) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

  var _splitIntoBaseAndExpo = splitIntoBaseAndExponent(number),
      base = _splitIntoBaseAndExpo.base,
      exponent = _splitIntoBaseAndExpo.exponent;

  var multipleOf3 = Math.floor(exponent / 3);
  var remaining = exponent - multipleOf3 * 3;
  var digits = base * Math.pow(10, remaining);
  return "".concat(digits.toPrecision(precision)).concat(getSISuffix(multipleOf3));
}

function getSISuffix(multipleOf3) {
  var SI_SUFFIXES = {
    0: '',
    1: 'K',
    2: 'M',
    3: 'G',
    '-1': 'm',
    '-2': 'µ',
    '-3': 'n'
  };
  var key = String(multipleOf3);
  return key in SI_SUFFIXES ? SI_SUFFIXES[key] : "e".concat(multipleOf3 * 3);
}

function splitIntoBaseAndExponent(number) {
  var base = number;
  var exponent = 0;

  if (number !== 0) {
    while (base >= 10 || base <= -10) {
      base /= 10;
      exponent++;
    }

    while (base < 1 && base > -1) {
      base *= 10;
      exponent--;
    }
  }

  return {
    base: base,
    exponent: exponent
  };
}
// CONCATENATED MODULE: ../node_modules/@probe.gl/bench/dist/esm/stat-utils.js

function mean(numbers) {
  return numbers.reduce(function (sum, x) {
    return sum + x;
  }, 0) / numbers.length;
}
function std(numbers, _mean) {
  if (numbers.length <= 1) {
    return 0;
  }

  if (_mean === undefined) {
    _mean = mean(numbers);
  }

  return Math.sqrt(numbers.reduce(function (d, x) {
    return d + (x - _mean) * (x - _mean);
  }, 0) / (numbers.length - 1));
}
function cv(numbers) {
  var _mean = mean(numbers);

  var _std = std(numbers, _mean);

  return _std / _mean;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__("/KAi");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.repeat.js
var es6_string_repeat = __webpack_require__("FLlr");

// CONCATENATED MODULE: ../node_modules/probe.gl/dist/esm/utils/formatters.js






function formatTime(ms) {
  var formatted;

  if (ms < 10) {
    formatted = "".concat(ms.toFixed(2), "ms");
  } else if (ms < 100) {
    formatted = "".concat(ms.toFixed(1), "ms");
  } else if (ms < 1000) {
    formatted = "".concat(ms.toFixed(0), "ms");
  } else {
    formatted = "".concat((ms / 1000).toFixed(2), "s");
  }

  return formatted;
}
function leftPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(' '.repeat(padLength)).concat(string);
}
function rightPad(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var padLength = Math.max(length - string.length, 0);
  return "".concat(string).concat(' '.repeat(padLength));
}
function formatValue(v) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var EPSILON = 1e-16;
  var _opts$isInteger = opts.isInteger,
      isInteger = _opts$isInteger === void 0 ? false : _opts$isInteger;

  if (Array.isArray(v) || ArrayBuffer.isView(v)) {
    return formatArrayValue(v, opts);
  }

  if (!Number.isFinite(v)) {
    return String(v);
  }

  if (Math.abs(v) < EPSILON) {
    return isInteger ? '0' : '0.';
  }

  if (isInteger) {
    return v.toFixed(0);
  }

  if (Math.abs(v) > 100 && Math.abs(v) < 10000) {
    return v.toFixed(0);
  }

  var string = v.toPrecision(2);
  var decimal = string.indexOf('.0');
  return decimal === string.length - 2 ? string.slice(0, -1) : string;
}

function formatArrayValue(v, opts) {
  var _opts$maxElts = opts.maxElts,
      maxElts = _opts$maxElts === void 0 ? 16 : _opts$maxElts,
      _opts$size = opts.size,
      size = _opts$size === void 0 ? 1 : _opts$size;
  var string = '[';

  for (var i = 0; i < v.length && i < maxElts; ++i) {
    if (i > 0) {
      string += ",".concat(i % size === 0 ? ' ' : '');
    }

    string += formatValue(v[i], opts);
  }

  var terminator = v.length > maxElts ? '...' : ']';
  return "".concat(string).concat(terminator);
}

function formatImage(image, message, scale) {
  var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 600;
  var imageUrl = image.src.replace(/\(/g, '%28').replace(/\)/g, '%29');

  if (image.width > maxWidth) {
    scale = Math.min(scale, maxWidth / image.width);
  }

  var width = image.width * scale;
  var height = image.height * scale;
  var style = ['font-size:1px;', "padding:".concat(Math.floor(height / 2), "px ").concat(Math.floor(width / 2), "px;"), "line-height:".concat(height, "px;"), "background:url(".concat(imageUrl, ");"), "background-size:".concat(width, "px ").concat(height, "px;"), 'color:transparent;'].join('');
  return ["".concat(message, " %c+"), style];
}
// CONCATENATED MODULE: ../node_modules/@probe.gl/bench/dist/esm/bench-loggers.js

var LOG_ENTRY = {
  GROUP: 'group',
  TEST: 'test',
  COMPLETE: 'complete'
};
function logResultsAsMarkdownTable(_ref) {
  var entry = _ref.entry,
      id = _ref.id,
      itersPerSecond = _ref.itersPerSecond,
      error = _ref.error,
      time = _ref.time;
  var COL1 = 50;
  var COL2 = 12;

  switch (entry) {
    case LOG_ENTRY.GROUP:
      console.log('');
      console.log("| ".concat(rightPad(id, COL1), " | iterations/s | error |"));
      console.log("| ".concat(rightPad('---', COL1), " | ---          | --- |"));
      break;

    case LOG_ENTRY.TEST:
      console.log("| ".concat(rightPad(id, COL1), " | ").concat(rightPad(itersPerSecond, COL2), " | \xB1").concat((error * 100).toFixed(2), "% |"));
      break;

    case LOG_ENTRY.COMPLETE:
      console.log('');
      console.log("Completed benchmark in ".concat(time, "s"));
      break;

    default:
  }
}
function logResultsAsTree(_ref2) {
  var entry = _ref2.entry,
      id = _ref2.id,
      itersPerSecond = _ref2.itersPerSecond,
      error = _ref2.error,
      time = _ref2.time;

  switch (entry) {
    case LOG_ENTRY.GROUP:
      console.log('');
      console.log("".concat(id));
      break;

    case LOG_ENTRY.TEST:
      console.log("\u251C\u2500 ".concat(id, ": ").concat(itersPerSecond, " iterations/s \xB1").concat((error * 100).toFixed(2), "%"));
      break;

    case LOG_ENTRY.COMPLETE:
      console.log('');
      console.log("Completed benchmark in ".concat(time, "s"));
      break;

    default:
  }
}
function logResultsAsTreeWithElapsed(_ref3) {
  var entry = _ref3.entry,
      id = _ref3.id,
      itersPerSecond = _ref3.itersPerSecond,
      error = _ref3.error,
      time = _ref3.time;

  switch (entry) {
    case LOG_ENTRY.TEST:
      console.log("\u251C\u2500 ".concat(id, ": ").concat(itersPerSecond, " iterations/s \xB1").concat((error * 100).toFixed(2), "% (").concat(time.toFixed(2), "s elapsed)"));
      break;

    default:
      logResultsAsTree({
        entry: entry,
        id: id,
        itersPerSecond: itersPerSecond,
        time: time
      });
  }
}
// CONCATENATED MODULE: ../node_modules/@probe.gl/bench/dist/esm/bench.js














var noop = function noop() {};

var TIME_THRESHOLD_MS = 80;
var TIME_COOLDOWN_MS = 5;
var MIN_ITERATIONS = 3;
var bench_LOG_ENTRY = {
  GROUP: 'group',
  TEST: 'test',
  COMPLETE: 'complete'
};

var bench_Bench = function () {
  function Bench() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        log = _ref.log,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? TIME_THRESHOLD_MS : _ref$time,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? TIME_COOLDOWN_MS : _ref$delay,
        _ref$minIterations = _ref.minIterations,
        minIterations = _ref$minIterations === void 0 ? MIN_ITERATIONS : _ref$minIterations;

    classCallCheck_classCallCheck(this, Bench);

    if (!log) {
      var markdown = globals["a" /* global */].probe && globals["a" /* global */].probe.markdown;
      log = markdown ? logResultsAsMarkdownTable : logResultsAsTree;
    }

    this.id = id;
    this.opts = {
      log: log,
      time: time,
      delay: delay,
      minIterations: minIterations
    };
    this.tests = {};
    this.results = {};
    this.table = {};
    autobind(this);
    Object.seal(this);
  }

  createClass_createClass(Bench, [{
    key: "calibrate",
    value: function calibrate(id, func1, func2, opts) {
      return this;
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var timeStart = getHiResTimestamp();
      var tests = this.tests,
          onBenchmarkComplete = this.onBenchmarkComplete;
      var promise = runTests({
        tests: tests,
        onBenchmarkComplete: onBenchmarkComplete
      });
      promise.then(function () {
        var elapsed = (getHiResTimestamp() - timeStart) / 1000;
        logEntry(_this, {
          entry: bench_LOG_ENTRY.COMPLETE,
          time: elapsed,
          message: 'Complete'
        });

        _this.onSuiteComplete();
      });
      return promise;
    }
  }, {
    key: "group",
    value: function group(id) {
      assert(!this.tests[id], 'tests need unique id strings');
      this.tests[id] = {
        id: id,
        group: true,
        opts: this.opts
      };
      return this;
    }
  }, {
    key: "add",
    value: function add(priority, id, func1, func2) {
      this._add(priority, id, func1, func2);

      return this;
    }
  }, {
    key: "addAsync",
    value: function addAsync(priority, id, func1, func2) {
      var test = this._add(priority, id, func1, func2);

      test.async = true;
      return this;
    }
  }, {
    key: "onBenchmarkComplete",
    value: function onBenchmarkComplete(_ref2) {
      var id = _ref2.id,
          time = _ref2.time,
          iterations = _ref2.iterations,
          itersPerSecond = _ref2.itersPerSecond;
      var current = Math.round(iterations / time);
      this.table[id] = {
        percent: '',
        iterations: "".concat(itersPerSecond, "/s"),
        current: current,
        max: ''
      };
    }
  }, {
    key: "onSuiteComplete",
    value: function onSuiteComplete() {
      var localStorage = new local_storage_LocalStorage({
        id: this.id
      });
      var saved = localStorage.getConfiguration();
      var current = this.updateTable(this.table, saved);
      localStorage.updateConfiguration(current);
      console.table(current);
    }
  }, {
    key: "updateTable",
    value: function updateTable(current, saved) {
      for (var id in this.table) {
        if (saved[id] && saved[id].max !== undefined) {
          current[id].max = Math.max(current[id].current, saved[id].max);
          var delta = current[id].current / saved[id].max;
          current[id].percent = "".concat(Math.round(delta * 100 - 100), "%");
        } else {
          current[id].max = current[id].current;
        }
      }

      return current;
    }
  }, {
    key: "_add",
    value: function _add(priority, id, func1, func2) {
      if (typeof priority === 'string') {
        func2 = func1;
        func1 = id;
        id = priority;
        priority = 0;
      }

      assert(id);
      assert(typeof func1 === 'function');
      var initFunc = null;
      var testFunc = func1;

      if (typeof func2 === 'function') {
        initFunc = func1;
        testFunc = func2;
      }

      assert(!this.tests[id], 'tests need unique id strings');
      this.tests[id] = {
        id: id,
        priority: priority,
        initFunc: initFunc,
        testFunc: testFunc,
        opts: this.opts
      };
      return this.tests[id];
    }
  }]);

  return Bench;
}();



function addDelay(timeout, func) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve();
    }, timeout);
  });
}

function runCalibrationTests(_ref3) {
  var tests = _ref3.tests;

  for (var id in tests) {
    var test = tests[id];

    if (!test.group) {
      runBenchTestIterations(test, 1);
    }
  }
}

function logEntry(test, opts) {
  var priority = (globals["a" /* global */].probe && globals["a" /* global */].probe.priority) | 10;

  if ((opts.priority | 0) <= priority) {
    test.opts.log(opts);
  }
}

function runTests(_x) {
  return _runTests.apply(this, arguments);
}

function _runTests() {
  _runTests = _asyncToGenerator(regenerator_default.a.mark(function _callee(_ref4) {
    var tests, _ref4$onBenchmarkComp, onBenchmarkComplete, id, test;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tests = _ref4.tests, _ref4$onBenchmarkComp = _ref4.onBenchmarkComplete, onBenchmarkComplete = _ref4$onBenchmarkComp === void 0 ? noop : _ref4$onBenchmarkComp;
            runCalibrationTests({
              tests: tests,
              onBenchmarkComplete: onBenchmarkComplete
            });
            _context.t0 = regenerator_default.a.keys(tests);

          case 3:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 14;
              break;
            }

            id = _context.t1.value;
            test = tests[id];

            if (!test.group) {
              _context.next = 10;
              break;
            }

            logEntry(test, {
              entry: bench_LOG_ENTRY.GROUP,
              id: test.id,
              message: test.id
            });
            _context.next = 12;
            break;

          case 10:
            _context.next = 12;
            return runTest({
              test: test,
              onBenchmarkComplete: onBenchmarkComplete
            });

          case 12:
            _context.next = 3;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _runTests.apply(this, arguments);
}

function runTest(_x2) {
  return _runTest.apply(this, arguments);
}

function _runTest() {
  _runTest = _asyncToGenerator(regenerator_default.a.mark(function _callee2(_ref5) {
    var test, onBenchmarkComplete, _ref5$silent, silent, result, iterationsPerSecond, time, iterations, error, itersPerSecond;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            test = _ref5.test, onBenchmarkComplete = _ref5.onBenchmarkComplete, _ref5$silent = _ref5.silent, silent = _ref5$silent === void 0 ? false : _ref5$silent;
            _context2.next = 3;
            return addDelay(test.opts.delay);

          case 3:
            if (!test.async) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return runBenchTestAsync(test);

          case 6:
            _context2.t0 = _context2.sent;
            _context2.next = 10;
            break;

          case 9:
            _context2.t0 = runBenchTest(test);

          case 10:
            result = _context2.t0;
            iterationsPerSecond = result.iterationsPerSecond, time = result.time, iterations = result.iterations, error = result.error;
            itersPerSecond = formatSI(iterationsPerSecond);

            if (!silent) {
              logEntry(test, {
                entry: bench_LOG_ENTRY.TEST,
                id: test.id,
                priority: test.priority,
                itersPerSecond: itersPerSecond,
                time: time,
                error: error,
                message: "".concat(test.id, " ").concat(itersPerSecond, "/s \xB1").concat((error * 100).toFixed(2), "%")
              });
            }

            if (onBenchmarkComplete) {
              onBenchmarkComplete({
                id: test.id,
                time: time,
                iterations: iterations,
                iterationsPerSecond: iterationsPerSecond,
                itersPerSecond: itersPerSecond
              });
            }

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _runTest.apply(this, arguments);
}

function runBenchTest(test) {
  var results = [];
  var totalTime = 0;
  var totalIterations = 0;

  for (var i = 0; i < test.opts.minIterations; i++) {
    var _runBenchTestTimed = runBenchTestTimed(test, test.opts.time),
        time = _runBenchTestTimed.time,
        iterations = _runBenchTestTimed.iterations;

    var iterationsPerSecond = iterations / time;
    results.push(iterationsPerSecond);
    totalTime += time;
    totalIterations += iterations;
  }

  return {
    time: totalTime,
    iterations: totalIterations,
    iterationsPerSecond: mean(results),
    error: cv(results)
  };
}

function runBenchTestTimed(test, minTime) {
  var iterations = 1;
  var elapsedMillis = 0;

  while (elapsedMillis < minTime) {
    var multiplier = 10;

    if (elapsedMillis > 10) {
      multiplier = test.opts.time / elapsedMillis * 1.25;
    }

    iterations *= multiplier;
    var timeStart = getHiResTimestamp();
    runBenchTestIterations(test, iterations);
    elapsedMillis = getHiResTimestamp() - timeStart;
  }

  var time = elapsedMillis / 1000;
  return {
    time: time,
    iterations: iterations
  };
}

function runBenchTestIterations(test, iterations) {
  var testArgs = test.initFunc && test.initFunc();
  var context = test.context,
      testFunc = test.testFunc;

  if (context && testArgs) {
    for (var i = 0; i < iterations; i++) {
      testFunc.call(context, testArgs);
    }
  } else {
    for (var _i = 0; _i < iterations; _i++) {
      testFunc.call(context);
    }
  }
}

function runBenchTestAsync(_x3) {
  return _runBenchTestAsync.apply(this, arguments);
}

function _runBenchTestAsync() {
  _runBenchTestAsync = _asyncToGenerator(regenerator_default.a.mark(function _callee3(test) {
    var results, totalTime, totalIterations, i, _ref6, time, iterations, iterationsPerSecond;

    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            results = [];
            totalTime = 0;
            totalIterations = 0;
            i = 0;

          case 4:
            if (!(i < test.opts.minIterations)) {
              _context3.next = 17;
              break;
            }

            _context3.next = 7;
            return runBenchTestTimedAsync(test, test.opts.time);

          case 7:
            _ref6 = _context3.sent;
            time = _ref6.time;
            iterations = _ref6.iterations;
            iterationsPerSecond = iterations / time;
            results.push(iterationsPerSecond);
            totalTime += time;
            totalIterations += iterations;

          case 14:
            i++;
            _context3.next = 4;
            break;

          case 17:
            return _context3.abrupt("return", {
              time: totalTime,
              iterations: totalIterations,
              iterationsPerSecond: mean(results),
              error: cv(results)
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _runBenchTestAsync.apply(this, arguments);
}

function runBenchTestTimedAsync(_x4, _x5) {
  return _runBenchTestTimedAsync.apply(this, arguments);
}

function _runBenchTestTimedAsync() {
  _runBenchTestTimedAsync = _asyncToGenerator(regenerator_default.a.mark(function _callee4(test, minTime) {
    var iterations, elapsedMillis, multiplier, timeStart, time;
    return regenerator_default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            iterations = 1;
            elapsedMillis = 0;

          case 2:
            if (!(elapsedMillis < minTime)) {
              _context4.next = 12;
              break;
            }

            multiplier = 10;

            if (elapsedMillis > 10) {
              multiplier = test.opts.time / elapsedMillis * 1.25;
            }

            iterations *= multiplier;
            timeStart = getHiResTimestamp();
            _context4.next = 9;
            return runBenchTestIterationsAsync(test, iterations);

          case 9:
            elapsedMillis = getHiResTimestamp() - timeStart;
            _context4.next = 2;
            break;

          case 12:
            time = elapsedMillis / 1000;
            return _context4.abrupt("return", {
              time: time,
              iterations: iterations
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _runBenchTestTimedAsync.apply(this, arguments);
}

function runBenchTestIterationsAsync(_x6, _x7) {
  return _runBenchTestIterationsAsync.apply(this, arguments);
}

function _runBenchTestIterationsAsync() {
  _runBenchTestIterationsAsync = _asyncToGenerator(regenerator_default.a.mark(function _callee5(test, iterations) {
    var testArgs, context, testFunc, i, _i2;

    return regenerator_default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            testArgs = test.initFunc && test.initFunc();
            context = test.context, testFunc = test.testFunc;

            if (!(context && testArgs)) {
              _context5.next = 12;
              break;
            }

            i = 0;

          case 4:
            if (!(i < iterations)) {
              _context5.next = 10;
              break;
            }

            _context5.next = 7;
            return testFunc.call(context, testArgs);

          case 7:
            i++;
            _context5.next = 4;
            break;

          case 10:
            _context5.next = 19;
            break;

          case 12:
            _i2 = 0;

          case 13:
            if (!(_i2 < iterations)) {
              _context5.next = 19;
              break;
            }

            _context5.next = 16;
            return testFunc.call(context);

          case 16:
            _i2++;
            _context5.next = 13;
            break;

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _runBenchTestIterationsAsync.apply(this, arguments);
}
// CONCATENATED MODULE: ../node_modules/@probe.gl/bench/dist/esm/index.js


// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__("9AAn");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__("I5cv");

// CONCATENATED MODULE: ../modules/core/test/lib/javascript.bench.js
function javascript_bench_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// CLASS INHERITANCE
//
// This class identifies
var IDENTITY=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var ClassNoConstructor=function ClassNoConstructor(){};var ClassWithConstructor=function ClassWithConstructor(){this.data=null;};var ClassWithConstructorXYZ=function ClassWithConstructorXYZ(){this.x=-0;this.y=-0;this.z=-0;this.w=-0;};var ClassWithConstructor04=function ClassWithConstructor04(){this[0]=-0;this[1]=-0;this[2]=-0;this[3]=-0;};var ArrayExtenderNoConstructor=/*#__PURE__*/function(_Array){javascript_bench_inheritsLoose(ArrayExtenderNoConstructor,_Array);function ArrayExtenderNoConstructor(){return _Array.apply(this,arguments)||this;}return ArrayExtenderNoConstructor;}(_wrapNativeSuper(Array));var ArrayExtenderEmptyConstructor=/*#__PURE__*/function(_Array2){javascript_bench_inheritsLoose(ArrayExtenderEmptyConstructor,_Array2);// eslint-disable-next-line no-useless-constructor
function ArrayExtenderEmptyConstructor(){return _Array2.call(this)||this;}return ArrayExtenderEmptyConstructor;}(_wrapNativeSuper(Array));var ArrayExtender=/*#__PURE__*/function(_Array3){javascript_bench_inheritsLoose(ArrayExtender,_Array3);function ArrayExtender(){var _this;_this=_Array3.call(this,16)||this;for(var i=0;i<16;i++){_this[i]=IDENTITY[i];}return _this;}return ArrayExtender;}(_wrapNativeSuper(Array));// DEFAULT PARAMETERS
var XYZVector=function XYZVector(x,y,z){if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}this.x=x;this.y=y;this.z=z;};var XYZVectorLogicalOr=function XYZVectorLogicalOr(x,y,z){this.x=x||0;this.y=y||0;this.z=z||0;};var XYZVectorBitwiseOr=function XYZVectorBitwiseOr(x,y,z){this.x=x||0;this.y=y||0;this.z=z||0;};// COMBINED BENCH
function javascriptBench(suite,addReferenceBenchmarks){if(addReferenceBenchmarks){suite.group('Class/Array inheritance construction cost').add('new Array',function(){return new Array();})// eslint-disable-line
.add('new ArrayExtender',function(){return new ArrayExtender();}).add('new ArrayExtenderNoConstructor',function(){return new ArrayExtenderNoConstructor();}).add('new ArrayExtenderEmptyConstructor',function(){return new ArrayExtenderEmptyConstructor();}).add('new ClassNoConstructor',function(){return new ClassNoConstructor();}).add('new ClassWithConstructor',function(){return new ClassWithConstructor();}).add('new ClassWithConstructorXYZ',function(){return new ClassWithConstructorXYZ();}).add('new ClassWithConstructor0-4',function(){return new ClassWithConstructor04();});suite.group('Default parameter cost').add('new XYZVector#default params',function(){return new XYZVector();}).add('new XYZVector#logical or',function(){return new XYZVectorLogicalOr();}).add('new XYZVector#bitwise or',function(){return new XYZVectorBitwiseOr();});}return suite;}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float64-array.js
var es6_typed_float64_array = __webpack_require__("Tdpu");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__("Y9lz");

// EXTERNAL MODULE: ../modules/main/src/index.js
var src = __webpack_require__("UvnN");

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
var classicArray=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var float32Array=new Float32Array([1,0,0]);var float64Array=new Float64Array([1,0,0]);var vector3=new src["d" /* Vector3 */]();function commonBench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Global Functions').add('isArray(Vector3)',function(){return Object(src["k" /* isArray */])(vector3);}).add('isArray(Float32Array)',function(){return Object(src["k" /* isArray */])(float32Array);});if(addReferenceBenchmarks){suite.add('isArray(array)',function(){return Object(src["k" /* isArray */])(classicArray);}).add('isArray(Float64Array)',function(){return Object(src["k" /* isArray */])(float64Array);});}suite.add('toRadians(Number)',function(){return Object(src["n" /* toRadians */])(100);}).add('radians(Vector3)',function(){return Object(src["l" /* radians */])(vector3,vector3);});if(addReferenceBenchmarks){suite.add('toRadians(array)',function(){return Object(src["n" /* toRadians */])(classicArray);}).add('toRadians(Float32Array)',function(){return Object(src["n" /* toRadians */])(float32Array);}).add('toRadians(Float64Array)',function(){return Object(src["n" /* toRadians */])(float64Array);});}}
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
var array=[0,0];var vector2_bench_float32Array=new Float32Array([0,0]);var vector2=new src["c" /* Vector2 */]();function vector2Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector2').add('Vector2#new()',function(){return new src["c" /* Vector2 */](1,2);}).add('Vector2#set()',function(){return vector2.set(1,2);}).add('Vector2#copy()',function(){return vector2.copy([1,2]);});// .add('Vector2#from(Vector2)', () => vector2.from(arrayVector))
// .add('Vector2#to(Vector2)', () => vector2.to(arrayVector))
if(addReferenceBenchmarks){suite.group('Vector2 Type Conversion Cost').add('Vector2.from#Array',function(){return vector2.from(array);}).add('Vector2.from#Float32Array',function(){return vector2.from(vector2_bench_float32Array);}).add('Vector2.to#Array',function(){return vector2.to(array);}).add('Vector2.to#Float32Array',function(){return vector2.to(vector2_bench_float32Array);});}return suite;}
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
var ObjectVector=function ObjectVector(x,y,z){if(x===void 0){x=-0;}if(y===void 0){y=-0;}if(z===void 0){z=-0;}this.x=x;this.y=y;this.z=z;};var vector3_bench_array=[0,0,0];var vector3_bench_float32Array=new Float32Array([0,0,0]);var objectVector=new ObjectVector();var arrayVector=new src["d" /* Vector3 */]();var vector3_bench_vector3=new src["d" /* Vector3 */]();function vector3Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector3').add('Vector3#new()',function(){return new src["d" /* Vector3 */](1,2,3);}).add('Vector3#set()',function(){return vector3_bench_vector3.set(1,2,3);}).add('Vector3#copy()',function(){return vector3_bench_vector3.copy([1,2,3]);}).add('Vector3#from(Vector3)',function(){return vector3_bench_vector3.from(arrayVector);}).add('Vector3#to(Vector3)',function(){return vector3_bench_vector3.to(arrayVector);});if(addReferenceBenchmarks){suite.group('Vector3 Type Conversion Cost').add('Vector3#from(Object)',function(){return vector3_bench_vector3.from(objectVector);}).add('Vector3#to(Object)',function(){return vector3_bench_vector3.to(objectVector);}).add('Vector3.from#Array',function(){return vector3_bench_vector3.from(vector3_bench_array);}).add('Vector3.from#Float32Array',function(){return vector3_bench_vector3.from(vector3_bench_float32Array);}).add('Vector3.to#Array',function(){return vector3_bench_vector3.to(vector3_bench_array);}).add('Vector3.to#Float32Array',function(){return vector3_bench_vector3.to(vector3_bench_float32Array);});}return suite;}
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
var vector4_bench_array=[0,0,0,0];var vector4_bench_float32Array=new Float32Array([0,0,0,0]);var vector4=new src["e" /* Vector4 */]();function vector4Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector4').add('Vector4#new()',function(){return new src["e" /* Vector4 */](1,2,3,4);}).add('Vector4#set()',function(){return vector4.set(1,2,3,4);}).add('Vector4#copy()',function(){return vector4.copy([1,2,3,4]);});// .add('Vector4#from(Vector4)', () => vector4.from(arrayVector))
// .add('Vector4#to(Vector4)', () => vector4.to(arrayVector))
if(addReferenceBenchmarks){suite.group('Vector4 Type Conversion Cost').add('Vector4.from#Array',function(){return vector4.from(vector4_bench_array);}).add('Vector4.from#Float32Array',function(){return vector4.from(vector4_bench_float32Array);}).add('Vector4.to#Array',function(){return vector4.to(vector4_bench_array);}).add('Vector4.to#Float32Array',function(){return vector4.to(vector4_bench_float32Array);});}return suite;}
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat4.js
var mat4 = __webpack_require__("/IxR");

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
*/var matrix4_bench_array=[0,0,0];// const arrayVector = new CesiumMatrix4();
// const objectVector = new THREEMatrix4();
var matrix4=new src["b" /* Matrix4 */]();var matrix4_bench_IDENTITY=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var matrix4_bench_classicArray=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var matrix4_bench_float32Array=new Float32Array([1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1]);var matrix4_bench_float64Array=new Float64Array([1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1]);var mathglVector4=new src["e" /* Vector4 */]();var dirVector4=new src["e" /* Vector4 */](0,0,0,0);var pointVector4=new src["e" /* Vector4 */](0,0,0,1);var matrix4_bench_vector3=[0,0,0];function matrix4Bench(suite,addReferenceBenchmarks){suite// add tests
.group('@math.gl/core: Matrix4 constructors').add('Matrix4#new Matrix4()',function(){return Object(src["i" /* configure */])({debug:false});},function(){return new src["b" /* Matrix4 */]();}).add('Matrix4#new Matrix4(debug)',function(){return Object(src["i" /* configure */])({debug:true});},function(){return new src["b" /* Matrix4 */]();}).add('Matrix4#copy()',function(){return Object(src["i" /* configure */])({debug:false});},function(){return matrix4.copy(matrix4_bench_IDENTITY);}).add('Matrix4#copy(debug)',function(){return Object(src["i" /* configure */])({debug:true});},function(){return matrix4.copy(matrix4_bench_IDENTITY);}).add('Matrix4#set()',function(){return Object(src["i" /* configure */])({debug:false});},function(){return matrix4.set(1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1);}).add('Matrix4#setRowMajor()',function(){return matrix4.setRowMajor(1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1);}).add('Matrix4#identity',function(){return matrix4.identity();}).add('Matrix4#fromQuaternion',function(){return matrix4.fromQuaternion([1,1,1,1]);});// .add('Matrix4#from(Matrix4)', () => matrix4.from(arrayVector))
// .add('Matrix4#from(Object)', () => matrix4.from(objectVector))
// .add('Matrix4#to(Matrix4)', () => matrix4.to(arrayVector))
// .add('Matrix4#to(Object)', () => matrix4.to(objectVector));
if(addReferenceBenchmarks){suite.add('Array(16)',function(){return new Array(16);}).add('[1, 0, 0, 0, ...]',function(){return[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];}).add('new Float32Array(16)',function(){return new Float32Array(16);}).add('new Float32Array(IDENTITY)',function(){return new Float32Array(matrix4_bench_IDENTITY);}).add('new Float64Array(16)',function(){return new Float64Array(16);}).add('new Float64Array(IDENTITY)',function(){return new Float64Array(matrix4_bench_IDENTITY);});}if(addReferenceBenchmarks){suite.add('Matrix4#from(Array)',function(){return matrix4.from(matrix4_bench_array);}).add('Matrix4#from(Float32Array)',function(){return matrix4.from(matrix4_bench_float32Array);}).add('Matrix4#to(Array)',function(){return matrix4.to(matrix4_bench_array);}).add('Matrix4#to(Float32Array)',function(){return matrix4.to(matrix4_bench_float32Array);});// .group('debug validation cost')
// .add('Matrix4#validate (debug)', () => configure({debug: true}), () => matrix4.check())
// .add('Matrix4#validate ', () => configure({debug: false}), () => matrix4.check())
}suite.group('@math.gl/core: Matrix4 Multiplication').add('Matrix4#multiplyRight(Matrix4)',function(){return matrix4.multiplyRight(matrix4);}).add('gl-matrix#multiply(Matrix4)',function(){return mat4["g" /* multiply */](matrix4,matrix4,matrix4);}).add('Matrix4#transform(dir4)',function(){return matrix4.transform(dirVector4,mathglVector4);}).add('Matrix4#transform(point4)',function(){return matrix4.transform(pointVector4,mathglVector4);}).add('Matrix4#transformAsVector(v3)',function(){return matrix4.transformAsVector(matrix4_bench_vector3,matrix4_bench_vector3);}).add('Matrix4#transformAsPoint(v3)',function(){return matrix4.transformAsVector(matrix4_bench_vector3,matrix4_bench_vector3);});suite.group('@math.gl/core: Matrix4 accessors').add('Matrix4#determinant()',function(){return matrix4.determinant();}).add('Matrix4#getScale()',function(){return matrix4.getScale();}).add('Matrix4#getTranslation()',function(){return matrix4.getTranslation();}).add('Matrix4#getRotation()',function(){return matrix4.getRotation();}).add('Matrix4#getRotationMatrix3()',function(){return matrix4.getRotationMatrix3();});suite.group('@math.gl/core: Matrix4 operations').add('Matrix4#transpose()',function(){return matrix4.transpose();}).add('Matrix4#invert()',function(){return matrix4.invert();}).add('Matrix4#scale()',function(){return matrix4.scale(2);}).add('Matrix4#translate()',function(){return matrix4.translate([1,1,1]);});if(addReferenceBenchmarks){suite.add('gl-matrix#multiply(array)',function(){return mat4["g" /* multiply */](matrix4_bench_classicArray,matrix4_bench_classicArray,matrix4_bench_classicArray);}).add('gl-matrix#multiply(float32Array)',function(){return mat4["g" /* multiply */](matrix4_bench_float32Array,matrix4_bench_float32Array,matrix4_bench_float32Array);}).add('gl-matrix#multiply(float64Array)',function(){return mat4["g" /* multiply */](matrix4_bench_float64Array,matrix4_bench_float64Array,matrix4_bench_float64Array);});}return suite;}
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
function coreBench(suite,addReferenceBenchmarks){// classesBench(suite, addReferenceBenchmarks);
commonBench(suite,addReferenceBenchmarks);javascriptBench(suite,addReferenceBenchmarks);matrix4Bench(suite,addReferenceBenchmarks);vector2Bench(suite,addReferenceBenchmarks);vector3Bench(suite,addReferenceBenchmarks);vector4Bench(suite,addReferenceBenchmarks);return suite;}
// CONCATENATED MODULE: ../modules/geospatial/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var WGS84_RADIUS_X=6378137.0;var WGS84_RADIUS_Y=6378137.0;var WGS84_RADIUS_Z=6356752.3142451793;// Pre-calculated ellipsoid defaults to avoid utils depending on `ellipsoid.js`
var WGS84_CONSTANTS={radii:[WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z],radiiSquared:[WGS84_RADIUS_X*WGS84_RADIUS_X,WGS84_RADIUS_Y*WGS84_RADIUS_Y,WGS84_RADIUS_Z*WGS84_RADIUS_Z],oneOverRadii:[1.0/WGS84_RADIUS_X,1.0/WGS84_RADIUS_Y,1.0/WGS84_RADIUS_Z],oneOverRadiiSquared:[1.0/(WGS84_RADIUS_X*WGS84_RADIUS_X),1.0/(WGS84_RADIUS_Y*WGS84_RADIUS_Y),1.0/(WGS84_RADIUS_Z*WGS84_RADIUS_Z)],maximumRadius:Math.max(WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z),centerToleranceSquared:1e-1// EPSILON1;
};
// CONCATENATED MODULE: ../modules/geospatial/src/type-utils.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var type_utils_noop=function noop(x){return x;};var scratchVector=new src["d" /* Vector3 */]();function fromCartographic(cartographic,vector,map){if(map===void 0){map=type_utils_noop;}if(Object(src["k" /* isArray */])(cartographic)){vector[0]=map(cartographic[0]);vector[1]=map(cartographic[1]);vector[2]=cartographic[2];}else if('longitude'in cartographic){vector[0]=map(cartographic.longitude);vector[1]=map(cartographic.latitude);vector[2]=cartographic.height;}else{vector[0]=map(cartographic.x);vector[1]=map(cartographic.y);vector[2]=cartographic.z;}return vector;}function fromCartographicToRadians(cartographic,vector){if(vector===void 0){vector=scratchVector;}return fromCartographic(cartographic,vector,src["h" /* config */].cartographicRadians?type_utils_noop:src["n" /* toRadians */]);}function fromCartographicToDegrees(cartographic,vector){if(vector===void 0){vector=scratchVector;}return fromCartographic(cartographic,vector,src["h" /* config */].cartographicRadians?src["m" /* toDegrees */]:type_utils_noop);}function toCartographic(vector,cartographic,map){if(map===void 0){map=type_utils_noop;}if(Object(src["k" /* isArray */])(cartographic)){cartographic[0]=map(vector[0]);cartographic[1]=map(vector[1]);cartographic[2]=vector[2];}else if('longitude'in cartographic){cartographic.longitude=map(vector[0]);cartographic.latitude=map(vector[1]);cartographic.height=vector[2];}else{cartographic.x=map(vector[0]);cartographic.y=map(vector[1]);cartographic.z=vector[2];}return cartographic;}function toCartographicFromRadians(vector,cartographic){return toCartographic(vector,cartographic,src["h" /* config */].cartographicRadians?type_utils_noop:src["m" /* toDegrees */]);}function toCartographicFromDegrees(vector,cartographic){return toCartographic(vector,cartographic,src["h" /* config */].cartographicRadians?src["n" /* toRadians */]:type_utils_noop);}function isWGS84(vector){if(!vector){return false;}scratchVector.from(vector);var oneOverRadiiSquared=WGS84_CONSTANTS.oneOverRadiiSquared,centerToleranceSquared=WGS84_CONSTANTS.centerToleranceSquared;var x2=vector[0]*vector[0]*oneOverRadiiSquared[0];var y2=vector[1]*vector[1]*oneOverRadiiSquared[1];var z2=vector[2]*vector[2]*oneOverRadiiSquared[2];return Math.abs(x2+y2+z2-1)<centerToleranceSquared;}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__("CyHz");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__("DW2E");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__("MTwu");

// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/scale-to-geodetic-surface.js
/* eslint-disable */var scale_to_geodetic_surface_scratchVector=new src["d" /* Vector3 */]();var scaleToGeodeticSurfaceIntersection=new src["d" /* Vector3 */]();var scaleToGeodeticSurfaceGradient=new src["d" /* Vector3 */]();// Scales the provided Cartesian position along the geodetic surface normal
// so that it is on the surface of this ellipsoid.  If the position is
// at the center of the ellipsoid, this function returns undefined.
function scale_to_geodetic_surface_scaleToGeodeticSurface(cartesian,ellipsoid,result){if(result===void 0){result=new src["d" /* Vector3 */]();}var oneOverRadii=ellipsoid.oneOverRadii,oneOverRadiiSquared=ellipsoid.oneOverRadiiSquared,centerToleranceSquared=ellipsoid.centerToleranceSquared;scale_to_geodetic_surface_scratchVector.from(cartesian);var positionX=cartesian.x;var positionY=cartesian.y;var positionZ=cartesian.z;var oneOverRadiiX=oneOverRadii.x;var oneOverRadiiY=oneOverRadii.y;var oneOverRadiiZ=oneOverRadii.z;var x2=positionX*positionX*oneOverRadiiX*oneOverRadiiX;var y2=positionY*positionY*oneOverRadiiY*oneOverRadiiY;var z2=positionZ*positionZ*oneOverRadiiZ*oneOverRadiiZ;// Compute the squared ellipsoid norm.
var squaredNorm=x2+y2+z2;var ratio=Math.sqrt(1.0/squaredNorm);// When very close to center or at center
if(!Number.isFinite(ratio)){return undefined;}// As an initial approximation, assume that the radial intersection is the projection point.
var intersection=scaleToGeodeticSurfaceIntersection;intersection.copy(cartesian).scale(ratio);// If the position is near the center, the iteration will not converge.
if(squaredNorm<centerToleranceSquared){return intersection.to(result);}var oneOverRadiiSquaredX=oneOverRadiiSquared.x;var oneOverRadiiSquaredY=oneOverRadiiSquared.y;var oneOverRadiiSquaredZ=oneOverRadiiSquared.z;// Use the gradient at the intersection point in place of the true unit normal.
// The difference in magnitude will be absorbed in the multiplier.
var gradient=scaleToGeodeticSurfaceGradient;gradient.set(intersection.x*oneOverRadiiSquaredX*2.0,intersection.y*oneOverRadiiSquaredY*2.0,intersection.z*oneOverRadiiSquaredZ*2.0);// Compute the initial guess at the normal vector multiplier, lambda.
var lambda=(1.0-ratio)*cartesian.len()/(0.5*gradient.len());var correction=0.0;var xMultiplier;var yMultiplier;var zMultiplier;var func;do{lambda-=correction;xMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredX);yMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredY);zMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredZ);var xMultiplier2=xMultiplier*xMultiplier;var yMultiplier2=yMultiplier*yMultiplier;var zMultiplier2=zMultiplier*zMultiplier;var xMultiplier3=xMultiplier2*xMultiplier;var yMultiplier3=yMultiplier2*yMultiplier;var zMultiplier3=zMultiplier2*zMultiplier;func=x2*xMultiplier2+y2*yMultiplier2+z2*zMultiplier2-1.0;// "denominator" here refers to the use of this expression in the velocity and acceleration
// computations in the sections to follow.
var denominator=x2*xMultiplier3*oneOverRadiiSquaredX+y2*yMultiplier3*oneOverRadiiSquaredY+z2*zMultiplier3*oneOverRadiiSquaredZ;var derivative=-2.0*denominator;correction=func/derivative;}while(Math.abs(func)>src["f" /* _MathUtils */].EPSILON12);return scale_to_geodetic_surface_scratchVector.scale([xMultiplier,yMultiplier,zMultiplier]).to(result);}
// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/ellipsoid-transform.js
var EPSILON14=1e-14;var scratchOrigin=new src["d" /* Vector3 */]();// Caclulate third axis from given two axii
var VECTOR_PRODUCT_LOCAL_FRAME={up:{south:'east',north:'west',west:'south',east:'north'},down:{south:'west',north:'east',west:'north',east:'south'},south:{up:'west',down:'east',west:'down',east:'up'},north:{up:'east',down:'west',west:'up',east:'down'},west:{up:'north',down:'south',north:'down',south:'up'},east:{up:'south',down:'north',north:'up',south:'down'}};var degeneratePositionLocalFrame={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]};var scratchAxisVectors={east:new src["d" /* Vector3 */](),north:new src["d" /* Vector3 */](),up:new src["d" /* Vector3 */](),west:new src["d" /* Vector3 */](),south:new src["d" /* Vector3 */](),down:new src["d" /* Vector3 */]()};var scratchVector1=new src["d" /* Vector3 */]();var scratchVector2=new src["d" /* Vector3 */]();var scratchVector3=new src["d" /* Vector3 */]();// Computes a 4x4 transformation matrix from a reference frame
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
// eslint-disable-next-line max-statements, max-params, complexity
function ellipsoid_transform_localFrameToFixedFrame(ellipsoid,firstAxis,secondAxis,thirdAxis,cartesianOrigin,result){var thirdAxisInferred=VECTOR_PRODUCT_LOCAL_FRAME[firstAxis]&&VECTOR_PRODUCT_LOCAL_FRAME[firstAxis][secondAxis];// firstAxis and secondAxis must be east, north, up, west, south or down.');
Object(src["g" /* assert */])(thirdAxisInferred&&(!thirdAxis||thirdAxis===thirdAxisInferred));var firstAxisVector;var secondAxisVector;var thirdAxisVector;var origin=scratchOrigin.copy(cartesianOrigin);// If x and y are zero, assume origin is at a pole, which is a special case.
var atPole=Object(src["j" /* equals */])(origin.x,0.0,EPSILON14)&&Object(src["j" /* equals */])(origin.y,0.0,EPSILON14);if(atPole){// Look up axis value and adjust
var sign=Math.sign(origin.z);firstAxisVector=scratchVector1.fromArray(degeneratePositionLocalFrame[firstAxis]);if(firstAxis!=='east'&&firstAxis!=='west'){firstAxisVector.scale(sign);}secondAxisVector=scratchVector2.fromArray(degeneratePositionLocalFrame[secondAxis]);if(secondAxis!=='east'&&secondAxis!=='west'){secondAxisVector.scale(sign);}thirdAxisVector=scratchVector3.fromArray(degeneratePositionLocalFrame[thirdAxis]);if(thirdAxis!=='east'&&thirdAxis!=='west'){thirdAxisVector.scale(sign);}}else{// Calculate all axis
var up=scratchAxisVectors.up,east=scratchAxisVectors.east,north=scratchAxisVectors.north;east.set(-origin.y,origin.x,0.0).normalize();ellipsoid.geodeticSurfaceNormal(origin,up);north.copy(up).cross(east);var down=scratchAxisVectors.down,west=scratchAxisVectors.west,south=scratchAxisVectors.south;down.copy(up).scale(-1);west.copy(east).scale(-1);south.copy(north).scale(-1);// Pick three axis based on desired orientation
firstAxisVector=scratchAxisVectors[firstAxis];secondAxisVector=scratchAxisVectors[secondAxis];thirdAxisVector=scratchAxisVectors[thirdAxis];}// TODO - assuming the result is column-major
result[0]=firstAxisVector.x;result[1]=firstAxisVector.y;result[2]=firstAxisVector.z;result[3]=0.0;result[4]=secondAxisVector.x;result[5]=secondAxisVector.y;result[6]=secondAxisVector.z;result[7]=0.0;result[8]=thirdAxisVector.x;result[9]=thirdAxisVector.y;result[10]=thirdAxisVector.z;result[11]=0.0;result[12]=origin.x;result[13]=origin.y;result[14]=origin.z;result[15]=1.0;return result;}
// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/ellipsoid.js
function ellipsoid_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ellipsoid_createClass(Constructor,protoProps,staticProps){if(protoProps)ellipsoid_defineProperties(Constructor.prototype,protoProps);if(staticProps)ellipsoid_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var ellipsoid_scratchVector=new src["d" /* Vector3 */]();var scratchNormal=new src["d" /* Vector3 */]();var scratchK=new src["d" /* Vector3 */]();var scratchPosition=new src["d" /* Vector3 */]();var scratchHeight=new src["d" /* Vector3 */]();var scratchCartesian=new src["d" /* Vector3 */]();var wgs84;// A quadratic surface defined in Cartesian coordinates by the equation
// <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
// to represent the shape of planetary bodies.
var ellipsoid_Ellipsoid=/*#__PURE__*/function(){ellipsoid_createClass(Ellipsoid,null,[{key:"WGS84",// An Ellipsoid instance initialized to the WGS84 standard.
get:function get(){wgs84=wgs84||new Ellipsoid(WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z);return wgs84;}// Creates an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
}]);function Ellipsoid(x,y,z){if(x===void 0){x=0.0;}if(y===void 0){y=0.0;}if(z===void 0){z=0.0;}Object(src["g" /* assert */])(x>=0.0);Object(src["g" /* assert */])(y>=0.0);Object(src["g" /* assert */])(z>=0.0);this.radii=new src["d" /* Vector3 */](x,y,z);this.radiiSquared=new src["d" /* Vector3 */](x*x,y*y,z*z);this.radiiToTheFourth=new src["d" /* Vector3 */](x*x*x*x,y*y*y*y,z*z*z*z);this.oneOverRadii=new src["d" /* Vector3 */](x===0.0?0.0:1.0/x,y===0.0?0.0:1.0/y,z===0.0?0.0:1.0/z);this.oneOverRadiiSquared=new src["d" /* Vector3 */](x===0.0?0.0:1.0/(x*x),y===0.0?0.0:1.0/(y*y),z===0.0?0.0:1.0/(z*z));this.minimumRadius=Math.min(x,y,z);this.maximumRadius=Math.max(x,y,z);this.centerToleranceSquared=src["f" /* _MathUtils */].EPSILON1;if(this.radiiSquared.z!==0){this.squaredXOverSquaredZ=this.radiiSquared.x/this.radiiSquared.z;}Object.freeze(this);}// Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
var _proto=Ellipsoid.prototype;_proto.equals=function equals(right){return this===right||Boolean(right&&this.radii.equals(right.radii));}// Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
;_proto.toString=function toString(){return this.radii.toString();}// Converts the provided cartographic to Cartesian representation.
;_proto.cartographicToCartesian=function cartographicToCartesian(cartographic,result){if(result===void 0){result=[0,0,0];}var normal=scratchNormal;var k=scratchK;var height=cartographic[2];this.geodeticSurfaceNormalCartographic(cartographic,normal);k.copy(this.radiiSquared).scale(normal);var gamma=Math.sqrt(normal.dot(k));k.scale(1/gamma);normal.scale(height);k.add(normal);return k.to(result);}// Converts the provided cartesian to cartographic (lng/lat/z) representation.
// The cartesian is undefined at the center of the ellipsoid.
;_proto.cartesianToCartographic=function cartesianToCartographic(cartesian,result){if(result===void 0){result=[0,0,0];}scratchCartesian.from(cartesian);var point=this.scaleToGeodeticSurface(scratchCartesian,scratchPosition);if(!point){return undefined;}var normal=this.geodeticSurfaceNormal(point,scratchNormal);var h=scratchHeight;h.copy(scratchCartesian).subtract(point);var longitude=Math.atan2(normal.y,normal.x);var latitude=Math.asin(normal.z);var height=Math.sign(vec3["c" /* dot */](h,scratchCartesian))*vec3["d" /* length */](h);return toCartographicFromRadians([longitude,latitude,height],result);}// Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
;_proto.eastNorthUpToFixedFrame=function eastNorthUpToFixedFrame(origin,result){if(result===void 0){result=new src["b" /* Matrix4 */]();}return ellipsoid_transform_localFrameToFixedFrame(this,'east','north','up',origin,result);}// Computes a 4x4 transformation matrix from a reference frame centered at
// the provided origin to the ellipsoid's fixed reference frame.
;_proto.localFrameToFixedFrame=function localFrameToFixedFrame(firstAxis,secondAxis,thirdAxis,origin,result){if(result===void 0){result=new src["b" /* Matrix4 */]();}return ellipsoid_transform_localFrameToFixedFrame(this,firstAxis,secondAxis,thirdAxis,origin,result);}// Computes the unit vector directed from the center of this ellipsoid toward
// the provided Cartesian position.
;_proto.geocentricSurfaceNormal=function geocentricSurfaceNormal(cartesian,result){if(result===void 0){result=[0,0,0];}return ellipsoid_scratchVector.from(cartesian).normalize().to(result);}// Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
;_proto.geodeticSurfaceNormalCartographic=function geodeticSurfaceNormalCartographic(cartographic,result){if(result===void 0){result=[0,0,0];}var cartographicVectorRadians=fromCartographicToRadians(cartographic);var longitude=cartographicVectorRadians[0];var latitude=cartographicVectorRadians[1];var cosLatitude=Math.cos(latitude);ellipsoid_scratchVector.set(cosLatitude*Math.cos(longitude),cosLatitude*Math.sin(longitude),Math.sin(latitude)).normalize();return ellipsoid_scratchVector.to(result);}// Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
;_proto.geodeticSurfaceNormal=function geodeticSurfaceNormal(cartesian,result){if(result===void 0){result=[0,0,0];}return ellipsoid_scratchVector.from(cartesian).scale(this.oneOverRadiiSquared).normalize().to(result);}// Scales the provided Cartesian position along the geodetic surface normal
// so that it is on the surface of this ellipsoid.  If the position is
// at the center of the ellipsoid, this function returns undefined.
;_proto.scaleToGeodeticSurface=function scaleToGeodeticSurface(cartesian,result){return scale_to_geodetic_surface_scaleToGeodeticSurface(cartesian,this,result);}// Scales the provided Cartesian position along the geocentric surface normal
// so that it is on the surface of this ellipsoid.
;_proto.scaleToGeocentricSurface=function scaleToGeocentricSurface(cartesian,result){if(result===void 0){result=[0,0,0];}scratchPosition.from(cartesian);var positionX=scratchPosition.x;var positionY=scratchPosition.y;var positionZ=scratchPosition.z;var oneOverRadiiSquared=this.oneOverRadiiSquared;var beta=1.0/Math.sqrt(positionX*positionX*oneOverRadiiSquared.x+positionY*positionY*oneOverRadiiSquared.y+positionZ*positionZ*oneOverRadiiSquared.z);return scratchPosition.multiplyScalar(beta).to(result);}// Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
// its components by the result of `Ellipsoid#oneOverRadii`
;_proto.transformPositionToScaledSpace=function transformPositionToScaledSpace(position,result){if(result===void 0){result=[0,0,0];}return scratchPosition.from(position).scale(this.oneOverRadii).to(result);}// Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
// its components by the result of `Ellipsoid#radii`.
;_proto.transformPositionFromScaledSpace=function transformPositionFromScaledSpace(position,result){if(result===void 0){result=[0,0,0];}return scratchPosition.from(position).scale(this.radii).to(result);}// Computes a point which is the intersection of the surface normal with the z-axis.
;_proto.getSurfaceNormalIntersectionWithZAxis=function getSurfaceNormalIntersectionWithZAxis(position,buffer,result){if(buffer===void 0){buffer=0.0;}if(result===void 0){result=[0,0,0];}// Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)
Object(src["g" /* assert */])(Object(src["j" /* equals */])(this.radii.x,this.radii.y,src["f" /* _MathUtils */].EPSILON15));Object(src["g" /* assert */])(this.radii.z>0);scratchPosition.from(position);var z=scratchPosition.z*(1-this.squaredXOverSquaredZ);if(Math.abs(z)>=this.radii.z-buffer){return undefined;}return scratchPosition.set(0.0,0.0,z).to(result);};return Ellipsoid;}();
// CONCATENATED MODULE: ../modules/geospatial/src/index.js

// CONCATENATED MODULE: ../modules/geospatial/test/ellipsoid/ellipsoid.bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// import {externalVector3ToArray, setExternalVector3} from '@math.gl/geospatial/type-utils';
// import * as vec3 from 'gl-matrix/vec3';
var ellipsoid_bench_ellipsoid=ellipsoid_Ellipsoid.WGS84;var spaceCartesian=new src["d" /* Vector3 */](4582719.8827300891,-4582719.8827300882,1725510.4250797231);var spaceCartographic=new src["d" /* Vector3 */](-45.0,15.0,330000.0);// const spaceCartographicObject = {x: -45.0, y: 15.0, z: 330000.0};
var resultVector=new src["d" /* Vector3 */]();// const resultArray = [0, 0, 0];
// const resultObject = {x: 0, y: 0, z: 0};
var ellipsoid_bench_origin=new src["d" /* Vector3 */](1.0,0.0,0.0);// const northPole = new Vector3(0.0, 0.0, 1.0);
var resultMatrix=new src["b" /* Matrix4 */]();function ellipsoidBench(suite){// const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);
suite.group('@math.gl/geospatial Ellipsoid').add('#cartographicToCartesian(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.cartographicToCartesian(spaceCartographic,resultVector);}).add('#cartesianToCartographic(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.cartesianToCartographic(spaceCartesian,resultVector);}).add('#eastNorthUpToFixedFrame()',function(){return ellipsoid_Ellipsoid.WGS84.eastNorthUpToFixedFrame(ellipsoid_bench_origin,resultMatrix);})// .add('#eastNorthUpToFixedFrame(Pole)', () =>
//   Ellipsoid.WGS84.eastNorthUpToFixedFrame(northPole, resultMatrix)
// )
// .add('#cartographicToCartesian(=>Object)', () =>
//   ellipsoid.cartographicToCartesian(spaceCartographic, resultObject)
// )
// .add('#geodSurfNormalCarto(=>Object)', () =>
//   ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographicObject, resultObject)
// )
.add('#geodSurfNormal(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic,resultVector);})// .add('#geodSurfNormalCarto() Opt', () =>
//   geodeticSurfaceNormalCartographicOptimized(spaceCartographic, resultArray)
// )
.add('#geodeticSurfaceNormal(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.geodeticSurfaceNormal(spaceCartesian,resultVector);}).add('#scaleToGeocentricSurface(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.scaleToGeocentricSurface(spaceCartesian,resultVector);});// .add('#scaleToGeocentricSurface(=>Object)', () =>
//   ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultObject)
// )
return suite;}/*
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
var bench_ObjectVector=function ObjectVector(x,y,z){if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}this.x=x;this.y=y;this.z=z;};var bench_array=[0,0,0];var bench_float32Array=new Float32Array([0,0,0]);var bench_objectVector=new bench_ObjectVector();var bench_vector=new src["d" /* Vector3 */]();var bench_vector3=new src["d" /* Vector3 */]();function geospatialBench(suite,addReferenceBenchmarks){suite.group('Cartographic Type Conversion Cost').add('fromCartographic#Vector3',function(){return fromCartographic(bench_vector3,bench_vector);}).add('fromCartographicToRadians#Vector3',function(){return fromCartographicToRadians(bench_vector3,bench_vector);}).add('toCartographicFromRadians#Vector3',function(){return toCartographicFromRadians(bench_vector3,bench_vector);});if(addReferenceBenchmarks){suite.add('fromCartographicToRadians#Object',function(){return fromCartographicToRadians(bench_vector3,bench_objectVector);}).add('toCartographicFromRadians#Object',function(){return toCartographicFromRadians(bench_vector3,bench_objectVector);}).add('fromCartographicToRadians#Array',function(){return fromCartographicToRadians(bench_vector3,bench_array);}).add('fromCartographicToRadians#Float32Array',function(){return fromCartographicToRadians(bench_vector3,bench_float32Array);}).add('toCartographicFromRadians#Array',function(){return toCartographicFromRadians(bench_vector3,bench_array);}).add('toCartographicFromRadians#Float32Array',function(){return toCartographicFromRadians(bench_vector3,bench_float32Array);});}ellipsoidBench(suite);return suite;}
// CONCATENATED MODULE: ../modules/culling/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var INTERSECT=Object.freeze({OUTSIDE:-1,// Represents that an object is not contained within the frustum.
INTERSECTING:0,// Represents that an object intersects one of the frustum's planes.
INSIDE:1// Represents that an object is fully within the frustum.
});var Intersect=INTERSECT;
// CONCATENATED MODULE: ../modules/culling/src/lib/axis-aligned-bounding-box.js
var axis_aligned_bounding_box_scratchVector=new src["d" /* Vector3 */]();var axis_aligned_bounding_box_scratchNormal=new src["d" /* Vector3 */]();/**
 * Creates an instance of an AxisAlignedBoundingBox from the minimum and maximum points along the x, y, and z axes.
 * @alias AxisAlignedBoundingBox
 * @constructor
 *
 * @param {Vector3} [minimum=0, 0, 0] The minimum point along the x, y, and z axes.
 * @param {Vector3} [maximum=0, 0, 0] The maximum point along the x, y, and z axes.
 * @param {Vector3} [center] The center of the box; automatically computed if not supplied.
 *
 * @see BoundingSphere
 * @see BoundingRectangle
 */var axis_aligned_bounding_box_AxisAlignedBoundingBox=/*#__PURE__*/function(){function AxisAlignedBoundingBox(minimum,maximum,center){if(minimum===void 0){minimum=[0,0,0];}if(maximum===void 0){maximum=[0,0,0];}if(center===void 0){center=null;}// If center was not defined, compute it.
center=center||axis_aligned_bounding_box_scratchVector.copy(minimum).add(maximum).scale(0.5);/**
     * The minimum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */this.minimum=new src["d" /* Vector3 */](minimum);/**
     * The maximum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */this.maximum=new src["d" /* Vector3 */](maximum);/**
     * The center point of the bounding box.
     * @type {Vector3}
     */this.center=new src["d" /* Vector3 */](center);}/**
   * Computes an instance of an AxisAlignedBoundingBox. The box is determined by
   * finding the points spaced the farthest apart on the x, y, and z axes.
   *
   * @param {Vector3[]} positions List of points that the bounding box will enclose.  Each point must have a <code>x</code>, <code>y</code>, and <code>z</code> properties.
   * @param {AxisAlignedBoundingBox} [result] The object onto which to store the result.
   * @returns {AxisAlignedBoundingBox} The modified result parameter or a new AxisAlignedBoundingBox instance if one was not provided.
   *
   * @example
   * // Compute an axis aligned bounding box enclosing two points.
   * const box = Cesium.AxisAlignedBoundingBox.fromPoints([new Cesium.Vector3(2, 0, 0), new Cesium.Vector3(-2, 0, 0)]);
   */ // eslint-disable-next-line
var _proto=AxisAlignedBoundingBox.prototype;_proto.fromPoints=function fromPoints(positions){if(!positions||positions.length===0){this.minimum.set(0,0,0);this.maximum.set(0,0,0);this.center.set(0,0,0);return this;}var minimumX=positions[0][0];var minimumY=positions[0][1];var minimumZ=positions[0][2];var maximumX=positions[0][0];var maximumY=positions[0][1];var maximumZ=positions[0][2];for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var p=_ref;var x=p[0];var y=p[1];var z=p[2];minimumX=Math.min(x,minimumX);maximumX=Math.max(x,maximumX);minimumY=Math.min(y,minimumY);maximumY=Math.max(y,maximumY);minimumZ=Math.min(z,minimumZ);maximumZ=Math.max(z,maximumZ);}this.minimum.set(minimumX,minimumY,minimumZ);this.maximum.set(maximumX,maximumY,maximumZ);this.center.copy(this.minimum).add(this.maximum).scale(0.5);return this;}/**
   * Duplicates a AxisAlignedBoundingBox instance.
   *
   * @returns {AxisAlignedBoundingBox} A new AxisAlignedBoundingBox instance.
   */;_proto.clone=function clone(){return new AxisAlignedBoundingBox(this.minimum,this.maximum,this.center);}/**
   * Compares the provided AxisAlignedBoundingBox componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {AxisAlignedBoundingBox} [right] The second AxisAlignedBoundingBox to compare with.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.minimum.equals(right.minimum)&&this.maximum.equals(right.maximum);}/**
   * Determines which side of a plane a box is located.
   *
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane
   *                      the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is
   *                      on the opposite side, and {@link Intersect.INTERSECTING} if the box
   *                      intersects the plane.
   */;_proto.intersectPlane=function intersectPlane(plane){var h=axis_aligned_bounding_box_scratchVector.copy(this.maximum).subtract(this.minimum).scale(0.5);// The positive half diagonal
var normal=axis_aligned_bounding_box_scratchNormal.from(plane.normal);var e=h.x*Math.abs(normal.x)+h.y*Math.abs(normal.y)+h.z*Math.abs(normal.z);var s=this.center.dot(normal)+plane.distance;// signed distance from center
if(s-e>0){return Intersect.INSIDE;}if(s+e<0){// Not in front because normals point inward
return Intersect.OUTSIDE;}return Intersect.INTERSECTING;};return AxisAlignedBoundingBox;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/bounding-sphere.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */// import Rectangle from './rectangle';
// const defaultProjection = new GeographicProjection();
// const fromRectangle2DLowerLeft = new Vector3();
// const fromRectangle2DUpperRight = new Vector3();
// const fromRectangle2DSouthwest = new Cartographic();
// const fromRectangle2DNortheast = new Cartographic();
// const fromRectangle3DScratch = [];
var bounding_sphere_scratchVector=new src["d" /* Vector3 */]();var bounding_sphere_scratchVector2=new src["d" /* Vector3 */]();var bounding_sphere_BoundingSphere=/*#__PURE__*/function(){function BoundingSphere(center,radius){if(center===void 0){center=[0,0,0];}if(radius===void 0){radius=0.0;}this.radius=-0;this.center=new src["d" /* Vector3 */]();this.fromCenterRadius(center,radius);}var _proto=BoundingSphere.prototype;_proto.fromCenterRadius=function fromCenterRadius(center,radius){this.center.from(center);this.radius=radius;return this;}// Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
// tighly and fully encompases the box.
;_proto.fromCornerPoints=function fromCornerPoints(corner,oppositeCorner){oppositeCorner=bounding_sphere_scratchVector.from(oppositeCorner);this.center=new src["d" /* Vector3 */]().from(corner).add(oppositeCorner).scale(0.5);this.radius=this.center.distance(oppositeCorner);return this;}// Compares the provided BoundingSphere componentwise
;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.radius===right.radius;}// Duplicates a BoundingSphere instance.
;_proto.clone=function clone(){return new BoundingSphere(this.center,this.radius);}// Computes a bounding sphere that contains both the left and right bounding spheres.
;_proto.union=function union(boundingSphere){var leftCenter=this.center;var leftRadius=this.radius;var rightCenter=boundingSphere.center;var rightRadius=boundingSphere.radius;var toRightCenter=bounding_sphere_scratchVector.copy(rightCenter).subtract(leftCenter);var centerSeparation=toRightCenter.magnitude();if(leftRadius>=centerSeparation+rightRadius){// Left sphere wins.
return this.clone();}if(rightRadius>=centerSeparation+leftRadius){// Right sphere wins.
return boundingSphere.clone();}// There are two tangent points, one on far side of each sphere.
var halfDistanceBetweenTangentPoints=(leftRadius+centerSeparation+rightRadius)*0.5;// Compute the center point halfway between the two tangent points.
bounding_sphere_scratchVector2.copy(toRightCenter).scale((-leftRadius+halfDistanceBetweenTangentPoints)/centerSeparation).add(leftCenter);this.center.copy(bounding_sphere_scratchVector2);this.radius=halfDistanceBetweenTangentPoints;return this;}// Computes a bounding sphere by enlarging the provided sphere to contain the provided point.
;_proto.expand=function expand(point){point=bounding_sphere_scratchVector.from(point);var radius=point.subtract(this.center).magnitude();if(radius>this.radius){this.radius=radius;}return this;}// Determines which side of a plane a sphere is located.
;_proto.intersectPlane=function intersectPlane(plane){var center=this.center;var radius=this.radius;var normal=plane.normal;var distanceToPlane=normal.dot(center)+plane.distance;// The center point is negative side of the plane normal
if(distanceToPlane<-radius){return Intersect.OUTSIDE;}// The center point is positive side of the plane, but radius extends beyond it; partial overlap
if(distanceToPlane<radius){return Intersect.INTERSECTING;}// The center point and radius is positive side of the plane
return Intersect.INSIDE;}// Applies a 4x4 affine transformation matrix to a bounding sphere.
//    *
// @param {BoundingSphere} sphere The bounding sphere to apply the transformation to.
// @param {Matrix4} transform The transformation matrix to apply to the bounding sphere.
// @returns {BoundingSphere} The modified this parameter or a new BoundingSphere instance if none was provided.
;_proto.transform=function transform(_transform){this.center.transform(_transform);var scale=mat4["d" /* getScaling */](bounding_sphere_scratchVector,_transform);this.radius=Math.max(scale[0],Math.max(scale[1],scale[2]))*this.radius;return this;}// Computes the estimated distance squared from the closest point on a bounding sphere to a point.
;_proto.distanceSquaredTo=function distanceSquaredTo(point){point=bounding_sphere_scratchVector.from(point);var delta=point.subtract(this.center);return delta.lengthSquared()-this.radius*this.radius;};_proto.distanceTo=function distanceTo(point){return Math.sqrt(this.distanceSquaredTo(point));};return BoundingSphere;}();
// CONCATENATED MODULE: ../modules/culling/src/algorithms/compute-eigen-decomposition.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var scratchMatrix=new src["a" /* Matrix3 */]();var scratchUnitary=new src["a" /* Matrix3 */]();var scratchDiagonal=new src["a" /* Matrix3 */]();var jMatrix=new src["a" /* Matrix3 */]();var jMatrixTranspose=new src["a" /* Matrix3 */]();/**
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
 */ // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.3 The Classical Jacobi Algorithm
function computeEigenDecomposition(matrix,result){if(result===void 0){result={};}var EIGEN_TOLERANCE=src["f" /* _MathUtils */].EPSILON20;var EIGEN_MAX_SWEEPS=10;var count=0;var sweep=0;var unitaryMatrix=scratchUnitary;var diagonalMatrix=scratchDiagonal;unitaryMatrix.identity();diagonalMatrix.copy(matrix);var epsilon=EIGEN_TOLERANCE*computeFrobeniusNorm(diagonalMatrix);while(sweep<EIGEN_MAX_SWEEPS&&offDiagonalFrobeniusNorm(diagonalMatrix)>epsilon){shurDecomposition(diagonalMatrix,jMatrix);jMatrixTranspose.copy(jMatrix).transpose();diagonalMatrix.multiplyRight(jMatrix);diagonalMatrix.multiplyLeft(jMatrixTranspose);unitaryMatrix.multiplyRight(jMatrix);if(++count>2){++sweep;count=0;}}result.unitary=unitaryMatrix.toTarget(result.unitary);result.diagonal=diagonalMatrix.toTarget(result.diagonal);return result;}function computeFrobeniusNorm(matrix){var norm=0.0;for(var i=0;i<9;++i){var temp=matrix[i];norm+=temp*temp;}return Math.sqrt(norm);}var rowVal=[1,0,0];var colVal=[2,2,1];// Computes the "off-diagonal" Frobenius norm.
// Assumes matrix is symmetric.
function offDiagonalFrobeniusNorm(matrix){var norm=0.0;for(var i=0;i<3;++i){var temp=matrix[scratchMatrix.getElementIndex(colVal[i],rowVal[i])];norm+=2.0*temp*temp;}return Math.sqrt(norm);}// The routine takes a matrix, which is assumed to be symmetric, and
// finds the largest off-diagonal term, and then creates
// a matrix (result) which can be used to help reduce it
//
// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.2 The 2by2 Symmetric Schur Decomposition.
//
// eslint-disable-next-line max-statements
function shurDecomposition(matrix,result){var tolerance=src["f" /* _MathUtils */].EPSILON15;var maxDiagonal=0.0;var rotAxis=1;// find pivot (rotAxis) based on max diagonal of matrix
for(var i=0;i<3;++i){var temp=Math.abs(matrix[scratchMatrix.getElementIndex(colVal[i],rowVal[i])]);if(temp>maxDiagonal){rotAxis=i;maxDiagonal=temp;}}var p=rowVal[rotAxis];var q=colVal[rotAxis];var c=1.0;var s=0.0;if(Math.abs(matrix[scratchMatrix.getElementIndex(q,p)])>tolerance){var qq=matrix[scratchMatrix.getElementIndex(q,q)];var pp=matrix[scratchMatrix.getElementIndex(p,p)];var qp=matrix[scratchMatrix.getElementIndex(q,p)];var tau=(qq-pp)/2.0/qp;var t;if(tau<0.0){t=-1.0/(-tau+Math.sqrt(1.0+tau*tau));}else{t=1.0/(tau+Math.sqrt(1.0+tau*tau));}c=1.0/Math.sqrt(1.0+t*t);s=t*c;}// Copy into result
src["a" /* Matrix3 */].IDENTITY.to(result);result[scratchMatrix.getElementIndex(p,p)]=result[scratchMatrix.getElementIndex(q,q)]=c;result[scratchMatrix.getElementIndex(q,p)]=s;result[scratchMatrix.getElementIndex(p,q)]=-s;return result;}
// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-box-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var bounding_box_from_points_scratchVector2=new src["d" /* Vector3 */]();var bounding_box_from_points_scratchVector3=new src["d" /* Vector3 */]();var scratchVector4=new src["d" /* Vector3 */]();var scratchVector5=new src["d" /* Vector3 */]();var scratchVector6=new src["d" /* Vector3 */]();var scratchCovarianceResult=new src["a" /* Matrix3 */]();var scratchEigenResult={diagonal:new src["a" /* Matrix3 */](),unitary:new src["a" /* Matrix3 */]()};// Computes an instance of an OrientedBoundingBox of the given positions.
// This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
// Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
// eslint-disable-next-line max-statements
function makeOrientedBoundingBoxfromPoints(positions,result){if(!positions||positions.length===0){result.halfAxes=new src["a" /* Matrix3 */]([0,0,0,0,0,0,0,0,0]);result.center=new src["d" /* Vector3 */]();return result;}var length=positions.length;var meanPoint=new src["d" /* Vector3 */](0,0,0);for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var position=_ref;meanPoint.add(position);}var invLength=1.0/length;meanPoint.multiplyByScalar(invLength);var exx=0.0;var exy=0.0;var exz=0.0;var eyy=0.0;var eyz=0.0;var ezz=0.0;for(var _iterator2=positions,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _position=_ref2;var p=bounding_box_from_points_scratchVector2.copy(_position).subtract(meanPoint);exx+=p.x*p.x;exy+=p.x*p.y;exz+=p.x*p.z;eyy+=p.y*p.y;eyz+=p.y*p.z;ezz+=p.z*p.z;}exx*=invLength;exy*=invLength;exz*=invLength;eyy*=invLength;eyz*=invLength;ezz*=invLength;var covarianceMatrix=scratchCovarianceResult;covarianceMatrix[0]=exx;covarianceMatrix[1]=exy;covarianceMatrix[2]=exz;covarianceMatrix[3]=exy;covarianceMatrix[4]=eyy;covarianceMatrix[5]=eyz;covarianceMatrix[6]=exz;covarianceMatrix[7]=eyz;covarianceMatrix[8]=ezz;var _computeEigenDecompos=computeEigenDecomposition(covarianceMatrix,scratchEigenResult),unitary=_computeEigenDecompos.unitary;var rotation=result.halfAxes.copy(unitary);var v1=rotation.getColumn(0,scratchVector4);var v2=rotation.getColumn(1,scratchVector5);var v3=rotation.getColumn(2,scratchVector6);var u1=-Number.MAX_VALUE;var u2=-Number.MAX_VALUE;var u3=-Number.MAX_VALUE;var l1=Number.MAX_VALUE;var l2=Number.MAX_VALUE;var l3=Number.MAX_VALUE;for(var _iterator3=positions,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var _position2=_ref3;u1=Math.max(_position2.dot(v1),u1);u2=Math.max(_position2.dot(v2),u2);u3=Math.max(_position2.dot(v3),u3);l1=Math.min(_position2.dot(v1),l1);l2=Math.min(_position2.dot(v2),l2);l3=Math.min(_position2.dot(v3),l3);}v1=v1.multiplyByScalar(0.5*(l1+u1));v2=v2.multiplyByScalar(0.5*(l2+u2));v3=v3.multiplyByScalar(0.5*(l3+u3));result.center.copy(v1).add(v2).add(v3);var scale=bounding_box_from_points_scratchVector3.set(u1-l1,u2-l2,u3-l3).multiplyByScalar(0.5);result.halfAxes.multiplyByScalar(scale);return result;}
// CONCATENATED MODULE: ../modules/culling/src/lib/oriented-bounding-box.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var oriented_bounding_box_scratchVector=new src["d" /* Vector3 */]();var scratchOffset=new src["d" /* Vector3 */]();var scratchVectorU=new src["d" /* Vector3 */]();var scratchVectorV=new src["d" /* Vector3 */]();var scratchVectorW=new src["d" /* Vector3 */]();var scratchPPrime=new src["d" /* Vector3 */]();var scratchCorner=new src["d" /* Vector3 */]();var scratchToCenter=new src["d" /* Vector3 */]();var fromOrientedBoundingBoxScratchU=new src["d" /* Vector3 */]();var fromOrientedBoundingBoxScratchV=new src["d" /* Vector3 */]();var fromOrientedBoundingBoxScratchW=new src["d" /* Vector3 */]();var MATRIX3={COLUMN0ROW0:0,COLUMN0ROW1:1,COLUMN0ROW2:2,COLUMN1ROW0:3,COLUMN1ROW1:4,COLUMN1ROW2:5,COLUMN2ROW0:6,COLUMN2ROW1:7,COLUMN2ROW2:8};var oriented_bounding_box_OrientedBoundingBox=/*#__PURE__*/function(){// An OrientedBoundingBox of some object is a closed and convex cuboid. It can provide a tighter bounding volume than {@link BoundingSphere} or {@link AxisAlignedBoundingBox} in many cases.
function OrientedBoundingBox(center,halfAxes){if(center===void 0){center=[0,0,0];}if(halfAxes===void 0){halfAxes=[0,0,0,0,0,0,0,0,0];}this.center=new src["d" /* Vector3 */]().from(center);this.halfAxes=new src["a" /* Matrix3 */](halfAxes);}// Duplicates a OrientedBoundingBox instance.
var _proto=OrientedBoundingBox.prototype;_proto.clone=function clone(result){return new OrientedBoundingBox(this.center,this.halfAxes);};_proto.fromPoints=function fromPoints(points,result){if(result===void 0){result=new OrientedBoundingBox();}return makeOrientedBoundingBoxfromPoints(points,result);}// Compares the provided OrientedBoundingBox componentwise and returns
;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.halfAxes.equals(right.halfAxes);}// Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.
;_proto.getBoundingSphere=function getBoundingSphere(result){if(result===void 0){result=new bounding_sphere_BoundingSphere();}var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,fromOrientedBoundingBoxScratchU);var v=halfAxes.getColumn(1,fromOrientedBoundingBoxScratchV);var w=halfAxes.getColumn(2,fromOrientedBoundingBoxScratchW);// Calculate "corner" vector
var cornerVector=oriented_bounding_box_scratchVector.copy(u).add(v).add(w);result.center.copy(this.center);result.radius=cornerVector.magnitude();return result;}/**
   * Determines which side of a plane the oriented bounding box is located.
   *
   * @param {OrientedBoundingBox} box The oriented bounding box to test.
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is on the opposite side, and {@link Intersect.INTERSECTING} if the box intersects the plane.
   */;_proto.intersectPlane=function intersectPlane(plane){var center=this.center;var normal=plane.normal;var halfAxes=this.halfAxes;var normalX=normal.x;var normalY=normal.y;var normalZ=normal.z;// Plane is used as if it is its normal; the first three components are assumed to be normalized
var radEffective=Math.abs(normalX*halfAxes[MATRIX3.COLUMN0ROW0]+normalY*halfAxes[MATRIX3.COLUMN0ROW1]+normalZ*halfAxes[MATRIX3.COLUMN0ROW2])+Math.abs(normalX*halfAxes[MATRIX3.COLUMN1ROW0]+normalY*halfAxes[MATRIX3.COLUMN1ROW1]+normalZ*halfAxes[MATRIX3.COLUMN1ROW2])+Math.abs(normalX*halfAxes[MATRIX3.COLUMN2ROW0]+normalY*halfAxes[MATRIX3.COLUMN2ROW1]+normalZ*halfAxes[MATRIX3.COLUMN2ROW2]);var distanceToPlane=normal.dot(center)+plane.distance;if(distanceToPlane<=-radEffective){// The entire box is on the negative side of the plane normal
return Intersect.OUTSIDE;}else if(distanceToPlane>=radEffective){// The entire box is on the positive side of the plane normal
return Intersect.INSIDE;}return Intersect.INTERSECTING;}// Computes the estimated distance from the closest point on a bounding box to a point.
;_proto.distanceTo=function distanceTo(point){return Math.sqrt(this.distanceSquaredTo(point));}// Computes the estimated distance squared from the closest point on a bounding box to a point.
// See Geometric Tools for Computer Graphics 10.4.2
// eslint-disable-next-line max-statements
;_proto.distanceSquaredTo=function distanceSquaredTo(point){var offset=scratchOffset.from(point).subtract(this.center);var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,scratchVectorU);var v=halfAxes.getColumn(1,scratchVectorV);var w=halfAxes.getColumn(2,scratchVectorW);var uHalf=u.magnitude();var vHalf=v.magnitude();var wHalf=w.magnitude();u.normalize();v.normalize();w.normalize();var pPrime=scratchPPrime;pPrime.x=offset.dot(u);pPrime.y=offset.dot(v);pPrime.z=offset.dot(w);var distanceSquared=0.0;var d;if(pPrime.x<-uHalf){d=pPrime.x+uHalf;distanceSquared+=d*d;}else if(pPrime.x>uHalf){d=pPrime.x-uHalf;distanceSquared+=d*d;}if(pPrime.y<-vHalf){d=pPrime.y+vHalf;distanceSquared+=d*d;}else if(pPrime.y>vHalf){d=pPrime.y-vHalf;distanceSquared+=d*d;}if(pPrime.z<-wHalf){d=pPrime.z+wHalf;distanceSquared+=d*d;}else if(pPrime.z>wHalf){d=pPrime.z-wHalf;distanceSquared+=d*d;}return distanceSquared;}// The distances calculated by the vector from the center of the bounding box
// to position projected onto direction.
// eslint-disable-next-line max-statements
;_proto.computePlaneDistances=function computePlaneDistances(position,direction,result){if(result===void 0){result=[[],[]];}var minDist=Number.POSITIVE_INFINITY;var maxDist=Number.NEGATIVE_INFINITY;var center=this.center;var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,scratchVectorU);var v=halfAxes.getColumn(1,scratchVectorV);var w=halfAxes.getColumn(2,scratchVectorW);// project first corner
var corner=scratchCorner.copy(u).add(v).add(w).add(center);var toCenter=scratchToCenter.copy(corner).subtract(position);var mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project second corner
corner.copy(center).add(u).add(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project third corner
corner.copy(center).add(u).subtract(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project fourth corner
corner.copy(center).add(u).subtract(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project fifth corner
center.copy(corner).subtract(u).add(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project sixth corner
center.copy(corner).subtract(u).add(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project seventh corner
center.copy(corner).subtract(u).subtract(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project eighth corner
center.copy(corner).subtract(u).subtract(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);result.start=minDist;result.stop=maxDist;return result;};_proto.getTransform=function getTransform(){// const modelMatrix = Matrix4.fromRotationTranslation(this.boundingVolume.halfAxes, this.boundingVolume.center);
// return modelMatrix;
};return OrientedBoundingBox;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/plane.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var plane_scratchPosition=new src["d" /* Vector3 */]();var plane_scratchNormal=new src["d" /* Vector3 */]();// A plane in Hessian Normal Form
var plane_Plane=/*#__PURE__*/function(){function Plane(normal,distance){if(normal===void 0){normal=[0,0,1];}if(distance===void 0){distance=0;}this.normal=new src["d" /* Vector3 */]();this.distance=-0;this.fromNormalDistance(normal,distance);}var _proto=Plane.prototype;_proto.fromNormalDistance=function fromNormalDistance(normal,distance){Object(src["g" /* assert */])(Number.isFinite(distance));this.normal.from(normal).normalize();this.distance=distance;return this;}// Creates a plane from a normal and a point on the plane.
;_proto.fromPointNormal=function fromPointNormal(point,normal){point=plane_scratchPosition.from(point);this.normal.from(normal).normalize();var distance=-this.normal.dot(point);this.distance=distance;return this;}// Creates a plane from the general equation
;_proto.fromCoefficients=function fromCoefficients(a,b,c,d){this.normal.set(a,b,c);Object(src["g" /* assert */])(Object(src["j" /* equals */])(this.normal.len(),1));this.distance=d;return this;}// Duplicates a Plane instance.
;_proto.clone=function clone(plane){return new Plane(this.normal,this.distance);}// Compares the provided Planes by normal and distance
;_proto.equals=function equals(right){return Object(src["j" /* equals */])(this.distance,right.distance)&&Object(src["j" /* equals */])(this.normal,right.normal);}// Computes the signed shortest distance of a point to a plane.
// The sign of the distance determines which side of the plane the point is on.
;_proto.getPointDistance=function getPointDistance(point){return this.normal.dot(point)+this.distance;}// Transforms the plane by the given transformation matrix.
;_proto.transform=function transform(matrix4){var normal=plane_scratchNormal.copy(this.normal).transformAsVector(matrix4).normalize();var point=this.normal.scale(-this.distance).transform(matrix4);return this.fromPointNormal(point,normal);}// Projects a point onto the plane.
;_proto.projectPointOntoPlane=function projectPointOntoPlane(point,result){if(result===void 0){result=[0,0,0];}point=plane_scratchPosition.from(point);// projectedPoint = point - (normal.point + scale) * normal
var pointDistance=this.getPointDistance(point);var scaledNormal=plane_scratchNormal.copy(this.normal).scale(pointDistance);return point.subtract(scaledNormal).to(result);};return Plane;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/culling-volume.js
function culling_volume_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function culling_volume_createClass(Constructor,protoProps,staticProps){if(protoProps)culling_volume_defineProperties(Constructor.prototype,protoProps);if(staticProps)culling_volume_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */// X, Y, Z Unit vectors
var faces=[new src["d" /* Vector3 */]([1,0,0]),new src["d" /* Vector3 */]([0,1,0]),new src["d" /* Vector3 */]([0,0,1])];var scratchPlaneCenter=new src["d" /* Vector3 */]();var scratchPlaneNormal=new src["d" /* Vector3 */]();var scratchPlane=new plane_Plane(new src["d" /* Vector3 */](1.0,0.0,0.0),0.0);// A culling volume defined by planes.
var culling_volume_CullingVolume=/*#__PURE__*/function(){culling_volume_createClass(CullingVolume,null,[{key:"MASK_OUTSIDE",// For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
// represents the case where the object bounding volume is entirely outside the culling volume.
get:function get(){return 0xffffffff;}// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume is entirely inside the culling volume.
},{key:"MASK_INSIDE",get:function get(){return 0x00000000;}// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume (may) intersect all planes of the culling volume.
},{key:"MASK_INDETERMINATE",get:function get(){return 0x7fffffff;}}]);function CullingVolume(planes){if(planes===void 0){planes=[];}// {Cartesian4[]} [planes] An array of clipping planes.
this.planes=planes;Object(src["g" /* assert */])(this.planes.every(function(plane){return plane instanceof plane_Plane;}));}// Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
// The planes are aligned to the x, y, and z axes in world coordinates.
var _proto=CullingVolume.prototype;_proto.fromBoundingSphere=function fromBoundingSphere(boundingSphere){this.planes.length=2*faces.length;var center=boundingSphere.center;var radius=boundingSphere.radius;var planeIndex=0;for(var _iterator=faces,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var faceNormal=_ref;var plane0=this.planes[planeIndex];var plane1=this.planes[planeIndex+1];if(!plane0){plane0=this.planes[planeIndex]=new plane_Plane();}if(!plane1){plane1=this.planes[planeIndex+1]=new plane_Plane();}var plane0Center=scratchPlaneCenter.copy(faceNormal).scale(-radius).add(center);var plane0Distance=-faceNormal.dot(plane0Center);plane0.fromPointNormal(plane0Center,faceNormal);var plane1Center=scratchPlaneCenter.copy(faceNormal).scale(radius).add(center);var negatedFaceNormal=scratchPlaneNormal.copy(faceNormal).negate();var plane1Distance=-negatedFaceNormal.dot(plane1Center);plane1.fromPointNormal(plane1Center,negatedFaceNormal);planeIndex+=2;}return this;}// Determines whether a bounding volume intersects the culling volume.
;_proto.computeVisibility=function computeVisibility(boundingVolume){Object(src["g" /* assert */])(boundingVolume);// const planes = this.planes;
var intersect=Intersect.INSIDE;for(var _iterator2=this.planes,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var plane=_ref2;var result=boundingVolume.intersectPlane(plane);switch(result){case Intersect.OUTSIDE:// We are done
return Intersect.OUTSIDE;case Intersect.INTERSECTING:// If no other intersection is outside, return INTERSECTING
intersect=Intersect.INTERSECTING;break;default:}}return intersect;}// Determines whether a bounding volume intersects the culling volume.
/*
   * @param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *                                 volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *                                 the parent (and therefore this) volume is completely inside plane[planeIndex]
   *                                 and that plane check can be skipped.
   */;_proto.computeVisibilityWithPlaneMask=function computeVisibilityWithPlaneMask(boundingVolume,parentPlaneMask){Object(src["g" /* assert */])(boundingVolume,'boundingVolume is required.');Object(src["g" /* assert */])(Number.isFinite(parentPlaneMask),'parentPlaneMask is required.');if(parentPlaneMask===CullingVolume.MASK_OUTSIDE||parentPlaneMask===CullingVolume.MASK_INSIDE){// parent is completely outside or completely inside, so this child is as well.
return parentPlaneMask;}// Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
// (Because if there are fewer than 31 planes, the upper bits wont be changed.)
var mask=CullingVolume.MASK_INSIDE;var planes=this.planes;for(var k=0;k<this.planes.length;++k){// For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
var flag=k<31?1<<k:0;if(k<31&&(parentPlaneMask&flag)===0){// boundingVolume is known to be INSIDE this plane.
continue;}var plane=planes[k];var result=boundingVolume.intersectPlane(plane);if(result===Intersect.OUTSIDE){return CullingVolume.MASK_OUTSIDE;}else if(result===Intersect.INTERSECTING){mask|=flag;}}return mask;};return CullingVolume;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/perspective-off-center-frustum.js
function perspective_off_center_frustum_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function perspective_off_center_frustum_createClass(Constructor,protoProps,staticProps){if(protoProps)perspective_off_center_frustum_defineProperties(Constructor.prototype,protoProps);if(staticProps)perspective_off_center_frustum_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported
var scratchPlaneUpVector=new src["d" /* Vector3 */]();var scratchPlaneRightVector=new src["d" /* Vector3 */]();var scratchPlaneNearCenter=new src["d" /* Vector3 */]();var scratchPlaneFarCenter=new src["d" /* Vector3 */]();var perspective_off_center_frustum_scratchPlaneNormal=new src["d" /* Vector3 */]();var perspective_off_center_frustum_PerspectiveOffCenterFrustum=/*#__PURE__*/function(){/**
   * The viewing frustum is defined by 6 planes.
   * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
   * define the unit vector normal to the plane, and the w component is the distance of the
   * plane from the origin/camera position.
   *
   * @alias PerspectiveOffCenterFrustum
   * @constructor
   *
   * @param {Object} [options] An object with the following properties:
   * @param {Number} [options.left] The left clipping plane distance.
   * @param {Number} [options.right] The right clipping plane distance.
   * @param {Number} [options.top] The top clipping plane distance.
   * @param {Number} [options.bottom] The bottom clipping plane distance.
   * @param {Number} [options.near=1.0] The near clipping plane distance.
   * @param {Number} [options.far=500000000.0] The far clipping plane distance.
   *
   * @example
   * const frustum = new PerspectiveOffCenterFrustum({
   *     left : -1.0,
   *     right : 1.0,
   *     top : 1.0,
   *     bottom : -1.0,
   *     near : 1.0,
   *     far : 100.0
   * });
   *
   * @see PerspectiveFrustum
   */function PerspectiveOffCenterFrustum(options){if(options===void 0){options={};}options=Object.assign({near:1.0,far:500000000.0},options);/**
     * Defines the left clipping plane.
     * @type {Number}
     * @default undefined
     */this.left=options.left;this._left=undefined;/**
     * Defines the right clipping plane.
     * @type {Number}
     * @default undefined
     */this.right=options.right;this._right=undefined;/**
     * Defines the top clipping plane.
     * @type {Number}
     * @default undefined
     */this.top=options.top;this._top=undefined;/**
     * Defines the bottom clipping plane.
     * @type {Number}
     * @default undefined
     */this.bottom=options.bottom;this._bottom=undefined;/**
     * The distance of the near plane.
     * @type {Number}
     * @default 1.0
     */this.near=options.near;this._near=this.near;/**
     * The distance of the far plane.
     * @type {Number}
     * @default 500000000.0
     */this.far=options.far;this._far=this.far;this._cullingVolume=new culling_volume_CullingVolume([new plane_Plane(),new plane_Plane(),new plane_Plane(),new plane_Plane(),new plane_Plane(),new plane_Plane()]);this._perspectiveMatrix=new src["b" /* Matrix4 */]();this._infinitePerspective=new src["b" /* Matrix4 */]();}/**
   * Returns a duplicate of a PerspectiveOffCenterFrustum instance.
   * @returns {PerspectiveOffCenterFrustum} A new PerspectiveFrustum instance.
   * */var _proto=PerspectiveOffCenterFrustum.prototype;_proto.clone=function clone(){return new PerspectiveOffCenterFrustum({right:this.right,left:this.left,top:this.top,bottom:this.bottom,near:this.near,far:this.far});}/**
   * Compares the provided PerspectiveOffCenterFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveOffCenterFrustum} [other] The right hand side PerspectiveOffCenterFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(other){return other&&other instanceof PerspectiveOffCenterFrustum&&this.right===other.right&&this.left===other.left&&this.top===other.top&&this.bottom===other.bottom&&this.near===other.near&&this.far===other.far;}/**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#infiniteProjectionMatrix
   */;/**
   * Creates a culling volume for this frustum.
   *
   * @param {Vector3} position The eye position.
   * @param {Vector3} direction The view direction.
   * @param {Vector3} up The up direction.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * const cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * const intersect = cullingVolume.computeVisibility(boundingVolume);
   */ // eslint-disable-next-line complexity, max-statements
_proto.computeCullingVolume=function computeCullingVolume(position,direction,up){Object(src["g" /* assert */])(position,'position is required.');Object(src["g" /* assert */])(direction,'direction is required.');Object(src["g" /* assert */])(up,'up is required.');var planes=this._cullingVolume.planes;up=scratchPlaneUpVector.copy(up).normalize();var right=scratchPlaneRightVector.copy(direction).cross(up).normalize();var nearCenter=scratchPlaneNearCenter.copy(direction).multiplyByScalar(this.near).add(position);var farCenter=scratchPlaneFarCenter.copy(direction).multiplyByScalar(this.far).add(position);var normal=perspective_off_center_frustum_scratchPlaneNormal;// Left plane computation
normal.copy(right).multiplyByScalar(this.left).add(nearCenter).subtract(position).cross(up);planes[0].fromPointNormal(position,normal);// Right plane computation
normal.copy(right).multiplyByScalar(this.right).add(nearCenter).subtract(position).cross(up).negate();planes[1].fromPointNormal(position,normal);// Bottom plane computation
normal.copy(up).multiplyByScalar(this.bottom).add(nearCenter).subtract(position).cross(right).negate();planes[2].fromPointNormal(position,normal);// Top plane computation
normal.copy(up).multiplyByScalar(this.top).add(nearCenter).subtract(position).cross(right);planes[3].fromPointNormal(position,normal);normal=new src["d" /* Vector3 */]().copy(direction);// Near plane computation
planes[4].fromPointNormal(nearCenter,normal);// Far plane computation
normal.negate();planes[5].fromPointNormal(farCenter,normal);return this._cullingVolume;}/**
   * Returns the pixel's width and height in meters.
   *
   * @param {Number} drawingBufferWidth The width of the drawing buffer.
   * @param {Number} drawingBufferHeight The height of the drawing buffer.
   * @param {Number} distance The distance to the near plane in meters.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * const position = camera.position;
   * const direction = camera.direction;
   * const toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * const toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * const distance = Vector3.magnitude(toCenterProj);
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */;_proto.getPixelDimensions=function getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result){update(this);Object(src["g" /* assert */])(Number.isFinite(drawingBufferWidth)&&Number.isFinite(drawingBufferHeight));// 'Both drawingBufferWidth and drawingBufferHeight are required.'
Object(src["g" /* assert */])(drawingBufferWidth>0);// 'drawingBufferWidth must be greater than zero.'
Object(src["g" /* assert */])(drawingBufferHeight>0);// 'drawingBufferHeight must be greater than zero.'
Object(src["g" /* assert */])(distance>0);// 'distance is required.');
Object(src["g" /* assert */])(result);// 'A result object is required.');
var inverseNear=1.0/this.near;var tanTheta=this.top*inverseNear;var pixelHeight=2.0*distance*tanTheta/drawingBufferHeight;tanTheta=this.right*inverseNear;var pixelWidth=2.0*distance*tanTheta/drawingBufferWidth;result.x=pixelWidth;result.y=pixelHeight;return result;};perspective_off_center_frustum_createClass(PerspectiveOffCenterFrustum,[{key:"projectionMatrix",get:function get(){update(this);return this._perspectiveMatrix;}/**
   * Gets the perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#projectionMatrix
   */},{key:"infiniteProjectionMatrix",get:function get(){update(this);return this._infinitePerspective;}}]);return PerspectiveOffCenterFrustum;}();// eslint-disable-next-line complexity, max-statements
function update(frustum){Object(src["g" /* assert */])(Number.isFinite(frustum.right)&&Number.isFinite(frustum.left)&&Number.isFinite(frustum.top)&&Number.isFinite(frustum.bottom)&&Number.isFinite(frustum.near)&&Number.isFinite(frustum.far));// throw new DeveloperError('right, left, top, bottom, near, or far parameters are not set.');
var top=frustum.top,bottom=frustum.bottom,right=frustum.right,left=frustum.left,near=frustum.near,far=frustum.far;if(top!==frustum._top||bottom!==frustum._bottom||left!==frustum._left||right!==frustum._right||near!==frustum._near||far!==frustum._far){Object(src["g" /* assert */])(frustum.near>0&&frustum.near<frustum.far,'near must be greater than zero and less than far.');frustum._left=left;frustum._right=right;frustum._top=top;frustum._bottom=bottom;frustum._near=near;frustum._far=far;frustum._perspectiveMatrix=new src["b" /* Matrix4 */]().frustum({left:left,right:right,bottom:bottom,top:top,near:near,far:far});frustum._infinitePerspective=new src["b" /* Matrix4 */]().frustum({left:left,right:right,bottom:bottom,top:top,near:near,far:Infinity});}}
// CONCATENATED MODULE: ../modules/culling/src/lib/perspective-frustum.js
function perspective_frustum_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function perspective_frustum_createClass(Constructor,protoProps,staticProps){if(protoProps)perspective_frustum_defineProperties(Constructor.prototype,protoProps);if(staticProps)perspective_frustum_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported
var defined=function defined(val){return val!==null&&typeof val!=='undefined';};/**
 * The viewing frustum is defined by 6 planes.
 * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
 * define the unit vector normal to the plane, and the w component is the distance of the
 * plane from the origin/camera position.
 *
 * @alias PerspectiveFrustum
 * @constructor
 *
 * @param {Object} [options] An object with the following properties:
 * @param {Number} [options.fov] The angle of the field of view (FOV), in radians.
 * @param {Number} [options.aspectRatio] The aspect ratio of the frustum's width to it's height.
 * @param {Number} [options.near=1.0] The distance of the near plane.
 * @param {Number} [options.far=500000000.0] The distance of the far plane.
 * @param {Number} [options.xOffset=0.0] The offset in the x direction.
 * @param {Number} [options.yOffset=0.0] The offset in the y direction.
 *
 * @example
 * var frustum = new PerspectiveFrustum({
 *     fov : Math.PI_OVER_THREE,
 *     aspectRatio : canvas.clientWidth / canvas.clientHeight
 *     near : 1.0,
 *     far : 1000.0
 * });
 *
 * @see PerspectiveOffCenterFrustum
 */var perspective_frustum_PerspectiveFrustum=/*#__PURE__*/function(){function PerspectiveFrustum(options){if(options===void 0){options={};}options=Object.assign({near:1.0,far:500000000.0,xOffset:0.0,yOffset:0.0},options);this._offCenterFrustum=new perspective_off_center_frustum_PerspectiveOffCenterFrustum();/**
     * The angle of the field of view (FOV), in radians.  This angle will be used
     * as the horizontal FOV if the width is greater than the height, otherwise
     * it will be the vertical FOV.
     * @type {Number}
     * @default undefined
     */this.fov=options.fov;this._fov=undefined;this._fovy=undefined;this._sseDenominator=undefined;/**
     * The aspect ratio of the frustum's width to it's height.
     * @type {Number}
     * @default undefined
     */this.aspectRatio=options.aspectRatio;this._aspectRatio=undefined;/**
     * The distance of the near plane.
     * @type {Number}
     * @default 1.0
     */this.near=options.near;this._near=this.near;/**
     * The distance of the far plane.
     * @type {Number}
     * @default 500000000.0
     */this.far=options.far;this._far=this.far;/**
     * Offsets the frustum in the x direction.
     * @type {Number}
     * @default 0.0
     */this.xOffset=options.xOffset;this._xOffset=this.xOffset;/**
     * Offsets the frustum in the y direction.
     * @type {Number}
     * @default 0.0
     */this.yOffset=options.yOffset;this._yOffset=this.yOffset;}/**
   * Returns a duplicate of a PerspectiveFrustum instance.
   *
   * @param {PerspectiveFrustum} [result] The object onto which to store the result.
   * @returns {PerspectiveFrustum} The modified result parameter or a new PerspectiveFrustum instance if one was not provided.
   */var _proto=PerspectiveFrustum.prototype;_proto.clone=function clone(){return new PerspectiveFrustum({aspectRatio:this.aspectRatio,fov:this.fov,near:this.near,far:this.far});}/**
   * Compares the provided PerspectiveFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveFrustum} [other] The right hand side PerspectiveFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(other){if(!defined(other)||!(other instanceof PerspectiveFrustum)){return false;}perspective_frustum_update(this);perspective_frustum_update(other);return this.fov===other.fov&&this.aspectRatio===other.aspectRatio&&this.near===other.near&&this.far===other.far&&this._offCenterFrustum.equals(other._offCenterFrustum);}/**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#infiniteProjectionMatrix
   */;/**
   * Creates a culling volume for this frustum.
   *
   * @param {Vector3} position The eye position.
   * @param {Vector3} direction The view direction.
   * @param {Vector3} up The up direction.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * var cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * var intersect = cullingVolume.computeVisibility(boundingVolume);
   */_proto.computeCullingVolume=function computeCullingVolume(position,direction,up){perspective_frustum_update(this);return this._offCenterFrustum.computeCullingVolume(position,direction,up);}/**
   * Returns the pixel's width and height in meters.
   *
   * @param {Number} drawingBufferWidth The width of the drawing buffer.
   * @param {Number} drawingBufferHeight The height of the drawing buffer.
   * @param {Number} distance The distance to the near plane in meters.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * var position = camera.position;
   * var direction = camera.direction;
   * var toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * var toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * var distance = Vector3.magnitude(toCenterProj);
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */;_proto.getPixelDimensions=function getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result){perspective_frustum_update(this);return this._offCenterFrustum.getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result);};perspective_frustum_createClass(PerspectiveFrustum,[{key:"projectionMatrix",get:function get(){perspective_frustum_update(this);return this._offCenterFrustum.projectionMatrix;}/**
   * The perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#projectionMatrix
   */},{key:"infiniteProjectionMatrix",get:function get(){perspective_frustum_update(this);return this._offCenterFrustum.infiniteProjectionMatrix;}/**
   * Gets the angle of the vertical field of view, in radians.
   * @memberof PerspectiveFrustum.prototype
   * @type {Number}
   * @readonly
   * @default undefined
   */},{key:"fovy",get:function get(){perspective_frustum_update(this);return this._fovy;}/**
   * @readonly
   * @private
   */},{key:"sseDenominator",get:function get(){perspective_frustum_update(this);return this._sseDenominator;}}]);return PerspectiveFrustum;}();// eslint-disable-next-line complexity, max-statements
function perspective_frustum_update(frustum){Object(src["g" /* assert */])(Number.isFinite(frustum.fov)&&Number.isFinite(frustum.aspectRatio)&&Number.isFinite(frustum.near)&&Number.isFinite(frustum.far));// 'fov, aspectRatio, near, or far parameters are not set.'
var f=frustum._offCenterFrustum;if(frustum.fov!==frustum._fov||frustum.aspectRatio!==frustum._aspectRatio||frustum.near!==frustum._near||frustum.far!==frustum._far||frustum.xOffset!==frustum._xOffset||frustum.yOffset!==frustum._yOffset){Object(src["g" /* assert */])(frustum.fov>=0&&frustum.fov<Math.PI);// throw new DeveloperError('fov must be in the range [0, PI).');
Object(src["g" /* assert */])(frustum.aspectRatio>0);// throw new DeveloperError('aspectRatio must be positive.');
Object(src["g" /* assert */])(frustum.near>=0&&frustum.near<frustum.far);// throw new DeveloperError('near must be greater than zero and less than far.');
frustum._aspectRatio=frustum.aspectRatio;frustum._fov=frustum.fov;frustum._fovy=frustum.aspectRatio<=1?frustum.fov:Math.atan(Math.tan(frustum.fov*0.5)/frustum.aspectRatio)*2.0;frustum._near=frustum.near;frustum._far=frustum.far;frustum._sseDenominator=2.0*Math.tan(0.5*frustum._fovy);frustum._xOffset=frustum.xOffset;frustum._yOffset=frustum.yOffset;f.top=frustum.near*Math.tan(0.5*frustum._fovy);f.bottom=-f.top;f.right=frustum.aspectRatio*f.top;f.left=-f.right;f.near=frustum.near;f.far=frustum.far;f.right+=frustum.xOffset;f.left+=frustum.xOffset;f.top+=frustum.yOffset;f.bottom+=frustum.yOffset;}}
// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-sphere-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var fromPointsXMin=new src["d" /* Vector3 */]();var fromPointsYMin=new src["d" /* Vector3 */]();var fromPointsZMin=new src["d" /* Vector3 */]();var fromPointsXMax=new src["d" /* Vector3 */]();var fromPointsYMax=new src["d" /* Vector3 */]();var fromPointsZMax=new src["d" /* Vector3 */]();var fromPointsCurrentPos=new src["d" /* Vector3 */]();var fromPointsScratch=new src["d" /* Vector3 */]();var fromPointsRitterCenter=new src["d" /* Vector3 */]();var fromPointsMinBoxPt=new src["d" /* Vector3 */]();var fromPointsMaxBoxPt=new src["d" /* Vector3 */]();var fromPointsNaiveCenterScratch=new src["d" /* Vector3 */]();var volumeConstant=4.0/3.0*Math.PI;/*
Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points.
The bounding sphere is computed by running two algorithms, a naive algorithm and
Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.
   *
@param {Vector3[]} [positions] An array of points that the bounding sphere will enclose.  Each point must have <code>x</code>, <code>y</code>, and <code>z</code> properties.
@param {BoundingSphere} [result] The object onto which to store the result.
@returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
   *
@see {@link http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/|Bounding Sphere computation article}
*/function makeBoundingSphereFromPoints(positions,result){if(result===void 0){result=new bounding_sphere_BoundingSphere();}if(!positions||positions.length===0){return result.fromCenterRadius([0,0,0],0);}var currentPos=fromPointsCurrentPos.copy(positions[0]);var xMin=fromPointsXMin.copy(currentPos);var yMin=fromPointsYMin.copy(currentPos);var zMin=fromPointsZMin.copy(currentPos);var xMax=fromPointsXMax.copy(currentPos);var yMax=fromPointsYMax.copy(currentPos);var zMax=fromPointsZMax.copy(currentPos);for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var position=_ref;currentPos.copy(position);var x=currentPos.x;var y=currentPos.y;var z=currentPos.z;// Store points containing the the smallest and largest components
if(x<xMin.x){currentPos.copy(xMin);}if(x>xMax.x){currentPos.copy(xMax);}if(y<yMin.y){currentPos.copy(yMin);}if(y>yMax.y){currentPos.copy(yMax);}if(z<zMin.z){currentPos.copy(zMin);}if(z>zMax.z){currentPos.copy(zMax);}}// Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
var xSpan=fromPointsScratch.copy(xMax).subtract(xMin).magnitudeSquared();var ySpan=fromPointsScratch.copy(yMax).subtract(yMin).magnitudeSquared();var zSpan=fromPointsScratch.copy(zMax).subtract(zMin).magnitudeSquared();// Set the diameter endpoints to the largest span.
var diameter1=xMin;var diameter2=xMax;var maxSpan=xSpan;if(ySpan>maxSpan){maxSpan=ySpan;diameter1=yMin;diameter2=yMax;}if(zSpan>maxSpan){maxSpan=zSpan;diameter1=zMin;diameter2=zMax;}// Calculate the center of the initial sphere found by Ritter's algorithm
var ritterCenter=fromPointsRitterCenter;ritterCenter.x=(diameter1.x+diameter2.x)*0.5;ritterCenter.y=(diameter1.y+diameter2.y)*0.5;ritterCenter.z=(diameter1.z+diameter2.z)*0.5;// Calculate the radius of the initial sphere found by Ritter's algorithm
var radiusSquared=fromPointsScratch.copy(diameter2).subtract(ritterCenter).magnitudeSquared();var ritterRadius=Math.sqrt(radiusSquared);// Find the center of the sphere found using the Naive method.
var minBoxPt=fromPointsMinBoxPt;minBoxPt.x=xMin.x;minBoxPt.y=yMin.y;minBoxPt.z=zMin.z;var maxBoxPt=fromPointsMaxBoxPt;maxBoxPt.x=xMax.x;maxBoxPt.y=yMax.y;maxBoxPt.z=zMax.z;var naiveCenter=fromPointsNaiveCenterScratch.copy(minBoxPt).add(maxBoxPt).multiplyByScalar(0.5);// Begin 2nd pass to find naive radius and modify the ritter sphere.
var naiveRadius=0;for(var _iterator2=positions,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _position=_ref2;currentPos.copy(_position);// Find the furthest point from the naive center to calculate the naive radius.
var r=fromPointsScratch.copy(currentPos).subtract(naiveCenter).magnitude();if(r>naiveRadius){naiveRadius=r;}// Make adjustments to the Ritter Sphere to include all points.
var oldCenterToPointSquared=fromPointsScratch.copy(currentPos).subtract(ritterCenter).magnitudeSquared();if(oldCenterToPointSquared>radiusSquared){var oldCenterToPoint=Math.sqrt(oldCenterToPointSquared);// Calculate new radius to include the point that lies outside
ritterRadius=(ritterRadius+oldCenterToPoint)*0.5;radiusSquared=ritterRadius*ritterRadius;// Calculate center of new Ritter sphere
var oldToNew=oldCenterToPoint-ritterRadius;ritterCenter.x=(ritterRadius*ritterCenter.x+oldToNew*currentPos.x)/oldCenterToPoint;ritterCenter.y=(ritterRadius*ritterCenter.y+oldToNew*currentPos.y)/oldCenterToPoint;ritterCenter.z=(ritterRadius*ritterCenter.z+oldToNew*currentPos.z)/oldCenterToPoint;}}if(ritterRadius<naiveRadius){ritterCenter.to(result.center);result.radius=ritterRadius;}else{naiveCenter.to(result.center);result.radius=naiveRadius;}return result;}
// CONCATENATED MODULE: ../modules/culling/src/index.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// CONCATENATED MODULE: ../modules/culling/test/bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var bench_plane=new plane_Plane();var bench_boundingSphere=new bounding_sphere_BoundingSphere();var bench_transform=new src["b" /* Matrix4 */]();function cullingBench(suite,addReferenceBenchmarks){suite.group('BoundingSphere').add('BoundingSphere#new()',function(){return new bounding_sphere_BoundingSphere();}).add('BoundingSphere#transform',function(){return bench_boundingSphere.transform(bench_transform);}).group('Plane').add('Plane#new()',function(){return new plane_Plane();}).add('Plane#transform',function(){return bench_plane.transform(bench_transform);});return suite;}
// CONCATENATED MODULE: ../test/modules.bench.js
function addBenchmarks(suite,addReferenceBenchmarks){coreBench(suite,addReferenceBenchmarks);geospatialBench(suite,addReferenceBenchmarks);cullingBench(suite,addReferenceBenchmarks);return suite;}
// CONCATENATED MODULE: ../examples/benchmarks/app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return app_App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var app_addReferenceBenchmarks=false;var app_LOG_ENTRY={GROUP:'group',TEST:'test',COMPLETE:'complete'};function parseSIPrefix(itersPerSecond){var value=parseFloat(itersPerSecond);var prefix=itersPerSecond[itersPerSecond.length-1];switch(prefix){case'M':return value*1000000;case'K':return value*1000;default:return value;}}var app_App=/*#__PURE__*/function(_PureComponent){app_inheritsLoose(App,_PureComponent);function App(props){var _this;_this=_PureComponent.call(this,props)||this;_this.suite=new bench_Bench({log:_this._logResult.bind(_assertThisInitialized(_this))});addBenchmarks(_this.suite,app_addReferenceBenchmarks);_this.state={log:[]};return _this;}var _proto=App.prototype;_proto.componentDidMount=function componentDidMount(){this.suite// Calibrate performance
.calibrate().run()// when running in browser, notify test the driver that it's done
.then(function(){});};_proto._logResult=function _logResult(result){var entry=result.entry,id=result.id,itersPerSecond=result.itersPerSecond,error=result.error;var log=this.state.log;switch(entry){case app_LOG_ENTRY.GROUP:log.push({id:id});break;case app_LOG_ENTRY.TEST:var value=parseSIPrefix(itersPerSecond);// log.push(`├─ ${id}: ${itersPerSecond} iterations/s ±${(error * 100).toFixed(2)}%`);
log.push({id:id,value:value,formattedValue:itersPerSecond,formattedError:(error*100).toFixed(2)+"%"});break;case app_LOG_ENTRY.COMPLETE:break;default:}this.forceUpdate();};_proto.render=function render(){var log=this.state.log;return react_default.a.createElement("div",null,react_default.a.createElement(bench_results_BenchResults,{log:log}));};return App;}(react["PureComponent"]);function renderToDOM(container){Object(react_dom["render"])(react_default.a.createElement(app_App,null),container);}

/***/ }),

/***/ "RHrP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vec2_transformMat4AsVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vec3_transformMat4AsVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vec3_transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vec4_transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vec4_transformMat3; });
// vec2 additions
function vec2_transformMat4AsVector(out,a,m){var x=a[0];var y=a[1];var w=m[3]*x+m[7]*y||1.0;out[0]=(m[0]*x+m[4]*y)/w;out[1]=(m[1]*x+m[5]*y)/w;return out;}// vec3 additions
// Transform as vector, only uses 3x3 minor matrix
function vec3_transformMat4AsVector(out,a,m){var x=a[0];var y=a[1];var z=a[2];var w=m[3]*x+m[7]*y+m[11]*z||1.0;out[0]=(m[0]*x+m[4]*y+m[8]*z)/w;out[1]=(m[1]*x+m[5]*y+m[9]*z)/w;out[2]=(m[2]*x+m[6]*y+m[10]*z)/w;return out;}function vec3_transformMat2(out,a,m){var x=a[0];var y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;out[2]=a[2];return out;}// vec4 additions
function vec4_transformMat2(out,a,m){var x=a[0];var y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;out[2]=a[2];out[3]=a[3];return out;}function vec4_transformMat3(out,a,m){var x=a[0];var y=a[1];var z=a[2];out[0]=m[0]*x+m[3]*y+m[6]*z;out[1]=m[1]*x+m[4]*y+m[7]*z;out[2]=m[2]*x+m[5]*y+m[8]*z;out[3]=a[3];return out;}

/***/ }),

/***/ "SrsD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__("DW2E");

// EXTERNAL MODULE: ../modules/core/src/lib/validators.js
var validators = __webpack_require__("Jp9o");

// EXTERNAL MODULE: ../modules/core/src/classes/base/matrix.js
var matrix = __webpack_require__("CZB0");

// EXTERNAL MODULE: ../modules/core/src/lib/gl-matrix-extras.js
var gl_matrix_extras = __webpack_require__("RHrP");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat4.js
var mat4 = __webpack_require__("/IxR");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec2.js
var vec2 = __webpack_require__("umh7");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__("MTwu");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.hypot.js
var es6_math_hypot = __webpack_require__("x8ZO");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__("Y9lz");

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/common.js
var common = __webpack_require__("yOd+");

// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/vec4.js



/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new common["a" /* ARRAY_TYPE */](4);

  if (common["a" /* ARRAY_TYPE */] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new common["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new common["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function vec4_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec4_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4} result the receiving vector
 * @param {vec4} U the first vector
 * @param {vec4} V the second vector
 * @param {vec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
;
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = common["c" /* RANDOM */]() * 2 - 1;
    v2 = common["c" /* RANDOM */]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = common["c" /* RANDOM */]() * 2 - 1;
    v4 = common["c" /* RANDOM */]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= common["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = vec4_length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();
// CONCATENATED MODULE: ../modules/core/src/classes/matrix4.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matrix4_Matrix4; });
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
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
var IDENTITY=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);var ZERO=Object.freeze([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var INDICES=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL0ROW3:3,COL1ROW0:4,COL1ROW1:5,COL1ROW2:6,COL1ROW3:7,COL2ROW0:8,COL2ROW1:9,COL2ROW2:10,COL2ROW3:11,COL3ROW0:12,COL3ROW1:13,COL3ROW2:14,COL3ROW3:15});var constants={};var matrix4_Matrix4=/*#__PURE__*/function(_Matrix){_inheritsLoose(Matrix4,_Matrix);_createClass(Matrix4,[{key:"INDICES",get:function get(){return INDICES;}},{key:"ELEMENTS",get:function get(){return 16;}},{key:"RANK",get:function get(){return 4;}}],[{key:"IDENTITY",get:function get(){constants.IDENTITY=constants.IDENTITY||Object.freeze(new Matrix4(IDENTITY));return constants.IDENTITY;}},{key:"ZERO",get:function get(){constants.ZERO=constants.ZERO||Object.freeze(new Matrix4(ZERO));return constants.ZERO;}}]);function Matrix4(array){var _this;// PERF NOTE: initialize elements as double precision numbers
_this=_Matrix.call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0)||this;if(arguments.length===1&&Array.isArray(array)){_this.copy(array);}else{_this.identity();}return _this;}var _proto=Matrix4.prototype;_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];this[4]=array[4];this[5]=array[5];this[6]=array[6];this[7]=array[7];this[8]=array[8];this[9]=array[9];this[10]=array[10];this[11]=array[11];this[12]=array[12];this[13]=array[13];this[14]=array[14];this[15]=array[15];return this.check();}// eslint-disable-next-line max-params
;_proto.set=function set(m00,m10,m20,m30,m01,m11,m21,m31,m02,m12,m22,m32,m03,m13,m23,m33){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m30;this[4]=m01;this[5]=m11;this[6]=m21;this[7]=m31;this[8]=m02;this[9]=m12;this[10]=m22;this[11]=m32;this[12]=m03;this[13]=m13;this[14]=m23;this[15]=m33;return this.check();}// accepts row major order, stores as column major
// eslint-disable-next-line max-params
;_proto.setRowMajor=function setRowMajor(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m30;this[4]=m01;this[5]=m11;this[6]=m21;this[7]=m31;this[8]=m02;this[9]=m12;this[10]=m22;this[11]=m32;this[12]=m03;this[13]=m13;this[14]=m23;this[15]=m33;return this.check();};_proto.toRowMajor=function toRowMajor(result){result[0]=this[0];result[1]=this[4];result[2]=this[8];result[3]=this[12];result[4]=this[1];result[5]=this[5];result[6]=this[9];result[7]=this[13];result[8]=this[2];result[9]=this[6];result[10]=this[10];result[11]=this[14];result[12]=this[3];result[13]=this[7];result[14]=this[11];result[15]=this[15];return result;}// Constructors
;_proto.identity=function identity(){return this.copy(IDENTITY);}// Calculates a 4x4 matrix from the given quaternion
// q quat  Quaternion to create matrix from
;_proto.fromQuaternion=function fromQuaternion(q){mat4["b" /* fromQuat */](this,q);return this.check();}// Generates a frustum matrix with the given bounds
// left  Number  Left bound of the frustum
// right Number  Right bound of the frustum
// bottom  Number  Bottom bound of the frustum
// top Number  Top bound of the frustum
// near  Number  Near bound of the frustum
// far Number  Far bound of the frustum
;_proto.frustum=function frustum(_ref){var left=_ref.left,right=_ref.right,bottom=_ref.bottom,top=_ref.top,near=_ref.near,far=_ref.far;if(far===Infinity){Matrix4._computeInfinitePerspectiveOffCenter(this,left,right,bottom,top,near);}else{mat4["c" /* frustum */](this,left,right,bottom,top,near,far);}return this.check();}// eslint-disable-next-line max-params
;Matrix4._computeInfinitePerspectiveOffCenter=function _computeInfinitePerspectiveOffCenter(result,left,right,bottom,top,near){var column0Row0=2.0*near/(right-left);var column1Row1=2.0*near/(top-bottom);var column2Row0=(right+left)/(right-left);var column2Row1=(top+bottom)/(top-bottom);var column2Row2=-1.0;var column2Row3=-1.0;var column3Row2=-2.0*near;result[0]=column0Row0;result[1]=0.0;result[2]=0.0;result[3]=0.0;result[4]=0.0;result[5]=column1Row1;result[6]=0.0;result[7]=0.0;result[8]=column2Row0;result[9]=column2Row1;result[10]=column2Row2;result[11]=column2Row3;result[12]=0.0;result[13]=0.0;result[14]=column3Row2;result[15]=0.0;return result;}// Generates a look-at matrix with the given eye position, focal point,
// and up axis
// eye vec3  Position of the viewer
// center  vec3  Point the viewer is looking at
// up  vec3  vec3 pointing up
;_proto.lookAt=function lookAt(eye,center,up){// Signature: lookAt({eye, center = [0, 0, 0], up = [0, 1, 0]}))
if(arguments.length===1){var _eye=eye;eye=_eye.eye;center=_eye.center;up=_eye.up;}center=center||[0,0,0];up=up||[0,1,0];mat4["f" /* lookAt */](this,eye,center,up);return this.check();}// Generates a orthogonal projection matrix with the given bounds
// from "traditional" view space parameters
// left  number  Left bound of the frustum
// right number  Right bound of the frustum
// bottom  number  Bottom bound of the frustum
// top number  Top bound of the frustum
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.ortho=function ortho(_ref2){var left=_ref2.left,right=_ref2.right,bottom=_ref2.bottom,top=_ref2.top,_ref2$near=_ref2.near,near=_ref2$near===void 0?0.1:_ref2$near,_ref2$far=_ref2.far,far=_ref2$far===void 0?500:_ref2$far;mat4["h" /* ortho */](this,left,right,bottom,top,near,far);return this.check();}// Generates an orthogonal projection matrix with the same parameters
// as a perspective matrix (plus focalDistance)
// fovy  number  Vertical field of view in radians
// aspect  number  Aspect ratio. typically viewport width/height
// focalDistance distance in the view frustum used for extent calculations
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.orthographic=function orthographic(_ref3){var _ref3$fovy=_ref3.fovy,fovy=_ref3$fovy===void 0?45*Math.PI/180:_ref3$fovy,_ref3$aspect=_ref3.aspect,aspect=_ref3$aspect===void 0?1:_ref3$aspect,_ref3$focalDistance=_ref3.focalDistance,focalDistance=_ref3$focalDistance===void 0?1:_ref3$focalDistance,_ref3$near=_ref3.near,near=_ref3$near===void 0?0.1:_ref3$near,_ref3$far=_ref3.far,far=_ref3$far===void 0?500:_ref3$far;if(fovy>Math.PI*2){throw Error('radians');}var halfY=fovy/2;var top=focalDistance*Math.tan(halfY);// focus_plane is the distance from the camera
var right=top*aspect;return new Matrix4().ortho({left:-right,right:right,bottom:-top,top:top,near:near,far:far});}// Generates a perspective projection matrix with the given bounds
// fovy  number  Vertical field of view in radians
// aspect  number  Aspect ratio. typically viewport width/height
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.perspective=function perspective(_temp){var _ref4=_temp===void 0?{}:_temp,fovy=_ref4.fovy,_ref4$fov=_ref4.fov,fov=_ref4$fov===void 0?45*Math.PI/180:_ref4$fov,_ref4$aspect=_ref4.aspect,aspect=_ref4$aspect===void 0?1:_ref4$aspect,_ref4$near=_ref4.near,near=_ref4$near===void 0?0.1:_ref4$near,_ref4$far=_ref4.far,far=_ref4$far===void 0?500:_ref4$far;fovy=fovy||fov;if(fovy>Math.PI*2){throw Error('radians');}mat4["i" /* perspective */](this,fovy,aspect,near,far);return this.check();}// Accessors
;_proto.determinant=function determinant(){return mat4["a" /* determinant */](this);}// Extracts the non-uniform scale assuming the matrix is an affine transformation.
// The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
;_proto.getScale=function getScale(result){if(result===void 0){result=[-0,-0,-0];}// explicit is faster than hypot...
result[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]);result[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]);result[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]);// result[0] = Math.hypot(this[0], this[1], this[2]);
// result[1] = Math.hypot(this[4], this[5], this[6]);
// result[2] = Math.hypot(this[8], this[9], this[10]);
return result;}// Gets the translation portion, assuming the matrix is a affine transformation matrix.
;_proto.getTranslation=function getTranslation(result){if(result===void 0){result=[-0,-0,-0];}result[0]=this[12];result[1]=this[13];result[2]=this[14];return result;}// Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
;_proto.getRotation=function getRotation(result,scaleResult){if(result===void 0){result=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0];}if(scaleResult===void 0){scaleResult=null;}var scale=this.getScale(scaleResult||[-0,-0,-0]);var inverseScale0=1/scale[0];var inverseScale1=1/scale[1];var inverseScale2=1/scale[2];result[0]=this[0]*inverseScale0;result[1]=this[1]*inverseScale1;result[2]=this[2]*inverseScale2;result[3]=0;result[4]=this[4]*inverseScale0;result[5]=this[5]*inverseScale1;result[6]=this[6]*inverseScale2;result[7]=0;result[8]=this[8]*inverseScale0;result[9]=this[9]*inverseScale1;result[10]=this[10]*inverseScale2;result[11]=0;result[12]=0;result[13]=0;result[14]=0;result[15]=1;return result;};_proto.getRotationMatrix3=function getRotationMatrix3(result,scaleResult){if(result===void 0){result=[-0,-0,-0,-0,-0,-0,-0,-0,-0];}if(scaleResult===void 0){scaleResult=null;}var scale=this.getScale(scaleResult||[-0,-0,-0]);var inverseScale0=1/scale[0];var inverseScale1=1/scale[1];var inverseScale2=1/scale[2];result[0]=this[0]*inverseScale0;result[1]=this[1]*inverseScale1;result[2]=this[2]*inverseScale2;result[3]=this[4]*inverseScale0;result[4]=this[5]*inverseScale1;result[5]=this[6]*inverseScale2;result[6]=this[8]*inverseScale0;result[7]=this[9]*inverseScale1;result[8]=this[10]*inverseScale2;return result;}// Modifiers
;_proto.transpose=function transpose(){mat4["p" /* transpose */](this,this);return this.check();};_proto.invert=function invert(){mat4["e" /* invert */](this,this);return this.check();}// Operations
;_proto.multiplyLeft=function multiplyLeft(a){mat4["g" /* multiply */](this,a,this);return this.check();};_proto.multiplyRight=function multiplyRight(a){mat4["g" /* multiply */](this,this,a);return this.check();}// Rotates a matrix by the given angle around the X axis
;_proto.rotateX=function rotateX(radians){mat4["k" /* rotateX */](this,this,radians);// mat4.rotate(this, this, radians, [1, 0, 0]);
return this.check();}// Rotates a matrix by the given angle around the Y axis.
;_proto.rotateY=function rotateY(radians){mat4["l" /* rotateY */](this,this,radians);// mat4.rotate(this, this, radians, [0, 1, 0]);
return this.check();}// Rotates a matrix by the given angle around the Z axis.
;_proto.rotateZ=function rotateZ(radians){mat4["m" /* rotateZ */](this,this,radians);// mat4.rotate(this, this, radians, [0, 0, 1]);
return this.check();};_proto.rotateXYZ=function rotateXYZ(_ref5){var rx=_ref5[0],ry=_ref5[1],rz=_ref5[2];return this.rotateX(rx).rotateY(ry).rotateZ(rz);};_proto.rotateAxis=function rotateAxis(radians,axis){mat4["j" /* rotate */](this,this,radians,axis);return this.check();};_proto.scale=function scale(factor){if(Array.isArray(factor)){mat4["n" /* scale */](this,this,factor);}else{mat4["n" /* scale */](this,this,[factor,factor,factor]);}return this.check();};_proto.translate=function translate(vec){mat4["o" /* translate */](this,this,vec);return this.check();}// Transforms
// Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
;_proto.transform=function transform(vector,result){if(vector.length===4){result=transformMat4(result||[-0,-0,-0,-0],vector,this);Object(validators["b" /* checkVector */])(result,4);return result;}return this.transformAsPoint(vector,result);}// Transforms any 2 or 3 element array as point (w implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(vector,result){var length=vector.length;switch(length){case 2:result=vec2["d" /* transformMat4 */](result||[-0,-0],vector,this);break;case 3:result=vec3["i" /* transformMat4 */](result||[-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}Object(validators["b" /* checkVector */])(result,vector.length);return result;}// Transforms any 2 or 3 element array as vector (w implicitly 0)
;_proto.transformAsVector=function transformAsVector(vector,result){switch(vector.length){case 2:result=Object(gl_matrix_extras["a" /* vec2_transformMat4AsVector */])(result||[-0,-0],vector,this);break;case 3:result=Object(gl_matrix_extras["c" /* vec3_transformMat4AsVector */])(result||[-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}Object(validators["b" /* checkVector */])(result,vector.length);return result;}// three.js math API compatibility
;_proto.makeRotationX=function makeRotationX(radians){return this.identity().rotateX(radians);};_proto.makeTranslation=function makeTranslation(x,y,z){return this.identity().translate([x,y,z]);}// DEPRECATED in 3.0
;_proto.transformPoint=function transformPoint(vector,result){Object(validators["c" /* deprecated */])('Matrix4.transformPoint','3.0');return this.transformAsPoint(vector,result);};_proto.transformVector=function transformVector(vector,result){Object(validators["c" /* deprecated */])('Matrix4.transformVector','3.0');return this.transformAsPoint(vector,result);};_proto.transformDirection=function transformDirection(vector,result){Object(validators["c" /* deprecated */])('Matrix4.transformDirection','3.0');return this.transformAsVector(vector,result);};return Matrix4;}(matrix["a" /* default */]);

/***/ }),

/***/ "TSYQ":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__("LK8F");

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "Tdpu":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7DDg")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "U8pU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "UvnN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _math_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l45l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _math_gl_core__WEBPACK_IMPORTED_MODULE_0__["n"]; });



/***/ }),

/***/ "W7fB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {/* unused harmony export self */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return window_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return global_; });
/* unused harmony export document */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return process_; });
/* unused harmony export console */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");

var globals = {
  self: typeof self !== 'undefined' && self,
  window: typeof window !== 'undefined' && window,
  global: typeof global !== 'undefined' && global,
  document: typeof document !== 'undefined' && document,
  process: (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(process)) === 'object' && process
};
var self_ = globals.self || globals.window || globals.global;
var window_ = globals.window || globals.self || globals.global;
var global_ = globals.global || globals.self || globals.window;
var document_ = globals.document || {};
var process_ = globals.process || {};
var console_ = console;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj"), __webpack_require__("8oxB")))

/***/ }),

/***/ "Y9lz":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("7DDg")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "Zz4T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__("OGtf")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),

/***/ "a0bm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assert; });
function assert(condition,message){if(!condition){throw new Error("math.gl assertion "+message);}}

/***/ }),

/***/ "bHtr":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("XKFU");

$export($export.P, 'Array', { fill: __webpack_require__("Nr18") });

__webpack_require__("nGyu")('fill');


/***/ }),

/***/ "cYR7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// NOTE: Added to make Cesium-derived test cases work
// TODO: Determine if/how to keep
/* harmony default export */ __webpack_exports__["a"] = ({EPSILON1:1e-1,EPSILON2:1e-2,EPSILON3:1e-3,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,PI_OVER_TWO:Math.PI/2,PI_OVER_FOUR:Math.PI/4,PI_OVER_SIX:Math.PI/6,TWO_PI:Math.PI*2});

/***/ }),

/***/ "eHKK":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__("XKFU");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ "l0Rn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("RYi7");
var defined = __webpack_require__("vhPU");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),

/***/ "l45l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UvnN");
/* harmony import */ var _classes_vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HoFx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _classes_vector2__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _classes_vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("w/tW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _classes_vector3__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _classes_vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Usm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _classes_vector4__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _classes_matrix3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0SR0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classes_matrix3__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _classes_matrix4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("SrsD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _classes_matrix4__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Ggdh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _lib_common__WEBPACK_IMPORTED_MODULE_6__["f"]; });

/* harmony import */ var _lib_math_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cYR7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _lib_math_utils__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a0bm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_assert__WEBPACK_IMPORTED_MODULE_8__["a"]; });

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
// math.gl classes
/* global self, window, global */var globals={// eslint-disable-next-line no-restricted-globals
self:typeof self!=='undefined'&&self,window:typeof window!=='undefined'&&window,global:typeof global!=='undefined'&&global};var global_=globals.global||globals.self||globals.window;// Make config avalable as global variable for access in debugger
// TODO - integrate with probe.gl (as soft dependency) to persist across reloades
global_.mathgl={config:math_gl__WEBPACK_IMPORTED_MODULE_0__[/* config */ "h"]};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "ls82":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("rGqo");

__webpack_require__("yt8O");

__webpack_require__("a1Th");

__webpack_require__("h7Nl");

__webpack_require__("VRzm");

__webpack_require__("Btvt");

__webpack_require__("/SS/");

__webpack_require__("f3/d");

__webpack_require__("8+KV");

__webpack_require__("hHhE");

__webpack_require__("rE2o");

__webpack_require__("ioFf");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "lvtm":
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ls82");


/***/ }),

/***/ "o7VR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBrowser; });
/* unused harmony export isBrowserMainThread */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8pU");
/* harmony import */ var _is_electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KFwR");


function isBrowser() {
  var isNode = (typeof process === "undefined" ? "undefined" : Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(process)) === 'object' && String(process) === '[object process]' && !process.browser;
  return !isNode || Object(_is_electron__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
}
function isBrowserMainThread() {
  return isBrowser() && typeof document !== 'undefined';
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "umh7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* unused harmony export copy */
/* unused harmony export set */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiply */
/* unused harmony export divide */
/* unused harmony export ceil */
/* unused harmony export floor */
/* unused harmony export min */
/* unused harmony export max */
/* unused harmony export round */
/* unused harmony export scale */
/* unused harmony export scaleAndAdd */
/* unused harmony export distance */
/* unused harmony export squaredDistance */
/* unused harmony export length */
/* unused harmony export squaredLength */
/* unused harmony export negate */
/* unused harmony export inverse */
/* unused harmony export normalize */
/* unused harmony export dot */
/* unused harmony export cross */
/* unused harmony export lerp */
/* unused harmony export random */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return transformMat4; });
/* unused harmony export rotate */
/* unused harmony export angle */
/* unused harmony export zero */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export len */
/* unused harmony export sub */
/* unused harmony export mul */
/* unused harmony export div */
/* unused harmony export dist */
/* unused harmony export sqrDist */
/* unused harmony export sqrLen */
/* unused harmony export forEach */
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x8ZO");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y9lz");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yOd+");



/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"] != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_2__[/* ARRAY_TYPE */ "a"](2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_2__[/* RANDOM */ "c"]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */

function rotate(out, a, b, c) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(c),
      cosC = Math.cos(c); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1];
  var len1 = x1 * x1 + y1 * y1;

  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }

  var len2 = x2 * x2 + y2 * y2;

  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }

  var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_2__[/* EPSILON */ "b"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "w/tW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector3; });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JmAm");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ggdh");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Jp9o");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MTwu");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("RHrP");
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
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
var ORIGIN=[0,0,0];var Vector3=/*#__PURE__*/function(_Vector){_inheritsLoose(Vector3,_Vector);function Vector3(x,y,z){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,-0,-0,-0)||this;if(arguments.length===1&&Object(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "e"])(x)){_this.copy(x);}else{// this.set(x, y, z);
if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(y);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(z);}_this[0]=x;_this[1]=y;_this[2]=z;}return _this;}var _proto=Vector3.prototype;_proto.set=function set(x,y,z){this[0]=x;this[1]=y;this[2]=z;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];return this.check();};_proto.fromObject=function fromObject(object){if(_lib_common__WEBPACK_IMPORTED_MODULE_1__[/* config */ "a"].debug){Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.x);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.y);Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(object.z);}this[0]=object.x;this[1]=object.y;this[2]=object.z;return this.check();};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];object.z=this[2];return object;}// Getters/setters
/* eslint-disable no-multi-spaces, brace-style, no-return-assign */;/* eslint-enable no-multi-spaces, brace-style, no-return-assign */_proto.angle=function angle(vector){return gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* angle */ "a"](this,vector);}// MODIFIERS
;_proto.cross=function cross(vector){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* cross */ "b"](this,this,vector);return this.check();};_proto.rotateX=function rotateX(_ref){var radians=_ref.radians,_ref$origin=_ref.origin,origin=_ref$origin===void 0?ORIGIN:_ref$origin;gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* rotateX */ "e"](this,this,origin,radians);return this.check();};_proto.rotateY=function rotateY(_ref2){var radians=_ref2.radians,_ref2$origin=_ref2.origin,origin=_ref2$origin===void 0?ORIGIN:_ref2$origin;gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* rotateY */ "f"](this,this,origin,radians);return this.check();};_proto.rotateZ=function rotateZ(_ref3){var radians=_ref3.radians,_ref3$origin=_ref3.origin,origin=_ref3$origin===void 0?ORIGIN:_ref3$origin;gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* rotateZ */ "g"](this,this,origin,radians);return this.check();}// Transforms
// transforms as point (4th component is implicitly 1)
;_proto.transform=function transform(matrix4){return this.transformAsPoint(matrix4);}// transforms as point (4th component is implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(matrix4){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* transformMat4 */ "i"](this,this,matrix4);return this.check();}// transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
;_proto.transformAsVector=function transformAsVector(matrix4){Object(_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__[/* vec3_transformMat4AsVector */ "c"])(this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* transformMat3 */ "h"](this,this,matrix3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){Object(_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__[/* vec3_transformMat2 */ "b"])(this,this,matrix2);return this.check();};_proto.transformByQuaternion=function transformByQuaternion(quaternion){gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__[/* transformQuat */ "j"](this,this,quaternion);return this.check();};_createClass(Vector3,[{key:"ELEMENTS",get:function get(){return 3;}// x,y inherited from Vector
},{key:"z",get:function get(){return this[2];},set:function set(value){return this[2]=Object(_lib_validators__WEBPACK_IMPORTED_MODULE_2__[/* checkNumber */ "a"])(value);}}]);return Vector3;}(_base_vector__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "x8ZO":
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__("XKFU");
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),

/***/ "yOd+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RANDOM; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("x8ZO");
/* harmony import */ var core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_hypot__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Y9lz");
/* harmony import */ var core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_float32_array__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "z2o2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__("0/R4");
var meta = __webpack_require__("Z6vF").onFreeze;

__webpack_require__("Xtr8")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ })

}]);
//# sourceMappingURL=component---examples-benchmarks-app-js-d0a63e0d8d098c1d4e61.js.map