## Projections

> Note: This article is a work in progress. It has been included in the documentation in spite of not being completed, since it does provide some additional context for math.gl users.


Projections in math.gl are concerned with projecting 3D coordinates to a 2D plane.


## View Projection Matrices

To set up a 4x4 view projection matrix you need a view matrix (specifying the position, direction and orientation of the camera) and a projection matrix (specifying the characteristics of the camera such as its field of view etc).

To create a projection matrix use:
* `Matrix4.perspective({fov, aspect, near, far})
* `Matrix4.ortho({})

To create a view matrix
* `Matrix4.lookAt({})`


### Decomposing a ViewProjction Matrix

