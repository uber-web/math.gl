const DEGREES_TO_RADIANS = Math.PI / 180;

const DAY_IN_MS = 1000 * 60 * 60 * 24;
const JD1970 = 2440588; // Julian Day year 1970
const JD2000 = 2451545; // Julian Day year 2000

// This angle ε [epsilon] is called the obliquity of the ecliptic and its value at the beginning of 2000 was 23.4397°
const e = DEGREES_TO_RADIANS * 23.4397; // obliquity of the Earth

// Refer https://www.aa.quae.nl/en/reken/zonpositie.html
// "The Mean Anomaly" section for explanation
const M0 = 357.5291; // Earth mean anomaly on start day
const M1 = 0.98560028; // Earth angle traverses on average per day seen from the sun

const THETA0 = 280.147; // The sidereal time (in degrees) at longitude 0° at the instant defined by JD2000
const THETA1 = 360.9856235; // The rate of change of the sidereal time, in degrees per day.

/**
 * A position in the sky defined by two angles
 * The altitude is 0° at the horizon, +90° in the zenith (straight over your head), and −90° in the nadir (straight down).
 * The azimuth is the direction along the horizon, which we measure from south to west.
 * South has azimuth 0°, west +90°, north +180°, and east +270° (or −90°, that's the same thing).
 */
export type CelestialPosition = {
  azimuth: number;
  altitude: number;
};

/**
 * Calculate sun position
 * based on https://www.aa.quae.nl/en/reken/zonpositie.html
 * inspired by https://github.com/mourner/suncalc/blob/master/suncalc.js
 */
export function getSunPosition(
  timestamp: number | Date,
  latitude: number,
  longitude: number
): CelestialPosition {
  const longitudeWestInRadians = DEGREES_TO_RADIANS * -longitude;
  const phi = DEGREES_TO_RADIANS * latitude;
  const d = toDays(timestamp);

  const c = getSunCoords(d);
  // hour angle
  const H = getSiderealTime(d, longitudeWestInRadians) - c.rightAscension;

  return {
    azimuth: getAzimuth(H, phi, c.declination),
    altitude: getAltitude(H, phi, c.declination)
  };
}

export function getSunDirection(
  timestamp: number | Date,
  latitude: number,
  longitude: number
): number[] {
  const {azimuth, altitude} = getSunPosition(timestamp, latitude, longitude);

  // solar position to light direction
  return [
    Math.sin(azimuth) * Math.cos(altitude),
    Math.cos(azimuth) * Math.cos(altitude),
    -Math.sin(altitude)
  ];
}

function toJulianDay(timestamp: number | Date): number {
  const ts = typeof timestamp === 'number' ? timestamp : timestamp.getTime();
  return ts / DAY_IN_MS - 0.5 + JD1970;
}

function toDays(timestamp: number | Date): number {
  return toJulianDay(timestamp) - JD2000;
}

function getRightAscension(eclipticLongitude: number, b: number): number {
  const lambda = eclipticLongitude;
  return Math.atan2(Math.sin(lambda) * Math.cos(e) - Math.tan(b) * Math.sin(e), Math.cos(lambda));
}

function getDeclination(eclipticLongitude: number, b: number): number {
  const lambda = eclipticLongitude;
  return Math.asin(Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(lambda));
}

function getAzimuth(hourAngle: number, latitudeInRadians: number, declination: number): number {
  const H = hourAngle;
  const phi = latitudeInRadians;
  const delta = declination;
  return Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(delta) * Math.cos(phi));
}

function getAltitude(hourAngle: number, latitudeInRadians: number, declination: number): number {
  const H = hourAngle;
  const phi = latitudeInRadians;
  const delta = declination;
  return Math.asin(Math.sin(phi) * Math.sin(delta) + Math.cos(phi) * Math.cos(delta) * Math.cos(H));
}

// https://www.aa.quae.nl/en/reken/zonpositie.html
// "The Observer section"
function getSiderealTime(dates: number, longitudeWestInRadians: number): number {
  return DEGREES_TO_RADIANS * (THETA0 + THETA1 * dates) - longitudeWestInRadians;
}

function getSolarMeanAnomaly(days: number): number {
  return DEGREES_TO_RADIANS * (M0 + M1 * days);
}

function getEclipticLongitude(meanAnomaly: number): number {
  const M = meanAnomaly;
  // equation of center
  const C =
    DEGREES_TO_RADIANS * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  // perihelion of the Earth
  const P = DEGREES_TO_RADIANS * 102.9372;

  return M + C + P + Math.PI;
}

function getSunCoords(dates: number): {
  declination: number;
  rightAscension: number;
} {
  const M = getSolarMeanAnomaly(dates);
  const L = getEclipticLongitude(M);

  return {
    declination: getDeclination(L, 0),
    rightAscension: getRightAscension(L, 0)
  };
}
