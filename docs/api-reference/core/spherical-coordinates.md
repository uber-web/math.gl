# SphericalCoordinates (Experimental)

> Note this class is considered experimental and must be imported from the `experimental` namespace.
> This documentation is incomplete and may be incorrect

```js
class SphericalCoordinates
```

See also [Wikipedia](https://en.wikipedia.org/wiki/Spherical_coordinate_system), [Wolfram MathWorld](http://mathworld.wolfram.com/SphericalCoordinates.html).

* The poles (phi) are at the positive and negative y axis.
* The equator starts at positive z.

Conversion from spherical to Cartesian (rectilinear) coordinates:

<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfenced open="{" close="">
<mtable columnalign="left">
  <mtr><mrow><mi>x</mi><mo>=</mo><mn>ρ</mn><mi>cos</mi><mn>θφ</mn></mrow></mtr>
  <mtr><mrow><mi>y</mi><mo>=</mo><mn>ρ</mn><mi>cos</mi><mn>θφ</mn></mrow></mtr>
  <mtr><mrow><mi>z</mi><mo>=</mo><mn>ρ</mn><mi>cos</mi><mn>θφ</mn></mrow></mtr>
</mtable>
</mfenced>
</math>


Conversion from Cartesian (rectilinear) to spherical coordinates:

<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfenced open="{" close="">
<mtable columnalign="left">
  <mtr><mrow><mi>r</mi><mo>=</mo><msqrt>
    <msup><mi>x</mi><mn>2</mn></msup><mo>+</mo>
    <msup><mi>y</mi><mn>2</mn></msup><mo>+</mo>
    <msup><mi>z</mi><mn>2</mn></msup>
  </msqrt></mrow></mtr>
  <mtr><mrow><mi>θ</mi><mo>=</mo><mo>arccos</mo><mfrac><mi>z</mi><mi>r</mi></mfrac></mrow></mtr>
  <mtr><mrow><mi>φ</mi><mo>=</mo><mo>arctan</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></mtr>
</mtable>
</mfenced>
</math>

Ranges

<math xmlns="http://www.w3.org/1998/Math/MathML">
<mfenced open="{" close="">
<mtable columnalign="left">
  <mtr><mrow><mi>r</mi><mo>≥<mn>0</mn></mtr>
  <mtr><mrow><mi>θ</mi><mo>≥<mn>0</mn></mtr>
  <mtr><mrow><mi>φ</mi><mo>≥<mn>0</mn></mtr>
</mtable>
</mfenced>
</math>


## Usage

```js
import {_SphericalCoordinates as SphericalCoordinates} from 'math.gl';
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
