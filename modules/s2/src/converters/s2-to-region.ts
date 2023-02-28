import {getS2GeoBoundsFromCell} from './s2-to-boundary';

export function getS2Region(s2cell: {face: number; ij: [number, number]; level: number}): number[] {
  const corners = getS2GeoBoundsFromCell(s2cell);
  const region = getRegionFromS2Corners(corners);
  return region;
}

function getRegionFromS2Corners(corners: Float64Array): number[] {
  const longitudes: number[] = [];
  const latitudes: number[] = [];
  for (let i = 0; i < corners.length; i += 2) {
    longitudes.push(corners[i]);
    latitudes.push(corners[i + 1]);
  }
  longitudes.sort((a, b) => a - b);
  latitudes.sort((a, b) => a - b);

  // Return the region in degrees
  return [
    longitudes[0],
    latitudes[0],
    longitudes[longitudes.length - 1],
    latitudes[latitudes.length - 1]
  ];
}
