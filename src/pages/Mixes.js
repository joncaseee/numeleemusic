import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import '../App.css';

const Mixes = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <div className="App-logo-container">
          <img src="https://i.imgur.com/5zMAJBi.png" alt="MeleeMusicNet Banner" className="App-logo" />
        </div>
        <h1 className="App-title">MELEE MIX SERIES</h1>
      </header>

      <main className="Home-main">
        <div className="Event-section">
        <h2 className="App-title">coming soon.</h2>
          <div className="Event-details">
            <h3 className='Event-title'>° ° ° ° °</h3>
           
                 <a href="http://instagram.com/melee_music/" className='custom-button' target="_blank" rel="noopener noreferrer">
                                <FaInstagram  className="button-icon" /> Follow
                 </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mixes;
