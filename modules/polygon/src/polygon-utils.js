/* eslint-disable max-statements, max-depth, complexity, no-unused-expressions */

import {equals} from '@math.gl/core';

/** @type {typeof import('./polygon-utils').WINDING} */
export const WINDING = {
  CLOCKWISE: 1,
  COUNTER_CLOCKWISE: -1
};

/** @type {typeof import('./polygon-utils').modifyPolygonWindingDirection} */
export function modifyPolygonWindingDirection(points, direction, options = {}) {
  const windingDirection = getPolygonWindingDirection(points, options);
  if (windingDirection !== direction) {
    reversePolygon(points, options);
    return true;
  }
  return false;
}

/** @type {typeof import('./polygon-utils').getPolygonWindingDirection} */
export function getPolygonWindingDirection(points, options = {}) {
  return Math.sign(getPolygonSignedArea(points, options));
}

/** @type {typeof import('./polygon-utils').getPolygonSignedArea} */
export function getPolygonSignedArea(points, options = {}) {
  // https://en.wikipedia.org/wiki/Shoelace_formula
  const {start = 0, end = points.length} = options;
  const dim = options.size || 2;
  let area = 0;
  for (let i = start, j = end - dim; i < end; i += dim) {
    area += (points[i] - points[j]) * (points[i + 1] + points[j + 1]);
    j = i;
  }
  return area / 2;
}

/** @type {typeof import('./polygon-utils').forEachSegmentInPolygon} */
export function forEachSegmentInPolygon(points, visitor, options = {}) {
  const {start = 0, end = points.length, size = 2, isClosed} = options;

  const numPoints = (end - start) / size;
  for (let i = 0; i < numPoints - 1; ++i) {
    visitor(
      points[start + i * size],
      points[start + i * size + 1],
      points[start + (i + 1) * size],
      points[start + (i + 1) * size + 1],
      i,
      i + 1
    );
  }

  const endPointIndex = start + (numPoints - 1) * size;
  const isClosedEx =
    isClosed ||
    (equals(points[start], points[endPointIndex]) &&
      equals(points[start + 1], points[endPointIndex + 1]));

  if (!isClosedEx) {
    visitor(
      points[endPointIndex],
      points[endPointIndex + 1],
      points[start],
      points[start + 1],
      numPoints - 1,
      0
    );
  }
}

function reversePolygon(points, options) {
  const {start = 0, end = points.length, size = 2} = options;

  const numPoints = (end - start) / size;
  const numSwaps = Math.floor(numPoints / 2);
  for (let i = 0; i < numSwaps; ++i) {
    const b1 = start + i * size;
    const b2 = start + (numPoints - 1 - i) * size;
    for (let j = 0; j < size; ++j) {
      const tmp = points[b1 + j];
      points[b1 + j] = points[b2 + j];
      points[b2 + j] = tmp;
    }
  }
}

/** @type {typeof import('./polygon-utils').modifyPolygonWindingDirectionPoints} */
export function modifyPolygonWindingDirectionPoints(points, direction, options = {}) {
  const currentDirection = getPolygonWindingDirectionPoints(points, options);
  if (currentDirection !== direction) {
    points.reverse();
    return true;
  }
  return false;
}

/** @type {typeof import('./polygon-utils').getPolygonWindingDirectionPoints} */
export function getPolygonWindingDirectionPoints(points, options = {}) {
  return Math.sign(getPolygonSignedAreaPoints(points, options));
}

/** @type {typeof import('./polygon-utils').getPolygonSignedAreaPoints} */
export function getPolygonSignedAreaPoints(points, options = {}) {
  // https://en.wikipedia.org/wiki/Shoelace_formula
  const {start = 0, end = points.length} = options;
  let area = 0;
  for (let i = start, j = end - 1; i < end; ++i) {
    area += (points[i][0] - points[j][0]) * (points[i][1] + points[j][1]);
    j = i;
  }
  return area / 2;
}

/** @type {typeof import('./polygon-utils').forEachSegmentInPolygonPoints} */
export function forEachSegmentInPolygonPoints(points, visitor, options = {}) {
  const {start = 0, end = points.length, isClosed} = options;
  for (let i = start; i < end - 1; ++i) {
    visitor(points[i], points[i + 1], i, i + 1);
  }

  const isClosedEx = isClosed || equals(points[end - 1], points[0]);
  if (!isClosedEx) {
    visitor(points[end - 1], points[0], end - 1, 0);
  }
}
