import Note from '../models/Note.js';

export default async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error in geting all notes', error);
    res.status(500).json({ message: 'Internal Server Failed' });
  }
}

export async function getNoteById(req, res) {
  try {
    const idNote = await Note.findById(req.params.id);
    if (!idNote) return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(idNote);
  } catch (error) {
    console.error('Server Error in getNoteById controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    const note = await newNote.save();
    res.status(201).json(note);
  } catch (error) {
    console.error('Server Error in createNote controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    await updatedNote;
    if (!updateNote) return res.status(404).json({ message: 'Note not found' });

    res.status(200).json(updateNote);
  } catch (error) {
    console.error('Server Error in updateNote controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

// maked delete methode
export async function deleteNote(req, res) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note have been deleted Successfully!' });
  } catch (error) {
    console.error('Server Error in updateNote controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
