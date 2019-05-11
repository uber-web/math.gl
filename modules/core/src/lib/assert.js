export default function assert(x, m) {
  if (!x) {
    throw new Error(m);
  }
}
