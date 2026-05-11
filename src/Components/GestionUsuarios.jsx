import { useState, useEffect } from "react";

const GestionUsuarios = () => {
  
  const [nombre, setNombre] = useState("");
  const [mensajeCarga, setMensajeCarga] = useState("Cargando sistema...");

  
  useEffect(() => {
    console.log("El componente de Gestión se ha cargado"); 

    const timer = setTimeout(() => {
      setMensajeCarga("Sistema de Usuarios Listo");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "20px" }}>
      <h3>{mensajeCarga}</h3>
      <input 
        type="text" 
        placeholder="Ingresa nombre de usuario" 
        onChange={(e) => setNombre(e.target.value)} 
      />
      <p>Usuario detectado: <strong>{nombre}</strong></p>
    </div>
  );
};

export default GestionUsuarios;