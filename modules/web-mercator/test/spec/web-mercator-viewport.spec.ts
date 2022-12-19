import test from 'tape-promise/tape';
import {WebMercatorViewport} from '@math.gl/web-mercator';
import {equals, config} from '@math.gl/core';

import VIEWPORT_PROPS from '../utils/sample-viewports';

test('WebMercatorViewport#imports', (t) => {
  t.ok(WebMercatorViewport, 'WebMercatorViewport import ok');
  t.end();
});

test('WebMercatorViewport#constructor', (t) => {
  t.ok(
    new WebMercatorViewport() instanceof WebMercatorViewport,
    'Created new WebMercatorViewport with default args'
  );
  t.end();
});

test('WebMercatorViewport#constructor - 0 width/height', (t) => {
  const viewport = new WebMercatorViewport(
    Object.assign({}, VIEWPORT_PROPS.flat, {
      width: 0,
      height: 0
    })
  );
  t.ok(
    viewport instanceof WebMercatorViewport,
    'WebMercatorViewport constructed successfully with 0 width and height'
  );
  t.end();
});

test('WebMercatorViewport#constructor - camera offset', (t) => {
  const viewport = new WebMercatorViewport(
    Object.assign({}, VIEWPORT_PROPS.flat, {
      position: [0, 0, 300]
    })
  );
  t.ok(viewport.center[2], 'WebMercatorViewport constructed successfully with camera offset');
  t.end();
});

test('WebMercatorViewport#equals', (t) => {
  // TODO - fix types
  const viewport1 = new WebMercatorViewport(VIEWPORT_PROPS.flat);
  const viewport2 = new WebMercatorViewport(VIEWPORT_PROPS.flat);
  const viewport3 = new WebMercatorViewport(Object.assign({}, VIEWPORT_PROPS.flat, {height: 33}));

  t.ok(viewport1.equals(viewport1), 'Viewport equality correct');
  t.ok(viewport1.equals(viewport2), 'Viewport equality correct');
  t.notOk(viewport1.equals(viewport3), 'Viewport equality correct');
  t.end();
});

test('WebMercatorViewport.projectFlat', (t) => {
  config.EPSILON = 1e-6;

  for (const vc in VIEWPORT_PROPS) {
    const viewport = new WebMercatorViewport(VIEWPORT_PROPS[vc]);
    for (const tc in VIEWPORT_PROPS) {
      const {longitude, latitude} = VIEWPORT_PROPS[tc];
      const lnglatIn = [longitude, latitude];
      const xy = viewport.projectFlat(lnglatIn);
      const lnglat = viewport.unprojectFlat(xy);
      t.comment(`Comparing [${lnglatIn}] to [${lnglat}]`);
      t.ok(equals(lnglatIn, lnglat));
    }
  }
  t.end();
});

test('WebMercatorViewport.project#3D', (t) => {
  config.EPSILON = 1e-6;

  for (const vc in VIEWPORT_PROPS) {
    const viewport = new WebMercatorViewport(VIEWPORT_PROPS[vc]);
    for (const tc in VIEWPORT_PROPS) {
      const {longitude, latitude} = VIEWPORT_PROPS[tc];
      const lnglatZIn = [longitude, latitude, 100];
      const [x, y, z] = viewport.project(lnglatZIn);
      const lnglatZ1 = viewport.unproject([x, y, z]);
      const lnglatZ2 = viewport.unproject([x, y], {targetZ: 100});
      t.comment(`Comparing [${lnglatZIn}] to [${lnglatZ1}] & [${lnglatZ2}]`);
      t.ok(equals(lnglatZIn, lnglatZ1), 'unproject with pixel depth');
      t.ok(equals(lnglatZIn, lnglatZ2), 'unproject with target Z');
    }
  }
  t.end();
});

test('WebMercatorViewport.project#2D', (t) => {
  config.EPSILON = 1e-6;

  for (const vc in VIEWPORT_PROPS) {
    const viewport = new WebMercatorViewport(VIEWPORT_PROPS[vc]);
    for (const tc in VIEWPORT_PROPS) {
      const {longitude, latitude} = VIEWPORT_PROPS[tc];
      const lnglatIn = [longitude, latitude];

      let xy = viewport.project(lnglatIn, {topLeft: true});
      let lnglat = viewport.unproject(xy, {topLeft: true});
      t.comment(`Comparing [${lnglatIn}] to [${lnglat}]`);
      t.ok(equals(lnglatIn, lnglat), 'project with top-left coordinates');

      xy = viewport.project(lnglatIn, {topLeft: false});
      lnglat = viewport.unproject(xy, {topLeft: false});
      t.comment(`Comparing [${lnglatIn}] to [${lnglat}]`);
      t.ok(equals(lnglatIn, lnglat), 'project with bottom-left coordinates');
    }
  }
  t.end();
});

test('WebMercatorViewport.getLocationAtPoint', (t) => {
  config.EPSILON = 1e-6;
  const TEST_POS = [200, 200];

  for (const vc in VIEWPORT_PROPS) {
    const viewport = new WebMercatorViewport(VIEWPORT_PROPS[vc]);
    for (const tc in VIEWPORT_PROPS) {
      const lngLat = [VIEWPORT_PROPS[tc].longitude, VIEWPORT_PROPS[tc].latitude];

      const [newLng, newLat] = viewport.getLocationAtPoint({lngLat, pos: TEST_POS});

      const newViewport = new WebMercatorViewport(
        Object.assign({}, VIEWPORT_PROPS[vc], {
          longitude: newLng,
          latitude: newLat
        })
      );

      const xy = newViewport.project(lngLat);

      t.comment(`Comparing [${TEST_POS}] to [${xy}]`);
      t.ok(equals(TEST_POS, xy));
    }
  }
  t.end();
});
