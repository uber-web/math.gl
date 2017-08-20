# SphericalCoordinates

See [Wikipedia](https://en.wikipedia.org/wiki/Spherical_coordinate_system)

Under construction

## Usage

## Members

// Standard spherical coordinates
### phi
### theta
### radius
### altitude

// lnglatZ coordinates
### lng
### lat
### z


## Methods

### constructor(phi = 0, theta = 0, radius = 1.0, radiusScale = EARTH_RADIUS_METERS)
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.

* phi=0 - rotation around X (latitude)
* theta=0 - rotation around Y (longitude)
* radius=1 - Distance from center

### set(radius, phi, theta)

### clone()

### copy(other)

### fromLngLatZ([lng, lat, z])

### fromVector3(v)

### makeSafe()

// restrict phi to be betwee EPS and PI-EPS


### toVector3(center = [0, 0, 0])

// TODO - add parameter for orientation of sphere? up vector etc?

### check()


## Remarks

* Inspired by THREE.js Spherical class
