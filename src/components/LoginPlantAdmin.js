import React from 'react';
import './login.css';
import ReCAPTCHA from "react-google-recaptcha";
function onChange(value) {
      console.log("Captcha value:", value)
    }

export default function LoginPlantAdmin() {
  return (
    <>
    <div className="text-center" >
      <h2>Plant Admin Login</h2>

<main className="form-signin w-300 m-auto">
  <form >
      
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com"/>
          <label htmlFor="floatingPassword">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
          <label htmlFor="floatingPassword">Password</label>
      </div>
    
      <ReCAPTCHA sitekey="6LeAxjMiAAAAAEtqb7Tu6z83ShCeAZ106OD8bLaX" onChange={onChange} />
      
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember Me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
   
  </form>
</main>



</div>
</>
)
}