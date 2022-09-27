





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


function App() {
  return (
    <>
    <div id="mainBody" className="container">
        <Routes>
        <Route path="/Register" element={<Register/>}>
          <Route path="/Register/PlantAdmin" element={<RegisterPlantAdmin/>}/>
          <Route path="/Register/Technician" element={<RegisterTechnician/>}/>

        </Route>
        <Route path="/Dashboard" element={<Dashboard/>}/>

        <Route path="/EquipmentDetails" element={<EquipmentDetails/>}/>
        <Route path="/" element={<Notifications/>}/> 

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
