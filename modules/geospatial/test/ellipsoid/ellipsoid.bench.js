// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

import {Vector3, Matrix4} from '@math.gl/core';
import {Ellipsoid} from '@math.gl/geospatial';
// import {externalVector3ToArray, setExternalVector3} from '@math.gl/geospatial/type-utils';
// import * as vec3 from 'gl-matrix/vec3';

const ellipsoid = Ellipsoid.WGS84;
const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);
const spaceCartographic = new Vector3(-45.0, 15.0, 330000.0);
// const spaceCartographicObject = {x: -45.0, y: 15.0, z: 330000.0};
const resultVector = new Vector3();
// const resultArray = [0, 0, 0];
// const resultObject = {x: 0, y: 0, z: 0};

const origin = new Vector3(1.0, 0.0, 0.0);
// const northPole = new Vector3(0.0, 0.0, 1.0);
const resultMatrix = new Matrix4();

export default function ellipsoidBench(suite) {
  // const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);

  suite
    .group('@math.gl/geospatial Ellipsoid')
    .add('#cartographicToCartesian(=>Vector3)', () =>
      ellipsoid.cartographicToCartesian(spaceCartographic, resultVector)
    )
    .add('#cartesianToCartographic(=>Vector3)', () =>
      ellipsoid.cartesianToCartographic(spaceCartesian, resultVector)
    )
    .add('#eastNorthUpToFixedFrame()', () =>
      Ellipsoid.WGS84.eastNorthUpToFixedFrame(origin, resultMatrix)
    )
    // .add('#eastNorthUpToFixedFrame(Pole)', () =>
    //   Ellipsoid.WGS84.eastNorthUpToFixedFrame(northPole, resultMatrix)
    // )

    // .add('#cartographicToCartesian(=>Object)', () =>
    //   ellipsoid.cartographicToCartesian(spaceCartographic, resultObject)
    // )
    // .add('#geodSurfNormalCarto(=>Object)', () =>
    //   ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographicObject, resultObject)
    // )

    .add('#geodSurfNormal(=>Vector3)', () =>
      ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic, resultVector)
    )
    // .add('#geodSurfNormalCarto() Opt', () =>
    //   geodeticSurfaceNormalCartographicOptimized(spaceCartographic, resultArray)
    // )

    .add('#geodeticSurfaceNormal(=>Vector3)', () =>
      ellipsoid.geodeticSurfaceNormal(spaceCartesian, resultVector)
    )

    .add('#scaleToGeocentricSurface(=>Vector3)', () =>
      ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultVector)
    );
  // .add('#scaleToGeocentricSurface(=>Object)', () =>
  //   ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultObject)
  // )

  return suite;
}

/*
// Hand optimized version of Ellipsoid.geodeticSurfaceNormalCartographic
// Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
function geodeticSurfaceNormalCartographicOptimized(cartographic, result = new Vector3()) {
  // const longitude = cartographic.longitude;
  // const latitude = cartographic.latitude;

  // const longitude = toRadians(cartographic[0]);
  // const latitude = toRadians(cartographic[1]);
  const longitude = cartographic[0];
  const latitude = cartographic[1];

  const cosLatitude = Math.cos(latitude);

  const x = cosLatitude * Math.cos(longitude);
  const y = cosLatitude * Math.sin(longitude);
  const z = Math.sin(latitude);

  result.x = x;
  result.y = y;
  result.z = z;

  return vec3.normalize(result, result);
}
*/
