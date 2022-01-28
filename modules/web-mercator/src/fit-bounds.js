// @ts-nocheck TODO padding
import assert from './assert';
import {log2, clamp} from './math-utils';
import {MAX_LATITUDE, lngLatToWorld, worldToLngLat} from './web-mercator-utils';

// Returns map settings {latitude, longitude, zoom}
// that will contain the provided corners within the provided width.
// Only supports non-perspective mode.

export default function fitBounds({
  width,
  height,
  bounds,
  minExtent = 0, // 0.01 would be about 1000 meters (degree is ~110KM)
  maxZoom = 24, // ~x4,000,000 => About 10 meter extents
  // options
  padding = 0,
  offset = [0, 0]
}) {
  const [[west, south], [east, north]] = bounds;

  if (Number.isFinite(padding)) {
    const p = padding;
    padding = {
      top: p,
      bottom: p,
      left: p,
      right: p
    };
  } else {
    // Make sure all the required properties are set
    assert(
      Number.isFinite(padding.top) &&
        Number.isFinite(padding.bottom) &&
        Number.isFinite(padding.left) &&
        Number.isFinite(padding.right)
    );
  }

  const nw = lngLatToWorld([west, clamp(north, -MAX_LATITUDE, MAX_LATITUDE)]);
  const se = lngLatToWorld([east, clamp(south, -MAX_LATITUDE, MAX_LATITUDE)]);

  // width/height on the Web Mercator plane
  const size = [
    Math.max(Math.abs(se[0] - nw[0]), minExtent),
    Math.max(Math.abs(se[1] - nw[1]), minExtent)
  ];

  const targetSize = [
    width - padding.left - padding.right - Math.abs(offset[0]) * 2,
    height - padding.top - padding.bottom - Math.abs(offset[1]) * 2
  ];

  assert(targetSize[0] > 0 && targetSize[1] > 0);

  // scale = screen pixels per unit on the Web Mercator plane
  const scaleX = targetSize[0] / size[0];
  const scaleY = targetSize[1] / size[1];

  // Find how much we need to shift the center
  const offsetX = (padding.right - padding.left) / 2 / scaleX;
  const offsetY = (padding.bottom - padding.top) / 2 / scaleY;

  const center = [(se[0] + nw[0]) / 2 + offsetX, (se[1] + nw[1]) / 2 + offsetY];

  const centerLngLat = worldToLngLat(center);
  const zoom = Math.min(maxZoom, log2(Math.abs(Math.min(scaleX, scaleY))));

  assert(Number.isFinite(zoom));

  return {
    longitude: centerLngLat[0],
    latitude: centerLngLat[1],
    zoom
  };
}
