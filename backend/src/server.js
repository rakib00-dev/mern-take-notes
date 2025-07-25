import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

const app = express();

connectDB();

app.use('/api/notes', notesRoutes);

app.listen(5001, () => {
  console.log('Server is running');
});

//mongodb+srv://rakib00dev:8rhXaSADH7FBgzbn@cluster0.vrnokce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
