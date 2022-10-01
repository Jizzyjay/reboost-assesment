import React from "react";
import "../Style/Navbar.css";
import { slide as Menu } from "react-burger-menu";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleStateChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Menu
        animation="push"
        right={true}
        onStateChange={() => handleStateChange()}
      >
        {/* <NavLink to="/" onClick={() => closeMenu()}> */}
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          Services
        </a>
        <a id="about" className="menu-item" href="/about">
          About Us
        </a>
        <a id="about" className="menu-item" href="/about">
          Work
        </a>
        <a id="about" className="menu-item" href="/about">
          Career
        </a>
        <a id="about" className="menu-item" href="/about">
          Sign Up/Login
        </a>
        {/* </NavLink> */}
        {/* <Link onClick={() => closeMenu()} className="menu-item" to="">
    
          Home
        </Link>
        <Link
          onClick={() => closeMenu()}
          className="menu-item"
          to=""
        >
          About
        </Link> */}
      </Menu>
      

    </div>
  );
}

export default Navbar;
