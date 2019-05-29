# Upgrade Guide

## Upgrading to v2.0

Experimental exports are now exported with a leading underscore (\_), instead of as members of the `experimental` namespace:

```js
// NOW: math.gl v2
import {_Euler as Euler} from 'math.gl';

// BEFORE: math.gl v1.x
import {experimental} from 'math.gl';
const {Euler} = experimental;
```

The `experimental` name space export has been removed.

## Upgrading to v1.1

### Removed Functionality

The `Euler` class is no longer included as an experimental export. It would need to be imported from the `dist` folder.
