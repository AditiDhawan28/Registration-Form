import React from "react";
import { useRef, useState, useEffect } from "react";
import './Register.css';


const userId = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const passwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  const userRef = useRef(); //don't re-render when change happen
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pswd, setPswd] = useState("");
  const [validPswd, setValidPswd] = useState(false);
  const [pswdFocus, setPswdFocus] = useState(false);

  const [matchPswd, setMatchPswd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, SetSuccess] = useState(false);

  useEffect=
    (() => {
      userRef.current.focus();
    },
    [])

  useEffect=(() => {
    const result = userId.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]) //whenever user changes its input it calls for check

  useEffect=(() => {
    const result = passwd.test(pswd);
    console.log(result);
    console.log(pswd);
    setValidPswd(result);
    const match = pswd === matchPswd;
    setValidMatch(match);
  }, [pswd, matchPswd])

  useEffect=(() => {
    setErrMsg(""); //remove the error message
  }, [user, pswd, matchPswd])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const v1=userId.test(user);
    const v2=passwd.test(pswd);
    if(!v1 || !v2){
        setErrMsg("Invalid Entry");
        return;
    }
    console.log(user,pswd);
    SetSuccess(true);
  }

  return (
    <section className="container">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive" //sed for time-sensitive/critical notifications that absolutely require the user's immediate attention
      >
        {errMsg}
      </p>
      <h1 className="header">Register</h1>
      <form onSubmit={handleSubmit}>
          <div className="userinput">
            <div className="input">
          <label htmlFor="username" className="inpfields">
            User Name :
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"  // lists the ids of the descriptions or elements providing more information that the user might need.
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          </div>
          {/* <p id="uidnote" className={userFocus && user && !validName ?"instructions" : "offscreen"
          }>4 to 24 characters<br/>
          Must begin with a letter<br/>
          Letters, Numbers, UnderScore, Hyphens allowed</p> */}
<div className="input">
          <label htmlFor="password" className="inpfields">
            Password :
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPswd(e.target.value)}
            required
            aria-invalid={validPswd ? "false" : "true"}
            aria-describedby="pwdnote"  // lists the ids of the descriptions or elements providing more information that the user might need.
            onFocus={() => setPswdFocus(true)}
            onBlur={() => setPswdFocus(false)}
          />
          {/* <p id="pwdnote" className={pswdFocus && !validPswd ?"instructions" : "offscreen"
          }>8 to 24 characters<br/>
          Must include uppercase and lowercase letters, a number and a special characters.<br/>
          Allowed special characters : <span aria-label="exclamation mark">!</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percentage">%</span></p> */}
          </div>
<div className="input">
          <label htmlFor="confirm_pwd"className="inpfields">
            Confirm Password :
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPswd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"  // lists the ids of the descriptions or elements providing more information that the user might need.
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          </div>
          </div>
          {/* <p id="confirmnote" className={matchFocus && !validMatch ?"instructions" : "offscreen"
          }>
          Must match the first password input field.
          </p> */}
          <button className="button" disabled={!validName || !validPswd || !validMatch ? true : false}>Sign Up</button>

      </form>
      <p className="baseline">
        Already Registered?<br/>
        <span className="line">
            <a href="#">Sign In</a>
        </span>
      </p>
    </section>
  );
};

export default Register;
