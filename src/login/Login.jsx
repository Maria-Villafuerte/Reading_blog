import './loginStyles.css';
import md5 from "md5";
import { Link, useNavigate } from 'react-router-dom';
import useForm from './useForm'; // Importa el hook useForm

const Login = () => {
  const navigate = useNavigate();

  // Define los valores iniciales del formulario
  const initialValues = {
    username: "",
    password: ""
  };

  // Define la función de envío del formulario
  const handleSubmit = async (values) => {
    try {
      // Obtener datos del localStorage
      const userData = localStorage.getItem('userData');
      if (!userData) {
        throw new Error("No hay usuarios registrados.");
      }
      const { name, password: storedPassword } = JSON.parse(userData);

      if (name === values.username && md5(values.password) === storedPassword) {
        console.log("Inicio de sesión exitoso!");
        localStorage.setItem('id', values.username);
        navigate('/admin');
      } else {
        throw new Error("Nombre de usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  // Usa el hook useForm para manejar el formulario
  const { values, handleChange, handleSubmit: handleFormSubmit, errorMessage } = useForm(
    initialValues,
    handleSubmit
  );

  return (
    <div>
      <div className='ww'></div>
      <div className="login-container">
        <span className="title">Ingresar</span>
        <span className="sub_titulo"></span>
        <form onSubmit={handleFormSubmit}>
          <input
            className="login"
            type="text"
            placeholder="Nombre"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <div className="second">
            <input
              className="login"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
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
