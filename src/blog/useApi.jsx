import { useState, useEffect } from 'react';
import { ref, get, remove } from 'firebase/database'; // Importa las funciones necesarias de Firebase
import { database } from '../../Server/firebaseConfig';

const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = ref(database, 'posts');
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setData(usersArray);
        } else {
          console.log('No hay datos disponibles');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los datos de Firebase:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deletePost = async (id) => {
    try {
      const postRef = ref(database, `posts/${id}`);
      await remove(postRef);
      console.log('Post eliminado correctamente');
      setData(data.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error al eliminar el post:', error);
      setError(error);
    }
  };

  return { data, loading, error, deletePost };
};

export default useApi;
