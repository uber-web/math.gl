import test from 'tape-catch';
import destination from '@turf/destination';
import {toLowPrecision} from '../utils/test-utils';
import {config, equals} from '@math.gl/core';

import {
  lngLatToWorld,
  worldToLngLat,
  zoomToScale,
  getMeterZoom,
  getDistanceScales,
  addMetersToLngLat,
  getViewMatrix,
  getProjectionMatrix,
  getProjectionParameters,
  worldToPixels,
  pixelsToWorld
} from '@math.gl/web-mercator';

import VIEWPORT_PROPS from '../utils/sample-viewports';

const DISTANCE_TOLERANCE = 0.0005;
const DISTANCE_TOLERANCE_PIXELS = 2;
const DISTANCE_SCALE_TEST_ZOOM = 12;

test('Viewport#imports', t => {
  t.ok(lngLatToWorld, 'lngLatToWorld imports OK');
  t.ok(worldToLngLat, 'worldToLngLat imports OK');
  t.ok(getMeterZoom, 'getMeterZoom imports OK');
  t.ok(getViewMatrix, 'getViewMatrix imports OK');
  t.ok(getProjectionMatrix, 'getProjectionMatrix imports OK');
  t.ok(getProjectionParameters, 'getProjectionParameters imports OK');
  t.ok(worldToPixels, 'worldToPixels imports OK');
  t.ok(pixelsToWorld, 'pixelsToWorld imports OK');
  t.end();
});

test('lngLatToWorld', t => {
  t.throws(() => lngLatToWorld([38, -122]), /latitude/i, 'throws on invalid latitude');
  t.ok(
    equals(lngLatToWorld([-122, 38]), [82.4888888888889, 314.50692551385134]),
    'returns correct result'
  );
  t.end();
});

test('getDistanceScales', t => {
  for (const vc in VIEWPORT_PROPS) {
    const props = VIEWPORT_PROPS[vc];
    const {metersPerUnit, unitsPerMeter, degreesPerUnit, unitsPerDegree} = getDistanceScales(props);

    t.deepEqual(
      [
        toLowPrecision(metersPerUnit[0] * unitsPerMeter[0]),
        toLowPrecision(metersPerUnit[1] * unitsPerMeter[1]),
        toLowPrecision(metersPerUnit[2] * unitsPerMeter[2])
      ],
      [1, 1, 1],
      'metersPerUnit checks with unitsPerMeter'
    );

    t.deepEqual(
      [
        toLowPrecision(degreesPerUnit[0] * unitsPerDegree[0]),
        toLowPrecision(degreesPerUnit[1] * unitsPerDegree[1]),
        toLowPrecision(degreesPerUnit[2] * unitsPerDegree[2])
      ],
      [1, 1, 1],
      'degreesPerUnit checks with unitsPerDegree'
    );
  }
  t.end();
});

test('getDistanceScales#unitsPerDegree', t => {
  const scale = Math.pow(2, DISTANCE_SCALE_TEST_ZOOM);
  const z = 1000;

  for (const vc in VIEWPORT_PROPS) {
    t.comment(vc);
    const props = VIEWPORT_PROPS[vc];
    const {longitude, latitude} = props;
    const {unitsPerDegree, unitsPerDegree2} = getDistanceScales({
      longitude,
      latitude,
      highPrecision: true
    });

    // Test degree offsets
    for (const delta of [0.001, 0.01, 0.05, 0.1, 0.3]) {
      t.comment(`R = ${delta} degrees`);

      // To pixels
      const coords = [delta * unitsPerDegree[0], delta * unitsPerDegree[1], z * unitsPerDegree[2]];
      const coordsAdjusted = [
        delta * (unitsPerDegree[0] + unitsPerDegree2[0] * delta),
        delta * (unitsPerDegree[1] + unitsPerDegree2[1] * delta),
        z * (unitsPerDegree[2] + unitsPerDegree2[2] * delta)
      ];

      const pt = [longitude + delta, latitude + delta];

      const realCoords = [
        lngLatToWorld(pt)[0] - lngLatToWorld([longitude, latitude])[0],
        lngLatToWorld(pt)[1] - lngLatToWorld([longitude, latitude])[1],
        z * getDistanceScales({longitude: pt[0], latitude: pt[1]}).unitsPerMeter[2]
      ];

      const diff = getDiff(coords, realCoords, scale);
      const diffAdjusted = getDiff(coordsAdjusted, realCoords, scale);

      t.comment(`unadjusted: ${diff.message}`);
      t.comment(`adjusted: ${diffAdjusted.message}`);

      t.ok(diffAdjusted.error.every(e => e < DISTANCE_TOLERANCE), 'Error within ratio tolerance');
      t.ok(
        diffAdjusted.errorPixels.every(p => p < DISTANCE_TOLERANCE_PIXELS),
        'Error within pixel tolerance'
      );
    }
  }
  t.end();
});

