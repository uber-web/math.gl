// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported

import {Vector3, Vector2, Matrix4, assert, NumericArray} from '@math.gl/core';
import CullingVolume from './culling-volume';
import Plane from './plane';

const scratchPlaneUpVector = new Vector3();
const scratchPlaneRightVector = new Vector3();
const scratchPlaneNearCenter = new Vector3();
const scratchPlaneFarCenter = new Vector3();
const scratchPlaneNormal = new Vector3();

type PerspectiveOffCenterFrustumOptions = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  near?: number;
  far?: number;
};

export default class PerspectiveOffCenterFrustum {
  /**
   * Defines the left clipping plane.
   * @type {Number}
   * @default undefined
   */
  left?: number;
  private _left?: number;
  /**
   * Defines the right clipping plane.
   * @type {Number}
   * @default undefined
   */
  right?: number;
  private _right?: number;
  /**
   * Defines the top clipping plane.
   * @type {Number}
   * @default undefined
   */
  top?: number;
  private _top?: number;
  /**
   * Defines the bottom clipping plane.
   * @type {Number}
   * @default undefined
   */
  bottom?: number;
  private _bottom?: number;
  /**
   * The distance of the near plane.
   * @type {Number}
   * @default 1.0
   */
  near: number;
  private _near: number;
  /**
   * The distance of the far plane.
   * @type {Number}
   * @default 500000000.0
   */
  far: number;
  private _far: number;

  private _cullingVolume = new CullingVolume([
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane(),
    new Plane()
  ]);
  private _perspectiveMatrix = new Matrix4();
  private _infinitePerspective = new Matrix4();

  /**
   * The viewing frustum is defined by 6 planes.
   * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
   * define the unit vector normal to the plane, and the w component is the distance of the
   * plane from the origin/camera position.
   *
   * @alias PerspectiveOffCenterFrustum
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
  constructor(options: PerspectiveOffCenterFrustumOptions = {}) {
    const {near = 1.0, far = 500000000.0} = options;

    this.left = options.left;
    this._left = undefined;

    this.right = options.right;
    this._right = undefined;

    this.top = options.top;
    this._top = undefined;

    this.bottom = options.bottom;
    this._bottom = undefined;

    this.near = near;
    this._near = near;

    this.far = far;
    this._far = far;
  }

  /**
   * Returns a duplicate of a PerspectiveOffCenterFrustum instance.
   * @returns {PerspectiveOffCenterFrustum} A new PerspectiveFrustum instance.
   * */
  clone(): PerspectiveOffCenterFrustum {
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
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  equals(other: PerspectiveOffCenterFrustum): boolean {
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
   *
   * @see PerspectiveOffCenterFrustum#infiniteProjectionMatrix
   */
  get projectionMatrix(): Matrix4 {
    this._update();
    return this._perspectiveMatrix;
  }

  /**
   * Gets the perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   *
   * @see PerspectiveOffCenterFrustum#projectionMatrix
   */
  get infiniteProjectionMatrix(): Matrix4 {
    this._update();
    return this._infinitePerspective;
  }

  /**
   * Creates a culling volume for this frustum.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * const cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * const intersect = cullingVolume.computeVisibility(boundingVolume);
   */
  // eslint-disable-next-line complexity, max-statements
  computeCullingVolume(
    /** A Vector3 defines the eye position. */
    position: Readonly<NumericArray>,
    /** A Vector3 defines the view direction. */
    direction: Readonly<NumericArray>,
    /** A Vector3 defines the up direction. */
    up: Readonly<NumericArray>
  ): CullingVolume {
    assert(position, 'position is required.');
    assert(direction, 'direction is required.');
    assert(up, 'up is required.');

    const planes = this._cullingVolume.planes;

    up = scratchPlaneUpVector.copy(up).normalize();
    const right = scratchPlaneRightVector.copy(direction).cross(up).normalize();

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
    normal.copy(right).multiplyByScalar(this.left).add(nearCenter).subtract(position).cross(up);

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
    normal.copy(up).multiplyByScalar(this.top).add(nearCenter).subtract(position).cross(right);

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
  getPixelDimensions(
    /** The width of the drawing buffer. */
    drawingBufferWidth: number,
    /** The height of the drawing buffer. */
    drawingBufferHeight: number,
    /** The distance to the near plane in meters. */
    distance: number,
    /** The object onto which to store the result. */
    result: Vector2
  ): Vector2 {
    this._update();

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

  // eslint-disable-next-line complexity, max-statements
  private _update() {
    assert(
      Number.isFinite(this.right) &&
        Number.isFinite(this.left) &&
        Number.isFinite(this.top) &&
        Number.isFinite(this.bottom) &&
        Number.isFinite(this.near) &&
        Number.isFinite(this.far)
    );
    // throw new DeveloperError('right, left, top, bottom, near, or far parameters are not set.');

    const {top, bottom, right, left, near, far} = this;

    if (
      top !== this._top ||
      bottom !== this._bottom ||
      left !== this._left ||
      right !== this._right ||
      near !== this._near ||
      far !== this._far
    ) {
      assert(
        this.near > 0 && this.near < this.far,
        'near must be greater than zero and less than far.'
      );

      this._left = left;
      this._right = right;
      this._top = top;
      this._bottom = bottom;
      this._near = near;
      this._far = far;
      this._perspectiveMatrix = new Matrix4().frustum({
        left,
        right,
        bottom,
        top,
        near,
        far
      });
      this._infinitePerspective = new Matrix4().frustum({
        left,
        right,
        bottom,
        top,
        near,
        far: Infinity
      });
    }
  }
}
