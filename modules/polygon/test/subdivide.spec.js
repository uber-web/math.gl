import test from 'tape-catch';
import {equals} from '@math.gl/core';
import {subdividePolyline} from '@math.gl/polygon';

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
