# Overview

The `@math.gl/proj4` module provides support for conversion between major geospatial coordinate systems and projections used with computer maps, such as:

- [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System) (World Geodetic System) coordinates.
- [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection)
- etc

## Classes

| Class                   | Description |
| ---                     | --- |
| `Proj4Projection`       | A projection class |

## Usage

Reproject WGS84 coordinates in another CRS
```js
import {Proj4Projection} from '@math.gl/proj4';

const projection = new Proj4Projection({from: 'WGS84', to: '...'});

const wgs84Position = [21, 78, 5000];
const reprojectedPosition = projection.project(wgs84Position);
```

## Geospatial Coordinate Systems

### Aliases

Note that Proj4Projection allows aliases to be defined and comes with the following pre-installed aliases.

| Alias | Resolves To |
| ---                | --- |
| 'WGS84'            | 'EPSG:4326' |
| 'EPSG:3785'        | 'EPSG:3857' 'EPSG:4269' |
| 'GOOGLE'           | 'EPSG:3857' 'EPSG:4269' |
| 'EPSG:900913'      | 'EPSG:3857' 'EPSG:4269' |
| 'EPSG:102113'      | 'EPSG:3857' 'EPSG:4269' |


### References

- [OGC WKT-CRS Specification](http://docs.opengeospatial.org/is/18-010r7/18-010r7.html) standards documentation.
- [spatialreference.org](https://spatialreference.org/) a catalog of coordinate system references.
- [espg.io](https://epsg.io/) Lets the user look up the definition of a coordinate system. 


E.g. [https://epsg.io/4326](https://epsg.io/4326) provides the definition of WGS84 in WKT-CRS format:

```
GEOGCS["WGS 84",
    DATUM["WGS_1984",
        SPHEROID["WGS 84",6378137,298.257223563,
            AUTHORITY["EPSG","7030"]],
        AUTHORITY["EPSG","6326"]],
    PRIMEM["Greenwich",0,
        AUTHORITY["EPSG","8901"]],
    UNIT["degree",0.0174532925199433,
        AUTHORITY["EPSG","9122"]],
    AUTHORITY["EPSG","4326"]]
```

## Attribution

This module is a wrapper around [`proj4js`](http://proj4js.org/), which has a permissive [license](https://github.com/proj4js/proj4js/blob/master/LICENSE.md). A part of the [MetaCRS](https://trac.osgeo.org/metacrs/wiki) libraries.
