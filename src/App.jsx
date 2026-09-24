
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Debates from "./views/Debates";
import Compras from "./views/Compras";
import WalletsMineros from "./views/WalletsMineros";
import TikTokBrowserNotice from "./views/TikTokBrowserNotice";
import { useNavigate } from "react-router-dom";

function isTikTokInAppBrowser() {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent || "";
  const isTikTok = /TikTok|musical_ly|ByteDance|Aweme/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);
  const hasWebView = /wv\)|WebView|Version\/.*Chrome.*Mobile/i.test(userAgent);

  return isTikTok && (isAndroid || hasWebView);
}

function App() {
  const navigate = useNavigate();

  if (isTikTokInAppBrowser()) {
    return <TikTokBrowserNotice />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/debates" element={<Debates />} />
      <Route path="/compras" element={<Compras />} />
      <Route
        path="/wallets&mineros"
        element={<WalletsMineros onBack={() => navigate("/")} />}
      />
      <Route path="/open-in-browser" element={<TikTokBrowserNotice />} />
      <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
    </Routes>
  );
}

export default App;
