import test from 'tape-catch';
import {flyToViewport, getFlyToDuration} from '@math.gl/web-mercator';
import {toLowPrecision} from '../utils/test-utils';

/* eslint-disable max-len */
const START_PROPS = {width: 800, height: 600, longitude: -122.45, latitude: 37.78, zoom: 12};
const END_PROPS = {width: 800, height: 600, longitude: -74, latitude: 40.7, zoom: 11};
/* eslint-enable max-len */

const FLY_TO_TEST_CASES = [
  {
    startProps: START_PROPS,
    endProps: END_PROPS,
    t: 0.25,
    expect: {longitude: -122.4017, latitude: 37.78297, zoom: 7.518116}
  },
  {
    startProps: START_PROPS,
    endProps: END_PROPS,
    t: 0.5,
    expect: {longitude: -106.3, latitude: 38.76683, zoom: 3.618313}
  },
  {
    startProps: START_PROPS,
    endProps: END_PROPS,
    t: 0.75,
    expect: {longitude: -74.19253, latitude: 40.68864, zoom: 6.522422}
  }
];

const DURATION_TEST_CASES = [
  {
    title: 'default props',
    startProps: START_PROPS,
    endProps: END_PROPS,
    expect: 7325.7943
  },
  {
    // duration to a neary by view state
    title: 'duration to near by view state',
    startProps: START_PROPS,
    endProps: Object.assign({}, START_PROPS, {longitude: START_PROPS.longitude + 0.001}),
    expect: 8.5802857
  },
  {
    title: 'low speed',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {speed: 1},
    expect: 8790.9532
  },
  {
    title: 'high speed',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {speed: 5},
    expect: 1758.1906
  },
  {
    title: 'screenSpeed should take precedence over speed',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {speed: 5, screenSpeed: 2},
    expect: 6215.2039
  },
  {
    title: 'low curve',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {curve: 0.5},
    expect: 13787.929
  },
  {
    title: 'high curve',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {curve: 2.0},
    expect: 5757.2078
  },
  {
    title: 'maxDuration',
    startProps: START_PROPS,
    endProps: END_PROPS,
    opts: {maxDuration: 5000},
    expect: 0
  }
];

test('flyToViewport', t => {
  FLY_TO_TEST_CASES.forEach(testCase => {
    const propsInTransition = flyToViewport(testCase.startProps, testCase.endProps, testCase.t);
    t.deepEqual(toLowPrecision(propsInTransition, 7), testCase.expect, 'interpolated correctly');
  });

  t.end();
});

test('getFlyToDuration', t => {
  DURATION_TEST_CASES.forEach(testCase => {
    const duration = getFlyToDuration(testCase.startProps, testCase.endProps, testCase.opts);
    t.deepEqual(
      toLowPrecision(duration, 8),
      testCase.expect,
      `${testCase.title}: should get correct duration`
    );
  });

  t.end();
});
