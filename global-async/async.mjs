// * No errors

function samplePromise() {
  return Promise.resolve('Name : Thomas Alberto');
}

const name = await samplePromise();
console.info(name);
