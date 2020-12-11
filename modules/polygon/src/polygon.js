/* eslint-disable no-undef */
/* eslint-disable no-console */

import {isArray} from '@math.gl/core';

import {
  getPolygonSignedArea,
  forEachSegmentInPolygon,
  modifyPolygonWindingDirection,
  getPolygonSignedAreaPoints,
  forEachSegmentInPolygonPoints,
  modifyPolygonWindingDirectionPoints
} from './polygon-utils';

export default class Polygon {
  constructor(points, options = {}) {
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

  getSignedArea() {
    if (this.isFlatArray) return getPolygonSignedArea(this.points, this.options);

    return getPolygonSignedAreaPoints(this.points, this.options);
  }

  getArea() {
    return Math.abs(this.getSignedArea());
  }

  getWindingDirection() {
    return Math.sign(this.getSignedArea());
  }

  forEachSegment(visitor) {
    if (this.isFlatArray) {
      forEachSegmentInPolygon(
        this.points,
        // eslint-disable-next-line max-params
        (x1, y1, x2, y2, i1, i2) => {
          // TODO @igorDykhta original visitor uses arrays for each point, but with flat arrays performance degrades if we allocate points for each segment
          visitor([x1, y1], [x2, y2], i1, i2);
        },
        this.options
      );
    } else {
      forEachSegmentInPolygonPoints(this.points, visitor, this.options);
    }
  }

  modifyWindingDirection(direction) {
    if (this.isFlatArray) {
      return modifyPolygonWindingDirection(this.points, direction, this.options);
    }
    return modifyPolygonWindingDirectionPoints(this.points, direction, this.options);
  }
}
