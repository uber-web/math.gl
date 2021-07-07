# Web Mercator Utility Functions

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.1-blue.svg?style=flat-square" alt="From-v3.1" />
</p>

### `lngLatToWorld(lngLat)`

Project a coordinate on sphere onto the 512x512 Web Mercator plane.

Parameters:

- `lngLat` (Array, required) - Specifies a point on the sphere to project. `[lng,lat]` in degrees.

Returns:

- `[x, y]`

### `worldToLngLat(xy, scale)`

Unproject a coordinate from the 512x512 Web Mercator plane back to the sphere.

Parameters:

- `xy` (Array, required) - Specifies a point on the Web Mercator tile to unproject. `[x, y]` in pixels.

Returns:

- `[lng, lat]`

### `worldToPixels(xyz, projectionMatrix)`

Project a coordinate from the Web Mercator coordinate system to screen.

Parameters:

- `xyz` (Array, required) - Specifies a point in the Web Mercator tile. `z` is the elevation and optional.
- `projectionMatrix` (Matrix4, required) - The projection matrix.

Returns:

- `[x, y, z]` - coordinates on screen, `z` is the pixel depth.

### `pixelsToWorld(xyz, unprojectionMatrix, targetZ)`

Project a coordinate from screen to the Web Mercator coordinate system.

Parameters:

- `xyz` (Array, required) - Specifies a point on screen. `z` is the pixel depth and optional.
- `unprojectionMatrix` (Matrix4, required) - The unprojection matrix.
- `targetZ` (Number, optional) - If pixel depth is not specified, `targetZ` is used as the elevation plane to unproject onto. Default `0`.

Returns:

- `[x, y, z]` - coordinates on the Web Mercator tile, `z` is the elevation.

### `getMeterZoom(viewport)`

Returns the zoom level that gives a 1 meter pixel at a certain latitude.

Parameters:

- `viewport` (Object) - viewport props
- `viewport.latitude` (Number, required)

### `getDistanceScales(viewport)`

Calculate linear scales for quick conversion between meters/degrees/pixels distances around the given lat/lon.

In mercator projection mode, the distance scales vary significantly with latitude. The scale is only reasonably accurate locally.

Parameters:

- `viewport` (Object) - viewport props
- `viewport.longitude` (Number, required)
- `viewport.latitude` (Number, required)
- `viewport.highPrecision` (bool, optional) - default `false`

Returns:

- `distanceScales` (Object)
- `distanceScales.unitsPerMeter` (Array) - world units per meter in `[x, y, z]`.
- `distanceScales.metersPerUnit` (Array) - meters per world unit in `[x, y, z]`
- `distanceScales.unitsPerDegree` (Array) - world units per degree in `[x, y, z]`
- `distanceScales.degreesPerUnit` (Array) - degree per world unit in `[x, y, z]`
- `distanceScales.unitsPerMeter2` (Array) - if `highPrecision` is `true`, returns world units per meter adjustment in `[x2, y2, z2]`. It offers a cheap way to compensate for the precision loss with latitude. Amends `unitsPerMeter` by y offset (in meters): `[x + x2 * dy, y + y2 * dy, z + z2 * dy]`.
- `distanceScales.unitsPerDegree2` (Array) - if `highPrecision` is `true`, returns world units per degree adjustment in `[x2, y2, z2]`. It offers a cheap way to compensate for the precision loss with latitude. Amends `unitsPerDegree` by y offset (in degrees): `[x + x2 * dy, y + y2 * dy, z + z2 * dy]`.

### `addMetersToLngLat(lngLatZ, xyz)`

Offset a spherical position by meters.

Parameters:

- `lngLatZ` (Array) - origin in `[lng, lat, alt]`. Altitude is optional.
- `xyz` (Array) - offset from the origin `[x, y, z]` in meters. `x` is easting and `y` is northing. `z` is optional.

Returns:

- `[lng, lat]` if the third component in neither argument is specified, or
- `[lng, lat, alt]` otherwise.

### `getViewMatrix(viewport)`

Get a transform matrix that projects from the mercator (pixel) space into the camera (view) space. Centers the map at the given coordinates.

Parameters:

- `viewport` (Object) - viewport props
- `viewport.height` (Number, required)
- `viewport.pitch` (Number, required)
- `viewport.bearing` (Number, required)
- `viewport.scale` (Number, required)
- `viewport.altitude` (Number, required)
- `viewport.center` (Array, optional) - pre-calculated world position of map center using `getWorldPosition`. Default `[0, 0]`.

Returns:

- `viewMatrix` (Array) 4x4 matrix.

### `getProjectionMatrix(viewport)`

Get a transform matrix that projects from camera (view) space to clipspace.

Parameters:

- `viewport` (Object) - viewport props
- `viewport.width` (Number, required)
- `viewport.height` (Number, required)
- `viewport.pitch` (Number, required)
- `viewport.altitude` (Number, required)
- `viewport.fovy` (Number, optional) - optional fov in degrees, will override altitude
- `viewport.nearZMultiplier` (Number, optional) - near plane multiplier. Default `1`.
- `viewport.farZMultiplier` (Number, optional) - far plane multiplier. Default `1`

