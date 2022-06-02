/* eslint-disable max-statements, max-depth, complexity, no-unused-expressions */
import {bitCode, intersect, BoundingBox} from './lineclip';
import {getPointAtIndex, copy, push} from './utils';

import type {NumericArray} from '@math.gl/core';

export type Polygon = {
  positions: Readonly<NumericArray>;
  holeIndices?: Readonly<NumericArray>;
  edgeTypes?: Readonly<NumericArray>;
};

export function cutPolylineByGrid(
  positions: NumericArray,
  options?: {
    size?: number;
    broken?: boolean;
    gridResolution?: number;
    gridOffset?: [number, number];
    startIndex?: number;
    endIndex?: number;
  }
): number[] | number[][] {
  const {
    size = 2,
    broken = false,
    gridResolution = 10,
    gridOffset = [0, 0],
    startIndex = 0,
    endIndex = positions.length
  } = options || {};
  const numPoints = (endIndex - startIndex) / size;
  let part: number[] = [];
  const result: number[][] = [part];
  const a: number[] = getPointAtIndex(positions, 0, size, startIndex);
  let b: number[];
  let codeB: number;
  const cell: BoundingBox = getGridCell(a, gridResolution, gridOffset, []);
  const scratchPoint: number[] = [];
  push(part, a);

  for (let i = 1; i < numPoints; i++) {
    b = getPointAtIndex(positions, i, size, startIndex, b);
    codeB = bitCode(b, cell);

    while (codeB) {
      // find the intersection with the current cell
      intersect(a, b, codeB, cell, scratchPoint);
      const codeAlt = bitCode(scratchPoint, cell);
      if (codeAlt) {
        intersect(a, scratchPoint, codeAlt, cell, scratchPoint);
        codeB = codeAlt;
      }
      push(part, scratchPoint);
      // move to the next cell
      copy(a, scratchPoint);

      moveToNeighborCell(cell, gridResolution, codeB);
      if (broken && part.length > size) {
        part = [];
        result.push(part);
        push(part, a);
      }

      codeB = bitCode(b, cell);
    }

    push(part, b);
    copy(a, b);
  }

  return broken ? result : result[0];
}

const TYPE_INSIDE = 0;
const TYPE_BORDER = 1;

function concatInPlace(arr1: number[], arr2: number[]): number[] {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}

export function cutPolygonByGrid(
  positions: Readonly<NumericArray>,
  holeIndices: Readonly<NumericArray> | null = null,
  options?: {
    size?: number;
    gridResolution?: number;
    gridOffset?: [number, number];
    edgeTypes?: boolean;
  }
): Polygon[] {
  if (!positions.length) {
    // input is empty
    return [];
  }
  const {size = 2, gridResolution = 10, gridOffset = [0, 0], edgeTypes = false} = options || {};
  const result: Polygon[] = [];
  const queue: {pos: Readonly<NumericArray>; types: number[]; holes: Readonly<NumericArray>}[] = [
    {
      pos: positions,
      types: edgeTypes ? (new Array(positions.length / size).fill(TYPE_BORDER) as number[]) : null,
      holes: holeIndices || []
    }
  ];
  const bbox: number[][] = [[], []];
  // @ts-ignore
  let cell: BoundingBox = [];

  // Recursively bisect polygon until every part fit in a single grid cell
  while (queue.length) {
    const {pos, types, holes} = queue.shift();

    // Get the bounding box of the outer polygon
    getBoundingBox(pos, size, holes[0] || pos.length, bbox);
    cell = getGridCell(bbox[0], gridResolution, gridOffset, cell);
    const code = bitCode(bbox[1], cell);

    if (code) {
      // Split the outer ring at the boundary
      let parts = bisectPolygon(pos, types, size, 0, holes[0] || pos.length, cell, code);
      const polygonLow = {pos: parts[0].pos, types: parts[0].types, holes: []};
      const polygonHigh = {pos: parts[1].pos, types: parts[1].types, holes: []};
      queue.push(polygonLow, polygonHigh);

      // Split each hole at the boundary
      for (let i = 0; i < holes.length; i++) {
        parts = bisectPolygon(pos, types, size, holes[i], holes[i + 1] || pos.length, cell, code);

        if (parts[0]) {
          polygonLow.holes.push(polygonLow.pos.length);
          polygonLow.pos = concatInPlace(polygonLow.pos, parts[0].pos);
          if (edgeTypes) {
            polygonLow.types = concatInPlace(polygonLow.types, parts[0].types);
          }
        }
        if (parts[1]) {
          polygonHigh.holes.push(polygonHigh.pos.length);
          polygonHigh.pos = concatInPlace(polygonHigh.pos, parts[1].pos);
          if (edgeTypes) {
            polygonHigh.types = concatInPlace(polygonHigh.types, parts[1].types);
          }
        }
      }
    } else {
      // Polygon fits in a single cell, no more processing required
      const polygon: Polygon = {positions: pos};
      if (edgeTypes) {
        polygon.edgeTypes = types;
      }
      if (holes.length) {
        polygon.holeIndices = holes;
      }

      result.push(polygon);
    }
  }
  return result;
}

