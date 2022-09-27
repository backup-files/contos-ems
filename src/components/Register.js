import React from 'react'
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const navStyle = ({isActive}) => {
    return {
      backgroundColor: isActive ? 'blue' : 'white'
    } 
  }


  return (
    <>

      <ul className="nav nav-pills justify-content-center m-2"  >
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Register/PlantAdmin">Plant Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={navStyle} to="/Register/Technician">Technician</NavLink>
        </li>
      </ul>
      {/* <div style={{ backgroundColor: "lightgrey", marginRight: "30px", marginLeft: "30px" }}>
        <div>Register</div>

        <button onClick={() => { navigate('/') }} >Plant Admin</button>
        <button onClick={() => { navigate('RegisterTechnician') }}>Technician </button>
      </div>
      <Outlet /> */}
      <div className="container" style={{ backgroundColor: "lightgrey" }}>

        <Outlet />
      </div>

    </>
  )
}
