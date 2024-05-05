import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database'; // Importa las funciones necesarias de Firebase
import { database } from '../../Server/firebaseConfig';

const CreatePost = () => {
  const [newPostData, setNewPostData] = useState({ title: '', subtitle: '' }); // Estado para almacenar los datos del nuevo post

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleAddPost = () => {
    const postsRef = ref(database, 'posts');
    const newPostRef = push(postsRef); // Genera una nueva referencia única para el nuevo post
    set(newPostRef, newPostData)
      .then(() => {
        console.log('Nuevo post agregado correctamente');
        // Limpia los campos después de agregar el nuevo post
        setNewPostData({ title: '', subtitle: '' });
      })
      .catch((error) => {
        console.error('Error al agregar el nuevo post:', error);
      });
  };

  return (
    <div>
      <h2>Crear nuevo post</h2>
      <input type="text" name="title" placeholder="Título" value={newPostData.title} onChange={handleInputChange} />
      <input type="text" name="subtitle" placeholder="Subtítulo" value={newPostData.subtitle} onChange={handleInputChange} />
      <button onClick={handleAddPost}>Agregar Post</button>
    </div>
  );
};

export default CreatePost;
