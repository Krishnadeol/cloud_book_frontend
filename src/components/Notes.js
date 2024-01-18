
import React ,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notecard from './Notecard';
function Notes() {
    const notes= useContext(noteContext);
  return (
    <div className="row my-3">
   {notes.map((note)=>{
        return  <Notecard key={note.id} i={note}/>
   })}
    </div>
  )

  }
export default Notes
