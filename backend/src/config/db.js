import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('mongoose connected successfully');
  } catch (error) {
    console.error('Error happend to connect DB', error);
    process.exit(1); // exit with failer
  }
};
