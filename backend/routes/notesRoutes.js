import express from 'express';

const router = express.Router();

router.get('/', (res, req) => {
  res.status(200).send({ data: 'Have to walking to park' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Note created Successfully!' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'Note updated Successfully!' });
});
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: 'Note deleted Successfully!' });
});

export default router;
