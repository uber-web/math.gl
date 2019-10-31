import test from 'tape-catch';
import destination from '@turf/destination';
import {toLowPrecision} from '../utils/test-utils';
import {config, equals} from 'math.gl';

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
} from 'viewport-mercator-project';

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
    const {
      metersPerCommonUnit,
      commonUnitsPerMeter,
      degreesPerCommonUnit,
      commonUnitsPerDegree
    } = getDistanceScales(props);

    t.deepEqual(
      [
        toLowPrecision(metersPerCommonUnit[0] * commonUnitsPerMeter[0]),
        toLowPrecision(metersPerCommonUnit[1] * commonUnitsPerMeter[1]),
        toLowPrecision(metersPerCommonUnit[2] * commonUnitsPerMeter[2])
      ],
      [1, 1, 1],
      'metersPerCommonUnit checks with commonUnitsPerMeter'
    );

    t.deepEqual(
      [
        toLowPrecision(degreesPerCommonUnit[0] * commonUnitsPerDegree[0]),
        toLowPrecision(degreesPerCommonUnit[1] * commonUnitsPerDegree[1]),
        toLowPrecision(degreesPerCommonUnit[2] * commonUnitsPerDegree[2])
      ],
      [1, 1, 1],
      'degreesPerCommonUnit checks with commonUnitsPerDegree'
    );
  }
  t.end();
});

test('getDistanceScales#commonUnitsPerDegree', t => {
  const scale = Math.pow(2, DISTANCE_SCALE_TEST_ZOOM);
  const z = 1000;

  for (const vc in VIEWPORT_PROPS) {
    t.comment(vc);
    const props = VIEWPORT_PROPS[vc];
    const {longitude, latitude} = props;
    const {commonUnitsPerDegree, commonUnitsPerDegree2} = getDistanceScales({
      longitude,
      latitude,
      highPrecision: true
    });

    // Test degree offsets
    for (const delta of [0.001, 0.01, 0.05, 0.1, 0.3]) {
      t.comment(`R = ${delta} degrees`);

      // To pixels
      const coords = [
        delta * commonUnitsPerDegree[0],
        delta * commonUnitsPerDegree[1],
        z * commonUnitsPerDegree[2]
      ];
      const coordsAdjusted = [
        delta * (commonUnitsPerDegree[0] + commonUnitsPerDegree2[0] * delta),
        delta * (commonUnitsPerDegree[1] + commonUnitsPerDegree2[1] * delta),
        z * (commonUnitsPerDegree[2] + commonUnitsPerDegree2[2] * delta)
      ];

      const pt = [longitude + delta, latitude + delta];

      const realCoords = [
        lngLatToWorld(pt, scale)[0] - lngLatToWorld([longitude, latitude], scale)[0],
        lngLatToWorld(pt, scale)[1] - lngLatToWorld([longitude, latitude], scale)[1],
        z * getDistanceScales({longitude: pt[0], latitude: pt[1]}).commonUnitsPerMeter[2]
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

test('getDistanceScales#commonUnitsPerMeter', t => {
  const scale = Math.pow(2, DISTANCE_SCALE_TEST_ZOOM);
  const z = 1000;

  for (const vc in VIEWPORT_PROPS) {
    t.comment(vc);
    const props = VIEWPORT_PROPS[vc];
    const {longitude, latitude} = props;
    const {commonUnitsPerMeter, commonUnitsPerMeter2} = getDistanceScales({
      latitude,
      longitude,
      scale,
      highPrecision: true
    });

    // Test degree offsets
    for (const delta of [10, 100, 1000, 5000, 10000, 30000]) {
      t.comment(`R = ${delta} meters`);

      // To pixels
      const coords = [
        delta * commonUnitsPerMeter[0],
        delta * commonUnitsPerMeter[1],
        z * commonUnitsPerMeter[2]
      ];
      const coordsAdjusted = [
        delta * (commonUnitsPerMeter[0] + commonUnitsPerMeter2[0] * delta),
        delta * (commonUnitsPerMeter[1] + commonUnitsPerMeter2[1] * delta),
        z * (commonUnitsPerMeter[2] + commonUnitsPerMeter2[2] * delta)
      ];

      let pt = [longitude, latitude];
      // turf unit is kilometers
      pt = destination(pt, (delta / 1000) * Math.sqrt(2), 45);
      pt = pt.geometry.coordinates;

      const realCoords = [
        lngLatToWorld(pt, scale)[0] - lngLatToWorld([longitude, latitude], scale)[0],
        lngLatToWorld(pt, scale)[1] - lngLatToWorld([longitude, latitude], scale)[1],
        z * getDistanceScales({longitude: pt[0], latitude: pt[1], scale}).commonUnitsPerMeter[2]
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
      let pt = destination(origin, (delta / 1000) * Math.sqrt(2), 45);
      pt = pt.geometry.coordinates.concat(delta);

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

    const {commonUnitsPerMeter} = getDistanceScales({latitude, longitude: 0, zoom});
    t.deepEqual(
      toLowPrecision(commonUnitsPerMeter.map(x => x * scale)),
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
    props.scale = zoomToScale(props.zoom);

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
