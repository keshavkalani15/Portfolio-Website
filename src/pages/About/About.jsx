import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { personalInfo, experience, education, certifications, achievements } from '../../data/resumeData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import PixelBlast from '../../components/reactbits/PixelBlast';
import './About.css';

export default function About() {
  useScrollReveal();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page-transition">
      {/* PixelBlast WebGL Background */}
      <div className="about-bg">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color={theme === 'light' ? '#7c3aed' : '#B497CF'}
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <section className="section" id="about-page">
        <div className="container">
          {/* Header */}
          <div className="about-header reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate Developer &<br />Lifelong Learner</h2>
            <p className="section-subtitle">{personalInfo.summary}</p>
          </div>
<br />
          {/* Work Experience Timeline */}
          <div className="about-experience reveal">
            <h2 className="about-section-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Work Experience
            </h2>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <div className="timeline-header">
                      <h3>{exp.company}</h3>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <div className="timeline-role-info">
                      <p className="timeline-degree">{exp.role}</p>
                      <span className="tag experience-type">{exp.type}</span>
                    </div>
                    <ul className="timeline-points">
                      {exp.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <div className="timeline-meta">
                      <span className="timeline-location">📍 {exp.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="about-education reveal">
            <h2 className="about-section-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              Education
            </h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content card">
                    <div className="timeline-header">
                      <h3>{edu.institution}</h3>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <p className="timeline-degree">{edu.degree}</p>
                    {edu.minor && <p className="timeline-minor">{edu.minor}</p>}
                    <div className="timeline-meta">
                      <span className="tag cursor-target">{edu.grade}</span>
                      <span className="timeline-location">📍 {edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="about-achievements reveal">
            <h2 className="about-section-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
              Achievements
            </h2>
            <div className="achievements-grid">
              {achievements.map((item, index) => (
                <div className="achievement-card card" key={index}>
                  <span className="achievement-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="about-certifications reveal">
            <h2 className="about-section-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Certifications
            </h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div className="certification-item" key={index}>
                  <div className="cert-dot"></div>
                  <div>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="cert-note">+ 7 additional certifications in Business Analysis & Tools available on LinkedIn.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
