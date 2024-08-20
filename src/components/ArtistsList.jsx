// src/components/ArtistsList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../data/artists';
import './Artists.css'; // Import the CSS file

function ArtistsList() {
  const artists = getArtists();

  return (
    <div className="artists-list">
      {artists.map(artist => (
        <div key={artist.alias} className="artist-item">
          <Link to={`/pages/${artist.alias}`}>
            <img src={artist.photoUrl} alt={artist.alias} />
            <h2>{artist.alias}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArtistsList;
