import React, { useState, useEffect } from 'react';
import { ref, get, remove } from 'firebase/database'; // Importa las funciones necesarias de Firebase
import { database } from './firebaseConfig';

const Try = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, 'posts');
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setUsers(usersArray);
        } else {
          console.log('No hay datos disponibles');
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos de Firebase:', error);
      });
  }, []);

  const handleDeletePost = (id) => {
    const postRef = ref(database, `posts/${id}`);
    remove(postRef)
      .then(() => {
        console.log('Post eliminado correctamente');
        // Actualiza el estado para reflejar la eliminación del post
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((error) => {
        console.error('Error al eliminar el post:', error);
      });
  };

  return (
    <>
      <main>
        <h1>FIREBASE</h1>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.title}</h2>
            <p>{user.desc}</p>
            <p>{user.thumbnail}</p>
            <p>{user.category}</p>
            <button onClick={() => handleDeletePost(user.id)}>Eliminar Post</button>
          </div>
        ))}
      </main>
    </>
  );
};

export default Try;
