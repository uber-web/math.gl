"use strict";module.export({x:()=>x,y:()=>y,z:()=>z,w:()=>w,negInf2:()=>negInf2,posInf2:()=>posInf2,zero2:()=>zero2,one2:()=>one2,two2:()=>two2,negInf3:()=>negInf3,posInf3:()=>posInf3,zero3:()=>zero3,one3:()=>one3,two3:()=>two3,eps:()=>eps},true);var Vector2,Vector3;module.link('math.gl',{Vector2(v){Vector2=v},Vector3(v){Vector3=v}},0);/**
 * @author bhouston / http://exocortex.com
 */



const x = 2;
const y = 3;
const z = 4;
const w = 5;

const negInf2 = new Vector2(Number.MIN_VALUE, Number.MIN_VALUE);
const posInf2 = new Vector2(Number.MAX_VALUE, Number.MAX_VALUE);

const zero2 = new Vector2();
const one2 = new Vector2(1, 1);
const two2 = new Vector2(2, 2);

const negInf3 = new Vector3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
const posInf3 = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);

const zero3 = new Vector3();
const one3 = new Vector3(1, 1, 1);
const two3 = new Vector3(2, 2, 2);

const eps = 0.0001;
