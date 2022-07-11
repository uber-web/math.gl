/* eslint-disable max-statements, max-depth, complexity, no-unused-expressions */

import {equals} from '@math.gl/core';
import type {NumericArray} from '@math.gl/core';

export const WINDING = {
  CLOCKWISE: 1,
  COUNTER_CLOCKWISE: -1
} as const;

/** Polygon representation where each point is represented as a separate array of positions. */
type PointsArray = NumericArray[];

/** Segment visitor callback type for polygons defined with flat arrays, */
type SegmentVisitorFlat = (
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number,
  i1: number,
  i2: number
) => void;

/** Segment visitor callback type for polygons defined with array of points. */
export type SegmentVisitorPoints = (
  p1: NumericArray,
  p2: NumericArray,
  i1: number,
  i2: number
) => void;

/** Parameters of a polygon. */
type PolygonParams = {
  start?: number; // Start index of the polygon in the array of positions. Defaults to 0.
  end?: number; // End index of the polygon in the array of positions. Defaults to number of positions.
  size?: number; // Size of a point, 2 (XZ) or 3 (XYZ). Defaults to 2. Affects only polygons stored in flat arrays.
  isClosed?: boolean; // Indicates that the first point of the polygon is equal to the last point, and additional checks should be ommited.
};

/**
 * Checks winding direction of the polygon and reverses the polygon in case of opposite winding direction.
 * Note: points are modified in-place.
 * @param points An array that represents points of the polygon.
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 * @param options Parameters of the polygon.
 * @return Returns true if the winding direction was changed.
 */
export function modifyPolygonWindingDirection(
  points: NumericArray,
  direction: number,
  options: PolygonParams = {}
): boolean {
  const windingDirection = getPolygonWindingDirection(points, options);
  if (windingDirection !== direction) {
    reversePolygon(points, options);
    return true;
  }
  return false;
}

/**
 * Returns winding direction of the polygon.
 * @param points An array that represents points of the polygon.
 * @param options Parameters of the polygon.
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirection(
  points: NumericArray,
  options: PolygonParams = {}
): number {
  return Math.sign(getPolygonSignedArea(points, options));
}

/**
 * Returns signed area of the polygon.
 * @param points An array that represents points of the polygon.
 * @param options Parameters of the polygon.
 * @returns Signed area of the polygon.
 * https://en.wikipedia.org/wiki/Shoelace_formula
 */
export function getPolygonSignedArea(points: NumericArray, options: PolygonParams = {}): number {
  const {start = 0, end = points.length} = options;
  const dim = options.size || 2;
  let area = 0;
  for (let i = start, j = end - dim; i < end; i += dim) {
    area += (points[i] - points[j]) * (points[i + 1] + points[j + 1]);
    j = i;
  }
  return area / 2;
}

/**
 * Calls the visitor callback for each segment in the polygon.
 * @param points An array that represents points of the polygon
 * @param visitor A callback to call for each segment.
 * @param options Parameters of the polygon.
 */
export function forEachSegmentInPolygon(
  points: NumericArray,
  visitor: SegmentVisitorFlat,
  options: PolygonParams = {}
): void {
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

function reversePolygon(
  points: NumericArray,
  options: {start?: number; end?: number; size?: number}
): void {
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

/**
 * Checks winding direction of the polygon and reverses the polygon in case of opposite winding direction.
 * Note: points are modified in-place.
 * @param points Array of points that represent the polygon.
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 * @param options Parameters of the polygon.
 * @return Returns true if the winding direction was changed.
 */
export function modifyPolygonWindingDirectionPoints(
  points: PointsArray,
  direction: number,
  options: PolygonParams = {}
): boolean {
  const currentDirection = getPolygonWindingDirectionPoints(points, options);
  if (currentDirection !== direction) {
    points.reverse();
    return true;
  }
  return false;
}

/**
 * Returns winding direction of the polygon.
 * @param points Array of points that represent the polygon.
 * @param options Parameters of the polygon.
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirectionPoints(
  points: PointsArray,
  options: PolygonParams = {}
): number {
  return Math.sign(getPolygonSignedAreaPoints(points, options));
}

/**
 * Returns signed area of the polygon.
 * @param points Array of points that represent the polygon.
 * @param options Parameters of the polygon.
 * @returns Signed area of the polygon.
 */
export function getPolygonSignedAreaPoints(
  points: PointsArray,
  options: PolygonParams = {}
): number {
  // https://en.wikipedia.org/wiki/Shoelace_formula
  const {start = 0, end = points.length} = options;
  let area = 0;
  for (let i = start, j = end - 1; i < end; ++i) {
    area += (points[i][0] - points[j][0]) * (points[i][1] + points[j][1]);
    j = i;
  }
  return area / 2;
}

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points Array of points that represent the polygon.
 * @param visitor A callback to call for each segment.
 * @param options Parameters of the polygon.
 */
export function forEachSegmentInPolygonPoints(
  points: PointsArray,
  visitor: SegmentVisitorPoints,
  options: PolygonParams = {}
): void {
  const {start = 0, end = points.length, isClosed} = options;
  for (let i = start; i < end - 1; ++i) {
    visitor(points[i], points[i + 1], i, i + 1);
  }

  const isClosedEx = isClosed || equals(points[end - 1], points[0]);
  if (!isClosedEx) {
    visitor(points[end - 1], points[0], end - 1, 0);
  }
}
