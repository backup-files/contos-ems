import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import {Routes,Route,Redirect} from 'react-router-dom';
import RegisterPlantAdmin from './components/RegisterPlantAdmin';
import RegisterTechnician from './components/RegisterTechnician';
function App() {
  return (
    <>
      <div id="mainBody" className="container">
        <Routes>
        <Route path="/Register" element={<Register/>}>
          <Route path="/Register/PlantAdmin" element={<RegisterPlantAdmin/>}/>
          <Route path="/Register/Technician" element={<RegisterTechnician/>}/>
        </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
