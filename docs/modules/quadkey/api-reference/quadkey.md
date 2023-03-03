# QuadKey API

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.7-blue.svg?style=flat-square" alt="From-v3.7" />
</p>


The quadkey library is currently focused on decoding quadkeys.

> The quadkey functions in math.gl are currently focused on **decoding** S2 encoded data, not encoding it.

## Functions

#### `getQuadkeyLngLat(quadkey: string): number[]`

Returns the center lng, lat of a quadkey cell.

#### `getQuadkeyBoundary(quadkey: string): number[][]`

Returns the center lng, lat of a quadkey cell.

#### `getQuadkeyBoundaryFlat(quadkey: string): number[]`

Returns the center lng, lat of a quadkey cell.
