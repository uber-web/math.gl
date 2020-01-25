// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// @ts-nocheck

// NOTE: Transform is not a public API so we should be careful to always lock
// down mapbox-gl to a specific major, minor, and patch version.
import {Map, LngLat, Point} from './mapbox';
import * as vec4 from 'gl-matrix/vec4';

let Transform;
/* eslint-disable */
// Hack: mapbox-gl does not expose Transform class
try {
  Map.prototype = Object.assign({}, Map.prototype, {
    _setupContainer: function() {
      Transform = this.transform.constructor;
    }
  });
  new Map({
    container: window.document.body
  });
} catch (err) {
  // Ignore
}
/* eslint-enable */

export {LngLat, Point, Transform};

export function mod(value, divisor) {
  const modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}

export function unprojectFromTransform(transform, point) {
  return transform.pointLocation(Point.convert(point));
}

export function cloneTransform(original) {
  const transform = new Transform(original._minZoom || 0, original._maxZoom || 40);
  transform.latRange = original.latRange;
  transform.width = original.width;
  transform.height = original.height;
  transform.zoom = original.zoom;
  transform.center = original.center;
  transform.angle = original.angle;
  transform.altitude = original.altitude;
  transform.pitch = original.pitch;
  transform.bearing = original.bearing;
  transform.altitude = original.altitude;
  return transform;
}

// Adapts and instruments mapbox transform to simplify testing
export class MapboxTransform extends Transform {
  /* eslint-disable complexity */
  constructor(props) {
    super(props._minZoom || 0, props._maxZoom || 40);
    this.latRange = props.latRange || this.latRange;
    this.width = Number.isFinite(props.width) ? props.width : this.width;
    this.height = Number.isFinite(props.height) ? props.height : this.height;
    this.zoom = Number.isFinite(props.zoom) ? props.zoom : this.zoom;
    if (Number.isFinite(props.latitude) && Number.isFinite(props.longitude)) {
      this.center = new LngLat(props.longitude, props.latitude);
    }
    if (Number.isFinite(props.bearing)) {
      this.bearing = props.bearing;
    }
    if (Number.isFinite(props.pitch)) {
      this.pitch = props.pitch;
    }
    if (Number.isFinite(props.altitude)) {
      this.altitude = props.altitude;
    }
  }
  /* eslint-enable complexity */

  // Uses map to unproject a coordinate
  mapboxProject(lngLatZ) {
    const [lng, lat] = lngLatZ;
    const lngLat = new LngLat(lng, lat);
    const coord = this.locationCoordinate(lngLat);

    const p = [coord.x * this.worldSize, coord.y * this.worldSize, 0, 1];
    vec4.transformMat4(p, p, this.pixelMatrix);
    const x = p[0] / p[3];
    const y = p[1] / p[3];
    const z = p[2] / p[3];
    return lngLatZ.length === 3 ? [x, y, z] : [x, y];
  }

  // Uses map to unproject a coordinate
  mapboxUnproject(xyz) {
    const [x, y] = xyz;
    const point = new Point(x, y);
    const latLng = this.pointLocation(point);
    const {lng, lat} = latLng;
    return [lng, lat];
  }

  /**
   * Uses map to get position for panning.
   * @param {object} options
   * @param {number[]} options.lngLat
   * @param {number[]} options.pos
   */
  mapboxGetLngLatAtPoint({lngLat: [lng, lat], pos: [x, y]}) {
    const mapboxLngLat = new LngLat(lng, lat);
    const mapboxPoint = new Point(x, y);

    const transform = cloneTransform(this);
    // const around = unprojectFromTransform(transform, mapboxPoint);
    transform.setLocationAtPoint(mapboxLngLat, mapboxPoint);
    const lngLatResult = [mod(transform.center.lng + 180, 360) - 180, transform.center.lat];
    // console.log('Get lngLat at Point', [lng, lat], [x, y], lngLatResult);
    return lngLatResult;
  }
}
