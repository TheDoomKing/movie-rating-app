import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <img src={logo} className="Logo" alt="logo" />
            <nav>
              <ul id="Menu">
                    <li className="Item"><Link to="/">Home</Link></li>
                    <li className="Item"><Link to="/ratings">Ratings</Link></li>
                    <li className="Item"><Link to="/about">About</Link></li>
               </ul>
            </nav>
        </header>
    );
}

export default Header;