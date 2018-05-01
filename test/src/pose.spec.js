import test from 'tape-catch';
import {Matrix4, Pose} from 'math.gl';

const degreesToRadians = x => x * Math.PI / 180;

const MATRIX_TEST_CASES = [
  {
    TRANSFORM_A_TO_B: {
      yaw: degreesToRadians(-0.02654189269390347),
      pitch: degreesToRadians(0.0901926853084437),
      roll: degreesToRadians(-0.024046609819298202),
      x: -80.6282262740399,
      y: -50.38973468180131,
      z: 0.07585273316544758
    },
    TRANSFORM_B_TO_A: {
      yaw: degreesToRadians(0.026504070024467537),
      pitch: degreesToRadians(-0.09020380713443667),
      roll: degreesToRadians(0.02400485583924729),
      x: 80.60489444652502,
      y: 50.42705390985001,
      z: 0.07219608630932267
    }
  },
  {
    TRANSFORM_A_TO_B: {
      yaw: degreesToRadians(-0.018724244720763915),
      pitch: degreesToRadians(0.10026389745262923),
      roll: degreesToRadians(0.03699120918519741),
      x: -29.95600959142378,
      y: 33.72513623131151,
      z: -0.40325097780902214
    },
    TRANSFORM_B_TO_A: {
      yaw: degreesToRadians(0.018789001758967153),
      pitch: degreesToRadians(-0.10025178246818622),
      roll: degreesToRadians(-0.03702403008138641),
      x: 29.966277810401277,
      y: -33.71504358610052,
      z: 0.47745784137700187
    }
  },
  {
    TRANSFORM_A_TO_B: {
      yaw: degreesToRadians(0.014019389879357809),
      pitch: degreesToRadians(-0.16693666223685782),
      roll: degreesToRadians(-0.08180457065575204),
      x: 18.109576472225825,
      y: -56.07962629397971,
      z: -0.23393909544671745
    },
    TRANSFORM_B_TO_A: {
      yaw: degreesToRadians(-0.013781089177543813),
      pitch: degreesToRadians(0.1669565034787033),
      roll: degreesToRadians(0.08176406858071145),
      x: -18.09509570346161,
      y: 56.08358930036468,
      z: 0.3667362087106386
    }
  }
];

const TOLERANCE = 1e-9;

test('Pose#transformationMatrix', t => {
  MATRIX_TEST_CASES.forEach((testCase, testCaseIndex) => {
    const poseAToB = new Pose(testCase.TRANSFORM_A_TO_B);
    const poseBToA = new Pose(testCase.TRANSFORM_B_TO_A);

    const transformAToB = poseAToB.getTransformationMatrix();
    const transformBToA = poseBToA.getTransformationMatrix();

    const result = transformAToB.multiplyRight(transformBToA);
    const expected = new Matrix4().identity();

    t.ok(
      expected.every((x, i) => Math.abs(x - result[i]) < TOLERANCE),
      `Sample #${testCaseIndex}: transformation matrices match`);
  });

  t.end();
});
