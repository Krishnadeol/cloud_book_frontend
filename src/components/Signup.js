import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';  // for going back to the main page

function Signup() {
  const [cred,setCred]=useState({name:"",email:"",password:"",epassword:""})
  const history= useNavigate();
        const handleSubmit=async (e)=>{
           e.preventDefault();

           if(cred.password!==cred.epassword) alert("Confirmed Password does not match")
           else{
           const response= await fetch('http://localhost:5000/auth',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },

           body : JSON.stringify({name:cred.name,email:cred.email,password:cred.password})
           })
      const json=await response.json();
           console.log(json);
           if(json.success){
              localStorage.setItem('token',json.token)
              history("/login");
           }
           else{
             alert('Counld Not sign you in ');
           }
        }
      }
        const handlechange=(e)=>{
           e.preventDefault();  //for not letting the page to reload
        
       setCred({...cred,[e.target.name]:e.target.value})  // split operator 
       }
 return (
   <div className='container'><form onSubmit={handleSubmit}>
   <div className="form-group">

   <label htmlFor="email">Name</label>
     <input name="name" type="name" className="form-control" id="name" value={cred.name} aria-describedby="emailHelp" placeholder="Enter Your name" onChange={handlechange} minLength={4} required/>
  
     <label htmlFor="email">Email address</label>
     <input name="email" type="email" className="form-control" id="email" value={cred.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={handlechange} required/>
   </div>
   <div className="form-group">
     <label htmlFor="password">Password</label>
     <input type="password" className="form-control" id="password" value={cred.password} name="password" placeholder="Password"  onChange={handlechange} minLength={5} required />    
   </div>
   <div className="form-group">
     <label htmlFor="password">Confirm  Password</label>
     <input type="password" className="form-control" id="epassword" value={cred.epassword} name="epassword" placeholder="Re enter password"  onChange={handlechange} minLength={5} required/>
    
   </div>
  
   <button type="submit" className="btn btn-warning my-2"  >Submit</button>
 </form></div>
 )
}

export default Signup
