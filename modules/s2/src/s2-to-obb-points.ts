import {getS2CellFromToken, get2dRegionFromS2Cell} from './s2-utils-ext';
import {Vector3} from '@math.gl/core';

// import {OrientedBoundingBox, makeOrientedBoundingBoxFromPoints} from '@math.gl/culling';
// import {Ellipsoid} from '@math.gl/geospatial';

export type S2HeightInfo = {
  minimumHeight: number;
  maximumHeight: number;
};

/**
 * Converts S2HeightInfo to corner points of an oriented bounding box
 * Can be used to constuct an OrientedBoundingBox instance
 *
 * @param s2bv - s2 bounding volume to convert
 * @param [result] Optional object onto which to store the result.
 * @returns The modified result parameter or a new `OrientedBoundingBox` instance if not provided.
 */
export function getOrientedBoundingBoxCornerPoints(
  token: string, // This can be an S2 key or token
  heighInfo?: S2HeightInfo
): Vector3[] {
  const min: number = heighInfo?.minimumHeight || 0;
  const max: number = heighInfo?.maximumHeight || 0;

  const s2cell = getS2CellFromToken(token);
  const region = get2dRegionFromS2Cell(s2cell);

  // region is {lngWest, latSouth, lngEast, latNorth} in degrees
  const W = region[0];
  const S = region[1];
  const E = region[2];
  const N = region[3];

  const points: Vector3[] = [];

  points.push(new Vector3(W, N, min));
  points.push(new Vector3(E, N, min));
  points.push(new Vector3(E, S, min));
  points.push(new Vector3(W, S, min));

  points.push(new Vector3(W, N, max));
  points.push(new Vector3(E, N, max));
  points.push(new Vector3(E, S, max));
  points.push(new Vector3(W, S, max));

  return points;
}

/*
function convertCartToXYZ(longitude, latitude, height, result?) {
  const point = Ellipsoid.WGS84.cartographicToCartesian([longitude, latitude, height]);
  return new Vector3(point[0], point[1], point[2]);
}

// Add a point that doesn't allow the box dive under the Earth
  // This point is actually a center of a face that could be a tangent to the Earth surface if max==0
  points.push(convertCartToXYZ((W + E) / 2.0, (S + N) / 2.0, max));

  // points should be an array of Vector3 (XYZ)
  // Passing result===null throws an exception from makeOrientedBoundingBoxFromPoints
  const obb: OrientedBoundingBox = makeOrientedBoundingBoxFromPoints(
    points,
    result !== null ? result : undefined
  );

  const box: number[] = [...obb.center, ...obb.halfAxes];

  return box;
}
*/
