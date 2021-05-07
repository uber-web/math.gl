export function toNested(flatData) {
  const nestedData = [];
  for (let i = 0; i < flatData.length; i += 2) {
    nestedData.push([flatData[i], flatData[i + 1]]);
  }
  return nestedData;
}
