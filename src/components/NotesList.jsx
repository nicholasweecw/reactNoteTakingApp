import Note from "./Note";

function NotesList({ notes, handleDeleteNote }) {
  return (
    <div>
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
}

export default NotesList;
