import test from 'tape-catch';
import {equals} from '@math.gl/core';
import {subdividePolyline, subdividePolygon} from '@math.gl/polygon';

import {flatten} from './lineclip.spec';

test('subdivide line', t => {
  const result = subdividePolyline([0, 0, 25, 40]);
  t.comment(result);
  t.ok(
    equals(
      result,
      flatten([[0, 0], [6.25, 10], [10, 16], [12.5, 20], [18.75, 30], [20, 32], [25, 40]])
    )
  );

  t.end();
});

test('subdivide polyline', t => {
  const result = subdividePolyline(flatten([[30, 20], [25, 25], [5, 5], [10, 20]]));
  t.comment(result);
  t.ok(
    equals(
      result,
      flatten([[30, 20], [25, 25], [20, 20], [10, 10], [5, 5], [6.6666667, 10], [10, 20]])
    )
  );

  t.end();
});

test('subdivide polyline - custom grid', t => {
  const result = subdividePolyline(flatten([[30, 20], [25, 25], [5, 5], [10, 20]]), {
    resolution: 20,
    offset: [-5, -5]
  });
  t.comment(result);
  t.ok(equals(result, flatten([[30, 20], [25, 25], [15, 15], [5, 5], [8.3333333, 15], [10, 20]])));

  t.end();
});

test('subdivide polyline - multiple parts', t => {
  const result = subdividePolyline(flatten([[30, 20], [25, 25], [5, 5], [10, 20]]), {broken: true});
  t.comment(result);
  t.ok(
    equals(result, [
      [30, 20, 25, 25, 20, 20],
      [20, 20, 10, 10],
      [10, 10, 5, 5, 6.6666667, 10],
      [6.6666667, 10, 10, 20]
    ])
  );

  t.end();
});

test('subdivide 3d polyline', t => {
  const result = subdividePolyline(flatten([[30, 20, 0], [25, 25, 0], [5, 5, 20], [10, 20, 30]]), {
    size: 3
  });
  t.comment(result);
  t.ok(
    equals(
      result,
      flatten([
        [30, 20, 0],
        [25, 25, 0],
        [20, 20, 5],
        [10, 10, 15],
        [5, 5, 20],
        [6.6666667, 10, 23.3333333],
        [10, 20, 30]
      ])
    )
  );

  t.end();
});

test('subdivide polyline from partial array', t => {
  const polyline = flatten([[30, 20], [25, 25], [5, 5], [10, 20]]);
  const result = subdividePolyline([].concat([0, 0, 0, 20], polyline, [20, 20, 20, 0]), {
    startIndex: 4,
    endIndex: 12
  });
  t.comment(result);
  t.ok(
    equals(
      result,
      flatten([[30, 20], [25, 25], [20, 20], [10, 10], [5, 5], [6.6666667, 10], [10, 20]])
    )
  );

  t.end();
});

function arePolygonsEqual(p1, p2) {
  const positions1 = p1.positions || p1;
  const positions2 = p2.positions || p2;
  const holeIndices1 = p1.holeIndices || [];
  const holeIndices2 = p2.holeIndices || [];

  return equals(positions1, positions2) && equals(holeIndices1, holeIndices2);
}

test('subdivide polygon', t => {
  const result = subdividePolygon(flatten([[5, 20], [20, 5], [5, -10]]));

  t.comment(result);
  const expected = [
    [5, 0, 10, 0, 10, -5, 5, -10],
    [10, 0, 15, 0, 10, -5],
    [10, 0, 5, 0, 5, 10, 10, 10],
    [10, 0, 10, 10, 15, 10, 20, 5, 15, 0],
    [10, 10, 5, 10, 5, 20, 10, 15],
    [10, 10, 10, 15, 15, 10]
  ];

  t.is(result.length, expected.length, `should return ${expected.length} polygons`);
  for (let i = 0; i < expected.length; i++) {
    t.ok(arePolygonsEqual(result[i], expected[i]), `polygon ${i}`);
  }

  t.end();
});

test('subdivide polygon - empty', t => {
  t.deepEqual(subdividePolygon([]), [], 'returns empty array');
  t.end();
});

test('subdivide polygon with custom grid', t => {
  const result = subdividePolygon(flatten([[5, 20], [20, 5], [5, -10]]), {
    resolution: 20,
    offset: [5, 5]
  });

  t.comment(result);
  const expected = [[5, 5, 20, 5, 5, -10], [5, 5, 5, 20, 20, 5]];

  t.is(result.length, expected.length, `should return ${expected.length} polygons`);
  for (let i = 0; i < expected.length; i++) {
    t.ok(arePolygonsEqual(result[i], expected[i]), `polygon ${i}`);
  }

  t.end();
});

test('subdivide 3D polygon', t => {
  const result = subdividePolygon(flatten([[5, 20, 0], [20, 5, 15], [5, -10, 30]]), {
    size: 3,
    resolution: 20,
    offset: [5, 5]
  });

  t.comment(result);
  const expected = [[5, 5, 15, 20, 5, 15, 5, -10, 30], [5, 5, 15, 5, 20, 0, 20, 5, 15]];

  t.is(result.length, expected.length, `should return ${expected.length} polygons`);
  for (let i = 0; i < expected.length; i++) {
    t.ok(arePolygonsEqual(result[i], expected[i]), `polygon ${i}`);
  }

  t.end();
});

test('subdivide polygon with holes', t => {
  const result = subdividePolygon(
    flatten([[5, 5], [20, 5], [20, 15], [5, 15], [10, 10], [10, 12], [15, 12], [15, 10]]),
    [8]
  );

  t.comment(result);

  const expected = [
    [10, 10, 5, 10, 5, 5, 10, 5],
    [10, 10, 10, 5, 20, 5, 20, 10],
    [5, 10, 10, 10, 10, 15, 5, 15],
    {
      positions: [10, 10, 20, 10, 20, 15, 10, 15, 10, 10, 10, 12, 15, 12, 15, 10],
      holeIndices: [8]
    }
  ];

  t.is(result.length, expected.length, `should return ${expected.length} polygons`);
  for (let i = 0; i < expected.length; i++) {
    t.ok(arePolygonsEqual(result[i], expected[i]), `polygon ${i}`);
  }

  t.end();
});
