import { useState, useEffect } from 'react';
import { ref, get, remove, update } from 'firebase/database';
import { database } from '../../Server/firebaseConfig';
import { Link } from 'react-router-dom';
import './blogPostStyles.css';
import './createPostStyles.css';

const Delete_post = () =>  {
  const [users, setUsers] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);
  const [newPostData, setNewPostData] = useState({
    title: '',
    thumbnail: '',
    category: '',
    desc: '',
  });

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

  const handleEditPost = (id) => {
    setEditingPostId(id);
    // Aquí podrías cargar los datos del post a editar
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData({
      ...newPostData,
      [name]: value,
    });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setNewPostData({
      title: '',
      thumbnail: '',
      category: '',
      desc: '',
    });
  };

  const handleUpdatePost = (id) => {
    const newData = {
      title: newPostData.title,
      desc: newPostData.desc,
      thumbnail: newPostData.thumbnail,
      category: newPostData.category,
    };

    const postRef = ref(database, `posts/${id}`);
    update(postRef, newData)
      .then(() => {
        console.log('Post actualizado correctamente');
        setEditingPostId(null);
        setNewPostData({
          title: '',
          thumbnail: '',
          category: '',
          desc: '',
        });
      })
      .catch((error) => {
        console.error('Error al actualizar el post:', error);
      });
  };

  return (
    <>
      <main >
        <div className='mm'>
          <div className="title-container">
            <h1 className="main-title">Welcome Admin</h1>
            <Link to="/" className="home-link">Home</Link>
          </div>

          {users.map((user) => (
            <div className="blog-post-container" key={user.id}>
              <div className="blog-post-card">
                <div className="blog-post">
                  {editingPostId === user.id ? (
                    <div className="create-post-container">
                      <div className="create-post-form">
                        <h2 className="create-post-title">Editar post</h2>
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
                        <div>
                          <button onClick={() => handleUpdatePost(user.id)} className="create-post-button">Aceptar</button>
                          <button onClick={handleCancelEdit} className="create-post-button">Cancelar</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="blog-post-title">{user.title}</h2>
                      <p className="blog-post-content">{user.desc}</p>
                      <p className="blog-post-thumbnail">{user.thumbnail}</p>
                      <p className="blog-post-category">{user.category}</p>
                      <button className="blog-post-delete-button" onClick={() => handleDeletePost(user.id)}>Eliminar Post</button>
                      <button className="blog-post-edit-button" onClick={() => handleEditPost(user.id)}>Editar Post</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>
    </>
  );
};

export default Delete_post;
