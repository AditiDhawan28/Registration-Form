import React from "react";
import { useState} from "react";
import './RegisterForm.css'
import { Link, useNavigate } from "react-router-dom";
import Select from 'react-select';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {

  
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    gender: "",
    age: "",
    dob:null,
    profession:"",
    skills:[],
    languages:[],
    resume:"",
    url:"",
    password: "",
    address: "",
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date) => {
    setValues((prev) => ({ ...prev, dob: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the default submission
    console.log(values);
    axios
      .post("", values)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

   const options=[
    {value:"java", label:"Java"},
        {value:"reactjs", label:"React JS"},
        {value:"reactnative", label:"React Native"},
         {value:"angular", label:"Angular"},
         {value:"python", label:"Python"},
         {value:"c", label:"C++"},
   ];
  
   const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      languages: checked
        ? [...prev.languages, value]
        : prev.languages.filter((lang) => lang !== value),
    }));
  };
   

    const handleChange=(selectedOptions)=>{
         setValues((prev)=>({...prev,skills: selectedOptions ? selectedOptions.map((option)=>option.value):[],}))
    }
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
         
          <div >
            <label  htmlFor="gender">Gender :</label>
            <input  type="radio" value="male" name="gender" onChange={(e)=>handleInput(e)}/>Male
            <input  type="radio" value="female" name="gender" onChange={(e)=>handleInput(e)}/>Female
            <input  type="radio" value="other" name="gender" onChange={(e)=>handleInput(e)}/>Other
          </div>
          
            <label htmlFor="age">Age :</label>
            <input  type="text" id="age" name="age" onChange={(e)=>handleInput(e)} />
            <label  htmlFor="languages" name="languages">Languages :</label>
          
            <input  type="checkbox" value="hindi" name="languages" onChange={handleLanguageChange}/>Hindi
            <input  type="checkbox" value="english" name="languages"  onChange={handleLanguageChange}/>English
            <input  type="checkbox" value="french" name="languages"  onChange={handleLanguageChange}/>French
      


          <label htmlFor="dob" name="dob">Date of Birth:</label>
            <DatePicker  
          dateFormat="yyyy-MM-dd"
         
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
          placeholderText="YYYY-MM-DD" selected={values.dob} onChange={handleDateChange} />
   
            <label htmlFor="profession">Profession :</label>
            <select id="profession" name="profession" onChange={(e)=>handleInput(e)}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
                <option value="other">Other</option>
            </select>
            <div>
            <label htmlFor="resume">Resume</label>
            <input type="file" placeholder="Choose a file" name="resume" onChange={(e)=>handleInput(e)}/>
            </div>
            <div>
            <label htmlFor="url">URL</label>
            <input type="text" name="url" placeholder="Enter URL" onChange={(e)=>handleInput(e)}/>
            </div>
            <label htmlFor="skills">Skills :</label>
            <Select options={options}  isMulti={true} onChange={handleChange}/>
           
                
         
            <label htmlFor="address">Address :</label>
            <textarea
              id="address" 
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