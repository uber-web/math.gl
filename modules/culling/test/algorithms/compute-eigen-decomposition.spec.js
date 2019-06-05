import test from 'tape-catch';
import {tapeEqualsEpsilon} from 'test/utils/tape-assertions';

import {Vector3, Matrix3, _MathUtils} from 'math.gl';
import computeEigenDecomposition from '@math.gl/culling/algorithms/compute-eigen-decomposition';

test('computeEigenDecomposition#throws without a matrix', t => {
  t.throws(() => computeEigenDecomposition());
  t.end();
});

test('computeEigenDecomposition#computes eigenvalues and eigenvectors', t => {
  // prettier-ignore
  const a = new Matrix3(
    4.0, -1.0, 1.0,
    -1.0, 3.0, -2.0,
    1.0, -2.0, 3.0);

  // prettier-ignore
  const expectedDiagonal = new Matrix3(
    3.0, 0.0, 0.0,
    0.0, 6.0, 0.0,
    0.0, 0.0, 1.0);

  const {diagonal, unitary} = computeEigenDecomposition(a);

  tapeEqualsEpsilon(t, diagonal, expectedDiagonal, _MathUtils.EPSILON14);

  let v = unitary.getColumn(0, new Vector3());
  let lambda = diagonal.getColumn(0, new Vector3()).x;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  v = unitary.getColumn(1, new Vector3());
  lambda = diagonal.getColumn(1, new Vector3()).y;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  v = unitary.getColumn(2, new Vector3());
  lambda = diagonal.getColumn(2, new Vector3()).z;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  t.end();
});

test('computeEigenDecomposition#computes eigenvalues and eigenvectors with result parameters', t => {
  // prettier-ignore
  const a = new Matrix3(
    4.0, -1.0, 1.0,
    -1.0, 3.0, -2.0,
    1.0, -2.0, 3.0);

  // prettier-ignore
  const expectedDiagonal = new Matrix3(
    3.0, 0.0, 0.0,
    0.0, 6.0, 0.0,
    0.0, 0.0, 1.0);

  const result = {
    unitary: new Matrix3(),
    diagonal: new Matrix3()
  };

  const decomposition = computeEigenDecomposition(a, result);

  const {diagonal, unitary} = decomposition;

  t.equals(decomposition, result);

  tapeEqualsEpsilon(t, diagonal, expectedDiagonal, _MathUtils.EPSILON14);

  let v = unitary.getColumn(0, new Vector3());
  let lambda = diagonal.getColumn(0, new Vector3()).x;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  v = unitary.getColumn(1, new Vector3());
  lambda = diagonal.getColumn(1, new Vector3()).y;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  v = unitary.getColumn(2, new Vector3());
  lambda = diagonal.getColumn(2, new Vector3()).z;
  tapeEqualsEpsilon(t, v.clone().scale(lambda), v.transformByMatrix3(a), _MathUtils.EPSILON14);

  t.end();
});
