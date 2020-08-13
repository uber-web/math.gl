// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

/* eslint-disable */
import test from 'tape-catch';
import {Proj4Projection} from '@math.gl/proj4';
import {Vector3, toDegrees, _MathUtils} from '@math.gl/core';
import {tapeEquals, tapeEqualsEpsilon} from 'test/utils/tape-assertions';

import testPoints from './test-data';

// You can do this in the grunt config for each mocha task, see the `options` config
// Start the main app logic.

Proj4Projection.defineProjectionAliases({
  'EPSG:102018':
    '+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs',
  testmerc: '+proj=merc +lon_0=5.937 +lat_ts=45.027 +ellps=sphere',
  testmerc2:
    '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +units=m +k=1.0 +nadgrids=@null +no_defs',
  esriOnline:
    'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",0.0],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]'
});

// test('parse#should parse units', t => {
//   t.equal(proj4.defs('testmerc2').units, 'm');
//   this.end();
// });

test('proj2proj#should work transforming from one projection to another', t => {
  var sweref99tm = '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
  var rt90 =
    '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0 +proj=tmerc +ellps=bessel +units=m +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs';
  var result = new Proj4Projection({from: sweref99tm, to: rt90}).project([319180, 6399862]);
  tapeEqualsEpsilon(t, result[0], 1271137.9275601401, 0.000001);
  tapeEqualsEpsilon(t, result[1], 6404230.291459564, 0.000001);
  t.end();
});

/*
it('should work with a proj object', t => {
  var sweref99tm = proj4('+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
  var rt90 = proj4('+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0 +proj=tmerc +ellps=bessel +units=m +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs');
  var result = proj4(sweref99tm, rt90).forward([319180, 6399862]);
  tapeEqualsEpsilon(t, result[0], 1271137.9275601401, 0.000001);
  tapeEqualsEpsilon(t, result[1], 6404230.291459564, 0.000001);
});
*/

