import cluster from 'cluster';
import os from 'os';
import dotenv from 'dotenv';
import app from './app';
import { logger } from './middlewares';

dotenv.config();

const PORT = process.env.PORT || 3000;

const numCPUs = os.cpus().length;
const desiredWorkers = Math.ceil(numCPUs / 2);

if (cluster.isPrimary) {
  logger.info(`Master ${process.pid} is running`);

  for (let i = 0; i < desiredWorkers; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    logger.warn(`Worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, () => {
    logger.info(`Worker ${process.pid} started`);
  });
}
