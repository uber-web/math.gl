// CLASS INHERITANCE
//
// This class identifies

const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

class ClassNoConstructor {}
class ClassWithConstructor {
  data: any;

  constructor() {
    this.data = null;
  }
}
class ClassWithConstructorXYZ {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor() {
    this.x = -0;
    this.y = -0;
    this.z = -0;
    this.w = -0;
  }
}
class ClassWithConstructor04 {
  constructor() {
    this[0] = -0;
    this[1] = -0;
    this[2] = -0;
    this[3] = -0;
  }
}

class ArrayExtenderNoConstructor extends Array {}
class ArrayExtenderEmptyConstructor extends Array {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}
class ArrayExtender extends Array {
  constructor() {
    super(16);
    for (let i = 0; i < 16; i++) {
      this[i] = IDENTITY[i];
    }
  }
}

// DEFAULT PARAMETERS

class XYZVector {
  x: number;
  y: number;
  z: number;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class XYZVectorLogicalOr {
  x: number;
  y: number;
  z: number;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
}

class XYZVectorBitwiseOr {
  x: number;
  y: number;
  z: number;

  constructor(x?: number, y?: number, z?: number) {
    this.x = x | 0;
    this.y = y | 0;
    this.z = z | 0;
  }
}

// COMBINED BENCH

export function javascriptBench(suite, addReferenceBenchmarks) {
  if (addReferenceBenchmarks) {
    suite
      .group('Class/Array inheritance construction cost')
      .add('new Array', () => new Array()) // eslint-disable-line
      .add('new ArrayExtender', () => new ArrayExtender())
      .add('new ArrayExtenderNoConstructor', () => new ArrayExtenderNoConstructor())
      .add('new ArrayExtenderEmptyConstructor', () => new ArrayExtenderEmptyConstructor())
      .add('new ClassNoConstructor', () => new ClassNoConstructor())
      .add('new ClassWithConstructor', () => new ClassWithConstructor())
      .add('new ClassWithConstructorXYZ', () => new ClassWithConstructorXYZ())
      .add('new ClassWithConstructor0-4', () => new ClassWithConstructor04());

    suite
      .group('Default parameter cost')
      .add('new XYZVector#default params', () => new XYZVector())
      .add('new XYZVector#logical or', () => new XYZVectorLogicalOr())
      .add('new XYZVector#bitwise or', () => new XYZVectorBitwiseOr());
  }

  return suite;
}
