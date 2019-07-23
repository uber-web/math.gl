// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-catch';

import {Vector3} from 'math.gl';
import {
  CullingVolume,
  BoundingSphere,
  AxisAlignedBoundingBox,
  makeBoundingSphereFromPoints,
  _PerspectiveFrustum as PerspectiveFrustum,
  Intersect
} from '@math.gl/culling';

const frustum = new PerspectiveFrustum();
frustum.near = 1.0;
frustum.far = 2.0;
frustum.fov = Math.PI / 3;
frustum.aspectRatio = 1.0;

let cullingVolume = frustum.computeCullingVolume(
  new Vector3(),
  new Vector3().negate(new Vector3(0, 0, 1), new Vector3()),
  new Vector3(0, 1, 0)
);

cullingVolume = frustum.computeCullingVolume(
  new Vector3(),
  new Vector3().negate(new Vector3(0, 0, 1), new Vector3()),
  new Vector3(0, 1, 0)
);

test('CullingVolume#constructor', t => {
  t.doesNotThrow(() => new CullingVolume());
  t.ok(CullingVolume.MASK_INSIDE >= 0);
  t.ok(CullingVolume.MASK_OUTSIDE >= 0);
  t.ok(CullingVolume.MASK_INDETERMINATE >= 0);
  t.end();
});

test('CullingVolume#computeVisibility throws without a bounding volume', t => {
  t.throws(() => new CullingVolume().computeVisibility());
  t.end();
});

test('CullingVolume#fromBoundingSphere', t => {
  const sphere = makeBoundingSphereFromPoints([
    new Vector3(0, -2.0, -1.5),
    new Vector3(0, 0, -1.5)
  ]);
  t.doesNotThrow(() => new CullingVolume().fromBoundingSphere(sphere));
  t.end();
});

test('CullingVolume#computeVisibilityWithPlaneMask throws without a bounding volume', t => {
  t.throws(() =>
    new CullingVolume().computeVisibilityWithPlaneMask(undefined, CullingVolume.MASK_INDETERMINATE)
  );
  t.end();
});

test('CullingVolume#computeVisibilityWithPlaneMask throws without a parent plane mask', t => {
  t.throws(() =>
    new CullingVolume().computeVisibilityWithPlaneMask(new BoundingSphere(), undefined)
  );
  t.end();
});

function testWithAndWithoutPlaneMask(t, culling, bound, intersect) {
  t.equals(culling.computeVisibility(bound), intersect);

  const mask = culling.computeVisibilityWithPlaneMask(bound, CullingVolume.MASK_INDETERMINATE);
  if (intersect === Intersect.INSIDE) {
    t.equals(mask, CullingVolume.MASK_INSIDE);
  } else if (intersect === Intersect.OUTSIDE) {
    t.equals(mask, CullingVolume.MASK_OUTSIDE);
  } else {
    t.notOk(mask === CullingVolume.MASK_INSIDE);
    t.notOk(mask === CullingVolume.MASK_OUTSIDE);
  }
  t.equals(culling.computeVisibilityWithPlaneMask(bound, mask), mask);
}

test('CullingVolume#box intersections', tt => {
  test('CullingVolume#can contain an axis aligned bounding box', t => {
    const box1 = new AxisAlignedBoundingBox().fromPoints([
      new Vector3(-0.5, 0, -1.25),
      new Vector3(0.5, 0, -1.25),
      new Vector3(-0.5, 0, -1.75),
      new Vector3(0.5, 0, -1.75)
    ]);
    testWithAndWithoutPlaneMask(t, cullingVolume, box1, Intersect.INSIDE);
    t.end();
  });
  tt.end();
});

