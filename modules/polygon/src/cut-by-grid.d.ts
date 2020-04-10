type Polygon = Array<number> | {positions: Array<number>, holeIndices: Array<number>};

export function cutPolylineByGrid(
  positions : Array<number>,
  options : {
    size? : number,
    broken? : boolean,
    gridResolution? : number,
    gridOffset? : [number, number],
    startIndex? : number,
    endIndex? : number
  }
) : Array<number> | Array<Array<number>>;

export function cutPolygonByGrid(
  positions : Array<number>,
  holeIndices : Array<number> | null,
  options : {
    size? : number,
    gridResolution? : number,
    gridOffset? : [number, number]
  }
) : Array<Polygon>;
