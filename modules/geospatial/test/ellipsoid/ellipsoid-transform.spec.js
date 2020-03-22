// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import test from 'tape-catch';
import {Vector3, Vector4, Matrix4} from '@math.gl/core';
import {Ellipsoid} from '@math.gl/geospatial';

const negativeX = new Vector4(-1, 0, 0, 0);
const negativeY = new Vector4(0, -1, 0, 0);
const negativeZ = new Vector4(0, 0, -1, 0);

const VECTOR4_UNIT_X = new Vector4(1, 0, 0, 0);
const VECTOR4_UNIT_Y = new Vector4(0, 1, 0, 0);
const VECTOR4_UNIT_Z = new Vector4(0, 0, 1, 0);

const UNIT_SPHERE = new Ellipsoid(1, 1, 1);

test('Ellipsoid#transforms#eastNorthUpToFixedFrame works without a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);

  const result = UNIT_SPHERE.eastNorthUpToFixedFrame(origin);
  const returnedResult = new Matrix4(result);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_X); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#eastNorthUpToFixedFrame works with a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);
  const result = new Matrix4([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

  const returnedResult = UNIT_SPHERE.eastNorthUpToFixedFrame(origin, result);
  t.equals(result, returnedResult);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_X); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#eastNorthUpToFixedFrame works at the north pole', t => {
  const northPole = new Vector3(0.0, 0.0, 1.0);
  const expectedTranslation = new Vector4(northPole.x, northPole.y, northPole.z, 1.0);

  const result = new Matrix4();
  const returnedResult = UNIT_SPHERE.eastNorthUpToFixedFrame(northPole, result);
  t.equals(returnedResult, result);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(1), negativeX); // north
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Z); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#eastNorthUpToFixedFrame works at the south pole', t => {
  const southPole = new Vector3(0.0, 0.0, -1.0);
  const expectedTranslation = new Vector4(southPole.x, southPole.y, southPole.z, 1.0);

  const returnedResult = UNIT_SPHERE.eastNorthUpToFixedFrame(southPole);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_X); // north
  t.deepEquals(returnedResult.getColumn(2), negativeZ); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northEastDownToFixedFrame works without a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'east', 'down', origin);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(2), negativeX); // down
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northEastDownToFixedFrame works with a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);
  const result = new Matrix4().set(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame(
    'north',
    'east',
    'down',
    origin,
    result
  );
  t.equals(result, returnedResult);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(2), negativeX); // down
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northEastDownToFixedFrame works at the north pole', t => {
  const northPole = new Vector3(0.0, 0.0, 1.0);
  const expectedTranslation = new Vector4(northPole.x, northPole.y, northPole.z, 1.0);

  const result = new Matrix4();
  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame(
    'north',
    'east',
    'down',
    northPole,
    result
  );
  t.equals(returnedResult, result);
  t.deepEquals(returnedResult.getColumn(0), negativeX); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(2), negativeZ); // down
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northEastDownToFixedFrame works at the south pole', t => {
  const southPole = new Vector3(0.0, 0.0, -1.0);
  const expectedTranslation = new Vector4(southPole.x, southPole.y, southPole.z, 1.0);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'east', 'down', southPole);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_X); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Z); // down
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northUpEastToFixedFrame works without a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'up', 'east', origin);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_X); // up
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northUpEastToFixedFrame works with a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);
  const result = new Matrix4([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'up', 'east', origin, result);
  t.equals(result, returnedResult);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_X); // up
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northUpEastToFixedFrame works at the north pole', t => {
  const northPole = new Vector3(0.0, 0.0, 1.0);
  const expectedTranslation = new Vector4(northPole.x, northPole.y, northPole.z, 1.0);

  const result = new Matrix4();
  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame(
    'north',
    'up',
    'east',
    northPole,
    result
  );
  t.equals(returnedResult, result);
  t.deepEquals(returnedResult.getColumn(0), negativeX); // north
  t.deepEquals(returnedResult.getColumn(1), VECTOR4_UNIT_Z); // up
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Y); // east
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northUpEastToFixedFrame works at the south pole', t => {
  const southPole = new Vector3(0.0, 0.0, -1.0);
  const expectedTranslation = new Vector4(southPole.x, southPole.y, southPole.z, 1.0);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'up', 'east', southPole);
  const matrix4 = new Matrix4(returnedResult);
  t.deepEquals(matrix4.getColumn(0), VECTOR4_UNIT_X); // north
  t.deepEquals(matrix4.getColumn(1), negativeZ); // up
  t.deepEquals(matrix4.getColumn(2), VECTOR4_UNIT_Y); // east
  t.deepEquals(matrix4.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northWestUpToFixedFrame works without a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);
  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'west', 'up', origin);
  const matrix4 = new Matrix4(returnedResult);
  t.deepEquals(matrix4.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(matrix4.getColumn(1), negativeY); // west
  t.deepEquals(matrix4.getColumn(2), VECTOR4_UNIT_X); // up
  t.deepEquals(matrix4.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northWestUpToFixedFrame works with a result parameter', t => {
  const origin = new Vector3(1.0, 0.0, 0.0);
  const expectedTranslation = new Vector4(origin.x, origin.y, origin.z, 1.0);
  const result = new Matrix4().set(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame('north', 'west', 'up', origin, result);
  t.equals(result, returnedResult);
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_Z); // north
  t.deepEquals(returnedResult.getColumn(1), negativeY); // west
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_X); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northWestUpToFixedFrame works at the north pole', t => {
  const northPole = new Vector3(0.0, 0.0, 1.0);
  const expectedTranslation = new Vector4(northPole.x, northPole.y, northPole.z, 1.0);

  const result = new Matrix4();
  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame(
    'north',
    'west',
    'up',
    northPole,
    result
  );
  t.equals(returnedResult, result);
  t.deepEquals(returnedResult.getColumn(0), negativeX); // north
  t.deepEquals(returnedResult.getColumn(1), negativeY); // west
  t.deepEquals(returnedResult.getColumn(2), VECTOR4_UNIT_Z); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

test('Ellipsoid#transforms#northWestUpToFixedFrame works at the south pole', t => {
  const southPole = new Vector3(0.0, 0.0, -1.0);
  const expectedTranslation = new Vector4(southPole.x, southPole.y, southPole.z, 1.0);

  const returnedResult = UNIT_SPHERE.localFrameToFixedFrame(
    'north',
    'west',
    'up',
    southPole,
    new Matrix4()
  );
  t.deepEquals(returnedResult.getColumn(0), VECTOR4_UNIT_X); // north
  t.deepEquals(returnedResult.getColumn(1), negativeY); // west
  t.deepEquals(returnedResult.getColumn(2), negativeZ); // up
  t.deepEquals(returnedResult.getColumn(3), expectedTranslation); // translation
  t.end();
});

/*
test('Ellipsoid#transforms#normal use of localFrameToFixedFrameGenerator', t => {
  const cartesianTab = [
    new Vector3(0.0, 0.0, 1.0),
    new Vector3(0.0, 0.0, -1.0),
    new Vector3(10.0, 20.0, 30.0),
    new Vector3(-10.0, -20.0, -30.0),
    new Vector3(-25.0, 60.0, -1.0),
    new Vector3(9.0, 0.0, -7.0)
  ];

  const converterTab = [
    {
      converter : Transforms.localFrameToFixedFrameGenerator('north', 'east'),
      order : ['north', 'east', 'down']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('north', 'west'),
      order : ['north', 'west', 'up']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('north', 'up'),
      order : ['north', 'up', 'east']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('north', 'down'),
      order : ['north', 'down', 'west']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('south', 'east'),
      order : ['south', 'east', 'up']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('south', 'west'),
      order : ['south', 'west', 'down']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('south', 'up'),
      order : ['south', 'up', 'west']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('south', 'down'),
      order : ['south', 'down', 'east']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('east', 'north'),
      order : ['east', 'north', 'up']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('east', 'south'),
      order : ['east', 'south', 'down']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('east', 'up'),
      order : ['east', 'up', 'south']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('east', 'down'),
      order : ['east', 'down', 'north']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('west', 'north'),
      order : ['west', 'north', 'down']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('west', 'south'),
      order : ['west', 'south', 'up']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('west', 'up'),
      order : ['west', 'up', 'north']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('west', 'down'),
      order : ['west', 'down', 'south']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('up', 'north'),
      order : ['up', 'north', 'west']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('up', 'south'),
      order : ['up', 'south', 'east']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('up', 'east'),
      order : ['up', 'east', 'north']
    }, {
      converter : Transforms.localFrameToFixedFrameGenerator('up', 'west'),
      order : ['up', 'west', 'south']
    }
  ];

  function testAllLocalFrame(classicalENUMatrix, position) {
    const ENUColumn = new Vector4();
    const converterColumn = new Vector4();
    for (let i = 0; i < converterTab.length; i++) {
      const converterMatrix = (converterTab[i].converter)(position, Ellipsoid.UNIT_SPHERE);
      const order = converterTab[i].order;
      // check translation
      Matrix4.getColumn(classicalENUMatrix, 3, ENUColumn);
      Matrix4.getColumn(converterMatrix, 3, converterColumn);
      t.deepEquals(ENUColumn, converterColumn);
      // check axis
      for (let j = 0; j < 3; j++) {
        Matrix4.getColumn(converterMatrix, j, converterColumn);
        const axisName = order[j];
        if (axisName === 'east') {
          Matrix4.getColumn(classicalENUMatrix, 0, ENUColumn);
        } else if (axisName === 'west') {
          Matrix4.getColumn(classicalENUMatrix, 0, ENUColumn);
          Vector4.negate(ENUColumn, ENUColumn);
        } else if (axisName === 'north') {
          Matrix4.getColumn(classicalENUMatrix, 1, ENUColumn);
        } else if (axisName === 'south') {
          Matrix4.getColumn(classicalENUMatrix, 1, ENUColumn);
          Vector4.negate(ENUColumn, ENUColumn);
        } else if (axisName === 'up') {
          Matrix4.getColumn(classicalENUMatrix, 2, ENUColumn);
        } else if (axisName === 'down') {
          Matrix4.getColumn(classicalENUMatrix, 2, ENUColumn);
          Vector4.negate(ENUColumn, ENUColumn);
        }
        t.deepEquals(ENUColumn, converterColumn);
      }
    }
  }

  for (let i = 0; i < cartesianTab.length; i++) {
    const cartesian = cartesianTab[i];
    const classicalEastNorthUpReferential = Transforms.eastNorthUpToFixedFrame(cartesian, Ellipsoid.UNIT_SPHERE);
    testAllLocalFrame(classicalEastNorthUpReferential, cartesian);
  }
  t.end();
});
*/

test('Ellipsoid#transforms#localFrameToFixedFrame incorrect use throws', t => {
  const origin = [1, 0, 0];

  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame(undefined, undefined, null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('north', undefined, null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame(undefined, 'north', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('south', undefined, null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('northe', 'southe', null, origin));

  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('north', 'north', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('north', 'south', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('south', 'north', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('south', 'south', null, origin));

  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('up', 'up', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('up', 'down', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('down', 'up', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('down', 'down', null, origin));

  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('east', 'east', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('east', 'west', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('west', 'east', null, origin));
  t.throws(() => UNIT_SPHERE.localFrameToFixedFrame('west', 'west', null, origin));
  t.end();
});
