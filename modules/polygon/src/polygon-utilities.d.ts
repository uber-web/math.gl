import {TypedArray} from "@math.gl/core/";

export const WINDING: {
    CLOCKWISE: number; 
    COUNTER_CLOCKWISE: number
};

type PointsArray = TypedArray[] | number[][];
type FlatPointsArray = TypedArray | number[];

type SegmentVisitor = (p1: FlatPointsArray, p2: FlatPointsArray, i1: number, i2: number) => void;
type SegmentVisitorFlat = (p1x: number, p1y: number, p2x: number, p2y: number, i1: number, i2: number) => void;

/**
 * Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction.
 * Note: points are modified in-place.
 * @param points Array of points.
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 */
export function modifyPolygonWindingDirection(points: PointsArray, direction: number): void;

/**
 * Returns winding direction of the polygon.
 * @param points Array of points.
 * @param direction Requested winding direction.
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirection(points: PointsArray): number;

/**
 * Returns signed area of the polygon.
 * @param points Array of points.
 * @returns Signed area of the polygon.
 */
export function getPolygonSignedArea(points: PointsArray): number;

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points Array of points.
 * @param visitor A callback to call for each segment.
 */
export function forEachSegmentInPolygon(points: PointsArray, visitor: SegmentVisitor): void;

/**
 * Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction.
 * Note: points are modified in-place.
 * @param points An array that represents points of the polygon.
 * @param start Start index of the polygon in the points array.
 * @param end End index of the polygon in the points array.
 * @param size Size of a point, 2 (XZ) or 3 (XYZ).
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 */
export function modifyPolygonWindingDirectionFlat(points: FlatPointsArray, start: number, end: number, size: number, direction: number): void;

/**
 * Returns winding direction of the polygon.
 * @param points An array that represents points of the polygon.
 * @param start Start index of the polygon in the points array.
 * @param end End index of the polygon in the points array.
 * @param size Size of a point, 2 (XZ) or 3 (XYZ).
 * @returns Winding direction of the polygon.
 */
export function getPolygonWindingDirectionFlat(points: FlatPointsArray, start: number, end: number, size: number): number;

/**
 * Returns signed area of the polygon.
 * @param points An array that represents points of the polygon.
 * @param start Start index of the polygon in the points array.
 * @param end End index of the polygon in the points array.
 * @param size Size of a point, 2 (XZ) or 3 (XYZ).
 * @returns Signed area of the polygon.
 */
export function getPolygonSignedAreaFlat(points: FlatPointsArray, start: number, end: number, size: number): number;

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points An array that represents points of the polygon
 * @param start Start index of the polygon in the points array.
 * @param end End index of the polygon in the points array.
 * @param size Size of a point, 2 (XZ) or 3 (XYZ).
 * @param visitor A callback to call for each segment.
 */
export function forEachSegmentInPolygonFlat(points: FlatPointsArray, start: number, end: number, size: number, visitor: SegmentVisitorFlat): void;


