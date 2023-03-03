// loaders.gl, MIT license

// s2-geometry is a pure JavaScript port of Google/Niantic's S2 Geometry library
// which is perfect since it works in the browser.

import Long from 'long';

// const MAXIMUM_TOKEN_LENGTH = 16;

// INDEX CALCULATIONS

/**
 * Given an S2 token (String) this function convert the token to 64 bit id (Index)
 * 'X' is the empty cell
 * https://github.com/google/s2-geometry-library-java/blob/c04b68bf3197a9c34082327eeb3aec7ab7c85da1/src/com/google/common/geometry/S2CellId.java#L439
 */
export function getS2IndexFromToken(token: string): Long {
  if (token === 'X') {
    token = '';
  }
  // pad token with zeros to make the length 16
  const paddedToken = token.padEnd(16, '0');
  return Long.fromString(paddedToken, true, 16);
}

/**
 * Convert a 64 bit number to a string token
 * 'X' is the empty cell
 */
export function getS2TokenFromIndex(cellId: Long): string {
  if (cellId.isZero()) {
    return 'X';
  }
  let numZeroDigits = cellId.countTrailingZeros();

  const remainder = numZeroDigits % 4;
  numZeroDigits = (numZeroDigits - remainder) / 4;
  const trailingZeroHexChars = numZeroDigits;
  numZeroDigits *= 4;

  const x = cellId.shiftRightUnsigned(numZeroDigits);
  const hexString = x.toString(16).replace(/0+$/, '');
  const zeroString = Array(17 - trailingZeroHexChars - hexString.length).join('0');
  return zeroString + hexString;
}

export function getS2ChildIndex(s2Index: Long, index: number): Long {
  // Shift sentinel bit 2 positions to the right.
  const newLsb = lsb(s2Index).shiftRightUnsigned(2);
  // Insert child index before the sentinel bit.
  const childCellId: Long = s2Index.add(Long.fromNumber(2 * index + 1 - 4).multiply(newLsb));
  return childCellId;
}

/**
 * Return the lowest-numbered bit that is on for this cell id
 * @private
 */
function lsb(cellId: Long): Long {
  return cellId.and(cellId.not().add(1)); // eslint-disable-line
}
