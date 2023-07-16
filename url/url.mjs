import { URL } from 'url';

const data = new URL(
  'https://nodejs.org/dist/latest-v16.x/docs/api/timers.html#immediateref'
);

console.log(data.toString());
console.log(data.protocol);
console.log(data.host);
console.log(data.hostname);
console.log(data.searchParams);
console.log(data.pathname);
