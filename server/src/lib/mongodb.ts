import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env';

if (!DB_URI) {
  throw new Error(
    'Define MONGODB_URI environment variable inside .env.<development/production>.local'
  );
}
const uri: string = DB_URI;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`DATABASE CONNECTED ON "${NODE_ENV}" MODE`);
  } catch (error) {
    console.log('Error connecting to database', error);
    process.exit(1);
  }
};
