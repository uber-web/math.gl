# Overview

> The `@math.gl/web-mercator` module is the new home for the now archived[`viewport-mercator-project`](https://github.com/uber-common/viewport-mercator-project/blob/master/docs/whats-new.md) repository, as of Oct 1, 2019.

The `@math.gl/web-mercator` module offers projection and camera utilities supporting the spherical Web Mercator Projection. At its core, this is a utility for converting to and from map coordinates (i.e. latitude, longitude) to screen coordinates and back.

## Who is this for?

Specifically built for use with [deck.gl](https://github.com/uber/deck.gl) and [react-map-gl](https://github.com/uber/react-map-gl), but potentially useful for any web mapping application that wants to support perspective enabled Web Mercator Projections with floating point zoom levels.

## Example Usage

The `WebMercatorViewport` class offers the equivalent of a 3D matrix "camera" class of the type you would find in any 3D/WebGL/OpenGL library.

```
npm install @math.gl/web-mercator --save
```

```js
import WebMercatorViewport from '@math.gl/web-mercator';

// A viewport looking at San Francisco city area
const viewport = new WebMercatorViewport({
  width: 800,
  height: 600,
  longitude: -122.45,
  latitude: 37.78,
  zoom: 12,
  pitch: 60,
  bearing: 30
});

viewport.project([-122.45, 37.78]);
// returns pixel coordinates [400, 300]
viewport.unproject([400, 300]);
// returns map coordinates [-122.45, 37.78]
```