test('getDistanceScales#unitsPerMeter', t => {
  const scale = Math.pow(2, DISTANCE_SCALE_TEST_ZOOM);
  const z = 1000;

  for (const vc in VIEWPORT_PROPS) {
    t.comment(vc);
    const props = VIEWPORT_PROPS[vc];
    const {longitude, latitude} = props;
    const {unitsPerMeter, unitsPerMeter2} = getDistanceScales({
      latitude,
      longitude,
      highPrecision: true
    });

    // Test degree offsets
    for (const delta of [10, 100, 1000, 5000, 10000, 30000]) {
      t.comment(`R = ${delta} meters`);

      // To pixels
      const coords = [delta * unitsPerMeter[0], delta * unitsPerMeter[1], z * unitsPerMeter[2]];
      const coordsAdjusted = [
        delta * (unitsPerMeter[0] + unitsPerMeter2[0] * delta),
        delta * (unitsPerMeter[1] + unitsPerMeter2[1] * delta),
        z * (unitsPerMeter[2] + unitsPerMeter2[2] * delta)
      ];

      let pt = [longitude, latitude];
      // turf unit is kilometers
      const feature = destination(pt, (delta / 1000) * Math.sqrt(2), 45);
      pt = feature.geometry.coordinates;

      const realCoords = [
        lngLatToWorld(pt)[0] - lngLatToWorld([longitude, latitude])[0],
        lngLatToWorld(pt)[1] - lngLatToWorld([longitude, latitude])[1],
        z * getDistanceScales({longitude: pt[0], latitude: pt[1]}).unitsPerMeter[2]
      ];

      const diff = getDiff(coords, realCoords, scale);
      const diffAdjusted = getDiff(coordsAdjusted, realCoords, scale);

      t.comment(`unadjusted: ${diff.message}`);
      t.comment(`adjusted: ${diffAdjusted.message}`);

      t.ok(diffAdjusted.error.every(e => e < DISTANCE_TOLERANCE), 'Error within ratio tolerance');
      t.ok(
        diffAdjusted.errorPixels.every(p => p < DISTANCE_TOLERANCE_PIXELS),
        'Error within pixel tolerance'
      );
    }
  }
  t.end();
});

test('addMetersToLngLat', t => {
  config.EPSILON = 1e-7;

  for (const vc in VIEWPORT_PROPS) {
    t.comment(vc);
    const {longitude, latitude} = VIEWPORT_PROPS[vc];

    // Test degree offsets
    for (const delta of [10, 100, 1000, 5000]) {
      t.comment(`R = ${delta} meters`);

      const origin = [longitude, latitude];
      // turf unit is kilometers
      const feature = destination(origin, (delta / 1000) * Math.sqrt(2), 45);
      const pt = feature.geometry.coordinates.concat(delta);

      const result = addMetersToLngLat(origin, [delta, delta, delta]);

      t.comment(`Comparing: ${result}, ${pt}`);

      t.ok(equals(result, pt), 'Returns correct result');
    }
  }
  t.end();
});

test('getMeterZoom', t => {
  const TEST_LATITUDES = [0, 37.5, 75];

  for (const latitude of TEST_LATITUDES) {
    const zoom = getMeterZoom({latitude});
    const scale = zoomToScale(zoom);

    const {unitsPerMeter} = getDistanceScales({latitude, longitude: 0});
    t.deepEqual(
      toLowPrecision(unitsPerMeter.map(x => x * scale)),
      [1, 1, 1],
      'zoom yields 1 pixel per meter'
    );
  }

  t.end();
});

function getDiff(value, baseValue, scale) {
  const errorPixels = value.map((v, i) => Math.abs((v - baseValue[i]) * scale));
  const error = value.map(
    (v, i) => Math.abs(v - baseValue[i]) / Math.min(Math.abs(v), Math.abs(baseValue[i]))
  );

  return {
    errorPixels,
    error,
    message: `off by \
      (${errorPixels.map(d => d.toFixed(3)).join(', ')}) pixels, \
      (${error.map(d => `${(d * 100).toFixed(3)}%`).join(', ')})`
  };
}

test('getProjectionParameters', t => {
  for (const vc in VIEWPORT_PROPS) {
    const props = VIEWPORT_PROPS[vc];

    // TODO - for now, just tests that fields are valid number
    const {fov, aspect, focalDistance, near, far} = getProjectionParameters(props);
    t.ok(Number.isFinite(fov), 'getProjectionParameters: fov is a number');
    t.ok(Number.isFinite(aspect), 'getProjectionParameters: aspect is a number');
    t.ok(Number.isFinite(focalDistance), 'getProjectionParameters: focalDistance is a number');
    t.ok(Number.isFinite(near), 'getProjectionParameters: near is a number');
    t.ok(Number.isFinite(far), 'getProjectionParameters: far is a number');
  }
  t.end();
});
