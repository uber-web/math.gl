/* eslint-disable max-statements, max-depth, complexity */
import {bitCode, intersect} from './lineclip';
import {getPointAtIndex, copy, push} from './utils';

export function subdividePolyline(positions, options = {}) {
  const {
    size = 2,
    broken = false,
    resolution = 10,
    offset = [0, 0],
    startIndex = 0,
    endIndex = positions.length
  } = options;
  const numPoints = (endIndex - startIndex) / size;
  let part = [];
  const result = [part];
  const a = getPointAtIndex(positions, 0, size, startIndex);
  let b;
  let codeB;
  const cell = getGridCell(a, resolution, offset, []);
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

      moveToNeighborCell(cell, resolution, codeB);
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

export function subdividePolygon(positions, holeIndices, options) {
  if (!positions.length) {
    // input is empty
    return [];
  }
  if (!Array.isArray(holeIndices)) {
    options = holeIndices;
    holeIndices = null;
  }
  options = options || {};
  const {size = 2, resolution = 10, offset = [0, 0]} = options;
  const result = [];
  const queue = [{pos: positions, holes: holeIndices || []}];
  const bbox = [[], []];
  const cell = [];

  // Recursively bisect polygon until every part fit in a single grid cell
  while (queue.length) {
    const {pos, holes} = queue.shift();

    getBoundingBox(pos, size, bbox);
    getGridCell(bbox[0], resolution, offset, cell);
    const code = bitCode(bbox[1], cell);

    if (code) {
      // Split the outer ring at the boundary
      let parts = bisectPolygon(pos, size, 0, holes[0] || pos.length, cell, code);
      const polygonLow = {pos: parts[0], holes: []};
      const polygonHigh = {pos: parts[1], holes: []};
      queue.push(polygonLow, polygonHigh);

      // Split each hole at the boundary
      for (let i = 0; i < holes.length; i++) {
        parts = bisectPolygon(pos, size, holes[i], holes[i + 1] || pos.length, cell, code);

        if (parts[0]) {
          polygonLow.holes.push(polygonLow.pos.length);
          polygonLow.pos = polygonLow.pos.concat(parts[0]);
        }
        if (parts[1]) {
          polygonHigh.holes.push(polygonHigh.pos.length);
          polygonHigh.pos = polygonHigh.pos.concat(parts[1]);
        }
      }
    } else {
      // Polygon fits in a single cell, no more processing required
      result.push(holes.length ? {positions: pos, holeIndices: holes} : pos);
    }
  }
  return result;
}

// eslint-disable-next-line max-params
function bisectPolygon(positions, size, startIndex, endIndex, bbox, edge) {
  const numPoints = (endIndex - startIndex) / size;
  const resultLow = [];
  const resultHigh = [];
  const scratchPoint = [];

  let p;
  let side;
  const prev = getPointAtIndex(positions, numPoints - 1, size, startIndex);
  let prevSide = Math.sign(edge & 8 ? prev[1] - bbox[3] : prev[0] - bbox[2]);
  let lowPointCount = 0;
  let highPointCount = 0;

  for (let i = 0; i < numPoints; i++) {
    p = getPointAtIndex(positions, i, size, startIndex, p);
    side = Math.sign(edge & 8 ? p[1] - bbox[3] : p[0] - bbox[2]);

    // if segment goes through the boundary, add an intersection
    if (side && prevSide && prevSide !== side) {
      intersect(prev, p, edge, bbox, scratchPoint);
      push(resultLow, scratchPoint);
      push(resultHigh, scratchPoint);
    }

    if (side <= 0) {
      push(resultLow, p);
      lowPointCount -= side;
    }
    if (side >= 0) {
      push(resultHigh, p);
      highPointCount += side;
    }

    copy(prev, p);
    prevSide = side;
  }

  return [lowPointCount ? resultLow : null, highPointCount ? resultHigh : null];
}

function getGridCell(p, resolution, offset, out) {
  const left = Math.floor((p[0] - offset[0]) / resolution) * resolution + offset[0];
  const bottom = Math.floor((p[1] - offset[1]) / resolution) * resolution + offset[1];
  out[0] = left;
  out[1] = bottom;
  out[2] = left + resolution;
  out[3] = bottom + resolution;
  return out;
}

function moveToNeighborCell(cell, resolution, edge) {
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

function getBoundingBox(positions, size, out) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < positions.length; i += size) {
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
