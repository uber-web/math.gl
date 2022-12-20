// math.gl, MIT license

// @ts-expect-error tsconfig configuration issue?
import type {Bench} from '@probe.gl/bench';

import coreBench from '../../modules/core/test/bench';
import geospatialBench from '../../modules/geospatial/test/bench';
import cullingBench from '../../modules/culling/test/bench';
import polygonBench from '../../modules/polygon/test/bench';

export default function addBenchmarks(suite: Bench, addReferenceBenchmarks: boolean): Bench {
  coreBench(suite, addReferenceBenchmarks);
  geospatialBench(suite, addReferenceBenchmarks);
  cullingBench(suite, addReferenceBenchmarks);
  polygonBench(suite, addReferenceBenchmarks);

  return suite;
}
