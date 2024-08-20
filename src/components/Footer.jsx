/* src/components/Footer.jsx */
import React from 'react';
import './footer.css';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/artists">Artists</a></li>
                        <li><a href="/shop">Shop</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <ul className="social-links">
                        <li>
                            <a href="http://instagram.com/melee_music/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section about">
          <h2>MELEE MUSIC</h2>
          <p>Your go-to platform for underground DJs and festival circuits. Join us and be part of the movement.</p>
        </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Melee Music. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
