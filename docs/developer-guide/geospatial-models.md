# Geospatial Models

This section introduces some basic concepts used when modeling the Earth. The terminology and descriptions align with the WGS (World Geodetic System).

## Earth Models

| Earth Model | Modeled By          | Description                                                                                                                                                                                      |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Sphere`    | Web Mercator        | Earth is a sphere. Permits fast visualization. Mainly used in the web mercator projection to quickly project ellipsoidal coordinates on a flat surface, with less than 0.5% error.               |
| `Ellipsoid` | WGS84               | Earth is a (rotationally) flattened ellipsoid centered at Earth's center of gravity. This model is normally used to express WGS coordinates.                                                     |
| `Geoid`     | Earth Gravity Model | The shape that the ocean surface (extended through the continents) would take because of gravity and rotation of the Earth (ignoring winds, tides etc). It is a lumpy, roughly spherical object. |

## Earth Gravity Models

The Earth geoid can be calculated as an additive refinement of the elevation at each point on the ellipsoid.

| Model      | Resolution  | Size                                                                                                                   | Notes |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- | ----- |
| `EGM84-30` | 0.5 degrees | Part of WGS84. Combined old GRS 80 with Doppler, satellite laser ranging and Very Long Baseline Interferometry (VLBI). |
| `EGM84`    | 0.5 degrees | .                                                                                                                      |
| `EGM96`    | 15'x15'     | Airborne gravity surveys                                                                                               |
| `EGM2008`  | 2.5'x2.5'   | [GRACE](https://en.wikipedia.org/wiki/GRACE_and_GRACE-FO) Satellite missions                                           |

The additive refinement is calculated using spherical harmonics using big coefficent files.

Newer models do provide additional precision, at the expense of considerable memory size for the coefficient files (and additional computational cost).
