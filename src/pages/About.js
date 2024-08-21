import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import '../App.css';

const About = () => {
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
          
          <div className="Event-details">
            <h3 className='Event-title'>° ° ° ° °</h3>
            <p>
            Melee Music is more than just a music collective—it’s a movement dedicated to nurturing and empowering artists in the music industry. Founded with the vision of providing artists with the support and resources they need to succeed, Melee Music brings together a unique blend of musicians, artists, and art lovers who share a passion for quality, creativity, and community.
            </p>
            <p>
            Our sound is a dynamic mix of experimental bass, deep dub, with touches of dubstep, trap, and a sprinkle of hip hop. We’re about pushing boundaries and exploring new sonic landscapes, all while maintaining a deep respect for the roots of these genres. 
            </p>
            <p>
            The name “Melee Music” embodies our ethos of collaboration and resilience. Just like a melee—a close-quarters fight—we work together in tight-knit collaboration, striving to break through the noise of the industry and make our mark. 
            </p>
            <p>
            At the heart of Melee Music is a community that values quality over quantity, and shuns drama and judgment. We’re about creating spaces—both online and in person—where creativity can flourish, and where artists and fans alike can connect over a shared love of music and culture. 
            </p>
            <p>
            Melee Music is all about building a community, one that’s united by a love of music and a commitment to supporting each other as we navigate the challenges of the industry together. Join us, and be part of something special.  
            </p>
            <a href="http://instagram.com/melee_music/" className='custom-button' target="_blank" rel="noopener noreferrer">
                                <FaInstagram  className="button-icon" /> Follow
                 </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
