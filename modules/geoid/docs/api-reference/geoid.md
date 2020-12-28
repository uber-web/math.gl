# Geoid

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square" alt="From-v3.4" />
</p>

class `Geoid` - "Gravity Height Model"

The `Geoid` class calculates difference between mean see level height and WGS84 ellipsoid height. It needs to be initialized with an earth gravity model file.

Input data have to be loaded from "Earth Gravity Model" \*.pgm file with "PGMLoader". A particular model file can be loaded on https://geographiclib.sourceforge.io/html/geoid.html

## Methods

##### Constructor

Create a `Geoid` instance.

@param options - object which includes parameters parsed from _.pgm header
options.data - binary buffer of _.pgm file

Calculates difference between mean see level height and WGS84 ellipsoid height

@param lat - latitude
@param lon - longitude
@returns height in meters

##### getHeight(lat: number, lon: number): number;
