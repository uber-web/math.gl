import {getSolarPosition} from '../src/suncalc';
import test from 'tape-catch';

function near(val1, val2, margin) {
  return Math.abs(val1 - val2) < (margin || 1e-15);
}

const date = new Date('2013-03-05UTC');
const lat = 50.5;
const lng = 30.5;

test('getPosition returns azimuth and altitude for the given time and location', t => {
  const sunPos = getSolarPosition(date, lat, lng);

  t.ok(near(sunPos.azimuth, -2.5003175907168385), 'azimuth');
  t.ok(near(sunPos.altitude, -0.7000406838781611), 'altitude');
  t.end();
});
