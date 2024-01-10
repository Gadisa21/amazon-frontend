import React, { useState } from "react";
import "./Login.css";
import {Link,useNavigate} from "react-router-dom"
import {auth} from "./Firebase.js"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";


function Login() {
      const [email, setEmail] = useState("");
      const [password,setPassword]=useState("")
      const navigat=useNavigate()
      const signIn=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
          if (userCredential){
           navigat("/")
          }

        }).catch((error)=>alert(error.message))
      }
      const register=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
         if(userCredential){
 navigat("/");
         }
         

        }).catch((error)=>{
          alert(error.message)
        })
      }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://download.logo.wine/logo/Amazon_%28company%29/Amazon_%28company%29-Logo.wine.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use
          sale. Please see our Privace Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
