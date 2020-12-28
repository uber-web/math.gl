/* global fetch  */
import {promises as fs} from 'fs';

export async function openFile(filePath) {
  let data = null;
  if (typeof fetch !== 'undefined') {
    const request = await fetch(filePath);
    data = new Uint8Array(await request.arrayBuffer());
  } else if (fs) {
    data = await fs.readFile(filePath);
  }
  return data;
}
