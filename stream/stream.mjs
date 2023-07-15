import fs from 'fs';

const writer = fs.createWriteStream('file.txt');
writer.write('Thomas\n');
writer.write('Alberto\n');
writer.end();

const reader = fs.createReadStream('file.txt');
reader.addListener('data', (data) => {
  console.info(data.toString());
  reader.close();
});
