# Debugging

> Note: This article is a work in progress and may contain incorrect information.


## About Validation and Debug Support

TBA:
* Turning on an off
* performance implications


## About "Printing"

Generating a string representation of a math.gl object with desired precision and formatting.

Every math.gl object has a `formatString({...opts})` method that allows you to stringify an object with special options set. Each object also defines the built-in JavaScript function `toString()` to call `formatString()` with the global printing options in the math.gl `config` object.



* `toString` and `formatString` methods print with controllable precision


| Print Parameter | Default | Description |
| --- | --- | --- |
| `printPrecision` | `4` | Number of significant digits |
| `printTypes` | `false` | Prints the name of the math.gl type (e.g. `Vector3[...]` instead of `[...]` |
| `printDegrees` | `false` | Prints degrees instead of radians (e.g. for `Euler` and `SphericalCoordinates`) |
| `printRowMajor` | `true` | Prints matrices as row major which makes them look more familiar instead of as column major (which is how they are stored internally for WebGL compatibility). |
