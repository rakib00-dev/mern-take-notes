import express from 'express';

const app = express();

// get endpoint
app.get('/api/notes', (req, res) => {
  res.status(200).send({ data: 'Have to walking to park' });
});

// post endpoint
app.post('/api/notes', (req, res) => {
  res.status(201).json({ message: 'Note created Successfully!' });
});

// put endpoint
app.put('/api/notes', (req, res) => {
  res.status(200).json({ message: 'Note updated Successfully!' });
});

// delete endpoint
app.put('/api/notes', (req, res) => {
  res.status(200).json({ message: 'Note deleted Successfully!' });
});

app.listen(5001, () => {
  console.log('Server is running');
});
