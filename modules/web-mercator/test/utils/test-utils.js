/**
 * Covert all numbers in a deep structure to a given precision, allowing
 * reliable float comparisons. Converts data in-place.
 * @param  {any} input      Input data
 * @param  {Number} [precision] Desired precision
 * @return {any}            Input data, with all numbers converted
 */
export function toLowPrecision(input, precision = 7) {
  /* eslint-disable guard-for-in */
  if (typeof input === 'number') {
    input =
      Math.abs(input) > 1 ? Number(input.toPrecision(precision)) : Number(input.toFixed(precision));
  } else if (Array.isArray(input)) {
    input = input.map(item => toLowPrecision(item, precision));
  } else if (ArrayBuffer.isView(input)) {
    // @ts-ignore
    input = Array.from(input).map(item => toLowPrecision(item, precision));
  } else if (typeof input === 'object') {
    for (const key in input) {
      input[key] = toLowPrecision(input[key], precision);
    }
  }
  return input;
}