/*
  test('CullingVolume#can partially contain an axis aligned bounding box', tt => {
    test('CullingVolume#on the far plane', t => {
      const box2 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 0, -1.5),
        new Vector3(0.5, 0, -1.5),
        new Vector3(-0.5, 0, -2.5),
        new Vector3(0.5, 0, -2.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box2, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the near plane', t => {
      const box3 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 0, -0.5),
        new Vector3(0.5, 0, -0.5),
        new Vector3(-0.5, 0, -1.5),
        new Vector3(0.5, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box3, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the left plane', t => {
      const box4 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-1.5, 0, -1.25),
        new Vector3(0, 0, -1.25),
        new Vector3(-1.5, 0, -1.5),
        new Vector3(0, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box4, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the right plane', t => {
      const box5 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(0, 0, -1.25),
        new Vector3(1.5, 0, -1.25),
        new Vector3(0, 0, -1.5),
        new Vector3(1.5, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box5, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the top plane', t => {
      const box6 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 0, -1.25),
        new Vector3(0.5, 0, -1.25),
        new Vector3(-0.5, 2.0, -1.75),
        new Vector3(0.5, 2.0, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box6, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the bottom plane', t => {
      const box7 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, -2.0, -1.25),
        new Vector3(0.5, 0, -1.25),
        new Vector3(-0.5, -2.0, -1.5),
        new Vector3(0.5, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box7, Intersect.INTERSECTING);
      t.end();
    });
    tt.end();
  });

  test('CullingVolume#can not contain an axis aligned bounding box', tt => {
    test('CullingVolume#past the far plane', t => {
      const box8 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 0, -2.25),
        new Vector3(0.5, 0, -2.25),
        new Vector3(-0.5, 0, -2.75),
        new Vector3(0.5, 0, -2.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box8, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#before the near plane', t => {
      const box9 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 0, -0.25),
        new Vector3(0.5, 0, -0.25),
        new Vector3(-0.5, 0, -0.75),
        new Vector3(0.5, 0, -0.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box9, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the left plane', t => {
      const box10 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-5, 0, -1.25),
        new Vector3(-3, 0, -1.25),
        new Vector3(-5, 0, -1.75),
        new Vector3(-3, 0, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box10, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the right plane', t => {
      const box11 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(3, 0, -1.25),
        new Vector3(5, 0, -1.25),
        new Vector3(3, 0, -1.75),
        new Vector3(5, 0, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box11, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the top plane', t => {
      const box12 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, 3, -1.25),
        new Vector3(0.5, 3, -1.25),
        new Vector3(-0.5, 5, -1.75),
        new Vector3(0.5, 5, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box12, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the bottom plane', t => {
      const box13 = AxisAlignedBoundingBox.fromPoints([
        new Vector3(-0.5, -3, -1.25),
        new Vector3(0.5, -3, -1.25),
        new Vector3(-0.5, -5, -1.75),
        new Vector3(0.5, -5, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, box13, Intersect.OUTSIDE);
      t.end();
    });
    tt.end();
  });
  ttt.end();
});
*/

