// src/components/ArtistProfile.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { getArtists } from '../data/artists'; // Adjust path if necessary

function ArtistProfile() {
  const { alias } = useParams();
  const artists = getArtists();
  const artist = artists.find(a => a.alias === alias);

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
        {artist.socialLinks.map((link, index) => (
          <a href={link} key={index} target="_blank" rel="noopener noreferrer">
            {/* Add icons or text for social links */}
          </a>
        ))}
      </div>
      <div className="streaming-links">
        {artist.streamingLinks.map((link, index) => (
          <a href={link} key={index} target="_blank" rel="noopener noreferrer">
            {/* Add icons or text for streaming links */}
          </a>
        ))}
      </div>
      <div className="embedded-content" dangerouslySetInnerHTML={{ __html: artist.embeddedContent }} />
    </div>
  );
}

export default ArtistProfile;
