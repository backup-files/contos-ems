import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

import Register from './components/Register';
import { Routes, Route, Redirect } from 'react-router-dom1';
import RegisterPlantAdmin from './components/RegisterPlantAdmin';
import RegisterTechnician from './components/RegisterTechnician';
import Dashboard from './components/Dashboard';
import EquipmentDetails from './components/EquipmentDetails';
import Login from './components/Login';
import LoginTechnician from './components/LoginTechnician';
import LoginPlantAdmin from './components/LoginPlantAdmin';
import Notifications from './components/Notifications';
import About from './components/About';
import Profile from './components/Profile';
import AddEquipment from './components/AddEquipment';
import AddNotification from './components/AddNotification';
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Navbar from './components/Navbar';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  // const childRef = useRef();
  // let location = useLocation();

  // useEffect(() => {
  //   const page = location.pathname;
  //   // document.body.classList.add('is-loaded')
  //   childRef.current.init();
  //   trackPage(page);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location]);

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />}>
          <Route path="/Register/PlantAdmin" element={<RegisterPlantAdmin />} />
          <Route path="/Register/Technician" element={<RegisterTechnician />} />
        </Route>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AddEquipment" element={<AddEquipment />} />

        <Route path="/About" element={<About />} />
        <Route path="/EquipmentDetails" element={<EquipmentDetails />} />
        <Route path="/AddNotification" element={<AddNotification />} />


        <Route path="/Profile" element={<Profile />} />

        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Login" element={<Login />}>
          <Route path="/Login/Technician" element={<LoginTechnician />} />
          <Route path="/Login/PlantAdmin" element={<LoginPlantAdmin />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;