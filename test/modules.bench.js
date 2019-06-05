import coreBench from '../modules/core/test/bench';
import geospatialBench from '../modules/geospatial/test/bench';

export default function addBenchmarks(suite, addReferenceBenchmarks) {
  coreBench(suite, addReferenceBenchmarks);
  geospatialBench(suite, addReferenceBenchmarks);
  return suite;
}
