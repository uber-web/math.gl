import {WebMercatorViewport} from '@math.gl/web-mercator';
import test from 'tape-catch';
import {config, equals} from 'math.gl';

const viewportProps = {
  latitude: 37.75,
  longitude: -122.43,
  zoom: 11.5,
  pitch: 30,
  bearing: 0,
  width: 800,
  height: 600
};

const TEST_CASES = [
  {
    title: 'project (center)',
    func: 'project',
    input: [-122.43, 37.75],
    expected: [400, 300]
  },
  {
    title: 'unproject (center)',
    func: 'unproject',
    input: [400, 300],
    expected: [-122.43, 37.75]
  },
  {
    title: 'project (corner)',
    func: 'project',
    input: [-122.55, 37.83],
    expected: [-1.329741801625046, 6.796120915775314]
  },
  {
    title: 'unproject (corner)',
    func: 'unproject',
    input: [0, 0],
    expected: [-122.55024809579456, 37.832294933238586]
  }
];

test('Viewport constructor', t => {
  const viewport = new WebMercatorViewport(viewportProps);

  t.ok(viewport, 'Viewport construction successful');

  const viewportState = {};
  Object.keys(viewportProps).forEach(key => {
    viewportState[key] = viewport[key];
  });

  t.deepEquals(viewportState, viewportProps, 'Viewport props assigned');
  t.end();
});

test('Viewport projection', t => {
  config.EPSILON = 1e-7;
  const viewport = new WebMercatorViewport(viewportProps);
  TEST_CASES.forEach(({title, func, input, expected}) => {
    const output = viewport[func](input);
    t.ok(equals(output, expected), `viewport.${func}(${title})`);
  });
  t.end();
});

test('Viewport projection#topLeft', t => {
  const viewport = new WebMercatorViewport(viewportProps);

  const topLeft = viewport.unproject([0, 0], {topLeft: true});
  const bottomLeft = viewport.unproject([0, viewport.height], {topLeft: true});

  t.ok(topLeft[1] > bottomLeft[1], 'topLeft latitude is north of bottomLeft latitude');

  const topLeft2 = viewport.unproject([0, viewport.height], {topLeft: false});
  const bottomLeft2 = viewport.unproject([0, 0], {topLeft: false});

  t.deepEquals(topLeft, topLeft2, 'topLeft true/false match');
  t.deepEquals(bottomLeft, bottomLeft2, 'bottomLeft true/false match');

  t.end();
});
