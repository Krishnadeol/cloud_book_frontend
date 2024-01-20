import React, {useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function Notecard(props) {

  const context=useContext(noteContext);
  const {deleteNote}=context;
  const {note}=props;
  const {editNote}=context;

  return (
    <div>
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">

            <h5 className="card-title">{note.title}</h5>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-trash mx-2" onClick={()=>deleteNote(note._id)}></i>

              <i className="fa-solid fa-pen-to-square mx-2"  onClick={()=>editNote(note._id,"Krishna","Deol")}></i>
            </div>
          </div>
          <p className="card-text ml-2">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
