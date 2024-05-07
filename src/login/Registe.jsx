import './registerStyles.css';
import { useState } from "react";
import md5 from "md5";
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = formData;

    try {
      // Encriptar la contraseña usando MD5
      const encryptedPassword = md5(password);

      // Guardar el usuario en localStorage
      localStorage.setItem('userData', JSON.stringify({
        name,
        password: encryptedPassword
      }));

      // Limpiar el formulario después de registrar al usuario
      setFormData({
        name: "",
        password: ""
      });

      setSuccessMessage("¡Registro exitoso!");
      console.log(name)
      console.log(password)
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setErrorMessage("Error al registrar usuario.");
    }
  };

  return (
    <>
      <div className="register-container">
        <span className="title">Registrar</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Crear</button>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <p><Link to="/login">¿Todavía no tienes cuenta? Inicia sesión</Link></p>
      </div>
    </>
  );
};

export default Register;
