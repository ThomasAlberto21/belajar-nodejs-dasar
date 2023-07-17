import os from 'os';
import http from 'http';
import process from 'process';
import cluster from 'cluster';

if (cluster.isPrimary) {
  console.log(`Primary : ${process.pid}`);
  for (let i = 1; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener('exit', (worker) => {
    console.log(`Worker ${worker.id} is exited`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  console.log(`Worker : ${process.pid}`);

  const server = http.createServer((req, res) => {
    res.write(`Response from process ${process.pid}`);
    res.end();
    process.exit();
  });

  server.listen(3000);
  console.log(`Start cluster worker ${process.pid}`);
}
