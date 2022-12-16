// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

import './lib/common.spec';

import './classes/vectors.spec';
import './classes/vector2.spec';
import './classes/vector3.spec';
import './classes/vector4.spec';
import './classes/matrix3.spec';
import './classes/matrix4.spec';
import './classes/pose.spec';
import './classes/quaternion.spec';

import './classes/euler.spec';
import './classes/spherical-coordinates.spec';

// Run the three.js math test suites on math.gl classes
import './threejs-tests';
