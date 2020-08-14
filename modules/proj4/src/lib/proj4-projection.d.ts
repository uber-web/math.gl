export class Proj4Projection {
  /** Define aliases for one or more projections */
  static defineProjectionAliases(projections: {
    [name: string]: string
  });

  /** Create a projection between two coordinate systems */
  constructor(projections: {from?: string, to?: string});

  /** Project a coordinate project from first to second coordinate system */
  project(coord: number[]): number[];
  /** Project a coordinate project from second to first coordinate system */
  unproject(coord: number[]): number[];
}
