import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const boosstrap = async () => {
  await initMongoConnection();
  setupServer();
};

boosstrap();