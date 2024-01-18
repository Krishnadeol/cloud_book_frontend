
function Notecard(props) {
  return (
    <div>
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.body}</p>
  </div>
</div>
    </div>
  )
}

export default Notecard
