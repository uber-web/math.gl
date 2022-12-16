export function toNested(flatData, options = {addZ: false}) {
  const nestedData = [];
  for (let i = 0; i < flatData.length; i += 2) {
    const item = [flatData[i], flatData[i + 1]];
    if (options.addZ) {
      item.push(0);
    }
    nestedData.push(item);
  }
  return nestedData;
}
