# parsePGM

<p class="badges">
  <img src="https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square" alt="From-v3.4" />
</p>

Parse header of "Earth Gravity Model" \*.pgm file.

## Functions

### parsePGM(data, options)

Parse "Earth Gravity Model" loaded from a \*.pgm file, e.g. https://geographiclib.sourceforge.io/html/geoid.html

@param {Uint8Array} data - binary buffer of pgm file
@param {Object} options - loader options
@returns {GeoidHeightModel} - instance of GeoidHeightModel class
