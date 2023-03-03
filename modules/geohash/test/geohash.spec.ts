import test from 'tape-promise/tape';
import {getGeohashBounds, getGeohashBoundaryFlat} from '@math.gl/geohash';

const TEST_DATA = [
  {
    geohash: '9',
    expectedBounds: [0, -135, 45, -90]
  },
  {
    geohash: '9q8yybj',
    expectedBounds: [37.7490234375, -122.39181518554688, 37.750396728515625, -122.39044189453125]
  },
  {
    geohash: '9q8yy',
    expectedBounds: [37.7490234375, -122.431640625, 37.79296875, -122.3876953125]
  }
];

// TODO - restore test
test.skip('geohash#getGeohashBounds', (t) => {
  for (const {geohash} of TEST_DATA) {
    const polygon = getGeohashBounds(geohash);
    t.ok(polygon instanceof Array, 'polygon is flat array');
    t.is(polygon.length / 2 - 1, 4, 'polygon has 4 sides');
    t.deepEqual(polygon.slice(0, 2), polygon.slice(-2), 'polygon is closed');
  }

  t.end();
});

// TODO - restore test
test.skip('geohash#getGeohashBoundaryFlat', (t) => {
  for (const {geohash, expectedBounds} of TEST_DATA) {
    const bounds = getGeohashBoundaryFlat(geohash);
    t.deepEquals(bounds, expectedBounds, 'Geohash bounds calculated');
  }

  t.end();
});
