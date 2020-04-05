/* eslint-disable max-statements */
import {cutPolylineByGrid, cutPolygonByGrid} from './cut-by-grid';
import {getPointAtIndex, push} from './utils';

// https://en.wikipedia.org/wiki/Web_Mercator_projection
const MAX_LATITUDE = 85.051129;
const GRID_RESOLUTION = 360;
const GRID_OFFSET = [-180, -180];

export function cutPolylineByMercatorWorld(positions, options = {}) {
  const {size = 2, startIndex = 0, endIndex = positions.length} = options;

  // Remap longitudes so that each segment takes the shorter path
  const newPositions = positions.slice(startIndex, endIndex);
  wrapLongitudesForShortestPath(newPositions, size, 0, endIndex - startIndex);

  const parts = cutPolylineByGrid(newPositions, {
    size,
    broken: true,
    gridResolution: GRID_RESOLUTION,
    gridOffset: GRID_OFFSET
  });
  // Each part is guaranteed to be in a single copy of the world
  // Map longitudes back to [-180, 180]
  for (const part of parts) {
    shiftLongitudesIntoRange(part, size);
  }
  return parts;
}

export function cutPolygonByMercatorWorld(positions, holeIndices, options = {}) {
  const {size = 2} = options;
  holeIndices = holeIndices || [];
  const newPositions = [];
  const newHoleIndices = [];
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
    const firstLng = newPositions[targetStartIndex];
    const lastLng = newPositions[targetIndex - size];
    if (Math.abs(firstLng - lastLng) > 180) {
      // The ring does not make a round trip
      // Add the nearest pole to the vertices so that the polygon tesselates correctly
      const p = getPointAtIndex(newPositions, 0, size, targetStartIndex);
      // Copy the first vertex to the world of the last vertex
      p[0] += Math.round((lastLng - firstLng) / 360) * 360;
      push(newPositions, p);
      // Project the copied vertex to the edge of the map
      p[1] = Math.sign(p[1]) * MAX_LATITUDE;
      push(newPositions, p);
      // Project the first vertex to the edge of the map
      p[0] = firstLng;
      push(newPositions, p);
    }

    srcStartIndex = srcEndIndex;
    newHoleIndices[ringIndex] = targetIndex;
  }
  newHoleIndices.pop();

  const parts = cutPolygonByGrid(newPositions, newHoleIndices, {
    size,
    gridResolution: GRID_RESOLUTION,
    gridOffset: GRID_OFFSET
  });
  // Each part is guaranteed to be in a single copy of the world
  // Map longitudes back to [-180, 180]
  for (const part of parts) {
    shiftLongitudesIntoRange(part.positions || part, size);
  }
  return parts;
}

/* Helpers */

function findSplitIndex(positions, size, startIndex, endIndex) {
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

function wrapLongitudesForShortestPath(positions, size, startIndex, endIndex) {
  let prevLng = positions[0];
  let lng;
  for (let i = startIndex; i < endIndex; i += size) {
    lng = positions[i];
    const delta = lng - prevLng;
    if (delta > 180 || delta < -180) {
      lng -= Math.round(delta / 360) * 360;
    }
    positions[i] = prevLng = lng;
  }
}

function shiftLongitudesIntoRange(positions, size) {
  let refLng;
  const n = positions.length;

  // Find a longitude that is not on the edge of a world
  // Which we will use to determine which world copy it is
  for (let i = 0; i < n; i += size) {
    refLng = positions[i];
    if ((refLng + 180) % 360 !== 0) {
      break;
    }
  }

  const delta = -Math.round(refLng / 360) * 360;
  if (delta === 0) {
    return;
  }
  for (let i = 0; i < n; i += size) {
    positions[i] += delta;
  }
}
