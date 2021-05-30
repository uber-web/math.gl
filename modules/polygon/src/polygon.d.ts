import {SegmentVisitorPoints} from './polygon-utils';

export default class Polygon {
  constructor(points: number[], options: {start?: number, end?: number,size?: number, isClosed?: boolean});

  /**
   * Returns signed area of the polygon.
   * @returns Signed area of the polygon.
   */
  getSignedArea(): number; 

  /**
   * Returns absolute area of the polygon.
   * @returns Absolute area of the polygon.
   */
  getArea(): number;

  /**
   * Returns winding direction of the polygon.
   * @returns Winding direction of the polygon. 1 is for clockwise, -1 for counterclockwise winding direction.
   */
  getWindingDirection(): number;

  /**
   * Calls the visitor callback for each segment in the polygon.
   * @param visitor A callback to call for each segment.
   */
  forEachSegment(SegmentVisitorPoints): void;

  /**
   * Checks winding direction of the polygon and reverses the polygon in case of opposite winding direction.
   * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
   * @return Returns true if the winding direction was changed.
   */
  modifyWindingDirection(direction: number): boolean;
}
