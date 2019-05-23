// The MIT License
//
// Copyright © 2010-2018 three.js authors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// @author bhouston / http://exocortex.com

import {Vector2, Vector3} from 'math.gl';

export const x = 2;
export const y = 3;
export const z = 4;
export const w = 5;

export const negInf2 = new Vector2(Number.MIN_VALUE, Number.MIN_VALUE);
export const posInf2 = new Vector2(Number.MAX_VALUE, Number.MAX_VALUE);

export const zero2 = new Vector2();
export const one2 = new Vector2(1, 1);
export const two2 = new Vector2(2, 2);

export const negInf3 = new Vector3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
export const posInf3 = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);

export const zero3 = new Vector3();
export const one3 = new Vector3(1, 1, 1);
export const two3 = new Vector3(2, 2, 2);

export const eps = 0.0001;
