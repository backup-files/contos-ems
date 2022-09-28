import React from 'react';
import './Register.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom1';
import Navbar from './Navbar';
export default function RegisterTechnician() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <div className="text-center">

<main className="form-signin m-auto">
  <form className="register-form">
    {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      {/* <h1 className="h3 mb-3 fw-normal">Technician Sign Up</h1> */}
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
          <label htmlFor="floatingPassword">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating" >
        <input type="password" className="form-control" id="confirmPasswordt" placeholder=" Confirm Password"/>
          <label htmlFor="floatingPasswordt">Confirm Password</label>
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
