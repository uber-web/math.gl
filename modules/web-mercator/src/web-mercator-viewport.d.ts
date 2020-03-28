import Viewport from './viewport';

type WebMercatorViewportOptions = {
  // Map state
  width: number;
  height: number;
  latitude?: number;
  longitude?: number;
  zoom?: number;
  pitch?: number;
  bearing?: number;
  altitude?: number;
  nearZMultiplier?: number;
  farZMultiplier?: number;
};

/**
 * Creates view/projection matrices and "uniform values" from mercator params
 *
 * Note: `Viewport` instances are immutable in the sense that they only have accessors.
 * A new viewport instance should be created if any parameters have changed.
 */
export default class WebMercatorViewport extends Viewport {
  latitude: number;
  longitude: number;
  zoom: number;
  pitch: number;
  bearing: number;
  altitude: number;

  center: number[];

  /**
   * @classdesc
   * Creates view/projection matrices from mercator params
   * Note: The Viewport is immutable in the sense that it only has accessors.
   * A new viewport instance should be created if any parameters have changed.
   *
   * @class
   * @param {WebMercatorViewportOptions} opt - options
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
  constructor(options?: WebMercatorViewportOptions);

  /**
   * Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
   * Performs the nonlinear part of the web mercator projection.
   * Remaining projection is done with 4x4 matrices which also handles
   * perspective.
   *
   * @param lngLat - [lng, lat] coordinates
   *   Specifies a point on the sphere to project onto the map.
   * @return [x,y] coordinates.
   */
  projectFlat(lngLat: number[]): number[];

  /**
   * Unproject world point [x,y] on map onto {lat, lon} on sphere
   *
   * @param xy - array with [x,y] members
   *  representing point on projected map plane
   * @return - array with [lat,lon] of point on sphere.
   *   Has toArray method if you need a GeoJSON Array.
   *   Per cartographic tradition, lat and lon are specified as degrees.
   */
  unprojectFlat(xy: number[]): number[];

  /**
   * Get the map center that place a given [lng, lat] coordinate at screen
   * point [x, y]
   *
   * @param {object} opt
   * @param opt.lngLat - [lng,lat] coordinates
   *   Specifies a point on the sphere.
   * @param opt.pos - [x,y] coordinates
   *   Specifies a point on the screen.
   * @return [lng,lat] new map center.
   */
  getMapCenterByLngLatPosition({lngLat, pos}): number[];

  /** @deprecated Legacy method name */
  getLocationAtPoint({lngLat, pos}): number[];

  /**
   * Returns a new viewport that fit around the given rectangle.
   * Only supports non-perspective mode.
   * @param {Array} bounds - [[lon, lat], [lon, lat]]
   * @param {Object} [options]
   * @param {Number} [options.padding] - The amount of padding in pixels to add to the given bounds.
   * @param {Array} [options.offset] - The center of the given bounds relative to the map's center,
   *    [x, y] measured in pixels.
   * @returns {WebMercatorViewport}
   */
  fitBounds(bounds, options?: {padding?: number; offset?: [number, number]}): WebMercatorViewport;
}