// edgeTypes:
// TYPE_BORDER - edge from the original polygon
// TYPE_INSIDE - inside the original polygon
// eslint-disable-next-line max-params
function bisectPolygon(
  positions: Readonly<NumericArray>,
  edgeTypes: number[] | undefined,
  size: number,
  startIndex: number,
  endIndex: number,
  bbox: BoundingBox,
  edge: number
): {
  pos: number[];
  types?: number[];
}[] {
  const numPoints = (endIndex - startIndex) / size;
  const resultLow: number[] = [];
  const resultHigh: number[] = [];
  const typesLow: number[] = [];
  const typesHigh: number[] = [];
  const scratchPoint: number[] = [];

  let p: number[];
  let side: number;
  let type: number;
  const prev = getPointAtIndex(positions, numPoints - 1, size, startIndex);
  let prevSide = Math.sign(edge & 8 ? prev[1] - bbox[3] : prev[0] - bbox[2]);
  let prevType = edgeTypes && edgeTypes[numPoints - 1];
  let lowPointCount = 0;
  let highPointCount = 0;

  for (let i = 0; i < numPoints; i++) {
    p = getPointAtIndex(positions, i, size, startIndex, p);
    side = Math.sign(edge & 8 ? p[1] - bbox[3] : p[0] - bbox[2]);
    type = edgeTypes && edgeTypes[startIndex / size + i];

    // if segment goes through the boundary, add an intersection
    if (side && prevSide && prevSide !== side) {
      intersect(prev, p, edge, bbox, scratchPoint);
      push(resultLow, scratchPoint) && typesLow.push(prevType);
      push(resultHigh, scratchPoint) && typesHigh.push(prevType);
    }

    if (side <= 0) {
      push(resultLow, p) && typesLow.push(type);
      lowPointCount -= side;
    } else if (typesLow.length) {
      typesLow[typesLow.length - 1] = TYPE_INSIDE;
    }
    if (side >= 0) {
      push(resultHigh, p) && typesHigh.push(type);
      highPointCount += side;
    } else if (typesHigh.length) {
      typesHigh[typesHigh.length - 1] = TYPE_INSIDE;
    }

    copy(prev, p);
    prevSide = side;
    prevType = type;
  }

  return [
    lowPointCount ? {pos: resultLow, types: edgeTypes && typesLow} : null,
    highPointCount ? {pos: resultHigh, types: edgeTypes && typesHigh} : null
  ];
}

function getGridCell(
  p: number[],
  gridResolution: number,
  gridOffset: [number, number],
  out: number[]
): BoundingBox {
  const left = Math.floor((p[0] - gridOffset[0]) / gridResolution) * gridResolution + gridOffset[0];
  const bottom =
    Math.floor((p[1] - gridOffset[1]) / gridResolution) * gridResolution + gridOffset[1];
  out[0] = left;
  out[1] = bottom;
  out[2] = left + gridResolution;
  out[3] = bottom + gridResolution;
  return out as BoundingBox;
}

function moveToNeighborCell(cell: number[], gridResolution: number, edge: number): void {
  if (edge & 8) {
    // top
    cell[1] += gridResolution;
    cell[3] += gridResolution;
  } else if (edge & 4) {
    // bottom
    cell[1] -= gridResolution;
    cell[3] -= gridResolution;
  } else if (edge & 2) {
    // right
    cell[0] += gridResolution;
    cell[2] += gridResolution;
  } else if (edge & 1) {
    // left
    cell[0] -= gridResolution;
    cell[2] -= gridResolution;
  }
}

function getBoundingBox(
  positions: Readonly<NumericArray>,
  size: number,
  endIndex: number,
  out: number[][]
): number[][] {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < endIndex; i += size) {
    const x = positions[i];
    const y = positions[i + 1];
    minX = x < minX ? x : minX;
    maxX = x > maxX ? x : maxX;
    minY = y < minY ? y : minY;
    maxY = y > maxY ? y : maxY;
  }

  out[0][0] = minX;
  out[0][1] = minY;
  out[1][0] = maxX;
  out[1][1] = maxY;
  return out;
}
