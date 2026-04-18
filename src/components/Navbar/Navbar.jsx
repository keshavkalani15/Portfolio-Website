import { useState, useEffect, useCallback, useContext } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { scrollY } = useScroll();

  // High-reliability transforms for production
  // Maps scroll position [0-80px] to glass effect values
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const blurBase = useTransform(scrollY, [0, 80], [0, 20]);

  // Smoothing the values to prevent jitter
  const smoothBgOpacity = useSpring(bgOpacity, { stiffness: 100, damping: 20 });
  const smoothBlur = useSpring(blurBase, { stiffness: 100, damping: 20 });

  // Compute dynamic styles based on theme
  const glassColor = theme === 'dark' ? 'rgba(10, 10, 15, 0.75)' : 'rgba(255, 255, 255, 0.85)';
  const borderColor = theme === 'dark' ? 'rgba(34, 34, 51, 0.5)' : 'rgba(220, 220, 228, 0.6)';

  // IntersectionObserver — highlight whichever section is most visible
  useEffect(() => {
    const observers = [];
    const visible = {};   // sectionId -> intersectionRatio

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          visible[id] = entry.intersectionRatio;
          // pick the section with the highest ratio
          const topId = Object.entries(visible).sort((a, b) => b[1] - a[1])[0]?.[0];
          if (topId) setActiveId(topId);
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height')) || 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  // Sync scrollY value for the border-bottom visibility
  const [hasBorder, setHasBorder] = useState(false);
  useEffect(() => {
    return scrollY.on("change", (latest) => setHasBorder(latest > 80));
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className="navbar"
        id="main-navbar"
        style={{
          backgroundColor: useTransform(smoothBgOpacity, [0, 1], ['rgba(0,0,0,0)', glassColor]),
          backdropFilter: useTransform(smoothBlur, (v) => `blur(${v}px) saturate(160%)`),
          WebkitBackdropFilter: useTransform(smoothBlur, (v) => `blur(${v}px) saturate(160%)`),
          borderBottom: hasBorder ? `1px solid ${borderColor}` : '1px solid transparent',
          boxShadow: hasBorder ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="navbar-inner">
          {/* Draggable logo — scrolls to top on click */}
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            whileDrag={{ scale: 1.2, zIndex: 9999, cursor: 'grabbing' }}
            style={{ cursor: 'grab', display: 'inline-block' }}
          >
            <button
              className="navbar-logo"
              onClick={() => scrollTo('home')}
              draggable="false"
              style={{ userSelect: 'none', background: 'none', border: 'none' }}
            >
              <span draggable="false">K</span>
              <span className="accent" draggable="false">K</span>
            </button>
          </motion.div>

          {/* Desktop links */}
          <div className="navbar-links">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`cursor-target ${activeId === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="navbar-actions">
            <button
              className="theme-toggle cursor-target"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div
            className={`navbar-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span /><span /><span />
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <div className={`navbar-mobile ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`cursor-target ${activeId === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
