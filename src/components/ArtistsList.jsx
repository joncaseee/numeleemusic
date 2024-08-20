// src/components/ArtistsList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../data/artists';
import './Artists.css'; // Import the CSS file

function ArtistsList() {
  const artists = getArtists();

  return (
    <div>
      <h1 className='artistTitle'>Artists</h1>
      <p>° ° ° ° °</p>
      <div className="artists-list">
        {artists.map(artist => (
          <div key={artist.alias} className="artist-item">
            <Link to={`/artists/${artist.alias}`}>
              <img src={artist.photoUrl} alt={artist.alias} />
              <h2>{artist.alias}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistsList;
