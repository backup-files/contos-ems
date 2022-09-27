import logo from './logo.svg';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from './components/Login';
import LoginTechnician from './components/LoginTechnician';
import LoginPlantAdmin from './components/LoginPlantAdmin';
import Notifications from './components/Notifications';
import './App.css';


function App() {
  return (
    <>
    <div id="mainBody" className="container">
    <Routes>
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
