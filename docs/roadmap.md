# Roadmap

A number of workstreams are in progress on math.gl

* Add benchmarks and optimize object creation etc.
* Reduce dist size: Move to a-la-carte imports (v2)
* Reduce dist size: Start using limited transpilation for evergreen browsers (v2)
* Experiment with geometry primitives, to see if frustum culling and ray casting can be usefully expressed as pure math classec.


## Performance

* **SIMD support** - A nice performance related feature that gl-matrix offers is optional SIMD support, which can potentially further speed up math operations. However, due to this feature mainly being available in a single browser (Firefox), and the amount of extra code (directly affecing math.gl library size) that would be involved in supporting it, SIMD support is not included in math.gl. If browser support increases, math.gl woulc likely start including SIMD support for a few selected `Matrix4` operations.
