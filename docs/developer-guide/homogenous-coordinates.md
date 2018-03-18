# About Homogenous Coordinates

> This article is a work in progress and may contain incorrect information.


The math.gl `Vector4` class is not normally used to represent four dimensonal points. Instead it is intended to be used to calculate with 3 dimensonal **homogenous coordinates**, as defined by projective geometry.

Mathematically, in projective geometry, each `Vector4` is interpreted as a point on a 3D line through the origin. And it is this line that is the primary object, in the sense that the point is only considered to be one of infinintely many "representatives" of that a line through the origin. Dividing `xyz` with the same number will generate another point, or 'representative' of the same line

The main reason homogenous coordinates and projective geometry are used in 3D graphics programming is that they allow perspective projection and translations to be represented as linear transformations using 4x4 matrices.


### The W Coordinate

Mathematically, homogenous coordinates add one extra dimension to represent a number. In the 3 dimensional computer graphics case, it is customary to refer to the extra (4th) components as `w`. Mathematically, the `w` coordinate indicates which representative along the projective line.

There is a straightforward graphical interpretation of the `w` coordinate: During projection of a set of homogenous vectors onto a plane at distance 1 from the origin, all the vectors are normalized so that their `w` coordinates are `1` by dividing `xyz` with `w`. which leads to the following graphical interpretation:

| `w`     | Graphical Interpretation  |
| ---     | --- |
| > `1`   | your object will look smaller |
| < `1`   | your object will look bigger |
| = `0`   | will cause a crash or undefined behavior |
| < `0`   | will flip your object (upside-down, back-to-front, ...) |

Both math.gl and typical GPUs do not support calculations on homogenous coordinates with a `w` component of zero. (However, zero `w`coordinates play a very important role in general projective geometry, see "Background" below).


## Practical Usage

### Projective Transformation

A general projective transformation matrix has the following format

<math display="block">
  <mrow>
    <mfenced open="[" close="]">
      <mtable>
        <mtr>
          <mtd columnalign="center"><msub><mi>c</mi><mn>0</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>1</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>2</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>proj</mi><mi>x</mi></msub></mtd>
        </mtr>
        <mtr>
          <mtd columnalign="center"><msub><mi>c</mi><mn>1</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>2</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>3</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>proj</mi><mi>y</mi></msub></mtd>
        </mtr>
        <mtr>
          <mtd columnalign="center"><msub><mi>c</mi><mn>2</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>3</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>c</mi><mn>4</mn></msub></mtd>
          <mtd columnalign="center"><msub><mi>proj</mi><mi>z</mi></msub></mtd>
        </mtr>
        <mtr>
          <mtd columnalign="center"><msub><mi>trans</mi><mi>x</mi></msub></mtd>
          <mtd columnalign="center"><msub><mi>trans</mi><mi>y</mi></msub></mtd>
          <mtd columnalign="center"><msub><mi>trans</mi><mi>z</mi></msub></mtd>
          <mtd columnalign="center"><msub><mi>scale</mi><mi>global</mi></msub></mtd>
        </mtr>
      </mtable>
    </mfenced>

    <mo>.</mo>

    <mfenced open="[" close="]">
      <mtable>
        <mtr><mtd columnalign="center"><mi>x</mi></mtd></mtr>
        <mtr><mtd columnalign="center"><mi>y</mi></mtd></mtr>
        <mtr><mtd columnalign="center"><mi>z</mi></mtd></mtr>
        <mtr><mtd columnalign="center"><mi>w</mi></mtd></mtr>
      </mtable>
    </mfenced>
  </mrow>
</math>


### Translation of 3D coordinates

Linear transformations on a vector space can not move the origin, they can only scale and rotate.

Translations leave the `w` coordinate unchanged.

As can be seen in the general format of the projection matrix, setting `w` to 0 prevents a vector from picking up the translations when multiplied with a 4x4 matrix. (easy to see as the translations are stored in the final column of the transposed matrix)


### Perspective Transformation

Note that in general, a perspective transformation (i.e. multipliying) do change the `w` coordinate of the `Vector4`, so vectors must be "scaled" after transformation when used in JavaScript.

GPU Note: the GPU automatically divides `vec4` `xyz` components with `w` when they are returned from the vertex shader (when homogenous coordinates are returned from the vertex shader (typically by assigning a `vec4` to `gl_Position`). This can be an important detail to be aware of when comparing JavaScript and GLSL code, and also when working in screen space (post-projection) in the vertex shader, in which case you typically do need to perform the `w` scaling yourself.


## Background Information

Some fun facts to provide additional context around homogenous coordinates.

Projective geometry was coordinatized (in the form or homogenous coordinates) in the early 1800s by Plücker and Möbius, almost 200 years after the coordinatization of "affine" geometry by Descartes.

There is a special **notation** for homogenous coordinate vectors that emphasizes the relative aspect of the values:

<math>
  <mfenced open="[" close="]" separators=":::">
    <mi>x</mi><mi>y</mi><mi>z</mi>
  </mfenced>
</math>

However, in mathematics, one of the most important aspects of projective geometry is that it can be used to avoid handling of **special cases** (this aspect is not used in math.gl). Essentially, in contrast to line equations in affine geometry, projective geometry allows parallel lines to be represented by adding a set of additional points in the form of a "plane at infinity" (which is represented by `w`=`0`). This is powerful as it makes it possible to e.g. make statements about geometry (such as two lines always meet in one point) without having to make tedious exceptions for parallel lines.
