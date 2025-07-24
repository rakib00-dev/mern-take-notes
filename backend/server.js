import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.send({ data: 'Have to walking to park' });
});

app.listen(5001, () => {
  console.log('Server is running');
});
