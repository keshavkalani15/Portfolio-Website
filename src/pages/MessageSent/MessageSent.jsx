import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MessageSent.css';

export default function MessageSent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timeoutDesc = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeoutDesc);
  }, [navigate]);

  return (
    <div className="message-sent-container page-transition">
      <div className="sky-container">
        {/* Animated clouds in background */}
        <div className="cloud cloud-1">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>
        <div className="cloud cloud-2">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>
        <div className="cloud cloud-3">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>

        {/* The Paper Plane */}
        <div className="paper-plane">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          
          {/* Engine Trail lines */}
          <div className="trail trail-1"></div>
          <div className="trail trail-2"></div>
        </div>
      </div>

      <div className="success-text">
        <h2 className="gradient-text">Message Delivered!</h2>
        <p>Your message is soaring through the digital sky.</p>
        <p className="redirecting-msg">Bringing you back home...</p>
      </div>
    </div>
  );
}
