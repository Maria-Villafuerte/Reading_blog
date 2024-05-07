import { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { database } from '../../Server/firebaseConfig';
import './createPostStyles.css'; // Importa los estilos CSS

const CreatePost = () => {
  const [newPostData, setNewPostData] = useState({
    thumbnail: '',
    category: '',
    title: '',
    desc: '',
    authorId: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({ ...newPostData, [name]: value });
  };

  const handleAddPost = () => {
    const postsRef = ref(database, 'posts');
    const newPostRef = push(postsRef);
    set(newPostRef, newPostData)
      .then(() => {
        console.log('Nuevo post agregado correctamente');
        setNewPostData({
          thumbnail: '',
          category: '',
          title: '',
          desc: '',
          authorId: '',
        });
      })
      .catch((error) => {
        console.error('Error al agregar el nuevo post:', error);
      });
  };

  return (
    <div className="create-post-container">
      <div className="create-post-form">
        <h2 className="create-post-title">Crear nuevo post</h2>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newPostData.title}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail"
          value={newPostData.thumbnail}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={newPostData.category}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <input
          type="text"
          name="desc"
          placeholder="Descripción"
          value={newPostData.desc}
          onChange={handleInputChange}
          className="create-post-input"
        />
        <button onClick={handleAddPost} className="create-post-button">Agregar Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
