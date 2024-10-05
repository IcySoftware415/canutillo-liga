import "./App.css";
import Home from "./pages/Home";
import Ligas from "./pages/Ligas";
import PartidosPage from "./pages/PartidosPage";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LigaLunes5v5 from "./pages/LigaLunes5v5";
import FeaturePage from "./pages/FeaturePage";

function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        minHeight: "100vh",
        fontFamily: "Karantina",
      }}
    >
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ligas" element={<Ligas />} />
          <Route path="/partidos" element={<PartidosPage />} />
          <Route path="/ligas/lunes5v5" element={<LigaLunes5v5 />} />
          <Route path="/feature" element={<FeaturePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
