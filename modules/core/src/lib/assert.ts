export default function assert(condition: unknown, message?: string) {
  if (!condition) {
    throw new Error(`math.gl assertion ${message}`);
  }
}
