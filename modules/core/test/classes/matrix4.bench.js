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

import {configure, Vector4, Matrix4} from '@math.gl/core';
import * as mat4 from 'gl-matrix/mat4';

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

const array = [0, 0, 0];
// const arrayVector = new CesiumMatrix4();
// const objectVector = new THREEMatrix4();
const matrix4 = new Matrix4();

const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

const classicArray = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];
const float32Array = new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
const float64Array = new Float64Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

const mathglVector4 = new Vector4();
const dirVector4 = new Vector4(0, 0, 0, 0);
const pointVector4 = new Vector4(0, 0, 0, 1);
const vector3 = [0, 0, 0];

export default function matrix4Bench(suite, addReferenceBenchmarks) {
  suite
    // add tests
    .group('@math.gl/core: Matrix4 constructors')
    .add('Matrix4#new Matrix4()', () => configure({debug: false}), () => new Matrix4())
    .add('Matrix4#new Matrix4(debug)', () => configure({debug: true}), () => new Matrix4())
    .add('Matrix4#copy()', () => configure({debug: false}), () => matrix4.copy(IDENTITY))
    .add('Matrix4#copy(debug)', () => configure({debug: true}), () => matrix4.copy(IDENTITY))
    .add(
      'Matrix4#set()',
      () => configure({debug: false}),
      () => matrix4.set(1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    )
    .add('Matrix4#setRowMajor()', () =>
      matrix4.setRowMajor(1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    )
    .add('Matrix4#identity', () => matrix4.identity())
    .add('Matrix4#fromQuaternion', () => matrix4.fromQuaternion([1, 1, 1, 1]));
  // .add('Matrix4#from(Matrix4)', () => matrix4.from(arrayVector))
  // .add('Matrix4#from(Object)', () => matrix4.from(objectVector))
  // .add('Matrix4#to(Matrix4)', () => matrix4.to(arrayVector))
  // .add('Matrix4#to(Object)', () => matrix4.to(objectVector));

  if (addReferenceBenchmarks) {
    suite
      .add('Array(16)', () => new Array(16))
      .add('[1, 0, 0, 0, ...]', () => [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      .add('new Float32Array(16)', () => new Float32Array(16))
      .add('new Float32Array(IDENTITY)', () => new Float32Array(IDENTITY))
      .add('new Float64Array(16)', () => new Float64Array(16))
      .add('new Float64Array(IDENTITY)', () => new Float64Array(IDENTITY));
  }

  if (addReferenceBenchmarks) {
    suite
      .add('Matrix4#from(Array)', () => matrix4.from(array))
      .add('Matrix4#from(Float32Array)', () => matrix4.from(float32Array))
      .add('Matrix4#to(Array)', () => matrix4.to(array))
      .add('Matrix4#to(Float32Array)', () => matrix4.to(float32Array));
    // .group('debug validation cost')
    // .add('Matrix4#validate (debug)', () => configure({debug: true}), () => matrix4.check())
    // .add('Matrix4#validate ', () => configure({debug: false}), () => matrix4.check())
  }

  suite
    .group('@math.gl/core: Matrix4 Multiplication')
    .add('Matrix4#multiplyRight(Matrix4)', () => matrix4.multiplyRight(matrix4))
    .add('gl-matrix#multiply(Matrix4)', () => mat4.multiply(matrix4, matrix4, matrix4))
    .add('Matrix4#transform(dir4)', () => matrix4.transform(dirVector4, mathglVector4))
    .add('Matrix4#transform(point4)', () => matrix4.transform(pointVector4, mathglVector4))
    .add('Matrix4#transformAsVector(v3)', () => matrix4.transformAsVector(vector3, vector3))
    .add('Matrix4#transformAsPoint(v3)', () => matrix4.transformAsVector(vector3, vector3));

  suite
    .group('@math.gl/core: Matrix4 accessors')
    .add('Matrix4#determinant()', () => matrix4.determinant())
    .add('Matrix4#getScale()', () => matrix4.getScale())
    .add('Matrix4#getTranslation()', () => matrix4.getTranslation())
    .add('Matrix4#getRotation()', () => matrix4.getRotation())
    .add('Matrix4#getRotationMatrix3()', () => matrix4.getRotationMatrix3());

  suite
    .group('@math.gl/core: Matrix4 operations')
    .add('Matrix4#transpose()', () => matrix4.transpose())
    .add('Matrix4#invert()', () => matrix4.invert())

    .add('Matrix4#scale()', () => matrix4.scale(2))
    .add('Matrix4#translate()', () => matrix4.translate([1, 1, 1]));

  if (addReferenceBenchmarks) {
    suite
      .add('gl-matrix#multiply(array)', () =>
        mat4.multiply(classicArray, classicArray, classicArray)
      )
      .add('gl-matrix#multiply(float32Array)', () =>
        mat4.multiply(float32Array, float32Array, float32Array)
      )
      .add('gl-matrix#multiply(float64Array)', () =>
        mat4.multiply(float64Array, float64Array, float64Array)
      );
  }

  return suite;
}
