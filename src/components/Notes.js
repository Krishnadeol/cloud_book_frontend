import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Notecard from './Notecard';

function Notes() {
  const { notes } = useContext(noteContext);

  return (
    <div className="row my-3">
      <h1>My Notes  </h1>
      {notes.map((note) => (
        // Check if note is not null or undefined before rendering Notecard
        note && <Notecard key={note.id} i={note} />
      ))}
    </div>
  );
}

export default Notes;
