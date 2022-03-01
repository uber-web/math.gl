// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import Vector from './base/vector';
import {config, isArray} from '../lib/common';
import {checkNumber} from '../lib/validators';
import * as vec2 from 'gl-matrix/vec2';
/* eslint-disable camelcase */
import {vec2_transformMat4AsVector} from '../lib/gl-matrix-extras';
import {NumericArray} from '@math.gl/types';

/**
 * Two-element vector class.
 * Subclass of Array<number>
 */
export default class Vector2 extends Vector {
  // Creates a new, empty vec2
  constructor(x: number | Readonly<NumericArray> = 0, y: number = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(2); // -0, -0);
    if (isArray(x) && arguments.length === 1) {
      this.copy(x as Readonly<NumericArray>);
    } else {
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
      }
      this[0] = x as number;
      this[1] = y;
    }
  }

  set(x: number, y: number): this {
    this[0] = x;
    this[1] = y;
    return this.check();
  }

  copy(array: Readonly<NumericArray>): this {
    this[0] = array[0];
    this[1] = array[1];
    return this.check();
  }

  fromObject(object: {x: number; y: number}): this {
    if (config.debug) {
      checkNumber(object.x);
      checkNumber(object.y);
    }
    this[0] = object.x;
    this[1] = object.y;
    return this.check();
  }

  toObject(object: {x?: number; y?: number}): {x: number; y: number} {
    object.x = this[0];
    object.y = this[1];
    return object as {x: number; y: number};
  }

  // Getters/setters

  get ELEMENTS(): number {
    return 2;
  }

  /**
   * Returns angle from x axis
   * @returns
   */
  horizontalAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Returns angle from y axis
   * @returns
   */
  verticalAngle(): number {
    return Math.atan2(this.x, this.y);
  }

  // Transforms

  /**
   * Transforms as point
   * @param matrix4
   * @returns
   */
  transform(matrix4: Readonly<NumericArray>): this {
    return this.transformAsPoint(matrix4);
  }

  /**
   * transforms as point (4th component is implicitly 1)
   * @param matrix4
   * @returns
   */
  transformAsPoint(matrix4: Readonly<NumericArray>): this {
    vec2.transformMat4(this, this, matrix4);
    return this.check();
  }

  /**
   * transforms as vector (4th component is implicitly 0, ignores translation. slightly faster)
   * @param matrix4
   * @returns
   */
  transformAsVector(matrix4: Readonly<NumericArray>): this {
    vec2_transformMat4AsVector(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3: Readonly<NumericArray>): this {
    vec2.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2x3(matrix2x3: Readonly<NumericArray>): this {
    vec2.transformMat2d(this, this, matrix2x3);
    return this.check();
  }

  transformByMatrix2(matrix2: Readonly<NumericArray>): this {
    vec2.transformMat2(this, this, matrix2);
    return this.check();
  }
}
