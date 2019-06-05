// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Matrix3, _MathUtils} from 'math.gl';

const scratchUnitary = new Matrix3();
const scratchDiagonal = new Matrix3();

const jMatrix = new Matrix3();
const jMatrixTranspose = new Matrix3();

/**
 * Computes the eigenvectors and eigenvalues of a symmetric matrix.
 * <p>
 * Returns a diagonal matrix and unitary matrix such that:
 * <code>matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)</code>
 * </p>
 * <p>
 * The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
 * of the unitary matrix are the corresponding eigenvectors.
 * </p>
 *
 * @param {Matrix3} matrix The matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
 * @param {Object} [result] An object with unitary and diagonal properties which are matrices onto which to store the result.
 * @returns {Object} An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
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

// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.3 The Classical Jacobi Algorithm
export default function computeEigenDecomposition(matrix, result = {}) {
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

function computeFrobeniusNorm(matrix) {
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
function offDiagonalFrobeniusNorm(matrix) {
  let norm = 0.0;
  for (let i = 0; i < 3; ++i) {
    const temp = matrix[scratchDiagonal.getElementIndex(colVal[i], rowVal[i])];
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
function shurDecomposition(matrix, result) {
  const tolerance = _MathUtils.EPSILON15;

  let maxDiagonal = 0.0;
  let rotAxis = 1;

  // find pivot (rotAxis) based on max diagonal of matrix
  for (let i = 0; i < 3; ++i) {
    const temp = Math.abs(matrix[Matrix3.getElementIndex(colVal[i], rowVal[i])]);
    if (temp > maxDiagonal) {
      rotAxis = i;
      maxDiagonal = temp;
    }
  }

  const p = rowVal[rotAxis];
  const q = colVal[rotAxis];

  let c = 1.0;
  let s = 0.0;

  if (Math.abs(matrix[Matrix3.getElementIndex(q, p)]) > tolerance) {
    const qq = matrix[Matrix3.getElementIndex(q, q)];
    const pp = matrix[Matrix3.getElementIndex(p, p)];
    const qp = matrix[Matrix3.getElementIndex(q, p)];

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
  result = Matrix3.copy(Matrix3.IDENTITY, result);
  result[Matrix3.getElementIndex(p, p)] = result[Matrix3.getElementIndex(q, q)] = c;
  result[Matrix3.getElementIndex(q, p)] = s;
  result[Matrix3.getElementIndex(p, q)] = -s;

  return result;
}
