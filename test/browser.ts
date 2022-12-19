// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

import test from 'tape';
import {configure} from '@math.gl/core';

configure({debug: true});

// @ts-ignore TS2339: Property 'browserTestDriver_finish' does not exist on type 'Window & typeof globalThis'
test.onFinish(window.browserTestDriver_finish);
// @ts-ignore TS2339: Property 'browserTestDriver_fail' does not exist on type 'Window & typeof globalThis'
test.onFailure(window.browserTestDriver_fail);

import './modules.spec';
