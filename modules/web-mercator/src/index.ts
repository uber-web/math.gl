// Classic web-mercator-project
export {WebMercatorViewport} from './web-mercator-viewport';

export {getBounds} from './get-bounds';
export {fitBounds} from './fit-bounds';
export {normalizeViewportProps} from './normalize-viewport-props';
export {flyToViewport, getFlyToDuration} from './fly-to-viewport';

export {
  MAX_LATITUDE,
  lngLatToWorld,
  worldToLngLat,
  worldToPixels,
  pixelsToWorld,
  zoomToScale,
  scaleToZoom,
  altitudeToFovy,
  fovyToAltitude,
  getMeterZoom,
  unitsPerMeter,
  getDistanceScales,
  addMetersToLngLat,
  getViewMatrix,
  getProjectionMatrix,
  getProjectionParameters
} from './web-mercator-utils';

/** Types */
export type {FitBoundsOptions} from './fit-bounds';
export type {DistanceScales} from './web-mercator-utils';

/** @deprecated default export */
export {WebMercatorViewport as default} from './web-mercator-viewport';
