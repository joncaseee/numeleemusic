import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation and useNavigate for programmatic navigation
import './navbar.css';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [overlay, setOverlay] = useState("");  // New state for overlay
  const navigate = useNavigate(); // Initialize useNavigate hook

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      setToggleIcon("nav__toggler toggle");
      setOverlay("overlay-active");  // Show overlay when menu is active
    } else {
      setActive("nav__menu");
      setToggleIcon("nav__toggler");
      setOverlay("");  // Hide overlay when menu is inactive
    }
  };

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the specified path
    navToggle(); // Close the menu
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav__brand">Melee Music</Link>
        <ul className={active}>
          <li className="nav__item"><Link to="/" className="nav__link" onClick={() => handleLinkClick('/')}>Home</Link></li>
          <li className="nav__item"><Link to="/artists" className="nav__link" onClick={() => handleLinkClick('/artists')}>Artists</Link></li>
          <li className="nav__item"><Link to="/shop" className="nav__link" onClick={() => handleLinkClick('/shop')}>Shop</Link></li>
          <li className="nav__item"><Link to="/mixes" className="nav__link" onClick={() => handleLinkClick('/mixes')}>Mixes</Link></li>
          <li className="nav__item"><Link to="/about" className="nav__link" onClick={() => handleLinkClick('/about')}>About</Link></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className={`overlay ${overlay}`} onClick={navToggle}></div> {/* Overlay element */}
    </>
  );
}

export default Navbar;
