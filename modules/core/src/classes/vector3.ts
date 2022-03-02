// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import {NumericArray} from '@math.gl/types';
import Vector from './base/vector';
import {config, isArray} from '../lib/common';
import {checkNumber} from '../lib/validators';
import * as vec3 from 'gl-matrix/vec3';
/* eslint-disable camelcase */
import {vec3_transformMat2, vec3_transformMat4AsVector} from '../lib/gl-matrix-extras';

const ORIGIN = [0, 0, 0];

let ZERO: Vector3;

/**
 * Three-element vector class.
 * Subclass of Array<number>
 */
export default class Vector3 extends Vector {
  static get ZERO(): Vector3 {
    if (!ZERO) {
      ZERO = new Vector3(0, 0, 0);
      Object.freeze(ZERO);
    }
    return ZERO;
  }

  /**
   * @class
   * @param x
   * @param y
   * @param z
   */
  constructor(x: number | Readonly<NumericArray> = 0, y: number = 0, z: number = 0) {
    // PERF NOTE: initialize elements as double precision numbers
    super(-0, -0, -0);
    if (arguments.length === 1 && isArray(x)) {
      this.copy(x as NumericArray);
    } else {
      // this.set(x, y, z);
      if (config.debug) {
        checkNumber(x);
        checkNumber(y);
        checkNumber(z);
      }
      // @ts-expect-error TS2412: Property '0' of type 'number | [number, number, number]' is not assignable to numeric index type 'number'
      this[0] = x;
      this[1] = y;
      this[2] = z;
    }
  }

  set(x: number, y: number, z: number): this {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    return this.check();
  }

  copy(array: Readonly<NumericArray>): this {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    return this.check();
  }

  fromObject(object: {x: number; y: number; z: number}): this {
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

  toObject(object: {x?: number; y?: number; z?: number}): {x: number; y: number; z: number} {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    return object as {x: number; y: number; z: number};
  }

  // Getters/setters

  get ELEMENTS(): number {
    return 3;
  }
  get z(): number {
    return this[2];
  }
  set z(value: number) {
    this[2] = checkNumber(value);
  }

  // ACCESSORS

  angle(vector: Readonly<NumericArray>): number {
    return vec3.angle(this, vector);
  }

  // MODIFIERS

  cross(vector: Readonly<NumericArray>): this {
    vec3.cross(this, this, vector);
    return this.check();
  }

  rotateX({radians, origin = ORIGIN}: {radians: number; origin?: Readonly<NumericArray>}): this {
    vec3.rotateX(this, this, origin, radians);
    return this.check();
  }

  rotateY({radians, origin = ORIGIN}: {radians: number; origin?: Readonly<NumericArray>}): this {
    vec3.rotateY(this, this, origin, radians);
    return this.check();
  }

  rotateZ({radians, origin = ORIGIN}: {radians: number; origin?: Readonly<NumericArray>}): this {
    vec3.rotateZ(this, this, origin, radians);
    return this.check();
  }

  // Transforms

  // transforms as point (4th component is implicitly 1)
  transform(matrix4: Readonly<NumericArray>): this {
    return this.transformAsPoint(matrix4);
  }

  // transforms as point (4th component is implicitly 1)
  transformAsPoint(matrix4: Readonly<NumericArray>): this {
    vec3.transformMat4(this, this, matrix4);
    return this.check();
  }

  // transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
  transformAsVector(matrix4: Readonly<NumericArray>): this {
    vec3_transformMat4AsVector(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3: Readonly<NumericArray>): this {
    vec3.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2: Readonly<NumericArray>): this {
    vec3_transformMat2(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion: Readonly<NumericArray>): this {
    vec3.transformQuat(this, this, quaternion);
    return this.check();
  }
}
