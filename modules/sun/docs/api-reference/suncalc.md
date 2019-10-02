# SunCalc

SunCalc is a tiny JavaScript library for calculating sun position for the given location and time.

## Installation

```bash
npm install @math.gl/sun
```


## Usage

```js
import {getSunDirection} from '@math.gl/sun';
const latitude = 37.7749;
const longitude = -122.4194;
const sunDir = getSunDirection(Date.now(), latitude, longitude);
```

## Attribution

This class was ported from [Cesium](https://github.com/mourner/suncalc) under BSD-license.
