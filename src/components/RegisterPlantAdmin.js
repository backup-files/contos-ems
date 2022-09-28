import React from 'react';
import './Register.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom1';
import { UserManager } from './services/Auth';
import Navbar from './Navbar';
export default function RegisterPlantAdmin(props) {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const adminTokenRef = useRef();

  return (
    <>
    <div className="text-center" >

<main className="form-signin m-auto ">
  <form className="register-form" onSubmit={(e) => {
    e.preventDefault();
    if(adminTokenRef.current?.value !== "hash") {
      alert("Wrong admin token. Retry!");
      return;
    }
    if(passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      alert("Passwords mismatch");
      return;
    }
    if(!(emailRef.current?.value && passwordRef.current?.value && nameRef.current?.value)) {
      alert("Please fill all fields");
      return;
    }
    const localEmail = emailRef.current?.value;
    const input = {
      "plantAdmin": {
        "email": emailRef.current?.value,
        "hashedPassword": passwordRef.current?.value,
        "name": nameRef.current?.value
      }
    }
    props.register({variables: input}).then((data) => {
      alert(data.data.registerPlantAdmin);
      if(data.data.registerPlantAdmin === "Registered PlantAdmin successfully") {
        UserManager.cred.email = localEmail;
        UserManager.cred.adminEmail = localEmail;
        console.log(UserManager.cred);
        navigate("/");
      }
    });
  }}>
    {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      {/* <h1 className="h3 mb-3 fw-normal">Plant Admin Sign Up</h1> */}
      <div className="form-floating">
        <input ref={nameRef} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input ref={emailRef} type="email" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
          <label htmlFor="floatingPassword">Email address</label>
      </div>
      <div className="form-floating">
        <input ref={passwordRef} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating">
        <input ref={confirmPasswordRef} type="password" className="form-control" id="confirmPassword" placeholder=" Confirm Password"/>
          <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      <div className="form-floating">
        <input ref={adminTokenRef} type="text" className="form-control" id="token" placeholder="Admin token"/>
          <label htmlFor="token">Admin Token</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> I accept Terms and Conditions
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
   
  </form>
</main>



</div>

    </>
  )
}
