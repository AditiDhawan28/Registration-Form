import './App.css';
import Login from './Login'
import React from "react";
//import SignUp from './SignUp';
import RegisterForm from "./RegisterForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 

} from "react-router-dom";

function App(){
  return(
    <>
   <Router>
   {/* <Routes>
      <Route  path="/" element={<SignUp/>}/>
     <Route  path="login" element={<Login/>}/>
     <Route  path="SignUp" element={<SignUp/>}/>
     </Routes> */}
    <Routes>
      <Route  path="/" element={<RegisterForm/>}/>
     <Route  path="login" element={<Login/>}/>
     <Route  path="Registerform" element={<RegisterForm/>}/>
     </Routes>
    </Router> 
  </>
   )}
    



export default App;
