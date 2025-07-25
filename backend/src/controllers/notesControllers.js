import Note from '../models/Note.js';

export default async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in geting all notes', error);
    res.status(500).json({ message: 'Internal Server Failed' });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({ message: 'notes created successfuly' });
  } catch (error) {
    console.error('Server Error in createNote controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateNote(req, res) {
  res.status(200).json({ message: 'Note updated Successfully!' });
}
export async function deleteNote(req, res) {
  res.status(200).json({ message: 'Note deleted Successfully!' });
}
