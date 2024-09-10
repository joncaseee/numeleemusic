import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar({ setLoading }) {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [overlay, setOverlay] = useState("");

  const navigate = useNavigate();

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
      setToggleIcon("nav__toggler toggle");
      setOverlay("overlay-active");
    } else {
      setActive("nav__menu");
      setToggleIcon("nav__toggler");
      setOverlay("");
    }
  };

  const handleLinkClick = (path) => {
    if (path === '/shop') {
      setLoading(true);
      setTimeout(() => {
        window.location.href = "https://shop.meleemusic.net";
      }, 1000);
    } else {
      navigate(path);
      navToggle();
    }
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav__brand">Melee Music</Link>
        <ul className={active}>
          <li className="nav__item"><Link to="/" className="nav__link" onClick={() => handleLinkClick('/')}>Home</Link></li>
          <li className="nav__item"><Link to="/artists" className="nav__link" onClick={() => handleLinkClick('/artists')}>Artists</Link></li>
          <li className="nav__item"><span className="nav__item" onClick={() => handleLinkClick('/shop')}>Shop</span></li>
          <li className="nav__item"><Link to="/mixes" className="nav__link" onClick={() => handleLinkClick('/mixes')}>Mixes</Link></li>
          <li className="nav__item"><Link to="/tickets" className="nav__link" onClick={() => handleLinkClick('/tickets')}>Tickets</Link></li>
          <li className="nav__item"><Link to="/About" className="nav__link" onClick={() => handleLinkClick('/about')}>About</Link></li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className={`overlay ${overlay}`} onClick={navToggle}></div>
    </>
  );
}

export default Navbar;