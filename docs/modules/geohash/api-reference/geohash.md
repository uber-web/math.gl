# GeoHash API

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.7-blue.svg?style=flat-square" alt="From-v3.7" />
</p>

> The GeoHash functions in math.gl are currently focused on **decoding** S2 encoded data, not encoding it.

## Functions

#### `getGeohashLngLat(geohash: string): number[]`

Returns the center lng, lat of a GeoHash cell.

#### `getGeohashBoundary(geohash: string): number[][]`

Returns the boundary of a GeoHash cell as a polygon of [lng, lat], [lng, lat], ... .

#### `getGeohashBoundaryFlat(geohash: string): number[]`


Returns the boundary of a GeoHash cell as a flat polygon of lng, lat, lng, lat, ... .
