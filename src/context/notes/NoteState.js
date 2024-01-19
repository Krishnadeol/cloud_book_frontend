import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const Notes = [
    {
      id: 1212221,
      title: "First note",
      body: "This is just a note",
    },
    {
      id: 1212222,
      title: "Second note",
      body: "This is just another note",
    },
    {
      id: 1212223,
      title: "Third note",
      body: "This is yet another note",
    },
  ];

  const [notes, setNote] = useState(Notes);
  

  const addNote=(title,desc,tag)=>{
    let note=null;
      note= {
        id: 233,
        title: title,
        body: desc,
      };
    setNote(notes.concat(note));
  }

  const deleteNote=(id)=>{
    let newNotes=null;
    newNotes=notes.filter((note)=>{return(note.id!==id)});
    setNote(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes,addNote,deleteNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