test('Proj4Projection', t => {
  for (const testPoint of testPoints) {
    t.comment(`new Proj4Projection({to: ${testPoint.code}})`);

    var xyAcc = 2,
      llAcc = 6;
    if ('acc' in testPoint) {
      if ('xy' in testPoint.acc) {
        xyAcc = testPoint.acc.xy;
      }
      if ('ll' in testPoint.acc) {
        llAcc = testPoint.acc.ll;
      }
    }
    var xyEPSLN = Math.pow(10, -1 * xyAcc);
    var llEPSLN = Math.pow(10, -1 * llAcc);

    // describe('traditional', it('should work with forwards', t => {
    var proj = new Proj4Projection({to: testPoint.code});
    var xy = proj.project(testPoint.ll);

    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    /*
    // it('should work with backwards', t => {
    var proj = new proj4.Proj(testPoint.code);
    var ll = proj4.transform(proj, proj4.WGS84, proj4.toPoint(testPoint.xy));
    tapeEqualsEpsilon(t, ll.x, testPoint.ll[0], llEPSLN, 'lng is close');
    tapeEqualsEpsilon(t, ll.y, testPoint.ll[1], llEPSLN, 'lat is close');
    
    // describe('new method 2 param', it('shortcut method should work with an array', t => {
    var xy = proj4(testPoint.code, testPoint.ll);
    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    // it('shortcut method should work with an object', t => {
    var pt = {
      x: testPoint.ll[0],
      y: testPoint.ll[1]
    };
    var xy = proj4(testPoint.code, pt);
    tapeEqualsEpsilon(t, xy.x, testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy.y, testPoint.xy[1], xyEPSLN, 'y is close');

    // it('shortcut method should work with a point object', t =>
    {
      var pt = proj4.toPoint(testPoint.ll);
      var xy = proj4(testPoint.code, pt);
      tapeEqualsEpsilon(t, xy.x, testPoint.xy[0], xyEPSLN, 'x is close');
      tapeEqualsEpsilon(t, xy.y, testPoint.xy[1], xyEPSLN, 'y is close');
    }
    
    // describe('new method 3 param', it('shortcut method should work with an array', t => {
    var xy = proj4(proj4.WGS84, testPoint.code, testPoint.ll);
    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    // it('shortcut method should work with an object', t => {
    var pt = {
      x: testPoint.ll[0],
      y: testPoint.ll[1]
    };
    var xy = proj4(proj4.WGS84, testPoint.code, pt);
    tapeEqualsEpsilon(t, xy.x, testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy.y, testPoint.xy[1], xyEPSLN, 'y is close');

    // it('shortcut method should work with a point object', t => {
    var pt = proj4.toPoint(testPoint.ll);
    var xy = proj4(proj4.WGS84, testPoint.code, pt);
    tapeEqualsEpsilon(t, xy.x, testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy.y, testPoint.xy[1], xyEPSLN, 'y is close');

    // describe('new method 3 param other way', it('shortcut method should work with an array', t => {
    var ll = proj4(testPoint.code, proj4.WGS84, testPoint.xy);
    tapeEqualsEpsilon(t, ll[0], testPoint.ll[0], llEPSLN, 'x is close');
    tapeEqualsEpsilon(t, ll[1], testPoint.ll[1], llEPSLN, 'y is close');

    // it('shortcut method should work with an object', t => {
    var pt = {
      x: testPoint.xy[0],
      y: testPoint.xy[1]
    };
    // in case of geocentric proj we need Z value.
    if (typeof testPoint.xy[2] === 'number') {
      pt.z = testPoint.xy[2]
    }

    var ll = proj4(testPoint.code, proj4.WGS84, pt);
    tapeEqualsEpsilon(t, ll.x, testPoint.ll[0], llEPSLN, 'x is close');
    tapeEqualsEpsilon(t, ll.y, testPoint.ll[1], llEPSLN, 'y is close');

    // it('shortcut method should work with a point object', t => {
    var pt = proj4.toPoint(testPoint.xy);
    var ll = proj4(testPoint.code, proj4.WGS84, pt);
    tapeEqualsEpsilon(t, ll.x, testPoint.ll[0], llEPSLN, 'x is close');
    tapeEqualsEpsilon(t, ll.y, testPoint.ll[1], llEPSLN, 'y is close');

    // describe('1 param', it('forwards', t => {
    var xy = proj4(testPoint.code).forward(testPoint.ll);
    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    // it('inverse', t => {
    var ll = proj4(testPoint.code).inverse(testPoint.xy);
    tapeEqualsEpsilon(t, ll[0], testPoint.ll[0], llEPSLN, 'x is close');
    tapeEqualsEpsilon(t, ll[1], testPoint.ll[1], llEPSLN, 'y is close');

    // describe('proj object', it('should work with a 2 element array', t => {
    var xy = proj4(new proj4.Proj(testPoint.code), testPoint.ll);
    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    // it('should work on element', t => {
    var xy = proj4(new proj4.Proj(testPoint.code)).forward(testPoint.ll);
    tapeEqualsEpsilon(t, xy[0], testPoint.xy[0], xyEPSLN, 'x is close');
    tapeEqualsEpsilon(t, xy[1], testPoint.xy[1], xyEPSLN, 'y is close');

    // it('should work 3 element ponit object', t => {
    var pt = proj4.toPoint(testPoint.xy);
    var ll = proj4(new proj4.Proj(testPoint.code), proj4.WGS84, pt);
    tapeEqualsEpsilon(t, ll.x, testPoint.ll[0], llEPSLN, 'x is close');
    tapeEqualsEpsilon(t, ll.y, testPoint.ll[1], llEPSLN, 'y is close');
    */
  }
  t.end();
});

