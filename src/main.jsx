import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ usa esta
import { BrowserRouter } from "react-router-dom"; // ✅ Importar BrowserRouter

import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     <BrowserRouter> {/* ✅ Envolvemos toda la app */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
