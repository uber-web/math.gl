import MathArray from './math-array';

/** Base class for vectors */
export default abstract class Vector extends MathArray {
  // VIRTUAL METHODS
  // copy(vector) {

  // ACCESSORS

  x: number;
  y: number;

  // NOTE: `length` is a reserved word for Arrays, so we can't use `v.length()`
  len(): number;
  magnitude(): number;
  lengthSquared(): number;
  magnitudeSquared(): number;

  distance(mathArray): number;

  distanceSquared(mathArray): number;

  dot(mathArray): number;
  // MODIFIERS

  normalize(): this;

  multiply(...vectors): this;

  divide(...vectors): this;

  // THREE.js compatibility
  lengthSq(): number;
  distanceTo(vector: this): number;
  distanceToSquared(vector): number;

  getComponent(i): number;
  setComponent(i, value): number;

  addVectors(a: this, b: this): this;
  subVectors(a: this, b: this): this;
  multiplyVectors(a: this, b: this): this;

  addScaledVector(a: this, b: this): this;
}
