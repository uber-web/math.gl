# View and Projection Matrices

One of the major functions of any 3D math library is to let applications create view and projection matrices to enable positioning of the viewer in a 3D world and projection of 3D geometries via a field-of-view onto a flat "screen".

To set up a 4x4 view projection matrix you need a view matrix (specifying the position, direction and orientation of the camera) and a projection matrix (specifying the characteristics of the camera such as its field of view etc).

## View Matrices

The purpose of the view matrix is to translate and rotate your world coordinates so that the eye is located in the origin `[0, 0, 0]`, looking down the positive `Z` axis, rotated so that the right direction is `up`. This is called the "view coordinate system".

The purpose of the projection matrix is to transform from view coordinates to "clipspace" coordinates (which is the only coordinate system that the GPU can work directly with). If a point is between `-1` and `1` (after `w` scaling) in clipspace, it will be rendered. The `z` coordinate in clipspace is also scaled (using 'near' and 'far' planes) and if between `-1` and `1` it is used for depth test.

Note: while a projection matrix may generate coordinates with `w !== 1`, the GPU will automatically divide the `xyzw` coordinates with the `w` coordinateof any positions it receives thus and "normalize" the `w` coordinate. Thus, there is no need to do this scaling manually in shaders unless doing additional arithmetic in clipspace.

### Creating a View Matrix

To create a view matrix

- `Matrix4.lookAt({...})`

Normally positions are transformed by the view matrix. If doing work (e.g. lighting) in view space you will also want to transform other geometry such as normals.

## Projection Matrices

A perspective projection typically shows everything inside a frustum (truncated pyramid) or a cube in the view space. Their job is to "scale" or "skew" the geometry inside this virtual shape into the clipspace cube, which is the coordinate system the GPU takes as input.

This projection matrices map your geometry into a "normalized box" where `x` and `y` values of `-1` and `1` represent the bounds of your screen or frame buffer.

Projection matrices can also be ortographic, meaning that 3D objects are mapped via parallel lines onto the screen, rather than via a frustum.

### Perspective Projection Matrix

To create a projection matrix use:

- `Matrix4.perspective({fov, aspect, near, far})`

### Orthographic Projection Matrix

math.gl provides the traditional function create an orhtographic projection matrix by providing the "box" extents:

- `Matrix4.ortho({right, left, top, bottom, near, far})`

The extents are specified in "view space" (which is typically translated and rotated, but not scaled, world space).

### Switching between Perspective and Orthographic Views

In applications it is not unusual to want to offer both perspective and orthographic views. To support this case, math.gl offers an additional method for creating orthographic projection matrix, that takes the same parameters as `Matrix4.perspective()`, with the addition of one additional parameter, `focalDistance` that selects which plane in the perspective view frustum should be used to calculate the size of the orthographic view box.

- `Matrix4.orthographic({fovy, aspect, focalDistance, near, far})`

## About Projection Matrices

An ortograhic projection matrix scales your view to show everything within a box. As can be seen in the matrix below, it centers your view between the bounds of the box, and scales your positions so that the box limits fall on -1 and +1 in each direction. It also does an inversion of the X and Y coordinates.

<math display="block">
  <mrow>
    <mfenced open="[" close="]">
    <mtable>
      <mtr>
        <mtd columnalign="center"><msub><mi>scale</mi><mn>x</mn></msub></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><msub><mi>translate</mi><mi>x</mi></msub></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><msub><mi>scale</mi><mn>y</mn></msub></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><msub><mi>translate</mi><mi>y</mi></msub></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><msub><mi>scale</mi><mn>z</mn></msub></mtd>
        <mtd columnalign="center"><msub><mi>translate</mi><mi>z</mi></msub></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><mi>...</mi></mtd>
        <mtd columnalign="center"><msub><mi>scale</mi><mi>global</mi></msub></mtd>
      </mtr>
    </mtable>
    </mfenced>

    <mo>=</mo>

    <mfenced open="[" close="]">
    <mtable>
      <mtr>
        <mtd columnalign="center"><mfrac><mn>-2</mn><mi>left - right</mi></mfrac></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mfrac><mi>left + right</mi><mi>left - right</mi></mfrac></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mfrac><mn>-2</mn><mi>bottom - top</mi></mfrac></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mfrac><mi>bottom + top</mi><mi>bottom - top</mi></mfrac></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mfrac><mn>2</mn><mi>near - far</mi></mfrac></mtd>
        <mtd columnalign="center"><mfrac><mi>near + far</mi><mi>near - far</mi></mfrac></mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mn>0</mn></mtd>
        <mtd columnalign="center"><mn>1</mn></mtd>
      </mtr>
    </mtable>
    </mfenced>

  </mrow>
</math>

## Decomposing a ViewProjection Matrix

TBA

## Remarks

- As always, matrices are presented here in row major notation, however math.gl stores them internally in column major format to match WebGL conventions.
