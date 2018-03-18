/**
 * @author bhouston / http://exocortex.com
 */

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
