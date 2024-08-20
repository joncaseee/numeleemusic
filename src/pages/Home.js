import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <div className="App-logo-container">
          <img src="https://i.imgur.com/5zMAJBi.png" alt="MeleeMusicNet Banner" className="App-logo" />
        </div>
        <h1 className="App-title">MELEE MUSIC</h1>
      </header>

      <main className="Home-main">
        <div className="Event-section">
          <img src="https://i.imgur.com/i5yJ14p.png" alt="Event Flyer" className="Event-flyer" />
          <div className="Event-details">
            <h3 className='Event-title'>Melee Music Block Party 005</h3>
            <h3 className='Event-title'>°°°°°</h3>
            <p>FEATURING: THIS&THAT | DARKSTAR | LERKK | JAWNSIN | VENG | CIPHER | FEELINGS MUTUAL |NODE | NIKK 3 LOV3 | T4C0 | SPECIAL GUEST DJ. [ THIS IS AN 18+ EVENT ] [ ID REQUIRED]</p>
            <a href="https://tickets.meleemusic.net/" className="custom-button">
              <FontAwesomeIcon icon={faLocationDot} className="button-icon" /> Get Location
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
