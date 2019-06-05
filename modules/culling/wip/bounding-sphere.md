## WIP

BoundingSphere.fromOrientedBoundingBox = function(orientedBoundingBox, result) {
Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.

@param {OrientedBoundingBox} orientedBoundingBox The oriented bounding box.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.

@param {OrientedBoundingBox} orientedBoundingBox The oriented bounding box.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

    BoundingSphere.fromRectangle2D = function(rectangle, projection, result) {
Computes a bounding sphere from a rectangle projected in 2D.

@param {Rectangle} [rectangle] The rectangle around which to create a bounding sphere.
@param {Object} [projection=GeographicProjection] The projection used to project the rectangle into 2D.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

    BoundingSphere.fromRectangleWithHeights2D = function(rectangle, projection, minimumHeight, maximumHeight, result) {
Computes a bounding sphere from a rectangle projected in 2D.  The bounding sphere accounts for the
object's minimum and maximum heights over the rectangle.

@param {Rectangle} [rectangle] The rectangle around which to create a bounding sphere.
@param {Object} [projection=GeographicProjection] The projection used to project the rectangle into 2D.
- `minimumHeight`=0.0 The minimum height over the rectangle.
- `maximumHeight`=0.0 The maximum height over the rectangle.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.

    BoundingSphere.fromRectangle3D = function(rectangle, ellipsoid, surfaceHeight, result) {
Computes a bounding sphere from a rectangle in 3D. The bounding sphere is created using a subsample of points
on the ellipsoid and contained in the rectangle. It may not be accurate for all rectangles on all types of ellipsoids.

@param {Rectangle} [rectangle] The valid rectangle used to create a bounding sphere.
@param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid used to determine positions of the rectangle.
- `surfaceHeight`=0.0 The height above the surface of the ellipsoid.
- `result` Optional object onto which to store the result.

Returns
- The modified `result` parameter or a new `BoundingSphere` instance if none was provided.
