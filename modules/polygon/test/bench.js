// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {
  Polygon,
  modifyPolygonWindingDirectionFlat,
  modifyPolygonWindingDirection,
  WINDING
} from '@math.gl/polygon';

export default function polygonBench(suite, addReferenceBenchmarks) {
  const testDataFlat = [0, 0, 1, 1, 0, 2, -1, 1, -1.25, 0.5];
  const testDataPoints = [[0, 0], [1, 1], [0, 2], [-1, 1], [-1.25, 0.5]];

  suite
    .group('Polygon')
    .add('Polygon#new()', () => new Polygon(testDataFlat))
    .add('Polygon#modifyWindingDirection()', () => {
      const polygon = new Polygon(testDataFlat);
      polygon.modifyWindingDirection(WINDING.CLOCKWISE);
    })
    .add('modifyPolygonWindingDirection()', () => {
      modifyPolygonWindingDirection(testDataPoints, WINDING.CLOCKWISE);
    })
    .add('modifyPolygonWindingDirectionFlat()', () => {
      modifyPolygonWindingDirectionFlat(testDataFlat, 0, 10, 2, WINDING.CLOCKWISE);
    });

  return suite;
}
