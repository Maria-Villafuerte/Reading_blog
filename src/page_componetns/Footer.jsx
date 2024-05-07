import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <footer className="footer">
      <ul className="footer_category">
        <p>Thanks for coming!</p>
        <li><Link to="authors">More about me</Link></li>
        <p>gmail:</p>
      </ul>
     </footer>
  );
}

export default Footer;
