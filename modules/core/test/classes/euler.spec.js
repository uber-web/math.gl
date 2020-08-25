import {Euler, Matrix4, Quaternion, Pose} from '@math.gl/core';
import test from 'tape-catch';
import {tapeEquals} from 'test/utils/tape-assertions';

const DEGREE_TO_RADIANS = Math.PI / 180;

function extendToMatrix4(arr) {
  const matrix4 = new Matrix4();
  matrix4.setRowMajor(
    arr[0],
    arr[1],
    arr[2],
    0,
    arr[3],
    arr[4],
    arr[5],
    0,
    arr[6],
    arr[7],
    arr[8],
    0,
    0,
    0,
    0,
    1
  );

  return matrix4;
}

test('Euler#import', t => {
  t.equals(typeof Euler, 'function');
  t.ok(Euler.ZYX >= 0);
  t.ok(Euler.YXZ > 0);
  t.ok(Euler.XZY > 0);
  t.ok(Euler.ZXY > 0);
  t.ok(Euler.YZX > 0);
  t.ok(Euler.XYZ > 0);

  t.ok(Euler.RollPitchYaw >= 0);
  t.ok(Euler.DefaultOrder >= 0);
  t.ok(Euler.RotationOrders);

  t.equals(Euler.rotationOrder(Euler.ZYX), 'ZYX');

  t.end();
});

test('Euler#construct and Array.isArray check', t => {
  t.ok(Array.isArray(new Euler()));
  t.end();
});

test('Euler#coverage', t => {
  let result = new Euler().fromRollPitchYaw(0, 0, 0);
  t.ok(result);
  result = new Euler().fromRotationMatrix(Matrix4.IDENTITY);
  t.ok(result);

  const euler = new Euler();

  euler.x = euler.y;
  euler.y = euler.z;
  euler.z = euler.x;

  euler.beta = euler.alpha;
  euler.gamma = euler.beta;
  euler.alpha = euler.gamma;

  t.ok(euler.alpha >= 0);
  t.ok(euler.beta >= 0);
  t.ok(euler.gamma >= 0);

  euler.phi = euler.theta;
  euler.theta = euler.psi;
  euler.psi = euler.phi;

  euler.order = Euler.XYZ;
  euler.order = euler.order;

  euler.copy([0, 0, 0, 1]);

  euler.to([0, 0, 0, 0]);
  euler.toArray4([0, 0, 0, 0]);
  euler.toVector3([0, 0, 0]);

  // result = euler.getQuaternion();
  // t.ok(result);

  t.end();
});

test('Euler#toQuaternion', t => {
  const eulers = [
    new Euler(
      90 * DEGREE_TO_RADIANS,
      -89 * DEGREE_TO_RADIANS,
      -180 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    ),
    new Euler(
      30 * DEGREE_TO_RADIANS,
      45 * DEGREE_TO_RADIANS,
      90 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    ),
    new Euler(
      11 * DEGREE_TO_RADIANS,
      67 * DEGREE_TO_RADIANS,
      45 * DEGREE_TO_RADIANS,
      Euler.RollPitchYaw
    )
  ];
  const quaternions = eulers.map(e => e.toQuaternion());
  quaternions.every((q, i) => {
    tapeEquals(
      t,
      new Euler().fromQuaternion(q),
      eulers[i],
      'Euler.fromQuaternion returns correct value'
    );
  });
  t.end();
});

test('Euler.fromQuaternion', t => {
  // transformMatrix result from https://www.wolframalpha.com/input/?i=quaternion:
  const testCases = [
    {
      quaternion: new Quaternion(
        -0.49561769378289866,
        -0.5043442292812725,
        -0.5043442292812726,
        0.49561769378289866
      ),
      transformMatrix: extendToMatrix4([
        -0.017452406437283,
        0.999847695156391,
        10e-15,
        10e-15,
        10e-15,
        1.0,
        0.999847695156391,
        0.017452406437283,
        10e-15
      ])
    },
    {
      quaternion: new Quaternion(
        -0.09229595564125728,
        0.4304593345768794,
        0.560985526796931,
        0.7010573846499779
      ),
      transformMatrix: extendToMatrix4([
        0.1e-14,
        -0.86602540378444,
        0.5,
        0.70710678118655,
        0.35355339059327,
        0.61237243569579,
        -0.70710678118655,
        0.35355339059327,
        0.61237243569579
      ])
    },
    {
      quaternion: new Quaternion(
        -0.13640420781001386,
        0.5381614474482503,
        0.2687711688270994,
        0.7871074941705494
      ),
      transformMatrix: extendToMatrix4([
        0.27628863057544,
        -0.56991857422771,
        0.77385877998831,
        0.27628863057544,
        0.81831190179808,
        0.50401411090402,
        -0.92050485345244,
        0.07455501408938,
        0.38355229714425
      ])
    }
  ];

  const eulers = testCases.map(tc => new Euler().fromQuaternion(tc.quaternion));
  const results = eulers.map(e => {
    const pose = new Pose({yaw: e.yaw, pitch: e.pitch, roll: e.roll});
    return pose.getTransformationMatrix();
  });

  results.every((result, i) =>
    tapeEquals(t, result, testCases[i].transformMatrix, 'Euler.fromQuaternion OK')
  );

  t.end();
});
