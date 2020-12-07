
type SegmentVisitor = (p1: number[], p2: number[], i1: number, i2: number) => void;

export const WINDING_CLOCKWISE: number;
export const WINDING_COUNTER_CLOCKWISE: number;

/**
 * Checks winding order of the polygon defined by points and reverses the polygon in case if opposite winding order.
 * @param points Array of points.
 * @param direction Requested winding direction.
 */
export function ensurePolygonWindingDirection(points: number[][], direction: number): void;

/**
 * Checks winding order of the polygon defined by points and reverses the polygon in case if opposite winding order.
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

export function ensurePolygonWindingDirectionFlat(points: number[], start: number, end: number, size: number, direction: number): void;

export function getPolygonWindingDirectionFlat(points: number[], start: number, end: number, size: number): number;

export function getPolygonSignedAreaFlat(points: number[], start: number, end: number, size: number): number;

/**
 * 
 * @param points Flat array of points.
 * @param start Start index.
 * @param end End index.
 * @param size Size of each point.
 * @param visitor A callback to call for each segment.
 */
export function forEachSegmentInPolygonFlat(points: number[], start: number, end: number, size: number, visitor: SegmentVisitor): void;
