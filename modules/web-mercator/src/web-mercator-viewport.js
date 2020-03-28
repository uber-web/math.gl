// View and Projection Matrix calculations for mapbox-js style map view properties
import Viewport from './viewport';

import {
  zoomToScale,
  pixelsToWorld,
  lngLatToWorld,
  worldToLngLat,
  getProjectionMatrix,
  getDistanceScales,
  getViewMatrix
} from './web-mercator-utils';
import fitBounds from './fit-bounds';

import * as vec2 from 'gl-matrix/vec2';

export default class WebMercatorViewport extends Viewport {
  constructor(
    {
      // Map state
      width,
      height,
      latitude = 0,
      longitude = 0,
      zoom = 0,
      pitch = 0,
      bearing = 0,
      altitude = 1.5,
      nearZMultiplier = 0.02,
      farZMultiplier = 1.01
    } = {width: 1, height: 1}
  ) {
    // Silently allow apps to send in 0,0 to facilitate isomorphic render etc
    width = width || 1;
    height = height || 1;

    const scale = zoomToScale(zoom);
    // Altitude - prevent division by 0
    // TODO - just throw an Error instead?
    altitude = Math.max(0.75, altitude);

    const center = lngLatToWorld([longitude, latitude]);
    center[2] = 0;

    const projectionMatrix = getProjectionMatrix({
      width,
      height,
      pitch,
      altitude,
      nearZMultiplier,
      farZMultiplier
    });

    const viewMatrix = getViewMatrix({
      height,
      scale,
      center,
      pitch,
      bearing,
      altitude
    });

    super({width, height, scale, viewMatrix, projectionMatrix});

    // Save parameters
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.pitch = pitch;
    this.bearing = bearing;
    this.altitude = altitude;

    this.center = center;
    this.unitsPerMeter = getDistanceScales(this).unitsPerMeter[2];

    Object.freeze(this);
  }

  // Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
  projectFlat(lngLat) {
    return lngLatToWorld(lngLat);
  }

  // Unproject world point [x,y] on map onto {lat, lon} on sphere
  unprojectFlat(xy) {
    return worldToLngLat(xy);
  }

  // Get the map center that place a given [lng, lat] coordinate at screen point [x, y]
  getMapCenterByLngLatPosition({lngLat, pos}) {
    const fromLocation = pixelsToWorld(pos, this.pixelUnprojectionMatrix);
    const toLocation = lngLatToWorld(lngLat);

    const translate = vec2.add([], toLocation, vec2.negate([], fromLocation));
    const newCenter = vec2.add([], this.center, translate);

    return worldToLngLat(newCenter);
  }

  // Legacy method name
  getLocationAtPoint({lngLat, pos}) {
    return this.getMapCenterByLngLatPosition({lngLat, pos});
  }

  // Returns a new viewport that fit around the given rectangle.
  fitBounds(bounds, options = {}) {
    const {width, height} = this;
    const {longitude, latitude, zoom} = fitBounds(Object.assign({width, height, bounds}, options));
    return new WebMercatorViewport({width, height, longitude, latitude, zoom});
  }
}
