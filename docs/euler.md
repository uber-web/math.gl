# Euler

A class to handle Euler rotation. More information on rotation using a Euler vector can be
found [here](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). Generally speaking the three components of the Euler object represents the roll, pitch and yaw angles and the rotation is applied according to a specific rotation order.


import MathArray from './math-array';
import {checkNumber, clamp} from './common';
import Matrix4 from './matrix4';
import Quaternion from './quaternion';
import Vector3 from './vector3';

// Internal constants
const ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
const ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return (value >= 0 && value < 6);
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }
  return value;
}

export default class Euler extends MathArray {

  // Constants
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  static get ZYX() { return 0; }
  static get YXZ() { return 1; }
  static get XZY() { return 2; }
  static get ZXY() { return 3; }
  static get YZX() { return 4; }
  static get XYZ() { return 5; }
  static get RollPitchYaw() { return 0; }

  static get DefaultOrder() { return Euler.ZYX; }
  static get RotationOrders() {
    return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
  }
  static rotationOrder(order) { return Euler.RotationOrders[order]; }

  get ELEMENTS() { return 4; }
  /* eslint-enable no-multi-spaces, brace-style, no-return-assign */

  /*
   * Number|Number[], Number, Number, Number
   */
  constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {

  // If copied array does contain fourth element, preserves currently set order
  copy(array) {

  // Sets the three angles, and optionally sets the rotation order
  // If order is not specified, preserves currently set order
  set(x = 0, y = 0, z = 0, order) {

  validate() {

  // Does not copy the orientation element
  toArray(array = [], offset = 0) {

  // Copies the orientation element
  toArray4(array = [], offset = 0) {

  toVector3(optionalResult) {

  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */
  // x, y, z angle notation (note: only corresponds to axis in XYZ orientation)
  get x()      { return this[0]; }
  set x(value) { return this[0] = checkNumber(value); }
  get y()      { return this[1]; }
  set y(value) { return this[1] = checkNumber(value); }
  get z()      { return this[2]; }
  set z(value) { return this[2] = checkNumber(value); }

  // alpha, beta, gamma angle notation
  get alpha()      { return this[0]; }
  set alpha(value) { return this[0] = checkNumber(value); }
  get beta()       { return this[1]; }
  set beta(value)  { return this[1] = checkNumber(value); }
  get gamma()      { return this[2]; }
  set gamma(value) { return this[2] = checkNumber(value); }

  // phi, theta, psi angle notation
  get phi()        { return this[0]; }
  set phi(value)   { return this[0] = checkNumber(value); }
  get theta()      { return this[1]; }
  set theta(value) { return this[1] = checkNumber(value); }
  get psi()        { return this[2]; }
  set psi(value)   { return this[2] = checkNumber(value); }

  // rotation order, in all three angle notations
  get order()      { return this[3]; }
  set order(value) { return this[3] = checkOrder(value); }
  /* eslint-disable no-multi-spaces, brace-style, no-return-assign */

  // Constructors
  fromVector3(v, order) {

  // TODO - with and without 4th element
  fromArray(array, offset = 0) {

  // Common ZYX rotation order
  fromRollPitchYaw(roll, pitch, yaw) {

  fromQuaternion(q, order) {

  fromRotationMatrix(m, order = Euler.DefaultOrder) {

  // ACCESSORS

  // @return {Matrix4} a rotation matrix corresponding to rotations
  //   per the specified euler angles
  getRotationMatrix(m = new Matrix4()) {

  getQuaternion() {
}
