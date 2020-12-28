# Get Started

## Installation

If using a bundler like webpack to build your app with npm modules, use `npm` or `yarn` to install `@math.gl/core` and any other math.gl modules you need.

```
npm install @math.gl/core
```

Each math.gl module should come with 3 distributions. Normally the `esm` distribution will be selected by your bundler.

For bundlers:

- `dist/es5` - source tree fully transpiled to ES5
- `dist/esm` - source tree, fully transpiled to ES5 except `import/export` keywords are left for the bundler to enable tree shaking.
- `dist/es6` - very lightly transpiled, mostly ES2020 to simplify debugging.

## TypeScript

Type defintions are provided with each module. No need to install any separate types.
