import {INTERSECTION_ENUM} from '../constants';
import BoundingSphere from './bounding-sphere';
import Plane from './plane';

// A culling volume defined by planes.
export default class CullingVolume {
  /**
   * For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
   * represents the case where the object bounding volume is entirely outside the culling volume.
   */
  static readonly MASK_OUTSIDE: number;

  /**
   * For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
   * represents the case where the object bounding volume is entirely inside the culling volume.
   */

  static readonly MASK_INSIDE: number;

  /**
   * For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
   * represents the case where the object bounding volume (may) intersect all planes of the culling volume.
   * */

  static readonly MASK_INDETERMINATE: number;

  /** Array of clipping planes. */
  readonly planes: Plane[];

  /**
   * Create a new `CullingVolume` bounded by an array of clipping planed
   * @param planes Array of clipping planes.
   * */

  constructor(planes?: Plane[]);

  /**
   *  Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
   * The planes are aligned to the x, y, and z axes in world coordinates.
   */
  fromBoundingSphere(boundingSphere: BoundingSphere): CullingVolume;

  /** Determines whether a bounding volume intersects the culling volume. */
  computeVisibility(boundingVolume): INTERSECTION_ENUM;

  /**
   * Determines whether a bounding volume intersects the culling volume.
   *
   * @param parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *   volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *   the parent (and therefore this) volume is completely inside plane[planeIndex]
   *   and that plane check can be skipped.
   */
  computeVisibilityWithPlaneMask(boundingVolume: object, parentPlaneMask: number): number;
}
