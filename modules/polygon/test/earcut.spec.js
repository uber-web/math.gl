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

import test from 'tape-promise/tape';
import {earcut} from '@math.gl/polygon';

test('indices-2d', function(t) {
  const indices = earcut([10, 0, 0, 50, 60, 60, 70, 10]);
  t.same(indices, [1, 0, 3, 3, 2, 1]);
  t.end();
});

test('indices-3d', function(t) {
  const indices = earcut([10, 4, 0, 0, 50, 0, 60, 60, 0, 70, 10, 0], null, 3);
  t.same(indices, [1, 0, 3, 3, 2, 1]);
  t.end();
});

test('empty', function(t) {
  t.same(earcut([]), []);
  t.end();
});
