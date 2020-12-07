// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Polygon, ensurePolygonWindingDirectionFlat} from '@math.gl/polygon';

export default function polygonBench(suite, addReferenceBenchmarks) {
  const testData = [0, 0, 1, 1, 0, 2, -1, 1, -1.25, 0.5];

  suite
    .group('Polygon')
    .add('Polygon#new()', () => new Polygon(testData))
    .add('Polygon#ensureWindingDirection()', () => {
      const polygon = new Polygon(testData);
      polygon.ensureWindingDirection(1);
    })
    .add('ensurePolygonWindingDirectionFlat()', () => {
      ensurePolygonWindingDirectionFlat(testData, 0, 10, 2, 1);
    });

  return suite;
}
