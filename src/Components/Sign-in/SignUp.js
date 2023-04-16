import './SignUp.scss'
import { useState } from "react";
import {auth} from '../../firebaseUtils'
import { createUserWithEmailAndPassword} from "firebase/auth";


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const resetFormFields = () => {
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)

            // Clear form fields
            resetFormFields();
        })
        .catch((error) => {
          switch(error.code){
            case "auth/email-already-in-use":
              alert("Account Already Exists")
              break;
            case "auth/invalid-email":
              alert("Please Enter a Valid Email Address")
              break;
            case "auth/weak-password":
              alert("Invalid Password: Must be at least 6 characters")
              break;
            default:
              console.log("User creation encoutered an error:", error.message)
          }
        })
    }
    return(
        <>
            
            <form onSubmit={handleSignUp}>
            <h3>No Account? Register Below:</h3>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;