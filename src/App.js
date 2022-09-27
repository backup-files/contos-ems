import './App.css';
import Register from './components/Register';

import {Routes,Route,Redirect} from 'react-router-dom';

import RegisterPlantAdmin from './components/RegisterPlantAdmin';

import RegisterTechnician from './components/RegisterTechnician';
import Dashboard from './components/Dashboard';

import EquipmentDetails from './components/EquipmentDetails';




function App() {
  return (
    <>
      <div id="mainBody" >
        <Routes>
        <Route path="/Register" element={<Register/>}>
          <Route path="/Register/PlantAdmin" element={<RegisterPlantAdmin/>}/>
          <Route path="/Register/Technician" element={<RegisterTechnician/>}/>

        </Route>
        <Route path="/Dashboard" element={<Dashboard/>}/>

        <Route path="/EquipmentDetails" element={<EquipmentDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
