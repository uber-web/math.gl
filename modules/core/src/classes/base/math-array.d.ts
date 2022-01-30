import type {NumberArray} from '@math.gl/types';

/** Base class for vectors and matrices */
export default abstract class MathArray extends Array<number> {
  // Defined by derived class
  abstract get ELEMENTS(): number;

  clone(): this;

  // TODO - define more sophisticated object type per class?
  from(array: Readonly<NumberArray>): this;
  from(object: object): this;

  fromArray(array: Readonly<NumberArray>, offset?: number): this;
  // todo
  to(arrayOrObject: NumberArray | {[key: string]: number} | any): any;
  toTarget(target: Readonly<NumberArray> | Readonly<{[key: string]: number}>): any;

  toArray(array?: number[], offset?: number): number[];
  toFloat32Array(): Float32Array;
  toString(): string;
  formatString(opts: Record<string, any>): string; // TODO - declare options type
  equals(array: Readonly<NumberArray>): boolean;
  exactEquals(array: Readonly<NumberArray>): boolean;

  // Modifiers

  negate(): this;
  lerp(a: Readonly<NumberArray>, b: Readonly<NumberArray>, t: number): this;

  min(vector: Readonly<NumberArray>): this;
  max(vector: Readonly<NumberArray>): this;

  clamp(minVector: Readonly<NumberArray>, maxVector: Readonly<NumberArray>): this;

  add(...vectors: Readonly<NumberArray>[]): this;
  subtract(...vectors: Readonly<NumberArray>[]): this;

  scale(scale): this;

  // three.js compatibility

  sub(a: NumberArray): this;
  setScalar(a): this;
  addScalar(a): this;
  subScalar(a): this;
  multiplyScalar(scalar: number): this;
  divideScalar(a: number): this;
  clampScalar(min: number, max: number): this;
  elements: number[];

  // Cesium compatibility
  multiplyByScalar(scalar): this;

  // private
  check(): this;
}
