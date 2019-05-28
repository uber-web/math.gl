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

One of the most typical performance issue in math.gl (and most other JavaScript math libraries) is excessive object creation. Creating new `Vector` and `Matrix` instances every time a calculation is made incurs significant overhead. Therefore, reusing objects where possible is an important technique to optimize performance.

```js
for (...) {
	const v = new Vector3(x, y, z);
}
```
vs.

```js
const tempVector = new Vector3();
for (...) {
	v.set(x, y, z);
}
```

Note that a number of methods, such as `Matrix4.transformVector()`, allocate new objects as return values. These methods typically accept an optional `result` argument which can be populated and returned. By providing a `result` value, you revent the allocation of a new object and instead reuse an object you have already allocated.

```js
for (...) {
  const v = matrix4.transformVector([x, y, z]);
  // v now contains a reference to a newly allocated `Vector3` which was updated with the result of the `tranformVector` operation.
}
```
vs.

```js
const tempVector = new Vector3();
for (...) {
  const v = matrix4.transformVector([x, y, z], tempVector);
  // v now contains a reference to `tempVector` which was updated with the result of the `tranformVector` operation.
}
```

## Browser, OS version etc

The JavaScript engine powering Chrome and Node is still improving. The performance difference between e.g. Node 8 and Node 11 is rather staggering.


## Benchmarking

The math.gl repository comes with a benchmark suite that you can run to see what operations are fast and which take more time in your environment.

You can run the benchmarks both in Node.js and in the browser

```bash
yarn bench
yarn bench browser
```


## JavaScript Engine Optimizations

> This section should be considered advanced, and is not required reading for the normal math.gl user. However if you are writing your own math code it can be useful to have an understanding.

To get good performance it is important to structure code so that it can be compiled and optimized by the JavaScript engine in use. math.gl focuses on optimizing for the V8 engine, since it is used both by Chrome and Node.js, however the optimizations are general and should also be relevant to other optimizing JavaScript engines.

In particular, math.gl makes efforts to ensure that the engine knows that fields in math classes contain numbers, which allows for important optimizations that can result in a \~5x performance difference for simple operations.

A good introduction to the topic can be found in [JavaScript Performance Pitfalls in V8](https://ponyfoo.com/articles/javascript-performance-pitfalls-v8).
