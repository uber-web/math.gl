// math.gl, MIT license

import test, {Test} from 'tape-promise/tape';
import {tapeEquals, tapeNotEquals, tapeEqualsEpsilon} from './tape-assertions';

// Maps `expect` style tests to `tape assert` style tests

class TestCase {
  _t: Test;
  _result: any;
  _not: boolean;

  constructor(t: Test, result: any) {
    this._t = t;
    this._result = result;
    this._not = false;
  }

  toBe(value: any): void {
    if (this._not) {
      this._t.notEquals(this._result, value);
    } else {
      this._t.equals(this._result, value);
    }
  }

  toEqual(value: any): void {
    if (this._not) {
      tapeNotEquals(this._t, this._result, value);
    } else {
      tapeEquals(this._t, this._result, value);
    }
  }

  toEqualEpsilon(value: number, epsilon: number): void {
    tapeEqualsEpsilon(this._t, this._result, value, epsilon);
  }

  toThrow(): void {
    this._t.throws(() => this._result());
  }

  get not(): this {
    this._not = !this._not;
    return this;
  }
}

let currentTest: Test;

let currentBeforeFunc: Function;

export function beforeEach(beforeFunc: Function) {
  currentBeforeFunc = beforeFunc;
}

export function it(message: string, testfunc: Function) {
  if (currentBeforeFunc) {
    currentBeforeFunc();
  }

  test(message, (t) => {
    currentTest = t;
    testfunc();
    t.end();
  });
}

export function expect(value: unknown) {
  return new TestCase(currentTest, value);
}
