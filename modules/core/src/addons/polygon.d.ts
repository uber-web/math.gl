import {TypedArray} from '@math.gl/core/';

type SegmentVisitor = (
  p1: number[] | TypedArray,
  p2: number[] | TypedArray,
  i1: number,
  i2: number
) => void;

export default class Polygon {
  constructor(
    points: number[] | number[][] | TypedArray | TypedArray[],
    options?: {start?: number; end?: number; size?: number; isClosed?: boolean}
  );

  // https://en.wikipedia.org/wiki/Shoelace_formula
  getSignedArea(): number;
  getArea(): number;
  getWindingDirection(): number;
  forEachSegment(visitor: SegmentVisitor);
  modifyWindingDirection(direction: number);
}
