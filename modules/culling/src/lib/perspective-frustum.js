// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported

import {assert} from 'math.gl';
import PerspectiveOffCenterFrustum from './perspective-off-center-frustum';

const defined = val => val !== null && typeof val !== 'undefined';

/**
 * The viewing frustum is defined by 6 planes.
 * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
 * define the unit vector normal to the plane, and the w component is the distance of the
 * plane from the origin/camera position.
 *
 * @alias PerspectiveFrustum
 * @constructor
 *
 * @param {Object} [options] An object with the following properties:
 * @param {Number} [options.fov] The angle of the field of view (FOV), in radians.
 * @param {Number} [options.aspectRatio] The aspect ratio of the frustum's width to it's height.
 * @param {Number} [options.near=1.0] The distance of the near plane.
 * @param {Number} [options.far=500000000.0] The distance of the far plane.
 * @param {Number} [options.xOffset=0.0] The offset in the x direction.
 * @param {Number} [options.yOffset=0.0] The offset in the y direction.
 *
 * @example
 * var frustum = new PerspectiveFrustum({
 *     fov : Math.PI_OVER_THREE,
 *     aspectRatio : canvas.clientWidth / canvas.clientHeight
 *     near : 1.0,
 *     far : 1000.0
 * });
 *
 * @see PerspectiveOffCenterFrustum
 */
export default class PerspectiveFrustum {
  constructor(options = {}) {
    options = {
      near: 1.0,
      far: 500000000.0,
      xOffset: 0.0,
      yOffset: 0.0,
      ...options
    };

    this._offCenterFrustum = new PerspectiveOffCenterFrustum();

    /**
     * The angle of the field of view (FOV), in radians.  This angle will be used
     * as the horizontal FOV if the width is greater than the height, otherwise
     * it will be the vertical FOV.
     * @type {Number}
     * @default undefined
     */
    this.fov = options.fov;
    this._fov = undefined;
    this._fovy = undefined;

    this._sseDenominator = undefined;

    /**
     * The aspect ratio of the frustum's width to it's height.
     * @type {Number}
     * @default undefined
     */
    this.aspectRatio = options.aspectRatio;
    this._aspectRatio = undefined;

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

    /**
     * Offsets the frustum in the x direction.
     * @type {Number}
     * @default 0.0
     */
    this.xOffset = options.xOffset;
    this._xOffset = this.xOffset;

    /**
     * Offsets the frustum in the y direction.
     * @type {Number}
     * @default 0.0
     */
    this.yOffset = options.yOffset;
    this._yOffset = this.yOffset;
  }

  /**
   * Returns a duplicate of a PerspectiveFrustum instance.
   *
   * @param {PerspectiveFrustum} [result] The object onto which to store the result.
   * @returns {PerspectiveFrustum} The modified result parameter or a new PerspectiveFrustum instance if one was not provided.
   */
  clone() {
    return new PerspectiveFrustum({
      aspectRatio: this.aspectRatio,
      fov: this.fov,
      near: this.near,
      far: this.far
    });
  }

  /**
   * Compares the provided PerspectiveFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveFrustum} [other] The right hand side PerspectiveFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(other) {
    if (!defined(other) || !(other instanceof PerspectiveFrustum)) {
      return false;
    }

    update(this);
    update(other);

    return (
      this.fov === other.fov &&
      this.aspectRatio === other.aspectRatio &&
      this.near === other.near &&
      this.far === other.far &&
      this._offCenterFrustum.equals(other._offCenterFrustum)
    );
  }

  /**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#infiniteProjectionMatrix
   */
  get projectionMatrix() {
    update(this);
    return this._offCenterFrustum.projectionMatrix;
  }

  /**
   * The perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#projectionMatrix
   */
  get infiniteProjectionMatrix() {
    update(this);
    return this._offCenterFrustum.infiniteProjectionMatrix;
  }

  /**
   * Gets the angle of the vertical field of view, in radians.
   * @memberof PerspectiveFrustum.prototype
   * @type {Number}
   * @readonly
   * @default undefined
   */
  get fovy() {
    update(this);
    return this._fovy;
  }

  /**
   * @readonly
   * @private
   */
  get sseDenominator() {
    update(this);
    return this._sseDenominator;
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
   * var cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * var intersect = cullingVolume.computeVisibility(boundingVolume);
   */
  computeCullingVolume(position, direction, up) {
    update(this);
    return this._offCenterFrustum.computeCullingVolume(position, direction, up);
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
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * var position = camera.position;
   * var direction = camera.direction;
   * var toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * var toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * var distance = Vector3.magnitude(toCenterProj);
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */
  getPixelDimensions(drawingBufferWidth, drawingBufferHeight, distance, result) {
    update(this);
    return this._offCenterFrustum.getPixelDimensions(
      drawingBufferWidth,
      drawingBufferHeight,
      distance,
      result
    );
  }
}

// eslint-disable-next-line complexity, max-statements
function update(frustum) {
  assert(
    Number.isFinite(frustum.fov) &&
      Number.isFinite(frustum.aspectRatio) &&
      Number.isFinite(frustum.near) &&
      Number.isFinite(frustum.far)
  );
  // 'fov, aspectRatio, near, or far parameters are not set.'

  const f = frustum._offCenterFrustum;

  if (
    frustum.fov !== frustum._fov ||
    frustum.aspectRatio !== frustum._aspectRatio ||
    frustum.near !== frustum._near ||
    frustum.far !== frustum._far ||
    frustum.xOffset !== frustum._xOffset ||
    frustum.yOffset !== frustum._yOffset
  ) {
    assert(frustum.fov >= 0 && frustum.fov < Math.PI);
    // throw new DeveloperError('fov must be in the range [0, PI).');

    assert(frustum.aspectRatio > 0);
    // throw new DeveloperError('aspectRatio must be positive.');

    assert(frustum.near >= 0 && frustum.near < frustum.far);
    // throw new DeveloperError('near must be greater than zero and less than far.');

    frustum._aspectRatio = frustum.aspectRatio;
    frustum._fov = frustum.fov;
    frustum._fovy =
      frustum.aspectRatio <= 1
        ? frustum.fov
        : Math.atan(Math.tan(frustum.fov * 0.5) / frustum.aspectRatio) * 2.0;
    frustum._near = frustum.near;
    frustum._far = frustum.far;
    frustum._sseDenominator = 2.0 * Math.tan(0.5 * frustum._fovy);
    frustum._xOffset = frustum.xOffset;
    frustum._yOffset = frustum.yOffset;

    f.top = frustum.near * Math.tan(0.5 * frustum._fovy);
    f.bottom = -f.top;
    f.right = frustum.aspectRatio * f.top;
    f.left = -f.right;
    f.near = frustum.near;
    f.far = frustum.far;

    f.right += frustum.xOffset;
    f.left += frustum.xOffset;
    f.top += frustum.yOffset;
    f.bottom += frustum.yOffset;
  }
}
