import React, { useContext, useEffect,useState,useRef } from 'react';
import noteContext from '../context/notes/noteContext';
import Notecard from './Notecard';

function Notes() {
  const { notes,getNote,editNote } = useContext(noteContext);

  useEffect(()=>{
  getNote();
  },[])
  const ref=useRef(null);
  const [note,setNote]=useState({title:"", desc:"",tag:""});

 const handleClick=(e)=>{
    e.preventDefault();  //for not letting the page to reload
    editNote(note.title,note.desc,note.tag);
}

const handleChange=(e)=>{
    e.preventDefault();  //for not letting the page to reload
 
setNote({...note,[e.target.name]:e.target.value})  // split operator 
}

const showModal=()=>{
  ref.current.click();
}

  return (
    
    
<>
<button type="button" className="btn btn-primary" ref={ref} data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
     <form>
  <div className="m-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" onChange={handleChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Note</label>
    <input style={{height: '100px' }} className="form-control" name="desc" id="desc"  onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


    <div className="row my-3">
      <h1>My Notes  </h1>
    <div className="container">
      {notes.length===0 && "No notes to display"}
    </div>
      {notes.map((note) => (
        // Check if note is not null or undefined before rendering Notecard
        note && <Notecard key={note.id} note={note} />
      ))}
    </div>

    </>
  );
}

export default Notes;
