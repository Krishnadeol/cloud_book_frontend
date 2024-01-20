import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host="http://localhost:5000";

  const Notes = [];

  const [notes, setNote] = useState(Notes);
  
  const getNote=async ()=>{
    const url=`${host}/notes/fetchAll`
    const response= await fetch(url,{
     method:'GET',
         headers:{
         'Content-Type':'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjI1ZDJmMTE2MTIxMjA1Mzc4ZWY0In0sImlhdCI6MTcwNTEyNTMzMH0.hJuVF6eoj0hL0rmhb4pXLBuFAjhfpmO7CX1ofXPkJzs'
        },
     })
     const json=await response.json()
     console.log(json)
     setNote(json);
  }
  const addNote=(title,desc,tag)=>{
    let note=null;
      note= {
        _id: 233,
        title: title,
        description: desc,
      };
    setNote(notes.concat(note));
  }

  const deleteNote=async (id)=>{
    const url=`${host}/notes/delete/${id}`
   
    const response= await fetch(url,{
        method:'DELETE',
            headers:{
            'Content-Type':'application/json',
            'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjI1ZDJmMTE2MTIxMjA1Mzc4ZWY0In0sImlhdCI6MTcwNTEyNTMzMH0.hJuVF6eoj0hL0rmhb4pXLBuFAjhfpmO7CX1ofXPkJzs'
           },
        })
        const json=await response.json()
        console.log(json)
       
    let newNotes=null;
    newNotes=notes.filter((note)=>{return(note._id!==id)});
    setNote(newNotes);
  }
                                                             //
  const editNote = async (id, title, description) => {
   const url=`${host}/notes/update/${id}`
   console.log(id);
   const response= await fetch(url,{
    method:'PUT',
        headers:{
        'Content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhMjI1ZDJmMTE2MTIxMjA1Mzc4ZWY0In0sImlhdCI6MTcwNTEyNTMzMH0.hJuVF6eoj0hL0rmhb4pXLBuFAjhfpmO7CX1ofXPkJzs'
        },
        body: JSON.stringify({id,title,description})
    })

   
   // for desplaying in client side
    setNote((prevNotes) => {                      // when constant is an array , we can use map funciton to
                                                 //  to iterate and update with useEffect hook
      return prevNotes.map((note) =>
        note._id === id
          ? {
              ...note,
              title: title,
              description: description,
            }
          : note
      );
    });
  };
  
  return (
    <noteContext.Provider value={{ notes,addNote,deleteNote,editNote,getNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
