// math.gl, MIT License
import {NumericArray} from '@math.gl/types';
import {ConfigurationOptions, config, formatValue, equals, isArray} from '../../lib/common';

/** Base class for vectors and matrices */
export default abstract class MathArray extends Array<number> {
  /** Number of elements (values) in this array */
  abstract get ELEMENTS(): number;

  abstract copy(vector: Readonly<NumericArray>): this;

  abstract fromObject(object: object): this;

  // Common methods

  /**
   * Clone the current object
   * @returns a new copy of this object
   */
  clone(): this {
    // @ts-expect-error TS2351: Cannot use 'new' with an expression whose type lacks a call or construct signature.
    return new this.constructor().copy(this); // eslint-disable-line
  }

  fromArray(array: Readonly<NumericArray>, offset: number = 0): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i + offset];
    }
    return this.check();
  }

  toArray<TypedArray>(targetArray: TypedArray, offset?: number): TypedArray;
  toArray(targetArray?: number[], offset?: number): NumericArray;

  toArray(targetArray: NumericArray = [], offset: number = 0): NumericArray {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      targetArray[offset + i] = this[i];
    }
    return targetArray;
  }

  from(arrayOrObject: Readonly<NumericArray> | object): this {
    return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
  }

  to<T extends NumericArray | object>(arrayOrObject: T): T {
    // @ts-ignore
    if (arrayOrObject === this) {
      return this;
    }
    // @ts-expect-error TS2339: Property 'toObject' does not exist on type 'MathArray'.
    return isArray(arrayOrObject) ? this.toArray(arrayOrObject) : this.toObject(arrayOrObject);
  }

  toTarget(target: this): this {
    return target ? this.to(target) : this;
  }

  /** @deprecated */
  toFloat32Array(): Float32Array {
    return new Float32Array(this);
  }

  toString(): string {
    return this.formatString(config);
  }

  /** Formats string according to options */
  formatString(opts: ConfigurationOptions): string {
    let string = '';
    for (let i = 0; i < this.ELEMENTS; ++i) {
      string += (i > 0 ? ', ' : '') + formatValue(this[i], opts);
    }
    return `${opts.printTypes ? this.constructor.name : ''}[${string}]`;
  }

  equals(array: Readonly<NumericArray>): boolean {
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

  exactEquals(array: Readonly<NumericArray>): boolean {
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

  /** Negates all values in this object */
  negate(): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = -this[i];
    }
    return this.check();
  }

  /** Linearly interpolates between two values */
  lerp(a: Readonly<NumericArray>, t: number): this;
  lerp(a: Readonly<NumericArray>, b: Readonly<NumericArray>, t: number): this;

  lerp(a: Readonly<NumericArray>, b: Readonly<NumericArray> | number, t?: number): this {
    if (t === undefined) {
      return this.lerp(this, a, b as number);
    }
    for (let i = 0; i < this.ELEMENTS; ++i) {
      const ai = a[i];
      this[i] = ai + t * (b[i] - ai);
    }
    return this.check();
  }

  /** Minimal */
  min(vector: Readonly<NumericArray>): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(vector[i], this[i]);
    }
    return this.check();
  }

  /** Maximal */
  max(vector: Readonly<NumericArray>): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.max(vector[i], this[i]);
    }
    return this.check();
  }

  clamp(minVector: Readonly<NumericArray>, maxVector: Readonly<NumericArray>): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
    }
    return this.check();
  }

  add(...vectors: Readonly<NumericArray>[]): this {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] += vector[i];
      }
    }
    return this.check();
  }

  subtract(...vectors: Readonly<NumericArray>[]): this {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] -= vector[i];
      }
    }
    return this.check();
  }

  scale(scale: number | Readonly<NumericArray>): this {
    if (typeof scale === 'number') {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= scale;
      }
    } else {
      for (let i = 0; i < this.ELEMENTS && i < scale.length; ++i) {
        this[i] *= scale[i];
      }
    }
    return this.check();
  }

  /**
   * Multiplies all elements by `scale`
   * Note: `Matrix4.multiplyByScalar` only scales its 3x3 "minor"
   */
  multiplyByScalar(scalar: number): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }
    return this.check();
  }

  // Debug checks

  /** Throws an error if array length is incorrect or contains illegal values */
  check(): this {
    if (config.debug && !this.validate()) {
      throw new Error(`math.gl: ${this.constructor.name} some fields set to invalid numbers'`);
    }
    return this;
  }

  /** Returns false if the array length is incorrect or contains illegal values */
  validate(): boolean {
    let valid = this.length === this.ELEMENTS;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      valid = valid && Number.isFinite(this[i]);
    }
    return valid;
  }

  // three.js compatibility

  /** @deprecated */
  sub(a: Readonly<NumericArray>): this {
    return this.subtract(a);
  }

  /** @deprecated */
  setScalar(a: number): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = a;
    }
    return this.check();
  }

  /** @deprecated */
  addScalar(a: number): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] += a;
    }
    return this.check();
  }

  /** @deprecated */
  subScalar(a: number): this {
    return this.addScalar(-a);
  }

  /** @deprecated */
  multiplyScalar(scalar: number): this {
    // Multiplies all elements
    // `Matrix4.scale` only scales its 3x3 "minor"
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }
    return this.check();
  }

  /** @deprecated */
  divideScalar(a: number): this {
    return this.multiplyByScalar(1 / a);
  }

  /** @deprecated */
  clampScalar(min: number, max: number): this {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], min), max);
    }
    return this.check();
  }

  /** @deprecated */
  get elements(): NumericArray {
    return this;
  }
}
