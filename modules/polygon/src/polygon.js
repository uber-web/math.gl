/* eslint-disable no-undef */
/* eslint-disable no-console */

import {isArray} from '@math.gl/core';

import {
  getPolygonSignedArea,
  getPolygonSignedAreaFlat,
  forEachSegmentInPolygon,
  forEachSegmentInPolygonFlat,
  modifyPolygonWindingDirection,
  modifyPolygonWindingDirectionFlat
} from './polygon-utils';

export default class Polygon {
  constructor(points, options = {}) {
    this.points = points;
    this.isFlatArray = !isArray(points[0]);

    if (this.isFlatArray) {
      this.start = options.start || 0;
      this.end = options.end || points.length;
      this.size = options.size || 2;
    }

    Object.freeze(this);
  }

  getSignedArea() {
    if (this.isFlatArray)
      return getPolygonSignedAreaFlat(this.points, this.start, this.end, this.size);

    return getPolygonSignedArea(this.points);
  }

  getArea() {
    return Math.abs(this.getSignedArea());
  }

  getWindingDirection() {
    return Math.sign(this.getSignedArea());
  }

  forEachSegment(visitor) {
    if (this.isFlatArray) {
      forEachSegmentInPolygonFlat(
        this.points,
        this.start,
        this.end,
        this.size,
        // eslint-disable-next-line max-params
        (x1, y1, x2, y2, i1, i2) => {
          // TODO @igorDykhta original visitor uses arrays for each point, but with flat arrays performance degrades if we allocate points for each segment
          visitor([x1, y1], [x2, y2], i1, i2);
        }
      );
    } else {
      forEachSegmentInPolygon(this.points, visitor);
    }
  }

  modifyWindingDirection(direction) {
    if (this.isFlatArray) {
      modifyPolygonWindingDirectionFlat(this.points, this.start, this.end, this.size, direction);
    } else {
      modifyPolygonWindingDirection(this.points, direction);
    }
  }
}
