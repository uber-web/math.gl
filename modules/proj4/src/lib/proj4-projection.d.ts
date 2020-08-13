import proj4 from 'proj4';

/**
 * Predefined Aliases
 * 'WGS84':       'EPSG:4326'
 * 'EPSG:3785':   'EPSG:3857' 'EPSG:4269'
 * 'GOOGLE':      'EPSG:3857' 'EPSG:4269'
 * 'EPSG:900913': 'EPSG:3857' 'EPSG:4269'
 * 'EPSG:102113': 'EPSG:3857' 'EPSG:4269'
 */
export class Proj4Projection {
  /** Define aliases for one or more projections */
  static defineProjectionAliases(projections: {
    [name: string]: string
  });

  /** Create a projection between two coordinate systems */
  constructor(projections: {from?: string, to?: string});

  /** Project a coordinate between two coordinate systems */
  project(coord: number[]): number[];
  /** Unproject a coordinate between two coordinate systems */
  unproject(coord: number[]): number[];
}
