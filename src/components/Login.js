import React ,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';  // for going back to the main page

function Login() {
    const [cred,setCred]=useState({email:"",password:""})
   const history= useNavigate();
         const handleSubmit=async (e)=>{
            e.preventDefault();
            const response= await fetch('http://localhost:5000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body : JSON.stringify({email:cred.email,password:cred.password})
            })
       const json=await response.json();
            console.log(json);
            if(json.success){
               localStorage.setItem('token',json.token)
               history("/");
            }
            else{
              alert('wrong credentials entered');
            }
         }
         const handlechange=(e)=>{
            e.preventDefault();  //for not letting the page to reload
         
        setCred({...cred,[e.target.name]:e.target.value})  // split operator 
        }
  return (
    <div className='container'><form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input name="email" type="email" className="form-control" id="email" value={cred.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={handlechange}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" value={cred.password} name="password" placeholder="Password"  onChange={handlechange}/>
    </div>
    <button type="submit" className="btn btn-warning my-2"  >Submit</button>
  </form></div>
  )
}
export default Login
