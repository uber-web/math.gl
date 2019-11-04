# Accuracy of Offset Projection

`getDistanceScales` offers a cheap way to project lng/lat or meter offset to pixels. It is useful when using the GPU to project a cluster of coordinates near an origin point, without suffering the precision loss of WebGL.

This article discusses the usage and accuracy of the distance scales.

# Meter offset to pixels

Regular meter offset to pixels projection:
```
uniform vec3 unitsPerMeter;
vec3 meters_offset_to_pixels_offset(vec3 meters) {
    return meters * unitsPerMeter;
}
```

When `getDistanceScales` is called with flag `highPrecision: true`, it generates additional multipliers to compensate for precision loss over latitude change. More precise meter offset to pixels projection:
```
uniform vec3 unitsPerMeter;
uniform vec3 unitsPerMeter2;
vec3 meters_offset_to_pixels_offset_adjusted(vec3 meters) {
    return meters * (unitsPerMeter + unitsPerMeter2 * meters.y);
}
```

Accuracy at San Francisco (37N, z = 12):

| R   | X unadjusted | X adjusted |
| --- | ---- | ---- |
| 100 meters | off by -0.000 pixels, 0.001% | off by 0.000 pixels, 0.001% |
| 1000 meters | off by -0.008 pixels, 0.012% | off by 0.000 pixels, 0.001% |
| 5000 meters | off by -0.200 pixels, 0.060% | off by 0.002 pixels, 0.001% |
| 10000 meters | off by -0.804 pixels, 0.121% | off by 0.003 pixels, 0.000% |
| 30000 meters | off by -7.277 pixels, 0.366% | off by -0.021 pixels, 0.001% |


Accuracy at high latitude (75N, z = 12):

| R   | X unadjusted | X adjusted |
| --- | ---- | ---- |
| 100 meters | off by -0.001 pixels, 0.006% | off by 0.000 pixels, 0.001% |
| 1000 meters | off by -0.130 pixels, 0.061% | off by 0.001 pixels, 0.001% |
| 5000 meters | off by -3.290 pixels, 0.309% | off by -0.001 pixels, 0.000% |
| 10000 meters | off by -13.200 pixels, 0.620% | off by -0.044 pixels, 0.002% |
| 30000 meters | off by -119.884 pixels, 1.877% | off by -1.473 pixels, 0.023% |


# LngLat offset to pixels

Regular lng_lat offset to pixels projection:
```
uniform vec3 unitsPerDegree;
vec3 lnglat_offset_to_pixels_offset(vec3 lngLatZ) {
    return lngLatZ * unitsPerDegree;
}
```

When `getDistanceScales` is called with flag `highPrecision: true`, it generates additional multipliers to compensate for precision loss over latitude change. More precise meter offset to pixels projection:
```
uniform vec3 unitsPerDegree;
uniform vec3 unitsPerDegree2;
vec3 lnglat_offset_to_pixels_offset_adjusted(vec3 lngLatZ) {
    return lngLatZ * (unitsPerDegree + unitsPerDegree2 * lngLatZ.y);
}
```


Accuracy at San Francisco (37N, z = 12):

| R   | Y unadjusted | Y adjusted |
| --- | ---- | ---- |
| 0.001 degrees | off by -0.000 pixels, 0.001% | off by -0.000 pixels, 0.000% |
| 0.01 degrees | off by -0.005 pixels, 0.007% | off by -0.000 pixels, 0.000% |
| 0.05 degrees | off by -0.125 pixels, 0.034% | off by -0.000 pixels, 0.000% |
| 0.1 degrees | off by -0.499 pixels, 0.068% | off by -0.001 pixels, 0.000% |
| 0.3 degrees | off by -4.508 pixels, 0.204% | off by -0.022 pixels, 0.001% |

Accuracy at high latitude (75N, z = 12):

| R   | Y unadjusted | Y adjusted |
| --- | ---- | ---- |
| 0.001 degrees | off by -0.001 pixels, 0.003% | off by -0.000 pixels, 0.000% |
| 0.01 degrees | off by -0.081 pixels, 0.034% | off by -0.000 pixels, 0.000% |
| 0.05 degrees | off by -2.038 pixels, 0.172% | off by -0.005 pixels, 0.000% |
| 0.1 degrees | off by -8.172 pixels, 0.345% | off by -0.039 pixels, 0.002% |
| 0.3 degrees | off by -74.258 pixels, 1.046% | off by -1.055 pixels, 0.015% |



