import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register" 
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';

function App() {
  return (
    <Routes>
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
    </Routes>
  );
}
export default App;
