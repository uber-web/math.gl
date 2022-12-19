// math.gl, MIT license

/**
 * Convert all numbers in a deep structure to a given precision, allowing
 * reliable float comparisons.
 * @note Converts data in-place, i.e. can modify its argument
 * @param input      Input data
 * @param precision= Desired precision
 * @return Input data, with all numbers converted
 */
export function toLowPrecision<T>(input: T, precision: number = 7): T {
  let value: any;
  /* eslint-disable guard-for-in */
  if (typeof input === 'number') {
    value =
      Math.abs(input) > 1 ? Number(input.toPrecision(precision)) : Number(input.toFixed(precision));
  } else if (Array.isArray(input)) {
    value = input.map((item) => toLowPrecision(item, precision));
  } else if (ArrayBuffer.isView(input)) {
    // @ts-expect-error DataView (sigh...)
    value = Array.from(input).map((item) => toLowPrecision(item, precision));
  } else if (typeof input === 'object') {
    for (const key in input) {
      input[key] = toLowPrecision(input[key], precision);
    }
    return input;
  }
  return value as T;
}
