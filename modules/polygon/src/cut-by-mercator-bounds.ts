import {cutPolylineByGrid, cutPolygonByGrid} from './cut-by-grid';
import {getPointAtIndex, push} from './utils';
import type {Polygon} from './cut-by-grid';
import type {NumericArray} from '@math.gl/core';

// https://en.wikipedia.org/wiki/Web_Mercator_projection
const DEFAULT_MAX_LATITUDE = 85.051129;

/** https://user-images.githubusercontent.com/2059298/78465769-938b7a00-76ae-11ea-9b95-1f4c26425ab9.png */
export function cutPolylineByMercatorBounds(
  positions: Readonly<NumericArray>,
  options?: {
    size?: number;
    startIndex?: number;
    endIndex?: number;
    normalize?: boolean;
  }
): number[][] {
  const {size = 2, startIndex = 0, endIndex = positions.length, normalize = true} = options || {};

  // Remap longitudes so that each segment takes the shorter path
  const newPositions = positions.slice(startIndex, endIndex);
  wrapLongitudesForShortestPath(newPositions, size, 0, endIndex - startIndex);

  const parts = cutPolylineByGrid(newPositions, {
    size,
    broken: true,
    gridResolution: 360,
    gridOffset: [-180, -180]
  }) as number[][];

  if (normalize) {
    // Each part is guaranteed to be in a single copy of the world
    // Map longitudes back to [-180, 180]
    for (const part of parts) {
      shiftLongitudesIntoRange(part, size);
    }
  }
  return parts;
}

/** https://user-images.githubusercontent.com/2059298/78465770-94241080-76ae-11ea-809a-6a8534dac1d9.png */
export function cutPolygonByMercatorBounds(
  positions: Readonly<NumericArray>,
  holeIndices: Readonly<NumericArray> | null = null,
  options?: {
    size?: number;
    normalize?: boolean;
    maxLatitude?: number;
    edgeTypes?: boolean;
  }
): Polygon[] {
  const {size = 2, normalize = true, edgeTypes = false} = options || {};
  holeIndices = holeIndices || [];
  const newPositions: number[] = [];
  const newHoleIndices: number[] = [];
  let srcStartIndex = 0;
  let targetIndex = 0;

  for (let ringIndex = 0; ringIndex <= holeIndices.length; ringIndex++) {
    // srcStartIndex/srcEndIndex define the ring in the original positions
    const srcEndIndex = holeIndices[ringIndex] || positions.length;
    // targetStartIndex/targetIndex define the ring in newPositions
    const targetStartIndex = targetIndex;

    // In case the ring contains a pole (e.g. Antarctica), we'll have to insert vertices
    // The insertion point is defined by the vertex closest to the pole
    // Split the the ring by the insertion point when copying to newPositions
    const splitIndex = findSplitIndex(positions, size, srcStartIndex, srcEndIndex);
    for (let i = splitIndex; i < srcEndIndex; i++) {
      newPositions[targetIndex++] = positions[i];
    }
    for (let i = srcStartIndex; i < splitIndex; i++) {
      newPositions[targetIndex++] = positions[i];
    }

    // Remap longitudes so that each segment takes the shorter path
    wrapLongitudesForShortestPath(newPositions, size, targetStartIndex, targetIndex);

    // Handle the case when the ring contains a pole
    insertPoleVertices(newPositions, size, targetStartIndex, targetIndex, options?.maxLatitude);

    srcStartIndex = srcEndIndex;
    newHoleIndices[ringIndex] = targetIndex;
  }
  newHoleIndices.pop();

  const parts = cutPolygonByGrid(newPositions, newHoleIndices, {
    size,
    gridResolution: 360,
    gridOffset: [-180, -180],
    edgeTypes
  });

  if (normalize) {
    // Each part is guaranteed to be in a single copy of the world
    // Map longitudes back to [-180, 180]
    for (const part of parts) {
      // @ts-expect-error (mutates readonly array) May mutate newPositions, which is created by us
      shiftLongitudesIntoRange(part.positions, size);
    }
  }
  return parts;
}

/* Helpers */

// See comments for insertPoleVertices
function findSplitIndex(
  positions: Readonly<NumericArray>,
  size: number,
  startIndex: number,
  endIndex: number
): number {
  let maxLat = -1;
  let pointIndex = -1;
  for (let i = startIndex + 1; i < endIndex; i += size) {
    const lat = Math.abs(positions[i]);
    if (lat > maxLat) {
      maxLat = lat;
      pointIndex = i - 1;
    }
  }
  return pointIndex;
}

// https://user-images.githubusercontent.com/2059298/78857483-5987e400-79de-11ea-98fc-0631287a8431.png
//
// If the polygon contains a pole, to tesselate it correctly, we need to insert the edge
// of map into the polygon. This requires adding two vertices that represent the pole, by
// drawing a perpendicular line to the Mercator map edge from a selected vertex on the ring.
//
// We select the insertion position carefully so that the inserted line segments do not
// intersect with the ring itself. This is ensured by findSplitIndex, which returns the
// vertex closest to the pole.
function insertPoleVertices(
  positions: number[],
  size: number,
  startIndex: number,
  endIndex: number,
  maxLatitude: number = DEFAULT_MAX_LATITUDE
): void {
  // Check if the ring contains a pole
  const firstLng = positions[startIndex];
  const lastLng = positions[endIndex - size];
  if (Math.abs(firstLng - lastLng) > 180) {
    // The ring does not make a round trip
    // Add the nearest pole to the vertices so that the polygon tesselates correctly
    const p = getPointAtIndex(positions, 0, size, startIndex);
    // Copy the first vertex to the world of the last vertex
    p[0] += Math.round((lastLng - firstLng) / 360) * 360;
    push(positions, p);
    // Project the copied vertex to the edge of the map
    p[1] = Math.sign(p[1]) * maxLatitude;
    push(positions, p);
    // Project the first vertex to the edge of the map
    p[0] = firstLng;
    push(positions, p);
  }
}

function wrapLongitudesForShortestPath(
  positions: NumericArray,
  size: number,
  startIndex: number,
  endIndex: number
): void {
  let prevLng: number = positions[0];
  let lng: number;
  for (let i = startIndex; i < endIndex; i += size) {
    lng = positions[i];
    const delta = lng - prevLng;
    if (delta > 180 || delta < -180) {
      lng -= Math.round(delta / 360) * 360;
    }
    positions[i] = prevLng = lng;
  }
}

function shiftLongitudesIntoRange(positions: NumericArray, size: number): void {
  let refLng: number;
  const pointCount = positions.length / size;

  // Find a longitude that is not on the edge of a world
  // Which we will use to determine which world copy it is
  for (let i = 0; i < pointCount; i++) {
    refLng = positions[i * size];
    if ((refLng + 180) % 360 !== 0) {
      break;
    }
  }

  const delta = -Math.round(refLng / 360) * 360;
  if (delta === 0) {
    return;
  }
  for (let i = 0; i < pointCount; i++) {
    positions[i * size] += delta;
  }
}
