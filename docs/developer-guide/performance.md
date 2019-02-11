# Performance


The code vector and matrix operations in math.gl are based on gl-matrix which makes a credible claim at being the most performant 3D math library available for JavaScript. However, the relentless focus on performance means that gl-matrix offers a procedural API, which doesn't always provide the programming experience. Also there are no error checks which is great in production code.

Since math.gl uses gl-matrix functions under the hood, math.gl's performance can be very close to gl-matrix, but the additional conveniences in math.gl (e.g. using classes instead of a procedural API, debug checks etc) do come with an overhead, that can vary from undetectable to signficant. Understanding this overhead can help you write more performant code and work around most performance issues.

It is worth noting that math.gl has been designed so that in cases where javascript math calculations are performance critical, you can always use gl-matrix directly. See (./docs/get-started/using-with-gl-matrix.md). Essentially, since all math.gl classes inherit from `Array`s they work directly as arguments to gl-matrix functions, no copying necessary.


## Disabling Debug Checks

In debug mode, math.gl does error checks after every operation. It has a modest impact. Verifying that error checks are not being enable could be a simple first step.

```js
import {configure} from 'math.gl';
configure({debug: false});
```


## Minimizing Object Creation

One of the most typical performance issue in math.gl (including most other JavaScript math libraries) is object creation. Creating new `Vector` and `Matrix` instances has significant overhead. Therefore, reusing objects where possible is an important technique to optimize performance.

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


## Browser, OS version etc

The JavaScript engine powering Chrome and Node is still improving. The performance difference between e.g. Node 8 and Node 11 is rather staggering.


## Benchmarking

The math.gl repository comes with a benchmark suite that you can run in your environment to see what operations peform well and shich do not.
