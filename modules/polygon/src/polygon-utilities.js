/* eslint-disable max-statements, max-depth, complexity, no-unused-expressions */

import {equals} from '@math.gl/core';

/** @type {typeof import('./polygon-utilities').WINDING} */
export const WINDING = {
  CLOCKWISE: 1,
  COUNTER_CLOCKWISE: -1
};

/** @type {typeof import('./polygon-utilities').modifyPolygonWindingDirection} */
export function modifyPolygonWindingDirection(points, direction) {
  const currentDirection = getPolygonWindingDirection(points);
  if (currentDirection !== direction) {
    points.reverse();
  }
}

/** @type {typeof import('./polygon-utilities').getPolygonWindingDirection} */
export function getPolygonWindingDirection(points) {
  return Math.sign(getPolygonSignedArea(points));
}

/** @type {typeof import('./polygon-utilities').getPolygonSignedArea} */
export function getPolygonSignedArea(points) {
  // https://en.wikipedia.org/wiki/Shoelace_formula
  let area = 0;
  forEachSegmentInPolygon(points, (p1, p2) => {
    area += areaCalcCallback(p1[0], p1[1], p2[0], p2[1]);
  });
  return area / 2;
}

/** @type {typeof import('./polygon-utilities').forEachSegmentInPolygon} */
export function forEachSegmentInPolygon(points, visitor) {
  const numPoints = points.length;
  for (let i = 0; i < numPoints - 1; ++i) {
    visitor(points[i], points[i + 1], i, i + 1);
  }

  const isClosed = equals(points[points.length - 1], points[0]);
  if (!isClosed) {
    visitor(points[numPoints - 1], points[0], numPoints - 1, 0);
  }
}

/** @type {typeof import('./polygon-utilities').modifyPolygonWindingDirectionFlat} */
export function modifyPolygonWindingDirectionFlat(points, start, end, size, direction) {
  const windingDirection = getPolygonWindingDirectionFlat(points, start, end, size);
  if (windingDirection !== direction) {
    reversePolygonFlat(points, start, end, size);
  }
}

/** @type {typeof import('./polygon-utilities').getPolygonWindingDirectionFlat} */
export function getPolygonWindingDirectionFlat(points, start, end, size) {
  return Math.sign(getPolygonSignedAreaFlat(points, start, end, size));
}

/** @type {typeof import('./polygon-utilities').getPolygonSignedAreaFlat} */
export function getPolygonSignedAreaFlat(points, start, end, size) {
  // https://en.wikipedia.org/wiki/Shoelace_formula
  let area = 0;
  forEachSegmentInPolygonFlat(points, start, end, size, (p1x, p1y, p2x, p2y) => {
    area += areaCalcCallback(p1x, p1y, p2x, p2y);
  });
  return area / 2;
}

/** @type {typeof import('./polygon-utilities').forEachSegmentInPolygonFlat} */
export function forEachSegmentInPolygonFlat(points, start, end, size, visitor) {
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
  const isClosed =
    equals(points[start], points[endPointIndex]) &&
    equals(points[start + 1], points[endPointIndex + 1]);

  if (!isClosed) {
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

function reversePolygonFlat(points, start, end, size) {
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

function areaCalcCallback(p1x, p1y, p2x, p2y) {
  // the "cancelling" cross-products: (p1.x + p2.x) * (p1.y - p2.y)
  return (p1x + p2x) * (p1y - p2y);
}
