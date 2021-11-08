// Copyright (c) 2017 Uber Technologies, Inc.
// MIT License

const test = require('tape');

// @ts-ignore TS2339: Property 'browserTestDriver_finish' does not exist on type 'Window & typeof globalThis'
test.onFinish(window.browserTestDriver_finish);
// @ts-ignore TS2339: Property 'browserTestDriver_fail' does not exist on type 'Window & typeof globalThis'
test.onFailure(window.browserTestDriver_fail);

require('./index');
