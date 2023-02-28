// @ts-nocheck

import test from 'tape-promise/tape';

import {_getS2QuadKey as getS2QuadKey} from '@math.gl/s2';
import {S2} from 's2-geometry';
import Long from 'long';

test('S2#getS2QuadKey', (t) => {
  const TEST_COORDINATES = [
    {lat: 0, lng: 0},
    {lat: -122.45, lng: 37.78},
    {lat: 85, lng: 180}
  ];

  const TEST_LEVELS = [1, 2, 4, 8, 16];

  for (const point of TEST_COORDINATES) {
    for (const level of TEST_LEVELS) {
      const key = S2.latLngToKey(point.lat, point.lng, level);
      const id = Long.fromString(S2.keyToId(key), true);
      const token = id.toString(16).replace(/0+$/, '');

      t.comment(`level ${level}, id: ${id.toString()}, token: ${token}`);
      t.is(getS2QuadKey(key), key, 'Quad key to quad key');
      t.is(getS2QuadKey(id), key, 'Id to quad key');
      t.is(getS2QuadKey(token), key, 'Token to quad key');
    }
  }

  t.end();
});
