import {MapboxTransform} from './mapbox-transform';

import {WebMercatorViewport} from 'viewport-mercator-project';
import test from 'tape-catch';
import {toLowPrecision} from '../../utils/test-utils';
import {equals, config, Matrix4} from 'math.gl';

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

test('Viewport vs. Mapbox projectFlat', t => {
  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];

    const viewport = new WebMercatorViewport(viewportProps);
    const projection = viewport.projectFlat([-122.43, 37.75]);

    const transform = new MapboxTransform(viewportProps);
    const mapboxProjection = transform.mapboxProjectFlat([-122.43, 37.75]);

    t.deepEquals(
      toLowPrecision(projection),
      toLowPrecision(mapboxProjection),
      `projectFlat(${viewportName}) - viewport/mapbox match`
    );
  }
  t.end();
});

test('Viewport vs. Mapbox unprojectFlat', t => {
  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = VIEWPORT_PROPS[viewportName];

    const viewport = new WebMercatorViewport(viewportProps);
    const unprojection = viewport.unprojectFlat([587, 107]);

    const transform = new MapboxTransform(viewportProps);
    const mapboxUnprojection = transform.mapboxUnprojectFlat([587, 107]);

    t.deepEquals(
      toLowPrecision(unprojection),
      toLowPrecision(mapboxUnprojection),
      `unprojectFlat(${viewportName}) - viewport/mapbox match`
    );
  }
  t.end();
});

test('Viewport vs Mapbox project', t => {
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

test('Viewport vs Mapbox unproject', t => {
  config.EPSILON = 1e-8;

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
test('Viewport vs Mapbox project 3D', t => {
  for (const viewportName in VIEWPORT_PROPS) {
    const viewportProps = Object.assign({}, VIEWPORT_PROPS[viewportName]);
    viewportProps.nearZMultiplier = 1 / viewportProps.height;
    viewportProps.farZMultiplier = 1;

    const viewport = new WebMercatorViewport(viewportProps);
    const transform = new MapboxTransform(viewportProps);

    const viewportProjMatrix = new Matrix4(viewport.viewProjectionMatrix)
      // our projection matrix does not convert z from meter to pixels
      .scale([1, 1, viewport.pixelsPerMeter]);
    const mapboxProjMatrix = new Matrix4(Array.from(transform.projMatrix));

    const sphericalPosition = [viewport.longitude - 0.05, viewport.latitude - 0.05, 100];
    const worldPosition = viewport.projectFlat(sphericalPosition).concat([sphericalPosition[2], 1]);
    const viewportProjected = viewportProjMatrix.transformVector(worldPosition);
    const mapboxProjected = mapboxProjMatrix.transformVector(worldPosition);

    viewportProjected.scale(1 / viewportProjected[3]);
    mapboxProjected.scale(1 / mapboxProjected[3]);

    // TODO - math.gl does not deal with significant digits
    t.deepEquals(
      toLowPrecision(viewportProjected, 4),
      toLowPrecision(mapboxProjected, 4),
      `project 3D ${viewportName} - viewport/mapbox match`
    );
  }
  t.end();
});

test('Viewport/Mapbox getLocationAtPoint', t => {
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
