# About Homogenous Coordinates

Note that `Vector4` are not normally used to represent four dimensonal points. They are expected to contain "homogenous" 3 dimensional coordinates as defined by projective geometry.

Mathematically, in projective geometry, each `Vector4` represents a line through the origin, unless its `w` component is zero, in which case it represents a line in a plane at infinity.


### The `w` coordinate

Mathematically, the `w` coordinate indicates which representative along the projective line.

* `w` > `1` things will look too small
* `w` > `1` things will look too big
* `w` === `0` will cause a crash or undefined behaviorx
* `w` smaller than `0` would flip your image (upside-down, back-to-front, ...)


## Practical Usage

The main practical difference is that setting `w` to 0 prevents it from picking up the translations when multiplied with a 4x4 matrix. (easy to see as the translations are stored in the final column of the transposed matrix)



### Translation of 3D coordinates

Linear transformations on a vector space can not move the origin, they can only scale and rotate.

Translations leave the `w` coordinate unchanged.


### Perspective Transformation


Note that perspective transformations do change the `w` coordinate, so vectors must be rescaled after transformation.

### Notes on GPUs

When homogenous coordinates are returned from the vertex shader to the GPU (typically by assigning a `vec4` to `gl_Position`) the GPU automatically divides all components with `w`. Just a detail to be aware of when comparing JavaScript and GLSL code.


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