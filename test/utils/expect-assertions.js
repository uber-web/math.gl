import test from 'tape';
import {tapeEquals, tapeNotEquals, tapeEqualsEpsilon} from './tape-assertions';

// Maps `expect` style tests to `tape assert` style tests

class TestCase {
  constructor(t, result) {
    this._t = t;
    this._result = result;
    this._not = false;
  }
  toBe(value) {
    if (this._not) {
      this._t.notEquals(this._result, value);
    } else {
      this._t.equals(this._result, value);
    }
  }
  toEqual(value) {
    if (this._not) {
      tapeNotEquals(this._t, this._result, value);
    } else {
      tapeEquals(this._t, this._result, value);
    }
  }
  toEqualEpsilon(value, epsilon) {
    tapeEqualsEpsilon(this._t, this._result, value, epsilon);
  }
  toThrow() {
    this._t.throws(() => this._result());
  }

  get not() {
    this._not = !this._not;
    return this;
  }
}

let currentTest;

let currentBeforeFunc;

export function beforeEach(beforeFunc) {
  currentBeforeFunc = beforeFunc;
}

export function it(message, testfunc) {
  if (currentBeforeFunc) {
    currentBeforeFunc();
  }

  test(message, t => {
    currentTest = t;
    testfunc();
    t.end();
  });
}

export function expect(value) {
  return new TestCase(currentTest, value);
}
