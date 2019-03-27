"use strict";var test;module.link('tape-catch',{default(v){test=v}},0);var Matrix4,Vector3,equals;module.link('math.gl',{Matrix4(v){Matrix4=v},Vector3(v){Vector3=v},equals(v){equals=v}},1);var Euler,Pose;module.link('math.gl',{_Euler(v){Euler=v},_Pose(v){Pose=v}},2);var tapeEquals;module.link('math.gl/test/utils/tape-equals',{tapeEquals(v){tapeEquals=v}},3);




const MATRIX_TEST_CASES = [
  {
    TRANSFORM_A_TO_B: {
      yaw: -0.000463243417219643,
      pitch: 0.0015741593198474598,
      roll: -0.0004196925152891523,
      x: -80.6282262740399,
      y: -50.38973468180131,
      z: 0.07585273316544758
    },
    TRANSFORM_B_TO_A: {
      yaw: 0.00046258328710609256,
      pitch: -0.0015743534323298712,
      roll: 0.0004189637708614518,
      x: 80.60489444652502,
      y: 50.42705390985001,
      z: 0.07219608630932267
    }
  },
  {
    TRANSFORM_A_TO_B: {
      yaw: -0.00032679972032649654,
      pitch: 0.0017499351314303354,
      roll: 0.0006456183945756637,
      x: -29.95600959142378,
      y: 33.72513623131151,
      z: -0.40325097780902214
    },
    TRANSFORM_B_TO_A: {
      yaw: 0.0003279299438569828,
      pitch: -0.001749723685062977,
      roll: -0.000646191227277617,
      x: 29.966277810401277,
      y: -33.71504358610052,
      z: 0.47745784137700187
    }
  },
  {
    TRANSFORM_A_TO_B: {
      yaw: 0.0002446845125155644,
      pitch: -0.0029135943983228507,
      roll: -0.0014277591011232099,
      x: 18.109576472225825,
      y: -56.07962629397971,
      z: -0.23393909544671745
    },
    TRANSFORM_B_TO_A: {
      yaw: -0.00024052538065909691,
      pitch: 0.002913940693320739,
      roll: 0.0014270522065598617,
      x: -18.09509570346161,
      y: 56.08358930036468,
      z: 0.3667362087106386
    }
  }
];

test('Pose#import', t => {
  t.equals(typeof Pose, 'function');
  t.end();
});

test('Pose#constructor', t => {
  let pose1;
  let pose2;

  pose1 = new Pose({});
  t.ok(pose1, 'constructed from empty props');

  pose1 = new Pose(MATRIX_TEST_CASES[0].TRANSFORM_A_TO_B);
  t.ok(pose1, 'constructed from x y z pitch roll yaw');

  pose2 = new Pose(pose1);
  t.ok(pose1.equals(pose2), 'reconstructed from another pose');

  const flattenProps = JSON.parse(JSON.stringify(pose1));
  pose2 = new Pose(flattenProps);

  t.ok(pose1.equals(pose2), 'reconstructed from flatten props');

  t.end();
});

test('Pose#setters, getters', t => {
  const SAMPLE = MATRIX_TEST_CASES[0].TRANSFORM_A_TO_B;
  const pose = new Pose({});

  for (const key in SAMPLE) {
    t.equals(pose[key], 0, `gets initial ${key} value`);
    pose[key] = SAMPLE[key];
    t.equals(pose[key], SAMPLE[key], `sets ${key} value`);
  }

  t.end();
});

test('Pose#getPosition, getOrientation', t => {
  const pose = new Pose({});
  t.ok(pose.getPosition() instanceof Vector3, 'position is Vector3');
  t.ok(pose.getOrientation() instanceof Euler, 'orientation is Euler');
  t.end();
});

test('Pose#transformationMatrix', t => {
  MATRIX_TEST_CASES.forEach(testCase => {
    const poseAToB = new Pose(testCase.TRANSFORM_A_TO_B);
    const poseBToA = new Pose(testCase.TRANSFORM_B_TO_A);

    const transformAToB = poseAToB.getTransformationMatrix();
    t.ok(transformAToB instanceof Matrix4, 'getTransformationMatrix returns Matrix4');

    const transformBToA = poseBToA.getTransformationMatrix();
    t.ok(equals(transformAToB, transformBToA.invert()), 'transformation matrices match');
  });

  t.end();
});

test('Pose#getTransformationMatrixFromPose, getTransformationMatrixToPose', t => {
  MATRIX_TEST_CASES.forEach(testCase => {
    const poseA = new Pose(testCase.TRANSFORM_A_TO_B);
    const poseB = new Pose(testCase.TRANSFORM_B_TO_A);

    const transformAToB = poseA.getTransformationMatrixToPose(poseB);
    t.ok(transformAToB instanceof Matrix4, 'getTransformationMatrixToPose returns Matrix4');
    const transformBToA = poseA.getTransformationMatrixFromPose(poseB);
    t.ok(transformBToA instanceof Matrix4, 'getTransformationMatrixFromPose returns Matrix4');

    t.ok(equals(transformAToB, transformBToA.invert()), 'transformation matrices match');
  });

  t.end();
});

test('Pose#toPose', t => {
  const A = new Pose({
    yaw: 0,
    pitch: 0,
    roll: 0,
    x: 10,
    y: 10,
    z: 0
  });

  const B = new Pose({
    yaw: 0,
    pitch: 0,
    roll: 0,
    x: 20,
    y: 20,
    z: 0
  });

  const transformAtoB = A.getTransformationMatrixToPose(B);

  const originAInB = transformAtoB.transformVector([0, 0, 0]);
  tapeEquals(t, originAInB, [10, 10, 0], `originInB should match resultOriginInB`);
  // t.notOk(equals([0, 0, 0], resultOriginInB), `[0, 0, 0] represents AfromB`);
  t.end();
});
