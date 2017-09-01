# SphericalCoordinates

```js
class SphericalCoordinates
```

See [Wikipedia](https://en.wikipedia.org/wiki/Spherical_coordinate_system)

 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.


## Usage

```js
import {SphericalCoordinates} from 'math.gl';
```

Creating a SphericalCoordinates object
```js
const spherical = new SphericalCoordinates({phi: 0, theta: 0});
const spherical = new SphericalCoordinates({pitch: 0, bearing: 0});
const spherical = new SphericalCoordinates({longitude: 0, latitude: 0});
```

Converting to a direction `Vector3`
```js
const direction = new SphericalCoordinates().toVector3();
```

Manipulating spherical coordinates;
```js
spherical.bearing += 3; // Add three degrees to bearing
spherical.theta -= Math.PI / 4; // Subtract PI/4 radians from theta.
```


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

### constructor

```js
SphericalCoordinates({phi = 0, theta = 0, radius = 1.0})
SphericalCoordinates({bearing = 0, pitch = 0, altitude = 1.0})
SphericalCoordinates({longitude = 0, latitude = 0, z = 1.0})
```

* phi=0 - rotation around X (latitude)
* theta=0 - rotation around Y (longitude)
* radius=1 - Distance from center

### set

`set(radius, phi, theta)`

### clone

`clone()`

### copy

`copy(other)`

### fromLngLatZ

`fromLngLatZ([lng, lat, z])`

### fromVector3

`fromVector3(v)`

### makeSafe

`makeSafe()`

// restrict phi to be betwee EPS and PI-EPS


### toVector3

`toVector3(center = [0, 0, 0])`

// TODO - add parameter for orientation of sphere? up vector etc?

### check()


## Remarks

* Inspired by THREE.js `THREE.Spherical` class
