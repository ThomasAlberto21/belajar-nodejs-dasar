import fs from 'fs/promises';

const buffer = await fs.readFile('file-system/file-system.mjs');
console.info(buffer.toString());

fs.writeFile('temp.txt', 'Hello World!');
fs.appendFile('temp.txt', 'Hello World 2!');
fs.copyFile('temp.txt', 'temp2.txt');
fs.appendFile('temp2.txt', 'Hello World 3!');
