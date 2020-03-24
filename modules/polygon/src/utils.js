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
      return;
    }
  }

  copy(target, source, startIndex);
}

export function copy(target, source, startIndex = 0) {
  const size = source.length;
  for (let i = 0; i < size; i++) {
    target[startIndex + i] = source[i];
  }
}

export function getPointAtIndex(positions, index, size, offset, out = []) {
  const startI = offset + index * size;
  for (let i = 0; i < size; i++) {
    out[i] = positions[startI + i];
  }
  return out;
}
