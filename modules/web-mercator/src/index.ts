// Classic web-mercator-project
export {default} from './web-mercator-viewport';
export {default as WebMercatorViewport} from './web-mercator-viewport';

export {default as getBounds} from './get-bounds';
export {default as fitBounds} from './fit-bounds';
export {default as normalizeViewportProps} from './normalize-viewport-props';
export {default as flyToViewport, getFlyToDuration} from './fly-to-viewport';

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
