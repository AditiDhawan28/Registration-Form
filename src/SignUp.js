import React from "react";
import { useState} from "react";
import './RegisterForm.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// const passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  // const [pswd, setPswd] = useState("");
  // const [validPswd, setValidPswd] = useState(false);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    password: "",
    address: "",
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  // useEffect
  //   (() => {
  //     const result = passwd.test(pswd);
  //     console.log(result);
  //     console.log(pswd)
  //     setValidPswd(result);

  //   },
  //   [pswd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("", values)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
         <section className="container">
           <h1 className="header">Registration Form</h1>
           <form onSubmit={handleSubmit}>
             
               
                 <label htmlFor="name">Name :</label>
                 <input  type="text" id="name" name="name" onChange={(e)=>handleInput(e)} />
         
              
                 <label htmlFor="mobile">Phone No. :</label>
                 <input  type="tel" id="phone" name="mobile" onChange={(e)=>handleInput(e)} />
           
               
                 <label htmlFor="email">Email :</label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   
                   onChange={(e)=>handleInput(e)}
                 />
              
               
                 <label htmlFor="password">Password :</label>
                 <input
                   type="password"
                   id="password"
                   name="password"
                   
                   onChange={(e)=>handleInput(e)}
                   required
                 />
              
               
               
                 <label htmlFor="age">Age :</label>
                 <input  type="text" id="age" name="age" onChange={(e)=>handleInput(e)} />
          
               
               
                 
                 <label htmlFor="address">Address :</label>
                 <textarea
                   id="address"
                   className="addrs"
               
                   name="address"
                   onChange={(e)=>handleInput(e)}
                 ></textarea>
            
            
             <button
               className="button"
               
               type="submit"
             >
               Sign Up
             </button>
           </form>
           <p className="baseline">
             Already Registered?
             <br />
             <span className="line">
               <Link to="/login">Sign In</Link>
             </span>
           </p>
         </section>
  );
};
export default SignUp;
