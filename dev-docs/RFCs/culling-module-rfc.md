# Culling Module for math.gl RFC

* **Authors**: Ib Green
* **Date**: Apr 2019
* **Status**: Unfinished Draft

## Summary

This RFC proposes adding a new submodule `@math.gl/culling`, adding support for frustum culling math with a selection of bounding boxes.

## Overview

The vis.gl stack has traditionally relied on GPU processing of geometries but will increasingly require more traditional 3D geometry processing.

## Proposal: New Classes

* CPU side mathematical helper classes (`BoundingBoxes` etc)
* CPU side geometry calculations (`Frustum` intersection, ...)
