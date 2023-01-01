import {configure} from '@math.gl/core';

configure({debug: true});

import '../modules/web-mercator/test/spec/versus-mapbox/mapbox-node-polyfill';
import './modules.spec';
