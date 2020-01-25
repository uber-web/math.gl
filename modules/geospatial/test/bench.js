// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3} from '@math.gl/core';
import {
  fromCartographic,
  fromCartographicToRadians,
  toCartographicFromRadians
} from '../src/type-utils';

import ellipsoidBench from '@math.gl/geospatial/test/ellipsoid/ellipsoid.bench';

class ObjectVector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const array = [0, 0, 0];
const float32Array = new Float32Array([0, 0, 0]);
const objectVector = new ObjectVector();
const vector = new Vector3();
const vector3 = new Vector3();

export default function geospatialBench(suite, addReferenceBenchmarks) {
  suite
    .group('Cartographic Type Conversion Cost')
    .add('fromCartographic#Vector3', () => fromCartographic(vector3, vector))
    .add('fromCartographicToRadians#Vector3', () => fromCartographicToRadians(vector3, vector))
    .add('toCartographicFromRadians#Vector3', () => toCartographicFromRadians(vector3, vector));

  if (addReferenceBenchmarks) {
    suite
      // .add('fromCartographicToRadians#Object', () =>
      //   fromCartographicToRadians(vector3, objectVector)
      // )
      .add('toCartographicFromRadians#Object', () =>
        toCartographicFromRadians(vector3, objectVector)
      )
      .add('fromCartographicToRadians#Array', () => fromCartographicToRadians(vector3, array))
      .add('fromCartographicToRadians#Float32Array', () =>
        fromCartographicToRadians(vector3, float32Array)
      )
      .add('toCartographicFromRadians#Array', () => toCartographicFromRadians(vector3, array))
      .add('toCartographicFromRadians#Float32Array', () =>
        toCartographicFromRadians(vector3, float32Array)
      );
  }

  ellipsoidBench(suite);

  return suite;
}
