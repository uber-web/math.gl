// CLASS INHERITANCE
//
// This class identifies

const IDENTITY = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1];

class ClassNoConstructor {}
class ClassWithConstructor {
  constructor() {
    this.data = null;
  }
}
class ArrayExtenderNoConstructor extends Array {}
class ArrayExtenderEmptyConstructor extends Array {
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

function classInheritanceBench(suite) {
  return suite
    .group('Class/Array inheritance construction cost')
    .add('new ArrayExtender', () => new ArrayExtender())
    .add('new ArrayExtenderEmptyConstructor', () => new ArrayExtenderEmptyConstructor())
    .add('new ArrayExtenderNoConstructor', () => new ArrayExtenderNoConstructor())
    .add('new ClassWithConstructor', () => new ClassWithConstructor())
    .add('new ClassNoConstructor', () => new ClassNoConstructor());
}

// DEFAULT PARAMETERS

class XYZVector {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class XYZVectorLogicalOr {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
}

class XYZVectorBitwiseOr {
  constructor(x, y, z) {
    this.x = x | 0;
    this.y = y | 0;
    this.z = z | 0;
  }
}

function defaultParameterBench(suite) {
  return suite
    .group('Default parameter cost')
    .add('new XYZVector#default params', () => new XYZVector())
    .add('new XYZVector#logical or', () => new XYZVectorLogicalOr())
    .add('new XYZVector#bitwise or', () => new XYZVectorBitwiseOr());
}

// COMBINED BENCH

export default function javascriptBench(suite) {
  classInheritanceBench(suite);
  defaultParameterBench(suite);
  return suite;
}
