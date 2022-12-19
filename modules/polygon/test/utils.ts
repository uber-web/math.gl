// math.gl, MIT license
import {NumericArray} from '@math.gl/types';

export function toNested(flatData: NumericArray, options?: {addZ?: boolean}): number[][] {
  const nestedData = [];
  for (let i = 0; i < flatData.length; i += 2) {
    const item = [flatData[i], flatData[i + 1]];
    if (options?.addZ) {
      item.push(0);
    }
    nestedData.push(item);
  }
  return nestedData;
}
