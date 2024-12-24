import { useState } from "react";
import './RegisterForm.css'
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {

  const [values,setValues]=useState(
    {
        email:'',
        password:''
    })

    const navigate=useNavigate();

    const handleChange=(e)=>{
      setValues(prev=>({...prev,[e.target.name]: [e.target.value]}))
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post('',values)
      .then(res=>{
        if(res.data.Login){
      
        navigate('/')
        }else{
          alert("No Record")
        }
        console.log(res);

      })
      .catch(err=>console.log(err))


    }
  return (
    <div className="container" >
      <h1 className="header">Login </h1>
      <form onSubmit={handleSubmit}>
        
          
            <label htmlFor="name">UserName :</label>
            <input type="text" id="name" name="name" onChange={handleChange}/>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" onChange={handleChange}/>
          
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" name="password" onChange={handleChange}/>
     
        
        
        
          <button  type="submit">Sign In</button>
          
        <button type="button">
            <Link to="/registerform">Sign Up</Link>
            </button>
        
       
      </form>
    </div>
  );
}
