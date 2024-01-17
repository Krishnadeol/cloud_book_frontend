
import React ,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
export default function Home() {
  const a= useContext(noteContext);
  return (
    <>
    <div className="container mx-30">
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Tag</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Please enter a title.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Note</label>
    <input style={{height: '100px' }} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Save</button>
</form>
<h1>{a.note}</h1>
</div>
    </>
  )
}
