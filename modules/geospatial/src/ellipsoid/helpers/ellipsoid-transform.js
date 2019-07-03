import {Vector3, assert, equals as equalsEpsilon} from 'math.gl';

const EPSILON14 = 1e-14;

const scratchOrigin = new Vector3();

// Caclulate third axis from given two axii
const VECTOR_PRODUCT_LOCAL_FRAME = {
  up: {
    south: 'east',
    north: 'west',
    west: 'south',
    east: 'north'
  },
  down: {
    south: 'west',
    north: 'east',
    west: 'north',
    east: 'south'
  },
  south: {
    up: 'west',
    down: 'east',
    west: 'down',
    east: 'up'
  },
  north: {
    up: 'east',
    down: 'west',
    west: 'up',
    east: 'down'
  },
  west: {
    up: 'north',
    down: 'south',
    north: 'down',
    south: 'up'
  },
  east: {
    up: 'south',
    down: 'north',
    north: 'up',
    south: 'down'
  }
};

const degeneratePositionLocalFrame = {
  north: [-1, 0, 0],
  east: [0, 1, 0],
  up: [0, 0, 1],
  south: [1, 0, 0],
  west: [0, -1, 0],
  down: [0, 0, -1]
};

const scratchAxisVectors = {
  east: new Vector3(),
  north: new Vector3(),
  up: new Vector3(),
  west: new Vector3(),
  south: new Vector3(),
  down: new Vector3()
};

const scratchVector1 = new Vector3();
const scratchVector2 = new Vector3();
const scratchVector3 = new Vector3();

// Computes a 4x4 transformation matrix from a reference frame
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
// eslint-disable-next-line max-statements, max-params, complexity
export default function localFrameToFixedFrame(
  ellipsoid,
  firstAxis,
  secondAxis,
  thirdAxis,
  cartesianOrigin,
  result
) {
  const thirdAxisInferred =
    VECTOR_PRODUCT_LOCAL_FRAME[firstAxis] && VECTOR_PRODUCT_LOCAL_FRAME[firstAxis][secondAxis];
  // firstAxis and secondAxis must be east, north, up, west, south or down.');
  assert(thirdAxisInferred && (!thirdAxis || thirdAxis === thirdAxisInferred));

  let firstAxisVector;
  let secondAxisVector;
  let thirdAxisVector;

  const origin = scratchOrigin.copy(cartesianOrigin);

  // If x and y are zero, assume origin is at a pole, which is a special case.
  const atPole = equalsEpsilon(origin.x, 0.0, EPSILON14) && equalsEpsilon(origin.y, 0.0, EPSILON14);

  if (atPole) {
    // Look up axis value and adjust
    const sign = Math.sign(origin.z);

    firstAxisVector = scratchVector1.fromArray(degeneratePositionLocalFrame[firstAxis]);
    if (firstAxis !== 'east' && firstAxis !== 'west') {
      firstAxisVector.scale(sign);
    }

    secondAxisVector = scratchVector2.fromArray(degeneratePositionLocalFrame[secondAxis]);
    if (secondAxis !== 'east' && secondAxis !== 'west') {
      secondAxisVector.scale(sign);
    }

    thirdAxisVector = scratchVector3.fromArray(degeneratePositionLocalFrame[thirdAxis]);
    if (thirdAxis !== 'east' && thirdAxis !== 'west') {
      thirdAxisVector.scale(sign);
    }
  } else {
    // Calculate all axis
    const {up, east, north} = scratchAxisVectors;

    east.set(-origin.y, origin.x, 0.0).normalize();
    ellipsoid.geodeticSurfaceNormal(origin, up);
    north.copy(up).cross(east);

    const {down, west, south} = scratchAxisVectors;

    down.copy(up).scale(-1);
    west.copy(east).scale(-1);
    south.copy(north).scale(-1);

    // Pick three axis based on desired orientation
    firstAxisVector = scratchAxisVectors[firstAxis];
    secondAxisVector = scratchAxisVectors[secondAxis];
    thirdAxisVector = scratchAxisVectors[thirdAxis];
  }

  // TODO - assuming the result is column-major
  result[0] = firstAxisVector.x;
  result[1] = firstAxisVector.y;
  result[2] = firstAxisVector.z;
  result[3] = 0.0;
  result[4] = secondAxisVector.x;
  result[5] = secondAxisVector.y;
  result[6] = secondAxisVector.z;
  result[7] = 0.0;
  result[8] = thirdAxisVector.x;
  result[9] = thirdAxisVector.y;
  result[10] = thirdAxisVector.z;
  result[11] = 0.0;
  result[12] = origin.x;
  result[13] = origin.y;
  result[14] = origin.z;
  result[15] = 1.0;
  return result;
}
