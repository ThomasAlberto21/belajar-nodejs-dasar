// ! Error: await is only valid in async function

function samplePromise() {
  return Promise.resolve('Name : Thomas Alberto');
}

const name = await samplePromise();
console.info(name);
