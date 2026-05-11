import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom"; 

const FormularioRegistro = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); 
  const navigate = useNavigate(); 

const onSubmit = (data) => {
  console.log("Datos del Formulario:", data);
  localStorage.setItem("usuario", data.nombre);
  alert("Registro Exitoso");
  reset();
  navigate("/");
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Registro de Proyecto ADSO</h2>
      
      <input 
        {...register("nombre", { required: true })} 
        placeholder="Nombre Completo" 
      />
      {errors.nombre && <span style={{color: "red"}}>El nombre es obligatorio</span>}

      <input 
        {...register("correo", { 
          required: true, 
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        })} 
        placeholder="Correo Electrónico" 
      />
      {errors.correo && <span style={{color: "red"}}>Correo inválido</span>}

      <button type="submit">Enviar y Volver al Inicio</button>
    </form>
  );
};

export default FormularioRegistro;