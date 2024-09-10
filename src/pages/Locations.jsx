import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Locations = () => {
  const coordinates = { lat: 45.54157, lng: -122.67712 };
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;

  return (
    <div className="Locations">
      <header className="App-header">
        <div className="App-logo-container">
          <img src="https://i.imgur.com/iIWuBUt.png" alt="Melee Dojo Logo" className="App-logo" />
        </div>
        <h2 className="App-subtitle">presented by Melee Music</h2>
      </header>

      <main className="Locations-main">
        <section className="arrival-instructions">
          <h3>Event Arrival Instructions</h3>
          <ul>
            <li>Parking can be found on surrounding streets</li>
            <li>Enter through the fence door on the right side of the venue</li>
            <li>Follow the path around the corner</li>
            <li>Please have ID ready</li>
            <li>Enjoy!</li>
          </ul>
        </section>

        <section className="coordinates">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <p>45.54157° N, 122.67712° W</p>
        </section>

        <a href={mapsUrl} className="custom-button" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="button-icon" />
          Open in Maps
        </a>
      </main>
    </div>
  );
};

export default Locations;