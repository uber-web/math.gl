# Proj4Projection

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

Define Projection Aliases

```js
import {Proj4Projection} from '@math.gl/proj4';

Proj4Projection.defineProjectionAliases({
  'EPSG:4326': '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees',
  'EPSG:4269':
    '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees'
});
const projection = new Proj4Projection({from: 'EPSG:4326', to: 'EPSG:4269'});
```

## Static Fields

### Proj4Projection.defineProjectionAliases(projections: {[alias: string]: string});

Defines projection aliases

## Methods

### constructor(options: {from?: string, to?: string})

Create a new `Proj4Projection` instance that can convert between the specified coordinate systems.

### project(coord: number[]): number[]

Project a coordinate project from first to second coordinate system

### unproject(coord: number[]): number[]

Project a coordinate project from second to first coordinate system
