import MathArray from './math-array';
import {checkNumber} from './validators';
import {config} from './common';

export default class Matrix extends MathArray {
  toString() {
    let string = '[';
    if (config.printRowMajor) {
      string += 'row-major:';
      for (let row = 0; row < this.RANK; ++row) {
        for (let col = 0; col < this.RANK; ++col) {
          string += ` ${this[row * this.RANK + col]}`;
        }
      }
    } else {
      string += 'col-major:';
      for (let i = 0; i < this.ELEMENTS; ++i) {
        string += ` ${this[i]}`;
      }
    }
    return string;
  }

  // By default assumes row major indices
  getElement(i, j, columnMajor = false) {
    return columnMajor ? this[i * 3 + j] : this[j * 3 + i];
  }

  // By default assumes row major indices
  setElement(i, j, value, columnMajor = false) {
    if (columnMajor) {
      this[i * this.RANK + j] = checkNumber(value);
    } else {
      this[j * this.RANK + i] = checkNumber(value);
    }
    return this;
  }

  getColumn(columnIndex, result = new this.Vector()) {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      result[i] = this[firstIndex + i];
    }
    return result;
  }

  setColumn(columnIndex, columnVector) {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      this[firstIndex + i] = columnVector[i];
    }
    return this;
  }
}
