# Overview

The `@math.gl/proj4` librarys provides support for conversion between major geospatial coordinate systems and projections used with computer maps, such as:

- [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System) (World Geodetic System) coordinates.
- [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection)

## Ellipsoid and WGS84

| Class                   | Dewscription |
| ---                     | --- |
| `Proj4Projection`       | A projection class |

## Usage

Reproject WGS84 coordinates in another CRS
```js
import {Proj4Projection} from '@math.gl/proj4';

const projection = new Proj4Projection({from: 'WGS84', to: '...'});

const wgs84Position = [toRadians(21), toRadians(78), 5000];
const reprojectedPosition = projection.project(wgs84Position);
```

## Attribution

This module is a wrapper around [`proj4js`](http://proj4js.org/), which has a permissive [license](https://github.com/proj4js/proj4js/blob/master/LICENSE.md). A part of the [MetaCRS](https://trac.osgeo.org/metacrs/wiki) libraries.
