export default function assert(condition: unknown, message?: string): void {
  if (!condition) {
    throw new Error(`math.gl assertion ${message}`);
  }
}
