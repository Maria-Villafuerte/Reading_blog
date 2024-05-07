import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './headerMainStyles.css';

function HeaderMain({ id }) {
  return (
    <nav>
      <div className="header-main-container">
        <Link to="/" className="nav_logo header-main-logo">
          {/* <img src={} alt=''></img> */}
        </Link>
        <ul className="nav_menu">
          <li><Link to="/profile">Pato Cuak</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <button className="nav__tog-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
}

export default HeaderMain;
