import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500} className="nav-link">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="nav-link">
        About
      </Link>
      <Link to="projects" smooth={true} duration={500} className="nav-link">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
