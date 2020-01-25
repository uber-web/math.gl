import {Matrix3} from '@math.gl/core';

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
  result?: object
): {
  unitary: Matrix3;
  diagonal: Matrix3;
};
