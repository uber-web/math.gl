// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* eslint-disable max-statements, max-depth */
import test from 'tape-promise/tape';
import {tapeEquals} from 'test/utils/tape-assertions';
import {SphericalCoordinates} from '@math.gl/core';

const REPRESENTATION_TEST_CASES = [
  {
    representations: [
      {theta: 0, phi: 0, radius: 1},
      {pitch: 0, bearing: 180, radius: 1}
    ],
    vector: [0, 0, 1]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: Math.PI, radius: 1},
      {pitch: 90, bearing: 0, radius: 1}
    ],
    vector: [0, 1, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: 0, radius: 1},
      {pitch: 90, bearing: 180, altitude: 1}
    ],
    vector: [0, -1, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: Math.PI / 2, radius: 1},
      {pitch: 90, bearing: 90, altitude: 1}
    ],
    vector: [1, 0, 0]
  },
  {
    representations: [
      {theta: Math.PI / 2, phi: -Math.PI / 2, radius: 1},
      {pitch: 90, bearing: 270, altitude: 1}
    ],
    vector: [-1, 0, 0]
  },
  {
    representations: [
      {theta: Math.PI, phi: 0, radius: 1},
      {pitch: 180, bearing: 180, altitude: 1}
    ],
    vector: [0, 0, -1]
  }
];

test('SphericalCoordinates#import', (t) => {
  t.equals(typeof SphericalCoordinates, 'function', 'SphericalCoordinates import OK');
  t.end();
});

test('SphericalCoordinates#constructor', (t) => {
  const spherical = new SphericalCoordinates();
  t.ok(spherical, 'SphericalCoordinates default constructor OK');
  t.throws(() => new SphericalCoordinates({bearing: NaN}));
  // @ts-ignore
  t.throws(() => new SphericalCoordinates({bearing: 0, pitch: 'a'}));
  t.end();
});

test('SphericalCoordinates#representations', (t) => {
  for (const tc of REPRESENTATION_TEST_CASES) {
    for (const rep1 of tc.representations) {
      // Create
      const spherical = new SphericalCoordinates(rep1);
      // Checkl various representations
      for (const rep2 of tc.representations) {
        for (const key of Object.keys(rep2)) {
          if (key !== 'radius' && key !== 'altitude') {
            t.equals(spherical[key], rep2[key], `${key}`);
          }
        }
      }
      // Check vector
      tapeEquals(t, spherical.toVector3(), tc.vector, `Vector conversion OK ${spherical}`);
    }
  }
  t.end();
});

test('SphericalCoordinates#accessors', (t) => {
  const spherical = new SphericalCoordinates();
  t.equals(spherical.bearing, 180, 'bearing');
  t.equals(spherical.pitch, 0, 'pitch');
  // t.equals(spherical.altitude, 0, 'altitude');
  t.equals(spherical.longitude, 0, 'longitude');
  t.equals(spherical.latitude, 0, 'latitude');
  t.equals(spherical.lng, 0, 'lng');
  t.equals(spherical.lat, 0, 'lat');
  t.equals(spherical.z, 0, 'z');
  t.end();
});

test('SphericalCoordinates#methods', (t) => {
  const spherical = new SphericalCoordinates();
  spherical.set(1, 0, 0);
  spherical.copy(new SphericalCoordinates());
  spherical.fromLngLatZ([1, 1, 0]);
  spherical.fromVector3([1, 1, 1]);
  t.end();
});

test('SphericalCoordinates#clone', (t) => {
  const spherical = new SphericalCoordinates();
  const s2 = spherical.clone();
  t.notEqual(spherical, s2, 'clone');
  tapeEquals(t, spherical, s2, 'clone');
  t.ok(spherical.exactEquals(s2), 'clone');
  t.end();
});

test('SphericalCoordinates#makeSafe', (t) => {
  const spherical = new SphericalCoordinates();
  t.doesNotThrow(() => spherical.makeSafe());
  t.end();
});
