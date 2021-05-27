/*
  Adapted from https://github.com/mapbox/earcut

  ISC License

  Copyright (c) 2016, Mapbox

  Permission to use, copy, modify, and/or distribute this software for any purpose
  with or without fee is hereby granted, provided that the above copyright notice
  and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
  OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
  TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
  THIS SOFTWARE.

 */

import {getPolygonSignedArea} from '@math.gl/polygon';

/**
 * return a percentage difference between the polygon area and its triangulation area;
 * used to verify correctness of triangulation
 */
export function deviation(data, holeIndices, dim, triangles) {
  const hasHoles = holeIndices && holeIndices.length;
  const outerLen = hasHoles ? holeIndices[0] * dim : data.length;

  // Unlike original Mapbox implementation we use `getPolygonSignedArea`
  // which returns values of half the size and of opposite sign
  // Thus below when calculating the triangle area we also divide
  // by two to obtain the correct result
  let polygonArea = Math.abs(getPolygonSignedArea(data, {start: 0, end: outerLen, size: dim}));
  if (hasHoles) {
    for (let i = 0, len = holeIndices.length; i < len; i++) {
      const start = holeIndices[i] * dim;
      const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
      polygonArea -= Math.abs(getPolygonSignedArea(data, {start, end, size: dim}));
    }
  }

  let trianglesArea = 0;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = triangles[i] * dim;
    const b = triangles[i + 1] * dim;
    const c = triangles[i + 2] * dim;
    trianglesArea +=
      Math.abs(
        (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
          (data[a] - data[b]) * (data[c + 1] - data[a + 1])
      ) / 2;
  }

  return polygonArea === 0 && trianglesArea === 0
    ? 0
    : Math.abs((trianglesArea - polygonArea) / polygonArea);
}

export function flatten(data) {
  const dim = data[0][0].length;
  const result = {vertices: [], holes: [], dimensions: dim};
  let holeIndex = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      for (let d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
    }
    if (i > 0) {
      holeIndex += data[i - 1].length;
      result.holes.push(holeIndex);
    }
  }
  return result;
}
