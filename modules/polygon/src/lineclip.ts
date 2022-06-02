/*
  Adapted from https://github.com/mapbox/lineclip to work with flat arrays
  and 3d positions

  ISC License

  Copyright (c) 2015, Mapbox

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

/* eslint-disable max-statements, max-depth, complexity */

import {push, copy, getPointAtIndex} from './utils';
import type {NumericArray} from '@math.gl/core';

export type BoundingBox = [number, number, number, number];

/**
 * Cohen-Sutherland line clipping algorithm, adapted to efficiently
 * handle polylines rather than just segments
 */
export function clipPolyline(
  positions: Readonly<NumericArray>,
  bbox: BoundingBox,
  options?: {
    size?: number;
    startIndex?: number;
    endIndex?: number;
  }
): number[][] {
  const {size = 2, startIndex = 0, endIndex = positions.length} = options || {};
  const numPoints = (endIndex - startIndex) / size;
  const result: number[][] = [];
  let part: number[] = [];
  let a: number[];
  let b: number[];
  let codeA: number = -1;
  let codeB: number;
  let lastCode: number;

  for (let i = 1; i < numPoints; i++) {
    a = getPointAtIndex(positions, i - 1, size, startIndex, a);
    b = getPointAtIndex(positions, i, size, startIndex, b);
    if (codeA < 0) {
      codeA = bitCode(a, bbox);
    }
    codeB = lastCode = bitCode(b, bbox);

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (!(codeA | codeB)) {
        // accept
        push(part, a);

        if (codeB !== lastCode) {
          // segment went outside
          push(part, b);

          if (i < numPoints - 1) {
            // start a new line
            result.push(part);
            part = [];
          }
        } else if (i === numPoints - 1) {
          push(part, b);
        }
        break;
      } else if (codeA & codeB) {
        // trivial reject
        break;
      } else if (codeA) {
        // a outside, intersect with clip edge
        intersect(a, b, codeA, bbox, a);
        codeA = bitCode(a, bbox);
      } else {
        // b outside
        intersect(a, b, codeB, bbox, b);
        codeB = bitCode(b, bbox);
      }
    }

    codeA = lastCode;
  }

  if (part.length) result.push(part);

  return result;
}

/**
 * Sutherland-Hodgeman polygon clipping algorithm
 * polygon must be closed (first vertex == last vertex)
 */
export function clipPolygon(
  positions: Readonly<NumericArray>,
  bbox: BoundingBox,
  options?: {
    size?: number;
    startIndex?: number;
    endIndex?: number;
  }
): number[] {
  const {size = 2, endIndex = positions.length} = options || {};
  let {startIndex = 0} = options || {};
  let numPoints = (endIndex - startIndex) / size;
  let result: number[];
  let p: number[];
  let prev: number[];
  let inside: boolean;
  let prevInside: boolean;

  // clip against each side of the clip rectangle
  for (let edge = 1; edge <= 8; edge *= 2) {
    result = [];
    prev = getPointAtIndex(positions, numPoints - 1, size, startIndex, prev);
    prevInside = !(bitCode(prev, bbox) & edge);

    for (let i = 0; i < numPoints; i++) {
      p = getPointAtIndex(positions, i, size, startIndex, p);
      inside = !(bitCode(p, bbox) & edge);

      // if segment goes through the clip window, add an intersection
      if (inside !== prevInside) push(result, intersect(prev, p, edge, bbox));

      if (inside) push(result, p); // add a point if it's inside

      copy(prev, p);
      prevInside = inside;
    }

    // close loop
    positions = result;
    startIndex = 0;
    numPoints = result.length / size;

    if (!numPoints) break;
  }

  return result;
}

/** intersect a segment against one of the 4 lines that make up the bbox */

export function intersect(
  a: number[],
  b: number[],
  edge: number,
  bbox: BoundingBox,
  out: number[] = []
): number[] {
  let t;
  // Forces out[snapI] to be on the bbox edge
  // Interpolation introduces precision issue which may cause lineclip to be
  // stuck in an infinite loop
  let snap: number;
  if (edge & 8) {
    // top
    t = (bbox[3] - a[1]) / (b[1] - a[1]);
    snap = 3;
  } else if (edge & 4) {
    // bottom
    t = (bbox[1] - a[1]) / (b[1] - a[1]);
    snap = 1;
  } else if (edge & 2) {
    // right
    t = (bbox[2] - a[0]) / (b[0] - a[0]);
    snap = 2;
  } else if (edge & 1) {
    // left
    t = (bbox[0] - a[0]) / (b[0] - a[0]);
    snap = 0;
  } else {
    return null;
  }
  for (let i = 0; i < a.length; i++) {
    out[i] = (snap & 1) === i ? bbox[snap] : t * (b[i] - a[i]) + a[i];
  }
  return out;
}

/**
 * bit code reflects the point position relative to the bbox:
 *         left  mid  right
 *    top  1001  1000  1010
 *    mid  0001  0000  0010
 * bottom  0101  0100  0110
 */
export function bitCode(p: number[], bbox: BoundingBox): number {
  let code = 0;

  if (p[0] < bbox[0]) code |= 1;
  // left
  else if (p[0] > bbox[2]) code |= 2; // right

  if (p[1] < bbox[1]) code |= 4;
  // bottom
  else if (p[1] > bbox[3]) code |= 8; // top

  return code;
}
