import * as vec4 from 'gl-matrix/vec4';

// Helper, avoids low-precision 32 bit matrices from gl-matrix mat4.create()
export function createMat4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}

// Transforms a vec4 with a projection matrix
export function transformVector(matrix, vector) {
  const result = vec4.transformMat4([], vector, matrix);
  vec4.scale(result, result, 1 / result[3]);
  return result;
}

export function mod(value, divisor) {
  const modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

export function lerp(start, end, step) {
  return step * end + (1 - step) * start;
}

function ieLog2(x) {
  return Math.log(x) * Math.LOG2E;
}
// Handle missing log2 in IE 11
<<<<<<< HEAD
export const log2 = Math.log2 || ieLog2;
=======
export const log2 =
  Math.log2 ||
  function(x) {
    return Math.log(x) * Math.LOG2E;
  };
>>>>>>> d14aefb23ca25f8ef9080ca8fae61cf92a66b29a