Notes:

To match Mapbox's z-buffer, use these parameters:

- Before 0.29:
  - `nearZMultiplier`: `0.1`
  - `farZMultiplier`: `1`
- Starting 0.29:
  - `nearZMultiplier`: `1 / viewport.height`
  - `farZMultiplier`: `1.01`

### `getProjectionParameters({width, height, altitude, fovy, pitch, farZMultiplier}})`

Parameters:

- `width` (Number, required)
- `height` (Number, required)
- `pitch` (Number, required)
- `altitude` (Number, required)
- `fovy` (Number, optional) - optional fov in degrees, will override altitude
- `farZMultiplier` (Number, optional) - near plane multiplier. Default `1`.
- `farZMultiplier` (Number, optional) - far plane multiplier. Default `1`.

Returns

- Object with `{fov, aspect, focalDistance, near, far}` fields. Note that returned `fov` is in radians

### `fitBounds(opts)`

Returns map settings (longitude, latitude and zoom) that will contain the provided corners within the provided dimensions. Only supports non-perspective mode.

Parameters:

- `opts` (Object) - options
- `opts.width` (Number, required)
- `opts.height` (Number, required)
- `opts.bounds` (Array, required) - opposite corners specified as `[[lon, lat], [lon, lat]]`
- `opts.minExtent` (Number, optional) - If supplied, the bounds used to calculate the new map settings will be expanded if the delta width or height of the supplied `bounds` is smaller than this value.
- `opts.maxZoom`=`24` (Number, optional) - The returned zoom value will be capped to this value. Avoids returning infinite `zoom` when the supplied `bounds` have zero width or height deltas.
- `opts.padding`=`0` (Number, optional) - the amount of padding in pixels to add to the given bounds.
- `opts.offset`=`[0,0]` (Array, optional) - the center of the given bounds relative to the map's center, `[x, y]` measured in pixels.

Returns:

- `{longitude, latitude, zoom}`

Notes:

- `minExtent` - Note that this value represents delta latitude/longitudes and value of `0.01` would roughly represent 1km.

### `normalizeViewportProps(viewport)`

This will adjust the map center and zoom so that the projected map fits into the target viewport size without white gaps.

Parameters:

- `viewport` (Object)
- `viewport.width` (Number, required)
- `viewport.height` (Number, required)
- `viewport.longitude` (Number, required)
- `viewport.latitude` (Number, required)
- `viewport.zoom` (Number, required)
- `viewport.pitch` (Number, optional)

Returns:

- `viewport` - normalized `{width, height, longitude, latitude, zoom, pitch, bearing}`

### `flyToViewport(startProps, endProps, t, opts)`

While flying from one viewport to another, returns in-transition viewport props at a given time. This util function implements the algorithm described in “Smooth and efficient zooming and panning.” by Jarke J. van Wijk and Wim A.A. Nuij.

Parameters:

- `startProps` (Object) - viewport to fly from
- `startProps.width` (Number, required)
- `startProps.height` (Number, required)
- `startProps.longitude` (Number, required)
- `startProps.latitude` (Number, required)
- `startProps.zoom` (Number, required)
- `endProps` (Object) - viewport to fly from
- `endProps.longitude` (Number, required)
- `endProps.latitude` (Number, required)
- `endProps.zoom` (Number, required)
- `t` (Number) - a time factor between 0 and 1. `0` indicates the start of the transition, `1` indicates the end of the transition.
- `opts` (Object, optional)
- `opts.curve` (Number, optional, default: 1.414) - The zooming "curve" that will occur along the flight path, .

Returns:

- `{longitude, latitude, zoom}`

### `getFlyToDuration(startProps, endProps, opts)`

Returns time in milliseconds, that is required perform transition from one viewport to another. Time returned is proportional to the distance we are transitioning to. This util function implements mapbox-gl-js (https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) duration calculation.

Parameters:

- `startProps` (Object) - viewport to fly from
- `startProps.width` (Number, required)
- `startProps.height` (Number, required)
- `startProps.longitude` (Number, required)
- `startProps.latitude` (Number, required)
- `startProps.zoom` (Number, required)
- `endProps` (Object) - viewport to fly from
- `endProps.longitude` (Number, required)
- `endProps.latitude` (Number, required)
- `endProps.zoom` (Number, required)
- `opts` (Object, optional) - optional parameters that effect duration calculation.
- `opts.curve` (Number, optional, default: 1.414) - The zooming "curve" that will occur along the flight path.
- `opts.speed` (Number, optional, default: 1.2) - The average speed of the animation defined in relation to `options.curve`, it linearly affects the duration, higher speed returns smaller durations and vice versa.
- `opts.screenSpeed` (Number, optional) - The average speed of the animation measured in screenfuls per second. Similar to `opts.speed` it linearly affects the duration, when specified `opts.speed` is ignored.
- `opts.maxDuration` (Number, optional) - Maximum duration in milliseconds, if calculated duration exceeds this value, `0` is returned.

Returns:

- `duration` Number, in milliseconds.
