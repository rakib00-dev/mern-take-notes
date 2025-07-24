export default function getAllNotes(req, res) {
  res
    .status(200)
    .send(
      '<h1>You just fetched the notes also the controllers worked exectly fine<h1>'
    );
}

export function createNote(req, res) {
  res.status(201).json({ message: 'Note created Successfully!' });
}

export function updateNote(req, res) {
  res.status(200).json({ message: 'Note updated Successfully!' });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: 'Note deleted Successfully!' });
}
