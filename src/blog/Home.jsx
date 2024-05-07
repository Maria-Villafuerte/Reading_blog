import { Suspense } from 'react';
import useApi from './useApi'; // Importa el hook useApi
import gifImage from '../assets/loading-gif-png-5.gif'
import './blogPostStyles.css'; // Importa los estilos CSS

const Loading = () => (
  <div className="gif-container">
    <img className="gif-image" src={gifImage} alt="Cargando..." />
  </div>
);

const Home = () => {
  const { data: users, loading, error } = useApi();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <main>
        <div className='mm'>
          <div className="title-container">
            <h1 className="main-title">Welcome to my reading blog</h1>
          </div>
          <Suspense fallback={<Loading />}>
            {loading ? <Loading /> : (
              users.map((user) => (
                <div className="blog-post-container" key={user.id}>
                  <div className="blog-post-card">
                    <div className="blog-post">
                      <h2 className="blog-post-title">{user.title}</h2>
                      <p className="blog-post-content">{user.desc}</p>
                      <p className="blog-post-thumbnail">{user.thumbnail}</p>
                      <p className="blog-post-category">{user.category}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Home;
