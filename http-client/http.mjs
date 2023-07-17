import https from 'https';

const endpoint = 'https://enlpuanmzwjbr.x.pipedream.net';
const request = https.request(
  endpoint,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  (response) => {
    response.addListener('data', (data) => {
      console.log(`Received Data ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: 'Thomas',
  lastName: 'Alberto',
});

request.write(body);
request.end();
