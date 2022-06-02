// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported

import {assert, Matrix4, NumericArray, Vector2} from '@math.gl/core';
import PerspectiveOffCenterFrustum from './perspective-off-center-frustum';
import CullingVolume from './culling-volume';

const defined = (val) => val !== null && typeof val !== 'undefined';

type PerspectiveFrustumOptions = {
  /** The angle of the field of view (FOV), in radians. */
  fov?: number;
  /** The aspect ratio of the frustum's width to it's height. */
  aspectRatio?: number;
  /** The distance of the near plane. */
  near?: number;
  /** The distance of the far plane. */
  far?: number;
  /** The offset in the x direction. */
  xOffset?: number;
  /** The offset in the y direction. */
  yOffset?: number;
};

/**
 * The viewing frustum is defined by 6 planes.
 * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
 * define the unit vector normal to the plane, and the w component is the distance of the
 * plane from the origin/camera position.
 *
 * @alias PerspectiveFrustum
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
  private _offCenterFrustum = new PerspectiveOffCenterFrustum();
  /**
   * The angle of the field of view (FOV), in radians.  This angle will be used
   * as the horizontal FOV if the width is greater than the height, otherwise
   * it will be the vertical FOV.
   */
  fov?: number;
  private _fov: number;
  private _fovy: number;
  private _sseDenominator: number;
  /**
   * The aspect ratio of the frustum's width to it's height.
   */
  aspectRatio?: number;
  private _aspectRatio: number;
  /**
   * The distance of the near plane.
   * @default 1.0
   */
  near: number;
  private _near: number;
  /**
   * The distance of the far plane.
   * @default 500000000.0
   */
  far: number;
  private _far: number;
  /**
   * Offsets the frustum in the x direction.
   * @default 0.0
   */
  xOffset: number;
  private _xOffset: number;
  /**
   * Offsets the frustum in the y direction.
   * @default 0.0
   */
  yOffset: number;
  private _yOffset: number;

  constructor(options: PerspectiveFrustumOptions = {}) {
    const {fov, aspectRatio, near = 1.0, far = 500000000.0, xOffset = 0.0, yOffset = 0.0} = options;

    this.fov = fov;
    this.aspectRatio = aspectRatio;
    this.near = near;
    this.far = far;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }

  /**
   * Returns a duplicate of a PerspectiveFrustum instance.
   */
  clone(): PerspectiveFrustum {
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
   */
  equals(other: PerspectiveFrustum): boolean {
    if (!defined(other) || !(other instanceof PerspectiveFrustum)) {
      return false;
    }

    this._update();
    other._update();

    return (
      this.fov === other.fov &&
      this.aspectRatio === other.aspectRatio &&
      this.near === other.near &&
      this.far === other.far &&
      this._offCenterFrustum.equals(other._offCenterFrustum)
    );
  }

  /**
   * Gets the perspective projection matrix computed from the view this.
   */
  get projectionMatrix(): Matrix4 {
    this._update();
    return this._offCenterFrustum.projectionMatrix;
  }

  /**
   * The perspective projection matrix computed from the view frustum with an infinite far plane.
   */
  get infiniteProjectionMatrix(): Matrix4 {
    this._update();
    return this._offCenterFrustum.infiniteProjectionMatrix;
  }

  /**
   * Gets the angle of the vertical field of view, in radians.
   */
  get fovy(): number {
    this._update();
    return this._fovy;
  }

  /**
   * @private
   */
  get sseDenominator(): number {
    this._update();
    return this._sseDenominator;
  }

  /**
   * Creates a culling volume for this this.ion.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the this.
   * var cullingVolume = this.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * var intersect = cullingVolume.computeVisibility(boundingVolume);
   */
  computeCullingVolume(
    /** A Vector3 defines the eye position. */
    position: Readonly<NumericArray>,
    /** A Vector3 defines the view direction. */
    direction: Readonly<NumericArray>,
    /** A Vector3 defines the up direction. */
    up: Readonly<NumericArray>
  ): CullingVolume {
    this._update();
    return this._offCenterFrustum.computeCullingVolume(position, direction, up);
  }

  /**
   * Returns the pixel's width and height in meters.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * var pixelSize = camera.this.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
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
   * var pixelSize = camera.this.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */
  getPixelDimensions(
    /** The width of the drawing buffer. */
    drawingBufferWidth: number,
    /** The height of the drawing buffer. */
    drawingBufferHeight: number,
    /** The distance to the near plane in meters. */
    distance: number,
    /** The object onto which to store the result. */
    result?: Vector2
  ): Vector2 {
    this._update();
    return this._offCenterFrustum.getPixelDimensions(
      drawingBufferWidth,
      drawingBufferHeight,
      distance,
      result || new Vector2()
    );
  }

  // eslint-disable-next-line complexity, max-statements
  private _update(): void {
    assert(
      Number.isFinite(this.fov) &&
        Number.isFinite(this.aspectRatio) &&
        Number.isFinite(this.near) &&
        Number.isFinite(this.far)
    );
    // 'fov, aspectRatio, near, or far parameters are not set.'

    const f = this._offCenterFrustum;

    if (
      this.fov !== this._fov ||
      this.aspectRatio !== this._aspectRatio ||
      this.near !== this._near ||
      this.far !== this._far ||
      this.xOffset !== this._xOffset ||
      this.yOffset !== this._yOffset
    ) {
      assert(this.fov >= 0 && this.fov < Math.PI);
      // throw new DeveloperError('fov must be in the range [0, PI).');

      assert(this.aspectRatio > 0);
      // throw new DeveloperError('aspectRatio must be positive.');

      assert(this.near >= 0 && this.near < this.far);
      // throw new DeveloperError('near must be greater than zero and less than far.');

      this._aspectRatio = this.aspectRatio;
      this._fov = this.fov;
      this._fovy =
        this.aspectRatio <= 1
          ? this.fov
          : Math.atan(Math.tan(this.fov * 0.5) / this.aspectRatio) * 2.0;
      this._near = this.near;
      this._far = this.far;
      this._sseDenominator = 2.0 * Math.tan(0.5 * this._fovy);
      this._xOffset = this.xOffset;
      this._yOffset = this.yOffset;

      f.top = this.near * Math.tan(0.5 * this._fovy);
      f.bottom = -f.top;
      f.right = this.aspectRatio * f.top;
      f.left = -f.right;
      f.near = this.near;
      f.far = this.far;

      f.right += this.xOffset;
      f.left += this.xOffset;
      f.top += this.yOffset;
      f.bottom += this.yOffset;
    }
  }
}
