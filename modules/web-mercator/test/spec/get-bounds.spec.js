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
      [-1.5203742681, -6.5522862007, 0],
      [1.5203742681, -6.5522862007, 0],
      [142.66539563, 89.538041461, 0],
      [-142.66539563, 89.538041461, 0]
    ],
    rect: [
      [-142.66539563, -6.5522862007],
      [142.66539563, 89.538041461]
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
      [-1.5195779215, -6.5539361951, 100],
      [1.5195779215, -6.5539361951, 100],
      [142.66539563, 89.538042739, 100],
      [-142.66539563, 89.538042739, 100]
    ],
    rect: [
      [-142.66539563, -6.5539361951],
      [142.66539563, 89.538042739]
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
