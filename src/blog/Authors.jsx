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
    <div className='rr'>
    <h1>Usuario</h1>
      {users.map((user, index) => (
        <div key={index} className="author-card">
          <p className="author-name">Nombre: {user.name}</p>
          </div>
      ))}
      <div className='author-card'>
          <p>Estudiante de computación</p>
          <p className="author-descip">Soy un estudiante universitario apasionado por la tecnología y el desarrollo web. En este chat decidí hacer un blog para mis lecturas y los reviews que más me gustaron</p>
      </div>
    </div>
  );
};

export default Authors;
