// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported

import {Vector3, Matrix4, assert} from 'math.gl';
import CullingVolume from './culling-volume';
import Plane from './plane';

const scratchPlaneUpVector = new Vector3();
const scratchPlaneRightVector = new Vector3();
const scratchPlaneNearCenter = new Vector3();
const scratchPlaneFarCenter = new Vector3();
const scratchPlaneNormal = new Vector3();

export default class PerspectiveOffCenterFrustum {
  /**
   * The viewing frustum is defined by 6 planes.
   * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
   * define the unit vector normal to the plane, and the w component is the distance of the
   * plane from the origin/camera position.
   *
   * @alias PerspectiveOffCenterFrustum
   * @constructor
   *
   * @param {Object} [options] An object with the following properties:
   * @param {Number} [options.left] The left clipping plane distance.
   * @param {Number} [options.right] The right clipping plane distance.
   * @param {Number} [options.top] The top clipping plane distance.
   * @param {Number} [options.bottom] The bottom clipping plane distance.
   * @param {Number} [options.near=1.0] The near clipping plane distance.
   * @param {Number} [options.far=500000000.0] The far clipping plane distance.
   *
   * @example
   * const frustum = new PerspectiveOffCenterFrustum({
   *     left : -1.0,
   *     right : 1.0,
   *     top : 1.0,
   *     bottom : -1.0,
   *     near : 1.0,
   *     far : 100.0
   * });
   *
   * @see PerspectiveFrustum
   */
  constructor(options = {}) {
    options = {near: 1.0, far: 500000000.0, ...options};

    /**
     * Defines the left clipping plane.
     * @type {Number}
     * @default undefined
     */
    this.left = options.left;
    this._left = undefined;

    /**
     * Defines the right clipping plane.
     * @type {Number}
     * @default undefined
     */
    this.right = options.right;
    this._right = undefined;

    /**
     * Defines the top clipping plane.
     * @type {Number}
     * @default undefined
     */
    this.top = options.top;
    this._top = undefined;

    /**
     * Defines the bottom clipping plane.
     * @type {Number}
     * @default undefined
     */
    this.bottom = options.bottom;
    this._bottom = undefined;

    /**
     * The distance of the near plane.
     * @type {Number}
     * @default 1.0
     */
    this.near = options.near;
    this._near = this.near;

    /**
     * The distance of the far plane.
     * @type {Number}
     * @default 500000000.0
     */
    this.far = options.far;
    this._far = this.far;

    this._cullingVolume = new CullingVolume([
      new Plane(),
      new Plane(),
      new Plane(),
      new Plane(),
      new Plane(),
      new Plane()
    ]);
    this._perspectiveMatrix = new Matrix4();
    this._infinitePerspective = new Matrix4();
  }

  /**
   * Returns a duplicate of a PerspectiveOffCenterFrustum instance.
   * @returns {PerspectiveOffCenterFrustum} A new PerspectiveFrustum instance.
   * */
  clone() {
    return new PerspectiveOffCenterFrustum({
      right: this.right,
      left: this.left,
      top: this.top,
      bottom: this.bottom,
      near: this.near,
      far: this.far
    });
  }

  /**
   * Compares the provided PerspectiveOffCenterFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveOffCenterFrustum} [other] The right hand side PerspectiveOffCenterFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(other) {
    return (
      other &&
      other instanceof PerspectiveOffCenterFrustum &&
      this.right === other.right &&
      this.left === other.left &&
      this.top === other.top &&
      this.bottom === other.bottom &&
      this.near === other.near &&
      this.far === other.far
    );
  }

  /**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#infiniteProjectionMatrix
   */
  get projectionMatrix() {
    update(this);
    return this._perspectiveMatrix;
  }

  /**
   * Gets the perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#projectionMatrix
   */
  get infiniteProjectionMatrix() {
    update(this);
    return this._infinitePerspective;
  }

