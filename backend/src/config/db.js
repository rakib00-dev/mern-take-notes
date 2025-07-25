import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('mongoose connected successfully');
  } catch (error) {
    console.error('Error happend to connect DB', error);
    process.exit(1); // exit with failer
  }
};
