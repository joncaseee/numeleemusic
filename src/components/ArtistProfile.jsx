import React from 'react';
import { useParams } from 'react-router-dom';
import { getArtistByAlias } from '../data/artists';
import './ArtistProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faSpotify, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope

function ArtistProfile() {
  const { alias } = useParams();
  const artist = getArtistByAlias(alias);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const getSocialIcon = (link) => {
    if (link.includes('facebook.com')) {
      return <FontAwesomeIcon icon={faFacebook} />;
    } else if (link.includes('instagram.com')) {
      return <FontAwesomeIcon icon={faInstagram} />;
    } else if (link.includes('x.com')) {
      return <FontAwesomeIcon icon={faTwitter} />;
    }
    return null; // Return null if no matching icon is found
  };

  const getStreamingIcon = (link) => {
    if (link.includes('spotify.com')) {
      return <FontAwesomeIcon icon={faSpotify} />;
    } else if (link.includes('apple.com')) {
      return <FontAwesomeIcon icon={faApple} />;
    } else if (link.includes('youtube.com')) {
      return <FontAwesomeIcon icon={faYoutube} />;
    }
    return null; // Return null if no matching icon is found
  };

  return (
    <div>
      <div className="artist-profile">
        <h1>{artist.alias}</h1>
        <div className="artist-photo">
          <img src={artist.photoUrl} alt={artist.alias} />
        </div>
        <div className="social-links">
          {artist.socialLinks && artist.socialLinks.map((link, index) => (
            <a href={link} key={index} className="social-link" target="_blank" rel="noopener noreferrer">
              {getSocialIcon(link)}
            </a>
          ))}
        </div>
        <div className="streaming-links">
          {artist.streamingLinks && artist.streamingLinks.map((link, index) => (
            <a href={link} key={index} className="streaming-link" target="_blank" rel="noopener noreferrer">
              {getStreamingIcon(link)}
            </a>
          ))}
        </div>
        <div>
          <a href={`mailto:${artist.email}`} className="custom-button">
            <FontAwesomeIcon icon={faEnvelope} className="button-icon" /> Boonkings & Inquiries
          </a>
        </div>
      </div>
      <div className="artist-embed">
        {artist.embeddedContent && <div dangerouslySetInnerHTML={{ __html: artist.embeddedContent }} />}
      </div>
    </div>
  );
}

export default ArtistProfile;
