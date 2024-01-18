import React from 'react';

export default function Notecard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.i.title}</h5>
          <p className="card-text">{props.i.body}</p>
        </div>
      </div>
    </div>
  );
}
