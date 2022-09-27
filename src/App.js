import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import './App.css';
import Register from './components/Register';
import {Routes,Route,Redirect} from 'react-router-dom';
import RegisterPlantAdmin from './components/RegisterPlantAdmin';
import RegisterTechnician from './components/RegisterTechnician';
import Dashboard from './components/Dashboard';
import EquipmentDetails from './components/EquipmentDetails';
import Login from './components/Login';
import LoginTechnician from './components/LoginTechnician';
import LoginPlantAdmin from './components/LoginPlantAdmin';
import Notifications from './components/Notifications';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App() {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/Home" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
    <div id="mainBody" className="container">
        <Routes>
        <Route path="/Register" element={<Register/>}>
          <Route path="/Register/PlantAdmin" element={<RegisterPlantAdmin/>}/>
          <Route path="/Register/Technician" element={<RegisterTechnician/>}/>

        </Route>
        <Route path="/Dashboard" element={<Dashboard/>}/>

        <Route path="/EquipmentDetails" element={<EquipmentDetails/>}/>
        <Route path="/Notifications" element={<Notifications/>}/> 

    <Route path="/Login" element={<Login/>}>

        <Route path="/Login/LoginTechnician" element={<LoginTechnician/>}/>

         <Route path="/Login/LoginPlantAdmin" element={<LoginPlantAdmin/>}/>

    </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;