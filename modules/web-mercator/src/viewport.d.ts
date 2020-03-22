// View and Projection Matrix management

type ViewportOptions = {
  width: number;
  height: number;
  scale?: number;

  viewMatrix?: number[];
  projectionMatrix?: number[];
};

/**
 * Viewport manages coordinate system transformations.
 *
 * Note: The Viewport is immutable in the sense that it only has accessors.
 * A new viewport instance should be created if any parameters have changed.
 */

export default class Viewport {
  width: number;
  height: number;
  scale: number;
  unitsPerMeter: number;

  viewMatrix: number[];
  projectionMatrix: number[];

  viewProjectionMatrix: number[];
  pixelProjectionMatrix: number[];
  pixelUnprojectionMatrix: number[];

  /**
   * @param opt - options
   *
   * @param [opt.width=1] - Width of "viewport" or window
   * @param [opt.height=1] - Height of "viewport" or window
   * @param [opt.scale=1] - Either use scale or zoom
   * @param [opt.pitch=0] - Camera angle in degrees (0 is straight down)
   * @param [opt.bearing=0] - Map rotation in degrees (0 means north is up)
   * @param [opt.altitude=] - Altitude of camera in screen units
   *
   * Web mercator projection short-hand parameters
   * @param [opt.latitude] - Center of viewport on map
   * @param [opt.longitude] - Center of viewport on map
   * @param [opt.zoom] - Scale = Math.pow(2,zoom) on map

   * Notes:
   *  - Only one of center or [latitude, longitude] can be specified
   *  - [latitude, longitude] can only be specified when "mercator" is true
   *  - Altitude has a default value that matches assumptions in mapbox-gl
   *  - width and height are forced to 1 if supplied as 0, to avoid
   *    division by zero. This is intended to reduce the burden of apps to
   *    to check values before instantiating a Viewport.
   */
  constructor(options?: ViewportOptions);

  /** Two viewports are equal if width and height are identical, and if
   * their view and projection matrices are (approximately) equal.
   */
  equals(viewport: Viewport | null): boolean;

  /**
   * Projects xyz (possibly latitude and longitude) to pixel coordinates in window
   * using viewport projection parameters
   * - [longitude, latitude] to [x, y]
   * - [longitude, latitude, Z] => [x, y, z]
   * Note: By default, returns top-left coordinates for canvas/SVG type render
   *
   * @param lngLatZ - [lng, lat] or [lng, lat, Z]
   * @param options - options
   * @param options.topLeft=true - Whether projected coords are top left
   * @return - screen coordinates [x, y] or [x, y, z], z as pixel depth
   */
  project(lngLatZ: number[], options?: {topLeft?: boolean}): number[];

  /**
   * Unproject pixel coordinates on screen onto world coordinates, possibly `[lon, lat]` on map.
   *
   * - [x, y] => [lng, lat]
   * - [x, y, z] => [lng, lat, Z]
   *
   * @param xyz - screen coordinates, z as pixel depth
   * @param options - options
   * @param options.topLeft=true - Whether projected coords are top left
   * @param options.targetZ=0 - If pixel depth is unknown, targetZ is used as
   *   the elevation plane to unproject onto
   * @return - [lng, lat, Z] or [X, Y, Z]
   */
  unproject(xyz: number[], options?: {topLeft?: boolean; targetZ?: number}): number[];
}
