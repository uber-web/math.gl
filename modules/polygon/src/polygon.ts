/* eslint-disable no-undef, no-console */
import {isArray} from '@math.gl/core';
import type {SegmentVisitorPoints} from './polygon-utils';
import type {NumericArray} from '@math.gl/core';

import {
  getPolygonSignedArea,
  forEachSegmentInPolygon,
  modifyPolygonWindingDirection,
  getPolygonSignedAreaPoints,
  forEachSegmentInPolygonPoints,
  modifyPolygonWindingDirectionPoints
} from './polygon-utils';

export type PolygonOptions = {
  start?: number;
  end?: number;
  size?: number;
  isClosed?: boolean;
};

export default class Polygon {
  points: NumericArray | number[][];
  isFlatArray: boolean;
  options: PolygonOptions;

  constructor(points: NumericArray | number[][], options: PolygonOptions = {}) {
    this.points = points;
    this.isFlatArray = !isArray(points[0]);

    this.options = {
      start: options.start || 0,
      end: options.end || points.length,
      size: options.size || 2,
      isClosed: options.isClosed
    };

    Object.freeze(this);
  }

  /**
   * Returns signed area of the polygon.
   * @returns Signed area of the polygon.
   */
  getSignedArea(): number {
    if (this.isFlatArray) return getPolygonSignedArea(this.points as NumericArray, this.options);

    return getPolygonSignedAreaPoints(this.points as number[][], this.options);
  }

  /**
   * Returns absolute area of the polygon.
   * @returns Absolute area of the polygon.
   */
  getArea(): number {
    return Math.abs(this.getSignedArea());
  }

  /**
   * Returns winding direction of the polygon.
   * @returns Winding direction of the polygon. 1 is for clockwise, -1 for counterclockwise winding direction.
   */
  getWindingDirection(): number {
    return Math.sign(this.getSignedArea());
  }

  /**
   * Calls the visitor callback for each segment in the polygon.
   * @param visitor A callback to call for each segment.
   */
  forEachSegment(visitor: SegmentVisitorPoints): void {
    if (this.isFlatArray) {
      forEachSegmentInPolygon(
        this.points as NumericArray,
        // eslint-disable-next-line max-params
        (x1, y1, x2, y2, i1, i2) => {
          // TODO @igorDykhta original visitor uses arrays for each point, but with flat arrays performance degrades if we allocate points for each segment
          visitor([x1, y1], [x2, y2], i1, i2);
        },
        this.options
      );
    } else {
      forEachSegmentInPolygonPoints(this.points as number[][], visitor, this.options);
    }
  }

  /**
   * Checks winding direction of the polygon and reverses the polygon in case of opposite winding direction.
   * @param direction Requested winding direction. 1 is for clockwise, -1 for counterclockwise winding direction.
   * @return Returns true if the winding direction was changed.
   */
  modifyWindingDirection(direction: number): boolean {
    if (this.isFlatArray) {
      return modifyPolygonWindingDirection(this.points as NumericArray, direction, this.options);
    }
    return modifyPolygonWindingDirectionPoints(this.points as number[][], direction, this.options);
  }
}
