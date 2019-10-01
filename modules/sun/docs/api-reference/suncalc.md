# Suncalc

SunCalc is a tiny JavaScript library for calculating sun position for the given location and time.

## Usage

```js
import {getSunlightDirection} from '@math.gl/sun';
const latitude = 37.7749;
const longitude = -122.4194;
const sunDir = getSunlightDirection(Date.now(), latitude, longitude);
```
