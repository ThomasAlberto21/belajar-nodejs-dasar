import dns from 'dns'; // Standard
// import dns from 'dns/promises'; // Promises

// Standard
function callback(err, data) {
  console.log(data);
}

dns.lookup('google.com', callback);

// // Promises
// const data = await dns.lookup('google.com');
// console.log(data);
