# Performance

The code vector and matrix operations in math.gl are based on gl-matrix which is designed as a high performance JavaScript 3D math library.

Since math.gl uses gl-matrix functions under the hood, math.gl's performance is usually very close to gl-matrix, but the additional conveniences in math.gl do come with a certain overhead. Understanding this overhead can help you write more performant code and work around performance issues.

In cases where javascript math calculations are performance critical, you can always use gl-matrix operations directly. See (./docs/get-started/using-with-gl-matrix.md). Essentially, since all math.gl classes inherit from `Array`s they work directly as arguments to gl-matrix functions, no copying necessary.

## Disabling Debug Checks

If debug mode has been turned on, math.gl checks that objects after every operation. Enabling the checks has a modest impact on performance.

```js
import {configure, Vector2} from 'math.gl';
configure({debug: false});
let vector = new Vector2(NaN, NaN); // Initializes an "invalid" vector

configure({debug: true});
let vector = new Vector2(NaN, NaN); // Now throws an error. The check
```

Verifying that error checks are not turned on.
```js
import {configure} from 'math.gl';
console.log('Debug status', configure().debug);
```

## Minimizing Object Creation

The biggest performance issue in math.gl (and essentially all other JavaScript math libraries) is object creation cost. Creating new `Vector3` and `Matrix4` instances every time a calculation is made incurs significant overhead.

There are two standard techniques to avoid object creation costs.

#### Resuing Objects

Therefore, reusing objects where possible is an important technique to optimize performance. A typical technique is to allocate a global object in the file.

Replace

```js
for (...) {
	const v = new Vector3(x, y, z);
}
```

with

```js
const tempVector = new Vector3();
for (...) {
	v.set(x, y, z);
}
```

Note that while creating objects can be slow, copying data into a temo object (e.g. `vector4.copy([1, 1, 1, 1])` or `vector4.copy([1, 1, 1, 1])`) is very fast.

#### Supplying `result` Objects

A number of methods, such as `Matrix4.transformVector()`, allocate new objects as return values. These methods typically accept an optional `result` argument which can be populated and returned. By providing a `result` value, you revent the allocation of a new object and instead reuse an object you have already allocated.

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
