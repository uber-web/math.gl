# WebMercatorViewport

The `WebMercatorViewport` class takes map camera states (`latitude`, `longitude`, `zoom`, `pitch`, `bearing` etc.),
and performs projections between world and screen coordinates.

## Constructor

| Parameter   | Type     | Default | Description                                                                                      |
| ----------- | -------- | ------- | ------------------------------------------------------------------------------------------------ |
| `width`     | `number` | `1`     | Width of viewport                                                                                |
| `height`    | `number` | `1`     | Height of viewport                                                                               |
| `latitude`  | `number` | `0`     | Latitude of viewport center                                                                      |
| `longitude` | `number` | `0`     | Longitude of viewport center                                                                     |
| `zoom`      | `number` | `11`    | Map zoom (scale is calculated as `2^zoom`)                                                       |
| `pitch`     | `number` | `0`     | The pitch (tilt) of the map from the screen, in degrees (0 is straight down)                     |
| `bearing`   | `number` | `0`     | The bearing (rotation) of the map from north, in degrees counter-clockwise (0 means north is up) |
| `altitude`  | `number` | `1.5`   | Altitude of camera in screen units                                                               |

Remarks:

- Altitude has a default value that matches assumptions in mapbox-gl
- `width` and `height` are forced to 1 if supplied as 0, to avoid
  division by zero. This is intended to reduce the burden of apps to
  to check values before instantiating a `Viewport`.
- When using Mercator projection, per cartographic tradition, longitudes and
  latitudes are specified as degrees.

## Methods

##### `project(lngLatZ, options)`

Projects latitude and longitude to pixel coordinates on screen.

| Parameter         | Type      | Default    | Description                                                                       |
| ----------------- | --------- | ---------- | --------------------------------------------------------------------------------- |
| `lngLatZ`         | `Array`   | (required) | map coordinates, `[lng, lat]` or `[lng, lat, Z]` where `Z` is elevation in meters |
| `options`         | `Object`  | `{}`       | named options                                                                     |
| `options.topLeft` | `Boolean` | `true`     | If `true` projected coords are top left, otherwise bottom left                    |

Returns: `[x, y]` or `[x, y, z]` in pixels coordinates. `z` is pixel depth.

- If input is `[lng, lat]`: returns `[x, y]`.
- If input is `[lng, lat, Z]`: returns `[x, y, z]`.

Remarks:

- By default, returns top-left coordinates suitable for canvas/SVG type
  rendering.

##### `unproject(xyz, options)`

Unproject pixel coordinates on screen to longitude and latitude on map.

| Parameter         | Type      | Default    | Description                                                                                  |
| ----------------- | --------- | ---------- | -------------------------------------------------------------------------------------------- |
| `xyz`             | `Array`   | (required) | pixel coordinates, `[x, y]` or `[x, y, z]` where `z` is pixel depth                          |
| `options`         | `Object`  | `{}`       | named options                                                                                |
| `options.topLeft` | `Boolean` | `true`     | If `true` projected coords are top left, otherwise bottom left                               |
| `options.targetZ` | `number`  | `0`        | If pixel depth `z` is not specified in `xyz`, use `options.targetZ` as the desired elevation |

Returns: `[lng, lat]` or `[longitude, lat, Z]` in map coordinates. `Z` is elevation in meters.

- If input is `[x, y]` without specifying `options.targetZ`: returns `[lng, lat]`.
- If input is `[x, y]` with `options.targetZ`: returns `[lng, lat, targetZ]`.
- If input is `[x, y, z]`: returns `[lng, lat, Z]`.

##### `projectFlat(lngLat, scale)`

Project longitude and latitude onto Web Mercator coordinates.

| Parameter | Type     | Default      | Description                   |
| --------- | -------- | ------------ | ----------------------------- |
| `lngLat`  | `Array`  | (required)   | map coordinates, `[lng, lat]` |
| `scale`   | `number` | `this.scale` | Web Mercator scale            |

Returns:

- `[x, y]`, representing Web Mercator coordinates.

##### `unprojectFlat(xy, scale)`

Unprojects a Web Mercator coordinate to longitude and latitude.
| Parameter | Type | Default | Description |
| -------------- | --------- | -------- | ------------------------------- |
| `xy` | `Array` | (required) | Web Mercator coordinates, `[x, y]` |
| `scale` | `number` | `this.scale` | Web Mercator scale |

Returns:

- `[longitude, latitude]`

##### `getBounds(options)`

Returns the axis-aligned bounding box of the current visible area.

- `options.z` (number, optional) - To calculate a bounding volume for fetching 3D data, this option can be used to get the bounding box at a specific elevation. Default `0`.

Returns:

- `[[lon, lat], [lon, lat]]` as the south west and north east corners of the smallest orthogonal bounds that encompasses the visible region.

##### `getBoundingRegion(options)`

Returns the vertices of the current visible region.

- `options.z` (number, optional) - To calculate a bounding volume for fetching 3D data, this option can be used to get the bounding region at a specific elevation. Default `0`.

Returns:

- An array of 4 corners in `[longitude, latitude, altitude]` that define the visible region.

##### `fitBounds(bounds, options: object)`

Get a new flat viewport that fits around the given bounding box.

- `bounds` ([[number,number],[number,number]]) - an array of two opposite corners of
  the bounding box. Each corner is specified in `[lon, lat]`.
- `options.padding` (number|{top:number, bottom: number, left: number, right: number}, optional) - The amount of
  padding in pixels to add to the given bounds from the edge of the viewport. If padding is set as object, all parameters are
  required.
- `options.offset` ([number,number], optional) - The center of the given bounds relative to the viewport's center, `[x, y]` measured in pixels.

##### `getMapCenterByLngLatPosition(options: object): [number, number]`

Returns the map center that place a given [lng, lat] coordinate at screen point [x, y].

Parameters:

- `options.lngLat` (Array, required) - [lng,lat] coordinates of a location on the sphere.
- `options.pos` (Array, required) - [x,y] coordinates of a pixel on screen.

Returns:

- `[longitude, latitude]` new map center
