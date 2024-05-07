import React from 'react';
import HeaderMain from './Header.jsx';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import './footerStyles.css'; // Importa los estilos CSS


const Layout = () => {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <div className='ee'>
      <Footer />
      </div>
    </>
  );
}

export default Layout;
