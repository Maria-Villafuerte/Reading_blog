import './App.css';
import Login from './login/Login.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './page_componetns/Layout.jsx';
import ErrorPage from './blog/ErrorPage.jsx';
import Post_Detail from './blog/Post_Detail.jsx';
import Home from './blog/Home.jsx';
import Register from './login/Registe.jsx';
import User_Profile from './blog/User_Profile.jsx';
import Authors from './blog/Authors.jsx';
import Create_Post from './blog/Create_Post.jsx';
import EditPosts from './blog/EditPosts.jsx';
import Delete_post from './blog/Delete_post.jsx';
import Logout from './login/Logout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {index: true,element: <Home />},
      {path: "posts/:id",element: <Post_Detail />},
      {path: "register",element: <Register />},
      {path: "login",element: <Login/>},
      {path: "profile/:id",element: <User_Profile />},
      {path: "authors",element: <Authors />},
      {path: "create",element: <Create_Post/>},
      {path: "posts/:id/delete",element: <Delete_post/>},
      {path: "posts/:id/edit",element: <EditPosts />},
      {path: "logout",element: <Logout />},      
      {path: "/admin",element: <Delete_post />},      

    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
