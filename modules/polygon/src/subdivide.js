/* eslint-disable max-statements, max-depth */
import {bitCode, intersect} from './lineclip';
import {getPointAtIndex, copy, push} from './utils';

export function subdividePolyline(positions, options = {}) {
  const {size = 2, broken = false, startIndex = 0, endIndex = positions.length} = options;
  const numPoints = (endIndex - startIndex) / size;
  let part = [];
  const result = [part];
  const a = getPointAtIndex(positions, 0, size, startIndex);
  let b;
  let codeB;
  const cell = getGridCell(a, options);
  const scratchPoint = [];
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

      moveToNeighborCell(cell, options.resolution, codeB);
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

function getGridCell(p, {resolution = 10, offset = [0, 0]}) {
  const left = Math.floor((p[0] - offset[0]) / resolution) * resolution + offset[0];
  const bottom = Math.floor((p[1] - offset[1]) / resolution) * resolution + offset[1];
  return [left, bottom, left + resolution, bottom + resolution];
}

function moveToNeighborCell(cell, resolution = 10, edge) {
  if (edge & 8) {
    // top
    cell[1] += resolution;
    cell[3] += resolution;
  } else if (edge & 4) {
    // bottom
    cell[1] -= resolution;
    cell[3] -= resolution;
  } else if (edge & 2) {
    // right
    cell[0] += resolution;
    cell[2] += resolution;
  } else if (edge & 1) {
    // left
    cell[0] -= resolution;
    cell[2] -= resolution;
  }
}
