const DEFAULT_COMPARE_POINTS = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
}

const DEFAULT_DISTANCE = (p1, p2) => p1.distance(p2); // TODO - assumes Vector2

export default class Polygon {
  constructor(points, {
    isPolygon = true,
    comparePoints = DEFAULT_COMPARE_POINTS
  } = {}) {
    this.points = points;
    this.comparePoints = comparePoints;
    this.isPolygon = isPolygon || this.isClosed();
  }

  isClosed() {
    const length = this.points.length;
    return this.comparePoints(this.points[length - 1], this.points[0]);
  }

  getPathLength(distance = DEFAULT_DISTANCE) {
    let pathLength = 0;
    this.forEachSegment((p1, p2) => {
      pathLength += distance(this, p1, p2);
    });
    return pathLength;
  }

  // https://en.wikipedia.org/wiki/Shoelace_formula
  getSignedArea() {
    let area = 0;
    this.forEachSegment((p1, p2) => {
      // the "cancelling" cross-products: (p1.x + p2.x) * (p1.y - p2.y)
      area += (p1[0] + p2[0]) * (p1[1] - p2[1]);
    });
    return area / 2;
  }

  getArea() {
    return Math.abs(this.getSignedArea());
  }

  getWindingDirection() {
    return Math.sign(this.getSignedArea());
  }

  forEachSegment(visitor) {
    const length = this.points.length;
    for (let i = 0; i < length - 1; i++) {
      visitor(this.points[i], this.points[i + 1], i, i + 1)

    }
    if (this.isPolygon && !this.isClosed()) {
      // Call function with points and indices
      visitor(this.points[length - 1], this.points[0], length - 1, 0);
    }
  }
}
