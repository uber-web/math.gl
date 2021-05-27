import {NumberArray} from '@math.gl/core/';

export const WINDING: {
  CLOCKWISE: number;
  COUNTER_CLOCKWISE: number;
};

// Polygon representation where each point is represented as a separate array of positions.
type PointsArray = NumberArray[];

// Segment visitor callback type for polygons defined with flat arrays,
type SegmentVisitorFlat = (
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number,
  i1: number,
  i2: number
) => void;

// Segment visitor callback type for polygons defined with array of points.
export type SegmentVisitorPoints = (p1: NumberArray, p2: NumberArray, i1: number, i2: number) => void;

// Parameters of a polygon.
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
  points: NumberArray,
  direction: number,
  options?: PolygonParams
): boolean;

/**
 * Returns winding direction of the polygon.
 * @param points An array that represents points of the polygon.
 * @param options Parameters of the polygon.
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirection(points: NumberArray, options?: PolygonParams): number;

/**
 * Returns signed area of the polygon.
 * @param points An array that represents points of the polygon.
 * @param options Parameters of the polygon.
 * @returns Signed area of the polygon.
 */
export function getPolygonSignedArea(points: NumberArray, options?: PolygonParams): number;

/**
 * Calls the visitor callback for each segment in the polygon.
 * @param points An array that represents points of the polygon
 * @param visitor A callback to call for each segment.
 * @param options Parameters of the polygon.
 */
export function forEachSegmentInPolygon(
  points: NumberArray,
  visitor: SegmentVisitorFlat,
  options?: PolygonParams
): void;

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
  options?: PolygonParams
): boolean;

/**
 * Returns winding direction of the polygon.
 * @param points Array of points that represent the polygon.
 * @param options Parameters of the polygon.
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirectionPoints(
  points: PointsArray,
  options?: PolygonParams
): number;

/**
 * Returns signed area of the polygon.
 * @param points Array of points that represent the polygon.
 * @param options Parameters of the polygon.
 * @returns Signed area of the polygon.
 */
export function getPolygonSignedAreaPoints(points: PointsArray, options?: PolygonParams): number;

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points Array of points that represent the polygon.
 * @param visitor A callback to call for each segment.
 * @param options Parameters of the polygon.
 */
export function forEachSegmentInPolygonPoints(
  points: PointsArray,
  visitor: SegmentVisitorPoints,
  options?: PolygonParams
): void;
