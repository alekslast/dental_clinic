import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="home--epigraph">
           <div className="epigraph--logo">
                <h2>3:16</h2>
           </div>
                <hr />
                <p>Fiindca atat de mult a iubit Dumnezeu...</p>
      </div>

      <div className="menu">
          <div className="menu--text">
            <p>Comanda de profesioniști la Aviagorodok</p> 
          </div>
      
      </div>
     

      <div className="phone">
        <p>+373 22 52 41 97<br/>mob: 0gi60 107 070 </p>
      </div>
    </header>
  );
};

export default Header;
