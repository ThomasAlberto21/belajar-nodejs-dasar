import readline from 'readline';
import process from 'process';

// ! Promise
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

async function main() {
  const name = await question('Siapa Nama Anda? :');
  console.log(`Halo ${name}`);
  rl.close();
}

main();
