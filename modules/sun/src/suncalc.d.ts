type CelestialPosition = {
  azimuth: number;
  altitude: number;
};

// https://www.aa.quae.nl/en/reken/zonpositie.html
// The altitude is 0° at the horizon, +90° in the zenith (straight over your head), and −90° in the nadir (straight down).
// The azimuth is the direction along the horizon, which we measure from south to west.
// South has azimuth 0°, west +90°, north +180°, and east +270° (or −90°, that's the same thing).
export function getSunPosition(
  timestamp: number | Date,
  latitude: number,
  longitude: number
): CelestialPosition;

export function getSunDirection(
  timestamp: number | Date,
  latitude: number,
  longitude: number
): number[];
