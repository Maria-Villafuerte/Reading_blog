import React from 'react'
import { useState, useEffect } from 'react';
import { ref, get, remove } from 'firebase/database'; // Importa las funciones necesarias de Firebase
import { database } from '../../Server/firebaseConfig';
import './blogPostStyles.css'; // Importa los estilos CSS

const Delete_post = () =>  {
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
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((error) => {
        console.error('Error al eliminar el post:', error);
      });
  };

  return (
    <>
      <main >
        <div className='mm'>
        {/* Contenedor del anuncio 1
        <div className="ad-container left">
          <div className="ad">Anuncio 1</div>
        </div> */}

        <div className="title-container">
          <h1 className="main-title">FIREBASE</h1>
        </div>

        {/* Contenedor del anuncio 2
        <div className="ad-container right">
          <div className="ad">Anuncio 2</div>
        </div> */}

        {users.map((user) => (
          <div className="blog-post-container">
          <div className="blog-post-card">
          <div className="blog-post" key={user.id}>
            <h2 className="blog-post-title">{user.title}</h2>
            <p className="blog-post-content">{user.desc}</p>
            <p className="blog-post-thumbnail">{user.thumbnail}</p>
            <p className="blog-post-category">{user.category}</p>
            <button className="blog-post-delete-button" onClick={() => handleDeletePost(user.id)}>Eliminar Post</button>
          </div>
          </div>
          </div>
        ))}
        </div>
      </main>
    </>
  );
};

export default Delete_post