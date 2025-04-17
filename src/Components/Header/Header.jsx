import React from 'react';
import { Link } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/mobiles">Mobile</Link>
               <Link to="/laptops">Laptops</Link>
               
            </nav>
        </div>
    );
};

export default Header;