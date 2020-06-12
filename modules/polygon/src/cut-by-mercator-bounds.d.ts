import {Polygon} from "./cut-by-grid";

export function cutPolylineByMercatorBounds(
  positions : Array<number>,
  options? : {
    size? : number,
    startIndex? : number,
    endIndex? : number,
    normalize? : boolean
  }
) : Array<number>;

export function cutPolygonByMercatorBounds(
  positions : Array<number>,
  holeIndices : Array<number> | null,
  options? : {
    size? : number,
    normalize? : boolean,
    maxLatitude?: number,
    edgeTypes? : boolean
  }
) : Array<Polygon>;

