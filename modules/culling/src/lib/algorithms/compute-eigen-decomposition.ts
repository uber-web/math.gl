// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Matrix3, _MathUtils} from '@math.gl/core';

const scratchMatrix = new Matrix3();
const scratchUnitary = new Matrix3();
const scratchDiagonal = new Matrix3();

const jMatrix = new Matrix3();
const jMatrixTranspose = new Matrix3();

export type EigenDecomposition = {
  unitary: Matrix3;
  diagonal: Matrix3;
};

/**
 * Computes the eigenvectors and eigenvalues of a symmetric matrix.
 *
 * - Returns a diagonal matrix and unitary matrix such that:
 * `matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)`
 * - The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
 * of the unitary matrix are the corresponding eigenvectors.
 * - This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
 * section 8.4.3 The Classical Jacobi Algorithm
 *
 * @param matrix The 3x3 matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
 * @param result Optional object with unitary and diagonal properties which are matrices onto which to store the result.
 * @returns An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
 *
 * @example
 * const a = //... symmetric matrix
 * const result = {
 *   unitary : new Matrix3(),
 *   diagonal : new Matrix3()
 * };
 * computeEigenDecomposition(a, result);
 *
 * const unitaryTranspose = Matrix3.transpose(result.unitary, new Matrix3());
 * const b = Matrix3.multiply(result.unitary, result.diagonal, new Matrix3());
 * Matrix3.multiply(b, unitaryTranspose, b); // b is now equal to a
 *
 * const lambda = result.diagonal.getColumn(0, new Vector3()).x;  // first eigenvalue
 * const v = result.unitary.getColumn(0, new Vector3());          // first eigenvector
 * const c = v.multiplyByScalar(lambda);                          // equal to v.transformByMatrix3(a)
 */
export default function computeEigenDecomposition(
  matrix: number[],
  // @ts-expect-error accept empty object type
  result: EigenDecomposition = {}
): EigenDecomposition {
  const EIGEN_TOLERANCE = _MathUtils.EPSILON20;
  const EIGEN_MAX_SWEEPS = 10;

  let count = 0;
  let sweep = 0;

  const unitaryMatrix = scratchUnitary;
  const diagonalMatrix = scratchDiagonal;

  unitaryMatrix.identity();
  diagonalMatrix.copy(matrix);

  const epsilon = EIGEN_TOLERANCE * computeFrobeniusNorm(diagonalMatrix);

  while (sweep < EIGEN_MAX_SWEEPS && offDiagonalFrobeniusNorm(diagonalMatrix) > epsilon) {
    shurDecomposition(diagonalMatrix, jMatrix);

    jMatrixTranspose.copy(jMatrix).transpose();

    diagonalMatrix.multiplyRight(jMatrix);
    diagonalMatrix.multiplyLeft(jMatrixTranspose);
    unitaryMatrix.multiplyRight(jMatrix);

    if (++count > 2) {
      ++sweep;
      count = 0;
    }
  }

  result.unitary = unitaryMatrix.toTarget(result.unitary);
  result.diagonal = diagonalMatrix.toTarget(result.diagonal);

  return result;
}

function computeFrobeniusNorm(matrix: Matrix3): number {
  let norm = 0.0;
  for (let i = 0; i < 9; ++i) {
    const temp = matrix[i];
    norm += temp * temp;
  }
  return Math.sqrt(norm);
}

const rowVal = [1, 0, 0];
const colVal = [2, 2, 1];

// Computes the "off-diagonal" Frobenius norm.
// Assumes matrix is symmetric.
function offDiagonalFrobeniusNorm(matrix: Matrix3): number {
  let norm = 0.0;
  for (let i = 0; i < 3; ++i) {
    const temp = matrix[scratchMatrix.getElementIndex(colVal[i], rowVal[i])];
    norm += 2.0 * temp * temp;
  }
  return Math.sqrt(norm);
}

// The routine takes a matrix, which is assumed to be symmetric, and
// finds the largest off-diagonal term, and then creates
// a matrix (result) which can be used to help reduce it
//
// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.2 The 2by2 Symmetric Schur Decomposition.
//
// eslint-disable-next-line max-statements
function shurDecomposition(matrix: Matrix3, result: Matrix3): Matrix3 {
  const tolerance = _MathUtils.EPSILON15;

  let maxDiagonal = 0.0;
  let rotAxis = 1;

  // find pivot (rotAxis) based on max diagonal of matrix
  for (let i = 0; i < 3; ++i) {
    const temp = Math.abs(matrix[scratchMatrix.getElementIndex(colVal[i], rowVal[i])]);
    if (temp > maxDiagonal) {
      rotAxis = i;
      maxDiagonal = temp;
    }
  }

  const p = rowVal[rotAxis];
  const q = colVal[rotAxis];

  let c = 1.0;
  let s = 0.0;

  if (Math.abs(matrix[scratchMatrix.getElementIndex(q, p)]) > tolerance) {
    const qq = matrix[scratchMatrix.getElementIndex(q, q)];
    const pp = matrix[scratchMatrix.getElementIndex(p, p)];
    const qp = matrix[scratchMatrix.getElementIndex(q, p)];

    const tau = (qq - pp) / 2.0 / qp;
    let t;

    if (tau < 0.0) {
      t = -1.0 / (-tau + Math.sqrt(1.0 + tau * tau));
    } else {
      t = 1.0 / (tau + Math.sqrt(1.0 + tau * tau));
    }

    c = 1.0 / Math.sqrt(1.0 + t * t);
    s = t * c;
  }

  // Copy into result
  Matrix3.IDENTITY.to(result);
  result[scratchMatrix.getElementIndex(p, p)] = result[scratchMatrix.getElementIndex(q, q)] = c;
  result[scratchMatrix.getElementIndex(q, p)] = s;
  result[scratchMatrix.getElementIndex(p, q)] = -s;

  return result;
}
