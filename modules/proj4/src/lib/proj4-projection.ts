import proj4 from 'proj4';

export class Proj4Projection {
  /** Define aliases for one or more projections */
  static defineProjectionAliases(aliases: {[name: string]: string}): void {
    const aliasArray = [];
    for (const alias in aliases) {
      aliasArray.push([alias, aliases[alias]]);
    }
    proj4.defs(aliasArray);
  }

  private _projection: proj4.Converter;

  constructor({from = 'WGS84', to = 'WGS84'}) {
    this._projection = proj4(from, to);
    if (!this._projection) {
      throw new Error('Invalid projection');
    }
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
  }

  /** Project a coordinate project from first to second coordinate system */
  project(coord: number[]): number[] {
    return this._projection.forward(coord);
  }
  /** Project a coordinate project from second to first coordinate system */
  unproject(coord: number[]): number[] {
    return this._projection.inverse(coord);
  }
}
