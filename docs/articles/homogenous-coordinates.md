# About Homogenous Coordinates

> Note: This article is a work in progress. It has been included in the documentation in spite of not being completed, since it does provide some additional context for math.gl users.


Note that `Vector4` are not normally used to represent four dimensonal points. They are expected to contain "homogenous" 3 dimensional coordinates as defined by projective geometry.

Mathematically, in projective geometry, each `Vector4` represents a line through the origin, unless its `w` component is zero, in which case it represents a line in a plane at infinity.


### The `w` coordinate

Mathematically, the `w` coordinate indicates which representative along the projective line.

* `w` > `1` things will look too small
* `w` > `1` things will look too big
* `w` === `0` will cause a crash or undefined behaviorx
* `w` smaller than `0` would flip your image (upside-down, back-to-front, ...)


## Practical Usage

### Projective Transformation

A general projective transformation matrix has the following format

<math display="block">
  <mrow>
    <mo>|</mo>
    <mtable>
      <mtr>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>0</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>2</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>proj</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>1</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>2</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>3</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>proj</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>2</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>3</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>c</mi>
            <mn>4</mn>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>proj</mi>
            <mi>z</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <msub>
            <mi>trans</mi>
            <mi>x</mi>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>trans</mi>
            <mi>y</mi>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>trans</mi>
            <mi>z</mi>
          </msub>
        </mtd>
        <mtd columnalign="center">
          <msub>
            <mi>scale</mi>
            <mi>global</mi>
          </msub>
        </mtd>
      </mtr>
    </mtable>
    <mo>|</mo>
    <mo>.</mo>
    <mo>|</mo>
    <mtable>
      <mtr>
        <mtd columnalign="center">
          <mi>x</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <mi>y</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <mi>z</mi>
        </mtd>
      </mtr>
      <mtr>
        <mtd columnalign="center">
          <mi>w</mi>
        </mtd>
      </mtr>
    </mtable>
    <mo>|</mo>
  </mrow>
</math>


### Translation of 3D coordinates

Linear transformations on a vector space can not move the origin, they can only scale and rotate.

Translations leave the `w` coordinate unchanged.

As can be seen in the general format of the projection matrix, setting `w` to 0 prevents a vector from picking up the translations when multiplied with a 4x4 matrix. (easy to see as the translations are stored in the final column of the transposed matrix)




### Perspective Transformation

Note that in general, a perspective transformation (i.e. multipliying) do change the `w` coordinate of the `Vector4`, so vectors must be "scaled" after transformation when used in JavaScript.

GPU Note: the GPU automatically divides `vec4` `xyz` components with `w` when they are returned from the vertex shader (when homogenous coordinates are returned from the vertex shader (typically by assigning a `vec4` to `gl_Position`). This can be an important detail to be aware of when comparing JavaScript and GLSL code, and also when working in screen space (post-projection) in the vertex shader, in which case you typically do need to perform the `w` scaling yourself.

