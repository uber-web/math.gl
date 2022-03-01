import {transformMat4, scale} from 'gl-matrix/vec4';

// Helper, avoids low-precision 32 bit matrices from gl-matrix mat4.create()
export function createMat4(): number[] {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

// Transforms a vec4 with a projection matrix
export function transformVector(matrix: number[], vector: number[]): number[] {
  const result = transformMat4([] as number[], vector, matrix);
  scale(result, result, 1 / result[3]);
  return result;
}

export function mod(value: number, divisor: number): number {
  const modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

export function lerp(start: number, end: number, step: number): number {
  return step * end + (1 - step) * start;
}

export function clamp(x: number, min: number, max: number): number {
  return x < min ? min : x > max ? max : x;
}

function ieLog2(x: number): number {
  return Math.log(x) * Math.LOG2E;
}
// Handle missing log2 in IE 11
export const log2 = Math.log2 || ieLog2;
