import React, { useEffect } from 'react'
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import './login.css';

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
      <ul className="nav nav-pills justify-content-center m-2"  >
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Login/LoginPlantAdmin">Login as Plant Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Login/LoginTechnician">Login as Technician</NavLink>
        </li>
      </ul>
      <div className="container" >
        <Outlet />
      </div>

    </>
  )
}
