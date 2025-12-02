

import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
// import { sendSignInLinkToEmail } from "firebase/auth"
import {signInWithEmailLink, updatePassword } from "firebase/auth";
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'


const RegisterComplete = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const storedEmail = window.localStorage.getItem("emailForRegistration")
    if (storedEmail) setEmail(storedEmail)
  }, [])

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    if(password.length < 6) {
      toast.error("Password must be at least 6 characters long")
      return;
    }

    try {
      // Connexion via le lien email
      const result = await signInWithEmailLink(auth, email, window.location.href);

      if (result.user.emailVerified) {
        // Supprimer l'email du localStorage
        window.localStorage.removeItem("emailForRegistration");

        const user = auth.currentUser;

        // Mettre à jour le mot de passe
        await updatePassword(user, password);

        // get the token
        const idTokenResult = await user.getIdTokenResult();
          console.log("user", user, "idTokenResult", idTokenResult)
        toast.success("Registration completed successfully!");

        // Redirection après succès
         navigate("/");
      } else {
        toast.error("Email is not verified!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };


  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        disabled
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder='Password'
      />
      <button type="submit" className="btn btn-raised mt-3">
          Complete Registration
        </button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
        
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  )
}

export default RegisterComplete

