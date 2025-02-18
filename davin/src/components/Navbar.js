import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#home">Home</a></li>
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#credentials">Credentials</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;