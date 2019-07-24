/* eslint-disable */
import {Vector3, Vector4, Matrix4, assert} from 'math.gl';
import CullingVolume from './culling-volume';

const getPlanesRight = new Vector3();
const getPlanesNearCenter = new Vector3();
const getPlanesFarCenter = new Vector3();
const getPlanesNormal = new Vector3();

const defined = val => val !== undefined && val !== null;

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

    this._cullingVolume = new CullingVolume();
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
  computeCullingVolume(position, direction, up) {
    assert(position, 'position is required.');
    assert(direction, 'direction is required.');
    assert(up, 'up is required.');

    const planes = this._cullingVolume.planes;

    const t = this.top;
    const b = this.bottom;
    const r = this.right;
    const l = this.left;
    const n = this.near;
    const f = this.far;

    const right = new Vector3().cross(direction, up, getPlanesRight);

    const nearCenter = getPlanesNearCenter;
    new Vector3().multiplyByScalar(direction, n, nearCenter);
    new Vector3().add(position, nearCenter, nearCenter);

    const farCenter = getPlanesFarCenter;
    new Vector3().multiplyByScalar(direction, f, farCenter);
    new Vector3().add(position, farCenter, farCenter);

    const normal = getPlanesNormal;

    //Left plane computation
    new Vector3().multiplyByScalar(right, l, normal);
    new Vector3().add(nearCenter, normal, normal);
    new Vector3().subtract(normal, position, normal);
    new Vector3().normalize(normal, normal);
    new Vector3().cross(normal, up, normal);
    new Vector3().normalize(normal, normal);

    let plane = planes[0];
    if (!defined(plane)) {
      plane = planes[0] = new Vector4();
    }
    plane.x = normal.x;
    plane.y = normal.y;
    plane.z = normal.z;
    plane.w = -new Vector3().dot(normal, position);

    //Right plane computation
    new Vector3().multiplyByScalar(right, r, normal);
    new Vector3().add(nearCenter, normal, normal);
    new Vector3().subtract(normal, position, normal);
    new Vector3().cross(up, normal, normal);
    new Vector3().normalize(normal, normal);

    plane = planes[1];
    if (!defined(plane)) {
      plane = planes[1] = new Vector4();
    }
    plane.x = normal.x;
    plane.y = normal.y;
    plane.z = normal.z;
    plane.w = -new Vector3().dot(normal, position);

    //Bottom plane computation
    new Vector3().multiplyByScalar(up, b, normal);
    new Vector3().add(nearCenter, normal, normal);
    new Vector3().subtract(normal, position, normal);
    new Vector3().cross(right, normal, normal);
    new Vector3().normalize(normal, normal);

    plane = planes[2];
    if (!defined(plane)) {
      plane = planes[2] = new Vector4();
    }
    plane.x = normal.x;
    plane.y = normal.y;
    plane.z = normal.z;
    plane.w = -new Vector3().dot(normal, position);

    //Top plane computation
    new Vector3().multiplyByScalar(up, t, normal);
    new Vector3().add(nearCenter, normal, normal);
    new Vector3().subtract(normal, position, normal);
    new Vector3().cross(normal, right, normal);
    new Vector3().normalize(normal, normal);

    plane = planes[3];
    if (!defined(plane)) {
      plane = planes[3] = new Vector4();
    }
    plane.x = normal.x;
    plane.y = normal.y;
    plane.z = normal.z;
    plane.w = -new Vector3().dot(normal, position);

    //Near plane computation
    plane = planes[4];
    if (!defined(plane)) {
      plane = planes[4] = new Vector4();
    }
    plane.x = direction.x;
    plane.y = direction.y;
    plane.z = direction.z;
    plane.w = -new Vector3().dot(direction, nearCenter);

    //Far plane computation
    new Vector3().negate(direction, normal);

    plane = planes[5];
    if (!defined(plane)) {
      plane = planes[5] = new Vector4();
    }
    plane.x = normal.x;
    plane.y = normal.y;
    plane.z = normal.z;
    plane.w = -new Vector3().dot(normal, farCenter);

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

function update(frustum) {
  if (
    !defined(frustum.right) ||
    !defined(frustum.left) ||
    !defined(frustum.top) ||
    !defined(frustum.bottom) ||
    !defined(frustum.near) ||
    !defined(frustum.far)
  ) {
    throw new DeveloperError('right, left, top, bottom, near, or far parameters are not set.');
  }

  const top = frustum.top;
  const bottom = frustum.bottom;
  const right = frustum.right;
  const left = frustum.left;
  const near = frustum.near;
  const far = frustum.far;

  if (
    top !== frustum._top ||
    bottom !== frustum._bottom ||
    left !== frustum._left ||
    right !== frustum._right ||
    near !== frustum._near ||
    far !== frustum._far
  ) {
    assert(
      frustum.near > 0 || frustum.near < frustum.far,
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
