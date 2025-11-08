import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/icons/menu-icon.png";
import CloseIcon from "../assets/icons/close-icon.png";
import EmailIcon from "../assets/icons/email-icon.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={Logo} alt="Varnan Logo" />
      </div>

      {/* Toggle Button */}
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        <img
          src={open ? CloseIcon : MenuIcon}
          alt="menu toggle"
          className="toggle-icon"
        />
      </div>

      {/* Sliding Navbar Content */}
      <nav className={`navbar-menu ${open ? "show" : ""}`}>
        <ul className="nav-links">
          <li>Services</li>
          <li>Their Stories</li>
          <li>Our Story</li>
          <li>Varnan</li>
        </ul>
        <button className="talk-btn">
          Let’s Talk
          <img src={EmailIcon} alt="Email" className="email-icon" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
