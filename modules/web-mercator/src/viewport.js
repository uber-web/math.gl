// View and Projection Matrix management

import {createMat4} from './math-utils';
import {worldToPixels, pixelsToWorld} from './web-mercator-utils';

import * as mat4 from 'gl-matrix/mat4';

const IDENTITY = createMat4();

export default class Viewport {
  /**
   * @classdesc
   * Manages coordinate system transformations for deck.gl.
   *
   * Note: The Viewport is immutable in the sense that it only has accessors.
   * A new viewport instance should be created if any parameters have changed.
   *
   * @class
   * @param {Object} opt - options
   */
  // eslint-disable-next-line complexity, max-statements
  constructor({
    // Window width/height in pixels (for pixel projection)
    width,
    height,
    scale,
    // Desc
    viewMatrix = IDENTITY,
    projectionMatrix = IDENTITY
  } = {}) {
    // Silently allow apps to send in 0,0
    this.width = width || 1;
    this.height = height || 1;
    this.scale = scale;
    this.unitsPerMeter = 1;

    this.viewMatrix = viewMatrix;
    this.projectionMatrix = projectionMatrix;

    // Note: As usual, matrix operations should be applied in "reverse" order
    // since vectors will be multiplied in from the right during transformation
    const vpm = createMat4();
    mat4.multiply(vpm, vpm, this.projectionMatrix);
    mat4.multiply(vpm, vpm, this.viewMatrix);
    this.viewProjectionMatrix = vpm;

    // Calculate matrices and scales needed for projection
    /**
     * Builds matrices that converts preprojected lngLats to screen pixels
     * and vice versa.
     * Note: Currently returns bottom-left coordinates!
     * Note: Starts with the GL projection matrix and adds steps to the
     *       scale and translate that matrix onto the window.
     * Note: WebGL controls clip space to screen projection with gl.viewport
     *       and does not need this step.
     */
    const m = createMat4();

    // matrix for conversion from location to screen coordinates
    mat4.scale(m, m, [this.width / 2, -this.height / 2, 1]);
    mat4.translate(m, m, [1, -1, 0]);

    mat4.multiply(m, m, this.viewProjectionMatrix);

    const mInverse = mat4.invert(createMat4(), m);
    if (!mInverse) {
      throw new Error('Pixel project matrix not invertible');
    }

    this.pixelProjectionMatrix = m;
    this.pixelUnprojectionMatrix = mInverse;

    // Bind methods for easy access
    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectPosition = this.projectPosition.bind(this);
    this.unprojectPosition = this.unprojectPosition.bind(this);
    this.projectFlat = this.projectFlat.bind(this);
    this.unprojectFlat = this.unprojectFlat.bind(this);
  }

  // Two viewports are equal if width and height are identical, and if
  // their view and projection matrices are (approximately) equal.
  equals(viewport) {
    if (!(viewport instanceof Viewport)) {
      return false;
    }

    return (
      viewport.width === this.width &&
      viewport.height === this.height &&
      mat4.equals(viewport.projectionMatrix, this.projectionMatrix) &&
      mat4.equals(viewport.viewMatrix, this.viewMatrix)
    );
  }

  // Projects xyz (possibly latitude and longitude) to pixel coordinates in window
  // using viewport projection parameters
  project(xyz, {topLeft = true} = {}) {
    const worldPosition = this.projectPosition(xyz);
    const coord = worldToPixels(worldPosition, this.pixelProjectionMatrix);

    const [x, y] = coord;
    const y2 = topLeft ? y : this.height - y;
    return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
  }

  // Unproject pixel coordinates on screen onto world coordinates,
  // (possibly [lon, lat]) on map.
  unproject(xyz, {topLeft = true, targetZ = undefined} = {}) {
    const [x, y, z] = xyz;

    const y2 = topLeft ? y : this.height - y;
    const targetZWorld = targetZ && targetZ * this.unitsPerMeter;
    const coord = pixelsToWorld([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);
    const [X, Y, Z] = this.unprojectPosition(coord);

    if (Number.isFinite(z)) {
      return [X, Y, Z];
    }
    return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
  }

  // NON_LINEAR PROJECTION HOOKS
  // Used for web meractor projection

  projectPosition(xyz) {
    const [X, Y] = this.projectFlat(xyz);
    const Z = (xyz[2] || 0) * this.unitsPerMeter;
    return [X, Y, Z];
  }

  unprojectPosition(xyz) {
    const [X, Y] = this.unprojectFlat(xyz);
    const Z = (xyz[2] || 0) / this.unitsPerMeter;
    return [X, Y, Z];
  }

  /**
   * Project map coordinates to world coordinates.
   * This should be overridden by each viewport that implements a specific
   * geographic projection.
   * @param xyz - map coordinates
   * @return [x,y,z] world coordinates.
   */
  projectFlat(xyz) {
    return xyz;
  }

  /**
   * Project world coordinates to map coordinates.
   * This should be overridden by each viewport that implements a specific
   * geographic projection.
   * @param xyz - world coordinates
   * @return [x,y,z] map coordinates.
   */
  unprojectFlat(xyz) {
    return xyz;
  }
}
