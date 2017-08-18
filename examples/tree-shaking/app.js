/* eslint-disable no-var, max-statements */
import {Matrix4, radians} from 'math.gl';

const SIDE = 256;

export const UNIFORMS = {
  uTime: 0.1,
  uModel: new Matrix4().rotateX(0.01).rotateY(0.013),
  uView: new Matrix4().lookAt({
    center: [0, 0, 0],
    eye: [
      Math.cos(0.005) * SIDE / 2,
      Math.sin(0.006) * SIDE / 2,
      (Math.sin(0.0035) + 1) * SIDE / 4 + 32
    ]
  }),
  uProjection: new Matrix4().perspective({fov: radians(60), aspect: 0.75, near: 1, far: 2048.0})
};
