# Upgrade Guide

## Upgrading to v3.6

In version 3.6 the entire math.gl code base was converted to typescript (`.ts`).
While the API itself has not changed, in some cases, the introduction of types
made it harder to keep supporting some type signatures and overloads.

Known changes
- `Matrix4.lookAt()` - Now only accepts named parameters.
- `SphericalCoordinates()` - Constructor is now more restrictive in terms of what parameters it accepts.

Note that some omissions may be unintentional, feel free to report upgrade issues
in the math.gl github repo.


## Upgrading to v3.0

### Matrix API changes

Matrix setter functions no longer support ommitted parameters. (Motivation: Increased API rigor, improved debugging and library compactness).

### Matrix transforms now return Arrays by default

The `Matrix4` and `Matrix3` classes no longer by default create new `Vector2`, `Vector3` and `Vector4` instances. Instead they create standard JavaScript arrays.

Previously a new `Vector4` would be allocated if no `result` parameter was provided.

```js
import {Matrix4, Vector4} from '@math.gl/core';
const vector = new Matrix4().transform([0, 0, 0, 1]);
assert(vector instanceof Vector4);
```

Now a plain JavaScript `Array` is allocated

```js
import {Matrix4} from '@math.gl/core';
const vector = new Matrix4().transform([0, 0, 0, 1]);
assert(vector instanceof Array);
```

The old behavior can be restored by providing the result parameter

```js
import {Matrix4, Vector4} from '@math.gl/core';
const vector = new Matrix4().transform([0, 0, 0, 1], new Vector4());
assert(vector instanceof Vector4);
```

Motivation: This change reduces dependencies between math.gl core classes which improves tree-shaking and bundle sizes.

### Matrix setter functions no longer support ommitted parameters

Motivation: This change increases rigor, facilitates debugging, and improves library compactness, and the use case for default parameters was questionable.

The following functions have been deprecated:

| Method                       | Replacement                 | Reason             |
| ---------------------------- | --------------------------- | ------------------ |
| `Matrix*.setColumnMajor`     | `Matrix*.set`               | API simplification |
| `Matrix4.transformPoint`     | `Matrix4.transform`         | Name alignment     |
| `Matrix4.transformVector`    | `Matrix4.transform`         | Name alignment     |
| `Matrix4.transformDirection` | `Matrix4.transformAsVector` | Name alignment     |
| `Matrix3.transformVector`    | `Matrix3.transform`         | Name alignment     |
| `Matrix3.transformVector2`   | `Matrix3.transform`         | Generalize         |
| `Matrix3.transformVector3`   | `Matrix3.transform`         | Generalize         |

The following functions have been removed:

| Method          | Replacement     | Reason                                                      |
| --------------- | --------------- | ----------------------------------------------------------- |
| `Vector2.cross` | `Vector3.cross` | Cross products by definition work on 3 dimensional vectors. |

## Upgrading to v2.0

Experimental exports are now exported with a leading underscore (\_), instead of as members of the `experimental` namespace:

NOW: math.gl v2

```js
import {_Euler as Euler} from '@math.gl/core';
```

BEFORE: math.gl v1.x

```js
import {experimental} from '@math.gl/core';
const {Euler} = experimental;
```

The `experimental` name space export has been removed.

## Upgrading to v1.1

### Removed Functionality

The `Euler` class is no longer included as an experimental export. It would need to be imported from the `dist` folder.
