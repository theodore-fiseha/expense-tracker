import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = Number(process.env.PORT) || 5500;
app.listen(PORT, () => {
  console.log(`🚀 API on http://localhost:${PORT}`);
});
