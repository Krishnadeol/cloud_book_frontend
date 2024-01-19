import React, { useState,useContext } from 'react'
import Notes from './Notes'
import noteContext from '../context/notes/noteContext'

function Addnote() {
  const context=useContext(noteContext);
  const {addNote}=context;

  const [note,setNote]=useState({title:"", desc:"",tag:""});

 const handleClick=(e)=>{
    e.preventDefault();  //for not letting the page to reload
    addNote(note.title,note.desc,note.tag);
}

const handleChange=(e)=>{
    e.preventDefault();  //for not letting the page to reload
 
setNote({...note,[e.target.name]:e.target.value})  // split operator 
}
    return (
    <div>
          <>
    <div className="container mx-30 my-70">
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
<Notes/>
</div>
    </>
    </div>
  )
}
export default Addnote
