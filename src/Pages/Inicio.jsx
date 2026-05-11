import { useNavigate } from "react-router-dom";
import GestionUsuarios from "../Components/GestionUsuarios";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Bienvenido a la Evidencia de Hooks</h1>
      <GestionUsuarios />
      <button onClick={() => navigate("/registro")}>
        Ir al registro
      </button>
    </div>
  );
};

export default Inicio;