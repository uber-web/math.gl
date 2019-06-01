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

import javascriptBench from './lib/javascript.bench';
import commonBench from './lib/common.bench';

import classesBench from './classes/classes.bench';
import vector3Bench from './classes/vector3.bench';
import matrix4Bench from './classes/matrix4.bench';

export default function coreBench(suite, addReferenceBenchmarks) {
  classesBench(suite, addReferenceBenchmarks);
  commonBench(suite, addReferenceBenchmarks);
  javascriptBench(suite, addReferenceBenchmarks);

  vector3Bench(suite, addReferenceBenchmarks);
  matrix4Bench(suite, addReferenceBenchmarks);

  return suite;
}
