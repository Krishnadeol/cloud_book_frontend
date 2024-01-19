import React from 'react';

export default function Notecard(props) {
  return (
    <div>
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">

            <h5 className="card-title">{props.i.title}</h5>
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-trash mx-2"></i>
              <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
          </div>
          <p className="card-text ml-2">{props.i.body}</p>
        </div>
      </div>
    </div>
  );
}
