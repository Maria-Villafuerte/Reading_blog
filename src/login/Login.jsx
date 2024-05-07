import './loginStyles.css';
import React, { useState } from "react";
import md5 from "md5";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtener datos del localStorage
      const userData = localStorage.getItem('userData');
      if (!userData) {
        setErrorMessage("No hay usuarios registrados.");
        return;
      }
      const { name, password: storedPassword } = JSON.parse(userData);

      if (name === username && md5(password) === storedPassword) {
        console.log("Inicio de sesión exitoso!");
        localStorage.setItem('id', username);
        navigate('/delete');
      } else {
        setErrorMessage("Nombre de usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage("Error al iniciar sesión.");
    }
  };


  return (
    <div>
      <div className='ww'></div>
      <div className="login-container">
        <span className="title">Ingresar</span>
        <span className="sub_titulo"></span>
        <form onSubmit={handleSubmit}>
          <input
            className="login"
            type="text"
            placeholder="Nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="second">
            <input
              className="login"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Acceder</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        <p><Link to="/register">Todavía no tienes cuenta? Registrar</Link></p>
      </div>
    </div>
  );
};

export default Login;
