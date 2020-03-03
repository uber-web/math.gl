// @ts-nocheck
/* global global, window */
let mapbox;

function noop() {}

if (typeof window === 'undefined') {
  // Node
  const win = require('mock-browser').mocks.MockBrowser.createWindow();
  // back fill with mock objects
  global.window = win;
  global.self = win;
  global.Blob = noop;
  win.URL.createObjectURL = noop;

  mapbox = require.call(global, 'mapbox-gl/dist/mapbox-gl.js');
} else {
  mapbox = require('mapbox-gl/dist/mapbox-gl.js');
}

module.exports = mapbox;
