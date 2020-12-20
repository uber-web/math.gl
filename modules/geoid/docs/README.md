# @math.gl/geoid

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square" alt="From-v3.4" />
</p>

The `@math.gl/geoid` module provides support for irregular Earth models defined by earth gravity model files.

## Background

While spherical and ellipsoidal models of the earth can be very useful, the Earth is ultimately an irregular object, with lumps of higher density etc. This irregular model of the earth is usually referred to as a "geoid" (essentially, an irregular "ellipsoid").

Earth gravity models can be used to describe this geoid. The models implemented by `@math.gl/geoid` use a superposition of spherical harmonics to approximate measured gravity.

Calculates difference between mean see level height and WGS84 ellipsoid height

## Earth Gravity Model Data Files

Gravity Height Model data files tend to be stored in PGM format.

- Calculates difference between mean see level height and WGS84 ellipsoid height
- Input data have to be loaded from "Earth Gravity Model" \*.pgm file with "PGMLoader"
- A particular model file can be loaded on https://geographiclib.sourceforge.io/html/geoid.html

## Attribution

This implementation is a JavaScript port of selected code from [GeographicLib-1.50.1(https://geographiclib.sourceforge.io/html/index.html), listed as Copyright Charles Karney <charles@karney.com>, under the MIT license.
