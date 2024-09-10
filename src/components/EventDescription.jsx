import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import './EventDescription.css';

const EventDescription = () => (
  <div className="event-desc-container">
    <h2 className="event-desc-invite">You've been invited to: DANCE + + + + Do you accept? (Y/n):</h2>
    <h3 className="event-desc-lineup">{' DIZZE • CYBERDRIP$ • MAWMIE • STEEZO • T4C0 • MR. CROWLEY • SAMMA w/ GRIM • SUSPENCE '}</h3>
    
    <div className="event-desc-details">
      <p><strong>Date:</strong> September 20, 2024</p>
      <p><strong>Time:</strong> 8pm - Late</p>
      <p><strong>Location:</strong> !** LOCKED **! [ Gain access by purchasing tickets] [Location and ticket sent via email after completing purchase ]</p>
      <p><strong>Age:</strong> 21+</p>
      <p>$20 in advance | $25 at the door | $10 for added re-entry wristband</p>
    </div>
    
    <p className="event-desc-venue">Join us as we takeover a new indoor, underground-style venue located near the old North Warehouse in Portland.</p>
    
    <h3 className="event-desc-expect">WHAT YOU CAN EXPECT:</h3>
    <ul className="event-desc-list">
      <li>• Heavy Bass</li>
      <li>• Great Humans</li>
      <li>• Killer Vibes</li>
      <li>• Bar area situated to the left of the the stage</li>
      <li>• Water station near the bar</li>
      <li>• Bathroom with running water</li>
      <li>• Smoking area is limited so please be brief if you do partake</li>
      <li>• Friendly Event Staff</li>
      <li>• Professional Security Staff</li>
      <li>• Parking can be found on surrounding streets</li>
    </ul>
    
    <p className="event-desc-reentry">To help maintain minimal activity in front of the venue, re-entry will be allowed with a $10 fee if you need to step out and return. This is a one time fee that will allow you to leave and enter the venue as you wish. However, please keep in mind that gathering in front of the venue is <strong>not allowed</strong>.</p>
    
    <p className="event-desc-contact">
      If you have any questions, please do not hesitate to reach out to us at <a href="mailto:support@meleemusic.net">support@meleemusic.net</a> or on instagram @melee_music
    </p>
    
    <p className="event-desc-outro">We are excited to have you with us as we continue exploring sounds of the underground.</p>
    <p className="event-desc-outro">See you soon! 😈</p>

   
  </div>
);

export default EventDescription;