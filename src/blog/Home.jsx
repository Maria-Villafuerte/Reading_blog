import useApi from './useApi'; // Importa el hook useApi
import './blogPostStyles.css'; // Importa los estilos CSS

const Home = () => {
  const { data: users, loading, error} = useApi();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <main >
        <div className='mm'>
          <div className="title-container">
            <h1 className="main-title">FIREBASE</h1>
          </div>
          {users.map((user) => (
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
        ))}
        </div>
      </main>
    </>
  );
};

export default Home;
