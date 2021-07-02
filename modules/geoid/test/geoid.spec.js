import test from 'tape-promise/tape';
import {Geoid} from '@math.gl/geoid';
import {openFile} from './utils/file-utils';

const PGM_FILE_PATH = 'modules/geoid/test/data/egm84-30.pgm';

test('geoid - exports', (t) => {
  t.assert(Geoid, 'Geoid is defined');
  t.end();
});

test('geoid - get height model info', async (t) => {
  const data = await openFile(PGM_FILE_PATH);

  // If data is null - now ways to open the file
  if (data === null) {
    t.fail(`Can't open file: ${PGM_FILE_PATH}`);
    return;
  }

  const geoid = new Geoid({
    cubic: false,
    _width: 720,
    _height: 361,
    _rlonres: 2,
    _rlatres: 2,
    _offset: -108,
    _scale: 0.003,
    _swidth: 720,
    _datastart: 416,
    _maxerror: 1.546,
    _rmserror: 0.07,
    _description: 'WGS84 EGM84, 30-minute grid',
    _datetime: '2009-08-29 18:45:02',
    data
  });

  const center = [8.67694237417622, 50.109450651843204, 172.017822265625];
  t.equal(geoid.getHeight(center[1], center[0]), 48.093804428091886);
  t.end();
});

test('geoid - cubic approximation', async (t) => {
  const data = await openFile(PGM_FILE_PATH);

  // If data is null - now ways to open the file
  if (data === null) {
    t.fail(`Can't open file: ${PGM_FILE_PATH}`);
    return;
  }

  const geoid = new Geoid({
    cubic: true,
    _width: 720,
    _height: 361,
    _rlonres: 2,
    _rlatres: 2,
    _offset: -108,
    _scale: 0.003,
    _swidth: 720,
    _datastart: 416,
    _maxerror: 1.546,
    _rmserror: 0.07,
    _description: 'WGS84 EGM84, 30-minute grid',
    _datetime: '2009-08-29 18:45:02',
    data
  });

  const center = [8.67694237417622, 50.109450651843204, 172.017822265625];
  t.equal(geoid.getHeight(center[1], center[0]), 48.09178497292629);
  t.end();
});
