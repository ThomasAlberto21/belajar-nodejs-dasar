import process from 'process';

process.addListener('exit', (exitCode) => {
  console.log(`Node JS exit code with ${exitCode}`);
});

console.info(`Node JS version: ${process.version}`);
console.info(`Node JS platform: ${process.platform}`);
console.info(`Node JS architecture: ${process.arch}`);
console.info(`Node JS title: ${process.title}`);
console.table(process.argv);
