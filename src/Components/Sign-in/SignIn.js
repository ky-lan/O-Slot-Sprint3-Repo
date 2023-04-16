import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import "./SignIn.scss";
import { useState } from "react";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from "../../firebaseUtils";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./SignUp";
import AuthDetails from "./AuthDetails";

import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import Footer from '../Footer/Footer'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFormFields = () => {
    setEmail('')
    setPassword('')
  }


  const signInHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        resetFormFields();
      })
      
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          default:
            console.log(error);
        }
      });
  };
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-secondary"
        imageName={require("../../Assets/signUp.jpg")}
      />

      <div className="formContainer">
        <form onSubmit={signInHandler}>
          <h3>Log Into Your Account</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signInBtn" type="submit">
            Sign In
          </button>
          

          <h5>Log in in With:</h5>
          <div className="buttonContainer">
            <FcGoogle onClick={signInWithGoogle}/>
            <GrFacebook onClick={signInWithFacebook} color={'#4267B2'} />
          </div>
        </form>

        <SignUp />
      </div>
      

      
      <AuthDetails />
      <Footer />
    </>
  );
};

export default SignIn;