# Roadmap

## 3D Primitives

- Add a submodule with the geometry primitives from luma.gl.

### Geometry Processing

- Provide a library for CPU side geometry processing, for calculating normals, ray casting etc.
- There is initial code in `@loaders.gl/math` that should be cleaned up and moved to math.gl.

### Improved Columnar Table Support

- Geometries are essentially columnar tables, emphasize this further to simplify integration with columnar table systems, primarily ArrowJS.

### GPU Powered Math?

- TBA

## Interoperability and Framework Independence

- An ambition is that math.gl should be able to serve a general purpose 3D math library, enabling the creation of framework-independent 3D and Geospatial code that interoperates with a variety of frameworks.
- math.gl modules (such as geospatial math) should be usable by applications using other frameworks, without having to use the core math.gl classes.
