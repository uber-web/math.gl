import test from 'tape-promise/tape';
import {normalizeViewportProps} from '@math.gl/web-mercator';
import {config, equals} from '@math.gl/core';

const NORMALIZATION_TEST_CASES = [
  [
    {
      width: 800,
      height: 600,
      longitude: -200,
      latitude: 10,
      zoom: 0,
      pitch: 60,
      bearing: 200
    },
    {
      width: 800,
      height: 600,
      latitude: 0,
      longitude: 160,
      zoom: 0.22881869049588088,
      bearing: -160,
      pitch: 60
    }
  ],
  [
    {
      width: 1000,
      height: 1000,
      longitude: 80,
      latitude: 0,
      zoom: 1,
      pitch: 0,
      bearing: 0
    },
    {
      width: 1000,
      height: 1000,
      latitude: 0,
      longitude: 80,
      zoom: 1,
      bearing: 0,
      pitch: 0
    }
  ],
  [
    {
      width: 1000,
      height: 1000,
      longitude: 80,
      latitude: -50,
      zoom: 1,
      pitch: 0,
      bearing: 0
    },
    {
      width: 1000,
      height: 1000,
      latitude: -4.214943141390651,
      longitude: 80,
      zoom: 1,
      bearing: 0,
      pitch: 0
    }
  ],
  [
    {
      width: 1000,
      height: 1000,
      longitude: 80,
      latitude: 80,
      zoom: 1,
      pitch: 0,
      bearing: 0
    },
    {
      width: 1000,
      height: 1000,
      latitude: 4.214943141390651,
      longitude: 80,
      zoom: 1,
      bearing: 0,
      pitch: 0
    }
  ]
];

test('normalizeViewportProps', (t) => {
  config.EPSILON = 1e-7;

  for (const [input, expected] of NORMALIZATION_TEST_CASES) {
    const result = normalizeViewportProps(input);

    t.ok(
      equals(
        Object.keys(expected).map((key) => result[key]),
        Object.keys(expected).map((key) => expected[key])
      ),
      'correct viewport returned'
    );
  }
  t.end();
});
