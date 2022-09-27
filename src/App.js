import './App.css';
import Dashboard from './components/Dashboard';
import { Route,Routes} from 'react-router-dom';
import EquipmentDetails from './components/EquipmentDetails';

function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route exact path="/EquipmentDetails" element={<EquipmentDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
