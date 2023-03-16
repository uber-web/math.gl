export default [
  {
    tokenOrKey: '0/',
    expectKey: '0/',
    expectChildKey: '0/{index}',
    expectCenter: {lng: 0, lat: 0},
    expectRegion: {west: -45, east: 45, north: 45, south: -45},
    expectOBB: [
      [-45, 45, 0],
      [45, 45, 0],
      [45, -45, 0],
      [-45, -45, 0],
      [-45, 45, 0],
      [45, 45, 0],
      [45, -45, 0],
      [-45, -45, 0]
    ],
    expectS2Cell: {face: 0, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '1/',
    expectKey: '1/',
    expectChildKey: '1/{index}',
    expectCenter: {lng: 90, lat: 0},
    expectRegion: {west: 45, east: 135, north: 45, south: -45},
    expectOBB: [
      [45, 45, 0],
      [135, 45, 0],
      [135, -45, 0],
      [45, -45, 0],
      [45, 45, 0],
      [135, 45, 0],
      [135, -45, 0],
      [45, -45, 0]
    ],
    expectS2Cell: {face: 1, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '2/',
    expectKey: '2/',
    expectChildKey: '2/{index}',
    expectCenter: {lng: -180, lat: 90},
    expectRegion: {west: -180, east: 180, north: 90, south: 35.26}, // TODO: Is it OK ?
    expectOBB: [
      [-180, 90, 0],
      [180, 90, 0],
      [180, 35.26, 0],
      [-180, 35.26, 0],
      [-180, 90, 0],
      [180, 90, 0],
      [180, 35.26, 0],
      [-180, 35.26, 0]
    ],
    expectS2Cell: {face: 2, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '3/',
    expectKey: '3/',
    expectChildKey: '3/{index}',
    expectCenter: {lng: -180, lat: 0},
    expectRegion: {west: 135, east: 225, north: 45, south: -45},
    expectOBB: [
      [135, 45, 0],
      [225, 45, 0],
      [225, -45, 0],
      [135, -45, 0],
      [135, 45, 0],
      [225, 45, 0],
      [225, -45, 0],
      [135, -45, 0]
    ],
    expectS2Cell: {face: 3, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '4/',
    expectKey: '4/',
    expectChildKey: '4/{index}',
    expectCenter: {lng: -90, lat: 0},
    expectRegion: {west: -135, east: -45, north: 45, south: -45},
    expectOBB: [
      [-135, 45, 0],
      [-45, 45, 0],
      [-45, -45, 0],
      [-135, -45, 0],
      [-135, 45, 0],
      [-45, 45, 0],
      [-45, -45, 0],
      [-135, -45, 0]
    ],
    expectS2Cell: {face: 4, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '5/',
    expectKey: '5/',
    expectChildKey: '5/{index}',
    expectCenter: {lng: 0, lat: -90},
    expectRegion: {west: -180, east: 180, north: -35.26, south: -90}, // TODO: Is it OK ?
    expectOBB: [
      [-180, -35.26, 0],
      [180, -35.26, 0],
      [180, -90, 0],
      [-180, -90, 0],
      [-180, -35.26, 0],
      [180, -35.26, 0],
      [180, -90, 0],
      [-180, -90, 0]
    ],
    expectS2Cell: {face: 5, ij: [0, 0], level: 0}
  },
  {
    tokenOrKey: '80858004',
    expectKey: '4/0010023000000',
    expectChildKey: '4/0010023000000{index}',
    expectCenter: {lng: -122.36, lat: 37.79},
    expectS2Cell: {face: 4, ij: [255, 1215], level: 13}
  },
  {
    tokenOrKey: '1c',
    expectKey: '0/3',
    expectChildKey: '0/3{index}',
    expectS2Cell: {face: 0, ij: [1, 0], level: 1}
  },
  {
    tokenOrKey: '2c',
    expectKey: '1/1',
    expectChildKey: '1/1{index}',
    expectS2Cell: {face: 1, ij: [1, 0], level: 1}
  },
  {
    tokenOrKey: '2/0',
    expectKey: '2/0',
    expectChildKey: '2/0{index}',
    expectS2Cell: {face: 2, ij: [0, 0], level: 1}
  },
  {
    tokenOrKey: '1/3',
    expectKey: '1/3',
    expectChildKey: '1/3{index}',
    expectS2Cell: {face: 1, ij: [0, 1], level: 1}
  },
  {
    tokenOrKey: '2/3',
    expectKey: '2/3',
    expectChildKey: '2/3{index}',
    expectS2Cell: {face: 2, ij: [1, 0], level: 1}
  },
  {
    tokenOrKey: '5b',
    expectKey: '2/31',
    expectChildKey: '2/31{index}',
    expectS2Cell: {face: 2, ij: [2, 1], level: 2}
  },
  {
    tokenOrKey: '6b',
    expectKey: '3/11',
    expectChildKey: '3/11{index}',
    expectS2Cell: {face: 3, ij: [3, 0], level: 2}
  },
  {
    tokenOrKey: 'ab',
    expectKey: '5/11',
    expectChildKey: '5/11{index}',
    expectS2Cell: {face: 5, ij: [3, 0], level: 2}
  },
  {
    tokenOrKey: '4/001003',
    expectKey: '4/001003',
    expectChildKey: '4/001003{index}',
    expectS2Cell: {face: 4, ij: [1, 8], level: 6}
  },
  {
    tokenOrKey: '54',
    expectKey: '2/2',
    expectChildKey: '2/2{index}',
    expectS2Cell: {face: 2, ij: [1, 1], level: 1}
  },
  {
    tokenOrKey: '5c',
    expectKey: '2/3',
    expectChildKey: '2/3{index}',
    expectS2Cell: {face: 2, ij: [1, 0], level: 1}
  }
];
