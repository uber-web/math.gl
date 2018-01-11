import MathArray from './math-array';
import {checkNumber} from './common';

export default class Vector extends MathArray {

  // ACCESSORS

  // NOTE: `length` is a reserved word for Arrays, so we can't use `v.length()`
  // Offer `len` and `magnitude`

  len() {
    return Math.sqrt(this.lengthSquared());
  }

  magnitude() {
    return Math.sqrt(this.lengthSquared());
  }

  lengthSquared() {
    let length = 0;
    for (let i = 0; i < this.ELEMENTS; ++i) {
      length += this[i] * this[i];
    }
    return length;
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
}
