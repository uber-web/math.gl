// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const {Bench} = require('@probe.gl/bench');
const addBenchmarks = require('./modules.bench').default;

const addReferenceBenchmarks = false;

const suite = new Bench();

addBenchmarks(suite, addReferenceBenchmarks);

suite
  // Calibrate performance
  .calibrate()
  .run()
  // when running in browser, notify test the driver that it's done
  .then(() => {
    // @ts-ignore TS2339: Property 'browserTestDriver_finish' does not exist
    if (typeof window !== 'undefined' && window.browserTestDriver_finish) {
      // @ts-ignore TS2339: Property 'browserTestDriver_finish' does not exist
      window.browserTestDriver_finish();
    }
  });
