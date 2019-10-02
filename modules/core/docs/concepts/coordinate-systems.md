# 3D Coordinate Systems

> This article is a work in progress.

There are many possible ways to represent points in space using coordinates, e.g. rectangular, elliptical, polar/spherical, etc. Which coordinate system is the best depends entirely on the problem at hand. When working with specific geometrical problems, it is often the case that the required mathematical operations become more simple in a certain coordinate system which means that it is worth being familiar both with a few different coordinate system and also how to convert between them.

math.gl provides support for a couple of 3D coordinate systems:
* Rectilinear (`Vector3`) - Typically used to represent standard Cartesian space
* Spherical (`SpericalCoordinates`) - Two angles representing point on sphere and a distance from center
* Projective/Homogeneous (`Vector4`) - These are coordinates in "projective" 3-space. The purpose of these is explained in [link](./'homogeneous-coordinates.md')


## Converting between Coordinate Systems

Note that each coordinate system ultimately specifies the same point




## Converting within Coordinate Systems



## Remarks

* Note that a similar situation applies for [rotations](./rotations), where different representations are possible (e.g. Euler angles, Quaternions, Axis/angle, 4x4 matrices) and the choice of a "best"  representation often depends on the problem at hand.
