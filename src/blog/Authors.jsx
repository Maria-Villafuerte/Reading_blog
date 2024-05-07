import './authorsStyles.css';

const Authors = () => {
  // Obtener los datos del localStorage
  const userData = localStorage.getItem('userData');
  let users = [];

  if (userData) {
    // Si hay datos en el localStorage, convertirlos a objetos y agregarlos al array users
    const parsedData = JSON.parse(userData);
    users.push(parsedData);
  }

  return (
    <div>
      <h1>Usuarios Registrados:</h1>
      {users.map((user, index) => (
        <div key={index} className="author-card">
          <p className="author-name">Nombre: {user.name}</p>
          {/* Agrega más información aquí si lo deseas */}
        </div>
      ))}
    </div>
  );
};

export default Authors;
