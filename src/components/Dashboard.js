import React from 'react';
import Navbar from './Navbar';
import Equipment from './Equipment';
import Footer from './Footer';

export default function Dashboard() {

  var userType=1;
  return (
    <div className='container'>
    <Navbar/>
    {(() => {

if (userType == 1) {
  return (
    <div style={{"textAlign":'right'}}><button href='Notifications' className='btn btn-success'>See Notifications</button></div>
  )
} 
})()}
    <Equipment/>
    <Footer/>
    </div>
  );
  
}
