// BigInt compatibility layer
// Inspired by ArrowJS (under Apache2 license)
// https://github.com/apache/arrow/blob/master/js/src/util/compat.ts
// Requires tsconfig.json: target=esnext or (lib: esnext.bigint)
// Requires eslint: env: {es2020: true}

const ERR_BIGINT_UNAVAILABLE = 'BigInt is not available in this environment';

function BigIntUnavailable() {
  throw new Error(ERR_BIGINT_UNAVAILABLE);
}
BigIntUnavailable.asIntN = () => {
  throw new Error(ERR_BIGINT_UNAVAILABLE);
};
BigIntUnavailable.asUintN = () => {
  throw new Error(ERR_BIGINT_UNAVAILABLE);
};

class BigInt64ArrayUnavailable {
  static get BYTES_PER_ELEMENT() {
    return 8;
  }
  static of() {
    throw new Error(ERR_BIGINT_UNAVAILABLE);
  }
  static from() {
    throw new Error(ERR_BIGINT_UNAVAILABLE);
  }
  constructor() {
    throw new Error(ERR_BIGINT_UNAVAILABLE);
  }
}

export const BigIntAvailable = typeof BigInt !== 'undefined';
export const BigInt64ArrayAvailable = typeof BigInt64Array !== 'undefined';
export const BigUint64ArrayAvailable = typeof BigUint64Array !== 'undefined';

const BigIntCtor = (() => {
  return BigIntAvailable ? BigInt : BigIntUnavailable;
})();

const BigInt64ArrayCtor = (() => {
  return BigInt64ArrayAvailable ? BigInt64Array : BigInt64ArrayUnavailable;
})();

const BigUint64ArrayCtor = (() => {
  return BigUint64ArrayAvailable ? [BigUint64Array] : [BigInt64ArrayUnavailable];
})();

export {BigIntCtor as BigInt};
export {BigInt64ArrayCtor as BigInt64Array};
export {BigUint64ArrayCtor as BigUint64Array};
