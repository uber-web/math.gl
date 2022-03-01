import {worldToLngLat} from './web-mercator-utils';
import {mod, log2} from './math-utils';

// defined by mapbox-gl
const TILE_SIZE = 512;

/** Description of viewport */
export type ViewportProps = {
  width: number;
  height: number;
  longitude: number;
  latitude: number;
  zoom: number;
  pitch?: number;
  bearing?: number;
};

/**
 * Apply mathematical constraints to viewport props
 * @param props
 */
// eslint-disable-next-line complexity
export default function normalizeViewportProps(props: ViewportProps): ViewportProps {
  const {width, height, pitch = 0} = props;
  let {longitude, latitude, zoom, bearing = 0} = props;

  // Normalize degrees
  if (longitude < -180 || longitude > 180) {
    longitude = mod(longitude + 180, 360) - 180;
  }
  if (bearing < -180 || bearing > 180) {
    bearing = mod(bearing + 180, 360) - 180;
  }

  // Constrain zoom and shift center at low zoom levels
  const minZoom = log2(height / TILE_SIZE);
  if (zoom <= minZoom) {
    zoom = minZoom;
    latitude = 0;
  } else {
    // Eliminate white space above and below the map
    const halfHeightPixels = height / 2 / Math.pow(2, zoom);
    const minLatitude = worldToLngLat([0, halfHeightPixels])[1];
    if (latitude < minLatitude) {
      latitude = minLatitude;
    } else {
      const maxLatitude = worldToLngLat([0, TILE_SIZE - halfHeightPixels])[1];
      if (latitude > maxLatitude) {
        latitude = maxLatitude;
      }
    }
  }

  return {width, height, longitude, latitude, zoom, pitch, bearing};
}
