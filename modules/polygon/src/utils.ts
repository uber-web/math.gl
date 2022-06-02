import type {NumericArray} from '@math.gl/core';

export function push(target: number[], source: number[]): boolean {
  const size = source.length;
  const startIndex = target.length;

  // dedupe, if source is the same point as the last vertex
  if (startIndex > 0) {
    let isDuplicate = true;
    for (let i = 0; i < size; i++) {
      if (target[startIndex - size + i] !== source[i]) {
        isDuplicate = false;
        break;
      }
    }
    if (isDuplicate) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    target[startIndex + i] = source[i];
  }
  return true;
}

export function copy(target: number[], source: Readonly<NumericArray>): void {
  const size = source.length;
  for (let i = 0; i < size; i++) {
    target[i] = source[i];
  }
}

export function getPointAtIndex(
  positions: Readonly<NumericArray>,
  index: number,
  size: number,
  offset: number,
  out: number[] = []
): number[] {
  const startI = offset + index * size;
  for (let i = 0; i < size; i++) {
    out[i] = positions[startI + i];
  }
  return out;
}
