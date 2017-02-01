import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/home" >Home</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
