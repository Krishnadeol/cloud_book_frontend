import noteContext from "./noteContext"
import { useState } from "react";
const NoteState=(props)=>{
    const Notes=[{
        id:1212221,
        title:"1st note",
        body:"this just a note"
    },
    {
        id:1212223,
        title:"1st note",
        body:"this just a note"
    },{
        id:1212222,
        title:"1st note",
        body:"this just a note"
    }
]
const[notes,setNote]=useState(Notes);
return (
    <noteContext.Provider value={{notes}}>
        {props.children}
    </noteContext.Provider>
)
}

export default NoteState;