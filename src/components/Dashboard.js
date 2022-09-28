import React, { useState } from 'react';
import Navbar from './Navbar';
import Equipment from './Equipment';
import Footer from './Footer';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  var userType = 1;
  return (
    <div className='container'>
            <>
            <div className="dropdown show">
            <button style={{backgroundColor: "black"}}  onClick={toggleOpen} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
              Filter by
            </button>
            <ul style={{backgroundColor: "black", color: "white"}} className={`text-small dropdown-menu ${isOpen ? " show" : ""}`}>
                            <li><button className="text-small dropdown-item" >Id</button></li>
                            <li><button className="text-small dropdown-item" >Name</button></li>
                            <li><button className="text-small dropdown-item" >Manufacturer</button></li>
                            <li><button className="text-small dropdown-item" >Type</button></li>
            </ul>
            </div>
        
            <div style={{ "textAlign": 'right' }}>
              <a className="btn btn-primary btn-rounded"  href="AddEquipment">Add Equipments</a>
              </div>
            </>
      <Equipment />
      <Footer />
    </div>
  );
}