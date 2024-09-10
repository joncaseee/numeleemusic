import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/artists">Artists</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/mixes">Mixes</Link></li>
                        <li><Link to="/tickets">Tickets</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/terms">Terms</Link></li>
                        <li><Link to="/rules">Rules</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-links">
                        <li>
                            <a href="http://instagram.com/melee_music/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram /> Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section about">
                    <h3>MELEE MUSIC</h3>
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