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

  return (
    <noteContext.Provider value={{ notes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
