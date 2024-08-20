// src/components/ArtistProfile.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { getArtistByAlias } from '../data/artists'; // Adjust path as necessary
import './ArtistProfile.css'; // Add styles if necessary

function ArtistProfile() {
  const { alias } = useParams();
  const artist = getArtistByAlias(alias); // Function to get artist data by alias

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-profile">
      <h1>{artist.alias}</h1>
      <div className="artist-photo">
        <img src={artist.photoUrl} alt={artist.alias} />
      </div>
      <div className="social-links">
        {artist.socialLinks && artist.socialLinks.map((link, index) => (
          <a href={link} key={index} className="social-link" target="_blank" rel="noopener noreferrer">
            {/* Add appropriate icon here */}
          </a>
        ))}
      </div>
      <div className="streaming-links">
        {artist.streamingLinks && artist.streamingLinks.map((link, index) => (
          <a href={link} key={index} className="streaming-link" target="_blank" rel="noopener noreferrer">
            {/* Add appropriate icon here */}
          </a>
        ))}
      </div>
      <div className="embedded-content">
        {artist.embeddedContent && <div dangerouslySetInnerHTML={{ __html: artist.embeddedContent }} />}
      </div>
    </div>
  );
}

export default ArtistProfile;
