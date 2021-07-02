import {MapboxTransform} from './mapbox-transform';

import {WebMercatorViewport} from '@math.gl/web-mercator';
import test from 'tape-promise/tape';
import {toLowPrecision} from '../../utils/test-utils';
import {equals, config} from '@math.gl/core';

import VIEWPORT_PROPS from '../../utils/sample-viewports';

const TEST_CASES = [
  {
    title: '(center)',
    lngLat: [-122.43, 37.75],
    screen: [400, 300]
  },
  {
    title: '(corner)',
    lngLat: [-122.55, 37.83],
    screen: [-1.329741801625046, 6.796120915775314]
  }
];

test('Viewport vs Mapbox project', (t) => {
  config.EPSILON = 1e-8;

  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];

    for (const {title, lngLat} of TEST_CASES) {
      const viewport = new WebMercatorViewport(viewportProps);
      const projection = viewport.project(lngLat, {topLeft: true});

      const transform = new MapboxTransform(viewportProps);
      const mapboxProjection = transform.mapboxProject(lngLat);

      t.ok(
        equals(projection, mapboxProjection),
        `project(${title}, ${viewportName}) - viewport ${projection} mapbox ${mapboxProjection}`
      );
    }
  }
  t.end();
});

test('Viewport vs Mapbox unproject', (t) => {
  config.EPSILON = 1e-7;

  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];

    for (const {title, lngLat} of TEST_CASES) {
      const transform = new MapboxTransform(viewportProps);
      const mapboxProjection = transform.mapboxProject(lngLat);

      const viewport = new WebMercatorViewport(viewportProps);
      const unprojection = viewport.unproject(mapboxProjection, {topLeft: true});

      t.ok(
        equals(unprojection, lngLat),
        `unproject(${title}, ${viewportName}) - viewport/mapbox match`
      );
    }
  }
  t.end();
});

/* Mapbox's matrixes projects to screenspace instead of clipspace */
test('Viewport vs Mapbox project 3D', (t) => {
  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];

    const viewport = new WebMercatorViewport(viewportProps);
    const transform = new MapboxTransform(viewportProps);

    const sphericalPosition = [viewport.longitude - 0.05, viewport.latitude - 0.05, 0];
    const viewportProjected = viewport.project(sphericalPosition);
    const mapboxProjected = transform.mapboxProject(sphericalPosition);

    // TODO - math.gl does not deal with significant digits
    t.deepEquals(
      toLowPrecision(viewportProjected, 4),
      toLowPrecision(mapboxProjected, 4),
      `project 3D ${viewportName} - viewport/mapbox match`
    );
  }
  t.end();
});

test('Viewport/Mapbox getLocationAtPoint', (t) => {
  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];
    for (const {title, lngLat} of TEST_CASES) {
      const viewport = new WebMercatorViewport(viewportProps);
      const llp = viewport.getLocationAtPoint({lngLat, pos: [100, 100]});

      const transform = new MapboxTransform(viewportProps);
      const llm = transform.mapboxGetLngLatAtPoint({lngLat, pos: [100, 100]});

      t.deepEquals(
        toLowPrecision(llp),
        toLowPrecision(llm),
        `getLocationAtPoint(${title}, ${viewportName})) - viewport/mapbox match`
      );
    }
  }
  t.end();
});
