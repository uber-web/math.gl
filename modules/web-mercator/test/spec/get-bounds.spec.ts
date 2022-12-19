import test from 'tape-promise/tape';
import {getBounds} from '@math.gl/web-mercator';
import {WebMercatorViewport} from '@math.gl/web-mercator';
import {toLowPrecision} from '../utils/test-utils';

const GETBOUNDS_TEST_CASES = [
  {
    title: 'flat viewport',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: -122.45,
      latitude: 37.78,
      zoom: 12
    },
    quad: [
      [-122.48433228, 37.759645826, 0],
      [-122.41566772, 37.759645826, 0],
      [-122.41566772, 37.800348571, 0],
      [-122.48433228, 37.800348571, 0]
    ],
    rect: [
      [-122.48433228, 37.759645826],
      [-122.41566772, 37.800348571]
    ]
  },
  {
    title: 'with rotation',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: 0,
      latitude: 0,
      pitch: 30,
      bearing: -145,
      zoom: 5
    },
    quad: [
      [4.8494210119, 0.50056751458, 0],
      [-1.188214086, 4.7228142079, 0],
      [-7.1607865313, -0.73914046292, 0],
      [1.7545491312, -6.9645319778, 0]
    ],
    rect: [
      [-7.1607865313, -6.9645319778],
      [4.8494210119, 4.7228142079]
    ]
  },
  {
    title: 'with rotation and z',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: 0,
      latitude: 0,
      pitch: 30,
      bearing: -145,
      zoom: 5
    },
    z: 100,
    quad: [
      [4.8492095189, 0.50094025264, 100],
      [-1.1877914785, 4.7227432002, 100],
      [-7.1597366566, -0.73863754973, 100],
      [1.754662676, -6.9633819448, 100]
    ],
    rect: [
      [-7.1597366566, -6.9633819448],
      [4.8492095189, 4.7227432002]
    ]
  },
  {
    title: 'with extreme pitch',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: 0,
      latitude: 0,
      pitch: 80,
      zoom: 5
    },
    quad: [
      [-1.520374, -6.552286, 0],
      [1.520374, -6.552286, 0],
      [43.94531, 66.65714, 0],
      [-43.94531, 66.65714, 0]
    ],
    rect: [
      [-43.94531, -6.552286],
      [43.94531, 66.65714]
    ]
  },
  {
    title: 'with extreme pitch and z',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: 0,
      latitude: 0,
      pitch: 80,
      zoom: 5
    },
    z: 100,
    quad: [
      [-1.519578, -6.553936, 100],
      [1.519578, -6.553936, 100],
      [43.94531, 66.6572, 100],
      [-43.94531, 66.6572, 100]
    ],
    rect: [
      [-43.94531, -6.553936],
      [43.94531, 66.6572]
    ]
  },
  {
    title: 'with fovy override',
    viewportProps: {
      width: 400,
      height: 300,
      longitude: 0,
      latitude: 0,
      fovy: 25,
      pitch: 60,
      zoom: 5
    },
    z: 0,
    quad: [
      [-3.1752704999, -4.7574296668, 0],
      [3.1752704999, -4.7574296668, 0],
      [7.1338220274, 10.639062373, 0],
      [-7.1338220274, 10.639062373, 0]
    ],
    rect: [
      [-7.1338220274, -4.7574296668],
      [7.1338220274, 10.639062373]
    ]
  }
];

test('getBounds', (t) => {
  for (const {title, viewportProps, quad, z} of GETBOUNDS_TEST_CASES) {
    const viewport = new WebMercatorViewport(viewportProps);
    const result = getBounds(viewport, z);
    t.deepEqual(toLowPrecision(result), toLowPrecision(quad), title);
  }
  t.end();
});

test('WebMercatorViewport.getBounds/getBoundingRegion', (t) => {
  for (const testCase of GETBOUNDS_TEST_CASES) {
    const viewport = new WebMercatorViewport(testCase.viewportProps);
    const opts = testCase.z ? {z: testCase.z} : undefined;

    const bounds = viewport.getBounds(opts);
    t.deepEqual(
      toLowPrecision(bounds),
      toLowPrecision(testCase.rect),
      `${testCase.title}: bounding box`
    );

    const region = viewport.getBoundingRegion(opts);
    t.deepEqual(toLowPrecision(region), toLowPrecision(testCase.quad), `${testCase.title}: quad`);
  }
  t.end();
});
