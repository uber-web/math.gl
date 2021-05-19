// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Polygon, modifyPolygonWindingDirection, WINDING} from '@math.gl/polygon';
import {toNested} from './utils.js';

const polygonSmall = [0, 0, 1, 1, 0, 2, -1, 1, -1.25, 0.5, 0, 0];

const polygonMedium = [
  4.2625,
  2.24125,
  3.0025,
  3.20125,
  2.5225,
  4.22125,
  0.9225,
  4.32125,
  -0.3775,
  3.30125,
  -0.7975,
  2.14125,
  -1.8575,
  2.72125,
  -1.8575,
  0.64125,
  -0.3775,
  -0.89875,
  -0.3775,
  -0.89875,
  1.2825,
  0.92125,
  1.4025,
  -0.89875,
  2.9025,
  -0.31875,
  4.0825,
  0.62125,
  4.2625,
  2.24125
];
const polygonMediumNested = toNested(polygonMedium);

// A helper function to swap winding direction on each iteration.
let winding = WINDING.CLOCKWISE;
function nextWinding() {
  winding = winding === WINDING.CLOCKWISE ? WINDING.COUNTER_CLOCKWISE : WINDING.CLOCKWISE;
  return winding;
}

export default function polygonBench(suite, addReferenceBenchmarks) {
  suite
    .group('Polygon')
    .add('Polygon#new()', () => new Polygon(polygonSmall))
    .add('Polygon#modifyWindingDirection() S', () => {
      const polygon = new Polygon(polygonSmall);
      polygon.modifyWindingDirection(nextWinding());
    })
    .add('modifyPolygonWindingDirection() S', () => {
      modifyPolygonWindingDirection(polygonSmall, nextWinding(), {
        isClosed: true,
        start: 0,
        end: polygonSmall.length,
        size: 2
      });
    })
    .add('Polygon#modifyWindingDirection() M', () => {
      const polygon = new Polygon(polygonMedium);
      polygon.modifyWindingDirection(nextWinding());
    })
    .add('modifyPolygonWindingDirection() M', () => {
      modifyPolygonWindingDirection(polygonMedium, nextWinding(), {
        isClosed: true,
        start: 0,
        end: polygonMedium.length,
        size: 2
      });
    })
    .add('Polygon#getSignedArea()', () => {
      const polygon = new Polygon(polygonMedium);
      polygon.getSignedArea();
    })
    .add('Polygon#getSignedArea() nested', () => {
      const polygon = new Polygon(polygonMediumNested);
      polygon.getSignedArea();
    });

  return suite;
}
