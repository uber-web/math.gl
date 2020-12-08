export {default as Polygon} from './polygon';

export {
  getPolygonSignedArea,
  getPolygonSignedAreaFlat,
  getPolygonWindingDirection,
  getPolygonWindingDirectionFlat,
  forEachSegmentInPolygon,
  forEachSegmentInPolygonFlat,
  modifyPolygonWindingDirection,
  modifyPolygonWindingDirectionFlat,
  WINDING
} from './polygon-utils';

export {clipPolygon, clipPolyline} from './lineclip';

export {cutPolygonByGrid, cutPolylineByGrid} from './cut-by-grid';

export {cutPolylineByMercatorBounds, cutPolygonByMercatorBounds} from './cut-by-mercator-bounds';

// DEPRECATED
export {default as _Polygon} from './polygon';
