import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import FormularioRegistro from "./Components/FormularioRegistro";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <header>
          <nav>
            <p>SENA - Análisis y Desarrollo de Software</p>
          </nav>
        </header>

        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Inicio />} />
          
          {/* Ruta del formulario */}
          <Route path="/registro" element={<FormularioRegistro />} />
        </Routes>

        <footer style={{ marginTop: "40px", fontSize: "0.8em" }}>
          Evidencia: Hooks en React (useState, useEffect, useNavigate, useForm)
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;