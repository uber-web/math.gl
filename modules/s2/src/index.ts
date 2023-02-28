// math.gl MIT license

export {getIdFromToken, getGeoBounds, getS2QuadKey, getS2Polygon} from './s2-utils';

export {
  getTokenFromId,
  getS2ChildCellId,
  getS2CellFromToken,
  get2dRegionFromS2Cell
} from './s2-utils-ext';

export type {S2HeightInfo} from './s2-to-obb-points';
export {getOrientedBoundingBoxCornerPoints} from './s2-to-obb-points';
