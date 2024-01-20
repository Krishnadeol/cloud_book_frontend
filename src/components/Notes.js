import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
import Notecard from './Notecard';

function Notes() {
  const { notes,getNote } = useContext(noteContext);
  useEffect(()=>{
  getNote();
  },[])

  return (
    <div className="row my-3">
      <h1>My Notes  </h1>
      {notes.map((note) => (
        // Check if note is not null or undefined before rendering Notecard
        note && <Notecard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
