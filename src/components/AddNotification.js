import React from 'react'
import './login.css';
import './noti.css';
export default function AddNotification() {
  return (
    
        <>
        <div className="text-center" >
          <h3>NOTIFICATION</h3>
    
       <main className="form-signin w-400 m-auto">
       <form style={{width:"400px"}}>
        
          
          <div className="form-floating" >
            <input type="text" className="form-control" id="name" placeholder="Equipment Name"/>
              <label htmlFor="name">Equipment Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingPassword" placeholder="Title"/>
              <label htmlFor="floatingPassword">Title</label>
          </div>
          <div className="form-floating">
            <input type="number" min ="1" max="4" className="form-control" id="floatingPassword" placeholder="Severity"/>
              <label htmlFor="floatingPassword">Severity(1-4)</label>
          </div>
          <div className="form-floating">
         < input type="text" className="form-control" id="comm" placeholder="Comments"/>
              <label htmlFor="comm">Comments</label>
           
          </div>
         
          
          
          <button className="w-100 btn btn-lg btn-primary" type="submit">Send</button>
       
      </form>
    </main>
    
    
    
    </div>
    </>
    
  )
}