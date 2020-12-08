
type SegmentVisitor = (p1: number[], p2: number[], i1: number, i2: number) => void;

type SegmentVisitorFlat = (p1x: number, p1y: number, p2x: number, p2y: number, i1: number, i2: number) => void;

export const WINDING_CLOCKWISE: number;
export const WINDING_COUNTER_CLOCKWISE: number;

/**
 * Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction.
 * @param points Array of points.
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 */
export function ensurePolygonWindingDirection(points: number[][], direction: number): void;

/**
 * Returns winding direction of the polygon.
 * @param points Array of points.
 * @param direction Requested winding direction.
 */
export function getPolygonWindingDirection(points: number[][]): number;

/**
 * Returns signed area of the polygon.
 * @param points Array of points.
 */
export function getPolygonSignedArea(points: number[][]): number;

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points Array of points.
 * @param visitor A callback to call for each segment.
 */
export function forEachSegmentInPolygon(points: number[][], visitor: SegmentVisitor): void;

/**
 * Checks winding direction of the polygon and reverses the polygon in case if opposite winding direction.
 * @param points An array that represents poitns of the polygon.
 * @param start Start index.
 * @param end End index.
 * @param size Size of each point.
 * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
 */
export function ensurePolygonWindingDirectionFlat(points: number[], start: number, end: number, size: number, direction: number): void;

/**
 * Returns winding direction of the polygon.
 * @param points An array that represents poitns of the polygon.
 * @param start Start index.
 * @param end End index.
 * @param size Size of each point.
 */
export function getPolygonWindingDirectionFlat(points: number[], start: number, end: number, size: number): number;

/**
 * Returns signed area of the polygon.
 * @param points An array that represents poitns of the polygon.
 * @param start Start index.
 * @param end End index.
 * @param size Size of each point.
 */
export function getPolygonSignedAreaFlat(points: number[], start: number, end: number, size: number): number;

/**
 * Calls visitor callback for each segment in the polygon.
 * @param points An array that represents poitns of the polygon
 * @param start Start index.
 * @param end End index.
 * @param size Size of each point.
 * @param visitor A callback to call for each segment.
 */
export function forEachSegmentInPolygonFlat(points: number[], start: number, end: number, size: number, visitor: SegmentVisitorFlat): void;
