import test from 'tape-catch';
import {fitBounds} from '@math.gl/web-mercator';
import {WebMercatorViewport} from '@math.gl/web-mercator';
import {toLowPrecision} from '../utils/test-utils';

const FITBOUNDS_TEST_CASES = [
  [
    {
      width: 100,
      height: 100,
      // southwest bound first
      bounds: [[-73.9876, 40.7661], [-72.9876, 41.7661]]
    },
    {
      longitude: -73.48759999999997,
      latitude: 41.26801443944763,
      zoom: 5.723804361273887
    }
  ],
  [
    {
      width: 100,
      height: 100,
      // northeast bound first
      bounds: [[-72.9876, 41.7661], [-73.9876, 40.7661]]
    },
    {
      longitude: -73.48759999999997,
      latitude: 41.26801443944763,
      zoom: 5.723804361273887
    }
  ],
  [
    {
      width: 100,
      height: 100,
      bounds: [[-73, 10], [-73, 10]],
      maxZoom: 22
    },
    {
      longitude: -73,
      latitude: 10,
      zoom: 22
    }
  ],
  [
    {
      width: 100,
      height: 100,
      bounds: [[-73, 10], [-73, 10]],
      minExtent: 0.01
    },
    {
      longitude: -73,
      latitude: 10,
      zoom: 13.28771238
    }
  ],
  [
    {
      width: 600,
      height: 400,
      bounds: [[-23.407, 64.863], [-23.406, 64.874]],
      padding: 20,
      offset: [0, -40]
    },
    {
      longitude: -23.406499999999973,
      latitude: 64.86850056273362,
      zoom: 12.89199533073045
    }
  ],
  [
    {
      width: 600,
      height: 400,
      bounds: [[-23.407, 64.863], [-23.406, 64.874]],
      padding: {top: 100, bottom: 10, left: 30, right: 30},
      offset: [0, -40]
    },
    {
      longitude: -23.406499999999973,
      latitude: 64.870857602,
      zoom: 12.476957831
    }
  ]
];

test('fitBounds', t => {
  for (const [input, expected] of FITBOUNDS_TEST_CASES) {
    // @ts-ignore
    const result = fitBounds(input);

    t.ok(Number.isFinite(result.longitude), 'get valid longitude');
    t.ok(Number.isFinite(result.latitude), 'get valid latitude');
    t.ok(Number.isFinite(result.zoom), 'get valid zoom');
    t.deepEqual(toLowPrecision(result), toLowPrecision(expected), 'valid viewport returned');
  }
  t.end();
});

test('WebMercatorViewport.fitBounds', t => {
  for (const [input, expected] of FITBOUNDS_TEST_CASES) {
    const viewport = new WebMercatorViewport({
      longitude: -122,
      latitude: 37.7,
      width: input.width,
      height: input.height,
      zoom: 11
    });
    // @ts-ignore
    const result = viewport.fitBounds(input.bounds, input);

    t.ok(result instanceof WebMercatorViewport, 'get viewport');
    t.equals(
      toLowPrecision(result.longitude),
      toLowPrecision(expected.longitude),
      'get correct longitude'
    );
    t.equals(
      toLowPrecision(result.latitude),
      toLowPrecision(expected.latitude),
      'get correct latitude'
    );
    t.equals(toLowPrecision(result.zoom), toLowPrecision(expected.zoom), 'get correct zoom');
  }
  t.end();
});

test('fitBounds#degenerate', t => {
  const OPTIONS = {
    height: 100,
    width: 100,
    bearing: 0,
    pitch: 0,
    zoom: 2
  };

  const viewport = new WebMercatorViewport(OPTIONS);
  t.doesNotThrow(
    () => viewport.fitBounds([[-70, 10], [-70, 10]]),
    'degenerate bounds do not throw by default'
  );
  t.throws(
    // @ts-ignore
    () => viewport.fitBounds([[-70, 10], [-70, 10]], {maxZoom: Infinity}),
    'degenerate bounds throw if maxZoom removed'
  );
  t.doesNotThrow(
    // @ts-ignore
    () => viewport.fitBounds([[-70, 10], [-70, 10]], {minExtent: 0.01, maxZoom: Infinity}),
    'degenerate bounds does not throw if maxZoom removed and minExtents added'
  );

  t.ok(viewport instanceof WebMercatorViewport, 'get viewport');

  t.end();
});
