import React  from 'react'
import Notes from './Notes'

export default function Home() {
  return (
    <>
    <div className="container mx-30 mt-20">
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
<Notes/>
</div>
    </>
  )
}
