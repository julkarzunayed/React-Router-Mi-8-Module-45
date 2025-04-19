import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <nav>
            <h2>This is header</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/laptops">Laptops</NavLink>
        </nav>
    );
};

export default Header;