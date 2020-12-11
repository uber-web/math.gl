import {NumberArray} from '@math.gl/core/';

type SegmentVisitor = (p1: NumberArray, p2: NumberArray, i1: number, i2: number) => void;

export default class Polygon {
  constructor(
    points: NumberArray | NumberArray[],
    options?: {start?: number; end?: number; size?: number; isClosed?: boolean}
  );

  // https://en.wikipedia.org/wiki/Shoelace_formula
  getSignedArea(): number;
  getArea(): number;
  getWindingDirection(): number;
  forEachSegment(visitor: SegmentVisitor): void;
  modifyWindingDirection(direction: number): boolean;
}
