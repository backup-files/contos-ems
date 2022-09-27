import React, { useEffect } from 'react'
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const navStyle = ({isActive}) => {
    return {
      textColor: isActive ? 'green' : 'white',
      // border:isActive ? '1px solid grey':'2px solidgrey'
    }
  }

  return (
    <>
    
  <img className="mb-4" src={require("./../../src/Image/logo-mercury.png")} alt="" width="120px" height="100px" class="center" />
      <ul className="nav nav-pills justify-content-center m-5"  >
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Register/PlantAdmin">Register as Plant Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Register/Technician">Register as Technician</NavLink>
        </li>
      </ul>
      <div className="container" >
        <Outlet />
      </div>

    </>
  )
}
