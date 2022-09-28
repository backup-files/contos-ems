import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom1';
import { UserManager } from './services/Auth';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <header className="p-3 mb-3 border-bottom" >
            <div className="container">
                <div style={{ backgroundColor: "#151719" }} className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap" /></svg>
                    </a> */}

                    <ul className="nav nav-pills justify-content-center m-2 col-12 col-md-auto me-md-auto mb-2 mb-md-0">

                        <li className="nav-item" style={{ marginLeft: "10px", textAlign: "center" }}>
                            <NavLink className="nav-link" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft: "10px", textAlign: "center" }}>
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </li>
                        {
                            (() => {
                                if (UserManager.isLoggedIn())
                                    return <li className="nav-item" style={{ marginLeft: "10px", textAlign: "center" }}>
                                        <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
                                    </li>
                            }
                            )()
                        }

                    </ul>
                    {(() => {
                        if (UserManager.isLoggedIn()) {
                            return <div className="dropdown text-end" style={{ backgroundColor: "#151719" }} >
                                <button style={{ backgroundColor: "black" }} onClick={toggleOpen} className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                </button>
                                <ul style={{ backgroundColor: "black", color: "white" }} className={`text-small dropdown-menu${isOpen ? " show" : ""}`}>
                                    {(() => {
                                        if (UserManager.isAdminLoggedIn()) { return <li><a className="text-small dropdown-item" href="/Notifications">Your Notifications</a></li> }
                                    })()
                                    }
                                    <li><a className="text-small dropdown-item" href="/Profile">Your Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="text-small dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        }
                        else {
                            return <>
                                <a className="btn btn-primary btn-rounded "  style={{marginRight:"10px"}}href="/Register" >Register</a>
                                <a className="btn btn-primary btn-rounded" style={{marginRight:"10px"}} href="/Login">Login</a>
                            </>
                        }
                    })()
                    }
                </div>
            </div>
        </header>
    )
}


/**
 * 
 * 
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                    <a className="navbar-brand" href="#">
                        <img src=" https://png.pngtree.com/png-vector/20190327/ourlarge/pngtree-eco-energy-logo-design-png-image_880934.jpg" width="70" height="50" alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Equipments</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Notifications</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <span className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://th.bing.com/th/id/OIP._VoTfUzENldEmDbFEcQi4QHaHa?pid=ImgDet&rs=1" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li><a className="dropdown-item" href="#">New Notification...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </header>
 */