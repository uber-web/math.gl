# Performance

> This article is a work in progress and may contain incorrect information.


The code vector and matrix operations in math.gl are based on gl-matrix which makes a credible claim at being the most performant 3D math library available for JavaScript. However, the relentless focus on performance means that gl-matrix offers a procedural API, which doesn't always provide the programming experience. Also there are no error checks which is great in production code.

Since math.gl uses gl-matrix functions under the hood, math.gl's performance can be very close to gl-matrix, but the additional conveniences in math.gl (e.g. using classes instead of a procedural API, debug checks etc) do come with an overhead, that can vary from undetectable to signficant. Understanding this overhead can help you write more performant code and work around most performance issues.

It is worth noting that math.gl has been designed so that in cases where javascript math calculations are performance critical, you can always use gl-matrix directly. See (./docs/get-started/using-with-gl-matrix.md). Essentially, since all math.gl classes inherit from `Array`s they work directly as arguments to gl-matrix functions, no copying necessary.


## Disabling Debug Checks

In debug mode, math.gl does error checks after every operation. It has a modest impact. Verifying that error checks are not being enable could be a simple first step.


## Minimizing Object Creation

The typical performance issue in math.gl is in object creation. Creating new `Vector` and `Matrix` instances is the slowest part of math.gl. Therefore, reusing objects where possible is an important technique to optimize performance.

```js
for (...) {
	const v = new Vector3(...);
}
```
vs.
```
const tempVector = new Vector3();
for (...) {
	v.set(...);
}
```

Note that some methods, like `Matrix4.transformVector`, allocate new objects as return values. By providing an optional `target` argument you can prevent this allocation and reuse an object you have already allocated. This technique is borrowed the THREE.js math library where it is a commonly availble optimization.


## Remarks

* **SIMD support** - A nice performance related feature that gl-matrix offers is optional SIMD support, which can potentially further speed up math operations. However, due to this feature mainly being available in a single browser (Firefox), and the amount of extra code (directly affecing math.gl library size) that would be involved in supporting it, SIMD support is not included in math.gl. If browser support increases, math.gl woulc likely start including SIMD support for a few selected `Matrix4` operations.
