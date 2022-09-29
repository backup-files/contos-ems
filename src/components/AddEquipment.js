import React from 'react'
import './login.css';
import Navbar from './Navbar';
import './noti.css';
export default function AddEquipment() {
  const installedDateRef = React.useRef();
  const convertDateProperly = (date) => {
    return date[8]+date[9]+"-"+date[5]+date[6]+"-"+date[0]+date[1]+date[2]+date[3];
  }
  return (
    
        <>
        <Navbar/>
        <div className="text-center" >
          <h3>Add Equipment</h3>
    
       <main className="form-signin w-400 m-auto">
       <form style={{width:"600px"}} onSubmit={(e) => {
          e.preventDefault();
          console.log(convertDateProperly(installedDateRef.current.value));
       }}>
        
          
          <div className="form-floating" >
            <input type="text" className="form-control" id="name" placeholder="Equipment Name"/>
              <label htmlFor="name">Equipment Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Description</label>
          </div>
          <div className="form-floating">
            <input type="date" ref={installedDateRef} className="form-control" id="installedDate" placeholder="Title"/>
              <label htmlFor="floatingPassword">Installed Date</label>
          </div>
          <div className="form-floating">
            <input type="date" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Service Due Date</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Manufacturer</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Model</label>
          </div>
          <div className="form-floating">
            <input type="decimal" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">temperature</label>
          </div>
          <div className="form-floating">
            <input type="decimal" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Angular velocity</label>
          </div>
          <div className="form-floating">
            <input type="decimal" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Pressure</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Type</label>
          </div>
          
          <div className="form-floating">
         < input type="string" className="form-control" id="comm" placeholder="Comments"/>
              <label htmlFor="comm">Image Link</label>
           
          </div>
         
          
          
          <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
       
      </form>
    </main>
    
    
    
    </div>
    </>
    
  )
}