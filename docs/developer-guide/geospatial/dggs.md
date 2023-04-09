# Discrete Global Grids

Working with discrete global grids is a powerful way of unifying the treatment of geospatial data.

When working with multiple grid systems, working with a group of independent libraries with different API conventions and limitations can be non-optimal. There is sometimes a value in having a common set of libraries that work in a somewhat unified way.

## Goals

The DGGS support in math.gl is currently mainly focused on decoding cell indexes or tokens into center points (lng/lat) or boundaries (polygon on lng/lats). 

Encoding and advanced operations (child/neighbor calculation, polygon fills etc are not currently included). Some basic encoding may be included in the future, however a secondary goal is to keep these libraries fairly small.

In terms of API design and nomenclature, the golden standard for DGGS systems at this time is arguably [H3](https://h3geo.org), in terms of functionality, number of languages and platforms supported, community activity etc.  

## Supported Grid Systems

| DGGS                                            | Module             | Functionality                   |
| ----------------------------------------------- | ------------------ | ------------------------------- |
| ![GeoHash](../../images/dggs/geohash.png 'GeoHash') | `@math.gl/geohash` | Get geometry of GeoHash tokens. |
| ![QuadKey](../../images/dggs/quadkey.png 'QuadKey') | `@math.gl/quadkey` | Get geometry of QuadKey tokens  |
| ![S2](../../images/dggs/s2.png 'S2')                | `@math.gl/s2`      | Get geometry of S2 tokens.      |
| ![H3](../../images/dggs/h3.png 'H3')                | `h3-js` \*         | Get geometry of H3 tokens.      |

Note that `h3-js` is not a `math.gl` library. For H3 it is recommended to work directly with the H3 JavaScript bindings.


## API

Rather than expose the original function names as in the existing JavaScript libraries for each DGGS, math.gl applies API naming convention based on the H3 API.

| Function               | S2                  | QuadKey                  | GeoHash                  | H3                  |
| ---------------------- | ------------------- | ------------------------ | ------------------------ | ------------------- |
| Get cell center        | `getS2LngLat`       | `getQuadKeyLngLat`       | `getGeoHashLngLat`       | `getH3LngLat`       |
| Get cell boundary      | `getS2Boundary`     | `getQuadKeyBoundary`     | `getGeoHashBoundary`     | `getH3Boundary`     |
| Get cell boundary flat | `getS2BoundaryFlat` | `getQuadKeyBoundaryFlat` | `getGeoHashBoundaryFlat` | `getH3BoundaryFlat` |

## Comparison of DGGS Systems

### H3

H3, initally developed at Uber, is now widely used across the geospatial indusry. 
While not directly supported by math.gl, is in fact the DGGS we would recommend for most applications.

- Extensive, optimized, evolving API.
- Superb cross-language support.
- Equal distance between neighboring cells
- Similar size between all cells.
- K-ring formation for filtering and convolutions

Downsides:
- More complex projection math.

### GeoHash

Geohash is common choice  open source word http://en.wikipedia.org/wiki/Geohash

Good cross-language support.

### QuadKey

Bing Maps uses a [quadkey](http://msdn.microsoft.com/en-us/library/bb259689.aspx.) structure as their tiling scheme. Here is an overview of the concept 

- Quadtrees are more predictable in that each level spans a square (at least in terms of coordinates), whereas in geohash representation sometimes squares sometimes rectangles are spanned.

### Other systems

