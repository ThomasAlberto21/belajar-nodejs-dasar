import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib/zlib-compress.mjs');
const result = zlib.gzipSync(source);

fs.writeFileSync('zlib-compress.mjs.txt', result);
