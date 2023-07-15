const buffer = Buffer.from('Thomas Alberto', 'utf8');
console.log(buffer.toString('base64'));
console.log(buffer.toString('hex'));


const buffer2= Buffer.from('VGhvbWFzIEFsYmVydG8=', 'base64');
console.log(buffer2.toString('utf8'));