import destination from '@turf/destination';
import {lngLatToWorld, getDistanceScales} from 'viewport-mercator-project';
import test from 'tape-catch';

import VIEWPORT_PROPS from './utils/sample-viewports';

function getDiff(value, baseValue) {
  const errorPixels = value.map((v, i) => Math.abs(v - baseValue[i]));
  const error = value.map(
    (v, i) => Math.abs(v - baseValue[i]) / Math.min(Math.abs(v), Math.abs(baseValue[i]))
  );

  return {
    errorPixels,
    error,
    message: `off by \
      (${errorPixels.map(d => d.toFixed(3)).join(', ')}) pixels, \
      (${error.map(d => `${(d * 100).toFixed(3)}%`).join(', ')})`
  };
}

// eslint-disable-next-line max-statements
test('FP32 & Offset Comparison', t => {
  // Explore limits at different scales
  for (let zoom = 1; zoom <= 20; zoom++) {
    const scale = Math.pow(2, zoom);
    t.comment('--------');
    t.comment(`Zoom = ${zoom}, Scale = ${scale}`);

    for (const vc in VIEWPORT_PROPS) {
      t.comment(vc);
      const props = VIEWPORT_PROPS[vc];
      const {longitude, latitude} = props;

      // Test distance from one edge of the viewport to the other
      // TODO: Find better way to do "one edge of the viewport to the other"
      const delta = Math.pow(2, 20 - zoom) * 50;
      t.comment(`R = ${delta} meters`);

      let point = [longitude, latitude];
      // turf unit is kilometers
      point = destination(point, (delta / 1000) * Math.sqrt(2), 45).geometry.coordinates;

      // Calculate real position
      const realPixelPos = [
        lngLatToWorld(point, scale)[0] - lngLatToWorld([longitude, latitude], scale)[0],
        -(lngLatToWorld(point, scale)[1] - lngLatToWorld([longitude, latitude], scale)[1])
      ];

      // Calculate using FP32 mode
      const longitudeFP32 = Math.fround(longitude);
      const latitudeFP32 = Math.fround(latitude);
      const pointFP32 = point.map(f => Math.fround(f));
      const coordsFP32 = [
        Math.fround(lngLatToWorld(pointFP32, scale)[0]) -
          Math.fround(lngLatToWorld([longitudeFP32, latitudeFP32], scale)[0]),
        -(
          Math.fround(lngLatToWorld(pointFP32, scale)[1]) -
          Math.fround(lngLatToWorld([longitudeFP32, latitudeFP32], scale)[1])
        )
      ];

      t.comment(`- Absolute Coordinates FP32: ${getDiff(coordsFP32, realPixelPos).message}`);

      // Calculate using FP32+64 mixed offset mode (NEW WAY IN DECK.GL 6.0)
      // Select center point (the center is in 32-bit coords)
      const centerPointFP32 = [longitude, latitude].map(f => Math.fround(f));
      const {unitsPerDegree, unitsPerDegree2} = getDistanceScales({
        longitude: centerPointFP32[0],
        latitude: centerPointFP32[1],
        highPrecision: true
      });
      // these are passed as FP32
      const unitsPerDegreeFP32 = unitsPerDegree.map(f => Math.fround(f));
      const unitsPerDegree2FP32 = unitsPerDegree2.map(f => Math.fround(f));
      // Only the offset is FP64
      const offsetFP64 = [point[0] - centerPointFP32[0], point[1] - centerPointFP32[1]];

      // To pixels
      const offsetPixelPos = [
        offsetFP64[0] * (unitsPerDegreeFP32[0] + unitsPerDegree2FP32[0] * offsetFP64[0]) * scale,
        offsetFP64[1] * (unitsPerDegreeFP32[1] + unitsPerDegree2FP32[1] * offsetFP64[1]) * scale
      ];

      // We need to recalculate the "real" one because we re-centered
      const realPixelPos2 = [
        lngLatToWorld(point, scale)[0] -
          lngLatToWorld([centerPointFP32[0], centerPointFP32[1]], scale)[0],
        -(
          lngLatToWorld(point, scale)[1] -
          lngLatToWorld([centerPointFP32[0], centerPointFP32[1]], scale)[1]
        )
      ];

      t.comment(`- Offset Coordinates FP32+64: ${getDiff(offsetPixelPos, realPixelPos2).message}`);
    }
  }
  t.end();
});
