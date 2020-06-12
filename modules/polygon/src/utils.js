export function push(target, source) {
  const size = source.length;
  const startIndex = target.length;

  // dedupe, if source is the same point as the last vertex
  if (startIndex > 0) {
    let isDuplicate = true;
    for (let i = 0; i < size; i++) {
      if (target[startIndex - size + i] !== source[i]) {
        isDuplicate = false;
        break;
      }
    }
    if (isDuplicate) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) {
    target[startIndex + i] = source[i];
  }
  return true;
}

export function copy(target, source) {
  const size = source.length;
  for (let i = 0; i < size; i++) {
    target[i] = source[i];
  }
}

export function getPointAtIndex(positions, index, size, offset, out = []) {
  const startI = offset + index * size;
  for (let i = 0; i < size; i++) {
    out[i] = positions[startI + i];
  }
  return out;
}