/*
describe('points', function () {
  it('should ignore stuff it does not know', function () {
    var sweref99tm = '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
    var rt90 = '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0 +proj=tmerc +ellps=bessel +units=m +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs';
    var result = proj4(sweref99tm, rt90).forward({
      x: 319180,
      y: 6399862,
      z: 0,
      m: 1000,
      method: function () {
        return 'correct answer';
      }
    });
    tapeEqualsEpsilon(t, result.x, 1271137.9275601401, 0.000001);
    tapeEqualsEpsilon(t, result.y, 6404230.291459564, 0.000001);
    t.equal(result.z, 0);
    t.equal(result.m, 1000);
    t.equal(result.method(), 'correct answer');
  });
  it('should be able to compute X Y Z M in geocenteric coordinates', function () {
    var epsg4978 = '+proj=geocent +datum=WGS84 +units=m +no_defs';
    var result = proj4(epsg4978).forward({
      x: -7.76166,
      y: 39.19685,
      z: 0,
      m: 1000,
      method: function () {
        return 'correct answer';
      }
    });
    tapeEqualsEpsilon(t, result.x, 4904199.584207411, 0.000001);
    tapeEqualsEpsilon(t, result.y, -668448.8153664203, 0.000001);
    tapeEqualsEpsilon(t, result.z, 4009276.930771821, 0.000001);
    t.equal(result.m, 1000);
    t.equal(result.method(), 'correct answer');
  });
});
describe('points array', function () {
  it('should ignore stuff it does not know', function () {
    var sweref99tm = '+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs';
    var rt90 = '+lon_0=15.808277777799999 +lat_0=0.0 +k=1.0 +x_0=1500000.0 +y_0=0.0 +proj=tmerc +ellps=bessel +units=m +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs';
    var result = proj4(sweref99tm, rt90).forward([
      319180,
      6399862,
      0,
      1000,
    ]);
    tapeEqualsEpsilon(t, result[0], 1271137.9275601401, 0.000001);
    tapeEqualsEpsilon(t, result[1], 6404230.291459564, 0.000001);
    t.equal(result[2], 0);
    t.equal(result[3], 1000);
  });
  it('should be able to compute X Y Z M in geocenteric coordinates', function () {
    var epsg4978 = '+proj=geocent +datum=WGS84 +units=m +no_defs';
    var result = proj4(epsg4978).forward([
      -7.76166,
      39.19685,
      0,
      1000
    ]);
    tapeEqualsEpsilon(t, result[0], 4904199.584207411, 0.000001);
    tapeEqualsEpsilon(t, result[1], -668448.8153664203, 0.000001);
    tapeEqualsEpsilon(t, result[2], 4009276.930771821, 0.000001);
    t.equal(result[3], 1000);
  });
});

it('should use correct axis order', t => {
      var enu = 'PROJCS["NAD83 / Massachusetts Mainland", GEOGCS["NAD83", DATUM["North American Datum 1983", SPHEROID["GRS 1980", 6378137.0, 298.257222101, AUTHORITY["EPSG","7019"]], TOWGS84[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], AUTHORITY["EPSG","6269"]], PRIMEM["Greenwich", 0.0, AUTHORITY["EPSG","8901"]], UNIT["degree", 0.017453292519943295], AXIS["Geodetic longitude", EAST], AXIS["Geodetic latitude", NORTH], AUTHORITY["EPSG","4269"]], PROJECTION["Lambert_Conformal_Conic_2SP", AUTHORITY["EPSG","9802"]], PARAMETER["central_meridian", -71.5], PARAMETER["latitude_of_origin", 41.0], PARAMETER["standard_parallel_1", 42.68333333333334], PARAMETER["false_easting", 200000.0], PARAMETER["false_northing", 750000.0], PARAMETER["scale_factor", 1.0], PARAMETER["standard_parallel_2", 41.71666666666667], UNIT["m", 1.0], AXIS["Easting", EAST], AXIS["Northing", NORTH], AUTHORITY["EPSG","26986"]]';
  var neu = 'PROJCS["NAD83 / Massachusetts Mainland NE", GEOGCS["NAD83", DATUM["North American Datum 1983", SPHEROID["GRS 1980", 6378137.0, 298.257222101, AUTHORITY["EPSG","7019"]], TOWGS84[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], AUTHORITY["EPSG","6269"]], PRIMEM["Greenwich", 0.0, AUTHORITY["EPSG","8901"]], UNIT["degree", 0.017453292519943295], AXIS["Geodetic latitude", NORTH], AXIS["Geodetic longitude", EAST], AUTHORITY["EPSG","4269"]], PROJECTION["Lambert_Conformal_Conic_2SP", AUTHORITY["EPSG","9802"]], PARAMETER["central_meridian", -71.5], PARAMETER["latitude_of_origin", 41.0], PARAMETER["standard_parallel_1", 42.68333333333334], PARAMETER["false_easting", 200000.0], PARAMETER["false_northing", 750000.0], PARAMETER["scale_factor", 1.0], PARAMETER["standard_parallel_2", 41.71666666666667], UNIT["m", 1.0], AXIS["Northing", NORTH], AXIS["Easting", EAST], AUTHORITY["EPSG","26986"]]';
  var result = proj4(enu, neu).forward({
    x: 10.2,
    y: 43.4
  });
  tapeEqualsEpsilon(t, result.x, 43.4, 0.000001);
  tapeEqualsEpsilon(t, result.y, 10.2, 0.000001);
});

it('axes should be invertable', function () {
  var enu = '+proj=longlat +axis=enu';
  var esu = '+proj=longlat +axis=esu';
  var wnu = '+proj=longlat +axis=wnu';
  var result = proj4(enu, esu).forward({x: 40, y: 50});
  tapeEqualsEpsilon(t, result.x, 40, 0.000001);
  tapeEqualsEpsilon(t, result.y, -50, 0.000001);
  var result = proj4(enu, wnu).forward({x: 40, y: 50});
  tapeEqualsEpsilon(t, result.x, -40, 0.000001);
  tapeEqualsEpsilon(t, result.y, 50, 0.000001);
});

describe('defs', function () {
  t.equal(proj4.defs('testmerc'), proj4.defs['testmerc']);
  proj4.defs('foo', '+proj=merc +lon_0=5.937 +lat_ts=45.027 +ellps=sphere');
  t.typeOf(proj4.defs['foo'], 'object');
  proj4.defs('urn:x-ogc:def:crs:EPSG:4326', proj4.defs('EPSG:4326'));
  t.strictEqual(proj4.defs['urn:x-ogc:def:crs:EPSG:4326'], proj4.defs['EPSG:4326']);

  describe('wkt', function () {
    it('should provide the correct conversion factor for WKT GEOGCS projections', function () {
      proj4.defs('EPSG:4269', 'GEOGCS["NAD83",DATUM["North_American_Datum_1983",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6269"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4269"]]');
      t.equal(proj4.defs['EPSG:4269'].to_meter, 6378137 * 0.01745329251994328);

      proj4.defs('EPSG:4279', 'GEOGCS["OS(SN)80",DATUM["OS_SN_1980",SPHEROID["Airy 1830",6377563.396,299.3249646,AUTHORITY["EPSG","7001"]],AUTHORITY["EPSG","6279"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.01745329251994328,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4279"]]');
      t.equal(proj4.defs['EPSG:4279'].to_meter, 6377563.396 * 0.01745329251994328);
    });
    it('should parse wkt and proj4 of the same crs and result in the same params', function () {
      var s1 = 'GEOGCS["PSD93",DATUM["PDO_Survey_Datum_1993",SPHEROID["Clarke 1880 (RGS)",6378249.145,293.465,AUTHORITY["EPSG","7012"]],TOWGS84[-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.7101],AUTHORITY["EPSG","6134"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4134"]]';
      var s2 = '+proj=longlat +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.7101 +no_defs';
      var crs1 = proj4(s1);
      var crs2 = proj4(s2);
      t.equal(crs1.oProj.a, crs2.oProj.a);
      // proj4 has different ellipsoid parameters that EPSG: http://epsg.io/4134
      // assert.equal(crs1.oProj.b, crs2.oProj.b);
    });
    it('should handled defined points correctly', function () {
      var prj = '+proj=utm +zone=31';
      var proj = proj4(prj);
      var res = proj.forward([3, 0]);
      t.deepEqual(res, [500000, 0]);
    });
  });
});
describe('errors', t => {
      it('should throw an error for an unknown ref', t => {
        t.throws(t => {
          new proj4.Proj('fake one');
    }, 'fake one', 'should work');
  });
  it('should throw when passed null', t => {
          t.throws(t => {
              proj4('+proj=utm +zone=31', [null, 0]);
    }, 'coordinates must be finite numbers', 'should work');
  });
  it('should throw when passed NaN', t => {
          t.throws(t => {
              proj4('+proj=utm +zone=31', [0, NaN]);
    }, 'coordinates must be finite numbers', 'should work');
  });
  it('should throw when passed Infinity', t => {
          t.throws(t => {
              proj4('+proj=utm +zone=31', [Infinity, 0]);
    }, 'coordinates must be finite numbers', 'should work');
  });
  it('should throw when passed -Infinity', t => {
          t.throws(t => {
              proj4('+proj=utm +zone=31', [-Infinity, 0]);
    }, 'coordinates must be finite numbers', 'should work');
  });
});
describe('utility', t => {
      it('should have MGRS available in the proj4.util namespace', t => {
        t.typeOf(proj4.mgrs, "object", "MGRS available in the proj4.util namespace");
  });
  it('should have fromMGRS method added to proj4.Point prototype', t => {
          t.typeOf(proj4.Point.fromMGRS, "function", "fromMGRS method added to proj4.Point prototype");
  });
  it('should have toMGRS method added to proj4.Point prototype', t => {
          t.typeOf(proj4.Point.prototype.toMGRS, "function", "toMGRS method added to proj4.Point prototype");
  });

  describe('First MGRS set', t => {
          var mgrs = "33UXP04";
    var point = proj4.Point.fromMGRS(mgrs);
    it('Longitude of point from MGRS correct.', t => {
              t.equal(point.x.toPrecision(7), "16.41450", "Longitude of point from MGRS correct.");
    });
    it('Latitude of point from MGRS correct.', t => {
              t.equal(point.y.toPrecision(7), "48.24949", "Latitude of point from MGRS correct.");
    });
    it('MGRS reference with highest accuracy correct.', t => {
              t.equal(point.toMGRS(), "33UXP0500444998", "MGRS reference with highest accuracy correct.");
    });
    it('MGRS reference with 1-digit accuracy correct.', t => {
              t.equal(point.toMGRS(1), mgrs, "MGRS reference with 1-digit accuracy correct.");
    });
  });
  describe('Second MGRS set', t => {
          var mgrs = "24XWT783908"; // near UTM zone border, so there are two ways to reference this
    var point = proj4.Point.fromMGRS(mgrs);
    it("Longitude of point from MGRS correct.", t => {
              t.equal(point.x.toPrecision(7), "-32.66433", "Longitude of point from MGRS correct.");
    });
    it("Latitude of point from MGRS correct.", t => {
              t.equal(point.y.toPrecision(7), "83.62778", "Latitude of point from MGRS correct.");
    });
    it("MGRS reference with 3-digit accuracy correct.", t => {
              t.equal(point.toMGRS(3), "25XEN041865", "MGRS reference with 3-digit accuracy correct.");
    });
  });
  describe('Defs and Datum definition', t => {
          proj4.defs("EPSG:5514", "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs +towgs84=570.8,85.7,462.8,4.998,1.587,5.261,3.56");
    var point = proj4.transform(proj4.Proj("WGS84"), proj4.Proj("EPSG:5514"),
                            proj4.toPoint([12.806988, 49.452262]));
    it("Longitude of point from WGS84 correct.", t => {
              t.equal(point.x.toPrecision(8), "-868208.61", "Longitude of point from WGS84 correct.");
    });
    it("Latitude of point from WGS84 correct.", t => {
              t.equal(point.y.toPrecision(9), "-1095793.64", "Latitude of point from WGS84 correct.");
    });
    var point2 = proj4.transform(proj4.Proj("WGS84"), proj4.Proj("EPSG:5514"),
                            proj4.toPoint([12.806988, 49.452262]));
    it("Longitude of point from WGS84 with second call for EPSG:5514 correct.", t => {
              t.equal(point2.x.toPrecision(8), "-868208.61", "Longitude of point from WGS84 correct.");
    });
    it("Latitude of point from WGS84 with second call for EPSG:5514 correct.", t => {
              t.equal(point2.y.toPrecision(9), "-1095793.64", "Latitude of point from WGS84 correct.");
    });
  });
});

});
*/
