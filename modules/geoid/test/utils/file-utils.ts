import fs from 'fs';

export async function openFile(filePath: string): Promise<Uint8Array | null> {
  let data: Uint8Array | null = null;
  if (typeof fetch !== 'undefined') {
    const request = await fetch(filePath);
    data = new Uint8Array(await request.arrayBuffer());
  } else if (fs) {
    data = await fs.promises.readFile(filePath);
  }
  return data;
}
