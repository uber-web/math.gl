// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {
  Polygon,
  ensurePolygonWindingDirectionFlat,
  ensurePolygonWindingDirection,
  WINDING_CLOCKWISE
} from '@math.gl/polygon';

export default function polygonBench(suite, addReferenceBenchmarks) {
  const testDataFlat = [0, 0, 1, 1, 0, 2, -1, 1, -1.25, 0.5];
  const testDataPoints = [[0, 0], [1, 1], [0, 2], [-1, 1], [-1.25, 0.5]];

  suite
    .group('Polygon')
    .add('Polygon#new()', () => new Polygon(testDataFlat))
    .add('Polygon#ensureWindingDirection()', () => {
      const polygon = new Polygon(testDataFlat);
      polygon.ensureWindingDirection(WINDING_CLOCKWISE);
    })
    .add('ensurePolygonWindingDirection()', () => {
      ensurePolygonWindingDirection(testDataPoints, WINDING_CLOCKWISE);
    })
    .add('ensurePolygonWindingDirectionFlat()', () => {
      ensurePolygonWindingDirectionFlat(testDataFlat, 0, 10, 2, WINDING_CLOCKWISE);
    });

  return suite;
}
