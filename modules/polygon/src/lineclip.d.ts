type BoundingBox = [number, number, number, number];

export function clipPolyline(
  positions : Array<number>,
  bbox : BoundingBox,
  options? : {
    size? : number,
    startIndex? : number,
    endIndex? : number
  }
) : Array<Array<number>>;

export function clipPolygon(
  positions: Array<number>,
  bbox: BoundingBox,
  options? : {
    size? : number,
    startIndex? : number,
    endIndex? : number
  }
) : Array<number>;

export function intersect(a : Array<number>, b : Array<number>, edge : number, bbox : BoundingBox, out? : Array<number>);

export function bitCode(p: Array<number>, bbox : BoundingBox) : number;
