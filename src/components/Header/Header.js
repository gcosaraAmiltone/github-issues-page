import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-link">
        Github Issues Page
      </Link>
    </div>
  );
}

export default Header;
