import React, { useState } from 'react';
import Navbar from './Navbar';
import Equipment from './Equipment';
import Footer from './Footer';
import DisplayEquipments from './services/EquipmentsService';
import { UserManager } from './services/Auth';
// import Navbar from './Navbar';
export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  var [filter, setFilter] = useState("all");
  var userType = 1;
  return (
    <div className='container'>
      <Navbar />
      <>
        <div className="dropdown show">
          <button style={{ backgroundColor: "black" }} onClick={toggleOpen} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
            Filter by
          </button>
          <ul style={{ backgroundColor: "black", color: "white" }} className={`text-small dropdown-menu ${isOpen ? " show" : ""}`}>
            <li><button className="text-small dropdown-item" style={{color: "white"}} onClick={
              (e) => {
                e.preventDefault();
                setFilter("all");
                setIsOpen(false);
              }
            }>Show all</button></li>
            <li><button className="text-small dropdown-item" style={{color: "white"}} onClick={
              (e) => {
                e.preventDefault();
                setFilter("equipments");
                setIsOpen(false);
              }
            }>Show only equipments</button></li>
            <li><button className="text-small dropdown-item" style={{color: "white"}} onClick={
              (e) => {
                e.preventDefault();
                setFilter("locations");
                setIsOpen(false);
              }
            }>Show only locations</button></li>
            {/* <li><button className="text-small dropdown-item" style={{color: "white"}}>Type</button></li> */}
          </ul>
        </div>
        {(() => {
          if (UserManager.isAdminLoggedIn()) {
            return <div style={{ "textAlign": 'right' }}>
              <a className="btn btn-primary btn-rounded" href="AddEquipment">Add Equipments</a>
            </div>
          }
        })()
        }
      </>
      <DisplayEquipments filter={filter}/>
      <Footer />
    </div>
  );
}