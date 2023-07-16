import net from 'net';

// ! Create Client
const client = net.createConnection({ port: 3000, host: 'localhost' });

client.addListener('data', (data) => {
  console.log(`Received data from server : ${data.toString()}`);
});

setInterval(() => {
  client.write('Thomas\r\n');
}, 2000);
