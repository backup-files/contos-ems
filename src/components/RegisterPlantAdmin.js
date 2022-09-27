import React from 'react';
import {useNavigate} from'react-router-dom'
import './Register.css';

export default function RegisterPlantAdmin() {
  const navigate= useNavigate();
  function place(){
      navigate('LoginPlantAdmin')
  }
  return (
    <>
    <div className="text-center" >

<div className="form-signin w-300 m-auto">
  <form >
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
      <div className="form-floating">
        <input type="password" className="form-control" id="confirmPassword" placeholder=" Confirm Password"/>
          <label htmlFor="floatingPassword">Confirm Password</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="token" placeholder="Admin token"/>
          <label htmlFor="token">Admin Token</label>
      </div>
      <div className="checkbox mb-3" >
        <label>
          <input type="checkbox" value="remember-me"/> I accept Terms and Conditions
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        <p >Already registered?<a  href="./LoginPlantAdmin"> Log In</a> </p>
  </form>
</div>



</div>

    </>
  )
}
