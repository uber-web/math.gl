// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import {Vector3, assert} from '@math.gl/core';
import {INTERSECTION} from '../constants';
import Plane from './plane';
import type {BoundingVolume} from './bounding-volumes/bounding-volume';
import type BoundingSphere from './bounding-volumes/bounding-sphere';

// X, Y, Z Unit vectors
const faces = [new Vector3([1, 0, 0]), new Vector3([0, 1, 0]), new Vector3([0, 0, 1])];

const scratchPlaneCenter = new Vector3();
const scratchPlaneNormal = new Vector3();
const scratchPlane = new Plane(new Vector3(1.0, 0.0, 0.0), 0.0);

/** A culling volume defined by planes. */
export default class CullingVolume {
  /**
   * For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
   * represents the case where the object bounding volume is entirely outside the culling volume.
   */
  static MASK_OUTSIDE = 0xffffffff;

  /**
   * For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
   * represents the case where the object bounding volume is entirely inside the culling volume.
   */
  static MASK_INSIDE = 0x00000000;

  /**
   * For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
   * represents the case where the object bounding volume (may) intersect all planes of the culling volume.
   */
  static MASK_INDETERMINATE = 0x7fffffff;

  /** Array of clipping planes. */
  readonly planes: Plane[];

  /**
   * Create a new `CullingVolume` bounded by an array of clipping planed
   * @param planes Array of clipping planes.
   * */
  constructor(planes: Plane[] = []) {
    this.planes = planes;
  }

  /**
   * Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
   * The planes are aligned to the x, y, and z axes in world coordinates.
   */
  fromBoundingSphere(boundingSphere: BoundingSphere): CullingVolume {
    this.planes.length = 2 * faces.length;

    const center = boundingSphere.center;
    const radius = boundingSphere.radius;

    let planeIndex = 0;

    for (const faceNormal of faces) {
      let plane0 = this.planes[planeIndex];
      let plane1 = this.planes[planeIndex + 1];

      if (!plane0) {
        plane0 = this.planes[planeIndex] = new Plane();
      }
      if (!plane1) {
        plane1 = this.planes[planeIndex + 1] = new Plane();
      }

      const plane0Center = scratchPlaneCenter.copy(faceNormal).scale(-radius).add(center);
      const plane0Distance = -faceNormal.dot(plane0Center);

      plane0.fromPointNormal(plane0Center, faceNormal);

      const plane1Center = scratchPlaneCenter.copy(faceNormal).scale(radius).add(center);

      const negatedFaceNormal = scratchPlaneNormal.copy(faceNormal).negate();

      const plane1Distance = -negatedFaceNormal.dot(plane1Center);

      plane1.fromPointNormal(plane1Center, negatedFaceNormal);

      planeIndex += 2;
    }

    return this;
  }

  /** Determines whether a bounding volume intersects the culling volume. */
  computeVisibility(boundingVolume: BoundingVolume): number {
    // const planes = this.planes;
    let intersect: number = INTERSECTION.INSIDE;
    for (const plane of this.planes) {
      const result = boundingVolume.intersectPlane(plane);
      switch (result) {
        case INTERSECTION.OUTSIDE:
          // We are done
          return INTERSECTION.OUTSIDE;

        case INTERSECTION.INTERSECTING:
          // If no other intersection is outside, return INTERSECTING
          intersect = INTERSECTION.INTERSECTING;
          break;

        default:
      }
    }

    return intersect;
  }

  /**
   * Determines whether a bounding volume intersects the culling volume.
   *
   * @param parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *   volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *   the parent (and therefore this) volume is completely inside plane[planeIndex]
   *   and that plane check can be skipped.
   */
  computeVisibilityWithPlaneMask(boundingVolume: BoundingVolume, parentPlaneMask: number): number {
    assert(Number.isFinite(parentPlaneMask), 'parentPlaneMask is required.');

    if (
      parentPlaneMask === CullingVolume.MASK_OUTSIDE ||
      parentPlaneMask === CullingVolume.MASK_INSIDE
    ) {
      // parent is completely outside or completely inside, so this child is as well.
      return parentPlaneMask;
    }

    // Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
    // (Because if there are fewer than 31 planes, the upper bits wont be changed.)
    let mask = CullingVolume.MASK_INSIDE;

    const planes = this.planes;
    for (let k = 0; k < this.planes.length; ++k) {
      // For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
      const flag = k < 31 ? 1 << k : 0;
      if (k < 31 && (parentPlaneMask & flag) === 0) {
        // boundingVolume is known to be INSIDE this plane.
        continue;
      }

      const plane = planes[k];
      const result = boundingVolume.intersectPlane(plane);
      if (result === INTERSECTION.OUTSIDE) {
        return CullingVolume.MASK_OUTSIDE;
      } else if (result === INTERSECTION.INTERSECTING) {
        mask |= flag;
      }
    }

    return mask;
  }
}
