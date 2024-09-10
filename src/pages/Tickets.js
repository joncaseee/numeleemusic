import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Tickets = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [widgetError, setWidgetError] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        setWidgetLoaded(true);
        setWidgetError(false);
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          const style = iframeDoc.createElement('style');
          style.textContent = `
            body { background-color: black !important; }
            .btn-primary { background-color: black !important; border-color: white !important; }
          `;
          iframeDoc.head.appendChild(style);
        } catch (e) {
          console.error('Failed to modify iframe content:', e);
        }
      };
      iframe.onerror = () => {
        console.error('Failed to load TicketsCandy widget');
        setWidgetError(true);
      };
    }
  }, []);

  const retryLoadWidget = () => {
    setWidgetError(false);
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="Tickets">
      <div className="event-card">
        <div className="event-card-content">
          <h1 className="event-title">MELEE DOJO VOL 001</h1>
          <div className="event-details">
            <div className="detail-column">
              <FontAwesomeIcon icon={faCalendar} className="fa-icon" />
              <h3>Date</h3>
              <p>September 20, 2024</p>
            </div>
            <div className="detail-column">
              <FontAwesomeIcon icon={faClock} className="fa-icon" />
              <h3>Time</h3>
              <p>8:00 PM - 4:00 AM</p>
            </div>
            <div className="detail-column">
              <FontAwesomeIcon icon={faLocationDot} className="fa-icon" />
              <h3>Location</h3>
              <p>Secret Indoor Location, PDX</p>
            </div>
            <div className="detail-column">
              <FontAwesomeIcon icon={faUser} className="fa-icon" />
              <h3>Age</h3>
              <p>21+ Event</p>
            </div>
          </div>
        </div>
        <div className="event-flyer">
          <img src="https://i.imgur.com/6F3V999.png" alt="MELEE DOJO VOL 001 Event Flyer" />
        </div>
      </div>
    
      <main className="Tickets-main">
        <div className="payment-link">
          <p>
            If you wish to use Google Pay or Apple Pay, please{' '}
            <a href="https://ticketscandy.com/e/melee-dojo-vol-001-6353" target="_blank" rel="noopener noreferrer">
              click here
            </a>.
          </p>
        </div>
        <div className="widget-container">
          {widgetError ? (
            <div className="widget-error">
              <p>Failed to load the ticket widget. Please try again later.</p>
              <button onClick={retryLoadWidget} className="custom-button">Retry</button>
            </div>
          ) : (
            <div className="widget-container">
              <iframe
                className='ticket-widget'
                ref={iframeRef}
                src="https://ticketscandy.com/e/6353/embed"
                width="100%"
                height="600"
                frameBorder="0"
                title="TicketsCandy Widget"
              ></iframe>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Tickets;