/*
test('CullingVolume#sphere intersection', ttt => {
  test('CullingVolume#can contain a sphere', t => {
    const sphere1 = makeBoundingSphereFromPoints([
      new Vector3(0, 0, -1.25),
      new Vector3(0, 0, -1.75)
    ]);
    testWithAndWithoutPlaneMask(t, cullingVolume, sphere1, Intersect.INSIDE);
    t.end();
  });

  test('CullingVolume#can partially contain a sphere', tt => {
    test('CullingVolume#on the far plane', t => {
      const sphere2 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -1.5),
        new Vector3(0, 0, -2.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere2, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the near plane', t => {
      const sphere3 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -0.5),
        new Vector3(0, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere3, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the left plane', t => {
      const sphere4 = makeBoundingSphereFromPoints([
        new Vector3(-1.0, 0, -1.5),
        new Vector3(0, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere4, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the right plane', t => {
      const sphere5 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -1.5),
        new Vector3(1.0, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere5, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the top plane', t => {
      const sphere6 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -1.5),
        new Vector3(0, 2.0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere6, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the bottom plane', t => {
      const sphere7 = makeBoundingSphereFromPoints([
        new Vector3(0, -2.0, -1.5),
        new Vector3(0, 0, -1.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere7, Intersect.INTERSECTING);
      t.end();
    });
    tt.end();
  });

  test('CullingVolume#can not contain a sphere', tt => {
    test('CullingVolume#past the far plane', t => {
      const sphere8 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -2.25),
        new Vector3(0, 0, -2.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere8, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#before the near plane', t => {
      const sphere9 = makeBoundingSphereFromPoints([
        new Vector3(0, 0, -0.25),
        new Vector3(0, 0, -0.5)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere9, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the left plane', t => {
      const sphere10 = makeBoundingSphereFromPoints([
        new Vector3(-5, 0, -1.25),
        new Vector3(-4.5, 0, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere10, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the right plane', t => {
      const sphere11 = makeBoundingSphereFromPoints([
        new Vector3(4.5, 0, -1.25),
        new Vector3(5, 0, -1.75)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere11, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the top plane', t => {
      const sphere12 = makeBoundingSphereFromPoints([
        new Vector3(-0.5, 4.5, -1.25),
        new Vector3(-0.5, 5, -1.25)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere12, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the bottom plane', t => {
      const sphere13 = makeBoundingSphereFromPoints([
        new Vector3(-0.5, -4.5, -1.25),
        new Vector3(-0.5, -5, -1.25)
      ]);
      testWithAndWithoutPlaneMask(t, cullingVolume, sphere13, Intersect.OUTSIDE);
      t.end();
    });
    tt.end();
  });
  ttt.end();
});

test('CullingVolume#construct from bounding sphere', ttt => {
  const boundingSphereCullingVolume = new BoundingSphere(
    new Vector3(1000.0, 2000.0, 3000.0),
    100.0
  );
  const cullingVolume = new CullingVolume().fromBoundingSphere(boundingSphereCullingVolume);

  test('CullingVolume#throws without a boundingSphere', t => {
    t.throws(() => new CullingVolume().fromBoundingSphere());
    t.end();
  });

  test('CullingVolume#can contain a volume', t => {
    const sphere1 = BoundingSphere.clone(boundingSphereCullingVolume);
    sphere1.radius *= 0.5;
    testWithAndWithoutPlaneMask(t, cullingVolume, sphere1, Intersect.INSIDE);
    t.end();
  });

  test('CullingVolume#can partially contain a volume', tt => {
    test('CullingVolume#on the far plane', t => {
      const offset = new Vector3(0.0, 0.0, boundingSphereCullingVolume.radius * 1.5);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere2 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere2, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the near plane', t => {
      const offset = new Vector3(0.0, 0.0, -boundingSphereCullingVolume.radius * 1.5);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere3 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere3, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the left plane', t => {
      const offset = new Vector3(-boundingSphereCullingVolume.radius * 1.5, 0.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere4 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere4, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the right plane', t => {
      const offset = new Vector3(boundingSphereCullingVolume.radius * 1.5, 0.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere5 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere5, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the top plane', t => {
      const offset = new Vector3(0.0, boundingSphereCullingVolume.radius * 1.5, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere6 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere6, Intersect.INTERSECTING);
      t.end();
    });

    test('CullingVolume#on the bottom plane', t => {
      const offset = new Vector3(0.0, -boundingSphereCullingVolume.radius * 1.5, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere7 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere7, Intersect.INTERSECTING);
    });
    tt.end();
  });

  test('CullingVolume#can not contain a volume', tt => {
    test('CullingVolume#past the far plane', t => {
      const offset = new Vector3(0.0, 0.0, boundingSphereCullingVolume.radius * 2.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere8 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere8, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#before the near plane', t => {
      const offset = new Vector3(0.0, 0.0, -boundingSphereCullingVolume.radius * 2.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere9 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere9, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the left plane', t => {
      const offset = new Vector3(-boundingSphereCullingVolume.radius * 2.0, 0.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere10 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere10, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the right plane', t => {
      const offset = new Vector3(boundingSphereCullingVolume.radius * 2.0, 0.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere11 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere11, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the top plane', t => {
      const offset = new Vector3(0.0, boundingSphereCullingVolume.radius * 2.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere12 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere12, Intersect.OUTSIDE);
      t.end();
    });

    test('CullingVolume#past the bottom plane', t => {
      const offset = new Vector3(0.0, -boundingSphereCullingVolume.radius * 2.0, 0.0);
      const center = new Vector3().add(boundingSphereCullingVolume.center, offset, new Vector3());
      const radius = boundingSphereCullingVolume.radius * 0.5;
      const sphere13 = new BoundingSphere(center, radius);

      testWithAndWithoutPlaneMask(t, cullingVolume, sphere13, Intersect.OUTSIDE);
      t.end();
    });
    tt.end();
  });
  ttt.end();
});
*/
