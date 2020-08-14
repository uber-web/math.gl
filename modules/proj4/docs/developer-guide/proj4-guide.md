# Overview

The `@math.gl/proj4` module provides support for conversion between major geospatial coordinate reference systems (CRS) and projections used with computer maps, such as:

- [WGS84](https://en.wikipedia.org/wiki/World_Geodetic_System) (World Geodetic System) coordinates.
- [Web Mercator Projection](https://en.wikipedia.org/wiki/Web_Mercator_projection)

## Classes

| Class             | Description        |
| ----------------- | ------------------ |
| `Proj4Projection` | A projection class |

## Usage

Reproject WGS84 coordinates to another CRS

```js
import {Proj4Projection} from '@math.gl/proj4';

const nad83Proj =
  '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees';
const projection = new Proj4Projection({from: 'WGS84', to: nad83Proj});

const wgs84Position = [21, 78, 5000];
const reprojectedPosition = projection.project(wgs84Position);
```

## Geospatial Coordinate Systems

There are an infinite number of possible coordinate systems; therefore strict syntax is required to describe the parameters of any given CRS. Two main systems are supported in this module: Proj4 strings and WKT strings. Within WKT there exists both OGC WKT and ESRI WKT syntax; both are generally supported though some more-obscure projection keywords may not be used. Note that Proj4 strings [can be slightly more accurate](https://github.com/proj4js/proj4js/issues/222) in some circumstances than WKT strings.

There are thousands of named "EPSG" projections. This module only includes aliases for those in the section below by default. To use a different EPSG projection, you can use <https://epsg.io>. For example, <https://epsg.io/4326> defines standard longitude-latitude coordinates and lists multiple projection strings. Choose one of the `OGC WKT`, `ESRI WKT`, or `PROJ.4` strings listed.

The epsg.io website also has a public API, e.g., for WGS 84: `https://epsg.io/?q=4326&format=json`

```json
{
  "status": "ok",
  "number_result": 1,
  "results": [
    {
      "code": "4326",
      "kind": "CRS-GEOGCRS",
      "bbox": [90.0, -180.0, -90.0, 180.0],
      "wkt": "GEOGCS[\"WGS 84\",DATUM[\"WGS_1984\",SPHEROID[\"WGS 84\",6378137,298.257223563,AUTHORITY[\"EPSG\",\"7030\"]],AUTHORITY[\"EPSG\",\"6326\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.0174532925199433,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4326\"]]",
      "unit": "degree (supplier to define representation)",
      "proj4": "+proj=longlat +datum=WGS84 +no_defs",
      "name": "WGS 84",
      "area": "World.",
      "default_trans": 0,
      "trans": [],
      "accuracy": ""
    }
  ]
}
```

### Aliases

Note that Proj4Projection allows aliases to be defined and comes with the following pre-installed aliases.

| Coordinate system    | Aliases                                                          |
| -------------------- | ---------------------------------------------------------------- |
| Lat/lon, WGS84 datum | `EPSG:4326`, `WGS84`                                             |
| Lat/lon, NAD83 datum | `EPSG:4269`                                                      |
| Web mercator         | `EPSG:3857`, `EPSG:3785`, `GOOGLE`, `EPSG:900913`, `EPSG:102113` |

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
