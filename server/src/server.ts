import { PORT } from './config/env';
import { connectToDatabase } from './lib/mongodb';
import app from './app';

const startServer = async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 API running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ ERR_SERVER: Unable to start server!', error);
    process.exit(1);
  }
};

startServer();
