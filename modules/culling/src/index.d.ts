export {default as AxisAlignedBoundingBox} from './lib/axis-aligned-bounding-box';
export {default as BoundingSphere} from './lib/bounding-sphere';
export {default as CullingVolume} from './lib/culling-volume';
export {default as OrientedBoundingBox} from './lib/oriented-bounding-box';
export {default as Plane} from './lib/plane';

export {default as makeBoundingSphereFromPoints} from './algorithms/bounding-sphere-from-points';
export {
  makeAxisAlignedBoundingBoxFromPoints,
  makeOrientedBoundingBoxFromPoints
} from './algorithms/bounding-box-from-points';
export {default as computeEigenDecomposition} from './algorithms/compute-eigen-decomposition';

// Experimental, decide how to handle enums in typescript
export {INTERSECTION_ENUM, INTERSECTION} from './constants';

export type _PerspectiveFrustum = object;
export type _PerspectiveOffCenterFrustum = object;
