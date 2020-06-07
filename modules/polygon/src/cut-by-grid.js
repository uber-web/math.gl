/* eslint-disable max-statements, max-depth, complexity */
import {bitCode, intersect} from './lineclip';
import {getPointAtIndex, copy, push} from './utils';

export function cutPolylineByGrid(positions, options = {}) {
  const {
    size = 2,
    broken = false,
    gridResolution = 10,
    gridOffset = [0, 0],
    startIndex = 0,
    endIndex = positions.length
  } = options;
  const numPoints = (endIndex - startIndex) / size;
  let part = [];
  const result = [part];
  const a = getPointAtIndex(positions, 0, size, startIndex);
  let b;
  let codeB;
  const cell = getGridCell(a, gridResolution, gridOffset, []);
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

const TYPE_VERTEX = 0;
const TYPE_EDGE = 1;
const TYPE_INSIDE = 2;
const FLAG_NEW_EDGE = 4;
const TYPE_ALL = TYPE_VERTEX | TYPE_EDGE | TYPE_INSIDE;

export function cutPolygonByGrid(positions, holeIndices, options = {}) {
  if (!positions.length) {
    // input is empty
    return [];
  }
  const {size = 2, gridResolution = 10, gridOffset = [0, 0], vertexTypes = false} = options;
  const result = [];
  const queue = [{pos: positions, types: vertexTypes && [], holes: holeIndices || []}];
  const bbox = [[], []];
  let cell = [];

  // Recursively bisect polygon until every part fit in a single grid cell
  while (queue.length) {
    const {pos, types, holes} = queue.shift();

    getBoundingBox(pos, size, bbox);
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
          polygonLow.pos = polygonLow.pos.concat(parts[0].pos);
          if (vertexTypes) {
            polygonLow.types = polygonLow.types.concat(parts[0].types);
          }
        }
        if (parts[1]) {
          polygonHigh.holes.push(polygonHigh.pos.length);
          polygonHigh.pos = polygonHigh.pos.concat(parts[1].pos);
          if (vertexTypes) {
            polygonHigh.types = polygonHigh.types.concat(parts[1].types);
          }
        }
      }
    } else {
      // Polygon fits in a single cell, no more processing required
      const polygon = {positions: pos};
      if (vertexTypes) {
        for (let i = 0; i < types.length; i++) {
          types[i] = types[i] & TYPE_ALL;
        }
        polygon.vertexTypes = types;
      }
      if (holes.length) {
        polygon.holeIndices = holes;
      }

      result.push(polygon);
    }
  }
  return result;
}

// vertexTypes:
// TYPE_VERTEX - vertex from the original polygon
// TYPE_EDGE - interpolated point on the edge of the original polygon
// TYPE_INSIDE - inside the original polygon
// FLAG_NEW_EDGE marks a vertex if the edge between this vertex and the next is added by slicing
// eslint-disable-next-line max-params
function bisectPolygon(positions, vertexTypes, size, startIndex, endIndex, bbox, edge) {
  const numPoints = (endIndex - startIndex) / size;
  const resultLow = [];
  const resultHigh = [];
  const typesLow = vertexTypes && [];
  const typesHigh = vertexTypes && [];
  const scratchPoint = [];

  let p;
  let side;
  let type;
  const prev = getPointAtIndex(positions, numPoints - 1, size, startIndex);
  let prevSide = Math.sign(edge & 8 ? prev[1] - bbox[3] : prev[0] - bbox[2]);
  let prevType = vertexTypes && vertexTypes[endIndex / size - 1];
  let lowPointCount = 0;
  let highPointCount = 0;

  for (let i = 0; i < numPoints; i++) {
    p = getPointAtIndex(positions, i, size, startIndex, p);
    side = Math.sign(edge & 8 ? p[1] - bbox[3] : p[0] - bbox[2]);
    type = (vertexTypes && vertexTypes[startIndex / size + i]) || TYPE_VERTEX;

    // if segment goes through the boundary, add an intersection
    if (side && prevSide && prevSide !== side) {
      intersect(prev, p, edge, bbox, scratchPoint);
      push(resultLow, scratchPoint);
      push(resultHigh, scratchPoint);
      if (vertexTypes) {
        const insertedType =
          type & TYPE_INSIDE || prevType & TYPE_INSIDE || prevType & FLAG_NEW_EDGE
            ? TYPE_INSIDE
            : TYPE_EDGE;
        typesLow.push(insertedType);
        typesHigh.push(insertedType);
      }
    }

    if (side <= 0) {
      push(resultLow, p);
      lowPointCount -= side;
    }
    if (side >= 0) {
      push(resultHigh, p);
      highPointCount += side;
    }

    if (vertexTypes) {
      if (side <= 0) {
        typesLow.push(type);
      } else {
        typesLow[typesLow.length - 1] |= FLAG_NEW_EDGE;
      }
      if (side >= 0) {
        typesHigh.push(type);
      } else {
        typesHigh[typesHigh.length - 1] |= FLAG_NEW_EDGE;
      }
    }

    copy(prev, p);
    prevSide = side;
    prevType = type;
  }

  return [
    lowPointCount ? {pos: resultLow, types: typesLow} : null,
    highPointCount ? {pos: resultHigh, types: typesHigh} : null
  ];
}

function getGridCell(p, gridResolution, gridOffset, out) {
  const left = Math.floor((p[0] - gridOffset[0]) / gridResolution) * gridResolution + gridOffset[0];
  const bottom =
    Math.floor((p[1] - gridOffset[1]) / gridResolution) * gridResolution + gridOffset[1];
  out[0] = left;
  out[1] = bottom;
  out[2] = left + gridResolution;
  out[3] = bottom + gridResolution;
  return out;
}

function moveToNeighborCell(cell, gridResolution, edge) {
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
