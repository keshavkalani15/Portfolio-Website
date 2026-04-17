import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { personalInfo } from '../../data/resumeData';
import Particles from '../../components/reactbits/Particles';
import DecryptedText from '../../components/reactbits/DecryptedText';
import RotatingText from '../../components/reactbits/RotatingText';
import CountUp from '../../components/CountUp';
import './Home.css';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="page-transition">
      {/* ===== HERO SECTION ===== */}
      <section className="home-hero" id="hero-section">
        <div className="hero-particles">
          <Particles
            particleCount={250}
            particleSpread={12}
            speed={0.08}
            particleColors={
              theme === 'light' 
              ? ['#7c3aed', '#a78bfa', '#6d28d9', '#818cf8', '#1a1a24']
              : ['#7c3aed', '#a78bfa', '#6d28d9', '#818cf8', '#ffffff']
            }
            moveParticlesOnHover={true}
            particleHoverFactor={2}
            alphaParticles={true}
            particleBaseSize={120}
            sizeRandomness={1.5}
            cameraDistance={22}
          />
        </div>

        <div className="hero-content">
          <p className="hero-greeting">Hello, I&apos;m</p>

          <h1 className="hero-name">
            <DecryptedText
              text={personalInfo.name}
              speed={60}
              maxIterations={15}
              sequential={true}
              revealDirection="start"
              animateOn="view"
              className="decrypted-char"
              encryptedClassName="encrypted-char"
            />
          </h1>

          <div className="hero-roles">
            <span>I&apos;m a </span>
            <RotatingText
              texts={personalInfo.roles}
              mainClassName="rotating-wrapper"
              staggerFrom="first"
              staggerDuration={0.03}
              splitBy="characters"
              rotationInterval={2500}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
          </div>

          <p className="hero-summary">
            Passionate about building scalable web applications and leveraging
            AI to solve real-world problems. Currently pursuing B.E. in Computer
            Engineering at Wadia College, Pune.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary cursor-target"
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
              View Projects
            </button>
            <a
              href={personalInfo.resumeFile}
              download
              className="btn btn-outline cursor-target"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number"><CountUp end={9.73} decimals={2} duration={2} /></div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUp end={230} suffix="+" duration={2.5} /></div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUp end={6} suffix="+" duration={3} /></div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUp end={15} suffix="+" duration={3.5} /></div>
              <div className="stat-label">Certifications</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
