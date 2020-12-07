export {default as Polygon} from './polygon';

export {
  getPolygonSignedArea,
  getPolygonSignedAreaFlat,
  getPolygonWindingDirection,
  getPolygonWindingDirectionFlat,
  forEachSegmentInPolygon,
  forEachSegmentInPolygonFlat,
  ensurePolygonWindingDirection,
  ensurePolygonWindingDirectionFlat,
  WINDING_CLOCKWISE,
  WINDING_COUNTER_CLOCKWISE
} from './polygon-utilities';

export {clipPolygon, clipPolyline} from './lineclip';

export {cutPolygonByGrid, cutPolylineByGrid} from './cut-by-grid';

export {cutPolylineByMercatorBounds, cutPolygonByMercatorBounds} from './cut-by-mercator-bounds';

// DEPRECATED
export {default as _Polygon} from './polygon';
