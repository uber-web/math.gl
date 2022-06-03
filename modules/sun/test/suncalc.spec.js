import {getSunPosition, getSunDirection} from '../src/suncalc';
import {equals, config} from '@math.gl/core';
import test from 'tape-promise/tape';

import {angle} from 'gl-matrix/vec3';

test('Sunlight#azimuth and altitude', (t) => {
  const MS_IN_AN_HOUR = 3.6e6;
  const TIMESTAMP = 1553990400000 + 7 * MS_IN_AN_HOUR; // 03/31/2019 @ 12:00am (UTC) + Vancouver(GMT-7) timezone offset
  const LATITUDE = 49.253;
  const LONGITUDE = -123.13;

  // azimuth and altitude values are calculated from
  // https://www.wolframalpha.com/input/?i=solar+position+on+20:00+03-31-2019+atlatitude+49.253+and+longitude+-123.13
  const TEST_CASES = [
    {
      timestamp: TIMESTAMP,
      azimuth: 336.645,
      altitude: -34.1018
    },
    {
      timestamp: TIMESTAMP + MS_IN_AN_HOUR * 5,
      azimuth: 60.2354,
      altitude: -18.1205
    },
    {
      timestamp: TIMESTAMP + MS_IN_AN_HOUR * 10,
      azimuth: 120.573,
      altitude: 28.7791
    },
    {
      timestamp: TIMESTAMP + MS_IN_AN_HOUR * 15,
      azimuth: 214.564,
      altitude: 39.9957
    },
    {
      timestamp: TIMESTAMP + MS_IN_AN_HOUR * 20,
      azimuth: 281.106,
      altitude: -3.70205
    }
  ];

  const oldEpsilon = config.EPSILON;
  // Because the formula used in `getSunPosition` are not the same as https://www.wolframalpha.com,
  // use a bigger epsilon here
  config.EPSILON = 0.3;

  TEST_CASES.forEach((testCase) => {
    const {azimuth, altitude} = getSunPosition(testCase.timestamp, LATITUDE, LONGITUDE);
    // azimuth is measured from south to west, azimuth + 180 is converting to north to east
    const azimuthInDegree = 180 + (azimuth * 180) / Math.PI;
    const altitudeInDegree = (altitude * 180) / Math.PI;

    t.ok(equals(azimuthInDegree, testCase.azimuth), 'Azimuth angle should match.');
    t.ok(equals(altitudeInDegree, testCase.altitude), 'Altitude angle should match.');
  });

  config.EPSILON = oldEpsilon;
  t.end();
});

test('getSunDirection', (t) => {
  const testCases = [
    {
      title: 'Tropic of Cancer on Summer Solstice at noon',
      timestamp: new Date('2021-06-20 12:00:00Z'),
      longitude: 0,
      latitude: 23.43655,
      // Sun should be pointing straight down
      expected: [0, 0, -1]
    },
    {
      title: 'Tropic of Capricorn on Summer Solstice at midnight',
      timestamp: new Date('2021-06-20 00:00:00Z'),
      longitude: 0,
      latitude: -23.43655,
      // Sun should be pointing straight up
      expected: [0, 0, 1]
    },
    {
      title: 'Sunrise, Seattle',
      timestamp: new Date('2021-01-28 07:47:00Z-8'),
      longitude: -122.3258,
      latitude: 47.6347,
      // Sun should be at horizon from the southeast
      expected: [-0.8871, 0.4616, 0]
    },
    {
      title: 'Sunset, Seattle',
      timestamp: new Date('2021-01-28 17:00:00Z-8'),
      longitude: -122.3258,
      latitude: 47.6347,
      // Sun should be at horizon from the southwest
      expected: [0.8894, 0.457, 0]
    }
  ];

  for (const testCase of testCases) {
    const direction = getSunDirection(testCase.timestamp, testCase.latitude, testCase.longitude);
    t.comment(direction.join(','));
    t.ok(angle(direction, testCase.expected) < 0.05, testCase.title);
  }

  t.end();
});
