# Coordinate Systems

There are many possible ways to represent points in space using coordinates, e.g. rectangular, elliptical, polar/spherical, etc. Which coordinate system is the best depends entirely on the problem. When working with geometical problems, it often becomes obvious that certain types of operations become more simple when using a well chosen coordinate system.

math.gl provides support for a couple of coordinate systems:
* Rectilinear (`Vector3`) - Typically used to represent standard Cartesian space
* Spherical (`SpericalCoordinates`) - Two angles representing point on sphere and a distance from center
* Homogenous (`Vector4`) - These are coordinates in "projective" 3-space. The purpose of these is explained in [link](./'homogenous-coordinates.md')