  /**
   * Creates a culling volume for this frustum.
   *
   * @param {Vector3} position The eye position.
   * @param {Vector3} direction The view direction.
   * @param {Vector3} up The up direction.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * const cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * const intersect = cullingVolume.computeVisibility(boundingVolume);
   */
  // eslint-disable-next-line complexity, max-statements
  computeCullingVolume(position, direction, up) {
    assert(position, 'position is required.');
    assert(direction, 'direction is required.');
    assert(up, 'up is required.');

    const planes = this._cullingVolume.planes;

    up = scratchPlaneUpVector.copy(up).normalize();
    const right = scratchPlaneRightVector
      .copy(direction)
      .cross(up)
      .normalize();

    const nearCenter = scratchPlaneNearCenter
      .copy(direction)
      .multiplyByScalar(this.near)
      .add(position);

    const farCenter = scratchPlaneFarCenter
      .copy(direction)
      .multiplyByScalar(this.far)
      .add(position);

    let normal = scratchPlaneNormal;

    // Left plane computation
    normal
      .copy(right)
      .multiplyByScalar(this.left)
      .add(nearCenter)
      .subtract(position)
      .cross(up);

    planes[0].fromPointNormal(position, normal);

    // Right plane computation
    normal
      .copy(right)
      .multiplyByScalar(this.right)
      .add(nearCenter)
      .subtract(position)
      .cross(up)
      .negate();

    planes[1].fromPointNormal(position, normal);

    // Bottom plane computation
    normal
      .copy(up)
      .multiplyByScalar(this.bottom)
      .add(nearCenter)
      .subtract(position)
      .cross(right)
      .negate();

    planes[2].fromPointNormal(position, normal);

    // Top plane computation
    normal
      .copy(up)
      .multiplyByScalar(this.top)
      .add(nearCenter)
      .subtract(position)
      .cross(right);

    planes[3].fromPointNormal(position, normal);

    normal = new Vector3().copy(direction);

    // Near plane computation
    planes[4].fromPointNormal(nearCenter, normal);

    // Far plane computation
    normal.negate();

    planes[5].fromPointNormal(farCenter, normal);

    return this._cullingVolume;
  }

  /**
   * Returns the pixel's width and height in meters.
   *
   * @param {Number} drawingBufferWidth The width of the drawing buffer.
   * @param {Number} drawingBufferHeight The height of the drawing buffer.
   * @param {Number} distance The distance to the near plane in meters.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * const position = camera.position;
   * const direction = camera.direction;
   * const toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * const toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * const distance = Vector3.magnitude(toCenterProj);
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */
  getPixelDimensions(drawingBufferWidth, drawingBufferHeight, distance, result) {
    update(this);

    assert(Number.isFinite(drawingBufferWidth) && Number.isFinite(drawingBufferHeight));
    // 'Both drawingBufferWidth and drawingBufferHeight are required.'
    assert(drawingBufferWidth > 0);
    // 'drawingBufferWidth must be greater than zero.'
    assert(drawingBufferHeight > 0);
    // 'drawingBufferHeight must be greater than zero.'
    assert(distance > 0);
    // 'distance is required.');
    assert(result);
    // 'A result object is required.');

    const inverseNear = 1.0 / this.near;
    let tanTheta = this.top * inverseNear;
    const pixelHeight = (2.0 * distance * tanTheta) / drawingBufferHeight;
    tanTheta = this.right * inverseNear;
    const pixelWidth = (2.0 * distance * tanTheta) / drawingBufferWidth;

    result.x = pixelWidth;
    result.y = pixelHeight;
    return result;
  }
}

// eslint-disable-next-line complexity, max-statements
function update(frustum) {
  assert(
    Number.isFinite(frustum.right) &&
      Number.isFinite(frustum.left) &&
      Number.isFinite(frustum.top) &&
      Number.isFinite(frustum.bottom) &&
      Number.isFinite(frustum.near) &&
      Number.isFinite(frustum.far)
  );
  // throw new DeveloperError('right, left, top, bottom, near, or far parameters are not set.');

  const {top, bottom, right, left, near, far} = frustum;

  if (
    top !== frustum._top ||
    bottom !== frustum._bottom ||
    left !== frustum._left ||
    right !== frustum._right ||
    near !== frustum._near ||
    far !== frustum._far
  ) {
    assert(
      frustum.near > 0 && frustum.near < frustum.far,
      'near must be greater than zero and less than far.'
    );

    frustum._left = left;
    frustum._right = right;
    frustum._top = top;
    frustum._bottom = bottom;
    frustum._near = near;
    frustum._far = far;
    frustum._perspectiveMatrix = new Matrix4().frustum({
      left,
      right,
      bottom,
      top,
      near,
      far
    });
    frustum._infinitePerspective = new Matrix4().frustum({
      left,
      right,
      bottom,
      top,
      near,
      far: Infinity
    });
  }
}
