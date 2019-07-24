import {Vector3} from 'math.gl';
import {Intersect} from '../constants';

const scratchVector = new Vector3();
const scratchNormal = new Vector3();

/**
 * Creates an instance of an AxisAlignedBoundingBox from the minimum and maximum points along the x, y, and z axes.
 * @alias AxisAlignedBoundingBox
 * @constructor
 *
 * @param {Vector3} [minimum=0, 0, 0] The minimum point along the x, y, and z axes.
 * @param {Vector3} [maximum=0, 0, 0] The maximum point along the x, y, and z axes.
 * @param {Vector3} [center] The center of the box; automatically computed if not supplied.
 *
 * @see BoundingSphere
 * @see BoundingRectangle
 */
export default class AxisAlignedBoundingBox {
  constructor(minimum = [0, 0, 0], maximum = [0, 0, 0], center = null) {
    // If center was not defined, compute it.
    center =
      center ||
      scratchVector
        .copy(minimum)
        .add(maximum)
        .scale(0.5);

    /**
     * The minimum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */
    this.minimum = new Vector3(minimum);

    /**
     * The maximum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */
    this.maximum = new Vector3(maximum);

    /**
     * The center point of the bounding box.
     * @type {Vector3}
     */
    this.center = new Vector3(center);
  }

  /**
   * Computes an instance of an AxisAlignedBoundingBox. The box is determined by
   * finding the points spaced the farthest apart on the x, y, and z axes.
   *
   * @param {Vector3[]} positions List of points that the bounding box will enclose.  Each point must have a <code>x</code>, <code>y</code>, and <code>z</code> properties.
   * @param {AxisAlignedBoundingBox} [result] The object onto which to store the result.
   * @returns {AxisAlignedBoundingBox} The modified result parameter or a new AxisAlignedBoundingBox instance if one was not provided.
   *
   * @example
   * // Compute an axis aligned bounding box enclosing two points.
   * const box = Cesium.AxisAlignedBoundingBox.fromPoints([new Cesium.Vector3(2, 0, 0), new Cesium.Vector3(-2, 0, 0)]);
   */
  // eslint-disable-next-line
  fromPoints(positions) {
    if (!positions || positions.length === 0) {
      this.minimum.set(0, 0, 0);
      this.maximum.set(0, 0, 0);
      this.center.set(0, 0, 0);
      return this;
    }

    let minimumX = positions[0][0];
    let minimumY = positions[0][1];
    let minimumZ = positions[0][2];

    let maximumX = positions[0][0];
    let maximumY = positions[0][1];
    let maximumZ = positions[0][2];

    for (const p of positions) {
      const x = p[0];
      const y = p[1];
      const z = p[2];

      minimumX = Math.min(x, minimumX);
      maximumX = Math.max(x, maximumX);
      minimumY = Math.min(y, minimumY);
      maximumY = Math.max(y, maximumY);
      minimumZ = Math.min(z, minimumZ);
      maximumZ = Math.max(z, maximumZ);
    }

    this.minimum.set(minimumX, minimumY, minimumZ);
    this.maximum.set(maximumX, maximumY, maximumZ);
    this.center
      .copy(this.minimum)
      .add(this.maximum)
      .scale(0.5);

    return this;
  }

  /**
   * Duplicates a AxisAlignedBoundingBox instance.
   *
   * @returns {AxisAlignedBoundingBox} A new AxisAlignedBoundingBox instance.
   */
  clone() {
    return new AxisAlignedBoundingBox(this.minimum, this.maximum, this.center);
  }

  /**
   * Compares the provided AxisAlignedBoundingBox componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {AxisAlignedBoundingBox} [right] The second AxisAlignedBoundingBox to compare with.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  equals(right) {
    return (
      this === right ||
      (Boolean(right) &&
        this.center.equals(right.center) &&
        this.minimum.equals(right.minimum) &&
        this.maximum.equals(right.maximum))
    );
  }

  /**
   * Determines which side of a plane a box is located.
   *
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane
   *                      the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is
   *                      on the opposite side, and {@link Intersect.INTERSECTING} if the box
   *                      intersects the plane.
   */
  intersectPlane(plane) {
    const h = scratchVector
      .copy(this.maximum)
      .subtract(this.minimum)
      .scale(0.5); // The positive half diagonal
    const normal = scratchNormal.from(plane.normal);
    const e = h.x * Math.abs(normal.x) + h.y * Math.abs(normal.y) + h.z * Math.abs(normal.z);
    const s = this.center.dot(normal) + plane.distance; // signed distance from center

    if (s - e > 0) {
      return Intersect.INSIDE;
    }

    if (s + e < 0) {
      // Not in front because normals point inward
      return Intersect.OUTSIDE;
    }

    return Intersect.INTERSECTING;
  }
}
