
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Debates from "./views/Debates";
import Compras from "./views/Compras";
function App() {
 

  return (
   
   
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/debates" element={<Debates />} />
        <Route path="/compras" element={<Compras />} />
      <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
    </Routes>
    
  );
}

export default App;
