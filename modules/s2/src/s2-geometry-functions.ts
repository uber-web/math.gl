// math.gl, MIT license

import {getS2IndexFromToken} from './s2-token-functions';
import {getS2GeoBounds} from './converters/s2-to-boundary';

// GEOMETRY

/**
 * Retrieve S2 geometry center
 */
export function getS2LngLat(s2Token: string): number[] {
  throw new Error(s2Token);
  // // const paddedToken = s2Token.toString().padEnd(MAXIMUM_TOKEN_LENGTH, '0');
  // // const s2Id = Long.fromString(paddedToken, MAXIMUM_TOKEN_LENGTH);
  // const {lat, lng} = S2.idToLatLng(s2Id.toString());
  // return [lng, lat];
}

/**
 * Get a polygon with corner coordinates for an s2 cell
 * @param - This can be an S2 key or token
 * @return {Float64Array} - a simple polygon in flat array format: [lng0, lat0, lng1, lat1, ...]
 *   - the polygon is closed, i.e. last coordinate is a copy of the first coordinate
 */
export function getS2BoundaryFlat(s2Token: string): Float64Array {
  const s2Index = getS2IndexFromToken(s2Token);
  return getS2GeoBounds(s2Index);
}
