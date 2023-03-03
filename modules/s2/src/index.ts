// math.gl MIT license

export {getS2IndexFromToken, getS2TokenFromIndex, getS2ChildIndex} from './s2-token-functions';
export {getS2BoundaryFlat} from './s2-geometry-functions';

export {getS2Cell as _getS2Cell} from './s2geometry/s2-cell-utils';
export {toHilbertQuadkey as _toHilbertQuadKey} from './s2geometry/s2-geometry';

export {getS2GeoBounds as _getS2GeoBounds} from './converters/s2-to-boundary';
export {getS2Region as _getS2Region} from './converters/s2-to-region';

export type {S2HeightInfo} from './converters/s2-to-obb-points';
export {getS2OrientedBoundingBoxCornerPoints as _getS2OrientedBoundingBoxCornerPoints} from './converters/s2-to-obb-points';
