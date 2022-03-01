// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License
import {NumericArray} from '@math.gl/types';
import MathArray from './math-array';
import {checkNumber} from '../../lib/validators';
import {config} from '../../lib/common';

/** Base class for matrices */
export default abstract class Matrix extends MathArray {
  abstract get RANK(): number;

  // fromObject(object) {
  //   const array = object.elements;
  //   return this.fromRowMajor(array);
  // }
  // toObject(object) {
  //   const array = object.elements;
  //   this.toRowMajor(array);
  //   return object;
  // }

  // TODO better override formatString?
  toString(): string {
    let string = '[';
    if (config.printRowMajor) {
      string += 'row-major:';
      for (let row = 0; row < this.RANK; ++row) {
        for (let col = 0; col < this.RANK; ++col) {
          string += ` ${this[col * this.RANK + row]}`;
        }
      }
    } else {
      string += 'column-major:';
      for (let i = 0; i < this.ELEMENTS; ++i) {
        string += ` ${this[i]}`;
      }
    }
    string += ']';
    return string;
  }

  getElementIndex(row: number, col: number): number {
    return col * this.RANK + row;
  }

  // By default assumes row major indices
  getElement(row: number, col: number): number {
    return this[col * this.RANK + row];
  }

  // By default assumes row major indices
  setElement(row: number, col: number, value: number): this {
    this[col * this.RANK + row] = checkNumber(value);
    return this;
  }
  getColumn<NumArrayT>(columnIndex: number, result: NumArrayT): NumArrayT;
  getColumn(columnIndex: number): number[];

  getColumn(columnIndex: number, result: number[] = new Array(this.RANK).fill(-0)): number[] {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      result[i] = this[firstIndex + i];
    }
    return result;
  }

  setColumn(columnIndex: number, columnVector: Readonly<NumericArray>): this {
    const firstIndex = columnIndex * this.RANK;
    for (let i = 0; i < this.RANK; ++i) {
      this[firstIndex + i] = columnVector[i];
    }
    return this;
  }
}
