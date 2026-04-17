import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { personalInfo } from '../../data/resumeData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import RippleDots from '../../components/reactbits/RippleDots';
import './Contact.css';

// Inline success animation — plays paper plane then auto-redirects to home
function SuccessState({ onComplete }) {
  useEffect(() => {
    // After the animation completes (~4s), call onComplete and scroll to home
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="contact-success">
      <div className="sky-container">
        <div className="cloud cloud-1">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>
        <div className="cloud cloud-2">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>
        <div className="cloud cloud-3">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5,19c-2.48,0-4.5-2.02-4.5-4.5c0-0.42,0.06-0.83,0.17-1.21C12.39,12.5,11.23,12,10,12c-2.76,0-5,2.24-5,5s2.24,5,5,5h7.5C18.88,22,20,20.88,20,19.5S18.88,19,17.5,19z M6,17c-1.65,0-3-1.35-3-3s1.35-3,3-3c0.41,0,0.8,0.08,1.16,0.23C7.38,10.5,8.5,10,9.75,10C11.55,10,13,11.45,13,13.25C13,15.32,11.32,17,9.25,17H6z M16.5,14c-1.38,0-2.5-1.12-2.5-2.5S15.12,9,16.5,9S19,10.12,19,11.5S17.88,14,16.5,14z"/></svg>
        </div>
        <div className="paper-plane">
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
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

export default function Contact({ onMessageSentComplete }) {
  useScrollReveal();
  const { theme } = useContext(ThemeContext);
  const [sent, setSent] = useState(false);
  const [sendCount, setSendCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name    = formData.get('name');
    const email   = formData.get('email');
    const message = formData.get('message');

    // Google Forms submission configuration
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScSL3UzqQFSpePcM_NS3kibRwxg562qxupTluQA034Q1LEivg/formResponse';
    
    // Convert native form data into Google's specific entry mappings
    const googleFormData = new FormData();
    googleFormData.append('entry.1723069416', name);
    googleFormData.append('entry.597573801', email);
    googleFormData.append('entry.345422682', message);

    try {
      // Send silently using no-cors (Google blocks CORS for forms, so we submit blindly)
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });
      
      // We assume it succeeded if it gets past the fetch without throwing a network error
      setSent(true);
      setSendCount(prev => prev + 1);
      e.target.reset();
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Oops! Something went wrong while sending your message. Please try again later or email me directly.");
    }
  };

  return (
    <div className="page-transition">
      {/* Dynamic Physics Dot Matrix Background */}
      <div className="contact-bg">
        <RippleDots
          dotSize={1.5}
          gridSpacing={30}
          color={theme === 'light' ? 'rgba(124, 58, 237, 0.4)' : 'rgba(124, 58, 237, 0.15)'}
          interactive={true}
          attract={true}
          effectRadius={180}
        />
      </div>

      <section className="section" id="contact-page">
        <div className="container">

          {sent && <SuccessState key={sendCount} onComplete={() => {
            setSent(false);
            if (onMessageSentComplete) onMessageSentComplete();
          }} />}
          
          <div className="contact-header reveal">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-subtitle">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className="contact-info reveal">
              <div className="contact-card card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-card card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className="contact-card card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>{personalInfo.location}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-socials">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn cursor-target">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn cursor-target">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Resume Download */}
              <a href={personalInfo.resumeFile} download className="btn btn-primary contact-resume-btn cursor-target">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume (PDF)
              </a>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper reveal">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="Your message..." rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary cursor-target" id="contact-submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
