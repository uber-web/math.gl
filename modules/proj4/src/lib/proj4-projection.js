/** @typedef {import('./proj4-projection')} types */
import proj4 from 'proj4';

export class Proj4Projection {
  /** Define aliases for one or more projections */
  static defineProjectionAliases(aliases) {
    const aliasArray = [];
    for (const alias in aliases) {
      aliasArray.push([alias, aliases[alias]]);
    }
    proj4.defs(aliasArray);
  }

  constructor({from = 'WGS84', to = 'WGS84'}) {
    this.projection = proj4(from, to);
    if (!this.projection) {
      throw new Error('Invalid projection');
    }

    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
  }

  project(coords) {
    return this.projection.forward(coords);
  }

  unproject(coord) {
    return this.projection.inverse(coord);
  }
}
