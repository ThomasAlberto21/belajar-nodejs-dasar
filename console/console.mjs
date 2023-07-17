import { Console } from 'console';
import fs from 'fs';

const file = fs.createWriteStream('./data.log');

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info('Hello World from Node.js');
log.error('Error from Node.js');
log.warn('Warning from Node.js');

const person = {
  firstName: 'Thomas',
  lastName: 'Alberto',
};

log.table(person);
