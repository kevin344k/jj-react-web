
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Debates from "./views/Debates";
import Compras from "./views/Compras";
import WalletsMineros from "./views/WalletsMineros";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/debates" element={<Debates />} />
      <Route path="/compras" element={<Compras />} />
      <Route
        path="/wallets&mineros"
        element={<WalletsMineros onBack={() => navigate("/")} />}
      />
      <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
    </Routes>
  );
}

export default App;
