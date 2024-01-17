import noteContext from "./noteContext"
import { useState } from "react";
const NoteState=(props)=>{
const[note,setNote]=useState("This is a good note");
return (
    <noteContext.Provider value={{note,setNote}}>
        {props.children}
    </noteContext.Provider>
)
}

export default NoteState;