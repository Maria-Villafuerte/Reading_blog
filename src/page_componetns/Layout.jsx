import React from 'react';
import HeaderMain from './Header.jsx';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import './layoutStyles.css'; // Importa los estilos CSS

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="header">
        <HeaderMain />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
