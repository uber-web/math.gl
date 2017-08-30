# Floating Point

## Precision


## About Comparisons

Due to small rounding errors, exact equality is often not a reliable way to compare floating point numbers. Therefore the default `equals` operation checks that two numbers are within a small delta.

There is also an `exactEquals` method that compares the floating point values directly.

```js
 return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
```

TBA:
* Floating point comparison implementation in gl-matrix and alternatives (links)



* [Comparisons](http://floating-point-gui.de/errors/comparison/)
