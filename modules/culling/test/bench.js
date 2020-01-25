// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Matrix4} from '@math.gl/core';
import {BoundingSphere, Plane} from '@math.gl/culling';

const plane = new Plane();
const boundingSphere = new BoundingSphere();
const transform = new Matrix4();

// @ts-ignore ts6133
// eslint-disable-next-line
export default function cullingBench(suite, addReferenceBenchmarks) {
  suite
    .group('BoundingSphere')
    .add('BoundingSphere#new()', () => new BoundingSphere())
    .add('BoundingSphere#transform', () => boundingSphere.transform(transform))

    .group('Plane')
    .add('Plane#new()', () => new Plane())
    .add('Plane#transform', () => plane.transform(transform));

  return suite;
}
