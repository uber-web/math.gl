export {default as BoundingVolume} from './lib/bounding-volumes/bounding-volume';
export {default as BoundingSphere} from './lib/bounding-volumes/bounding-sphere';
export {default as AxisAlignedBoundingBox} from './lib/bounding-volumes/axis-aligned-bounding-box';
export {default as OrientedBoundingBox} from './lib/bounding-volumes/oriented-bounding-box';

export {default as CullingVolume} from './lib/culling-volume';
export {default as Plane} from './lib/plane';

export {default as makeBoundingSphereFromPoints} from './lib/algorithms/bounding-sphere-from-points';
export {
  makeAxisAlignedBoundingBoxFromPoints,
  makeOrientedBoundingBoxFromPoints
} from './lib/algorithms/bounding-box-from-points';
export {default as computeEigenDecomposition} from './lib/algorithms/compute-eigen-decomposition';

// Experimental, decide how to handle enums in typescript
export {INTERSECTION_ENUM, INTERSECTION} from './constants';

export type _PerspectiveFrustum = object;
export type _PerspectiveOffCenterFrustum = object;
