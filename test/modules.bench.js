import coreBench from '../modules/core/test/bench';
import geospatialBench from '../modules/geospatial/test/bench';
import cullingBench from '../modules/culling/test/bench';
import polygonBench from '../modules/polygon/test/bench';

export default function addBenchmarks(suite, addReferenceBenchmarks) {
  coreBench(suite, addReferenceBenchmarks);
  geospatialBench(suite, addReferenceBenchmarks);
  cullingBench(suite, addReferenceBenchmarks);
  polygonBench(suite, addReferenceBenchmarks);

  return suite;
}
