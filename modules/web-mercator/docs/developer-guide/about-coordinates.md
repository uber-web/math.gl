# Web Mercator Coordinates

| Coordinates | Description |
|---------|-------------|
| LngLat | `[lng, lat, alt]` on earth |
| World  | `[x, y, z]` on the Web Mercator plane |
| Pixels | `[x, y, depth]` on screen |

### LngLat Coordinates

LngLat coordinates are specified in
`[longitude, latitude, elevation]` where longitude and latitude are in degrees from Greenwich meridian and the equator respectively, and altitude is in meters above sea level.

Notes:
* Order is `[lng, lat]` (it can help to think of them as `[x, y]` to remember the order).
* lng goes from -180 to 180.
* lat goes from -85.051129 to 85.051129.

The reason for the latitude cutoff is that the cylindrical mercator projection projects the earth sphere onto an infinitely tall strip, with the poles being projected at infinity. The reason that the cutoff is at ~85 degrees is that cutting off at this value makes the remaining projected area into a square (which at zoom 0 is projected onto 512x512 "pixels"). For details see e.g. https://en.wikipedia.org/wiki/Web_Mercator.


### World Coordinates

World coordinates specifies a location on the linear Web Mercator plane. Each unit is a "pixel" on the Web Mercator tile. It is unique for each lngLat location at a specific zoom level. `[x, y, z]` corresponds to `[longitude, latitude, elevation]` in the LngLat system.

### Pixel Coordinates

Pixel coordinates specifies a point on screen in the format of `[x, y, z]` where x and y are in pixels on screen and `z` is pixel depth, normally between `-1` and `1`.

By default, the pixel coordinate system of the viewport is defined with the origin in the top left, where the positive x-axis goes right, and the positive y-axis goes down. That is, the top left corner is `[0, 0]` and the bottom right corner is `[width - 1, height - 1]`. The `project`/`unproject` functions have a flag that can reverse this convention.

### Additional Notes

* Per cartographic tradition, all angles including `latitude`, `longitude`,
  `pitch` and `bearing` are specified in degrees, not radians.

* It is possible to query the PerspectiveMercatorViewport for a meters per pixel scale.
  Note that that distance scales are latitude dependent under
  web mercator projection [see](http://wiki.openstreetmap.org/wiki/Zoom_levels),
  so scaling will depend on the viewport center and any linear scale factor
  should only be expected to be locally correct.
