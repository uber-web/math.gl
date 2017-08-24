import overview from '../../docs/README.md';

import euler from '../../docs/api-reference/euler.md';
import mathArray from '../../docs/api-reference/math-array.md';
import matrix4 from '../../docs/api-reference/matrix4.md';
import quaternion from '../../docs/api-reference/quaternion.md';
import spherical from '../../docs/api-reference/spherical-coordinates.md';
import utilities from '../../docs/api-reference/utilities.md';
import vector2 from '../../docs/api-reference/vector2.md';
import vector3 from '../../docs/api-reference/vector3.md';
import vector4 from '../../docs/api-reference/vector4.md';

import install from '../../docs/get-started/README.md';
import debugging from '../../docs/get-started/debugging.md';
import floating from '../../docs/get-started/floating-point.md';
import homogenous from '../../docs/get-started/homogenous-coordinates.md';
import transformations from '../../docs/get-started/transformations.md';
import viewproj from '../../docs/get-started/view-and-projection.md';

export default [{
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Overview',
    markdown: overview,
  }, {
    name: 'Get started',
    children: [{
      name: 'Installation',
      markdown: install,
    }, {
      name: 'Debugging',
      markdown: debugging,
    }, {
      name: 'Floating Point',
      markdown: floating,
    }, {
      name: 'Homogenous Coordinates',
      markdown: homogenous,
    }, {
      name: 'Transformations',
      markdown: transformations,
    }, {
      name: 'View and Projection Matrices',
      markdown: viewproj,
    }],
  }, {
    name: 'API Reference',
    children: [{
      name: 'Euler',
      markdown: euler,
    }, {
      name: 'MathArray',
      markdown: mathArray,
    }, {
      name: 'Matrix4',
      markdown: matrix4,
    }, {
      name: 'Quaternion',
      markdown: quaternion,
    }, {
      name: 'SphericalCoordinates',
      markdown: spherical,
    }, {
      name: 'Vector2',
      markdown: vector2,
    }, {
      name: 'Vector3',
      markdown: vector3,
    }, {
      name: 'Vector4',
      markdown: vector4,
    }, {
      name: 'Utilities',
      markdown: utilities,
    }],
  }]
}]
