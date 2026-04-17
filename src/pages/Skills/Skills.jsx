import { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { skills } from '../../data/resumeData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LetterGlitch from '../../components/reactbits/LetterGlitch';
import './Skills.css';

// Map categories to icons and descriptions
const categoryMeta = {
  Languages: {
    icon: '⚡',
    description: 'Core programming languages I work with daily.',
  },
  'Web Technologies': {
    icon: '🌐',
    description: 'Frameworks and tools for building modern web applications.',
  },
  'AI & Data Science': {
    icon: '🤖',
    description: 'Machine learning frameworks and data analysis libraries.',
  },
  Databases: {
    icon: '🗄️',
    description: 'Database management systems for structured and unstructured data.',
  },
  'Developer Tools': {
    icon: '🛠️',
    description: 'Tools that power my development workflow.',
  },
};

export default function Skills() {
  useScrollReveal();
  const { theme } = useContext(ThemeContext);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        bgRef.current.style.setProperty('--mouse-x', `${x}%`);
        bgRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="page-transition relative">

      {/* LetterGlitch Background with Spotlight */}
      <div className="skills-bg" ref={bgRef}>
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          theme={theme}
        />
      </div>

      <section className="section" id="skills-page">
        <div className="container">
          <div className="skills-header reveal">
            <span className="section-label">Technical Skills</span>
            <h2 className="section-title">Technologies I Work With</h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning full-stack development, AI/ML, and
              modern developer tooling.
            </p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => {
              const meta = categoryMeta[category] || { icon: '📦', description: '' };
              return (
                <div className="skill-category card reveal" key={category}>
                  <div className="skill-category-header">
                    <span className="skill-category-icon">{meta.icon}</span>
                    <div>
                      <h3>{category}</h3>
                      <p>{meta.description}</p>
                    </div>
                  </div>
                  <div className="skill-tags">
                    {items.map((skill, index) => (
                      <span className="tag cursor-target" key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
