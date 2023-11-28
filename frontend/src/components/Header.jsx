import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="home--epigraph">
                <h2>3:16</h2>
                <hr />
                <p>Fiindca atat de mult a iubit Dumnezeu...</p>
      </div>

      <nav className="menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
      </nav>

      <div className="phone">
        <p>022 525252</p>
      </div>
    </header>
  );
};

export default Header;
