import React, { useEffect } from 'react'
import { Outlet, NavLink } from "react-router-dom1";
import './Register.css';
import Navbar from './Navbar';

export default function Register() {
  const navStyle = ({isActive}) => {
    return {
      textColor: isActive ? 'green' : 'white',
      // border:isActive ? '1px solid grey':'2px solidgrey'
    }
  }

  return (
    <>
    <Navbar />
      <ul id="tabView" className="nav nav-pills justify-content-center m-2"  >
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
