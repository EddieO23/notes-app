import Note from './Note';

function NotesList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>No notes yet. Add one!</p>;
  }

  return (
    <div className='space-y-4'>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

export default NotesList;
