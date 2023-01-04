import logo from "./logo.svg";
import "./App.css";
import InputForm from "./components/InputForm";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    // Cause the components to re-render, so that list updates with new data
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Note-Taking-App</h1>
      <div>
        <InputForm handleAddNote={addNote}></InputForm>
      </div>
      <div>
        <NotesList notes={notes} handleDeleteNote={deleteNote}></NotesList>
      </div>
    </div>
  );
}

export default App;
