// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

import Vector from './base/vector';
import {config, isArray} from '../lib/common';
import {checkNumber} from '../lib/validators';
import * as vec4 from 'gl-matrix/vec3';
/* eslint-disable camelcase */
import {vec4_transformMat2, vec4_transformMat3} from '../lib/gl-matrix-extras';
import {NumericArray} from '@math.gl/types';

import type Matrix4 from './matrix4';

let ZERO: Vector4;

/**
 * Four-element vector class.
 * Subclass of Array<number>
 */
export default class Vector4 extends Vector {
  static get ZERO(): Vector4 {
    if (!ZERO) {
      ZERO = new Vector4(0, 0, 0, 0);
      Object.freeze(ZERO);
    }
    return ZERO;
  }

  constructor(x: number | Readonly<NumericArray> = 0, y: number = 0, z: number = 0, w: number = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x as Readonly<NumericArray>);
    } else {
      // this.set(x, y, z, w);
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
        checkNumber(w);
      }
      this[0] = x as number;
      this[1] = y;
      this[2] = z;
      this[3] = w;
    }
  }

  set(x: number, y: number, z: number, w: number): this {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  copy(array: Readonly<NumericArray>): this {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  fromObject(object: {x: number; y: number; z: number; w: number}): this {
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

  toObject(object: {x?: number; y?: number; z?: number; w?: number}): {
    x: number;
    y: number;
    z: number;
    w: number;
  } {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    object.w = this[3];
    return object as {
      x: number;
      y: number;
      z: number;
      w: number;
    };
  }

  // Getters/setters
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  get ELEMENTS(): number {
    return 4;
  }

  get z(): number {
    return this[2];
  }
  set z(value: number) {
    this[2] = checkNumber(value);
  }
  get w(): number {
    return this[3];
  }
  set w(value: number) {
    this[3] = checkNumber(value);
  }

  transform(matrix4: Readonly<NumericArray>): this {
    vec4.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3: Readonly<NumericArray>): this {
    vec4_transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2: Readonly<NumericArray>): this {
    vec4_transformMat2(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion: Readonly<NumericArray>): this {
    vec4.transformQuat(this, this, quaternion);
    return this.check();
  }

  // three.js compatibility
  applyMatrix4(m: Matrix4): this {
    m.transform(this, this);
    return this;
  }
}
