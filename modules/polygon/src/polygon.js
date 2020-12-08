/* eslint-disable no-undef */
/* eslint-disable no-console */
import {
  getPolygonSignedArea,
  getPolygonSignedAreaFlat,
  forEachSegmentInPolygon,
  forEachSegmentInPolygonFlat,
  ensurePolygonWindingDirection,
  ensurePolygonWindingDirectionFlat
} from './polygon-utilities';

export default class Polygon {
  constructor(points, options = {}) {
    this.points = points;
    this.isFlatArray = !Array.isArray(points[0]);

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

  ensureWindingDirection(direction) {
    if (this.isFlatArray) {
      ensurePolygonWindingDirectionFlat(this.points, this.start, this.end, this.size, direction);
    } else {
      ensurePolygonWindingDirection(this.points, direction);
    }
  }
}
