# Overview

`@math.gl/quadkey` is a JavaScript library providing math for the Quadkey DGGS (Discrete Global Grid System).

## Installation

```bash
npm install @math.gl/quadkey
```

## Usage

Get a polygon representing the outline of a specific 
```js
import {getGeohashPolygon} from '@math.gl/quadkey';
const polygon = getGeohashPolygon(geohash);
```

## Attribution

This module is a fork of @mourner's [SunCalc](https://github.com/mourner/suncalc) under BSD 2-clause license.
