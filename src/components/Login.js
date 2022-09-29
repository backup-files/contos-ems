import React, { useEffect } from 'react'
import { Outlet, NavLink } from "react-router-dom1";
import Navbar from './Navbar';
// import './login.css';

export default function Register() {
  const navStyle = ({isActive}) => {
    return {
      textColor: isActive ? 'green' : 'white',
      // border:isActive ? '1px solid grey':'2px solidgrey'
    }
  }

  return (
    <>
    <Navbar/>
      <ul id="tabView" className="nav nav-pills justify-content-center m-2"  >
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Login/PlantAdmin">Login as Plant Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Login/Technician">Login as Technician</NavLink>
        </li>
      </ul>
      <div className="container" >
        <Outlet />
      </div>

    </>
  )
}