import util from 'util';

const name = 'Thomas Alberto';

console.log(util.format('Hello %s', name));
console.log(`Hello ${name}`);

const person = {
  firstName: 'Thomas',
  lastName: 'Alberto',
};

console.log(util.format('Person : %j', person));
console.log('Person : ', JSON.stringify(person));
