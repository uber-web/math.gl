// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import {NumericArray} from '@math.gl/types';
import MathArray from './math-array';
import {checkNumber} from '../../lib/validators';
import assert from '../../lib/assert';

/** Base class for vectors with at least 2 elements */
export default abstract class Vector extends MathArray {
  // ACCESSORS

  get x(): number {
    return this[0];
  }

  set x(value: number) {
    this[0] = checkNumber(value);
  }

  get y(): number {
    return this[1];
  }

  set y(value: number) {
    this[1] = checkNumber(value);
  }

  /**
   * Returns the length of the vector from the origin to the point described by this vector
   *
   * @note `length` is a reserved word for Arrays, so `v.length()` will return number of elements
   * Instead we provide `len` and `magnitude`
   */
  len(): number {
    return Math.sqrt(this.lengthSquared());
  }

  /**
   * Returns the length of the vector from the origin to the point described by this vector
   */
  magnitude(): number {
    return this.len();
  }

  /**
   * Returns the squared length of the vector from the origin to the point described by this vector
   */
  lengthSquared(): number {
    let length = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      length += this[i] * this[i];
    }
    return length;
  }

  /**
   * Returns the squared length of the vector from the origin to the point described by this vector
   */
  magnitudeSquared(): number {
    return this.lengthSquared();
  }

  distance(mathArray: Readonly<NumericArray>): number {
    return Math.sqrt(this.distanceSquared(mathArray));
  }

  distanceSquared(mathArray: Readonly<NumericArray>): number {
    let length = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      const dist = this[i] - mathArray[i];
      length += dist * dist;
    }
    return checkNumber(length);
  }

  dot(mathArray: Readonly<NumericArray>): number {
    let product = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      product += this[i] * mathArray[i];
    }
    return checkNumber(product);
  }

  // MODIFIERS

  normalize(): this {
    const length = this.magnitude();
    if (length !== 0) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= length;
      }
    }
    return this.check();
  }

  multiply(...vectors: Readonly<NumericArray>[]): this {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= vector[i];
      }
    }
    return this.check();
  }

  divide(...vectors: Readonly<NumericArray>[]): this {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= vector[i];
      }
    }
    return this.check();
  }

  // THREE.js compatibility

  lengthSq(): number {
    return this.lengthSquared();
  }
  distanceTo(vector: Readonly<NumericArray>): number {
    return this.distance(vector);
  }
  distanceToSquared(vector: Readonly<NumericArray>): number {
    return this.distanceSquared(vector);
  }

  getComponent(i: number): number {
    assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    return checkNumber(this[i]);
  }

  setComponent(i: number, value: number): this {
    assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    this[i] = value;
    return this.check();
  }

  addVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this {
    return this.copy(a).add(b);
  }

  subVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this {
    return this.copy(a).subtract(b);
  }

  multiplyVectors(a: Readonly<NumericArray>, b: Readonly<NumericArray>): this {
    return this.copy(a).multiply(b);
  }

  addScaledVector(a: Readonly<NumericArray>, b: number): this {
    // @ts-expect-error error TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.
    return this.add(new this.constructor(a).multiplyScalar(b));
  }
}
