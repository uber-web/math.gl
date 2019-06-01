import coreBench from '../modules/core/test/bench';

export default function addBenchmarks(suite, addReferenceBenchmarks) {
  coreBench(suite, addReferenceBenchmarks);
  return suite;
}
