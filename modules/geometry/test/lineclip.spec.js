import test from 'tape-catch';
import {equals} from '@math.gl/core';
import {lineclip, polygonclip} from '@math.gl/geometry';

test('clips line', t => {
  const result = lineclip(
    [
      [-10, 10],
      [10, 10],
      [10, -10],
      [20, -10],
      [20, 10],
      [40, 10],
      [40, 20],
      [20, 20],
      [20, 40],
      [10, 40],
      [10, 20],
      [5, 20],
      [-10, 20]
    ].flat(),
    [0, 0, 30, 30]
  );

  t.comment(result);
  t.ok(
    equals(result, [
      [[0, 10], [10, 10], [10, 0]].flat(),
      [[20, 0], [20, 10], [30, 10]].flat(),
      [[30, 20], [20, 20], [20, 30]].flat(),
      [[10, 30], [10, 20], [5, 20], [0, 20]].flat()
    ])
  );

  t.end();
});

test('clips line crossing through many times', t => {
  const result = lineclip([[10, -10], [10, 30], [20, 30], [20, -10]].flat(), [0, 0, 20, 20]);

  t.comment(result);
  t.ok(equals(result, [[[10, 0], [10, 20]].flat(), [[20, 20], [20, 0]].flat()]));

  t.end();
});

test('clips 3d line', t => {
  const result = lineclip(
    [[10, -10, 0], [10, 30, 20], [20, 30, 10], [20, -10, -10]].flat(),
    [0, 0, 20, 20],
    {size: 3}
  );

  t.comment(result);
  t.ok(equals(result, [[[10, 0, 5], [10, 20, 15]].flat(), [[20, 20, 5], [20, 0, -5]].flat()]));

  t.end();
});

test('clips line from partial array', t => {
  const polyline = [[10, -10], [10, 30], [20, 30], [20, -10]].flat();
  const result = lineclip([].concat([0, 0, 0, 20], polyline, [20, 0, 20, 20]), [0, 0, 20, 20], {
    startIndex: 4,
    endIndex: 12
  });

  t.comment(result);
  t.ok(equals(result, [[[10, 0], [10, 20]].flat(), [[20, 20], [20, 0]].flat()]));

  t.end();
});

test('clips polygon', t => {
  const result = polygonclip(
    [
      [-10, 20],
      [-10, 10],
      [0, 10],
      [10, 10],
      [10, 5],
      [10, -5],
      [10, -10],
      [20, -10],
      [20, 10],
      [40, 10],
      [40, 20],
      [20, 20],
      [20, 40],
      [10, 40],
      [10, 20],
      [5, 20],
      [-10, 20]
    ].flat(),
    [0, 0, 30, 30]
  );

  t.comment(result);
  t.ok(
    equals(
      result,
      [
        [10, 5],
        [10, 0],
        [20, 0],
        [20, 10],
        [30, 10],
        [30, 20],
        [20, 20],
        [20, 30],
        [10, 30],
        [10, 20],
        [5, 20],
        [0, 20],
        [0, 10],
        [0, 10],
        [10, 10],
        [10, 5]
      ].flat()
    )
  );

  t.end();
});

test('polygon contains bbox', t => {
  const result = polygonclip([[10, 40], [40, 10], [10, -20], [-20, 10], [10, 40]].flat(), [
    0,
    0,
    20,
    20
  ]);

  t.comment(result);
  t.ok(equals(result, [[0, 20], [20, 20], [20, 0], [0, 0], [0, 20]].flat()));

  t.end();
});

test('clips 3d polygon', t => {
  const result = polygonclip(
    [[10, -5, 0], [25, 10, 12], [10, 25, 24], [-5, 10, 12], [10, -5, 0]].flat(),
    [0, 0, 20, 20],
    {size: 3}
  );

  t.comment(result);
  t.ok(
    equals(
      result,
      [
        [5, 20, 20],
        [0, 15, 16],
        [0, 5, 8],
        [5, 0, 4],
        [15, 0, 4],
        [20, 5, 8],
        [20, 15, 16],
        [15, 20, 20],
        [5, 20, 20]
      ].flat()
    )
  );

  t.end();
});

test('clips polygon fom partial array', t => {
  const polygon = [[10, -5], [25, 10], [10, 25], [-5, 10], [10, -5]].flat();
  const result = polygonclip([].concat([0, 0, 0, 20], polygon, [20, 0, 20, 20]), [0, 0, 20, 20], {
    startIndex: 4,
    endIndex: 14
  });

  t.comment(result);
  t.ok(
    equals(
      result,
      [[5, 20], [0, 15], [0, 5], [5, 0], [15, 0], [20, 5], [20, 15], [15, 20], [5, 20]].flat()
    )
  );

  t.end();
});

test('appends result if passed third argument', t => {
  const arr = [];
  const result = lineclip([[-10, 10], [30, 10]].flat(), [0, 0, 20, 20], {size: 2}, arr);

  t.comment(result);
  t.ok(equals(result, [[[0, 10], [20, 10]].flat()]));
  t.is(result, arr);

  t.end();
});

test('clips floating point lines', t => {
  const line = [
    [-86.66015624999999, 42.22851735620852],
    [-81.474609375, 38.51378825951165],
    [-85.517578125, 37.125286284966776],
    [-85.8251953125, 38.95940879245423],
    [-90.087890625, 39.53793974517628],
    [-91.93359375, 42.32606244456202],
    [-86.66015624999999, 42.22851735620852]
  ].flat();

  const bbox = [-91.93359375, 42.29356419217009, -91.7578125, 42.42345651793831];

  const result = lineclip(line, bbox);

  t.comment(result);
  t.ok(
    equals(result, [
      [
        [-91.91208030440808, 42.29356419217009],
        [-91.93359375, 42.32606244456202],
        [-91.7578125, 42.3228109416169]
      ].flat()
    ])
  );

  t.end();
});

test('preserves line if no protrusions exist', t => {
  const result = lineclip([[1, 1], [2, 2], [3, 3]].flat(), [0, 0, 30, 30]);

  t.comment(result);
  t.ok(equals(result, [[[1, 1], [2, 2], [3, 3]].flat()]));

  t.end();
});

test('clips without leaving empty parts', t => {
  const result = lineclip([[40, 40], [50, 50]].flat(), [0, 0, 30, 30]);

  t.deepEquals(result, []);

  t.end();
});

test('still works when polygon never crosses bbox', t => {
  const result = polygonclip([[3, 3], [5, 3], [5, 5], [3, 5], [3, 3]].flat(), [0, 0, 2, 2]);

  t.deepEquals(result, []);

  t.end();
});
