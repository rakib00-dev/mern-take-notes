import express from 'express';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

app.use('/api/notes', notesRoutes);

app.get('/api/notes', (req, res) => {});

app.post('/api/notes', (req, res) => {});

app.put('/api/notes/:id', (req, res) => {});

app.put('/api/notes/:id', (req, res) => {});

app.listen(5001, () => {
  console.log('Server is running');
});
