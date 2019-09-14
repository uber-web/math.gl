# What's New

## v6.2

### v6.2.1

- A new method `getFlyToDuration` is added, it calculates duration (milliseconds) required for flyTo transition from start viewport to end viewport.
- `flyToViewport` now supports custom `curve`,  value, through newly added `opts` argument.

## v6.2.0

Release date: September 2, 2019

- `fitBounds` now supports a `minExtent` parameter to prevent infinite `zoom` from being returned when fitting a "degenerate" bounding box with zero extents.

## v6.1

Release date: Feb 2, 2019

- NEW: User friendly error messages to help catch incorrectly formatted input data
- Now uses gl-matrix@3.0.0

## v6.0

Release date: Nov 30, 2018

* NEW: `getProjectionMatrix` can now match the z-buffer of the latest Mapbox (when called with `nearZMultipler: 1 / viewport.height, farZMultiplier: 1.01`)
* NEW: `addMetersToLngLat` utility
* FIX: returned values by `getDistanceScales` now reflect the flipped y-direction between spherical coordinates and the WebMercator world.
* FIX: `WebMercatorViewport`'s `project` and `unproject` handle altitude correctly
* BREAKING: `getWorldPosition` is removed

## v5.2

Release date: June 25, 2018

* Upgrade to `math.gl@2.0.0`


## v5.1

Release date: April 16, 2018

* **`getProjectionParameters`** - New utility function that returns basic projection parameters, like field of view etc. Enables applications to directly create projection matrices using the math library of their choice, instead of using `getProjectionMatrix`. This can for instance be used to create orthographic projections, and to switch between perspective and orthographic projection modes.
**`assert` Dependency Removed** - No longer imports the "built-in" `assert` module (which added size and caused issues in react-native).
**Size Reduction** - Adds more compact, untranspiled distribution for apps that only need to run on modern browsers. To reduce your final bundle size, add the `esnext` tag to the front of webpack's `resolve.mainField` array and it will pick up the untranspiled distribution.


## v5.0

Release Date: Jan 9, 2018

- **Improved Distance Scales** - Second order polynomial approximations are now available, with significant precision improvement over the previous linear approximations.
- **3D Projection** - `project` and `unproject` methods deal with 3d pixel coordinates (depth).
- **Improved documentation** - This website now matches other frameworks in the [vis.gl](http://vis.gl) framework suite.
- **Primitive Web Mercator Utilities** - A more primitive set of utility functions is now available. Classes here and in other repos like deck.gl use these for increased code sharing and smaller exectables.
- **Size Reduction** - Use [math.gl](https://uber-web.github.io/math.gl/#/documentation/overview) library, which is a smaller dependency than `gl-matrix`.


## v4.1

Release Date: Jun 26, 2017

- **fitBounds**: The `PerspectiveMercatorViewport.fitBounds` method is back.
- **Size Reduction** - Replace gl-matrix dependency with cherry-pick imports


## v4.0

Release Date: Apr 5, 2017

* **Perspective Support** - Adds a new perspective enabled `PerspectiveMercatorViewport` class
* **New method** - `getLocationAtPoint`
* **New method** - `getLngLatFromPos`


## v3 - Beta Releases

Release Date: N/A

v3 was a series of beta only releases while the new API was hammered out. There is no official v3 release.


## v2 - Property renaming

Release Date: Dec 2, 2015

* `center` property was broken up into `longitude`, `latitude` properties.
* `dimensions` property was broken up into `width`, and `height` properties.

```js
var viewport = ViewportMercator({
  longitude: 0,
  latitude: 0,
  zoom: 0,
  width: 600,
  height: 800
});
```

Here's what creating a viewport used to look like, prior to `2.0`.

```js
var viewport = ViewportMercator({
  center: [0, 0],
  zoom: 0,
  dimensions: [600, 800]
});
```

The change was made to support the typical `viewport` object from the new [react-map-gl](github.com/uber/react-map-gl) [API changes](https://gist.github.com/vicapow/00017553e92f613d5361).

## v1

Initial release

Release Date: Oct 26, 2015
