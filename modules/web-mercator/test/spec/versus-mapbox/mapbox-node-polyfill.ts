import MockBrowser from 'mock-browser';

function noop() {}

if (typeof window === 'undefined') {
  // Node
  const win = MockBrowser.mocks.MockBrowser.createWindow();
  // back fill with mock objects
  global.window = win;
  global.self = win;
  // @ts-expect-error
  global.Blob = noop;
  win.URL.createObjectURL = noop;
}
